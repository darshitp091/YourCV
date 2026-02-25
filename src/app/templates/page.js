"use client";

import { useState } from "react";
import { TemplateCard } from "@/components/templates/TemplateCard";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";
import { Button } from "@/components/ui/Button";
import { useResume } from "@/context/ResumeContext";
import { ResumeProvider } from "@/context/ResumeContext";

import { TEMPLATES_METADATA, TEMPLATE_CATEGORIES } from "@/data/templates-metadata";
import { LucideSearch, LucideSparkles, LucideFilter } from "lucide-react";

function TemplatesGallery() {
    const { resumeData, updateSection } = useResume();
    const [selectedId, setSelectedId] = useState(resumeData.templateId || "classic-professional");
    const [activeCategory, setActiveCategory] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");

    const handleSelect = (id) => {
        setSelectedId(id);
        updateSection("templateId", id);
    };

    const filteredTemplates = TEMPLATES_METADATA.filter(template => {
        const matchesCategory = activeCategory === "all" || template.category === activeCategory;
        const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            template.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="flex h-screen bg-[#FAF7F2] overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                <Topbar title="Template Library" />

                <main className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-[#FAF7F2]/50">
                    <div className="max-w-7xl mx-auto space-y-12 pb-32">
                        {/* Header Section */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div className="space-y-4 max-w-2xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-[10px] font-black uppercase tracking-widest text-primary">
                                    <LucideSparkles className="w-3 h-3" />
                                    Premium Resume Collection
                                </div>
                                <h1 className="text-5xl font-black font-heading tracking-tight text-foreground">
                                    Handcrafted <span className="text-gradient">Templates.</span>
                                </h1>
                                <p className="text-lg text-muted-foreground font-medium">
                                    50+ specialized layouts tailored for every career path. From high-stakes finance to avant-garde creative roles.
                                </p>
                            </div>

                            {/* Search Bar */}
                            <div className="relative w-full md:w-80 group">
                                <LucideSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
                                <input
                                    type="text"
                                    placeholder="Search roles, skills, or industries..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-11 pr-4 py-3.5 bg-white border border-border/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary transition-all font-medium text-sm shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Category Filter Bar */}
                        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar border-b border-border/40">
                            {TEMPLATE_CATEGORIES.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeCategory === category.id
                                        ? "bg-primary text-white shadow-lg shadow-primary/20 scale-105"
                                        : "text-muted-foreground hover:bg-white hover:text-primary"
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>

                        {/* Templates Grid - Optimized for 3 columns on large screens for better preview visibility */}
                        {filteredTemplates.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                                {filteredTemplates.map((template) => (
                                    <TemplateCard
                                        key={template.id}
                                        template={template}
                                        isSelected={selectedId === template.id}
                                        onSelect={handleSelect}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="py-24 text-center space-y-4 bg-white/50 rounded-3xl border border-dashed border-border/60">
                                <div className="w-20 h-20 bg-secondary/30 rounded-full flex items-center justify-center mx-auto">
                                    <LucideFilter className="w-8 h-8 text-muted-foreground/30" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="font-bold text-xl">No templates found</h3>
                                    <p className="text-muted-foreground text-sm">Try adjusting your search or category filters.</p>
                                </div>
                                <Button variant="outline" onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}>
                                    Clear all filters
                                </Button>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default function TemplatesPage() {
    return (
        <ResumeProvider>
            <TemplatesGallery />
        </ResumeProvider>
    );
}
