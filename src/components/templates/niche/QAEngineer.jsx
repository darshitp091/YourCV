"use client";

export const QAEngineerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#f3f4f6] p-10 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-lg border-x-8 border-emerald-500">
            {/* QA Test Report Styled Header */}
            <header className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-6 py-2 bg-emerald-500 text-white text-[10px] font-black uppercase tracking-widest rounded-bl-xl shadow-lg">
                    Build: PASSED
                </div>

                <div className="flex justify-between items-start">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-emerald-500">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <h1 className="text-4xl font-black tracking-tight text-slate-900 uppercase tracking-tighter">{personal.fullName || "Quality Engineer"}</h1>
                        </div>
                        <div className="flex items-center gap-2 text-sm font-bold text-slate-500 uppercase tracking-widest bg-slate-50 px-4 py-1 rounded-full border border-slate-100 italic">
                            {personal.jobTitle || "QA & Automation Engineer"}
                        </div>
                    </div>
                    <div className="text-right space-y-2">
                        <div className="text-[11px] font-black text-slate-300 uppercase tracking-widest">Environment_Configs</div>
                        <p className="text-xs font-bold text-slate-600">URL: {contact.email}</p>
                        <p className="text-xs font-bold text-slate-600">LOC: {contact.location}</p>
                        <p className="text-xs font-bold text-slate-600">TEL: {contact.phone}</p>
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10">
                {/* Integration Tests / Summary */}
                <div className="col-span-12">
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                            <span className="w-8 h-[2px] bg-slate-200" />
                            Integration_Summary
                        </div>
                        <div className="p-8 bg-white border border-slate-200 rounded-2xl border-l-[6px] border-emerald-500 font-medium italic text-slate-600 shadow-sm">
                            "{summary}"
                        </div>
                    </section>
                </div>

                {/* Left: Regression Logs / Experience */}
                <div className="col-span-8 space-y-12 mt-4">
                    <section className="space-y-8">
                        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                            <span className="w-12 h-px bg-slate-200" />
                            Professional_Regression_Log
                        </div>
                        <div className="space-y-10">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group p-6 bg-white border border-slate-100 rounded-2xl hover:border-emerald-500/30 transition-all shadow-sm">
                                    <div className="absolute top-4 right-6 text-[8px] font-black text-emerald-500/50 uppercase tracking-widest">[TEST_CASE: {exp.id.slice(0, 4)}]</div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 uppercase">{exp.startDate} — {exp.current ? "Present" : exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm font-bold text-emerald-600 italic">
                                            <span>Component: {exp.company}</span>
                                            <span className="text-slate-300">/</span>
                                            <span className="text-slate-400">Scope: {exp.location}</span>
                                        </div>
                                        <p className="text-xs leading-relaxed text-slate-600 font-medium border-t border-slate-50 pt-4">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: Validation Suite / Skills */}
                <div className="col-span-4 space-y-12 mt-4">
                    <section className="space-y-8">
                        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                            <span className="w-8 h-px bg-slate-200" />
                            Validation_Suite
                        </div>
                        <div className="space-y-6">
                            {["technical", "tools", "soft"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[10px] font-black uppercase text-emerald-600 px-3 py-1 bg-emerald-50 rounded-md inline-block">{cat}</h3>
                                        <div className="flex flex-col gap-2">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex items-center gap-2 text-[11px] font-bold text-slate-600">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
                                                    {s}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <div className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                            <span className="w-8 h-px bg-slate-200" />
                            Training_Assets
                        </div>
                        <div className="space-y-4">
                            {education.map(edu => (
                                <div key={edu.id} className="p-4 border border-slate-100 rounded-xl bg-slate-50/50 space-y-1">
                                    <h3 className="text-[11px] font-black text-slate-900">{edu.degree}</h3>
                                    <p className="text-[9px] text-slate-500 font-bold uppercase">{edu.school}</p>
                                    <p className="text-[8px] font-black text-slate-300 uppercase pt-2">{edu.startDate} - {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-20 py-8 border-t border-slate-200 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.4em] text-slate-300">
                <span>Verification.v2.09</span>
                <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> SYSTEM_ONLINE
                </span>
                <span>(C) QA_CORE_GLOBAL</span>
            </footer>
        </div>
    );
};
