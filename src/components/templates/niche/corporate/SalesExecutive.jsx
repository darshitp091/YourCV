"use client";

export const SalesExecutiveNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-lg border-r-[24px] border-amber-500">
            <header className="flex justify-between items-center border-b-4 border-slate-900 pb-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-6xl font-black tracking-tighter text-slate-900 uppercase italic leading-none">{personal.fullName || "Sales Leader"}</h1>
                    <div className="flex items-center gap-4 text-xs font-black text-amber-600 uppercase tracking-[0.4em] bg-amber-50 px-6 py-2 rounded-sm border border-amber-100 italic">
                        {personal.jobTitle || "Senior Sales Executive"}
                    </div>
                </div>
                <div className="text-right text-[11px] font-black text-slate-500 uppercase tracking-widest space-y-2">
                    <div className="bg-slate-900 text-white px-6 py-2 rounded-full inline-block shadow-lg shadow-slate-900/10 mb-2">
                        {contact.email}
                    </div>
                    <p>{contact.location}</p>
                    <p className="text-amber-500">PH: {contact.phone}</p>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-12">
                {/* Performance Highlights / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Executive_Performance_Summary</h2>
                        <div className="p-12 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-2 h-full bg-amber-500" />
                            <p className="text-2xl leading-relaxed font-serif italic text-center opacity-90 mx-auto max-w-2xl px-6">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Revenue Logs / Experience */}
                <div className="col-span-8 space-y-12">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Market_Growth_&_Revenue</h2>
                        <div className="space-y-16">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group border-b border-slate-50 pb-12 last:border-0">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase underline decoration-amber-500 decoration-8 underline-offset-8 group-hover:decoration-slate-900 transition-all">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-4 py-1 rounded-sm uppercase italic border border-slate-100">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest italic">
                                            <span className="text-amber-600">CLIENT: {exp.company}</span>
                                            <span className="text-slate-200">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%] border-l-4 border-slate-50 pl-6">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: Closing Toolkit / Skills & Edu */}
                <div className="col-span-4 space-y-16">
                    <section className="space-y-10 p-10 bg-amber-50/50 rounded-[3rem] border border-amber-100 relative group">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <svg className="w-24 h-24 text-amber-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                            </svg>
                        </div>
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-amber-700 text-center">Closing_Arsenal</h2>
                        <div className="space-y-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[10px] font-black uppercase text-slate-900 border-b-2 border-amber-200 pb-2">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-black text-slate-500 hover:text-amber-600 transition-colors cursor-default">
                                                    <span>{s}</span>
                                                    <div className="w-8 h-px bg-amber-100 group-hover:w-12 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Foundation</h2>
                        <div className="space-y-8">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 border-l-4 border-amber-500 pl-6 group cursor-default">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{edu.school}</p>
                                    <p className="text-[9px] font-black text-slate-300 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t-4 border-slate-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] text-slate-900 italic">
                <span>Dominating the Market</span>
                <span>UUID: SALES_HQ_2026</span>
                <span className="text-amber-500">TARGET: EXCEEDED</span>
            </footer>
        </div>
    );
};
