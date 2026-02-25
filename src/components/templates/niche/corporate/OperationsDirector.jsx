"use client";

export const OperationsDirectorNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fcfcfc] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-lg border-[3px] border-slate-900">
            <header className="flex justify-between items-center border-b-[8px] border-slate-900 pb-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic leading-none">{personal.fullName || "Ops Leader"}</h1>
                    <div className="flex items-center gap-4 text-xs font-black text-slate-500 uppercase tracking-[0.4em] bg-slate-100 px-6 py-2 rounded-sm border border-slate-200">
                        {personal.jobTitle || "Director of Operations"}
                    </div>
                </div>
                <div className="text-right text-[11px] font-black text-slate-500 uppercase tracking-widest space-y-2">
                    <p className="border-b border-slate-200 pb-2">{contact.email}</p>
                    <p>{contact.location}</p>
                    <p className="text-slate-300 font-mono">PH: {contact.phone}</p>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10">
                {/* Operational Strategy / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Operational_Strategy</h2>
                        <div className="p-10 bg-slate-900 text-white rounded-lg shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 -translate-y-16" />
                            <p className="text-lg leading-relaxed font-serif italic text-center opacity-90 mx-auto max-w-2xl px-6">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Performance Logs / Experience */}
                <div className="col-span-8 space-y-12">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Scale_&_Execution_Log</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-12 group border-l-4 border-slate-100">
                                    <div className="absolute left-[-4px] top-1.5 w-[20px] h-[4px] bg-slate-900" />
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase underline decoration-slate-200 decoration-4 underline-offset-8">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-4 py-1 rounded-sm uppercase italic border border-slate-100">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest italic">
                                            <span>@ {exp.company}</span>
                                            <span className="text-slate-300">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%]">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: Asset Management / Skills & Edu */}
                <div className="col-span-4 space-y-12">
                    <section className="space-y-8 p-8 bg-slate-50 rounded-lg border border-slate-100">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900/30 text-center">Efficiency_Matrix</h2>
                        <div className="space-y-8">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-slate-900 border-b-2 border-slate-900 pb-1">{cat}</h3>
                                        <div className="flex flex-col gap-2">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-black text-slate-600 uppercase italic">
                                                    <span>{s}</span>
                                                    <div className="w-8 h-1 bg-slate-900" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8 px-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900/30">Academic_Inventory</h2>
                        <div className="space-y-6">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 p-4 border border-slate-100 rounded-sm hover:bg-slate-900 hover:text-white transition-all cursor-default group">
                                    <h3 className="text-xs font-black leading-tight uppercase tracking-tight">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase group-hover:text-slate-400">{edu.school}</p>
                                    <p className="text-[9px] font-black text-slate-200 uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-20 py-10 border-t-4 border-slate-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.6em] text-slate-900 underline decoration-slate-100 decoration-8 underline-offset-8">
                <span>Optimizing Excellence</span>
                <span>(C) GLOBAL_OPERATIONS_HUB</span>
                <span>UUID: OPS_DIR_2026</span>
            </footer>
        </div>
    );
};
