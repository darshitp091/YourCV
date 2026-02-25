"use client";

import { useResume } from "@/context/ResumeContext";
import { ProgressBar } from "@/components/builder/ProgressBar";
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
import { LucideArrowLeft } from "lucide-react";
import Link from "next/link";

export default function BuilderPage() {
    const { currentStep } = useResume();
    const router = useRouter();

    const renderStep = () => {
        switch (currentStep) {
            case 1: return <StepTemplates />;
            case 2: return <StepPersonal />;
            case 3: return <StepContact />;
            case 4: return <StepSummary />;
            case 5: return <StepExperience />;
            case 6: return <StepEducation />;
            case 7: return <StepSkills />;
            case 8: return <StepProjects />;
            case 9: return <StepAdditional />;
            default: return <StepTemplates />;
        }
    };

    const handleFinish = () => {
        router.push("/builder/preview");
    };

    return (
        <main className="min-h-screen bg-[#FAF7F2] pb-20">
            {/* Header */}
            <div className="bg-white border-b border-border sticky top-0 z-20">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/dashboard" className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
                        <LucideArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Auto-saving Draft</span>
                    </div>
                </div>
            </div>

            <ProgressBar />

            <div className="max-w-4xl mx-auto px-6 mt-8">
                <div className="bg-white rounded-3xl border border-border p-8 md:p-12 shadow-sm min-h-[600px] flex flex-col justify-between">
                    <div>
                        {renderStep()}
                    </div>

                    <FormNavigation onNext={handleFinish} />
                </div>
            </div>
        </main>
    );
}
