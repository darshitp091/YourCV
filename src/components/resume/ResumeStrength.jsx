"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { LucideShieldCheck, LucideShieldAlert, LucideInfo } from 'lucide-react';

export const ResumeStrength = ({ data }) => {
    const score = useMemo(() => {
        let s = 0;
        const { personal, summary, experience, education, skills, projects } = data;

        // 1. Personal Info (10pts)
        if (personal?.fullName) s += 5;
        if (personal?.jobTitle) s += 5;

        // 2. Summary (15pts)
        if (summary?.length > 100) s += 15;
        else if (summary?.length > 0) s += 5;

        // 3. Experience (30pts)
        if (experience?.length >= 2) s += 30;
        else if (experience?.length === 1) s += 15;

        // 4. Education (15pts)
        if (education?.length >= 1) s += 15;

        // 5. Skills (15pts)
        const totalSkills = (skills?.technical?.length || 0) + (skills?.soft?.length || 0);
        if (totalSkills >= 8) s += 15;
        else if (totalSkills >= 4) s += 10;

        // 6. Projects (15pts)
        if (projects?.length >= 2) s += 15;
        else if (projects?.length === 1) s += 8;

        return s;
    }, [data]);

    const getColor = (s) => {
        if (s < 40) return 'text-red-500 bg-red-500';
        if (s < 75) return 'text-amber-500 bg-amber-500';
        return 'text-emerald-500 bg-emerald-500';
    };

    const getLabel = (s) => {
        if (s < 40) return 'Weak';
        if (s < 75) return 'Good';
        return 'Strong';
    };

    const colorClass = getColor(score).split(' ')[0];
    const bgClass = getColor(score).split(' ')[1];

    return (
        <div className="p-6 bg-white rounded-3xl border border-border space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Resume Strength</p>
                    <div className="group relative">
                        <LucideInfo className="w-3.5 h-3.5 text-muted-foreground/50 cursor-help" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
                            Based on content density, section completeness, and ATS best practices.
                        </div>
                    </div>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-tighter ${colorClass}`}>
                    {getLabel(score)}
                </span>
            </div>

            <div className="space-y-3">
                <div className="flex items-end justify-between">
                    <span className="text-4xl font-black font-heading tracking-tighter">{score}%</span>
                    {score >= 75 ? (
                        <LucideShieldCheck className={`w-8 h-8 ${colorClass} opacity-20`} />
                    ) : (
                        <LucideShieldAlert className={`w-8 h-8 ${colorClass} opacity-20`} />
                    )}
                </div>

                <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${score}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full ${bgClass}`}
                    />
                </div>
            </div>

            <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">
                {score < 40 ? 'Add more experience and projects to boost your score.' :
                    score < 75 ? 'You are almost there! Add a few more skills for 90%+' :
                        'Excellent! Your resume is highly competitive and ATS-ready.'}
            </p>
        </div>
    );
};
