"use client";

import { useResume } from "@/context/ResumeContext";
import { Badge } from "../ui/Badge";
import { LucideX, LucideAward, LucideLanguages, LucideTrophy } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <div className="space-y-6 group/cat">
            <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl bg-white/[0.03] border border-white/10 shadow-2xl group-focus-within/cat:border-primary/40 transition-colors`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                </div>
                <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white/80 group-focus-within/cat:text-primary transition-colors">{title}</h3>
                </div>
            </div>

            <div className="flex flex-wrap gap-3 p-6 min-h-[80px] bg-white/[0.02] border border-white/10 rounded-[2rem] focus-within:ring-4 focus-within:ring-primary/40 focus-within:border-primary focus-within:bg-white/[0.05] transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
                <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                        <motion.div
                            key={item}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            layout
                        >
                            <Badge
                                variant="ghost"
                                className="flex items-center gap-2 bg-white/5 border border-white/5 hover:bg-white/10 text-zinc-300 py-2.5 px-4 rounded-xl transition-all"
                            >
                                <span className="text-xs font-bold tracking-wide">{item}</span>
                                <button
                                    onClick={() => onRemove(item)}
                                    className="text-zinc-500 hover:text-destructive transition-colors"
                                >
                                    <LucideX className="w-3.5 h-3.5" />
                                </button>
                            </Badge>
                        </motion.div>
                    ))}
                </AnimatePresence>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent border-none outline-none text-sm min-w-[200px] text-white placeholder:text-zinc-700 font-medium py-1"
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
        <div className="space-y-12">
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <LucideAward className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black font-heading text-white tracking-tight">Ancillary_Data</h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Finalize your professional profile augmentation.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-12">
                <InfoCategory
                    title="Certifications & Protocols"
                    icon={LucideTrophy}
                    items={resumeData.additional.certifications}
                    onAdd={(item) => addItem("certifications", item)}
                    onRemove={(item) => removeItem("certifications", item)}
                    color="text-primary"
                    placeholder="e.g. AWS_Certified_Cloud_Architect"
                />

                <InfoCategory
                    title="Communication Protocols (Languages)"
                    icon={LucideLanguages}
                    items={resumeData.additional.languages}
                    onAdd={(item) => addItem("languages", item)}
                    onRemove={(item) => removeItem("languages", item)}
                    color="text-emerald-500"
                    placeholder="e.g. Multilingual_Sync: English, French"
                />

                <InfoCategory
                    title="Honors & Commendations"
                    icon={LucideAward}
                    items={resumeData.additional.awards}
                    onAdd={(item) => addItem("awards", item)}
                    onRemove={(item) => removeItem("awards", item)}
                    color="text-amber-500"
                    placeholder="e.g. Distinguished_Service_Award"
                />
            </div>

            <div className="p-8 bg-emerald-500/5 rounded-[3rem] border border-emerald-500/10 flex items-center justify-between gap-8 relative overflow-hidden group/final">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-transparent opacity-0 group-hover/final:opacity-100 transition-opacity" />

                <div className="space-y-2 relative z-10">
                    <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.4em]">Final_Sync_Sequence</p>
                    <p className="text-lg font-black text-white uppercase tracking-widest">Configuration 95% Complete</p>
                    <p className="text-xs text-zinc-500 font-medium">Your professional matrix is nearly perfected. Proceed to visual selection.</p>
                </div>

                <div className="hidden sm:block relative z-10">
                    <div className="w-20 h-20 bg-white/5 backdrop-blur-3xl rounded-[2rem] border border-white/10 flex items-center justify-center shadow-2xl group-hover/final:border-emerald-500/40 transition-all duration-700">
                        <span className="text-emerald-400 font-black text-xl tabular-nums drop-shadow-[0_0_10px_rgba(52,211,153,0.3)]">95%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
