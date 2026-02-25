"use client";

import { useResume } from "@/context/ResumeContext";
import { Input } from "../ui/Input";
import { Badge } from "../ui/Badge";
import { LucideX, LucideTerminal, LucideUsers, LucideWrench } from "lucide-react";
import { useState } from "react";

const SkillCategory = ({ title, icon: Icon, skills, onAdd, onRemove, color }) => {
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
                <Icon className={`w-5 h-5 ${color}`} />
                <h3 className="font-bold font-heading text-foreground">{title}</h3>
            </div>

            <div className="flex flex-wrap gap-2 p-3 min-h-[50px] bg-white border border-border rounded-xl focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
                {skills.map((skill) => (
                    <Badge
                        key={skill}
                        variant="ghost"
                        className="flex items-center gap-1.5 bg-secondary/30 border-transparent hover:bg-secondary/50 py-1"
                    >
                        {skill}
                        <button
                            onClick={() => onRemove(skill)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                        >
                            <LucideX className="w-3 h-3" />
                        </button>
                    </Badge>
                ))}
                <input
                    type="text"
                    placeholder="Type and press Enter..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-sm min-w-[120px] placeholder:text-muted-foreground/50"
                />
            </div>
        </div>
    );
};

export const StepSkills = () => {
    const { resumeData, updateSection } = useResume();

    const addSkill = (category, skill) => {
        if (resumeData.skills[category].includes(skill)) return;
        updateSection("skills", {
            ...resumeData.skills,
            [category]: [...resumeData.skills[category], skill],
        });
    };

    const removeSkill = (category, skill) => {
        updateSection("skills", {
            ...resumeData.skills,
            [category]: resumeData.skills[category].filter((s) => s !== skill),
        });
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold font-heading text-foreground">Skills & Expertise</h2>
                <p className="text-muted-foreground">Categorize your strengths to help ATS and recruiters find you.</p>
            </div>

            <div className="grid grid-cols-1 gap-8">
                <SkillCategory
                    title="Technical Skills"
                    icon={LucideTerminal}
                    skills={resumeData.skills.technical}
                    onAdd={(skill) => addSkill("technical", skill)}
                    onRemove={(skill) => removeSkill("technical", skill)}
                    color="text-primary"
                />

                <SkillCategory
                    title="Soft Skills & Leadership"
                    icon={LucideUsers}
                    skills={resumeData.skills.soft}
                    onAdd={(skill) => addSkill("soft", skill)}
                    onRemove={(skill) => removeSkill("soft", skill)}
                    color="text-emerald-500"
                />

                <SkillCategory
                    title="Tools & Technologies"
                    icon={LucideWrench}
                    skills={resumeData.skills.tools}
                    onAdd={(skill) => addSkill("tools", skill)}
                    onRemove={(skill) => removeSkill("tools", skill)}
                    color="text-amber-500"
                />
            </div>

            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200/50 flex items-start gap-3">
                <div className="bg-white p-1.5 rounded-lg shadow-sm">
                    <LucideTerminal className="w-4 h-4 text-amber-600" />
                </div>
                <p className="text-xs text-amber-800/80 leading-relaxed">
                    <span className="font-bold">ATS Tip:</span> Use specific keywords like "React.js" instead of just "React" or "Frontend" to improve your ranking in automated searches.
                </p>
            </div>
        </div>
    );
};
