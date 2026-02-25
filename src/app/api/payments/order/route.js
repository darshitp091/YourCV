import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req) {
    try {
        const key_id = process.env.RAZORPAY_KEY_ID;
        const key_secret = process.env.RAZORPAY_KEY_SECRET;

        if (!key_id || !key_secret) {
            console.error("Razorpay credentials missing");
            return NextResponse.json({ error: "Razorpay is not configured" }, { status: 500 });
        }

        const razorpay = new Razorpay({
            key_id,
            key_secret,
        });

        const { amount, currency = "INR" } = await req.json();

        const options = {
            amount: amount * 100, // Amount in paise
            currency,
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json({
            id: order.id,
            amount: order.amount,
            currency: order.currency,
        });
    } catch (error) {
        console.error("Razorpay Order Error:", error);
        return NextResponse.json({ error: "Failed to create Razorpay order" }, { status: 500 });
    }
}
