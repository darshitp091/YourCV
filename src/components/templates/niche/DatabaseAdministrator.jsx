"use client";

export const DatabaseAdministratorNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#f8fafc] p-10 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-lg border border-slate-200">
            {/* Database Table Header Styled */}
            <header className="bg-slate-900 text-white p-10 rounded-t-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-20 uppercase tracking-[0.4em]">Node: PRIMARY_MASTER</div>
                <div className="space-y-4 relative z-10">
                    <h1 className="text-5xl font-black tracking-tight uppercase border-b-4 border-indigo-500 pb-2 inline-block">{personal.fullName || "DB Admin"}</h1>
                    <div className="flex items-center gap-4 text-sm font-bold text-indigo-400 font-mono">
                        <span className="text-white bg-indigo-600 px-3 py-0.5 rounded uppercase">{personal.jobTitle || "Database Administrator"}</span>
                        <span>// UPTIME: 100%</span>
                        <span>// REPLICATION: ASYNC</span>
                    </div>
                </div>

                <div className="mt-8 flex gap-8 text-[11px] font-bold text-slate-400 font-mono tracking-tight uppercase relative z-10">
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]" /> {contact.email}</span>
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_#10b981]" /> {contact.location}</span>
                    <span className="text-slate-600">PH: {contact.phone}</span>
                </div>
            </header>

            <main className="bg-white p-10 rounded-b-2xl border border-t-0 border-slate-200 min-h-[760px] grid grid-cols-1 gap-12">
                {/* Schema Summary */}
                <section className="space-y-4">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 flex items-center gap-2">
                        <span className="w-8 h-px bg-slate-200" />
                        Execution_Plan_Summary
                    </h2>
                    <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl text-lg italic leading-relaxed text-slate-600 font-serif">
                        "{summary}"
                    </div>
                </section>

                <div className="grid grid-cols-12 gap-10">
                    {/* Main: Experience Logs */}
                    <div className="col-span-8 space-y-12">
                        <section className="space-y-10">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 flex items-center gap-2">
                                <span className="w-8 h-px bg-slate-200" />
                                Operational_History
                            </h2>
                            <div className="space-y-12">
                                {experience.map((exp) => (
                                    <div key={exp.id} className="relative group pl-10">
                                        <div className="absolute left-0 top-0 h-full w-px bg-indigo-100" />
                                        <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px_#4f46e5]" />

                                        <div className="space-y-3">
                                            <div className="flex justify-between items-baseline">
                                                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-tight">{exp.role}</h3>
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{exp.startDate} — {exp.current ? "Present" : exp.endDate}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-xs font-bold text-indigo-600 tracking-wide uppercase italic">
                                                <span>Instance: {exp.company}</span>
                                                <span className="text-slate-300">/</span>
                                                <span className="text-slate-400">Node: {exp.location}</span>
                                            </div>
                                            <p className="text-xs text-slate-600 leading-relaxed max-w-[95%] font-medium font-sans whitespace-pre-wrap">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar: Data Dictionary / Skills */}
                    <div className="col-span-4 space-y-12">
                        <section className="space-y-8">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 flex items-center gap-2">
                                <span className="w-8 h-px bg-slate-200" />
                                Tech_Stack_Registry
                            </h2>
                            <div className="space-y-6">
                                {["technical", "tools", "soft"].map(cat => (
                                    skills[cat] && skills[cat].length > 0 && (
                                        <div key={cat} className="space-y-3">
                                            <h3 className="text-[9px] font-black uppercase text-indigo-600 border-b border-indigo-50 pb-1">{cat}</h3>
                                            <div className="flex flex-col gap-1.5">
                                                {skills[cat].map(s => (
                                                    <div key={s} className="flex justify-between items-center text-[10px] font-bold text-slate-600 font-mono">
                                                        <span>{s}</span>
                                                        <span className="text-emerald-500 font-black">OK</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 flex items-center gap-2">
                                <span className="w-8 h-px bg-slate-200" />
                                Certification_Vault
                            </h2>
                            <div className="space-y-4">
                                {education.map(edu => (
                                    <div key={edu.id} className="p-4 bg-slate-50 border border-slate-100 rounded-xl space-y-2">
                                        <h3 className="text-[11px] font-black text-slate-900 leading-tight uppercase tracking-tight">{edu.degree}</h3>
                                        <p className="text-[10px] text-slate-500 font-bold">{edu.school}</p>
                                        <p className="text-[9px] font-black text-slate-300 uppercase tracking-widest">{edu.startDate} - {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="mt-8 py-6 text-center">
                <p className="text-[10px] font-black text-slate-300 tracking-[0.6em] uppercase italic">Indexing. Relational. Optimized.</p>
            </footer>
        </div>
    );
};
