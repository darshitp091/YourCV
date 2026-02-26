"use client";

import { useState } from "react";
import { useResume } from "@/context/ResumeContext";
import { TEMPLATES_METADATA, TEMPLATE_CATEGORIES } from "@/data/templates-metadata";
import { TemplateCard } from "../templates/TemplateCard";
import { LucideSearch } from "lucide-react";

export const StepTemplates = () => {
    const { resumeData, updateSection } = useResume();
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredTemplates = TEMPLATES_METADATA.filter(template => {
        const matchesCategory = activeCategory === "all" || template.category === activeCategory;
        const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="space-y-12 animate-in fade-in duration-700">
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <LucideLayout className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black font-heading text-white tracking-tight text-glow-sm">Visual_Core</h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Select your primary interface architecture.</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-8 items-start justify-between">
                <div className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar w-full xl:w-auto mask-fade-right">
                    {TEMPLATE_CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all whitespace-nowrap border-2 ${activeCategory === category.id
                                ? "bg-primary border-primary text-black shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] scale-105"
                                : "bg-white/[0.03] border-white/5 text-zinc-500 hover:border-white/10 hover:text-white"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                <div className="relative w-full xl:w-80 group/search">
                    <div className="absolute inset-0 bg-primary/20 blur-2xl opacity-0 group-focus-within/search:opacity-100 transition-opacity" />
                    <LucideSearch className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600 group-focus-within/search:text-primary transition-colors relative z-10" />
                    <input
                        type="text"
                        placeholder="Search_Architecture..."
                        className="w-full pl-14 pr-6 py-4 bg-white/[0.03] border-2 border-white/5 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/40 focus:border-primary transition-all text-[11px] font-bold text-white placeholder:text-zinc-700 relative z-10 uppercase tracking-widest backdrop-blur-xl"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar-premium scroll-smooth pb-12">
                <AnimatePresence mode="popLayout">
                    {filteredTemplates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <TemplateCard
                                template={template}
                                isSelected={resumeData.templateId === template.id}
                                onSelect={(id) => updateSection("templateId", id)}
                            />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};
