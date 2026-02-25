"use client";

import { motion } from "framer-motion";

export const TechEngineer = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects, additional } = data;

    return (
        <div id="resume-preview" className="bg-white p-12 shadow-2xl min-h-[1056px] w-[816px] mx-auto text-zinc-900 font-mono leading-relaxed">
            {/* Header */}
            <header className="flex flex-col gap-6 border-b-4 border-zinc-900 pb-10">
                <div className="flex justify-between items-end">
                    <div className="space-y-2">
                        <h1 className="text-5xl font-black tracking-tight uppercase bg-zinc-900 text-white px-4 py-1">{personal.fullName || "Your Name"}</h1>
                        <p className="text-xl text-zinc-600 font-bold ml-1 tracking-tight">System.out.println("{personal.jobTitle || "Professional Title"}");</p>
                    </div>
                    <div className="text-right text-xs space-y-1 text-zinc-500 font-bold uppercase tracking-widest">
                        <p className="text-emerald-600">// {contact.email}</p>
                        <p className="text-blue-600">// {contact.phone}</p>
                        <p>// {contact.location}</p>
                    </div>
                </div>

                <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest">
                    {contact.linkedin && <span className="bg-zinc-100 px-3 py-1 rounded">linkedin.com/{contact.linkedin}</span>}
                    {contact.github && <span className="bg-zinc-100 px-3 py-1 rounded">github.com/{contact.github}</span>}
                </div>
            </header>

            <div className="mt-12 grid grid-cols-1 gap-12">
                {/* Summary */}
                {summary && (
                    <section className="space-y-4">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-zinc-100" />
                            README.md
                        </h2>
                        <div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-100 shadow-inner">
                            <p className="text-sm leading-relaxed text-zinc-700 antialiased font-serif italic text-lg">{summary}</p>
                        </div>
                    </section>
                )}

                {/* Experience */}
                <section className="space-y-8">
                    <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2">
                        <span className="w-8 h-[2px] bg-zinc-100" />
                        git commit -m "history"
                    </h2>
                    <div className="space-y-12">
                        {experience.map((exp) => (
                            <div key={exp.id} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-[2px] before:h-full before:bg-zinc-100 group">
                                <div className="absolute left-[-5px] top-2 w-[12px] h-[12px] rounded-full border-2 border-zinc-900 bg-white group-hover:bg-zinc-900 transition-colors" />
                                <div className="space-y-3">
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-2xl font-black text-zinc-900">{exp.role}</h3>
                                        <span className="text-xs font-black text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full uppercase">
                                            {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm font-bold text-emerald-600">
                                        <span>@ {exp.company}</span>
                                        <span className="text-zinc-400">// {exp.location}</span>
                                    </div>
                                    <p className="text-sm text-zinc-600 leading-relaxed font-sans font-medium whitespace-pre-wrap max-w-[90%]">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid grid-cols-2 gap-12">
                    {/* Skills */}
                    <section className="col-span-1 space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2">
                            <span className="w-8 h-[2px] bg-zinc-100" />
                            stack.json
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-3">
                                        <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-600">{cat}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills[cat].map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-zinc-900 text-white text-[10px] font-bold rounded hover:bg-emerald-600 transition-colors">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <div className="col-span-1 space-y-12">
                        {/* Projects */}
                        {projects.length > 0 && (
                            <section className="space-y-6">
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2">
                                    <span className="w-8 h-[2px] bg-zinc-100" />
                                    deployments
                                </h2>
                                <div className="space-y-8">
                                    {projects.map(project => (
                                        <div key={project.id} className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">{project.name}</h3>
                                                <span className="text-[9px] font-black bg-zinc-100 text-zinc-500 px-2 py-0.5 rounded uppercase">{project.techStack}</span>
                                            </div>
                                            <p className="text-xs text-zinc-600 leading-relaxed font-sans">{project.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Education */}
                        <section className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-400 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-zinc-100" />
                                certification
                            </h2>
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-1">
                                    <h3 className="font-bold text-sm text-zinc-900">{edu.degree}</h3>
                                    <p className="text-xs text-zinc-500 font-bold italic">{edu.school}</p>
                                    <p className="text-[10px] text-zinc-400 font-black uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
