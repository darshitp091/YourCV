"use client";

import { LucideScale } from "lucide-react";

export const LegalCounsel = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects, additional } = data;

    return (
        <div id="resume-preview" className="bg-[#fdfdfb] p-20 shadow-2xl min-h-[1100px] w-[816px] mx-auto text-zinc-900 font-serif leading-relaxed border-[20px] border-zinc-50 shadow-zinc-200">
            {/* Header */}
            <header className="border-b-[3px] border-zinc-900 pb-12 flex justify-between items-end">
                <div className="space-y-4">
                    <h1 className="text-5xl font-bold tracking-tight text-zinc-950 uppercase">{personal.fullName || "Your Name"}</h1>
                    <p className="text-2xl font-medium text-zinc-600 italic tracking-tight flex items-center gap-3">
                        <LucideScale className="text-zinc-950" size={24} />
                        {personal.jobTitle || "Legal Professional"}
                    </p>
                </div>
                <div className="text-right text-xs font-bold space-y-2 uppercase tracking-widest text-zinc-400 group">
                    <p className="text-zinc-950 underline underline-offset-8 decoration-zinc-200">{contact.email}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.location}</p>
                    <div className="flex flex-col items-end gap-1 pt-2 group-hover:text-zinc-950 transition-colors">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                    </div>
                </div>
            </header>

            <div className="mt-16 space-y-16">
                {/* Summary */}
                {summary && (
                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 border-b pb-2">Professional Summary</h2>
                        <p className="text-base leading-relaxed text-zinc-800 font-medium indent-12 text-justify italic">
                            {summary}
                        </p>
                    </section>
                )}

                {/* Experience */}
                <section className="space-y-10">
                    <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 border-b pb-2">Professional Experience</h2>
                    <div className="space-y-14">
                        {experience.map((exp) => (
                            <div key={exp.id} className="space-y-4">
                                <div className="flex justify-between items-end">
                                    <div className="space-y-1">
                                        <h3 className="text-2xl font-bold text-zinc-950">{exp.role}</h3>
                                        <p className="text-lg font-bold text-zinc-600 uppercase tracking-tighter">{exp.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-black text-zinc-950 tracking-widest">{exp.startDate} — {exp.endDate}</p>
                                        <p className="text-xs font-bold text-zinc-400 italic mt-1">{exp.location}</p>
                                    </div>
                                </div>
                                <ul className="space-y-3 list-inside list-disc marker:text-zinc-300">
                                    {exp.description.split("\n").map((line, idx) => (
                                        <li key={idx} className="text-[15px] text-zinc-700 leading-relaxed font-medium">
                                            {line}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects / Case Highlights */}
                {projects?.length > 0 && (
                    <section className="space-y-10">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 border-b pb-2">Selected Cases & Key Projects</h2>
                        <div className="space-y-8">
                            {projects.map(project => (
                                <div key={project.id} className="space-y-2 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[2px] before:h-full before:bg-zinc-100">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-bold text-zinc-950 uppercase">{project.name}</h3>
                                        <span className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">{project.techStack}</span>
                                    </div>
                                    <p className="text-[15px] text-zinc-700 leading-relaxed font-medium italic">
                                        {project.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-12 gap-16 border-t border-zinc-100 pt-12">
                    {/* Education */}
                    <div className="col-span-7 space-y-10">
                        <section className="space-y-8">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400 underline underline-offset-8 decoration-primary">Education</h2>
                            <div className="space-y-8">
                                {education.map(edu => (
                                    <div key={edu.id} className="space-y-2">
                                        <h3 className="text-xl font-bold text-zinc-950 leading-tight">{edu.degree}</h3>
                                        <p className="text-sm text-zinc-600 font-black italic">{edu.school}</p>
                                        <p className="text-xs text-zinc-400 font-bold uppercase tracking-[0.2em]">{edu.startDate} — {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Left col - Skills */}
                    <div className="col-span-5 space-y-10">
                        <section className="space-y-8">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Core Expertise</h2>
                            <div className="space-y-4">
                                {skills.technical?.map(skill => (
                                    <div key={skill} className="flex justify-between items-center text-sm font-bold border-b border-zinc-50 pb-2">
                                        <span>{skill}</span>
                                        <div className="w-2 h-2 rounded-full bg-zinc-900" />
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-zinc-400">Bar Admissions</h2>
                            <div className="space-y-2">
                                {additional.languages?.map(lang => (
                                    <p key={lang} className="text-xs font-bold text-zinc-700 italic">{lang}</p>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <footer className="mt-20 pt-10 border-t-2 border-zinc-950 text-center text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300">
                Confidential Document  •  2026
            </footer>
        </div>
    );
};
