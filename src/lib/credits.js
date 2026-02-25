import { supabase } from "@/lib/supabase";

/**
 * Checks if the user has enough credits to perform an action.
 * @param {string} userId - The user ID.
 * @param {string} type - 'resume' or 'latex'.
 * @returns {Promise<boolean>}
 */
export async function checkCredits(userId, type = 'resume') {
    try {
        const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select('plan')
            .eq('id', userId)
            .single();

        if (profileError) throw profileError;

        // Premium users have unlimited credits (mock logic)
        if (profile.plan === 'premium') return true;

        // Free users: Check monthly usage
        const currentMonth = new Date().toISOString().slice(0, 7); // YYYY-MM
        const { data: usage, error: usageError } = await supabase
            .from('usage')
            .select('resumes_generated, latex_generations')
            .eq('user_id', userId)
            .eq('month_year', currentMonth)
            .maybeSingle();

        if (usageError && usageError.code !== 'PGRST116') throw usageError;

        if (!usage) return true; // No usage yet this month

        if (type === 'resume' && usage.resumes_generated >= 1) return false;
        if (type === 'latex' && usage.latex_generations >= 3) return false;

        return true;
    } catch (error) {
        console.error("Credit Check Error:", error.message);
        return false;
    }
}

/**
 * Increments usage for a user.
 */
export async function incrementUsage(userId, type = 'resume') {
    const currentMonth = new Date().toISOString().slice(0, 7);

    try {
        const { data, error } = await supabase.rpc('increment_usage', {
            u_id: userId,
            m_y: currentMonth,
            u_type: type
        });

        if (error) {
            // Fallback if RPC isn't available: Standard upsert
            const { data: existing } = await supabase
                .from('usage')
                .select('*')
                .eq('user_id', userId)
                .eq('month_year', currentMonth)
                .maybeSingle();

            if (existing) {
                const field = type === 'resume' ? 'resumes_generated' : 'latex_generations';
                await supabase
                    .from('usage')
                    .update({ [field]: existing[field] + 1 })
                    .eq('id', existing.id);
            } else {
                await supabase
                    .from('usage')
                    .insert([{
                        user_id: userId,
                        month_year: currentMonth,
                        resumes_generated: type === 'resume' ? 1 : 0,
                        latex_generations: type === 'latex' ? 1 : 0
                    }]);
            }
        }
    } catch (error) {
        console.error("Increment Usage Error:", error);
    }
}
export async function getUsage(userId) {
    if (!userId) return { resumes_generated: 0, latex_generations: 0 };

    const currentMonth = new Date().toISOString().slice(0, 7);

    // Defensive check
    if (!supabase || !supabase.from) {
        console.error("Supabase client not initialized in getUsage");
        return { resumes_generated: 0, latex_generations: 0 };
    }

    try {
        const { data, error } = await supabase
            .from('usage')
            .select('*')
            .eq('user_id', userId)
            .eq('month_year', currentMonth)
            .maybeSingle();

        if (error && error.code !== 'PGRST116') throw error;

        return data || { resumes_generated: 0, latex_generations: 0 };
    } catch (error) {
        console.error("❌ GET USAGE CRITICAL ERROR:", error);
        console.error("Error name:", error?.name);
        console.error("Error message:", error?.message);
        console.error("Error stack:", error?.stack);
        return { resumes_generated: 0, latex_generations: 0 };
    }
}
