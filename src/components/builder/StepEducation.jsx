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
        <div className="space-y-12">
            <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <LucideGraduationCap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black font-heading text-white tracking-tight">Academic_Node</h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Sync your foundational knowledge records.</p>
                    </div>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={addEducation}
                    className="border-primary/40 bg-primary/5 hover:bg-primary/20 text-primary rounded-xl px-5 py-6 h-auto transition-all"
                >
                    <LucidePlus className="mr-2 w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add_Entry</span>
                </Button>
            </div>

            <div className="space-y-10">
                {resumeData.education.length === 0 ? (
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={addEducation}
                        className="p-16 border-2 border-dashed border-white/5 rounded-[3rem] bg-white/[0.02] flex flex-col items-center justify-center gap-6 cursor-pointer hover:bg-primary/5 hover:border-primary/20 transition-all group/empty relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/empty:opacity-100 transition-opacity" />

                        <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover/empty:scale-110 group-hover/empty:border-primary/40 transition-all duration-700 relative z-10">
                            <LucideGraduationCap className="w-10 h-10 text-zinc-600 group-hover/empty:text-primary transition-colors" />
                        </div>
                        <div className="text-center relative z-10">
                            <p className="text-lg font-black text-white uppercase tracking-widest">Initialize Education</p>
                            <p className="text-[10px] text-zinc-500 mt-2 font-bold uppercase tracking-[0.3em]">No academic records detected.</p>
                        </div>
                    </motion.div>
                ) : (
                    resumeData.education.map((edu, index) => (
                        <Card key={edu.id} variant="premium" className="relative p-10 group overflow-visible border-white/10 hover:border-primary/30 transition-all duration-700">
                            <button
                                onClick={() => removeEducation(edu.id)}
                                className="absolute -top-3 -right-3 p-3 bg-white/5 backdrop-blur-xl border border-white/10 text-zinc-500 hover:text-white hover:bg-destructive/20 hover:border-destructive/40 rounded-2xl transition-all shadow-2xl z-20 group/delete opacity-0 group-hover:opacity-100"
                            >
                                <LucideTrash2 className="w-4 h-4" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="relative group/input">
                                    <Input
                                        variant="premium"
                                        label="Academy / Institution"
                                        placeholder="e.g. Stanford University"
                                        value={edu.school}
                                        onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                                        className="pl-14"
                                    />
                                    <LucideGraduationCap className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                </div>

                                <div className="relative group/input">
                                    <Input
                                        variant="premium"
                                        label="Certification / Degree"
                                        placeholder="e.g. Bachelor of Science"
                                        value={edu.degree}
                                        onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                                        className="pl-14"
                                    />
                                    <LucideAward className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                </div>

                                <div className="relative group/input">
                                    <Input
                                        variant="premium"
                                        label="Domain of Study"
                                        placeholder="e.g. Artificial Intelligence"
                                        value={edu.field}
                                        onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                                        className="pl-14"
                                    />
                                    <LucideBriefcase className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="relative group/input">
                                        <Input
                                            variant="premium"
                                            label="Entry Date"
                                            type="month"
                                            value={edu.startDate}
                                            onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                                            className="pl-14"
                                        />
                                        <LucideCalendar className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                    </div>
                                    <div className="relative group/input">
                                        <Input
                                            variant="premium"
                                            label="Exit Date"
                                            type="month"
                                            value={edu.endDate}
                                            onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                                            className="pl-14"
                                        />
                                        <LucideCalendar className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                    </div>
                                </div>

                                <div className="relative group/input">
                                    <Input
                                        variant="premium"
                                        label="Grade Point Metric"
                                        placeholder="e.g. 3.9 / 4.0"
                                        value={edu.gpa}
                                        onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                                        className="pl-14"
                                    />
                                    <LucideAward className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            {resumeData.education.length > 0 && (
                <Button
                    variant="outline"
                    className="w-full border-dashed border-2 border-white/5 bg-white/[0.01] py-10 rounded-[2.5rem] text-zinc-500 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all group/add-more"
                    onClick={addEducation}
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover/add-more:scale-110 transition-transform">
                            <LucidePlus className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Initialize_Another_Record</span>
                    </div>
                </Button>
            )}
        </div>
    );
};
