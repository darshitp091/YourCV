"use client";

import { useResume } from "@/context/ResumeContext";

export const ModernMinimal = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects = [], additional = {} } = data;

    return (
        <div id="resume-preview" className="bg-white p-12 shadow-2xl min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans leading-tight">
            {/* Header */}
            <header className="border-b-2 border-slate-900 pb-8 flex justify-between items-start">
                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold tracking-tight uppercase">{personal.fullName || "Your Name"}</h1>
                    <p className="text-xl text-slate-600 font-medium">{personal.jobTitle || "Professional Title"}</p>
                </div>
                <div className="text-right text-sm space-y-1 text-slate-500 font-medium">
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.location}</p>
                    <div className="flex flex-col items-end gap-1 mt-2 text-[10px] uppercase font-bold text-slate-400">
                        {contact.linkedin && <span className="hover:text-primary transition-colors cursor-default">LinkedIn / {contact.linkedin}</span>}
                        {contact.github && <span className="hover:text-primary transition-colors cursor-default">GitHub / {contact.github}</span>}
                        {contact.portfolio && <span className="hover:text-primary transition-colors cursor-default">Portfolio / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <div className="grid grid-cols-12 gap-10 mt-10">
                {/* Left Column */}
                <div className="col-span-8 space-y-10">
                    {/* Summary */}
                    {summary && (
                        <section className="space-y-3">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1">Professional Profile</h2>
                            <p className="text-sm leading-relaxed text-slate-700">{summary}</p>
                        </section>
                    )}

                    {/* Experience */}
                    <section className="space-y-6">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1">Work Experience</h2>
                        <div className="space-y-8">
                            {experience.map((exp) => (
                                <div key={exp.id} className="space-y-2">
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="font-bold text-slate-900">{exp.role}</h3>
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-tighter">
                                            {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm italic text-slate-600">
                                        <span>{exp.company}</span>
                                        <span>{exp.location}</span>
                                    </div>
                                    <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects */}
                    {projects.length > 0 && (
                        <section className="space-y-6">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1">Key Projects</h2>
                            <div className="grid grid-cols-1 gap-6">
                                {projects.map(project => (
                                    <div key={project.id} className="space-y-1">
                                        <div className="flex justify-between items-center">
                                            <h3 className="font-bold text-slate-900">{project.name}</h3>
                                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{project.techStack}</span>
                                        </div>
                                        <p className="text-sm text-slate-700 leading-relaxed">{project.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right Column */}
                <div className="col-span-4 space-y-10">
                    {/* Skills */}
                    <section className="space-y-6">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1">Expertise</h2>

                        <div className="space-y-4">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-2">
                                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{cat}</h3>
                                        <div className="flex flex-wrap gap-1">
                                            {skills[cat].map(skill => (
                                                <span key={skill} className="px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-bold rounded uppercase tracking-tighter">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    {/* Education */}
                    <section className="space-y-4">
                        <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1">Education</h2>
                        {education.map(edu => (
                            <div key={edu.id} className="space-y-1">
                                <h3 className="font-bold text-xs text-slate-900 leading-tight">{edu.degree}</h3>
                                <p className="text-[10px] text-slate-600 font-medium">{edu.school}</p>
                                <p className="text-[9px] text-slate-400 uppercase tracking-tighter">{edu.startDate} — {edu.endDate}</p>
                            </div>
                        ))}
                    </section>

                    {/* Additional */}
                    {additional && Object.values(additional).some(arr => Array.isArray(arr) && arr.length > 0) && (
                        <section className="space-y-6">
                            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-100 pb-1">More Details</h2>
                            {Object.entries(additional).map(([key, items]) => (
                                items.length > 0 && (
                                    <div key={key} className="space-y-2">
                                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{key}</h3>
                                        <ul className="space-y-1">
                                            {items.map(item => (
                                                <li key={item} className="text-xs text-slate-700 font-medium">• {item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            ))}
                        </section>
                    )}
                </div>
            </div>
        </div>
    );
};
