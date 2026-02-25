"use client";

export const HospitalAdministratorNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-lg border-t-[20px] border-slate-900 rounded-b-lg">
            <header className="flex justify-between items-start border-b border-slate-100 pb-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 uppercase leading-none">{personal.fullName || "Admin Leader"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-slate-500 italic tracking-tight underline decoration-slate-100 decoration-4 underline-offset-8 transition-all hover:decoration-slate-900">{personal.jobTitle || "Director of Hospital Operations"}</span>
                    </div>
                </div>
                <div className="text-right space-y-2">
                    <div className="bg-slate-50 border border-slate-100 px-6 py-2 rounded-2xl shadow-sm inline-block">
                        <p className="text-xs font-bold text-slate-900 tracking-tight">{contact.email}</p>
                    </div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] pt-2 italic">LOC: {contact.location} // {contact.phone}</p>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-12">
                {/* Executive Mandate / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Operational_Strategy_&_Governance</h2>
                        <div className="p-12 bg-slate-900 text-white rounded-[4rem] shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <svg className="w-24 h-24 text-white font-black" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                                </svg>
                            </div>
                            <p className="text-xl leading-relaxed font-serif italic text-center mx-auto max-w-2xl px-6 relative z-10 opacity-90">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Leadership History / Experience */}
                <div className="col-span-8 space-y-12">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Clinical_Operations_Timeline</h2>
                        <div className="space-y-16">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group border-l-4 border-slate-50 pl-10 hover:border-slate-900 transition-all">
                                    <div className="absolute left-[-4px] top-1.5 w-1.5 h-6 bg-slate-100 group-hover:h-full group-hover:bg-slate-900 transition-all" />
                                    <div className="space-y-5">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 uppercase italic bg-slate-50 px-4 py-1 rounded-sm border border-slate-100">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest italic pt-1 group-hover:text-slate-900 transition-colors">
                                            <span>ORGANIZATION: {exp.company}</span>
                                            <span className="text-slate-100">//</span>
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

                {/* Right: Administrative Skillset / Skills & Edu */}
                <div className="col-span-4 space-y-16">
                    <section className="space-y-10 p-10 bg-white rounded-lg border border-slate-100 relative group shadow-sm">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900 text-center border-b-2 border-slate-900 pb-2 italic">Institutional_Toolkit</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-slate-500 tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-black text-slate-500 hover:text-slate-900 transition-colors cursor-default">
                                                    <span>{s}</span>
                                                    <div className="w-8 h-px bg-slate-50 group-hover:w-12 group-hover:bg-slate-900 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Academic_Inventory</h2>
                        <div className="space-y-8">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 border-r-4 border-slate-100 pr-6 group text-right">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:text-slate-500 transition-colors italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-slate-100 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t-2 border-slate-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] text-slate-900 italic">
                <span>Scaling Healthcare Impact</span>
                <span className="font-mono text-[8px] opacity-10">ADMIN_CORE_MMXXVI</span>
                <span>GLOBAL_HEALTH_LDRS</span>
            </footer>
        </div>
    );
};
