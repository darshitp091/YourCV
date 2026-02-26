"use client";

export const PharmacistNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-lg border-[1px] border-emerald-100 rounded-lg ring-8 ring-emerald-50/30">
            <header className="flex justify-between items-center bg-emerald-50/50 p-10 rounded-2xl border border-emerald-100 mb-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600 opacity-[0.03] rounded-full translate-x-16 -translate-y-16" />
                <div className="space-y-4 relative z-10">
                    <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase leading-none">{personal.fullName || "Pharmacist"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-lg font-bold text-emerald-700 italic tracking-tight">{personal.jobTitle || "Clinical Pharmacist (PharmD)"}</span>
                    </div>
                </div>
                <div className="text-right space-y-2 relative z-10">
                    <div className="bg-white border border-emerald-100 px-6 py-2 rounded-xl shadow-sm inline-block">
                        <p className="text-xs font-bold text-emerald-900 tracking-tight">{contact.email}</p>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest pt-2 italic">LOC: {contact.location} // {contact.phone}</p>
                    <div className="flex flex-col items-end gap-1 text-[9px] font-black text-emerald-300 uppercase">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                        {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10">
                {/* Pharmacy Statement / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800/20">Clinical_Pharmacotherapy_Overview</h2>
                        <div className="p-10 bg-white border-2 border-emerald-50 rounded-[2.5rem] shadow-sm italic text-lg leading-relaxed text-slate-600 font-serif relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <svg className="w-16 h-16 text-emerald-900" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75zM7.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75zM10.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75z" />
                                </svg>
                            </div>
                            <p className="text-center mx-auto max-w-2xl px-6 relative z-10 font-medium">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Professional Record / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800/20">Practice_Log_&_Clinical_Advisory</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group border-l-4 border-emerald-50 pl-10 hover:border-emerald-600 transition-all">
                                    <div className="absolute left-[-4px] top-1.5 w-1.5 h-6 bg-emerald-600 opacity-20 group-hover:h-full group-hover:opacity-100 transition-all" />
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-emerald-300 bg-emerald-50 px-4 py-1 rounded-sm uppercase italic">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest italic pt-1 group-hover:text-emerald-900 transition-colors">
                                            <span>PHARMACY: {exp.company}</span>
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

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800/20">Pharmaceutical_Development_&_Leadership</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-white border-2 border-emerald-50 rounded-[3rem] shadow-sm group hover:border-emerald-600 transition-all border-dashed">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-emerald-600 mb-4 font-bold underline decoration-emerald-100">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-slate-500">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Expertise & Credentials / Skills & Edu */}
                <div className="col-span-4 space-y-16 mt-6">
                    <section className="space-y-10 p-10 bg-emerald-50/20 rounded-[3rem] border border-emerald-50 relative group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-700 text-center italic border-b border-emerald-100 pb-2">Therapeutic_Toolkit</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-emerald-900/40 tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-black text-slate-500 hover:text-emerald-700 transition-colors cursor-default">
                                                    <span>{s}</span>
                                                    <div className="w-6 h-px bg-emerald-100 group-hover:w-10 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-800/20">Academic_Stack</h2>
                        <div className="space-y-8">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 border-r-4 border-emerald-50 pr-6 group text-right">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:text-emerald-600 transition-colors italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-emerald-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t-4 border-emerald-600 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.6em] text-emerald-600 italic">
                <span>Precision Dispensary</span>
                <span className="opacity-20">REG_REF: RX_CORE_2026</span>
                <span>(C) PHARMA_CARE_GROUP</span>
            </footer>
        </div>
    );
};
