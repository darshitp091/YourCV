"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { LucideCheck, LucideX } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { triggerCheckout } from "@/lib/razorpay";

const PLANS = [
    {
        name: "Free",
        price: "₹0",
        description: "Perfect for a quick, professional resume.",
        features: [
            { text: "1 resume per month", included: true },
            { text: "Access to all 10 templates", included: true },
            { text: "Download as PDF (with watermark)", included: true },
            { text: "LaTeX code + Browser preview", included: true },
            { text: "ATS Score Breakdown", included: false },
            { text: "Unlimited edits after download", included: false },
        ],
        cta: "Start for Free",
        variant: "outline",
        popular: false,
    },
    {
        name: "Premium",
        price: "₹139",
        description: "For serious job seekers who want the edge.",
        features: [
            { text: "10 resumes per month", included: true },
            { text: "All 10 templates (no watermark)", included: true },
            { text: "5 LaTeX generations / month", included: true },
            { text: "Full ATS score breakdown", included: true },
            { text: "Priority AI generation", included: true },
            { text: "Unlimited edits & versions", included: true },
        ],
        cta: "Get Premium Edge",
        variant: "primary",
        popular: true,
    },
];

export const PricingSection = () => {
    const { user } = useAuth();
    const router = useRouter();

    const handlePlanAction = async (plan) => {
        if (!user) {
            router.push("/signup");
            return;
        }

        if (plan.name === "Premium") {
            await triggerCheckout({
                userId: user.id,
                fullName: user.user_metadata?.full_name || "User",
                email: user.email,
                amount: 139, // INR 139 for Premium
                successCallback: () => {
                    alert("Payment Successful! Welcome to Premium.");
                    router.push("/dashboard");
                }
            });
        } else {
            router.push("/builder");
        }
    };

    return (
        <section id="pricing" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading">
                        Simple, <span className="text-gradient">Transparent</span> Pricing
                    </h2>
                    <p className="text-muted-foreground">
                        Choose the plan that fits your career goals. No hidden fees, cancel anytime.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto pt-10">
                    {PLANS.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative p-12 rounded-[3rem] rounded-tr-none border ${plan.popular
                                ? "border-primary/30 shadow-[0_30px_60px_rgba(13,110,110,0.1)] ring-8 ring-primary/5"
                                : "border-border bg-white"
                                } bg-white/80 backdrop-blur-xl group transition-all duration-500 hover:y-[-10px]`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                                    <div className="bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-xl shadow-primary/20 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                        Most Popular
                                    </div>
                                </div>
                            )}

                            <div className="mb-10">
                                <h3 className="text-2xl font-bold font-heading mb-4 text-foreground/80">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-6xl font-black tracking-tighter text-primary">{plan.price}</span>
                                    {plan.price !== "$0" && <span className="text-muted-foreground font-bold">/month</span>}
                                </div>
                                <p className="text-muted-foreground font-medium">{plan.description}</p>
                            </div>

                            <div className="space-y-5 mb-12">
                                {plan.features.map((feature) => (
                                    <div key={feature.text} className="flex items-start gap-4">
                                        <div className={`p-1 rounded-full ${feature.included ? "bg-emerald-50 text-emerald-500" : "bg-muted text-muted-foreground/30"}`}>
                                            {feature.included ? (
                                                <LucideCheck className="w-4 h-4" />
                                            ) : (
                                                <LucideX className="w-4 h-4" />
                                            )}
                                        </div>
                                        <span className={`text-sm font-medium ${feature.included ? "text-foreground" : "text-muted-foreground/50"}`}>
                                            {feature.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={() => handlePlanAction(plan)}
                                variant={plan.variant}
                                className={`w-full py-8 text-lg font-bold rounded-2xl ${plan.popular ? "shadow-xl shadow-primary/20" : ""}`}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
