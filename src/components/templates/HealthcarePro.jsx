"use client";

import { LucideShieldCheck } from "lucide-react";

export const HealthcarePro = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects = [], additional = {} } = data;

    return (
        <div id="resume-preview" className="bg-white p-12 shadow-2xl min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans leading-snug">
            {/* Header */}
            <header className="flex justify-between items-center bg-sky-900 text-white p-10 rounded-3xl mb-10">
                <div className="space-y-2">
                    <h1 className="text-4xl font-black tracking-tight uppercase">{personal.fullName || "Your Name"}</h1>
                    <p className="text-xl text-sky-200 font-bold flex items-center gap-2">
                        <LucideShieldCheck size={20} />
                        {personal.jobTitle || "Medical Professional"}
                    </p>
                </div>
                <div className="text-right text-xs space-y-1 font-bold">
                    <p className="text-sky-100">{contact.email}</p>
                    <p>{contact.phone}</p>
                    <p className="bg-sky-800/50 px-3 py-1 rounded-full mt-2">{contact.location}</p>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-10">
                {/* Left col */}
                <div className="col-span-12 lg:col-span-8 space-y-10">
                    {summary && (
                        <section className="space-y-3">
                            <h2 className="text-xs font-black uppercase tracking-widest text-sky-900 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-sky-500" />
                                Professional Philosophy
                            </h2>
                            <p className="text-sm leading-relaxed text-slate-600 font-medium border-l-2 border-sky-100 pl-6">{summary}</p>
                        </section>
                    )}

                    <section className="space-y-8">
                        <h2 className="text-xs font-black uppercase tracking-widest text-sky-900 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-sky-500" />
                            Clinical Experience
                        </h2>
                        <div className="space-y-10">
                            {experience.map((exp) => (
                                <div key={exp.id} className="space-y-3">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                                            <p className="text-sm font-bold text-sky-700">{exp.company}</p>
                                        </div>
                                        <div className="text-right text-xs font-black text-slate-400 uppercase tracking-tighter">
                                            {exp.startDate} — {exp.endDate}
                                        </div>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed font-medium whitespace-pre-wrap">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects.length > 0 && (
                        <section className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-widest text-sky-900 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-sky-500" />
                                Medical Projects & Initiatives
                            </h2>
                            <div className="space-y-6">
                                {projects.map(project => (
                                    <div key={project.id} className="space-y-2 border-l-2 border-sky-50 pl-6">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
                                            <span className="text-[10px] font-black text-sky-400 uppercase tracking-widest">{project.techStack}</span>
                                        </div>
                                        <p className="text-xs text-slate-600 font-medium italic">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right col */}
                <div className="col-span-12 lg:col-span-4 space-y-10">
                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-widest text-sky-900">Education & Training</h2>
                        {education.map(edu => (
                            <div key={edu.id} className="space-y-1 p-4 bg-sky-50 rounded-2xl border border-sky-100">
                                <h3 className="text-xs font-bold text-sky-900">{edu.degree}</h3>
                                <p className="text-[10px] text-sky-700 font-black">{edu.school}</p>
                                <p className="text-[9px] text-sky-400 font-bold uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                            </div>
                        ))}
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-widest text-sky-900">Clinical Expertise</h2>
                        <div className="space-y-6">
                            {["technical", "soft"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-2">
                                        <h3 className="text-[9px] font-black uppercase tracking-widest text-slate-400">{cat}</h3>
                                        <div className="flex flex-wrap gap-1">
                                            {skills[cat].map(skill => (
                                                <span key={skill} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-[10px] font-bold rounded-lg shadow-sm">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    {additional && Object.values(additional).some(arr => Array.isArray(arr) && arr.length > 0) && (
                        <section className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-widest text-sky-900">Licenses & Awards</h2>
                            <div className="space-y-4">
                                {Object.entries(additional).map(([key, items]) => (
                                    items.length > 0 && (
                                        <div key={key} className="space-y-2">
                                            <h3 className="text-[9px] font-black uppercase tracking-widest text-slate-400">{key}</h3>
                                            <ul className="space-y-1">
                                                {items.map(item => (
                                                    <li key={item} className="text-xs text-slate-700 font-bold flex gap-2">
                                                        <span className="text-sky-500">+</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};
