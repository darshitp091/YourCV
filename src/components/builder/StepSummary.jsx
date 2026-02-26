"use client";

import { useResume } from "@/context/ResumeContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "../ui/Button";
import { LucideSparkles, LucideMessageSquareText } from "lucide-react";
import { useState, useEffect } from "react";
import { checkCredits, getUsage, LIMITS } from "@/lib/credits";
import { motion } from "framer-motion";

export const StepSummary = () => {
    const { user } = useAuth();
    const { resumeData, updateSection } = useResume();
    const [isGenerating, setIsGenerating] = useState(false);
    const [remainingAI, setRemainingAI] = useState(null);

    useEffect(() => {
        if (user) {
            const fetchUsage = async () => {
                const usage = await getUsage(user.id);
                const profile = await (await import("@/lib/supabase")).supabase.from('profiles').select('plan').eq('id', user.id).single();
                const plan = profile.data?.plan || 'free';
                const limit = LIMITS[plan].ai_refines;
                setRemainingAI(limit - (usage.ai_refines || 0));
            };
            fetchUsage();
        }
    }, [user, isGenerating]);

    const handleAIQuery = async () => {
        if (!user) return;

        if (!resumeData.summary && !resumeData.personal.jobTitle) {
            alert("Please provide at least a job title or a starting summary for AI to help.");
            return;
        }

        try {
            // 1. Check Credits
            const hasCredits = await checkCredits(user.id, 'ai_refines');
            if (!hasCredits) {
                alert("You've reached your AI refinement limit for this month. Please upgrade your plan for more!");
                return;
            }

            setIsGenerating(true);
            const response = await fetch("/api/resume/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content: resumeData.summary || `I am a ${resumeData.personal.jobTitle}`,
                    type: "summary",
                    context: {
                        jobTitle: resumeData.personal.jobTitle,
                        skills: [...resumeData.skills.technical, ...resumeData.skills.soft]
                    }
                })
            });

            const data = await response.json();
            if (data.refined) {
                updateSection("summary", data.refined);
            } else {
                throw new Error(data.error || "Failed to generate summary");
            }
        } catch (error) {
            console.error("AI Error:", error);
            alert(error.message || "Error generating summary.");
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="space-y-12">
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm">
                        <LucideMessageSquareText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black font-heading text-zinc-900 tracking-tight">
                            Core_Brief
                            <span className="text-red-500 ml-1">*</span>
                        </h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Synthesize your professional trajectory (Required).</p>
                    </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        size="sm"
                        className="hidden sm:flex items-center gap-2 border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary rounded-xl px-5 py-6 h-auto shadow-sm"
                        onClick={handleAIQuery}
                        isLoading={isGenerating}
                    >
                        <LucideSparkles className="w-4 h-4 animate-pulse" />
                        <span className="text-[10px] font-black uppercase tracking-[0.2em]">Neural_Enhancement</span>
                    </Button>
                    {remainingAI !== null && (
                        <div className="hidden sm:flex flex-col">
                            <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest">Available</span>
                            <span className={`text-xs font-bold ${remainingAI <= 2 ? 'text-amber-600' : 'text-primary'}`}>
                                {remainingAI} Refines
                            </span>
                        </div>
                    )}
                </motion.div>
            </div>

            <div className="relative group/input">
                <div className="absolute top-6 left-6 text-zinc-400 transition-colors group-focus-within/input:text-primary hidden md:block">
                    <LucideMessageSquareText className="w-6 h-6" />
                </div>

                <textarea
                    placeholder="e.g. Architect of scalable systems with 10+ years of high-frequency data experience..."
                    value={resumeData.summary}
                    onChange={(e) => updateSection("summary", e.target.value)}
                    className="w-full min-h-[300px] p-8 md:pl-16 bg-white border border-zinc-200 rounded-[2.5rem] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-500 resize-none leading-relaxed text-zinc-900 placeholder:text-zinc-400 font-medium shadow-sm relative z-10"
                />

                <div className="sm:hidden mt-6 space-y-4">
                    <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 border-primary/20 bg-primary/5 text-primary py-4 rounded-xl shadow-sm"
                        onClick={handleAIQuery}
                        isLoading={isGenerating}
                    >
                        <LucideSparkles className="w-5 h-5" />
                        AI Generate Summary
                    </Button>
                    {remainingAI !== null && (
                        <p className="text-center text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                            {remainingAI} AI Refinements Available
                        </p>
                    )}
                </div>
            </div>

            <div className="p-6 bg-emerald-50 rounded-[2rem] border border-emerald-100 flex items-start gap-4 transition-all hover:border-emerald-200 shadow-sm">
                <div className="p-2 bg-white rounded-xl shadow-sm border border-emerald-50">
                    <LucideSparkles className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Strategic_Insight</p>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                        Optimized summaries usually span 3-5 sentences. Prioritize <span className="text-zinc-800 font-bold">high-impact achievements</span> and current technical specialization for maximum conversion.
                    </p>
                </div>
            </div>
        </div>
    );
};
