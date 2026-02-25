import { NextResponse } from "next/server";
import { refineResumeContent } from "@/lib/gemini";

export async function POST(req) {
    try {
        const { content, type, context } = await req.json();

        if (!content) {
            return NextResponse.json({ error: "Content is required" }, { status: 400 });
        }

        const refined = await refineResumeContent(content, type, context);

        return NextResponse.json({ refined });
    } catch (error) {
        console.error("API Route Error:", error);
        // Surface the specific error message to the client for debugging
        return NextResponse.json({
            error: error.message || "Failed to process request with AI"
        }, { status: 500 });
    }
}
