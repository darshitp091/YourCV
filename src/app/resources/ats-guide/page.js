"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LucideShieldCheck, LucideSearch, LucideZap, LucideCpu } from "lucide-react";

export default function ATSGuidePage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-16"
                    >
                        <div className="space-y-6 text-center">
                            <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em]">
                                2026 Edition
                            </span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl md:text-6xl font-black font-heading leading-tight"
                            >
                                Beating the <span className="text-gradient">ATS in 2026</span>: The YourCV Guide.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-muted-foreground text-xl leading-relaxed"
                            >
                                Applicant Tracking Systems have evolved. Legacy "keyword stuffing" no longer works. YourCV uses semantic optimization to ensure your resume is parsed perfectly by modern AI filters.
                            </motion.p>
                        </div>

                        {/* Content Grid */}
                        <div className="prose prose-lg prose-primary max-w-none text-muted-foreground
                            prose-headings:font-heading prose-headings:text-foreground prose-headings:font-black
                            prose-h2:text-4xl prose-h2:mt-12 prose-h2:mb-8 prose-h2:border-b prose-h2:pb-4
                            prose-p:mb-8 prose-p:text-xl prose-p:leading-relaxed
                            prose-strong:text-foreground prose-strong:font-bold"
                        >
                            <h2>1. What is an ATS?</h2>
                            <p>An Applicant Tracking System (ATS) is a software application that enables the electronic handling of recruitment needs. In 2026, 99% of Fortune 500 companies use some form of ATS to filter through thousands of resumes before a human recruiter even sees them.</p>

                            <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="p-8 rounded-3xl bg-secondary/5 border border-secondary/10">
                                    <LucideSearch className="text-secondary mb-4" size={32} />
                                    <h4 className="text-xl font-bold mb-2">Keyword Matching</h4>
                                    <p className="text-sm">Parsers scan for exact and semantic matches with the job description.</p>
                                </div>
                                <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-100">
                                    <LucideShieldCheck className="text-emerald-500 mb-4" size={32} />
                                    <h4 className="text-xl font-bold mb-2">Structural Analysis</h4>
                                    <p className="text-sm">Systems analyze the hierarchy of your data to build a career timeline.</p>
                                </div>
                            </div>

                            <h2>2. The "Generative" Shift</h2>
                            <p>The biggest change in 2026 is the shift from keyword-based filtering to generative summarization. Modern ATS now uses LLMs to "read" your resume and generate a 3-sentence summary for the hiring manager. If your resume is disorganized, the summary will be poor.</p>

                            <blockquote>"Structure is now more important than keywords. If the AI can't build a clear narrative from your bullet points, you've already lost."</blockquote>

                            <h2>3. Dos and Don'ts</h2>
                            <div className="not-prose space-y-4 mb-12">
                                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 italic">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">✓</div>
                                    <p className="text-foreground font-medium">DO use standard fonts like Inter, Roboto, or Arial.</p>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-rose-50 rounded-2xl border border-rose-100 italic">
                                    <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center flex-shrink-0">✕</div>
                                    <p className="text-foreground font-medium">DON'T put critical information in headers or footers.</p>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 italic">
                                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center flex-shrink-0">✓</div>
                                    <p className="text-foreground font-medium">DO use bullet points for experience, not long paragraphs.</p>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-rose-50 rounded-2xl border border-rose-100 italic">
                                    <div className="w-6 h-6 rounded-full bg-rose-500 text-white flex items-center justify-center flex-shrink-0">✕</div>
                                    <p className="text-foreground font-medium">DON'T use complex charts, icons, or progress bars for skills.</p>
                                </div>
                            </div>

                            <h2>4. Why LaTeX and PDF Matter</h2>
                            <p>Plain text is boring, and Word docs can break. standards-compliant LaTeX (like our ResumeAI templates) provides the perfect balance of visual appeal for humans and semantic structure for machines.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
