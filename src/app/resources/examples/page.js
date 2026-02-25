"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LucideBriefcase, LucideCode, LucidePalette, LucideLineChart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function ResumeExamplesPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="text-center space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black font-heading">
                            Success <span className="text-gradient">Examples</span>
                        </h1>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                            Browse successful resumes that won roles at top companies like Google, Meta, and McKinsey.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Software Engineer",
                                type: "Technical",
                                icon: LucideCode,
                                description: "Focused on stack depth, open source, and architectural impact.",
                                color: "text-blue-500",
                                bg: "bg-blue-50"
                            },
                            {
                                title: "Product Manager",
                                type: "Leadership",
                                icon: LucideLineChart,
                                description: "Highlights metrics, roadmap strategy, and cross-functional success.",
                                color: "text-emerald-500",
                                bg: "bg-emerald-50"
                            },
                            {
                                title: "Marketing Director",
                                type: "Creative",
                                icon: LucidePalette,
                                description: "Showcases brand growth, viral campaigns, and ROAS data.",
                                color: "text-rose-500",
                                bg: "bg-rose-50"
                            },
                            {
                                title: "Finance Executive",
                                type: "Corporate",
                                icon: LucideBriefcase,
                                description: "Emphasizes P&L management, risk mitigation, and scaling.",
                                color: "text-amber-500",
                                bg: "bg-amber-50"
                            }
                        ].map((ex, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative glass-card p-8 rounded-[2.5rem] border border-border hover:border-primary/20 hover:shadow-2xl transition-all duration-500"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${ex.bg} flex items-center justify-center ${ex.color} mb-6`}>
                                    <ex.icon size={28} />
                                </div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-2">{ex.type}</p>
                                <h3 className="text-xl font-bold font-heading mb-4">{ex.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                                    {ex.description}
                                </p>
                                <Link href="/templates" className="block">
                                    <Button variant="outline" className="w-full rounded-xl text-sm font-bold group-hover:bg-primary group-hover:text-white transition-all">
                                        Use This Style
                                    </Button>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-primary/5 rounded-[3rem] p-12 text-center space-y-6">
                        <h2 className="text-3xl font-black font-heading">Need a custom example?</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Our AI can analyze your target job description and generate a tailored example specific to your career path.
                        </p>
                        <Link href="/builder" className="inline-block">
                            <Button className="px-10 py-4 rounded-xl text-lg font-bold">Start Building Now</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
