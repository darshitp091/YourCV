"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LucideQuote, LucideUsers, LucideTarget, LucideHistory } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero */}
            <section className="pt-32 pb-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-primary font-bold uppercase tracking-widest text-xs"
                            >
                                Our Mission
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-black font-heading leading-tight"
                            >
                                We're building the <span className="text-gradient">Future of Hiring</span>.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-muted-foreground text-xl leading-relaxed"
                            >
                                YourCV was founded in 2026 with a simple goal: to level the playing field for job seekers. We believe everyone deserves a chance to be seen, regardless of their design skills or knowledge of automated screening systems.
                            </motion.p>
                        </div>
                        <div className="relative">
                            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
                            <div className="glass-card p-12 rounded-[3rem] rounded-tr-none relative z-10 border-primary/20 bg-primary/5">
                                <LucideQuote className="text-primary/20 mb-6" size={48} />
                                <p className="text-2xl font-heading font-medium text-foreground italic leading-relaxed">
                                    "Technology shouldn't be a barrier to employment. We're using AI to make sure that human talent gets the attention it deserves."
                                </p>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold">DP</div>
                                    <div>
                                        <p className="font-bold">Darshit Patel</p>
                                        <p className="text-sm text-muted-foreground">Founder, YourCV</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 px-6 bg-[#FAF7F2]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: LucideUsers,
                                title: "Candidate-First",
                                description: "Every decision we make starts with the candidate. We prioritize your privacy and your success over everything else."
                            },
                            {
                                icon: LucideTarget,
                                title: "AI-Precision",
                                description: "We don't just use AI for buzzwords. We use it to provide structural precision and semantic optimization."
                            },
                            {
                                icon: LucideHistory,
                                title: "Constant Evolution",
                                description: "The job market moves fast. We update our algorithms and templates weekly to keep you ahead of the curve."
                            }
                        ].map((val, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="space-y-6"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-xl shadow-primary/5 flex items-center justify-center text-primary border border-primary/10">
                                    <val.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-bold font-heading">{val.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{val.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
