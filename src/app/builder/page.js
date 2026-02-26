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
        <main className="min-h-screen bg-[#FAF9F6] relative overflow-hidden flex flex-col selection:bg-primary/30 selection:text-primary">
            {/* Immersive Soft Mesh Gradient Background */}
            <div className="absolute inset-0 -z-10 bg-[#FAF9F6]">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary/10 rounded-full blur-[160px] opacity-40" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[65%] h-[65%] bg-accent/10 rounded-full blur-[160px] opacity-40" />
                <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[140px] opacity-20" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,black,transparent)] opacity-[0.02] invert" />
            </div>

            {/* Premium Header */}
            <div className="bg-white/40 backdrop-blur-2xl border-b border-black/5 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/dashboard" className="flex items-center gap-3 text-sm font-bold text-zinc-500 hover:text-zinc-900 transition-all group">
                        <div className="p-2 rounded-xl bg-black/5 group-hover:bg-black/10 border border-black/5 transition-colors">
                            <LucideArrowLeft className="w-4 h-4" />
                        </div>
                        <span className="tracking-tight">Back to Dashboard</span>
                    </Link>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl bg-black/[0.03] border border-black/5">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.3)]" />
                            <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">Neural Sync Active</span>
                        </div>

                        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary/10 border border-primary/20">
                            <LucideZap className="w-3.5 h-3.5 text-primary" />
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Premium Mode</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center py-12 px-6 relative z-10 max-w-[1500px] mx-auto w-full">
                {/* HUD & Strength Matrix - Aligned with Container */}
                <div className="w-full max-w-[1400px] mb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                    <div className="lg:col-span-9 bg-white/40 backdrop-blur-md border border-white/40 rounded-[2.5rem] p-6 md:p-12 shadow-sm h-full flex flex-col justify-center">
                        <ProgressBar />
                    </div>
                    <div className="lg:col-span-3 bg-white/60 backdrop-blur-xl border border-white rounded-[2.5rem] shadow-xl shadow-black/5 p-6 relative overflow-hidden group/strength h-full">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/strength:opacity-100 transition-opacity" />
                        <ResumeStrength />
                    </div>
                </div>

                {/* Main Form Container - Broadened Lumina Evolution */}
                <div className="w-full max-w-[1400px] relative group">
                    <div className="bg-white/80 backdrop-blur-[100px] rounded-[3.5rem] border border-white p-6 md:p-12 shadow-[0_32px_120px_-16px_rgba(0,0,0,0.08)] min-h-[700px] flex flex-col justify-between relative overflow-hidden ring-1 ring-black/5">
                        {/* Internal Accents */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                        <div className="relative z-10 flex-1 text-slate-900">
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

                        <div className="mt-16 pt-10 border-t border-black/5 relative z-10">
                            <FormNavigation onNext={handleFinish} />
                        </div>
                    </div>
                </div>

                {/* Subtle Brand Footer */}
                <div className="mt-20 flex flex-col items-center gap-4 opacity-30 hover:opacity-100 transition-all duration-700">
                    <p className="text-[10px] font-black text-zinc-900 uppercase tracking-[0.8em]">Engineered for Excellence</p>
                    <div className="h-0.5 w-12 bg-zinc-900/20 rounded-full" />
                </div>
            </div>
        </main>
    );
}
