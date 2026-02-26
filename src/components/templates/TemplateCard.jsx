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
    };

    return (
        <motion.div
            whileHover={{ y: -12, scale: 1.02 }}
            className="relative group transition-all duration-700"
        >
            <div className={`absolute -inset-[2px] rounded-[2.5rem] bg-gradient-to-br from-primary via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl z-0 duration-700 ${isSelected ? 'opacity-100' : ''}`} />

            <Card
                variant="premium"
                className={`relative z-10 overflow-hidden transition-all duration-700 border-2 rounded-[2.5rem] p-0 ${isSelected
                    ? "border-primary shadow-[0_0_50px_rgba(var(--primary-rgb),0.3)]"
                    : "border-white/5 hover:border-primary/40 bg-white/[0.02]"
                    }`}
            >
                {/* Real-World Preview Container - Optimized Scale & Centering */}
                <div className="relative aspect-[3/4.2] bg-white/[0.01] overflow-hidden border-b border-white/10 flex justify-center group-hover:bg-white/[0.03] transition-colors">
                    <div className="relative group-hover:scale-[1.08] transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        style={{
                            width: '816px',
                            height: '1056px',
                            transform: 'scale(0.32)',
                            transformOrigin: 'top center',
                            marginTop: '2rem'
                        }}>
                        <div className="w-full h-full bg-white shadow-[0_40px_100px_rgba(0,0,0,0.5)] rounded-sm overflow-hidden ring-1 ring-black/5">
                            <Template data={enrichedData} />
                        </div>
                    </div>

                    {/* Sophisticated Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-6 backdrop-blur-[4px]">
                        <div className="transform translate-y-10 group-hover:translate-y-0 transition-all duration-700 flex flex-col items-center gap-4">
                            <Button
                                variant="default"
                                size="sm"
                                onClick={() => onSelect(template.id)}
                                className="shadow-[0_0_30px_rgba(var(--primary-rgb),0.4)] px-10 py-6 h-auto rounded-2xl bg-primary text-black font-black uppercase tracking-widest text-[10px] hover:scale-110 transition-transform"
                            >
                                {isSelected ? <LucideCheck className="w-4 h-4 mr-3" /> : <LucideEye className="w-4 h-4 mr-3" />}
                                {isSelected ? "Active_Link" : "Mount_Protocol"}
                            </Button>

                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                <p className="text-[9px] text-white/50 font-black uppercase tracking-[0.4em]">
                                    ATS_SCAN_READY
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Premium Tags Overlay */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                        {template.category === 'tech' && <div className="bg-primary/20 backdrop-blur-md text-primary border border-primary/30 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">Tech_Stack</div>}
                        {template.category === 'creative' && <div className="bg-purple-500/20 backdrop-blur-md text-purple-400 border border-purple-500/30 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">Creative_Flux</div>}
                        {template.category === 'corporate' && <div className="bg-amber-500/20 backdrop-blur-md text-amber-400 border border-amber-500/30 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">Global_Corp</div>}
                    </div>
                </div>

                {/* Footer Info - High Quality Typography */}
                <div className="p-8 space-y-5 bg-transparent relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

                    <div className="space-y-2 relative z-10">
                        <div className="flex items-center justify-between">
                            <h3 className="font-black text-xs text-white uppercase tracking-[0.2em] group-hover:text-primary transition-colors">{template.name}</h3>
                            {isSelected && (
                                <div className="w-6 h-6 rounded-xl bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]">
                                    <LucideCheck className="w-3.5 h-3.5 text-black stroke-[3px]" />
                                </div>
                            )}
                        </div>
                        <p className="text-[10px] text-zinc-500 line-clamp-1 font-bold uppercase tracking-wider">
                            {template.description || "Synthesized architecture for " + template.name}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-1 relative z-10">
                        {template.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[8px] font-black uppercase tracking-widest text-zinc-500 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-primary/20 group-hover:text-primary/70 transition-all">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </Card>
        </motion.div>
    );
};
