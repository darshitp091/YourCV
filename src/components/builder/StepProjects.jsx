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
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-sm">
                        <LucideLayout className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black font-heading text-zinc-900 tracking-tight">Project_Gallery</h2>
                        <p className="text-zinc-500 text-sm font-medium tracking-wide">Showcase your high-impact deployments.</p>
                    </div>
                </div>

                <Button
                    variant="outline"
                    size="sm"
                    onClick={addProject}
                    className="border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary rounded-xl px-5 py-6 h-auto transition-all shadow-sm"
                >
                    <LucidePlus className="mr-2 w-4 h-4" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Add_Project</span>
                </Button>
            </div>

            <div className="space-y-10">
                {resumeData.projects.length === 0 ? (
                    <motion.div
                        whileHover={{ scale: 1.005 }}
                        whileTap={{ scale: 0.995 }}
                        onClick={addProject}
                        className="p-16 border-2 border-dashed border-zinc-200 rounded-[3rem] bg-zinc-50 flex flex-col items-center justify-center gap-6 cursor-pointer hover:bg-primary/5 hover:border-primary/20 transition-all group/empty relative overflow-hidden shadow-sm"
                    >
                        <div className="w-20 h-20 rounded-[2rem] bg-white border border-zinc-100 flex items-center justify-center group-hover/empty:scale-110 group-hover/empty:border-primary/40 transition-all duration-700 relative z-10 shadow-sm">
                            <LucideCode2 className="w-10 h-10 text-zinc-300 group-hover/empty:text-primary transition-colors" />
                        </div>
                        <div className="text-center relative z-10">
                            <p className="text-lg font-black text-zinc-900 uppercase tracking-widest">Initialize Projects</p>
                            <p className="text-[10px] text-zinc-400 mt-2 font-bold uppercase tracking-[0.3em]">No project contributions detected.</p>
                        </div>
                    </motion.div>
                ) : (
                    resumeData.projects.map((project) => (
                        <Card key={project.id} variant="premium" className="relative p-10 group overflow-visible border-zinc-100 hover:border-primary/30 transition-all duration-700 shadow-sm">
                            <button
                                onClick={() => removeProject(project.id)}
                                className="absolute -top-3 -right-3 p-3 bg-white border border-zinc-100 text-zinc-400 hover:text-white hover:bg-destructive hover:border-destructive rounded-2xl transition-all shadow-xl z-20 group/delete opacity-0 group-hover:opacity-100"
                            >
                                <LucideTrash2 className="w-4 h-4" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="relative group/input">
                                    <Input
                                        variant="premium"
                                        label="Project Title"
                                        required
                                        placeholder="e.g. Quantum Analytics Suite"
                                        value={project.name}
                                        onChange={(e) => updateProject(project.id, "name", e.target.value)}
                                        className="pl-14"
                                    />
                                    <LucideLayout className="absolute left-5 bottom-4 text-zinc-400 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
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
                                    <LucideCpu className="absolute left-5 bottom-4 text-zinc-400 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
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
                                    <LucideGlobe className="absolute left-5 bottom-4 text-zinc-400 w-5 h-5 transition-colors group-focus-within/input:text-primary" />
                                </div>

                                <div className="md:col-span-2 space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Operation_Impact & Logic</label>
                                    <textarea
                                        placeholder="Architected a zero-latency distribution network for 1M+ active nodes. Implemented end-to-end telemetry..."
                                        value={project.description}
                                        onChange={(e) => updateProject(project.id, "description", e.target.value)}
                                        className="w-full min-h-[150px] p-6 bg-white border border-zinc-200 rounded-[2rem] focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all duration-500 resize-none text-sm text-zinc-900 placeholder:text-zinc-400 font-medium leading-relaxed shadow-sm"
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
                    className="w-full border-dashed border-2 border-zinc-200 bg-zinc-50/50 py-10 rounded-[2.5rem] text-zinc-400 hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all group/add-more shadow-sm"
                    onClick={addProject}
                >
                    <div className="flex flex-col items-center gap-2">
                        <div className="p-2 rounded-xl bg-white border border-zinc-200 group-hover/add-more:scale-110 group-hover/add-more:border-primary/40 transition-all shadow-sm">
                            <LucidePlus className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Initialize_Another_Project</span>
                    </div>
                </Button>
            )}
        </div>
    );
};
