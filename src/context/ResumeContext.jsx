"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "./AuthContext";
import { triggerWorkflow } from "@/lib/workflows/engine";
import { checkCredits, incrementUsage } from "@/lib/credits";

const ResumeContext = createContext({});

export const ResumeProvider = ({ children }) => {
    const { user } = useAuth();
    const [currentStep, setCurrentStep] = useState(1);
    const [resumeData, setResumeData] = useState({
        personal: {
            fullName: "",
            jobTitle: "",
            photoUrl: "",
        },
        contact: {
            email: "",
            phone: "",
            location: "",
            linkedin: "",
            github: "",
            portfolio: "",
        },
        summary: "",
        experience: [], // Array of objects: { id, company, role, location, startDate, endDate, current, description }
        education: [],  // Array of objects: { id, school, degree, field, startDate, endDate, gpa }
        skills: {
            technical: [],
            soft: [],
            tools: [],
        },
        projects: [],   // Array of objects: { id, name, description, techStack, link }
        additional: {
            certifications: [],
            languages: [],
            awards: [],
        },
        templateId: "classic-professional",
    });

    const updateSection = (section, data) => {
        setResumeData((prev) => ({
            ...prev,
            [section]: typeof data === 'function' ? data(prev[section]) : data,
        }));
    };

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 9));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    // Debounced Auto-save logic
    useEffect(() => {
        const saver = setTimeout(() => {
            if (user && resumeData.personal.fullName) {
                saveResume();
            }
        }, 2000); // Debounce save for 2 seconds

        return () => clearTimeout(saver);
    }, [resumeData, user]);

    const saveResume = async () => {
        if (!user?.id) {
            console.warn("Save attempted without authenticated user.");
            return;
        }

        let payload = null;

        try {
            const resumeId = localStorage.getItem("current_resume_id");

            // Double-check profile exists (prevents foreign key violation)
            const { data: profile } = await supabase.from('profiles').select('id').eq('id', user.id).maybeSingle();
            if (!profile) {
                console.warn("Profile missing. Proactively creating profile for user:", user.id);
                const { error: profileError } = await supabase.from('profiles').upsert([{
                    id: user.id,
                    full_name: user.user_metadata?.full_name || "Unknown User",
                    plan: 'free'
                }]);

                if (profileError) {
                    console.error("Critical: Could not create profile row. Save will likely fail.", profileError);
                    throw new Error(`Profile synchronization failed: ${profileError.message}`);
                }
            }

            payload = {
                user_id: user.id,
                title: (resumeData.personal.fullName || "Untitled") + " - Resume",
                template_id: resumeData.templateId || "modern-minimal",
                raw_data: resumeData,
                updated_at: new Date().toISOString()
            };

            if (resumeId) {
                const { error, data } = await supabase
                    .from("resumes")
                    .update(payload)
                    .eq("id", resumeId)
                    .eq("user_id", user.id) // Security: Ensure user owns this resume
                    .select();

                if (error) throw error;

                // If no data returned, it means the update didn't match any row (e.g., mismatched user)
                if (!data || data.length === 0) {
                    console.warn("Resume ID mismatch or ownership error. Clearing ID and re-saving as new.");
                    localStorage.removeItem("current_resume_id");
                    return saveResume(); // Recursive call to save as new
                }

                console.log("Resume auto-saved.");
                triggerWorkflow('resume_updated', user.id, { resumeId, data: resumeData });
            } else {
                // NEW RESUME: Check slots first
                const hasSlots = await checkCredits(user.id, 'resume');

                if (!hasSlots) {
                    alert("You've reached your resume limit. Please upgrade to Premium or delete an existing resume to create a new one!");
                    window.location.href = "/#pricing";
                    return;
                }

                const { data, error } = await supabase
                    .from("resumes")
                    .insert([payload])
                    .select()
                    .single();

                if (error) throw error;
                if (data) {
                    localStorage.setItem("current_resume_id", data.id);
                    console.log("New resume created and saved.");

                    // Note: incrementUsage('resume') is no longer needed as we use "Slot" logic (SQL Count)
                    triggerWorkflow('resume_updated', user.id, { resumeId: data.id, data: resumeData });
                }
            }
        } catch (error) {
            // Hyper-verbose logging for debugging foreign key violations
            const errorReport = {
                supabaseErrorMessage: error?.message || 'Unknown Error',
                supabaseErrorDetails: error?.details || 'N/A',
                supabaseErrorHint: error?.hint || 'N/A',
                supabaseErrorCode: error?.code || 'N/A',
                currentUserId: user?.id,
                localStorageResumeId: localStorage.getItem("current_resume_id"),
                payloadSent: payload ? {
                    user_id: payload?.user_id,
                    title: payload?.title,
                } : "Payload not fully initialized"
            };

            console.error("CRITICAL SAVE ERROR:", JSON.stringify(errorReport, null, 2));

            // UI Feedback if possible (optional: could add a toast here)
        }
    };

    return (
        <ResumeContext.Provider value={{
            currentStep,
            setCurrentStep,
            resumeData,
            setResumeData,
            updateSection,
            nextStep,
            prevStep,
            saveResume
        }}>
            {children}
        </ResumeContext.Provider>
    );
};

export const useResume = () => useContext(ResumeContext);
