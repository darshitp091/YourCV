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
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm">
                        <LucideUser className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black font-heading text-zinc-900 tracking-tight">Identity_Core</h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Configure your primary professional profile.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
                {/* Photo Upload - Lumina Evolution */}
                <div className="flex flex-col items-center gap-6 relative group/photo">
                    <div className="relative w-44 h-44 rounded-[2.5rem] overflow-hidden bg-zinc-50 border border-zinc-200 flex items-center justify-center transition-all group-hover/photo:border-primary/50 group-hover/photo:shadow-xl group-hover/photo:shadow-primary/5">
                        {resumeData.personal.photoUrl ? (
                            <>
                                <img
                                    src={resumeData.personal.photoUrl}
                                    alt="Profile"
                                    className="w-full h-full object-cover transition-all duration-700"
                                />
                                <button
                                    onClick={removePhoto}
                                    className="absolute top-3 right-3 p-2 bg-white/60 backdrop-blur-md text-zinc-900 rounded-xl opacity-0 group-hover/photo:opacity-100 transition-all hover:bg-destructive hover:text-white"
                                >
                                    <LucideTrash2 className="w-4 h-4" />
                                </button>
                            </>
                        ) : (
                            <div className="flex flex-col items-center gap-3 text-zinc-400 group-hover/photo:text-primary transition-colors duration-500">
                                {uploading ? (
                                    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <div className="p-4 rounded-2xl bg-white border border-zinc-100 shadow-sm">
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
                        <p className="text-[10px] text-zinc-400 uppercase font-black tracking-[0.4em]">Biometric_Data</p>
                        <p className="text-[9px] text-primary/60 font-bold uppercase tracking-widest">Recommended: 1:1 Aspect Ratio</p>
                    </div>
                </div>

                {/* Inputs */}
                <div className="md:col-span-2 space-y-10">
                    <div className="relative group/input">
                        <Input
                            variant="premium"
                            label="Legal Full Name"
                            required
                            placeholder="Enter your name..."
                            value={resumeData.personal.fullName}
                            onChange={(e) => updateSection("personal", { ...resumeData.personal, fullName: e.target.value })}
                            className="pl-14"
                        />
                        <LucideUser className="absolute left-5 bottom-4 text-zinc-400 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                    </div>

                    <div className="relative group/input">
                        <Input
                            variant="premium"
                            label="Professional Designation"
                            required
                            placeholder="e.g. Architect of Digital Experiences"
                            value={resumeData.personal.jobTitle}
                            onChange={(e) => updateSection("personal", { ...resumeData.personal, jobTitle: e.target.value })}
                            className="pl-14"
                        />
                        <LucideBriefcase className="absolute left-5 bottom-4 text-zinc-400 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                    </div>

                    {/* Status Indicator */}
                    <div className="pt-6 flex gap-4">
                        <div className="flex-1 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 transition-all hover:border-zinc-200">
                            <p className="text-[8px] font-black text-zinc-400 uppercase tracking-[0.2em] mb-1">Completion_Status</p>
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${resumeData.personal.fullName && resumeData.personal.jobTitle ? 'bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-zinc-300'}`} />
                                <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
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
