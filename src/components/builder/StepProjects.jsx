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
        <div className="space-y-12">
            <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                        <LucideLayout className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black font-heading text-white tracking-tight">Project_Gallery</h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Showcase your high-impact deployments.</p>
                    </div>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={addProject}
                    className="border-primary/40 bg-primary/5 hover:bg-primary/20 text-primary rounded-xl px-5 py-6 h-auto transition-all"
                >
                    <LucidePlus className="mr-2 w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add_Project</span>
                </Button>
            </div>

            <div className="space-y-10">
                {resumeData.projects.length === 0 ? (
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        onClick={addProject}
                        className="p-16 border-2 border-dashed border-white/5 rounded-[3rem] bg-white/[0.02] flex flex-col items-center justify-center gap-6 cursor-pointer hover:bg-primary/5 hover:border-primary/20 transition-all group/empty relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover/empty:opacity-100 transition-opacity" />

                        <div className="w-20 h-20 rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center group-hover/empty:scale-110 group-hover/empty:border-primary/40 transition-all duration-700 relative z-10">
                            <LucideCode2 className="w-10 h-10 text-zinc-600 group-hover/empty:text-primary transition-colors" />
                        </div>
                        <div className="text-center relative z-10">
                            <p className="text-lg font-black text-white uppercase tracking-widest">Initialize Projects</p>
                            <p className="text-[10px] text-zinc-500 mt-2 font-bold uppercase tracking-[0.3em]">No project contributions detected.</p>
                        </div>
                    </motion.div>
                ) : (
                    resumeData.projects.map((project) => (
                        <Card key={project.id} variant="premium" className="relative p-10 group overflow-visible border-white/10 hover:border-primary/30 transition-all duration-700">
                            <button
                                onClick={() => removeProject(project.id)}
                                className="absolute -top-3 -right-3 p-3 bg-white/5 backdrop-blur-xl border border-white/10 text-zinc-500 hover:text-white hover:bg-destructive/20 hover:border-destructive/40 rounded-2xl transition-all shadow-2xl z-20 group/delete opacity-0 group-hover:opacity-100"
                            >
                                <LucideTrash2 className="w-4 h-4" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="relative group/input">
                                    <Input
                                        variant="premium"
                                        label="Project Title"
                                        placeholder="e.g. Quantum Analytics Suite"
                                        value={project.name}
                                        onChange={(e) => updateProject(project.id, "name", e.target.value)}
                                        className="pl-14"
                                    />
                                    <LucideLayout className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                </div>

                                <div className="relative group/input">
                                    <Input
                                        variant="premium"
                                        label="Technical Stack"
                                        placeholder="e.g. Next.js / Rust / Web3"
                                        value={project.techStack}
                                        onChange={(e) => updateProject(project.id, "techStack", e.target.value)}
                                        className="pl-14"
                                    />
                                    <LucideCpu className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                </div>

                                <div className="relative group/input md:col-span-2">
                                    <Input
                                        variant="premium"
                                        label="Live Deployment / Repository"
                                        placeholder="https://github.com/identity/project-nexus"
                                        value={project.link}
                                        onChange={(e) => updateProject(project.id, "link", e.target.value)}
                                        className="pl-14"
                                    />
                                    <LucideGlobe className="absolute left-5 bottom-4 text-zinc-600 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                </div>

                                <div className="md:col-span-2 space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">Operation_Impact & Logic</label>
                                    <textarea
                                        placeholder="Architected a zero-latency distribution network for 1M+ active nodes. Implemented end-to-end telemetry..."
                                        value={project.description}
                                        onChange={(e) => updateProject(project.id, "description", e.target.value)}
                                        className="w-full min-h-[150px] p-6 bg-white/[0.02] border border-white/10 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-primary/40 focus:border-primary focus:bg-white/[0.05] transition-all duration-500 resize-none text-sm text-white placeholder:text-zinc-700 font-medium leading-relaxed"
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
                    className="w-full border-dashed border-2 border-white/5 bg-white/[0.01] py-10 rounded-[2.5rem] text-zinc-500 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all group/add-more"
                    onClick={addProject}
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover/add-more:scale-110 transition-transform">
                            <LucidePlus className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Initialize_Another_Project</span>
                    </div>
                </Button>
            )}
        </div>
    );
};
