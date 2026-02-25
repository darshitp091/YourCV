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
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold font-heading">Work Experience</h2>
                    <p className="text-muted-foreground">List your career history, starting with your current or most recent role.</p>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={addExperience}
                    className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10"
                >
                    <LucidePlus className="mr-2 w-4 h-4" />
                    Add Role
                </Button>
            </div>

            <div className="space-y-6">
                {resumeData.experience.length === 0 ? (
                    <div
                        onClick={addExperience}
                        className="p-12 border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-all group"
                    >
                        <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <LucideBriefcase className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-foreground">Add your first job</p>
                            <p className="text-sm text-muted-foreground mt-1">Start by clicking here to add your work history.</p>
                        </div>
                    </div>
                ) : (
                    resumeData.experience.map((exp, index) => (
                        <Card key={exp.id} className="relative p-8 group overflow-visible">
                            <div className="absolute -left-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <LucideGripVertical className="text-muted-foreground/30 w-6 h-6" />
                            </div>

                            <button
                                onClick={() => removeExperience(exp.id)}
                                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all"
                            >
                                <LucideTrash2 className="w-5 h-5" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <Input
                                        label="Company Name"
                                        placeholder="Google / Acme Corp"
                                        value={exp.company}
                                        onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                                        className="pl-11"
                                    />
                                    <LucideBriefcase className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                </div>

                                <div className="relative">
                                    <Input
                                        label="Job Role"
                                        placeholder="Senior Product Designer"
                                        value={exp.role}
                                        onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                                        className="pl-11"
                                    />
                                    <LucideBriefcase className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                </div>

                                <div className="relative md:col-span-1">
                                    <Input
                                        label="Location"
                                        placeholder="San Francisco, CA"
                                        value={exp.location}
                                        onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                                        className="pl-11"
                                    />
                                    <LucideMapPin className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <Input
                                            label="Start Date"
                                            type="month"
                                            value={exp.startDate}
                                            onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                                            className="pl-11"
                                        />
                                        <LucideCalendar className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                    </div>
                                    <div className="relative">
                                        <Input
                                            label="End Date"
                                            type="month"
                                            disabled={exp.current}
                                            value={exp.current ? "" : exp.endDate}
                                            onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                                            className="pl-11"
                                        />
                                        <LucideCalendar className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                    </div>
                                </div>

                                <div className="md:col-span-2 flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        id={`current-${exp.id}`}
                                        checked={exp.current}
                                        onChange={(e) => updateExperience(exp.id, "current", e.target.checked)}
                                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary/20"
                                    />
                                    <label htmlFor={`current-${exp.id}`} className="text-sm font-medium text-foreground cursor-pointer">
                                        I am currently working here
                                    </label>
                                </div>

                                <div className="md:col-span-2 space-y-3">
                                    <div className="flex items-center justify-between">
                                        <label className="text-sm font-medium text-foreground/80">Role Description & Achievements</label>
                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="h-8 text-[10px] text-primary hover:bg-primary/5 uppercase font-bold tracking-widest gap-1.5"
                                            onClick={() => handleAIRefine(exp.id, exp.description, exp.role)}
                                            isLoading={refiningId === exp.id}
                                        >
                                            <LucideSparkles className="w-3.5 h-3.5" />
                                            AI Refine
                                        </Button>
                                    </div>
                                    <textarea
                                        placeholder="• Increased revenue by 20% by implementing new features...
• Led a team of 5 developers..."
                                        value={exp.description}
                                        onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                                        className="w-full min-h-[150px] p-4 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none text-sm placeholder:text-muted-foreground/50"
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
                    className="w-full border-dashed border-2 py-6 text-muted-foreground hover:text-primary hover:border-primary/50"
                    onClick={addExperience}
                >
                    <LucidePlus className="mr-2 w-5 h-5" />
                    Add Another Role
                </Button>
            )}
        </div>
    );
};
