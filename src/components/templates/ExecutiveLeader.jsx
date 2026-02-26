"use client";

export const ExecutiveLeader = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects, additional } = data;

    return (
        <div id="resume-preview" className="bg-slate-50 p-20 shadow-2xl min-h-[1100px] w-[816px] mx-auto text-slate-900 border-[12px] border-white">
            <div className="bg-white p-12 shadow-sm min-h-full">
                {/* Header */}
                <header className="flex justify-between items-start border-b-2 border-slate-900 pb-12">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-black font-heading tracking-tight text-slate-950">{personal.fullName || "Your Name"}</h1>
                        <p className="text-xl font-bold text-slate-600 uppercase tracking-[0.2em]">{personal.jobTitle || "Executive Leader"}</p>
                    </div>
                    <div className="text-right space-y-2 text-sm font-medium text-slate-500 group">
                        <p>{contact.location}</p>
                        <p className="font-black text-slate-950 underline decoration-primary underline-offset-4">{contact.email}</p>
                        <p>{contact.phone}</p>
                        <div className="flex flex-col items-end gap-1 pt-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest group-hover:text-primary transition-colors">
                            {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                            {contact.github && <span>GH / {contact.github}</span>}
                        </div>
                    </div>
                </header>

                <div className="mt-12 space-y-16">
                    {/* Summary */}
                    {summary && (
                        <section className="space-y-4 text-center max-w-2xl mx-auto">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Executive Value Proposition</h2>
                            <p className="text-xl leading-relaxed text-slate-800 font-medium italic">
                                "{summary}"
                            </p>
                        </section>
                    )}

                    {/* Competencies */}
                    <section className="space-y-8">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary border-b pb-2">Core Competencies</h2>
                        <div className="flex flex-wrap justify-between gap-6">
                            {skills.technical?.slice(0, 6).map(skill => (
                                <div key={skill} className="flex flex-col items-center gap-2 w-32">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-xs font-bold text-center uppercase tracking-tighter text-slate-600">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="space-y-12">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary border-b pb-2">Professional Trajectory</h2>
                        <div className="space-y-16">
                            {experience.map((exp) => (
                                <div key={exp.id} className="grid grid-cols-12 gap-8">
                                    <div className="col-span-3">
                                        <p className="text-sm font-black text-slate-950">{exp.startDate} — {exp.endDate}</p>
                                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest mt-1">{exp.location}</p>
                                    </div>
                                    <div className="col-span-9 space-y-4">
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-black text-slate-950 uppercase tracking-tight">{exp.role}</h3>
                                            <p className="text-lg font-bold text-slate-600 italic">{exp.company}</p>
                                        </div>
                                        <ul className="space-y-4">
                                            {exp.description.split("\n").map((line, idx) => (
                                                <li key={idx} className="text-sm text-slate-700 leading-relaxed font-medium flex gap-4">
                                                    <span className="text-primary font-black">/</span>
                                                    {line}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Projects / Ventures */}
                    {projects?.length > 0 && (
                        <section className="space-y-8">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary border-b pb-2">Strategic Initiatives & Projects</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {projects.map(project => (
                                    <div key={project.id} className="space-y-3 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase">{project.name}</h3>
                                            <span className="text-[10px] font-black text-primary uppercase tracking-widest">{project.techStack}</span>
                                        </div>
                                        <p className="text-sm text-slate-700 leading-relaxed font-medium italic">
                                            {project.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Education & Other */}
                    <div className="grid grid-cols-2 gap-16 border-t pt-12">
                        <section className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Academic Foundation</h2>
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-1">
                                    <h3 className="font-black text-lg text-slate-950">{edu.degree}</h3>
                                    <p className="text-sm text-slate-600 font-bold">{edu.school}</p>
                                    <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-primary">Strategic Skills</h2>
                            <div className="grid grid-cols-2 gap-4">
                                {skills.soft?.map(skill => (
                                    <div key={skill} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
                                        <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
