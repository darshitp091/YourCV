"use client";

import { useResume } from "@/context/ResumeContext";
import { Button } from "../ui/Button";
import { useState } from "react";
import { Input } from "../ui/Input";
import { Card } from "../ui/Card";
import {
    LucideBriefcase,
    LucidePlus,
    LucideTrash2,
    LucideCalendar,
    LucideMapPin,
    LucideGripVertical,
    LucideSparkles
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export const StepExperience = () => {
    const { resumeData, updateSection } = useResume();
    const [refiningId, setRefiningId] = useState(null);

    const handleAIRefine = async (id, currentDescription, role) => {
        if (!currentDescription && !role) {
            alert("Please provide at least a job role or some initial description for AI to refine.");
            return;
        }

        try {
            setRefiningId(id);
            const response = await fetch("/api/resume/generate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    content: currentDescription || `I work as a ${role}`,
                    type: "experience",
                    context: {
                        jobTitle: role,
                        skills: [...resumeData.skills.technical, ...resumeData.skills.soft]
                    }
                })
            });

            const data = await response.json();
            if (data.refined) {
                updateExperience(id, "description", data.refined);
            } else {
                throw new Error(data.error || "Failed to refine description");
            }
        } catch (error) {
            console.error("AI Error:", error);
            alert("Error refining description. Please check your API key.");
        } finally {
            setRefiningId(null);
        }
    };

    const addExperience = () => {
        const newExp = {
            id: uuidv4(),
            company: "",
            role: "",
            location: "",
            startDate: "",
            endDate: "",
            current: false,
            description: "",
        };
        updateSection("experience", (prev) => [...prev, newExp]);
    };

    const removeExperience = (id) => {
        updateSection("experience", (prev) => prev.filter((exp) => exp.id !== id));
    };

    const updateExperience = (id, field, value) => {
        updateSection("experience", (prev) =>
            prev.map((exp) => (exp.id === id ? { ...exp, [field]: value } : exp))
        );
    };

    return (
        <div className="space-y-12">
            <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <LucideBriefcase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black font-heading text-white tracking-tight">Experience_Log</h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Document your professional evolution.</p>
                    </div>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={addExperience}
                    className="border-primary/40 bg-primary/5 hover:bg-primary/20 text-primary rounded-xl px-5 py-6 h-auto transition-all"
                >
                    <LucidePlus className="mr-2 w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add_Node</span>
                </Button>
            </div>

            <div className="space-y-10">
                {resumeData.experience.length === 0 ? (
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={addExperience}
                        className="p-16 border-2 border-dashed border-white/5 rounded-[3rem] bg-white/[0.02] flex flex-col items-center justify-center gap-6 cursor-pointer hover:bg-primary/5 hover:border-primary/20 transition-all group/empty relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/empty:opacity-100 transition-opacity" />

                        <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover/empty:scale-110 group-hover/empty:border-primary/40 transition-all duration-700 relative z-10">
                            <LucideBriefcase className="w-10 h-10 text-zinc-600 group-hover/empty:text-primary transition-colors" />
                        </div>
                        <div className="text-center relative z-10">
                            <p className="text-lg font-black text-white uppercase tracking-widest">Initialize Work History</p>
                            <p className="text-[10px] text-zinc-500 mt-2 font-bold uppercase tracking-[0.3em]">No data records found in memory.</p>
                        </div>
                    </motion.div>
                ) : (
                    resumeData.experience.map((exp, index) => (
                        <Card key={exp.id} variant="premium" className="relative p-10 group overflow-visible border-white/10 hover:border-primary/30 transition-all duration-700">
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-2 group-hover:translate-x-0">
                                <LucideGripVertical className="text-primary/40 w-6 h-6" />
                            </div>

                            <button
                                onClick={() => removeExperience(exp.id)}
                                className="absolute -top-3 -right-3 p-3 bg-white/5 backdrop-blur-xl border border-white/10 text-zinc-500 hover:text-white hover:bg-destructive/20 hover:border-destructive/40 rounded-2xl transition-all shadow-2xl z-20 group/delete opacity-0 group-hover:opacity-100"
                            >
                                <LucideTrash2 className="w-4 h-4" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="relative group/input">
                                    <Input
                                        variant="premium"
                                        label="Organization"
                                        placeholder="e.g. Hyper-Reality Corp"
                                        value={exp.company}
                                        onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                                        className="pl-14"
                                    />
                                    <LucideBriefcase className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                </div>

                                <div className="relative group/input">
                                    <Input
                                        variant="premium"
                                        label="Strategic Role"
                                        placeholder="e.g. Systems Architect"
                                        value={exp.role}
                                        onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                                        className="pl-14"
                                    />
                                    <LucideBriefcase className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                </div>

                                <div className="relative group/input">
                                    <Input
                                        variant="premium"
                                        label="Deployment Base"
                                        placeholder="e.g. Remote / Virtual Hub"
                                        value={exp.location}
                                        onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                                        className="pl-14"
                                    />
                                    <LucideMapPin className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="relative group/input">
                                        <Input
                                            variant="premium"
                                            label="Mission Start"
                                            type="month"
                                            value={exp.startDate}
                                            onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                                            className="pl-14"
                                        />
                                        <LucideCalendar className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                    </div>
                                    <div className="relative group/input">
                                        <Input
                                            variant="premium"
                                            label="Mission End"
                                            type="month"
                                            disabled={exp.current}
                                            value={exp.current ? "" : exp.endDate}
                                            onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                                            className="pl-14"
                                        />
                                        <LucideCalendar className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                    </div>
                                </div>

                                <div className="md:col-span-2 flex items-center gap-4 py-2">
                                    <div className="relative flex items-center">
                                        <input
                                            type="checkbox"
                                            id={`current-${exp.id}`}
                                            checked={exp.current}
                                            onChange={(e) => updateExperience(exp.id, "current", e.target.checked)}
                                            className="w-5 h-5 rounded-lg border-white/10 bg-white/5 text-primary focus:ring-primary/40 cursor-pointer appearance-none transition-all checked:bg-primary checked:border-primary border-2"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            {exp.current && <LucideCheck className="w-3.5 h-3.5 text-black stroke-[4px]" />}
                                        </div>
                                    </div>
                                    <label htmlFor={`current-${exp.id}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 cursor-pointer group-hover:text-zinc-200 transition-colors">
                                        Currently Operating in this node
                                    </label>
                                </div>

                                <div className="md:col-span-2 space-y-4">
                                    <div className="flex items-center justify-between">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Operation_Impact & Metrics</label>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 text-[9px] text-primary hover:bg-primary/10 uppercase font-black tracking-widest gap-2 px-4 rounded-xl border border-primary/20"
                                            onClick={() => handleAIRefine(exp.id, exp.description, exp.role)}
                                            isLoading={refiningId === exp.id}
                                        >
                                            <LucideSparkles className="w-3.5 h-3.5 animate-pulse" />
                                            AI-Refine_Log
                                        </Button>
                                    </div>
                                    <textarea
                                        placeholder="• Optimized critical workflows by 40%...
• Directed multi-functional squads of 12+ agents..."
                                        value={exp.description}
                                        onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                                        className="w-full min-h-[180px] p-6 bg-white/[0.02] border border-white/10 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-primary/40 focus:border-primary focus:bg-white/[0.05] transition-all duration-500 resize-none text-sm text-white placeholder:text-zinc-700 font-medium leading-relaxed"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            {resumeData.experience.length > 0 && (
                <Button
                    variant="outline"
                    className="w-full border-dashed border-2 border-white/5 bg-white/[0.01] py-10 rounded-[2.5rem] text-zinc-500 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all group/add-more"
                    onClick={addExperience}
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover/add-more:scale-110 transition-transform">
                            <LucidePlus className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Initialize_Another_Record</span>
                    </div>
                </Button>
            )}
        </div>
    );
};
