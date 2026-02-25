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
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold font-heading text-foreground">Professional Summary</h2>
                    <p className="text-muted-foreground">Briefly describe your career goals and key achievements.</p>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    className="hidden sm:flex items-center gap-2 border-primary/20 hover:bg-primary/5 text-primary"
                    onClick={handleAIQuery}
                    isLoading={isGenerating}
                >
                    <LucideSparkles className="w-4 h-4" />
                    AI Assist
                </Button>
            </div>

            <div className="relative">
                <div className="absolute top-4 left-4 text-muted-foreground/40 hidden md:block">
                    <LucideMessageSquareText className="w-6 h-6" />
                </div>
                <textarea
                    placeholder="e.g. Dynamic Software Engineer with 5+ years of experience specialized in..."
                    value={resumeData.summary}
                    onChange={(e) => updateSection("summary", e.target.value)}
                    className="w-full min-h-[250px] p-6 md:pl-14 bg-white border border-border rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none leading-relaxed text-foreground placeholder:text-muted-foreground/60"
                />

                {/* Mobile AI button */}
                <div className="mt-4 sm:hidden">
                    <Button
                        variant="outline"
                        className="w-full flex items-center justify-center gap-2"
                        onClick={handleAIQuery}
                        isLoading={isGenerating}
                    >
                        <LucideSparkles className="w-5 h-5 text-primary" />
                        AI Generate Summary
                    </Button>
                </div>
            </div>

            <div className="p-4 bg-primary/5 rounded-xl border border-primary/10 flex items-start gap-3">
                <LucideSparkles className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-xs text-primary/80 leading-relaxed font-medium">
                    <span className="font-bold">Pro Tip:</span> A good summary is 3-5 sentences long. Focus on your most recent experience and one or two impactful achievements.
                </p>
            </div>
        </div>
    );
};
