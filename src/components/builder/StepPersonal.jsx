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
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold font-heading">Personal Details</h2>
                <p className="text-muted-foreground">Let's start with the basics. Who are you?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Photo Upload */}
                <div className="flex flex-col items-center gap-4">
                    <div className="relative group w-40 h-40 rounded-3xl overflow-hidden bg-secondary/50 border-2 border-dashed border-border flex items-center justify-center transition-all hover:border-primary/50">
                        {resumeData.personal.photoUrl ? (
                            <>
                                <img
                                    src={resumeData.personal.photoUrl}
                                    alt="Profile"
                                    className="w-full h-full object-cover"
                                />
                                <button
                                    onClick={removePhoto}
                                    className="absolute top-2 right-2 p-1.5 bg-destructive text-white rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                                >
                                    <LucideTrash2 className="w-4 h-4" />
                                </button>
                            </>
                        ) : (
                            <div className="flex flex-col items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
                                {uploading ? (
                                    <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <>
                                        <LucideCamera className="w-8 h-8" />
                                        <span className="text-xs font-bold uppercase tracking-widest">Photo</span>
                                    </>
                                )}
                            </div>
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                            className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
                            disabled={uploading}
                        />
                    </div>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold text-center">
                        {resumeData.personal.photoUrl ? "Click to change photo" : "Square photo recommended"}
                    </p>
                </div>

                {/* Inputs */}
                <div className="md:col-span-2 space-y-6">
                    <div className="relative">
                        <Input
                            label="Full Name"
                            placeholder="Darshit Patel"
                            value={resumeData.personal.fullName}
                            onChange={(e) => updateSection("personal", { ...resumeData.personal, fullName: e.target.value })}
                            className="pl-11"
                        />
                        <LucideUser className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5 pointer-events-none" />
                    </div>

                    <div className="relative">
                        <Input
                            label="Professional Title"
                            placeholder="Senior Full Stack Software Engineer"
                            value={resumeData.personal.jobTitle}
                            onChange={(e) => updateSection("personal", { ...resumeData.personal, jobTitle: e.target.value })}
                            className="pl-11"
                        />
                        <LucideBriefcase className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5 pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
};
