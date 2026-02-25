"use client";

import { motion } from "framer-motion";
import { useResume } from "@/context/ResumeContext";
import { LucideCheck } from "lucide-react";
import { clsx } from "clsx";

const STEPS = [
    "Template",
    "Personal",
    "Contact",
    "Summary",
    "Experience",
    "Education",
    "Skills",
    "Projects",
    "Ready",
];

export const ProgressBar = () => {
    const { currentStep } = useResume();

    return (
        <div className="w-full py-8">
            <div className="max-w-4xl mx-auto px-4">
                <div className="relative flex items-center justify-between">
                    {/* Progress Line */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 -z-10" />
                    <motion.div
                        className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 -z-10 origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: (currentStep - 1) / (STEPS.length - 1) }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        style={{ width: "100%" }}
                    />

                    {/* Steps */}
                    {STEPS.map((step, index) => {
                        const stepNumber = index + 1;
                        const isCompleted = currentStep > stepNumber;
                        const isActive = currentStep === stepNumber;

                        return (
                            <div key={step} className="flex flex-col items-center gap-2">
                                <motion.div
                                    initial={false}
                                    animate={{
                                        backgroundColor: isCompleted || isActive ? "var(--color-primary)" : "var(--color-card)",
                                        scale: isActive ? 1.2 : 1,
                                        borderColor: isCompleted || isActive ? "var(--color-primary)" : "var(--color-border)",
                                    }}
                                    className={clsx(
                                        "w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors shadow-sm relative z-10",
                                        (isCompleted || isActive) ? "text-white" : "text-muted-foreground bg-white"
                                    )}
                                >
                                    {isCompleted ? (
                                        <LucideCheck className="w-5 h-5" />
                                    ) : (
                                        stepNumber
                                    )}

                                    {isActive && (
                                        <motion.div
                                            layoutId="active-step-glow"
                                            className="absolute inset-0 rounded-full bg-primary/20 -z-10"
                                            initial={{ scale: 1 }}
                                            animate={{ scale: 1.5, opacity: 0 }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        />
                                    )}
                                </motion.div>
                                <span className={clsx(
                                    "text-[10px] uppercase tracking-widest font-bold hidden md:block",
                                    isActive ? "text-primary" : "text-muted-foreground/60"
                                )}>
                                    {step}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
