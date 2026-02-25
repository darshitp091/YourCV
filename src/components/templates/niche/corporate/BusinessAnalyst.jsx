"use client";

export const BusinessAnalystNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fcfdff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-lg border-l-[12px] border-blue-800">
            <header className="flex justify-between items-start border-b border-slate-200 pb-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-extrabold tracking-tighter text-slate-900 uppercase leading-none">{personal.fullName || "Business Analyst"}</h1>
                    <div className="flex items-center gap-3">
                        <span className="text-lg font-bold text-blue-800 tracking-tight">{personal.jobTitle || "Senior Business Systems Analyst"}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{contact.location}</span>
                    </div>
                </div>
                <div className="text-right space-y-2">
                    <div className="inline-block bg-blue-50 border border-blue-100 px-4 py-2 rounded-xl">
                        <p className="text-xs font-bold text-blue-900 tracking-tight">{contact.email}</p>
                    </div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] font-mono">{contact.phone}</p>
                </div>
            </header>

            <main className="space-y-12">
                {/* Strategic Overview / Summary */}
                <section className="space-y-6">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-800/30">Business_Context_Summary</h2>
                    <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm italic text-lg leading-relaxed text-slate-600 font-serif">
                        "{summary}"
                    </div>
                </section>

                <div className="grid grid-cols-12 gap-12 mt-6">
                    {/* Left: Requirements & Impact / Experience */}
                    <div className="col-span-8 space-y-12">
                        <section className="space-y-10">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-800/30">Project_&_Outcome_History</h2>
                            <div className="space-y-14">
                                {experience.map((exp) => (
                                    <div key={exp.id} className="relative pl-10 group border-l-[3px] border-slate-50">
                                        <div className="absolute left-[-6.5px] top-1.5 w-3 h-3 rounded-full bg-blue-800 opacity-20 group-hover:opacity-100 transition-opacity" />
                                        <div className="space-y-4">
                                            <div className="flex justify-between items-baseline">
                                                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{exp.role}</h3>
                                                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{exp.startDate} — {exp.endDate}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm font-bold text-blue-800 italic">
                                                <span>Stakeholder: {exp.company}</span>
                                                <span className="text-slate-200 font-normal font-sans tracking-normal">|</span>
                                                <span className="text-slate-400">{exp.location}</span>
                                            </div>
                                            <p className="text-xs text-slate-600 leading-relaxed font-medium whitespace-pre-wrap max-w-[95%]">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right: Technical Toolkit / Skills & Edu */}
                    <div className="col-span-4 space-y-12">
                        <section className="space-y-8 p-8 bg-blue-50/30 rounded-[2rem] border border-blue-50 shadow-sm">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-800/50 text-center">Analysis_Stack</h2>
                            <div className="space-y-8">
                                {["technical", "soft", "tools"].map(cat => (
                                    skills[cat] && skills[cat].length > 0 && (
                                        <div key={cat} className="space-y-4">
                                            <h3 className="text-[9px] font-black uppercase text-blue-900 border-b border-blue-100 pb-1">{cat}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {skills[cat].map(s => (
                                                    <span key={s} className="px-2 py-0.5 text-[9px] font-bold text-slate-500 bg-white border border-slate-100 rounded-md shadow-xs">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6 px-4">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Academic_Inventory</h2>
                            <div className="space-y-6">
                                {education.map(edu => (
                                    <div key={edu.id} className="space-y-1">
                                        <h3 className="text-xs font-black text-slate-900 leading-tight uppercase underline decoration-slate-100 decoration-4 underline-offset-4">{edu.degree}</h3>
                                        <p className="text-[10px] text-slate-400 font-bold italic py-1">{edu.school}</p>
                                        <p className="text-[8px] font-black text-slate-200 uppercase tracking-[0.3em] font-sans">{edu.startDate} — {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="mt-20 py-10 border-t border-slate-100 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.6em] text-slate-300 italic">
                <span>Bridging Gap: IT & Business</span>
                <span>UUID: BIZ_ANALYST_2026</span>
            </footer>
        </div>
    );
};
