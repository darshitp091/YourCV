"use client";

import { useResume } from "@/context/ResumeContext";
import { Button } from "../ui/Button";
import { LucideChevronLeft, LucideChevronRight, LucideZap } from "lucide-react";
import { motion } from "framer-motion";

export const FormNavigation = ({ onNext }) => {
    const { currentStep, prevStep, nextStep } = useResume();
    const isLastStep = currentStep === 9;
    const isFirstStep = currentStep === 1;

    return (
        <div className="flex items-center justify-between">
            <Button
                variant="ghost"
                onClick={prevStep}
                className={isFirstStep ? "invisible" : "visible hover:bg-white/5 text-zinc-400 hover:text-white transition-all"}
            >
                <div className="flex items-center gap-2">
                    <LucideChevronLeft className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Sequence_Back</span>
                </div>
            </Button>

            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
            >
                {/* Button Glow */}
                <div className="absolute -inset-2 bg-primary/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <Button
                    onClick={isLastStep ? onNext : nextStep}
                    className="min-w-[180px] bg-primary hover:bg-primary/90 text-black font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl h-14 border-b-4 border-black/20 relative z-10"
                >
                    <div className="flex items-center justify-center gap-3 w-full">
                        <span>{isLastStep ? "Finalize_Data" : "Next_Phase"}</span>
                        {isLastStep ? (
                            <LucideZap className="w-4 h-4 animate-pulse" />
                        ) : (
                            <LucideChevronRight className="w-4 h-4" />
                        )}
                    </div>
                </Button>
            </motion.div>
        </div>
    );
};
