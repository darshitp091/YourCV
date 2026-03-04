"use client";

import React, { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import {
    LucideUser,
    LucideZap,
    LucideLogOut
} from "lucide-react";

export default function SettingsPage() {
    const { user, signOut } = useAuth();
    const [loading, setLoading] = useState(false);
    const [profile, setProfile] = useState({
        full_name: "",
        email: ""
    });

    useEffect(() => {
        if (user) {
            setProfile({
                full_name: user?.user_metadata?.full_name || "",
                email: user?.email || ""
            });
        }
    }, [user]);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { error } = await supabase.auth.updateUser({
                data: { full_name: profile.full_name }
            });

            if (error) throw error;
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Profile Update Error:", error.message);
            alert("Failed to update profile.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl space-y-10">
            <div className="space-y-1">
                <h1 className="text-3xl font-bold font-heading">Settings</h1>
                <p className="text-muted-foreground">Manage your account and preferences.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Profile Settings */}
                <div className="md:col-span-2">
                    <Card className="p-8">
                        <form onSubmit={handleUpdateProfile} className="space-y-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <LucideUser className="w-5 h-5 text-primary" />
                                Profile Information
                            </h2>

                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Full Name</label>
                                    <input
                                        type="text"
                                        value={profile.full_name}
                                        onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div className="space-y-2 opacity-60">
                                    <label className="text-sm font-bold text-muted-foreground uppercase tracking-widest">Email Address</label>
                                    <input
                                        type="email"
                                        value={profile.email}
                                        disabled
                                        className="w-full px-4 py-3 rounded-xl border border-border bg-secondary/30 cursor-not-allowed font-medium"
                                    />
                                    <p className="text-[10px] text-muted-foreground italic">Email cannot be changed yet.</p>
                                </div>
                            </div>

                            <Button type="submit" isLoading={loading} className="w-full md:w-auto px-8">
                                Save Changes
                            </Button>
                        </form>
                    </Card>
                </div>

                {/* Account Status / Info */}
                <div className="md:col-span-1 space-y-6">
                    <Card className="p-6 bg-primary/5 border-primary/20 space-y-4">
                        <div className="p-3 bg-white rounded-2xl w-fit shadow-sm">
                            <LucideZap className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-primary">Open Source</h3>
                            <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                                You are using the community edition. All features are unlocked and free forever.
                            </p>
                        </div>
                    </Card>

                    <div className="p-6 border border-border rounded-3xl space-y-4">
                        <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Actions</h3>
                        <Button variant="outline" size="sm" className="w-full justify-start text-xs border-dashed">
                            Change Password
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={signOut}
                            className="w-full justify-start text-xs text-destructive hover:bg-destructive/5"
                        >
                            <LucideLogOut className="w-4 h-4 mr-2" />
                            Log Out
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
