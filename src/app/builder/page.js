"use client";

import { useResume } from "@/context/ResumeContext";
import { ProgressBar } from "@/components/builder/ProgressBar";
import { ResumeStrength } from "@/components/builder/ResumeStrength";
import { FormNavigation } from "@/components/builder/FormNavigation";
import { StepPersonal } from "@/components/builder/StepPersonal";
import { StepContact } from "@/components/builder/StepContact";
import { StepSummary } from "@/components/builder/StepSummary";
import { StepExperience } from "@/components/builder/StepExperience";
import { StepEducation } from "@/components/builder/StepEducation";
import { StepSkills } from "@/components/builder/StepSkills";
import { StepProjects } from "@/components/builder/StepProjects";
import { StepTemplates } from "@/components/builder/StepTemplates";
import { StepAdditional } from "@/components/builder/StepAdditional";
import { useRouter } from "next/navigation";
import { LucideArrowLeft, LucideZap } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function BuilderPage() {
    const { currentStep } = useResume();
    const router = useRouter();

    const renderStep = () => {
        switch (currentStep) {
            case 1: return <StepTemplates key="step1" />;
            case 2: return <StepPersonal key="step2" />;
            case 3: return <StepContact key="step3" />;
            case 4: return <StepSummary key="step4" />;
            case 5: return <StepExperience key="step5" />;
            case 6: return <StepEducation key="step6" />;
            case 7: return <StepSkills key="step7" />;
            case 8: return <StepProjects key="step8" />;
            case 9: return <StepAdditional key="step9" />;
            default: return <StepTemplates key="step-default" />;
        }
    };

    const handleFinish = () => {
        router.push("/builder/preview");
    };

    return (
        <main className="min-h-screen bg-[#070708] relative overflow-hidden flex flex-col selection:bg-primary/30 selection:text-primary">
            {/* Immersive Deep Mesh Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-[#070708]">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/20 rounded-full blur-[160px] animate-pulse opacity-50" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[65%] h-[65%] bg-accent/20 rounded-full blur-[160px] animate-pulse opacity-50" style={{ animationDelay: '2s' }} />
                <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[140px] opacity-30" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent)] opacity-[0.03]" />
            </div>

            {/* Premium Header */}
            <div className="bg-black/20 backdrop-blur-2xl border-b border-white/5 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/dashboard" className="flex items-center gap-3 text-sm font-bold text-zinc-400 hover:text-white transition-all group">
                        <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 border border-white/5 transition-colors">
                            <LucideArrowLeft className="w-4 h-4" />
                        </div>
                        <span className="tracking-tight">Back to Dashboard</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl bg-white/5 border border-white/10 shadow-2xl">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-[0.2em]">Neural Sync Active</span>
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary/10 border border-primary/20">
                            <LucideZap className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Premium Mode</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center py-16 px-6 relative z-10 max-w-7xl mx-auto w-full">
                {/* HUD & Strength Matrix */}
                <div className="w-full max-w-5xl mb-20 grid grid-cols-1 lg:grid-cols-4 gap-12 items-end">
                    <div className="lg:col-span-3">
                        <ProgressBar />
                    </div>
                    <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 p-6 rounded-[2rem] shadow-2xl relative overflow-hidden group/strength">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/strength:opacity-100 transition-opacity" />
                        <ResumeStrength />
                    </div>
                </div>

                {/* Main Form Container - Glassmorphism Evolution */}
                <div className="w-full max-w-5xl relative group">
                    {/* Outer Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-white/5 to-accent/20 rounded-[4rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />

                    <div className="bg-white/[0.03] backdrop-blur-[100px] rounded-[3.5rem] border border-white/10 p-10 md:p-16 shadow-[0_32px_120px_-16px_rgba(0,0,0,0.5)] min-h-[700px] flex flex-col justify-between relative overflow-hidden ring-1 ring-white/10">
                        {/* Internal Accents */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 flex-1">
                            <AnimatePresence mode="wait" initial={false}>
                                <motion.div
                                    key={currentStep}
                                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                    exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="h-full"
                                >
                                    {renderStep()}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        <div className="mt-16 pt-10 border-t border-white/5 relative z-10">
                            <FormNavigation onNext={handleFinish} />
                        </div>
                    </div>
                </div>

                {/* Subtle Brand Footer */}
                <div className="mt-20 flex flex-col items-center gap-4 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
                    <p className="text-[10px] font-black text-white uppercase tracking-[0.8em]">Engineered for Excellence</p>
                    <div className="h-0.5 w-12 bg-white/20 rounded-full" />
                </div>
            </div>
        </main>
    );
}
