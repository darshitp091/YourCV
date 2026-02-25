"use client";

import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import { COMPETITORS } from "@/data/competitors";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { LucideCheck, LucideX, LucideZap, LucideShieldCheck, LucideSparkles } from "lucide-react";

export default function AlternativesPage() {
    const params = useParams();
    const competitor = COMPETITORS.find(c => c.slug === params.slug);

    if (!competitor) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold">Comparison not found</h1>
                    <Link href="/" className="text-primary font-bold">Back Home</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 bg-[#FAF7F2] relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

                <div className="max-w-4xl mx-auto text-center space-y-6 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border shadow-sm rounded-full text-xs font-bold text-primary"
                    >
                        <LucideZap className="w-3 h-3 fill-primary" />
                        Strategic Comparison
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black font-heading leading-tight"
                    >
                        {competitor.title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-muted-foreground leading-relaxed italic"
                    >
                        "{competitor.description}"
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="pt-8"
                    >
                        <Link href="/signup">
                            <Button size="lg" className="px-10 py-8 text-lg rounded-3xl shadow-2xl shadow-primary/20">
                                Switch to YourCV for Free
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black font-heading tracking-tight">The Side-by-Side Advantage</h2>
                    </div>

                    <div className="overflow-hidden border border-border/60 rounded-[3rem] shadow-2xl shadow-foreground/5 bg-white">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#FAF7F2]">
                                    <th className="p-8 border-b border-border text-sm font-black uppercase tracking-widest text-muted-foreground">Feature</th>
                                    <th className="p-8 border-b border-border text-center bg-primary/5">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-xl font-black text-primary">YourCV</span>
                                            <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full">RECOMMENDED</span>
                                        </div>
                                    </th>
                                    <th className="p-8 border-b border-border text-center text-xl font-black text-muted-foreground">
                                        {competitor.name}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {competitor.advantages.map((adv, idx) => (
                                    <tr key={idx} className="group hover:bg-primary/[0.02] transition-colors">
                                        <td className="p-8 border-b border-border group-last:border-0">
                                            <h3 className="font-black text-lg text-foreground">{adv.title}</h3>
                                        </td>
                                        <td className="p-8 border-b border-border group-last:border-0 bg-primary/[0.02]">
                                            <div className="flex items-start gap-4">
                                                <LucideShieldCheck className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                                                <p className="text-sm font-medium leading-relaxed italic">"{adv.yourcv}"</p>
                                            </div>
                                        </td>
                                        <td className="p-8 border-b border-border group-last:border-0 opacity-60">
                                            <div className="flex items-start gap-4">
                                                <LucideX className="w-6 h-6 text-muted-foreground/40 flex-shrink-0 mt-1" />
                                                <p className="text-sm font-medium leading-relaxed italic">"{adv.competitor}"</p>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Trust Trigger */}
            <section className="pb-32 px-6">
                <div className="max-w-3xl mx-auto p-12 bg-primary rounded-[3rem] text-center text-white space-y-6 relative overflow-hidden shadow-2xl shadow-primary/40">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-[60px]" />
                    <LucideSparkles className="w-12 h-12 mx-auto" />
                    <h2 className="text-3xl font-black font-heading leading-tight">Ready to Land More Interviews?</h2>
                    <p className="text-white/80 text-lg">
                        Stop struggling with complicated editors. Let our AI handle the heavy lifting while you focus on the interview prep.
                    </p>
                    <div className="pt-4">
                        <Link href="/signup">
                            <Button variant="secondary" size="lg" className="px-12 py-8 text-lg rounded-2xl">
                                Start Building Your Future
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
