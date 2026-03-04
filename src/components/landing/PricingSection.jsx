"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    LucideCheckCircle,
    LucideZap,
    LucideSparkles,
    LucideGithub,
    LucideDownload,
    LucideFileCheck
} from 'lucide-react';
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import Link from 'next/link';

export const PricingSection = () => {
    const features = [
        "Unlimited Resume Generations",
        "Job-Winning Templates Unlocked",
        "Unlimited AI Content Refinement",
        "Direct LaTeX Source Export",
        "No Watermarks or Branding",
        "Customizable Niche Templates",
        "ATS-Optimized Formatting"
    ];

    return (
        <section id="pricing" className="py-24 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -ml-64 -mb-64" />

            <div className="max-w-7xl mx-auto px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-bold text-sm"
                    >
                        <LucideZap className="w-4 h-4 fill-primary" />
                        COMMUNITY EDITION
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black font-heading text-foreground tracking-tight leading-tight">
                        Power to the <span className="text-primary italic">Professionals</span>.
                        <br />
                        Now Fully <span className="underline decoration-primary/30">Open Source</span>.
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We believe professional tools should be accessible to everyone. YourCV is now free, unlimited, and supported by our community.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card variant="glass" className="relative p-10 md:p-16 overflow-hidden border-2 border-primary/20 bg-white/50 backdrop-blur-xl">
                        {/* Glow effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-widest">
                                        <LucideFileCheck className="w-4 h-4" />
                                        Lifetime Access
                                    </div>
                                    <h3 className="text-6xl font-black text-foreground">₹0</h3>
                                    <p className="text-muted-foreground font-medium">Free forever. No hidden fees. No limits.</p>
                                </div>

                                <ul className="space-y-4">
                                    {features.map((feature, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-center gap-3 text-sm font-semibold text-muted-foreground"
                                        >
                                            <div className="p-1 bg-primary/10 rounded-full">
                                                <LucideCheckCircle className="w-3.5 h-3.5 text-primary" />
                                            </div>
                                            {feature}
                                        </motion.li>
                                    ))}
                                </ul>

                                <Link href="/login">
                                    <Button size="lg" className="w-full h-14 text-lg font-bold shadow-2xl shadow-primary/30">
                                        Get Started Now
                                        <LucideSparkles className="ml-2 w-5 h-5 fill-white" />
                                    </Button>
                                </Link>
                            </div>

                            <div className="space-y-8 p-8 bg-secondary/30 rounded-[40px] border border-border/50">
                                <div className="space-y-4 text-center md:text-left">
                                    <h4 className="font-bold text-lg">Why Free?</h4>
                                    <p className="text-xs text-muted-foreground leading-relaxed">
                                        After serving thousands of users, we've decided to move to an ad-supported, open-source model. Our mission is to democratize career growth tools.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4">
                                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border">
                                        <div className="p-2 bg-blue-50 rounded-xl">
                                            <LucideDownload className="w-5 h-5 text-blue-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">No Downloads Limits</p>
                                            <p className="text-[10px] text-muted-foreground">Export as many PDFs as you need.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-border">
                                        <div className="p-2 bg-purple-50 rounded-xl">
                                            <LucideSparkles className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm">Full AI Refinement</p>
                                            <p className="text-[10px] text-muted-foreground">Unlimited use of our AI editor.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 text-center">
                                    <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mb-4">Supported by the community</p>
                                    <div className="flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                                        <LucideGithub className="w-6 h-6" />
                                        <span className="font-black italic text-xl">OPEN SOURCE</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};
