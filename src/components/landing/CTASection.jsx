"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { LucideArrowRight, LucideStar } from "lucide-react";
import Link from "next/link";

export const CTASection = () => {
    return (
        <section className="py-24 px-6 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#0D6E6E] to-[#2D9B9B] -z-10" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[100px]" />
            </div>

            <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold"
                >
                    <LucideStar className="w-4 h-4 text-accent fill-accent" />
                    <span>Join 10,000+ Successful Hires</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-heading text-white leading-tight"
                >
                    Ready to land your <span className="text-accent underline decoration-accent/30 underline-offset-8">Next Big Opportunity</span>?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto"
                >
                    Stop struggling with formatting and keywords. Let our AI build a resume that actually works.
                    Get started for free today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <Link href="/signup">
                        <Button size="lg" variant="accent" className="group text-accent-foreground px-12 py-5 text-lg">
                            Get Started Now
                            <LucideArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="/templates" className="text-white font-semibold hover:text-accent transition-colors">
                        Explore All Templates
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
