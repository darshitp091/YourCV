"use client";

import { useResume } from "@/context/ResumeContext";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Card } from "../ui/Card";
import {
    LucideLayout,
    LucidePlus,
    LucideTrash2,
    LucideGlobe,
    LucideCode2,
    LucideCpu
} from "lucide-react";
import { v4 as uuidv4 } from "uuid";

export const StepProjects = () => {
    const { resumeData, updateSection } = useResume();

    const addProject = () => {
        const newProject = {
            id: uuidv4(),
            name: "",
            description: "",
            techStack: "",
            link: "",
        };
        updateSection("projects", (prev) => [...prev, newProject]);
    };

    const removeProject = (id) => {
        updateSection("projects", (prev) => prev.filter((p) => p.id !== id));
    };

    const updateProject = (id, field, value) => {
        updateSection("projects", (prev) =>
            prev.map((p) => (p.id === id ? { ...p, [field]: value } : p))
        );
    };

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex items-center justify-between gap-4">
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold font-heading text-foreground">Featured Projects</h2>
                    <p className="text-muted-foreground">Highlight personal projects or key professional contributions.</p>
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={addProject}
                    className="bg-primary/5 text-primary border-primary/20 hover:bg-primary/10"
                >
                    <LucidePlus className="mr-2 w-4 h-4" />
                    Add Project
                </Button>
            </div>

            <div className="space-y-6">
                {resumeData.projects.length === 0 ? (
                    <div
                        onClick={addProject}
                        className="p-12 border-2 border-dashed border-border rounded-3xl flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-all group"
                    >
                        <div className="w-16 h-16 rounded-full bg-secondary/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <LucideCode2 className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                        <div className="text-center">
                            <p className="font-bold text-foreground">Showcase your work</p>
                            <p className="text-sm text-muted-foreground mt-1">Projects demonstrate your skills in action. Add them here.</p>
                        </div>
                    </div>
                ) : (
                    resumeData.projects.map((project) => (
                        <Card key={project.id} className="relative p-8 group">
                            <button
                                onClick={() => removeProject(project.id)}
                                className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-xl transition-all"
                            >
                                <LucideTrash2 className="w-5 h-5" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="relative">
                                    <Input
                                        label="Project Name"
                                        placeholder="AI Image Generator / E-commerce Platform"
                                        value={project.name}
                                        onChange={(e) => updateProject(project.id, "name", e.target.value)}
                                        className="pl-11"
                                    />
                                    <LucideLayout className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                </div>

                                <div className="relative">
                                    <Input
                                        label="Tech Stack"
                                        placeholder="React, Next.js, Node.js, Supabase"
                                        value={project.techStack}
                                        onChange={(e) => updateProject(project.id, "techStack", e.target.value)}
                                        className="pl-11"
                                    />
                                    <LucideCpu className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                </div>

                                <div className="relative md:col-span-2">
                                    <Input
                                        label="Project Link / GitHub"
                                        placeholder="https://github.com/darshit/project-name"
                                        value={project.link}
                                        onChange={(e) => updateProject(project.id, "link", e.target.value)}
                                        className="pl-11"
                                    />
                                    <LucideGlobe className="absolute left-3.5 bottom-3 text-muted-foreground w-5 h-5" />
                                </div>

                                <div className="md:col-span-2">
                                    <label className="text-sm font-medium text-foreground/80 mb-2 block">Description</label>
                                    <textarea
                                        placeholder="Built a full-stack platform that handles 10k+ daily active users. Optimized performance by 40%..."
                                        value={project.description}
                                        onChange={(e) => updateProject(project.id, "description", e.target.value)}
                                        className="w-full min-h-[100px] p-4 bg-secondary/30 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none text-sm placeholder:text-muted-foreground/50"
                                    />
                                </div>
                            </div>
                        </Card>
                    ))
                )}
            </div>

            {resumeData.projects.length > 0 && (
                <Button
                    variant="outline"
                    className="w-full border-dashed border-2 py-6 text-muted-foreground hover:text-primary hover:border-primary/50"
                    onClick={addProject}
                >
                    <LucidePlus className="mr-2 w-5 h-5" />
                    Add Another Project
                </Button>
            )}
        </div>
    );
};
