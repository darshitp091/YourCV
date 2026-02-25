"use client";

import { motion } from "framer-motion";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { LucideEye, LucideCheck, LucideInfo } from "lucide-react";
import { getTemplateComponent } from "@/lib/template-registry";
import { MOCK_RESUME_DATA } from "@/data/mock-resume-data";

export const TemplateCard = ({ template, onSelect, isSelected }) => {
    const Template = getTemplateComponent(template.id);

    // Simplified enriched data
    const enrichedData = {
        ...MOCK_RESUME_DATA,
        // ...data // In case any real data is passed - 'data' is not a prop here, using MOCK_RESUME_DATA for preview
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            className="relative group"
        >
            <Card
                variant={isSelected ? "default" : "glass"}
                className={`overflow-hidden transition-all duration-500 border-2 ${isSelected
                    ? "border-primary shadow-[0_20px_50px_rgba(13,110,110,0.15)] ring-4 ring-primary/5"
                    : "border-transparent hover:border-primary/20 shadow-sm hover:shadow-xl"
                    }`}
            >
                {/* Real-World Preview Container - Optimized Scale & Centering */}
                <div className="relative aspect-[3/4.2] bg-[#F8F9FA] overflow-hidden border-b border-border/10 flex justify-center">
                    <div className="relative group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        style={{
                            width: '816px',
                            height: '1056px',
                            transform: 'scale(0.38)',
                            transformOrigin: 'top center',
                            marginTop: '1rem'
                        }}>
                        <div className="w-full h-full bg-white shadow-[0_40px_100px_rgba(0,0,0,0.18)] rounded-sm overflow-hidden ring-1 ring-black/5">
                            <Template data={enrichedData} />
                        </div>
                    </div>

                    {/* Sophisticated Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 backdrop-blur-[2px]">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center gap-3">
                            <Button
                                variant="default"
                                size="sm"
                                onClick={() => onSelect(template.id)}
                                className="shadow-2xl shadow-primary/40 px-6"
                            >
                                {isSelected ? <LucideCheck className="w-4 h-4 mr-2" /> : <LucideEye className="w-4 h-4 mr-2" />}
                                {isSelected ? "Active" : "Use Template"}
                            </Button>

                            <p className="text-[10px] text-white/70 font-bold uppercase tracking-[0.2em]">
                                ATS Optimized
                            </p>
                        </div>
                    </div>

                    {/* Premium Tags Overlay */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                        {template.category === 'tech' && <Badge className="bg-blue-500/10 text-blue-600 border-blue-200">Tech</Badge>}
                        {template.category === 'creative' && <Badge className="bg-purple-500/10 text-purple-600 border-purple-200">Creative</Badge>}
                        {template.category === 'corporate' && <Badge className="bg-amber-500/10 text-amber-600 border-amber-200">Business</Badge>}
                    </div>
                </div>

                {/* Footer Info - High Quality Typography */}
                <div className="p-6 space-y-4 bg-white">
                    <div className="space-y-1">
                        <div className="flex items-center justify-between">
                            <h3 className="font-bold text-base text-foreground tracking-tight truncate">{template.name}</h3>
                            {isSelected && (
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                    <LucideCheck className="w-3 h-3 text-white" />
                                </div>
                            )}
                        </div>
                        <p className="text-[11px] text-muted-foreground line-clamp-1 font-medium">
                            {template.description || "Professional layout for " + template.name}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                        {template.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="text-[9px] font-black uppercase tracking-widest text-primary/50 bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10">
                                {tag}
                            </span>
                        ))}
                        {template.tags.length > 2 && (
                            <span className="text-[9px] font-black text-muted-foreground/40 self-center">
                                +{template.tags.length - 2}
                            </span>
                        )}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};
