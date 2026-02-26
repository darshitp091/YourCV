import { NextResponse } from "next/server";
import { refineResumeContent } from "@/lib/gemini";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { checkCredits, incrementUsage } from "@/lib/credits";

export async function POST(req) {
    try {
        const { content, type, context } = await req.json();

        if (!content) {
            return NextResponse.json({ error: "Content is required" }, { status: 400 });
        }

        // 1. Verify Authentication
        const supabase = createRouteHandlerClient({ cookies });
        const { data: { user }, error: authError } = await supabase.auth.getUser();

        if (authError || !user) {
            return NextResponse.json({ error: "Unauthorized. Please sign in." }, { status: 401 });
        }

        // 2. Check Credits
        const hasCredits = await checkCredits(user.id, 'ai_refines');
        if (!hasCredits) {
            return NextResponse.json({
                error: "AI Refinement limit reached for this month. Please upgrade your plan for more!"
            }, { status: 403 });
        }

        // 3. Process with AI
        const refined = await refineResumeContent(content, type, context);

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
