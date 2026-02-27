import { NextResponse } from "next/server";
import { refineWithHuggingFace } from "@/lib/huggingface";
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
                            // The `setAll` method was called from a Server Component.
                            // This can be ignored if you have middleware refreshing
                            // user sessions.
                            console.warn("Supabase SSR: Failed to set cookies in API route", error.message);
                        }
                    },
                },
            }
        );

        // Use getUser for the most robust server-side session verification
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            console.error("Auth Fail Diagnostic:", {
                error: authError?.message,
                cookiesPresent: cookieStore.getAll().length > 0,
                cookieNames: cookieStore.getAll().map(c => c.name)
            });
            return NextResponse.json({ error: "Unauthorized. Please sign in." }, { status: 401 });
        }

        // 2. Check Credits
        const hasCredits = await checkCredits(user.id, 'ai_refines');
        if (!hasCredits) {
            return NextResponse.json({
                error: "AI Refinement limit reached for this month. Please upgrade your plan for more!"
            }, { status: 403 });
        }

        // 3. Process with AI (Using HuggingFace)
        const refined = await refineWithHuggingFace(content, type, context);

        // 4. Increment Usage
        await incrementUsage(user.id, 'ai_refines');

        return NextResponse.json({ refined });
    } catch (error) {
        console.error("API Route Error:", error);
        return NextResponse.json({
            error: error.message || "Failed to process request with AI"
        }, { status: 500 });
    }
}
