"use client";

import { useResume } from "@/context/ResumeContext";
import { motion, AnimatePresence } from "framer-motion";
import { LucideZap, LucideShieldCheck, LucideShieldAlert, LucideTrophy } from "lucide-react";
import { useEffect, useState } from "react";

export const ResumeStrength = () => {
    const { resumeData } = useResume();
    const [score, setScore] = useState(0);

    useEffect(() => {
        let currentScore = 0;

        // Personal (15%)
        if (resumeData.personal.fullName) currentScore += 5;
        if (resumeData.personal.jobTitle) currentScore += 5;
        if (resumeData.personal.photoUrl) currentScore += 5;

        // Contact (15%)
        if (resumeData.contact.email) currentScore += 3;
        if (resumeData.contact.phone) currentScore += 3;
        if (resumeData.contact.location) currentScore += 3;
        if (resumeData.contact.linkedin || resumeData.contact.github || resumeData.contact.portfolio) currentScore += 6;

        // Summary (10%)
        if (resumeData.summary && resumeData.summary.length > 50) currentScore += 10;

        // Experience (20%)
        if (resumeData.experience.length > 0) {
            currentScore += 10;
            if (resumeData.experience.length > 1) currentScore += 10;
        }

        // Education (15%)
        if (resumeData.education.length > 0) {
            currentScore += 10;
            if (resumeData.education.length > 1) currentScore += 5;
        }

        // Skills (10%)
        if (resumeData.skills.technical.length > 0) currentScore += 4;
        if (resumeData.skills.soft.length > 0) currentScore += 3;
        if (resumeData.skills.tools.length > 0) currentScore += 3;

        // Projects (10%)
        if (resumeData.projects.length > 0) {
            currentScore += 5;
            if (resumeData.projects.length > 1) currentScore += 5;
        }

        // Additional (5%)
        if (resumeData.additional.certifications.length > 0 || resumeData.additional.awards.length > 0) currentScore += 5;

        setScore(currentScore);
    }, [resumeData]);

    const getStrengthDetails = () => {
        if (score < 30) return { label: "Foundation", color: "text-red-400", bg: "bg-red-500/10", icon: LucideShieldAlert };
        if (score < 60) return { label: "Promising", color: "text-amber-400", bg: "bg-amber-500/10", icon: LucideZap };
        if (score < 90) return { label: "Professional", color: "text-emerald-400", bg: "bg-emerald-500/10", icon: LucideShieldCheck };
        return { label: "Elite Status", color: "text-primary", bg: "bg-primary/10", icon: LucideTrophy };
    };

    const details = getStrengthDetails();
    const Icon = details.icon;

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-lg ${details.bg}`}>
                        <Icon className={`w-4 h-4 ${details.color}`} />
                    </div>
                    <div>
                        <p className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Profile_Strength</p>
                        <p className={`text-sm font-black uppercase tracking-widest ${details.color}`}>{details.label}</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-2xl font-black text-white tabular-nums drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">{score}%</p>
                </div>
            </div>

            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div
                    className="h-full bg-gradient-to-r from-primary/50 to-primary"
                    initial={{ width: 0 }}
                    animate={{ width: `${score}%` }}
                    transition={{ duration: 1, ease: "circOut" }}
                />
            </div>

            <AnimatePresence>
                {score === 100 && (
                    <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[8px] font-bold text-primary uppercase tracking-[0.4em] text-center mt-1 animate-pulse"
                    >
                        Perfected_For_Deployment
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    );
};
