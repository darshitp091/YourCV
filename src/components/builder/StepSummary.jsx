"use client";

import { useResume } from "@/context/ResumeContext";
import { Button } from "../ui/Button";
import { LucideSparkles, LucideMessageSquareText } from "lucide-react";
import { useState } from "react";

export const StepSummary = () => {
    const { resumeData, updateSection } = useResume();
    const [isGenerating, setIsGenerating] = useState(false);

    const handleAIQuery = async () => {
        if (!resumeData.summary && !resumeData.personal.jobTitle) {
            alert("Please provide at least a job title or a starting summary for AI to help.");
            return;
        }

        try {
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
            alert("Error generating summary. Please check your API key.");
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
                        <h2 className="text-3xl font-black font-heading text-zinc-900 tracking-tight">Core_Brief</h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Synthesize your professional trajectory.</p>
                    </div>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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

                <div className="sm:hidden mt-6">
                    <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2 border-primary/20 bg-primary/5 text-primary py-4 rounded-xl shadow-sm"
                        onClick={handleAIQuery}
                        isLoading={isGenerating}
                    >
                        <LucideSparkles className="w-5 h-5" />
                        AI Generate Summary
                    </Button>
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
