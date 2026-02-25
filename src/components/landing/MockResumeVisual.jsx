"use client";

import { motion } from "framer-motion";
import { LucideCheckCircle } from "lucide-react";

export const MockResumeVisual = () => {
    return (
        <div className="relative w-full max-w-[400px] h-[550px] bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-border p-8 font-mono">
            {/* Header */}
            <div className="space-y-4 border-b-2 border-zinc-900 pb-6">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "fit-content" }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="overflow-hidden whitespace-nowrap"
                >
                    <h1 className="text-2xl font-black bg-zinc-900 text-white px-3 py-1 uppercase">ALEX RIVERA</h1>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="text-xs font-bold text-zinc-600"
                >
                    System.out.println("Senior Software Engineer");
                </motion.p>

                <div className="flex gap-2 text-[8px] text-zinc-400 font-bold uppercase tracking-tighter">
                    <span>// alex@engine.io</span>
                    <span>// sf, ca</span>
                </div>
            </div>

            {/* Content Sections */}
            <div className="mt-8 space-y-6">
                {/* Summary */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[10px] font-black uppercase text-zinc-400">README.md</span>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 3 }}
                        className="text-[10px] text-zinc-500 leading-relaxed italic"
                    >
                        &quot;High-impact engineer with 8+ years experience building AI-powered consumer apps...&quot;
                    </motion.p>
                </div>

                {/* Experience */}
                <div className="space-y-4">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        <span className="text-[10px] font-black uppercase text-zinc-400">git_history</span>
                    </div>

                    <div className="space-y-3">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 3.5 }}
                            className="bg-zinc-50 p-3 rounded-xl border border-zinc-100"
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-black">Google</span>
                                <span className="text-[8px] text-zinc-400 font-bold italic">2022 — Present</span>
                            </div>
                            <div className="h-1.5 w-full bg-zinc-200 rounded-full mb-1" />
                            <div className="h-1.5 w-3/4 bg-zinc-200 rounded-full" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 4 }}
                            className="bg-zinc-50 p-3 rounded-xl border border-zinc-100 opacity-60"
                        >
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-[10px] font-black">Meta</span>
                                <span className="text-[8px] text-zinc-400 font-bold italic">2018 — 2022</span>
                            </div>
                            <div className="h-1.5 w-3/4 bg-zinc-200 rounded-full" />
                        </motion.div>
                    </div>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span className="text-[10px] font-black uppercase text-zinc-400">stack.json</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "AI", "Node", "AWS"].map((skill, i) => (
                            <motion.span
                                key={skill}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 4.5 + i * 0.1 }}
                                className="px-2 py-1 bg-zinc-900 text-white text-[8px] font-bold rounded"
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating ATS Badge */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ delay: 5, type: "spring", stiffness: 200 }}
                className="absolute -right-4 top-1/2 p-4 bg-white shadow-2xl border border-emerald-100 rounded-3xl z-20 flex items-center gap-3"
            >
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white">
                    <LucideCheckCircle size={20} />
                </div>
                <div>
                    <p className="text-[8px] font-black text-muted-foreground uppercase tracking-widest leading-none">ATS Pass</p>
                    <p className="text-xl font-black text-emerald-600">98%</p>
                </div>
            </motion.div>
        </div>
    );
};
