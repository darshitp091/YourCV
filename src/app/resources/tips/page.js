"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LucideLightbulb, LucideCheckCircle2, LucidePenTool, LucideListChecks } from "lucide-react";

export default function ResumeTipsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-5xl mx-auto space-y-20">
                    <div className="text-center space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black font-heading">
                            Resume <span className="text-gradient">Pro Tips</span>
                        </h1>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                            Actionable advice from top recruiters to help you land more interviews in 2026.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                icon: LucidePenTool,
                                title: "Quantify Your Impact",
                                tips: [
                                    "Instead of 'Managed a team', use 'Led a team of 15 to increase revenue by 40%'.",
                                    "Always use numbers, percentages, or dollar amounts to show scale.",
                                    "Focus on achievements, not just responsibilities."
                                ]
                            },
                            {
                                icon: LucideListChecks,
                                title: "Optimizing for Scanners",
                                tips: [
                                    "Use standard section headings (Experience, Education, Skills).",
                                    "Avoid complex tables or graphics that can confuse AI parsers.",
                                    "Include both the acronym and full term (e.g., SEO and Search Engine Optimization)."
                                ]
                            },
                            {
                                icon: LucideCheckCircle2,
                                title: "The 6-Second Rule",
                                tips: [
                                    "Recruiters scan resumes in an 'F' pattern. Put important info at the top.",
                                    "Use a professional summary, not an objective statement.",
                                    "Bold your job titles and company names for quick scanning."
                                ]
                            },
                            {
                                icon: LucideLightbulb,
                                title: "Template Selection",
                                tips: [
                                    "Choose a template that matches your industry's culture.",
                                    "Ensure there is enough white space to avoid visual clutter.",
                                    "Use a readable font size (10-12pt for body text)."
                                ]
                            }
                        ].map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-10 rounded-[3rem] rounded-tr-none border border-border bg-[#FAF7F2]/30"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                                    <section.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-6">{section.title}</h3>
                                <ul className="space-y-4">
                                    {section.tips.map((tip, index) => (
                                        <li key={index} className="flex gap-3 text-muted-foreground leading-relaxed">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                                            {tip}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
