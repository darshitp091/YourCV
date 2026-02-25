"use client";

export const RiskManagerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-lg border-[3px] border-slate-900 ring-8 ring-slate-50">
            <header className="flex justify-between items-center border-b-[12px] border-slate-900 pb-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase italic leading-none">{personal.fullName || "Risk Strategist"}</h1>
                    <div className="flex items-center gap-4 text-xs font-black text-white uppercase tracking-[0.4em] bg-slate-900 px-6 py-2 rounded-sm italic">
                        {personal.jobTitle || "Director of Risk Management"}
                    </div>
                </div>
                <div className="text-right text-[11px] font-black text-slate-500 uppercase tracking-widest space-y-2">
                    <div className="border border-slate-200 px-4 py-2 rounded-md inline-block shadow-sm mb-2">
                        {contact.email}
                    </div>
                    <p className="opacity-50 tracking-normal">LOC: {contact.location}</p>
                    <p className="text-slate-900 font-mono tracking-normal underline decoration-slate-100 decoration-4 underline-offset-4">TEL: {contact.phone}</p>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10">
                {/* Mitigation Vision / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Resilience_&_Mitigation_Theory</h2>
                            <div className="flex-1 h-px bg-slate-100" />
                        </div>
                        <div className="p-12 bg-slate-50 text-slate-900 rounded-[3rem] border border-slate-100 shadow-inner relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 4c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 13c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <p className="text-xl leading-relaxed font-serif italic text-center opacity-90 mx-auto max-w-2xl px-6 relative z-10">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Mitigation History / Experience */}
                <div className="col-span-8 space-y-12">
                    <section className="space-y-10">
                        <div className="flex items-center gap-4">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Exposure_&_Control_Record</h2>
                            <div className="flex-1 h-px bg-slate-100" />
                        </div>
                        <div className="space-y-16">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group border-l-8 border-slate-50 pl-10 border-b border-slate-50 pb-12 last:border-b-0 hover:border-slate-900 transition-all">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-4 py-1 rounded-sm uppercase italic border border-slate-100">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest italic group-hover:text-slate-900">
                                            <span>ENTITY: {exp.company}</span>
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

                {/* Right: Risk Matrix / Skills & Edu */}
                <div className="col-span-4 space-y-16">
                    <section className="space-y-10 p-10 bg-slate-900 text-white rounded-[4rem] shadow-2xl relative group">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <h4 className="text-[6px] font-black uppercase tracking-[1em]">PROTECTED</h4>
                        </div>
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 text-center border-b border-slate-800 pb-4">Internal_Controls</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[10px] font-black uppercase text-white tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-black text-slate-400 hover:text-white transition-colors cursor-default">
                                                    <span>{s}</span>
                                                    <div className="w-10 h-0.5 bg-slate-800 group-hover:w-16 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <div className="flex items-center gap-4">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 whitespace-nowrap">Certification_Base</h2>
                            <div className="flex-1 h-px bg-slate-100" />
                        </div>
                        <div className="space-y-10">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 border-r-8 border-slate-50 pr-6 group text-right">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:text-amber-600 transition-colors italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase py-1">{edu.school}</p>
                                    <p className="text-[9px] font-black text-slate-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t-2 border-slate-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] text-slate-900 italic underline decoration-slate-100 decoration-8 underline-offset-8">
                <span>Preserving Capital</span>
                <span className="font-mono text-[8px] opacity-20">ENCRYPTED_AUTH: 2026.RISK.D01</span>
                <span>(C) GLOBAL_RISK_COUNCIL</span>
            </footer>
        </div>
    );
};
