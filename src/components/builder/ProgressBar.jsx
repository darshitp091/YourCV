"use client";

import { motion } from "framer-motion";
import { useResume } from "@/context/ResumeContext";
import { LucideCheck, LucideHexagon } from "lucide-react";
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
    "Finalize",
];

export const ProgressBar = () => {
    const { currentStep } = useResume();

    return (
        <div className="w-full relative px-2">
            <div className="relative flex items-center justify-between">
                {/* Background Line with Pulse */}
                <div className="absolute top-6 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
                    <motion.div
                        className="w-full h-full bg-primary/20"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    />
                </div>

                {/* Cyber Progress Line */}
                <motion.div
                    className="absolute top-6 left-0 h-[1.5px] bg-gradient-to-r from-primary via-primary to-accent rounded-full origin-left shadow-[0_0_20px_rgba(var(--primary-rgb),0.5)]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: (currentStep - 1) / (STEPS.length - 1) }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: "100%" }}
                />

                {/* HUD Nodes */}
                {STEPS.map((step, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = currentStep > stepNumber;
                    const isActive = currentStep === stepNumber;

                    return (
                        <div key={step} className="flex flex-col items-center gap-4 relative z-10 group/node">
                            <motion.div
                                initial={false}
                                animate={{
                                    scale: isActive ? 1.2 : 1,
                                    opacity: isCompleted || isActive ? 1 : 0.4
                                }}
                                className="relative cursor-default"
                            >
                                {/* Hexagon Base */}
                                <div className={clsx(
                                    "w-12 h-12 flex items-center justify-center transition-all duration-700",
                                    isCompleted || isActive ? "text-primary" : "text-zinc-600"
                                )}>
                                    <LucideHexagon
                                        className={clsx(
                                            "w-full h-full stroke-[1px] transition-all duration-700 fill-black/40",
                                            isActive && "drop-shadow-[0_0_8px_rgba(var(--primary-rgb),0.6)]"
                                        )}
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {isCompleted ? (
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                className="bg-primary rounded-full p-1 shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]"
                                            >
                                                <LucideCheck className="w-3 h-3 text-black stroke-[4px]" />
                                            </motion.div>
                                        ) : (
                                            <span className={clsx(
                                                "text-[10px] font-black tracking-tighter tabular-nums transition-colors duration-500",
                                                isActive ? "text-white" : "text-zinc-500 group-hover/node:text-zinc-300"
                                            )}>
                                                0{stepNumber}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Active Glow Ring */}
                                {isActive && (
                                    <motion.div
                                        layoutId="hud-glow"
                                        className="absolute -inset-2 bg-primary/20 blur-xl rounded-full -z-10"
                                        transition={{ duration: 0.5 }}
                                    />
                                )}
                            </motion.div>

                            {/* HUD Label */}
                            <div className="flex flex-col items-center gap-1 min-w-[80px]">
                                <span className={clsx(
                                    "text-[8px] font-black uppercase tracking-[0.3em] transition-all duration-500 text-center",
                                    isActive ? "text-primary" : isCompleted ? "text-primary/40" : "text-zinc-700 group-hover/node:text-zinc-500"
                                )}>
                                    {isActive ? `Step_${stepNumber}` : step}
                                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="hud-label-dot"
                                        className="w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_rgba(var(--primary-rgb),1)]"
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
