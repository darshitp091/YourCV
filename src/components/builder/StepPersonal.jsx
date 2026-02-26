"use client";

import { useResume } from "@/context/ResumeContext";
import { Input } from "../ui/Input";
import { Card } from "../ui/Card";
import { LucideUser, LucideBriefcase, LucideCamera, LucideTrash2 } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/context/AuthContext";

export const StepPersonal = () => {
    const { resumeData, updateSection } = useResume();
    const { user } = useAuth();
    const [uploading, setUploading] = useState(false);

    const handlePhotoUpload = async (e) => {
        try {
            setUploading(true);
            const file = e.target.files[0];
            if (!file) return;

            const fileExt = file.name.split('.').pop();
            const fileName = `${user.id}-${Math.random()}.${fileExt}`;
            const filePath = `avatars/${fileName}`;

            let { error: uploadError } = await supabase.storage
                .from('resumes')
                .upload(filePath, file);

            if (uploadError) throw uploadError;

            const { data: { publicUrl } } = supabase.storage
                .from('resumes')
                .getPublicUrl(filePath);

            updateSection("personal", { ...resumeData.personal, photoUrl: publicUrl });

        } catch (error) {
            console.error("Error uploading photo:", error.message);
            alert("Error uploading photo!");
        } finally {
            setUploading(false);
        }
    };

    const removePhoto = () => {
        updateSection("personal", { ...resumeData.personal, photoUrl: "" });
    };

    return (
        <div className="space-y-12">
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <LucideUser className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black font-heading text-white tracking-tight">Identity_Matrix</h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Configure your primary professional profile.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {/* Photo Upload - Glassmorphism Evolution */}
                <div className="flex flex-col items-center gap-6 relative group/photo">
                    <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover/photo:opacity-100 transition-opacity" />

                    <div className="relative w-44 h-44 rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover/photo:border-primary/50 group-hover/photo:shadow-[0_0_30px_rgba(var(--primary-rgb),0.2)]">
                        {resumeData.personal.photoUrl ? (
                            <>
                                <img
                                    src={resumeData.personal.photoUrl}
                                    alt="Profile"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                                <button
                                    onClick={removePhoto}
                                    className="absolute top-3 right-3 p-2 bg-black/60 backdrop-blur-md text-white rounded-xl opacity-0 group-hover/photo:opacity-100 transition-all hover:bg-destructive"
                                >
                                    <LucideTrash2 className="w-4 h-4" />
                                </button>
                            </>
                        ) : (
                            <div className="flex flex-col items-center gap-3 text-zinc-500 group-hover/photo:text-primary transition-colors duration-500">
                                {uploading ? (
                                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]" />
                                ) : (
                                    <>
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                                            <LucideCamera className="w-8 h-8" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em]">Upload_Photo</span>
                                    </>
                                )}
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed z-20"
                            disabled={uploading}
                        />
                    </div>

                    <div className="text-center space-y-1">
                        <p className="text-[10px] text-zinc-500 uppercase font-black tracking-[0.4em]">Biometric_Data</p>
                        <p className="text-[9px] text-primary/40 font-bold uppercase tracking-widest">Recommended: 1:1 Aspect Ratio</p>
                    </div>
                </div>

                {/* Inputs */}
                <div className="md:col-span-2 space-y-10">
                    <div className="relative group/input">
                        <Input
                            variant="premium"
                            label="Legal Full Name"
                            placeholder="Enter your name..."
                            value={resumeData.personal.fullName}
                            onChange={(e) => updateSection("personal", { ...resumeData.personal, fullName: e.target.value })}
                            className="pl-14"
                        />
                        <LucideUser className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                    </div>

                    <div className="relative group/input">
                        <Input
                            variant="premium"
                            label="Professional Designation"
                            placeholder="e.g. Architect of Digital Experiences"
                            value={resumeData.personal.jobTitle}
                            onChange={(e) => updateSection("personal", { ...resumeData.personal, jobTitle: e.target.value })}
                            className="pl-14"
                        />
                        <LucideBriefcase className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                    </div>

                    {/* Status Indicator */}
                    <div className="pt-6 flex gap-4">
                        <div className="flex-1 p-4 rounded-2xl bg-white/[0.02] border border-white/5 transition-all hover:bg-white/5">
                            <p className="text-[8px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">Completion_Status</p>
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${resumeData.personal.fullName && resumeData.personal.jobTitle ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-700'}`} />
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                                    {resumeData.personal.fullName && resumeData.personal.jobTitle ? 'Core_Linked' : 'Incomplete_Node'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
