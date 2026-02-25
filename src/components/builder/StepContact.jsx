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
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="space-y-2">
                <h2 className="text-2xl font-bold font-heading">Contact Information</h2>
                <p className="text-muted-foreground">How can recruiters reach out to you?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                    <Input
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="darshit@example.com"
                        value={resumeData.contact.email}
                        onChange={handleChange}
                        className="pl-11"
                    />
                    <LucideMail className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                </div>

                <div className="relative">
                    <Input
                        label="Phone Number"
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={resumeData.contact.phone}
                        onChange={handleChange}
                        className="pl-11"
                    />
                    <LucidePhone className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                </div>

                <div className="relative">
                    <Input
                        label="Location"
                        name="location"
                        placeholder="New York, NY"
                        value={resumeData.contact.location}
                        onChange={handleChange}
                        className="pl-11"
                    />
                    <LucideMapPin className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                </div>

                <div className="relative">
                    <Input
                        label="LinkedIn URL"
                        name="linkedin"
                        placeholder="linkedin.com/in/username"
                        value={resumeData.contact.linkedin}
                        onChange={handleChange}
                        className="pl-11"
                    />
                    <LucideLinkedin className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                </div>

                <div className="relative">
                    <Input
                        label="GitHub URL"
                        name="github"
                        placeholder="github.com/username"
                        value={resumeData.contact.github}
                        onChange={handleChange}
                        className="pl-11"
                    />
                    <LucideGithub className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                </div>

                <div className="relative">
                    <Input
                        label="Portfolio Website"
                        name="portfolio"
                        placeholder="darshit.dev"
                        value={resumeData.contact.portfolio}
                        onChange={handleChange}
                        className="pl-11"
                    />
                    <LucideGlobe className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                </div>
            </div>
        </div>
    );
};
