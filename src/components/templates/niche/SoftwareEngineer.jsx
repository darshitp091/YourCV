"use client";

import { motion } from "framer-motion";

export const SoftwareEngineerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-white p-10 min-h-[1056px] w-[816px] mx-auto text-zinc-900 font-sans shadow-lg border-t-[12px] border-zinc-900">
            <header className="flex justify-between items-start border-b border-zinc-100 pb-8">
                <div className="space-y-1">
                    <h1 className="text-4xl font-black tracking-tighter uppercase">{personal.fullName || "Your Name"}</h1>
                    <p className="text-lg font-bold text-zinc-500 uppercase tracking-widest">{personal.jobTitle || "Software Engineer"}</p>
                    <div className="flex flex-wrap gap-4 pt-2 text-xs font-medium text-zinc-400 uppercase tracking-tighter">
                        {contact.location && <span>{contact.location}</span>}
                        {contact.github && <span className="text-zinc-900 border-b-2 border-zinc-900">GitHub / {contact.github}</span>}
                        {contact.linkedin && <span>LinkedIn / {contact.linkedin}</span>}
                        {contact.portfolio && <span>Portfolio / {contact.portfolio}</span>}
                    </div>
                </div>
                <div className="text-right text-sm font-medium space-y-1">
                    <p className="text-zinc-600 italic underline decoration-zinc-100">{contact.email}</p>
                    <p className="text-zinc-600">{contact.phone}</p>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-8 mt-10">
                {/* Main Content */}
                <div className="col-span-8 space-y-8">
                    {/* Summary */}
                    {summary && (
                        <section className="space-y-3">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Summary</h2>
                            <p className="text-sm leading-relaxed text-zinc-700 font-medium italic">"{summary}"</p>
                        </section>
                    )}

                    {/* Experience */}
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Experience</h2>
                        <div className="space-y-8">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-6 border-l-2 border-zinc-100">
                                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-full bg-zinc-900" />
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-zinc-900">{exp.role}</h3>
                                        <span className="text-[10px] font-black text-zinc-400 uppercase">{exp.startDate} — {exp.current ? "Present" : exp.endDate}</span>
                                    </div>
                                    <p className="text-sm font-bold text-zinc-500 mb-2">{exp.company}</p>
                                    <p className="text-xs text-zinc-600 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    {projects && projects.length > 0 && (
                        <section className="space-y-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Key Projects</h2>
                            <div className="space-y-4">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-4 bg-zinc-50 rounded-xl border border-zinc-100 group">
                                        <div className="flex justify-between items-baseline mb-1">
                                            <h3 className="text-sm font-bold group-hover:text-zinc-900 transition-colors">{proj.name}</h3>
                                            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-zinc-600 leading-relaxed">{proj.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar */}
                <div className="col-span-4 space-y-10">
                    {/* Technical Stack */}
                    <section className="space-y-6 bg-zinc-900 p-6 rounded-2xl text-white">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.4em] text-zinc-500">Tech Stack</h2>
                        <div className="space-y-4">
                            {["technical", "tools", "soft"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-2">
                                        <h3 className="text-[9px] font-black uppercase text-zinc-400">{cat}</h3>
                                        <div className="flex flex-wrap gap-1.5">
                                            {skills[cat].map(s => (
                                                <span key={s} className="px-2 py-0.5 bg-zinc-800 text-white text-[9px] font-bold rounded border border-zinc-700">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="space-y-4 px-2">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">Education</h2>
                        {education.map(edu => (
                            <div key={edu.id} className="space-y-1">
                                <h3 className="text-xs font-bold text-zinc-900">{edu.degree}</h3>
                                <p className="text-[11px] text-zinc-500">{edu.school}</p>
                                <p className="text-[9px] font-black text-zinc-300 uppercase">{edu.startDate} — {edu.endDate}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </main>
        </div>
    );
};
