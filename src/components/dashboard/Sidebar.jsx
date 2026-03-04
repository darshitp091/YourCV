"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LucideFileText,
    LucideLayout,
    LucideSettings,
    LucideLogOut,
    LucideZap
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { BrandLogo } from "../ui/BrandLogo";
import { clsx } from "clsx";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { AdBanner } from "@/components/common/AdBanner";

const DASHBOARD_LINKS = [
    { name: "My Resumes", href: "/dashboard", icon: LucideFileText },
    { name: "Templates", href: "/templates", icon: LucideLayout },
    { name: "Account Settings", href: "/dashboard/settings", icon: LucideSettings },
];

export const Sidebar = () => {
    const pathname = usePathname();
    const { signOut, user } = useAuth();
    const [resumeCount, setResumeCount] = useState(0);

    useEffect(() => {
        if (user) {
            supabase.from('resumes').select('id', { count: 'exact', head: true }).eq('user_id', user.id)
                .then(({ count }) => setResumeCount(count || 0));
        }
    }, [user, pathname]);

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

            {/* Community / Open Source Info */}
            <div className="p-4 mx-4 mb-4 bg-primary/5 rounded-2xl space-y-2 border border-primary/10">
                <div className="flex items-center gap-2 text-primary">
                    <LucideZap className="w-4 h-4 fill-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                        Open Source
                    </span>
                </div>
                <p className="text-[10px] text-muted-foreground leading-relaxed">
                    Enjoy unlimited access to all features. Community supported.
                </p>
            </div>

            {/* Ad Slot */}
            <div className="mt-auto px-4 pb-4">
                <AdBanner placementId="73b6b292ed780e89f620ff15c77b7ef0" format="sidebar" />
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
