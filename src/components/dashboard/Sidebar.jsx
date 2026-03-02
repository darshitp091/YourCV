"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LucideFileText,
    LucideLayout,
    LucideSettings,
    LucideCreditCard,
    LucideLogOut,
    LucideLayoutDashboard,
    LucideZap
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { BrandLogo } from "../ui/BrandLogo";
import { clsx } from "clsx";
import { useState, useEffect } from "react";
import { getUsage, LIMITS } from "@/lib/credits";
import { supabase } from "@/lib/supabase";

const DASHBOARD_LINKS = [
    { name: "My Resumes", href: "/dashboard", icon: LucideFileText },
    { name: "Templates", href: "/templates", icon: LucideLayout },
    { name: "Automations", href: "/dashboard/workflows", icon: LucideZap },
    { name: "Account Settings", href: "/dashboard/settings", icon: LucideSettings },
];

export const Sidebar = () => {
    const pathname = usePathname();
    const { signOut, user } = useAuth();
    const [resumeCount, setResumeCount] = useState(0);
    const [usage, setUsage] = useState({ resumes_generated: 0 });
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if (user) {
            getUsage(user.id).then(setUsage);
            supabase.from('profiles').select('plan').eq('id', user.id).single()
                .then(({ data }) => setProfile(data));

            // Fetch actual resume count for "Slot" logic
            supabase.from('resumes').select('id', { count: 'exact', head: true }).eq('user_id', user.id)
                .then(({ count }) => setResumeCount(count || 0));
        }
    }, [user, pathname]); // Re-fetch on path change to catch deletions/creations

    const userPlan = profile?.plan || 'free';
    const isPremium = userPlan === "premium";
    const limits = LIMITS[userPlan];

    return (
        <aside className="w-64 border-r border-border bg-white flex flex-col h-screen sticky top-0">
            {/* Brand */}
            <div className="p-6 border-b border-border">
                <Link href="/" className="flex items-center gap-2 group">
                    <BrandLogo />
                </Link>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 p-4 space-y-1">
                {DASHBOARD_LINKS.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                                isActive
                                    ? "bg-primary/10 text-primary shadow-sm"
                                    : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                            )}
                        >
                            <Icon className={clsx("w-5 h-5", isActive ? "text-primary" : "text-muted-foreground")} />
                            {link.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Usage Indicator */}
            <div className="p-4 mx-4 mb-4 bg-secondary/30 rounded-2xl space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-muted-foreground uppercase tracking-wider">
                        {isPremium ? "Premium Plan" : "Free Plan"}
                    </span>
                    <span className="text-primary">
                        {usage?.resumes_generated || 0} / {limits?.resume || 5} Credits
                    </span>
                </div>
                <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
                    <div
                        className="h-full bg-primary transition-all duration-500"
                        style={{ width: `${Math.min(((usage?.resumes_generated || 0) / (limits?.resume || 5)) * 100, 100)}%` }}
                    />
                </div>
                {!isPremium && (
                    <Link href="/dashboard/settings" className="block text-center text-xs font-bold text-primary hover:underline">
                        Upgrade for MORE
                    </Link>
                )}
            </div>

            {/* User / Logout */}
            <div className="p-4 border-t border-border">
                <button
                    onClick={signOut}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/5 transition-colors"
                >
                    <LucideLogOut className="w-5 h-5" />
                    Log Out
                </button>
            </div>
        </aside>
    );
};
