"use client";

import { useResume } from "@/context/ResumeContext";
import { Input } from "../ui/Input";
import { LucideMail, LucidePhone, LucideMapPin, LucideLinkedin, LucideGithub, LucideGlobe } from "lucide-react";

export const StepContact = () => {
    const { resumeData, updateSection } = useResume();

    const handleChange = (e) => {
        const { name, value } = e.target;
        updateSection("contact", { ...resumeData.contact, [name]: value });
    };

    return (
        <div className="space-y-12">
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm">
                        <LucideMail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black font-heading text-zinc-900 tracking-tight">Signal_Channels</h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Establish secure communication protocols.</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="relative group/input">
                    <Input
                        variant="premium"
                        label="Primary Email"
                        name="email"
                        type="email"
                        placeholder="darshit@example.com"
                        value={resumeData.contact.email}
                        onChange={handleChange}
                        className="pl-14"
                    />
                    <LucideMail className="absolute left-5 bottom-4 text-zinc-400 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                </div>

                <div className="relative group/input">
                    <Input
                        variant="premium"
                        label="Holographic Phone"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={resumeData.contact.phone}
                        onChange={handleChange}
                        className="pl-14"
                    />
                    <LucidePhone className="absolute left-5 bottom-4 text-zinc-400 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                </div>

                <div className="relative group/input">
                    <Input
                        variant="premium"
                        label="Current Coordinates"
                        name="location"
                        placeholder="New York, NY"
                        value={resumeData.contact.location}
                        onChange={handleChange}
                        className="pl-14"
                    />
                    <LucideMapPin className="absolute left-5 bottom-4 text-zinc-400 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                </div>

                <div className="relative group/input">
                    <Input
                        variant="premium"
                        label="LinkedIn Protocol"
                        name="linkedin"
                        placeholder="linkedin.com/in/username"
                        value={resumeData.contact.linkedin}
                        onChange={handleChange}
                        className="pl-14"
                    />
                    <LucideLinkedin className="absolute left-5 bottom-4 text-zinc-400 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                </div>

                <div className="relative group/input">
                    <Input
                        variant="premium"
                        label="Source Repository"
                        name="github"
                        placeholder="github.com/username"
                        value={resumeData.contact.github}
                        onChange={handleChange}
                        className="pl-14"
                    />
                    <LucideGithub className="absolute left-5 bottom-4 text-zinc-400 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                </div>

                <div className="relative group/input">
                    <Input
                        variant="premium"
                        label="Digital Domain"
                        name="portfolio"
                        placeholder="darshit.dev"
                        value={resumeData.contact.portfolio}
                        onChange={handleChange}
                        className="pl-14"
                    />
                    <LucideGlobe className="absolute left-5 bottom-4 text-zinc-400 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                </div>
            </div>
        </div>
    );
};
