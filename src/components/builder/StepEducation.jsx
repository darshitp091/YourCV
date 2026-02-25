"use client";

import { useResume } from "@/context/ResumeContext";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Card } from "../ui/Card";
import {
    LucideGraduationCap,
    LucidePlus,
    LucideTrash2,
    LucideCalendar,
    LucideMapPin,
    LucideAward,
    LucideBriefcase
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export const StepEducation = () => {
    const { resumeData, updateSection } = useResume();

    const addEducation = () => {
        const newEdu = {
            id: uuidv4(),
            school: "",
            degree: "",
            field: "",
            startDate: "",
            endDate: "",
            gpa: "",
        };
        updateSection("education", (prev) => [...prev, newEdu]);
    };

    const removeEducation = (id) => {
        updateSection("education", (prev) => prev.filter((edu) => edu.id !== id));
    };

    const updateEducation = (id, field, value) => {
        updateSection("education", (prev) =>
            prev.map((edu) => (edu.id === id ? { ...edu, [field]: value } : edu))
        );
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold font-heading text-foreground">Education</h2>
                    <p className="text-muted-foreground">Add your academic background and any relevant certifications.</p>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={addEducation}
                    className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10"
                >
                    <LucidePlus className="mr-2 w-4 h-4" />
                    Add Education
                </Button>
            </div>

            <div className="space-y-6">
                {resumeData.education.length === 0 ? (
                    <div
                        onClick={addEducation}
                        className="p-12 border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-all group"
                    >
                        <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <LucideGraduationCap className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-foreground">Add your education</p>
                            <p className="text-sm text-muted-foreground mt-1">Foundational knowledge matters. Add it here.</p>
                        </div>
                    </div>
                ) : (
                    resumeData.education.map((edu, index) => (
                        <Card key={edu.id} className="relative p-8 group">
                            <button
                                onClick={() => removeEducation(edu.id)}
                                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all"
                            >
                                <LucideTrash2 className="w-5 h-5" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <Input
                                        label="School / University"
                                        placeholder="Stanford University"
                                        value={edu.school}
                                        onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                                        className="pl-11"
                                    />
                                    <LucideGraduationCap className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                </div>

                                <div className="relative">
                                    <Input
                                        label="Degree"
                                        placeholder="Bachelor of Science"
                                        value={edu.degree}
                                        onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                                        className="pl-11"
                                    />
                                    <LucideAward className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                </div>

                                <div className="relative">
                                    <Input
                                        label="Field of Study"
                                        placeholder="Computer Science"
                                        value={edu.field}
                                        onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                                        className="pl-11"
                                    />
                                    <LucideBriefcase className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="relative">
                                        <Input
                                            label="Start Date"
                                            type="month"
                                            value={edu.startDate}
                                            onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                                            className="pl-11"
                                        />
                                        <LucideCalendar className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                    </div>
                                    <div className="relative">
                                        <Input
                                            label="End Date"
                                            type="month"
                                            value={edu.endDate}
                                            onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                                            className="pl-11"
                                        />
                                        <LucideCalendar className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                    </div>
                                </div>

                                <div className="relative">
                                    <Input
                                        label="GPA / Score (Optional)"
                                        placeholder="3.8 / 4.0"
                                        value={edu.gpa}
                                        onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                                        className="pl-11"
                                    />
                                    <LucideAward className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            {resumeData.education.length > 0 && (
                <Button
                    variant="outline"
                    className="w-full border-dashed border-2 py-6 text-muted-foreground hover:text-primary hover:border-primary/50"
                    onClick={addEducation}
                >
                    <LucidePlus className="mr-2 w-5 h-5" />
                    Add Another Education Entry
                </Button>
            )}
        </div>
    );
};
