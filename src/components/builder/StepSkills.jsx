"use client";

import { useResume } from "@/context/ResumeContext";
import { Input } from "../ui/Input";
import { Badge } from "../ui/Badge";
import { LucideX, LucideTerminal, LucideUsers, LucideWrench } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <div className="space-y-6 group/cat">
            <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 shadow-sm group-focus-within/cat:border-primary/40 transition-colors`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-zinc-900 group-focus-within/cat:text-primary transition-colors">
                        {title}
                        {title === "Technical Infrastructure" && <span className="text-red-500 ml-1">*</span>}
                    </h3>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 p-6 min-h-[80px] bg-white border border-zinc-200 rounded-[2rem] focus-within:ring-4 focus-within:ring-primary/10 focus-within:border-primary focus-within:bg-white transition-all duration-500 shadow-sm relative overflow-hidden group/input">
                <AnimatePresence mode="popLayout">
                    {skills.map((skill) => (
                        <motion.div
                            key={skill}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            layout
                        >
                            <Badge
                                variant="ghost"
                                className="flex items-center gap-2 bg-zinc-50 border border-zinc-100 hover:bg-zinc-100 text-zinc-600 py-2 px-4 rounded-xl transition-all shadow-sm"
                            >
                                <span className="text-xs font-bold tracking-wide">{skill}</span>
                                <button
                                    onClick={() => onRemove(skill)}
                                    className="text-zinc-400 hover:text-destructive transition-colors"
                                >
                                    <LucideX className="w-3.5 h-3.5" />
                                </button>
                            </Badge>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <input
                    type="text"
                    placeholder="TYPE_AND_SYNC..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-sm min-w-[180px] text-zinc-900 placeholder:text-zinc-400 font-medium py-1"
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
        <div className="space-y-12">
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm">
                        <LucideTerminal className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black font-heading text-zinc-900 tracking-tight">Expertise_Matrix</h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Categorize your primary skill nodes.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12">
                <SkillCategory
                    title="Technical Infrastructure"
                    icon={LucideTerminal}
                    skills={resumeData.skills.technical}
                    onAdd={(skill) => addSkill("technical", skill)}
                    onRemove={(skill) => removeSkill("technical", skill)}
                    color="text-primary"
                />

                <SkillCategory
                    title="Neural Networking (Soft Skills)"
                    icon={LucideUsers}
                    skills={resumeData.skills.soft}
                    onAdd={(skill) => addSkill("soft", skill)}
                    onRemove={(skill) => removeSkill("soft", skill)}
                    color="text-emerald-500"
                />

                <SkillCategory
                    title="Applied Technologies"
                    icon={LucideWrench}
                    skills={resumeData.skills.tools}
                    onAdd={(skill) => addSkill("tools", skill)}
                    onRemove={(skill) => removeSkill("tools", skill)}
                    color="text-amber-500"
                />
            </div>

            <div className="p-6 bg-primary/5 rounded-[2rem] border border-primary/10 flex items-start gap-4 transition-all hover:bg-primary/10 group/tip shadow-sm">
                <div className="p-2 bg-white rounded-xl shadow-sm border border-primary/10 group-hover/tip:scale-110 transition-transform">
                    <LucideTerminal className="w-5 h-5 text-primary" />
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">ATS_Optimization_Protocol</p>
                    <p className="text-xs text-zinc-500 leading-relaxed font-medium">
                        Search algorithms prioritize <span className="text-zinc-800 font-bold">exact terminology</span>. Use standardized titles like "React.js" or "Node.js" to maximize your visibility in automated screening pipelines.
                    </p>
                </div>
            </div>
        </div>
    );
};
