"use client";

export const SupplyChainManagerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-lg border-[2px] border-slate-200">
            <header className="flex justify-between items-center border-b-[6px] border-slate-800 pb-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase leading-none">{personal.fullName || "Logistics Lead"}</h1>
                    <div className="flex items-center gap-4 text-xs font-black text-slate-500 uppercase tracking-[0.4em] bg-slate-100 px-6 py-2 rounded-sm border border-slate-200">
                        {personal.jobTitle || "Supply Chain & Operations Manager"}
                    </div>
                </div>
                <div className="text-right text-[11px] font-black text-slate-400 uppercase tracking-widest space-y-2">
                    <p className="border-b border-slate-100 pb-2 text-slate-900">{contact.email}</p>
                    <p className="italic">LOC: {contact.location}</p>
                    <p className="text-slate-300 font-mono tracking-normal">PH: {contact.phone}</p>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10">
                {/* Logistics Strategy / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Global_Supply_Strategy</h2>
                        <div className="p-10 bg-slate-800 text-white rounded-lg shadow-xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full translate-x-16 -translate-y-16" />
                            <p className="text-lg leading-relaxed font-serif italic text-center opacity-90 mx-auto max-w-2xl px-6">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Fulfillment Log / Experience */}
                <div className="col-span-8 space-y-12 mt-4">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Operational_Execution_Log</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-12 group border-l-4 border-slate-100">
                                    <div className="absolute left-[-4px] top-1.5 w-[20px] h-[4px] bg-slate-800" />
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase underline decoration-slate-100 decoration-4 underline-offset-8 group-hover:decoration-slate-800 transition-all">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-4 py-1 rounded-sm uppercase italic border border-slate-100">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest italic">
                                            <span>NETWORK: {exp.company}</span>
                                            <span className="text-slate-200">//</span>
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
                <div className="col-span-4 space-y-12 mt-4">
                    <section className="space-y-8 p-8 bg-slate-50 rounded-lg border border-slate-100 relative group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                            </svg>
                        </div>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-900/40 text-center">Efficiency_Matrix</h2>
                        <div className="space-y-8">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-slate-900 border-b-2 border-slate-800 pb-1">{cat}</h3>
                                        <div className="flex flex-col gap-2">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-black text-slate-600 uppercase italic">
                                                    <span>{s}</span>
                                                    <div className="w-8 h-1 bg-slate-800 group-hover:w-12 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8 px-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Academic_Inventory</h2>
                        <div className="space-y-6">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 p-4 border border-slate-100 rounded-sm hover:border-slate-800 transition-all cursor-default group">
                                    <h3 className="text-xs font-black text-slate-900 leading-tight uppercase tracking-tight italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase">{edu.school}</p>
                                    <p className="text-[9px] font-black text-slate-200 uppercase tracking-widest mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-20 py-10 border-t-8 border-slate-800 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.6em] text-slate-800 italic">
                <span>Optimizing the Flow</span>
                <span>UUID: SUPPLY_HQ_2026</span>
                <span>(C) GLOBAL_LOGISTICS_GRP</span>
            </footer>
        </div>
    );
};
