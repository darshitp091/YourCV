"use client";

import { useResume } from "@/context/ResumeContext";
import { Badge } from "../ui/Badge";
import { LucideX, LucideAward, LucideLanguages, LucideTrophy } from "lucide-react";
import { useState } from "react";

const InfoCategory = ({ title, icon: Icon, items, onAdd, onRemove, color, placeholder }) => {
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && inputValue.trim()) {
            e.preventDefault();
            onAdd(inputValue.trim());
            setInputValue("");
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <div className={`p-2 rounded-xl bg-white border border-border shadow-sm`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <h3 className="font-bold font-heading text-lg text-foreground">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2 p-4 min-h-[60px] bg-white border border-border rounded-2xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                {items.map((item) => (
                    <Badge
                        key={item}
                        variant="ghost"
                        className="flex items-center gap-1.5 bg-secondary/30 border-transparent hover:bg-secondary/50 py-1.5 px-3"
                    >
                        {item}
                        <button
                            onClick={() => onRemove(item)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                            <LucideX className="w-3.5 h-3.5" />
                        </button>
                    </Badge>
                ))}
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-sm min-w-[200px] placeholder:text-muted-foreground/40"
                />
            </div>
        </div>
    );
};

export const StepAdditional = () => {
    const { resumeData, updateSection } = useResume();

    const addItem = (category, item) => {
        if (resumeData.additional[category].includes(item)) return;
        updateSection("additional", {
            ...resumeData.additional,
            [category]: [...resumeData.additional[category], item],
        });
    };

    const removeItem = (category, item) => {
        updateSection("additional", {
            ...resumeData.additional,
            [category]: resumeData.additional[category].filter((i) => i !== item),
        });
    };

    return (
        <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold font-heading text-foreground">Almost Finished!</h2>
                <p className="text-muted-foreground">Add any final details that make you stand out from the crowd.</p>
            </div>

            <div className="grid grid-cols-1 gap-10">
                <InfoCategory
                    title="Certifications"
                    icon={LucideTrophy}
                    items={resumeData.additional.certifications}
                    onAdd={(item) => addItem("certifications", item)}
                    onRemove={(item) => removeItem("certifications", item)}
                    color="text-primary"
                    placeholder="e.g. AWS Certified Solutions Architect"
                />

                <InfoCategory
                    title="Languages"
                    icon={LucideLanguages}
                    items={resumeData.additional.languages}
                    onAdd={(item) => addItem("languages", item)}
                    onRemove={(item) => removeItem("languages", item)}
                    color="text-emerald-500"
                    placeholder="e.g. English (Native), Spanish (Fluent)"
                />

                <InfoCategory
                    title="Awards & Honors"
                    icon={LucideAward}
                    items={resumeData.additional.awards}
                    onAdd={(item) => addItem("awards", item)}
                    onRemove={(item) => removeItem("awards", item)}
                    color="text-amber-500"
                    placeholder="e.g. Employee of the Year 2024"
                />
            </div>

            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between gap-6">
                <div className="space-y-1">
                    <p className="font-bold text-emerald-900">You're doing great!</p>
                    <p className="text-sm text-emerald-800/70">Your resume is now 95% complete. Next step is to preview and pick a template.</p>
                </div>
                <div className="hidden sm:block">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-emerald-500 font-bold">95%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
