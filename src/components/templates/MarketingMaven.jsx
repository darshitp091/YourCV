"use client";

import { motion } from "framer-motion";
import { LucidePalette, LucideMegaphone, LucideActivity } from "lucide-react";

export const MarketingMaven = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects, additional } = data;

    return (
        <div id="resume-preview" className="bg-white p-12 shadow-2xl min-h-[1056px] w-[816px] mx-auto text-gray-900 font-sans leading-none overflow-hidden relative">
            {/* Header */}
            <header className="flex flex-col gap-12 border-b-8 border-rose-500 pb-12 mb-12">
                <div className="flex justify-between items-center">
                    <div className="space-y-4">
                        <motion.h1
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            className="text-6xl font-black tracking-tighter uppercase leading-none"
                        >
                            {personal.fullName || "Your Name"}
                        </motion.h1>
                        <p className="text-2xl font-bold text-rose-500 uppercase tracking-widest italic">{personal.jobTitle || "Growth Strategist"}</p>
                    </div>
                    <div className="w-24 h-24 rounded-full bg-rose-500 flex items-center justify-center text-white font-black text-3xl">
                        M.
                    </div>
                </div>

                <div className="flex justify-between items-center text-xs font-black uppercase tracking-[0.3em] text-gray-400">
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <p className="bg-gray-100 px-4 py-2 rounded-full text-gray-900 font-bold">{contact.location}</p>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-16">
                {/* Left col */}
                <div className="col-span-12 lg:col-span-7 space-y-16">
                    {summary && (
                        <section className="space-y-6">
                            <h2 className="text-[10px] font-black uppercase tracking-widest text-rose-500 flex items-center gap-4">
                                <LucideMegaphone size={16} />
                                THE ELEVATOR PITCH
                            </h2>
                            <p className="text-xl font-bold leading-tight text-gray-800">
                                {summary}
                            </p>
                        </section>
                    )}

                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-widest text-rose-500 flex items-center gap-4">
                            <LucideActivity size={16} />
                            CAMPAIGN HISTORY
                        </h2>
                        <div className="space-y-16">
                            {experience.map((exp) => (
                                <div key={exp.id} className="group space-y-4 relative">
                                    <div className="absolute -left-8 top-0 text-[10px] font-black text-gray-200 uppercase tracking-tighter rotate-90 origin-top-left pt-2 px-2 border-t border-gray-100">
                                        {exp.startDate}
                                    </div>
                                    <div className="flex justify-between items-baseline mb-2 ml-4">
                                        <h3 className="text-3xl font-black group-hover:text-rose-500 transition-colors uppercase tracking-tight">{exp.role}</h3>
                                        <p className="text-xs font-black text-gray-400 uppercase italic">@ {exp.company}</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-600 leading-relaxed ml-4 border-l-4 border-rose-50 pl-6">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right col */}
                <div className="col-span-12 lg:col-span-5 space-y-16">
                    <section className="space-y-8">
                        <h2 className="text-[10px] font-black uppercase tracking-widest text-gray-300">MASTERED CHANNELS</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {skills.technical?.map(skill => (
                                <div key={skill} className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:bg-rose-500 hover:text-white transition-all cursor-default">
                                    <p className="text-xs font-black uppercase tracking-tighter text-center">{skill}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-[10px] font-black uppercase tracking-widest text-gray-300">ACADEMIC STORY</h2>
                        <div className="space-y-8">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 pl-4 border-l-2 border-gray-100">
                                    <h3 className="font-black text-lg uppercase leading-none">{edu.degree}</h3>
                                    <p className="text-xs text-rose-500 font-bold">{edu.school}</p>
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects.length > 0 && (
                        <section className="space-y-8">
                            <h2 className="text-[10px] font-black uppercase tracking-widest text-gray-300">VIRAL DEPLOYMENTS</h2>
                            <div className="space-y-6">
                                {projects.map(project => (
                                    <div key={project.id} className="space-y-2 bg-gray-900 text-white p-6 rounded-[2rem] shadow-xl shadow-rose-900/10 rotate-1">
                                        <h4 className="font-black text-lg uppercase tracking-tight">{project.name}</h4>
                                        <p className="text-[10px] text-gray-400 font-medium leading-relaxed italic">{project.description}</p>
                                        <p className="text-[9px] font-black text-rose-400 uppercase tracking-widest pt-2"># {project.techStack}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            <footer className="mt-20 pt-10 border-t border-gray-100 text-center">
                <p className="text-[10px] font-black uppercase tracking-[1em] text-gray-200">Creative Maven Edition 2026</p>
            </footer>
        </div>
    );
};
