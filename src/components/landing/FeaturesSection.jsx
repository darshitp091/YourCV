"use client";

import { motion } from "framer-motion";
import {
    LucideSparkles,
    LucideTarget,
    LucideCode,
    LucideLayout,
    LucideZap,
    LucideShieldCheck
} from "lucide-react";

const FEATURES = [
    {
        title: "AI-Powered Generation",
        description: "Gemini-powered content refinement helps you write professional summaries and bullet points that get noticed.",
        icon: LucideSparkles,
        color: "text-primary",
    },
    {
        title: "ATS Optimization",
        description: "Built-in ATS score analysis ensures your resume passes through automated screening systems with ease.",
        icon: LucideTarget,
        color: "text-emerald-500",
    },
    {
        title: "LaTeX Precision",
        description: "Generate pixel-perfect LaTeX documents client-side. Get the clean, academic look without the complexity.",
        icon: LucideCode,
        color: "text-amber-500",
    },
    {
        title: "Premium Templates",
        description: "Choose from 10+ industry-specific templates designed by HR professionals to make an immediate impact.",
        icon: LucideLayout,
        color: "text-blue-500",
    },
    {
        title: "Real-time Preview",
        description: "See your changes as you type. Our editor provides a live, high-fidelity preview of your selected template.",
        icon: LucideZap,
        color: "text-purple-500",
    },
    {
        title: "Secure & Private",
        description: "Your data is encrypted and saved securely with Supabase. You maintain full control over your information.",
        icon: LucideShieldCheck,
        color: "text-rose-500",
    },
];

const FeatureCard = ({ title, description, icon: Icon, color, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -10 }}
        className="p-10 bg-white/50 backdrop-blur-xl border border-white/60 rounded-[2.5rem] rounded-tr-none group cursor-default transition-all duration-500 hover:shadow-[0_20px_50px_rgba(13,110,110,0.1)] hover:border-primary/20 relative overflow-hidden"
    >
        {/* Glow effect on hover */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />

        <div className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center bg-white shadow-sm border border-border group-hover:bg-primary group-hover:text-white transition-all duration-500`}>
            <Icon className={`w-7 h-7 ${color} group-hover:text-white transition-colors`} />
        </div>
        <h3 className="text-2xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">
            {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
            {description}
        </p>
    </motion.div>
);

export const FeaturesSection = () => {
    return (
        <section id="features" className="py-24 px-6 relative bg-[#FAF7F2]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-primary font-bold uppercase tracking-widest text-xs"
                    >
                        Why Choose Us
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold font-heading"
                    >
                        Everything you need for a <span className="text-gradient">Winning Resume</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground"
                    >
                        We combine cutting-edge AI with professional design principles to help you bypass recruiters' "no" pile.
                    </motion.p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard key={feature.title} {...feature} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
