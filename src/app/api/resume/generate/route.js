import { NextResponse } from "next/server";
import { refineWithAI } from "@/lib/pollinations";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { checkCredits, incrementUsage } from "@/lib/credits";

export async function POST(req) {
    try {
        const { content, type, context } = await req.json();

        if (!content) {
            return NextResponse.json({ error: "Content is required" }, { status: 400 });
        }

        // 1. Verify Authentication
        const cookieStore = await cookies();
        const supabase = createServerClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL,
            process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
            {
                cookies: {
                    getAll() {
                        return cookieStore.getAll();
                    },
                    setAll(cookiesToSet) {
                        try {
                            cookiesToSet.forEach(({ name, value, options }) =>
                                cookieStore.set(name, value, options)
                            );
                        } catch (error) {
                            console.warn("Supabase SSR: Failed to set cookies in API route", error.message);
                        }
                    },
                },
            }
        );

        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: "Unauthorized. Please sign in." }, { status: 401 });
        }

        // 2. Process with AI (Using Pollinations - Keyless)
        // Unlimited access for Open Source model
        const refined = await refineWithAI(content, type, context);

        // 3. Increment Usage (Optional: For analytics only)
        await incrementUsage(user.id, 'ai_refines', supabase);

        return NextResponse.json({ refined });
    } catch (error) {
        console.error("API Route Error:", error);
        return NextResponse.json({
            error: error.message || "Failed to process request with AI"
        }, { status: 500 });
    }
}
