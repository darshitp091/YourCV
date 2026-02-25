"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/lib/supabase";
import { getUsage } from "@/lib/credits";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import {
    LucidePlus,
    LucideFileText,
    LucideClock,
    LucideArrowRight,
    LucideMoreVertical,
    LucideSparkles,
    LucideCreditCard,
    LucideTrash2
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
    const { user } = useAuth();
    const [resumes, setResumes] = useState([]);
    const [usage, setUsage] = useState(null);
    const [loading, setLoading] = useState(true);
    const [activeResumeMenu, setActiveResumeMenu] = useState(null);

    const handleDeleteResume = async (id) => {
        if (!confirm("Are you sure you want to delete this resume? This action cannot be undone.")) return;

        try {
            const { error } = await supabase.from('resumes').delete().eq('id', id);
            if (error) throw error;
            setResumes(prev => prev.filter(r => r.id !== id));
        } catch (error) {
            console.error("Delete Error:", error.message);
            alert("Failed to delete resume. Please try again.");
        } finally {
            setActiveResumeMenu(null);
        }
    };

    useEffect(() => {
        if (user) {
            fetchDashboardData();
        }
    }, [user]);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);

            if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
                console.error("NEXT_PUBLIC_SUPABASE_URL is missing! Requests will fail.");
            }

            // Fetch Resumes
            const { data: resumeData, error: resumeError } = await supabase
                .from('resumes')
                .select('*')
                .order('updated_at', { ascending: false });

            if (resumeError) throw resumeError;
            setResumes(resumeData || []);

            // Fetch Usage for current month
            const usageData = await getUsage(user.id);
            setUsage(usageData);

        } catch (error) {
            console.error("❌ DASHBOARD FETCH CRITICAL ERROR:", error);
            console.error("Error name:", error?.name);
            console.error("Error message:", error?.message);
            console.error("Error stack:", error?.stack);
            console.error("Supabase URL in use:", process.env.NEXT_PUBLIC_SUPABASE_URL);
        } finally {
            setLoading(false);
        }
    };

    const getResetDate = () => {
        if (!user || !usage) return null;
        const profile = user.user_metadata; // This might be stale, better to use a profile state if available
        // BUT we know getCurrentCycleStart is imported... wait, dashboard doesn't have it imported yet.
        return null; // I'll fix the imports first
    };

    const stats = [
        {
            label: "Total Resumes",
            value: resumes.length,
            icon: LucideFileText,
            color: "text-primary",
            bg: "bg-primary/10"
        },
        {
            label: "Credits Used",
            value: usage?.resumes_generated || 0,
            total: 1,
            resetDate: usage?.month_year ? new Date(new Date(usage.month_year).setMonth(new Date(usage.month_year).getMonth() + 1)).toLocaleDateString() : null,
            icon: LucideCreditCard,
            color: "text-amber-600",
            bg: "bg-amber-100"
        },
        {
            label: "AI Refinements",
            value: usage?.latex_generations || 0,
            resetDate: usage?.month_year ? new Date(new Date(usage.month_year).setMonth(new Date(usage.month_year).getMonth() + 1)).toLocaleDateString() : null,
            icon: LucideSparkles,
            color: "text-purple-600",
            bg: "bg-purple-100"
        },
    ];

    return (
        <div className="space-y-10 pb-20">

            {/* Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-1">
                    <h1 className="text-3xl font-bold font-heading text-foreground">Welcome back, {user?.user_metadata?.full_name?.split(" ")[0] || "User"}!</h1>
                    <p className="text-muted-foreground">Ready to take the next step in your career?</p>
                </div>
                <Link href="/builder">
                    <Button size="lg" className="shadow-lg shadow-primary/20">
                        <LucidePlus className="mr-2 w-5 h-5" />
                        Create New Resume
                    </Button>
                </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card variant="glass" className="p-6">
                            <div className="flex items-center gap-4">
                                <div className={`p-3 rounded-2xl ${stat.bg}`}>
                                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                                    <div className="flex items-baseline gap-2">
                                        <h3 className="text-2xl font-bold text-foreground">{stat.value}</h3>
                                        {stat.total && <span className="text-sm text-muted-foreground">/ {stat.total}</span>}
                                    </div>
                                    {stat.resetDate && (
                                        <p className="text-[10px] text-muted-foreground mt-1">Resets: {stat.resetDate}</p>
                                    )}
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Main Content Area */}
            <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">

                {/* Resumes List */}
                <div className="xl:col-span-3 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold font-heading text-foreground">My Resumes</h2>
                        <Link href="/templates">
                            <Button variant="ghost" size="sm" className="text-primary font-bold text-xs uppercase tracking-widest">View All</Button>
                        </Link>
                    </div>

                    {loading ? (
                        <div className="space-y-4">
                            {[1, 2].map(i => <div key={i} className="h-24 bg-secondary/30 rounded-3xl animate-pulse" />)}
                        </div>
                    ) : resumes.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {resumes.map((resume) => (
                                <Card key={resume.id} variant="default" className="p-6 group hover:border-primary/50 transition-all border-border/50">
                                    <div className="flex justify-between items-start gap-4">
                                        <div className="p-3 bg-secondary rounded-2xl group-hover:bg-primary/5 transition-colors">
                                            <LucideFileText className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                                        </div>
                                        <div className="relative">
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className={`h-8 w-8 rounded-lg transition-colors ${activeResumeMenu === resume.id ? 'bg-secondary' : ''}`}
                                                onClick={() => setActiveResumeMenu(activeResumeMenu === resume.id ? null : resume.id)}
                                            >
                                                <LucideMoreVertical className="w-4 h-4" />
                                            </Button>

                                            {activeResumeMenu === resume.id && (
                                                <>
                                                    <div
                                                        className="fixed inset-0 z-40"
                                                        onClick={() => setActiveResumeMenu(null)}
                                                    />
                                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl border border-border shadow-2xl z-50 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                                                        <button
                                                            onClick={() => handleDeleteResume(resume.id)}
                                                            className="w-full px-4 py-3 text-left text-sm font-bold text-red-600 hover:bg-red-50 transition-colors flex items-center gap-2"
                                                        >
                                                            <LucideTrash2 className="w-4 h-4" />
                                                            Delete Resume
                                                        </button>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="mt-6 space-y-1">
                                        <h3 className="font-bold text-foreground truncate">{resume.title}</h3>
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                            <LucideClock className="w-3.5 h-3.5" />
                                            <span>Updated {new Date(resume.updated_at).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-border/50 flex items-center justify-between">
                                        <Badge variant="ghost" className="bg-secondary/50 text-[10px] uppercase tracking-tighter">
                                            {resume.template_id?.replace("-", " ")}
                                        </Badge>
                                        <Link href={`/builder?id=${resume.id}`} className="text-primary font-bold text-xs flex items-center gap-1.5 hover:gap-2 transition-all">
                                            Continue Editing
                                            <LucideArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div className="p-12 border-2 border-dashed border-border rounded-[40px] flex flex-col items-center justify-center gap-6 bg-white/50">
                            <div className="w-20 h-20 rounded-full bg-secondary/50 flex items-center justify-center">
                                <LucideFileText className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <div className="text-center space-y-2">
                                <h3 className="text-lg font-bold">No resumes yet</h3>
                                <p className="text-sm text-muted-foreground max-w-xs">Create your first professional resume in minutes with our AI-powered builder.</p>
                            </div>
                            <Link href="/builder">
                                <Button variant="outline" className="border-primary/20 text-primary">
                                    Start Building
                                </Button>
                            </Link>
                        </div>
                    )}
                </div>

                {/* Sidebar: Tips & Credits */}
                <div className="xl:col-span-1 space-y-8">
                    <Card variant="secondary" className="p-6 border-transparent bg-primary text-white space-y-4 shadow-xl shadow-primary/20">
                        <LucideSparkles className="w-10 h-10 text-white/40" />
                        <div className="space-y-2">
                            <h3 className="font-bold text-lg">Go Premium</h3>
                            <p className="text-xs text-white/70 leading-relaxed">Unlock unlimited resumes, AI refinements, and direct LaTeX exports with a premium plan.</p>
                        </div>
                        <Button
                            onClick={() => window.location.href = '/#pricing'}
                            className="w-full bg-white text-primary hover:bg-white/90 font-bold border-none shadow-none"
                        >
                            Upgrade ₹139/mo
                        </Button>
                    </Card>

                    <div className="bg-white p-6 rounded-3xl border border-border space-y-6">
                        <h3 className="font-bold text-sm uppercase tracking-widest text-muted-foreground">Expert Tips</h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-emerald-600 text-xs font-bold italic font-heading">01</span>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed italic">"Keep your summary concise—aim for 3 powerful sentences that highlight your biggest wins."</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-amber-600 text-xs font-bold italic font-heading">02</span>
                                </div>
                                <p className="text-xs text-muted-foreground leading-relaxed italic">"Use quantifiable metrics (%, $) to make your experience stand out to ATS filters."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
