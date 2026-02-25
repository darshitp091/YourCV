"use client";

import { useAuth } from "@/context/AuthContext";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { LucideUser, LucideMail, LucideShield, LucideZap, LucideLogOut } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
    const { user, signOut } = useAuth();
    const [loading, setLoading] = useState(false);

    const handleUpgrade = () => {
        window.location.href = '/#pricing';
    };

    return (
        <div className="space-y-8 pb-20">

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

                    <Card className="p-8 bg-white border-border/50 space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center">
                                <LucideShield className="w-6 h-6 text-amber-600" />
                            </div>
                            <div>
                                <h3 className="font-bold font-heading">Security</h3>
                                <p className="text-xs text-muted-foreground">Update your password and security settings.</p>
                            </div>
                        </div>
                        <Button variant="ghost" className="text-amber-600 hover:bg-amber-50 h-10 text-xs font-bold uppercase tracking-widest">
                            Change Password
                        </Button>
                    </Card>
                </div>

                {/* Plan Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <Card className="p-6 bg-primary text-white space-y-6 shadow-xl shadow-primary/20">
                        <div className="p-3 bg-white/10 w-fit rounded-2xl">
                            <LucideZap className="w-6 h-6 text-white" />
                        </div>
                        <div className="space-y-1">
                            <h4 className="font-bold">Upgrade Plan</h4>
                            <p className="text-xs text-white/70 leading-relaxed">
                                Get the premium edge with unlimited resumes and AI features.
                            </p>
                        </div>
                        <Button className="w-full bg-white text-primary hover:bg-white/90 font-bold border-none" onClick={handleUpgrade}>
                            View Pricing
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
