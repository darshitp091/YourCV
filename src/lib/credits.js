import { supabase } from "@/lib/supabase";
import {
    differenceInMonths,
    addMonths,
    format,
    startOfDay,
    parseISO
} from "date-fns";

/**
 * Calculates the start date of the current billing cycle.
 * For example, if joined Jan 15 and today is Feb 20, cycle start is Feb 15.
 * @param {string} baseDateStr - ISO date string (created_at or plan_started_at)
 * @returns {string} - YYYY-MM-DD
 */
export function getCurrentCycleStart(baseDateStr) {
    if (!baseDateStr) return format(new Date(), 'yyyy-MM-01');

    const baseDate = startOfDay(parseISO(baseDateStr));
    const today = startOfDay(new Date());

    // Calculate how many full months have passed since baseDate
    const monthsPassed = differenceInMonths(today, baseDate);

    // The current cycle started 'monthsPassed' months after baseDate
    const cycleStart = addMonths(baseDate, monthsPassed);

    return format(cycleStart, 'yyyy-MM-dd');
}

// Credit limits
export const LIMITS = {
    free: {
        resume: 5,
        ai_refines: 10
    },
    premium: {
        resume: 30,
        ai_refines: 100
    }
};

/**
 * Checks if the user has enough credits to perform an action.
 * @param {string} userId - The user ID.
 * @param {string} type - 'resume', 'latex', or 'ai_refines'.
 * @param {object} customClient - Optional authenticated Supabase client (Server Side).
 * @returns {Promise<boolean>}
 */
export async function checkCredits(userId, type = 'resume', customClient = null) {
    const client = customClient || supabase;
    try {
        const { data: profile, error: profileError } = await client
            .from('profiles')
            .select('plan, plan_started_at, created_at')
            .eq('id', userId)
            .single();

        if (profileError) throw profileError;

        // Determine the base date for the billing cycle
        // If premium, use plan_started_at. If free, use created_at.
        const baseDate = profile.plan === 'premium' ? profile.plan_started_at : profile.created_at;
        const cycleStart = getCurrentCycleStart(baseDate);

        const userPlan = profile.plan || 'free';
        const limits = LIMITS[userPlan];

        if (type === 'resume') {
            // "Permanent Slots" logic: Check usage.resumes_generated instead of DB count
            const { data: usage, error: usageError } = await client
                .from('usage')
                .select('resumes_generated')
                .eq('user_id', userId)
                .eq('month_year', cycleStart) // Slots are technically "lifetime" but we track per cycle for simplicity in free/premium transitions
                .maybeSingle();

            if (usageError && usageError.code !== 'PGRST116') throw usageError;

            const count = usage?.resumes_generated || 0;
            return count < limits.resume;
        }

        // Cycle-based consumption logic
        const { data: usage, error: usageError } = await client
            .from('usage')
            .select('*')
            .eq('user_id', userId)
            .eq('month_year', cycleStart)
            .maybeSingle();

        if (usageError && usageError.code !== 'PGRST116') throw usageError;
        if (!usage) return true;

        if (type === 'latex' && usage.latex_generations >= limits.latex) return false;
        if (type === 'ai_refines' && (usage.ai_refines || 0) >= limits.ai_refines) return false;

        return true;
    } catch (error) {
        console.error("Credit Check Error:", error.message);
        return false;
    }
}

/**
 * Increments usage for a user.
 */
export async function incrementUsage(userId, type = 'resume', customClient = null) {
    const client = customClient || supabase;
    try {
        const { data: profile } = await client
            .from('profiles')
            .select('plan, plan_started_at, created_at')
            .eq('id', userId)
            .single();

        const baseDate = profile.plan === 'premium' ? profile.plan_started_at : profile.created_at;
        const cycleStart = getCurrentCycleStart(baseDate);

        // Standard upsert logic for the personalized cycle
        const { data: existing } = await client
            .from('usage')
            .select('*')
            .eq('user_id', userId)
            .eq('month_year', cycleStart)
            .maybeSingle();

        if (existing) {
            const fieldMap = {
                'resume': 'resumes_generated',
                'latex': 'latex_generations',
                'ai_refines': 'ai_refines'
            };
            const field = fieldMap[type] || 'resumes_generated';

            await client
                .from('usage')
                .update({ [field]: (existing[field] || 0) + 1 })
                .eq('id', existing.id);
        } else {
            await client
                .from('usage')
                .insert([{
                    user_id: userId,
                    month_year: cycleStart,
                    resumes_generated: type === 'resume' ? 1 : 0,
                    latex_generations: type === 'latex' ? 1 : 0,
                    ai_refines: type === 'ai_refines' ? 1 : 0
                }]);
        }
    } catch (error) {
        console.error("Increment Usage Error:", error);
    }
}

/**
 * Gets usage for the current billing cycle.
 */
export async function getUsage(userId, customClient = null) {
    if (!userId) return { resumes_generated: 0, latex_generations: 0, ai_refines: 0 };
    const client = customClient || supabase;

    try {
        const { data: profile } = await client
            .from('profiles')
            .select('plan, plan_started_at, created_at')
            .eq('id', userId)
            .single();

        const baseDate = profile.plan === 'premium' ? profile.plan_started_at : profile.created_at;
        const cycleStart = getCurrentCycleStart(baseDate);

        const { data, error } = await client
            .from('usage')
            .select('*')
            .eq('user_id', userId)
            .eq('month_year', cycleStart)
            .maybeSingle();

        if (error && error.code !== 'PGRST116') throw error;

        return data || { resumes_generated: 0, latex_generations: 0, ai_refines: 0 };
    } catch (error) {
        console.error("❌ GET USAGE CRITICAL ERROR:", error);
        return { resumes_generated: 0, latex_generations: 0, ai_refines: 0 };
    }
}
