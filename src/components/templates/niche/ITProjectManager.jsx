"use client";

export const ITProjectManagerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fcfcfc] p-10 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-lg border-t-8 border-slate-900">
            <header className="flex justify-between items-start border-b-2 border-slate-100 pb-12">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-1.5 h-12 bg-slate-900" />
                        <h1 className="text-5xl font-black tracking-tighter uppercase">{personal.fullName || "Project Lead"}</h1>
                    </div>
                    <div className="flex items-center gap-4 text-sm font-bold text-slate-500 uppercase tracking-widest bg-slate-50 px-6 py-1.5 rounded-full border border-slate-100">
                        <span className="w-2 h-2 rounded-full bg-slate-900" />
                        {personal.jobTitle || "Senior IT Project Manager"}
                        <span className="text-slate-300">|</span>
                        <span>SPRINT_STATUS: READY</span>
                    </div>
                </div>
                <div className="text-right space-y-2 pt-2 relative group">
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-2 font-mono">Channel: Contact</div>
                    <p className="text-sm font-bold text-slate-800">{contact.email}</p>
                    <p className="text-sm font-bold text-slate-600">{contact.location}</p>
                    <p className="text-[11px] font-black text-slate-400 opacity-50">{contact.phone}</p>
                    <div className="absolute -bottom-10 right-0 flex flex-col items-end gap-1 text-[9px] text-slate-300 group-hover:text-slate-900 transition-colors">
                        {contact.linkedin && <span>LI: {contact.linkedin}</span>}
                        {contact.github && <span>GH: {contact.github}</span>}
                        {contact.portfolio && <span>PF: {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-12 mt-12">
                {/* Roadmap / Summary */}
                <div className="col-span-12">
                    <section className="space-y-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Executive_Roadmap</h2>
                        <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full translate-x-16 -translate-y-16 group-hover:bg-slate-100 transition-colors" />
                            <p className="text-lg leading-relaxed text-slate-700 font-medium italic relative z-10">"{summary}"</p>
                        </div>
                    </section>
                </div>

                {/* Left Column: Velocity / Experience */}
                <div className="col-span-8 space-y-12 mt-4">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Product_lifecycle_Log</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-10 border-l-[3px] border-slate-100 group">
                                    <div className="absolute left-[-8px] top-1.5 w-4 h-4 rounded-sm bg-white border-[3px] border-slate-900 group-hover:rotate-45 transition-transform" />
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tight underline decoration-slate-200 underline-offset-8">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase italic">{exp.startDate} — {exp.current ? "Present" : exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest">
                                            <span>@ {exp.company}</span>
                                            <span className="text-slate-200">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium whitespace-pre-wrap max-w-[95%]">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Strategic_Initiatives_&_MVPs</h2>
                            <div className="space-y-8">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm group hover:shadow-md transition-shadow relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full translate-x-12 -translate-y-12" />
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-2xl font-black text-slate-900 tracking-tight underline decoration-slate-200 underline-offset-8">{proj.name}</h3>
                                                <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase italic border border-slate-100">{proj.techStack}</span>
                                            </div>
                                            <p className="text-[10px] text-slate-300 font-mono tracking-tighter italic">{proj.link}</p>
                                            <p className="text-lg leading-relaxed text-slate-700 font-medium italic relative z-10">"{proj.description}"</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right Column: Resource Allocation / Skills */}
                <div className="col-span-4 space-y-12 mt-4">
                    <section className="space-y-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Governance_Stack</h2>
                        <div className="space-y-6">
                            {["technical", "tools", "soft"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-slate-400 bg-slate-50 px-3 py-1 inline-block rounded-sm">{cat}</h3>
                                        <div className="grid grid-cols-1 gap-2">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-bold text-slate-600 border-b border-slate-50 pb-1">
                                                    <span>{s}</span>
                                                    <div className="flex gap-0.5">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                                                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Academic_Baseline</h2>
                        <div className="space-y-6">
                            {education.map(edu => (
                                <div key={edu.id} className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-xs font-black text-slate-900 leading-tight uppercase">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold mt-1">{edu.school}</p>
                                    <p className="text-[9px] font-black text-slate-200 uppercase mt-2 tracking-widest">{edu.startDate} - {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-20 py-10 border-t-2 border-slate-100 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.5em] text-slate-300 italic">
                <span>Optimizing Delivery 2026</span>
                <div className="flex gap-4">
                    <span className="text-slate-900">PMP_CERT_ACTIVE</span>
                    <span>SCRUM_MASTER_LVL_2</span>
                </div>
            </footer>
        </div>
    );
};
