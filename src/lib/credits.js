import { supabase } from "@/lib/supabase";

/**
 * Unlimited credits system for Open-Source model.
 */

export const LIMITS = {
    free: {
        resume: 1000000,
        ai_refines: 1000000,
        latex: 1000000
    },
    premium: {
        resume: 1000000,
        ai_refines: 1000000,
        latex: 1000000
    }
};

export async function checkCredits(userId, type = 'resume', customClient = null) {
    // Open Source: Everyone has unlimited credits
    return true;
}

export async function incrementUsage(userId, type = 'resume', customClient = null) {
    // We still track usage for analytics/stats, but it doesn't limit anything
    const client = customClient || supabase;
    try {
        const { data: profile } = await client
            .from('profiles')
            .select('plan, created_at')
            .eq('id', userId)
            .single();

        const cycleStart = new Date().toISOString().slice(0, 7); // YYYY-MM simplified

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
        console.error("Increment Usage Error (Non-blocking):", error);
    }
}

export async function getUsage(userId, customClient = null) {
    if (!userId) return { resumes_generated: 0, latex_generations: 0, ai_refines: 0 };
    const client = customClient || supabase;

    try {
        const cycleStart = new Date().toISOString().slice(0, 7);
        const { data } = await client
            .from('usage')
            .select('*')
            .eq('user_id', userId)
            .eq('month_year', cycleStart)
            .maybeSingle();

        return data || { resumes_generated: 0, latex_generations: 0, ai_refines: 0 };
    } catch (error) {
        return { resumes_generated: 0, latex_generations: 0, ai_refines: 0 };
    }
}
