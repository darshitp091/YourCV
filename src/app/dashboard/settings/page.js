"use client";

import { useAuth } from "@/context/AuthContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
    LucideUser,
    LucideMail,
    LucideShield,
    LucideZap,
    LucideLogOut,
    LucideCreditCard,
    LucideHistory,
    LucideCheckCircle
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
    const { user, signOut } = useAuth();
    const isPremium = user?.user_metadata?.plan === "premium";

    const handleUpgrade = () => {
        window.location.href = '/#pricing';
    };

    return (
        <div className="space-y-8 pb-20">
            {/* Active Plan Overview */}
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
                            {isPremium ? "Active" : "Free Plan"}
                        </Badge>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                            <LucideCheckCircle className="w-5 h-5 text-emerald-500" />
                            <p className="text-sm font-medium">{isPremium ? "30 Resume Credits per month" : "5 Resume Credits (Lifetime)"}</p>
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
                        <Button className="w-full md:w-auto px-8" onClick={handleUpgrade}>
                            <LucideZap className="w-4 h-4 mr-2" />
                            Upgrade to Premium
                        </Button>
                    )}
                </Card>

                <Card className="p-8 bg-primary text-white space-y-6 flex flex-col justify-between shadow-xl shadow-primary/10">
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

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Profile Info */}
                <div className="lg:col-span-2 space-y-8">
                    <Card className="p-8 bg-white border-border/50 space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center">
                                <LucideUser className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold font-heading">Personal Information</h3>
                                <p className="text-sm text-muted-foreground">Manage your account details and preferences.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <Input
                                    label="Full Name"
                                    value={user?.user_metadata?.full_name || ""}
                                    readOnly
                                    className="pl-11 bg-secondary/20"
                                />
                                <LucideUser className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                            </div>
                            <div className="relative">
                                <Input
                                    label="Email Address"
                                    value={user?.email || ""}
                                    readOnly
                                    className="pl-11 bg-secondary/20"
                                />
                                <LucideMail className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                            </div>
                        </div>

                        <div className="pt-4 border-t border-border/50">
                            <Button variant="outline" className="text-xs uppercase font-bold tracking-widest h-10 px-6">
                                Update Profile
                            </Button>
                        </div>
                    </Card>

                    {/* Billing History Integrated here */}
                    <Card className="p-8 bg-white border-border/50 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-secondary/50 flex items-center justify-center">
                                <LucideHistory className="w-6 h-6 text-muted-foreground" />
                            </div>
                            <div>
                                <h3 className="font-bold font-heading">Transaction History</h3>
                                <p className="text-xs text-muted-foreground">Review your past payments and receipts.</p>
                            </div>
                        </div>
                        <div className="p-12 text-center border-2 border-dashed border-border rounded-3xl">
                            <p className="text-sm text-muted-foreground font-medium">No transactions yet.</p>
                        </div>
                    </Card>
                </div>

                {/* Sidebar Actions */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="p-8 bg-white border-border/50 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                                <LucideShield className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="font-bold font-heading">Security</h3>
                                <p className="text-xs text-muted-foreground">Update password settings.</p>
                            </div>
                        </div>
                        <Button variant="ghost" className="text-amber-600 hover:bg-amber-50 h-10 text-xs font-bold uppercase tracking-widest">
                            Change Password
                        </Button>
                    </Card>

                    <Button
                        variant="ghost"
                        className="w-full justify-start text-destructive hover:bg-destructive/10 h-12 px-6 rounded-2xl gap-3"
                        onClick={() => signOut()}
                    >
                        <LucideLogOut className="w-5 h-5" />
                        <span className="font-bold text-sm">Sign Out</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}
