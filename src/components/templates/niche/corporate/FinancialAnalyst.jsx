"use client";

export const FinancialAnalystNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-white p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-serif shadow-lg border-t-[16px] border-slate-900">
            <header className="flex justify-between items-end border-b-2 border-slate-900 pb-10 mb-10">
                <div className="space-y-4">
                    <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 uppercase leading-none">{personal.fullName || "Analyst Name"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-medium text-slate-500 italic tracking-wide">{personal.jobTitle || "Senior Financial Analyst"}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{contact.location}</span>
                    </div>
                </div>
                <div className="text-right text-xs font-bold text-slate-500 space-y-2 uppercase tracking-widest pb-1 font-sans">
                    <p className="border-b border-slate-100 pb-1">{contact.email}</p>
                    <p>{contact.phone}</p>
                </div>
            </header>

            <main className="space-y-12">
                {/* Executive Summary */}
                <section className="space-y-4">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Professional_Profile</h2>
                    <p className="text-lg leading-relaxed text-slate-700 font-medium italic">
                        "{summary}"
                    </p>
                </section>

                <div className="grid grid-cols-12 gap-12">
                    {/* Main Content: Experience */}
                    <div className="col-span-8 space-y-12">
                        <section className="space-y-10">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Experience_Record</h2>
                            <div className="space-y-12">
                                {experience.map((exp) => (
                                    <div key={exp.id} className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tight underline decoration-slate-100 underline-offset-8">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-sans">{exp.startDate} :: {exp.current ? "Present" : exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-[0.1em] font-sans italic">
                                            <span>{exp.company}</span>
                                            <span className="text-slate-200">/</span>
                                            <span className="text-slate-400">HQ: {exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium whitespace-pre-wrap max-w-[95%]">
                                            {exp.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar: Skills & Education */}
                    <div className="col-span-4 space-y-12">
                        <section className="space-y-8 bg-slate-50 p-8 rounded-2xl border border-slate-100">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Core_Competencies</h2>
                            <div className="space-y-6">
                                {["technical", "tools", "soft"].map(cat => (
                                    skills[cat] && skills[cat].length > 0 && (
                                        <div key={cat} className="space-y-4">
                                            <h3 className="text-[9px] font-black uppercase text-slate-900 border-b border-slate-200 pb-1 font-sans">{cat}</h3>
                                            <ul className="space-y-2">
                                                {skills[cat].map(s => (
                                                    <li key={s} className="text-[11px] font-bold text-slate-600 flex items-center gap-2 font-sans">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                                        {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8 px-2">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Academic_Backbone</h2>
                            <div className="space-y-6">
                                {education.map(edu => (
                                    <div key={edu.id} className="space-y-2 italic">
                                        <h3 className="text-xs font-black text-slate-900 leading-tight uppercase">{edu.degree}</h3>
                                        <p className="text-[10px] text-slate-500 font-bold tracking-tight">{edu.school}</p>
                                        <p className="text-[9px] font-black text-slate-300 uppercase mt-2 tracking-widest font-sans">{edu.startDate} — {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="mt-20 py-8 border-t border-slate-100 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-slate-900 opacity-5" />
                <p className="text-[9px] font-bold text-slate-300 tracking-[0.8em] uppercase font-sans">Fiduciary. Analytical. Strategic.</p>
            </footer>
        </div>
    );
};
