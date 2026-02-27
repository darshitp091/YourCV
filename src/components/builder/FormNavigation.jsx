"use client";

import { useResume } from "@/context/ResumeContext";
import { Button } from "../ui/Button";
import { LucideChevronLeft, LucideChevronRight, LucideZap } from "lucide-react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

export const FormNavigation = ({ onNext }) => {
    const { currentStep, prevStep, nextStep, validateStep, isFirstStep, isLastStep } = useResume();
    const isValid = validateStep(currentStep, true);

    const handleNext = () => {
        if (isLastStep) {
            onNext();
        } else {
            if (validateStep(currentStep)) {
                nextStep();
            }
        }
    };

    return (
        <div className="flex items-center justify-between">
            <Button
                variant="ghost"
                onClick={prevStep}
                className={isFirstStep ? "invisible" : "visible hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900 transition-all rounded-xl"}
            >
                <div className="flex items-center gap-2">
                    <LucideChevronLeft className="w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Sequence_Back</span>
                </div>
            </Button>

            <motion.div
                whileHover={isValid ? { scale: 1.02 } : {}}
                whileTap={isValid ? { scale: 0.98 } : {}}
                className="relative group"
            >
                {!isValid && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        <span className="text-[8px] font-black text-red-500 uppercase tracking-widest bg-white/80 backdrop-blur px-2 py-1 rounded-lg border border-red-100 shadow-sm">
                            Required Fields Incomplete
                        </span>
                    </div>
                )}
                <Button
                    onClick={handleNext}
                    disabled={!isValid}
                    className={clsx(
                        "min-w-[180px] font-black uppercase tracking-[0.2em] text-[10px] rounded-2xl h-14 border-b-4 relative z-10 shadow-lg transition-all",
                        isValid
                            ? "bg-primary hover:bg-primary/90 text-white border-primary/20 shadow-primary/20"
                            : "bg-zinc-100 text-zinc-400 border-zinc-200 shadow-none cursor-not-allowed"
                    )}
                >
                    <div className="flex items-center justify-center gap-3 w-full">
                        <span>{isLastStep ? "Finalize_Data" : "Next_Phase"}</span>
                        {isLastStep ? (
                            <LucideZap className={clsx("w-4 h-4 animate-pulse", isValid ? "fill-white" : "fill-zinc-300")} />
                        ) : (
                            <LucideChevronRight className="w-4 h-4" />
                        )}
                    </div>
                </Button>
            </motion.div>
        </div>
    );
};
