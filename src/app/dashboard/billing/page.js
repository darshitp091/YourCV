"use client";

import { useAuth } from "@/context/AuthContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LucideCreditCard, LucideHistory, LucideCheckCircle, LucideZap } from "lucide-react";

export default function BillingPage() {
    const { user } = useAuth();
    const isPremium = user?.user_metadata?.plan === "premium";

    return (
        <div className="space-y-8 pb-20">

            {/* Current Plan Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2 p-8 bg-white border-border/50">
                    <div className="flex justify-between items-start mb-8">
                        <div className="space-y-1">
                            <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Active Plan</p>
                            <h2 className="text-3xl font-black font-heading text-foreground">
                                {isPremium ? "Premium Pro" : "Free Explorer"}
                            </h2>
                        </div>
                        <Badge variant={isPremium ? "primary" : "secondary"} className="py-1 px-4 rounded-full">
                            {isPremium ? "Active" : "Trial"}
                        </Badge>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                            <LucideCheckCircle className="w-5 h-5 text-emerald-500" />
                            <p className="text-sm font-medium">{isPremium ? "Unlimited Resume Downloads" : "1 Resume per month"}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <LucideCheckCircle className="w-5 h-5 text-emerald-500" />
                            <p className="text-sm font-medium">{isPremium ? "AI-Powered ATS Audits" : "Basic ATS Checks"}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <LucideCheckCircle className="w-5 h-5 text-emerald-500" />
                            <p className="text-sm font-medium">Premium Template Library</p>
                        </div>
                    </div>

                    {!isPremium && (
                        <Button className="w-full md:w-auto px-8" onClick={() => window.location.href = '/#pricing'}>
                            <LucideZap className="w-4 h-4 mr-2" />
                            Upgrade to Premium
                        </Button>
                    )}
                </Card>

                <Card className="p-8 bg-primary text-white space-y-6 flex flex-col justify-between">
                    <div className="space-y-4">
                        <LucideCreditCard className="w-10 h-10 opacity-40" />
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Payment Method</p>
                            <p className="font-bold">No card linked</p>
                        </div>
                    </div>
                    <p className="text-xs opacity-70 leading-relaxed italic">
                        Transactions are processed securely via Razorpay.
                    </p>
                </Card>
            </div>

            {/* Billing History */}
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                    <LucideHistory className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold font-heading">Transaction History</h3>
                </div>

                <Card className="overflow-hidden border-border/50">
                    <div className="p-12 text-center space-y-4 bg-white">
                        <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center mx-auto">
                            <LucideHistory className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <div className="space-y-1">
                            <p className="font-bold text-foreground">No transactions yet</p>
                            <p className="text-sm text-muted-foreground">When you start a subscription or make a payment, it will appear here.</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    );
}
