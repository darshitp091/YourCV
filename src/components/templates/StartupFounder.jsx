"use client";

import { motion } from "framer-motion";
import { LucideZap, LucideTrendingUp, LucideTarget } from "lucide-react";

export const StartupFounder = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects, additional } = data;

    return (
        <div id="resume-preview" className="bg-[#FAF7F2] p-12 shadow-2xl min-h-[1056px] w-[816px] mx-auto text-orange-950 font-sans leading-snug">
            {/* Header */}
            <header className="flex justify-between items-start mb-16">
                <div className="space-y-4">
                    <h1 className="text-6xl font-black tracking-tighter leading-none italic">{personal.fullName || "Your Name"}</h1>
                    <p className="text-xl font-bold text-orange-600 flex items-center gap-2">
                        <LucideZap className="animate-pulse" size={20} />
                        {personal.jobTitle || "Startup Enthusiast"}
                    </p>
                </div>
                <div className="text-right space-y-2 text-xs font-black uppercase tracking-[0.2em] text-orange-900/40">
                    <p>{contact.email}</p>
                    <p>{contact.location}</p>
                    <div className="flex justify-end gap-3 mt-4">
                        {contact.linkedin && <span className="p-2 bg-white rounded-xl shadow-sm border border-orange-100">LI</span>}
                        {contact.github && <span className="p-2 bg-white rounded-xl shadow-sm border border-orange-100">GH</span>}
                    </div>
                </div>
            </header>

            <div className="space-y-16">
                {/* Summary */}
                {summary && (
                    <section className="bg-white p-10 rounded-[3rem] shadow-xl shadow-orange-900/5 border border-orange-100 relative overflow-hidden">
                        <LucideTrendingUp className="absolute -right-8 -bottom-8 text-orange-50 opacity-10" size={200} />
                        <h2 className="text-xs font-black uppercase tracking-widest text-orange-400 mb-4 flex items-center gap-2">
                            The Vision
                            <span className="w-12 h-[1px] bg-orange-100" />
                        </h2>
                        <p className="text-2xl font-black leading-tight text-orange-950 italic">
                            "{summary}"
                        </p>
                    </section>
                )}

                <div className="grid grid-cols-12 gap-16">
                    {/* Experience */}
                    <section className="col-span-12 lg:col-span-12 space-y-10">
                        <h2 className="text-xs font-black uppercase tracking-widest text-orange-400 flex items-center gap-2">
                            The Hustle
                            <span className="w-12 h-[1px] bg-orange-100" />
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {experience.map((exp) => (
                                <div key={exp.id} className="space-y-4 p-8 bg-white/50 rounded-[2rem] border border-orange-50 hover:border-orange-200 transition-colors">
                                    <div className="flex justify-between items-start">
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-black leading-tight">{exp.role}</h3>
                                            <p className="text-sm font-bold text-orange-600 underline underline-offset-4">{exp.company}</p>
                                        </div>
                                        <div className="text-[10px] font-black text-orange-300 uppercase italic">
                                            {exp.startDate} — {exp.endDate}
                                        </div>
                                    </div>
                                    <p className="text-xs text-orange-900/70 leading-relaxed font-bold">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Left col - Details */}
                    <div className="col-span-12 lg:col-span-5 space-y-12">
                        <section className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-widest text-orange-400">Core Stack</h2>
                            <div className="flex flex-wrap gap-2">
                                {skills.technical?.map(skill => (
                                    <span key={skill} className="px-4 py-2 bg-orange-900 text-white text-[10px] font-black rounded-full italic shadow-lg shadow-orange-900/20">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-widest text-orange-400">Academic Roots</h2>
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-1">
                                    <h3 className="font-black text-lg">{edu.degree}</h3>
                                    <p className="text-xs text-orange-800 font-bold">{edu.school}</p>
                                    <p className="text-[10px] text-orange-300 uppercase font-black">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </section>
                    </div>

                    {/* Right col - Impact */}
                    <div className="col-span-12 lg:col-span-7 space-y-12">
                        {projects.length > 0 && (
                            <section className="space-y-8">
                                <h2 className="text-xs font-black uppercase tracking-widest text-orange-400 flex items-center gap-2">
                                    Ventures
                                    <span className="w-12 h-[1px] bg-orange-100" />
                                </h2>
                                <div className="space-y-6">
                                    {projects.map(project => (
                                        <div key={project.id} className="flex gap-6 group">
                                            <div className="w-12 h-12 rounded-2xl bg-white shadow-lg flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all flex-shrink-0">
                                                <LucideTarget size={24} />
                                            </div>
                                            <div className="space-y-1">
                                                <h4 className="font-black text-xl">{project.name}</h4>
                                                <p className="text-xs text-orange-900/60 leading-relaxed font-bold italic">{project.description}</p>
                                                <div className="text-[10px] font-black text-orange-400 uppercase tracking-widest pt-1">{project.techStack}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
