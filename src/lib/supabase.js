import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (typeof window !== 'undefined') {
    if (!supabaseUrl || supabaseUrl.includes('placeholder')) {
        console.error("❌ SUPABASE CONFIG ERROR: NEXT_PUBLIC_SUPABASE_URL is missing or invalid in the browser.", {
            url: supabaseUrl,
            hasKey: !!supabaseAnonKey
        });
    } else {
        console.log("✅ Supabase initialized with URL:", supabaseUrl);
    }
}

export const supabase = createClient(
    supabaseUrl || "https://placeholder-url.supabase.co",
    supabaseAnonKey || "placeholder-anon-key"
);
