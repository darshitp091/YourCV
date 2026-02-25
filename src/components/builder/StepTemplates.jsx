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
        <div className="space-y-8">
            <div className="space-y-4">
                <h2 className="text-3xl font-bold font-heading">Choose your template</h2>
                <p className="text-muted-foreground">Select a layout that best fits your career goals. You can change this later.</p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar w-full md:w-auto">
                    {TEMPLATE_CATEGORIES.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeCategory === category.id
                                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                                    : "bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-primary"
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-64">
                    <LucideSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search templates..."
                        className="w-full pl-9 pr-4 py-2 bg-secondary/30 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-xs"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                {filteredTemplates.map((template) => (
                    <TemplateCard
                        key={template.id}
                        template={template}
                        isSelected={resumeData.templateId === template.id}
                        onSelect={(id) => updateSection("templateId", id)}
                    />
                ))}
            </div>
        </div>
    );
};
