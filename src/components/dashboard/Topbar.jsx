"use client";

import { useAuth } from "@/context/AuthContext";
import { LucideSearch, LucideBell, LucideUserCircle } from "lucide-react";
import { Badge } from "../ui/Badge";

export const Topbar = ({ title = "Dashboard" }) => {
    const { user } = useAuth();

    return (
        <header className="h-20 border-b border-border bg-white/50 backdrop-blur-md sticky top-0 z-30 px-8 flex items-center justify-between">
            <div>
                <h1 className="text-xl font-bold font-heading text-foreground">{title}</h1>
                <p className="text-xs text-muted-foreground font-medium">Manage your professional documents</p>
            </div>

            <div className="flex items-center gap-6">
                {/* Search Bar Placeholder */}
                <div className="hidden lg:flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-xl border border-transparent focus-within:border-primary/20 transition-all border-border">
                    <LucideSearch className="w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search resumes..."
                        className="bg-transparent border-none outline-none text-sm w-48 placeholder:text-muted-foreground"
                    />
                </div>

                <div className="flex items-center gap-3">
                    <button className="p-2.5 hover:bg-secondary/50 rounded-xl transition-colors relative">
                        <LucideBell className="w-5 h-5 text-muted-foreground" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white" />
                    </button>

                    <div className="flex items-center gap-3 pl-4 border-l border-border">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-bold text-foreground leading-tight">
                                {user?.user_metadata?.full_name || user?.email?.split('@')[0] || "Personal Account"}
                            </p>
                            <Badge variant="primary" className="text-[9px] py-0 px-1.5 h-auto uppercase tracking-tighter">
                                Free Plan
                            </Badge>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                            <LucideUserCircle className="w-7 h-7 text-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
