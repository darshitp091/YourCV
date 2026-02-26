"use client";

export const SurgeonNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-lg border-[2px] border-slate-200">
            <header className="flex justify-between items-center border-b-[8px] border-slate-900 pb-10 mb-10">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase leading-none italic">{personal.fullName || "Lead Surgeon"}</h1>
                    <div className="flex items-center gap-4 text-xs font-black text-white uppercase tracking-[0.4em] bg-slate-900 px-6 py-2 rounded-sm">
                        {personal.jobTitle || "Consultant Surgeon (Fellowship Trained)"}
                    </div>
                </div>
                <div className="text-right text-[11px] font-black text-slate-400 uppercase tracking-widest space-y-2">
                    <p className="border-b border-slate-100 pb-2 text-slate-900">{contact.email}</p>
                    <p className="italic">OR_ID: SURG_2026_X</p>
                    <p className="text-slate-300 font-mono tracking-normal">PH: {contact.phone}</p>
                    <div className="flex flex-col items-end gap-1 text-[9px] font-black text-slate-200">
                        {contact.linkedin && <span>LinkedIn / {contact.linkedin}</span>}
                        {contact.github && <span>GitHub / {contact.github}</span>}
                        {contact.portfolio && <span>Portfolio / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10">
                {/* Surgical Mandate / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Precision_&_Clinical_Mandate</h2>
                        <div className="p-10 bg-slate-50 border border-slate-100 rounded-lg shadow-inner relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <svg className="w-16 h-16 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </div>
                            <p className="text-xl leading-relaxed font-serif italic text-center mx-auto max-w-2xl px-6 relative z-10 font-bold border-l-4 border-slate-900 pl-8">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Operative History / Experience */}
                <div className="col-span-8 space-y-12 mt-4">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Operative_Engagement_Log</h2>
                        <div className="space-y-16">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-12 group border-l-8 border-slate-50 hover:border-slate-900 transition-all">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tight uppercase group-hover:italic transition-all">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-4 py-1 rounded-sm uppercase italic border border-slate-100">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest italic border-b border-slate-50 pb-2">
                                            <span>THEATRE: {exp.company}</span>
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
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 whitespace-nowrap">Special_Operative_Cases_&_Research</h2>
                            <div className="space-y-12">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-8 bg-slate-50 border-r-[12px] border-slate-900 shadow-xl group hover:border-slate-400 transition-all">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-xl font-black text-slate-900 italic tracking-tighter">{proj.name}</h3>
                                            <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 mb-2 font-mono underline decoration-slate-900">{proj.link}</p>
                                        <p className="text-sm font-serif italic text-slate-700 leading-relaxed font-bold">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Surgical Skillset / Skills & Edu */}
                <div className="col-span-4 space-y-12 mt-4">
                    <section className="space-y-8 p-8 bg-slate-900 text-white rounded-lg shadow-xl relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <h4 className="text-[6px] font-black uppercase tracking-[1em] rotate-90">STERILE</h4>
                        </div>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 text-center border-b border-slate-800 pb-2">Procedural_Matrix</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-slate-500 border-b border-slate-800 pb-1">{cat}</h3>
                                        <div className="flex flex-col gap-2.5">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-black text-slate-400 hover:text-white transition-all cursor-default group/item">
                                                    <span>{s}</span>
                                                    <div className="w-6 h-px bg-slate-800 group-hover/item:bg-white group-hover/item:w-10 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Board_Credentials</h2>
                        <div className="space-y-8">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 border-r-4 border-slate-50 pr-6 group text-right">
                                    <h3 className="text-xs font-black text-slate-900 leading-tight uppercase group-hover:text-slate-600 transition-colors italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-slate-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-20 py-10 border-t-8 border-slate-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] text-slate-400 italic">
                <span>Decisive Outcomes</span>
                <span className="opacity-10 text-[8px] tracking-normal">REF: SURG_PATH_2026</span>
                <span className="text-slate-900">MMXXVI</span>
            </footer>
        </div>
    );
};
