import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabase } from "@/lib/supabase";

export async function POST(req) {
    try {
        const body = await req.json();
        const signature = req.headers.get("x-razorpay-signature");

        const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

        if (!webhookSecret) {
            console.error("RAZORPAY_WEBHOOK_SECRET is missing");
            return NextResponse.json({ error: "Webhook is not configured" }, { status: 500 });
        }

        const expectedSignature = crypto
            .createHmac("sha256", webhookSecret)
            .update(JSON.stringify(body))
            .digest("hex");

        if (signature !== expectedSignature) {
            return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
        }

        const event = body.event;

        if (event === "payment.captured") {
            const email = body.payload.payment.entity.email;
            const notes = body.payload.payment.entity.notes; // Assuming we pass userId in notes during checkout

            const userId = notes?.userId;

            if (userId) {
                // Update user plan in Supabase
                const { error } = await supabase
                    .from("profiles")
                    .update({
                        plan: "premium",
                        plan_started_at: new Date().toISOString()
                    })
                    .eq("id", userId);

                if (error) {
                    console.error("Plan Update Error:", error);
                    return NextResponse.json({ error: "Failed to update user plan" }, { status: 500 });
                }

                console.log(`User ${userId} upgraded to Premium.`);
            }
        }

        return NextResponse.json({ status: "ok" });
    } catch (error) {
        console.error("Razorpay Webhook Error:", error);
        return NextResponse.json({ error: "Webhook handler failed" }, { status: 500 });
    }
}
