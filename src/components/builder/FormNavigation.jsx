"use client";

import { useResume } from "@/context/AuthContext"; // Wait, I need useResume from ResumeContext
import { useResume as useResumeData } from "@/context/ResumeContext";
import { Button } from "../ui/Button";
import { LucideChevronLeft, LucideChevronRight, LucideCheckCircle } from "lucide-react";

export const FormNavigation = ({ onNext }) => {
    const { currentStep, prevStep, nextStep } = useResumeData();
    const isLastStep = currentStep === 8;
    const isFirstStep = currentStep === 1;

    return (
        <div className="flex items-center justify-between pt-10 mt-10 border-t border-border">
            <Button
                variant="ghost"
                onClick={prevStep}
                className={!isFirstStep ? "visible" : "invisible"}
            >
                <LucideChevronLeft className="mr-2 w-5 h-5" />
                Back
            </Button>

            <Button
                onClick={isLastStep ? onNext : nextStep}
                className="min-w-[140px]"
            >
                {isLastStep ? (
                    <>
                        Preview Resume
                        <LucideCheckCircle className="ml-2 w-5 h-5" />
                    </>
                ) : (
                    <>
                        Next Step
                        <LucideChevronRight className="ml-2 w-5 h-5" />
                    </>
                )}
            </Button>
        </div>
    );
};
