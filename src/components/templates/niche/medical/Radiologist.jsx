"use client";

export const RadiologistNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#0f172a] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-300 font-sans shadow-2xl border-[4px] border-slate-800 ring-1 ring-slate-700">
            <header className="flex justify-between items-center border-b border-slate-800 pb-12 mb-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-[0.02] blur-[100px]" />
                <div className="space-y-4 relative z-10">
                    <h1 className="text-5xl font-black tracking-tighter text-white uppercase leading-none">{personal.fullName || "Imaging Expert"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-blue-400 italic tracking-tight">{personal.jobTitle || "Diagnostic Radiologist"}</span>
                        <div className="w-2 h-2 rounded-full bg-slate-800 animate-pulse" />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">{contact.location}</span>
                    </div>
                </div>
                <div className="text-right space-y-2 relative z-10">
                    <div className="bg-slate-800/50 border border-slate-700 px-6 py-2 rounded-lg shadow-xl backdrop-blur-md">
                        <p className="text-xs font-bold text-blue-300 tracking-tight">{contact.email}</p>
                    </div>
                    <p className="text-[10px] font-black text-slate-600 uppercase tracking-[0.4em] pt-2 font-mono">{contact.phone}</p>
                    <div className="flex flex-col items-end gap-1 text-[9px] font-black text-slate-700 uppercase">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                        {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-12">
                {/* Diagnostic Mission / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600">Visual_Diagnostic_Analysis_Philosophy</h2>
                        <div className="p-12 bg-slate-900/50 border border-slate-800 rounded-3xl shadow-inner relative overflow-hidden group hover:border-blue-500/50 transition-all">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <svg className="w-20 h-20 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </div>
                            <p className="text-lg leading-relaxed text-slate-300 font-serif italic text-center mx-auto max-w-2xl px-6 relative z-10">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Investigation History / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600">Post-Graduate_Imaging_Engagement</h2>
                        <div className="space-y-16">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-10 group border-l-2 border-slate-800 hover:border-blue-500 transition-all">
                                    <div className="absolute left-[-4px] top-1.5 w-1.5 h-10 bg-slate-800 group-hover:bg-blue-500 group-hover:h-full transition-all" />

                                    <div className="space-y-5">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-white tracking-tighter uppercase">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-500 bg-slate-900 px-4 py-1 rounded-sm uppercase italic border border-slate-800">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-blue-400 uppercase tracking-widest italic pt-1 group-hover:text-blue-300 transition-colors">
                                            <span>MODALITY: {exp.company}</span>
                                            <span className="text-slate-800">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%]">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600">Advanced_Imaging_Research_&_Trials</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl group hover:border-blue-500 transition-all border-dashed">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-2xl font-black italic tracking-tighter uppercase text-white">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-blue-400 mb-4 font-bold border-b border-slate-800 pb-2 inline-block">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-slate-400">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Modality Toolkit / Skills & Edu */}
                <div className="col-span-4 space-y-16 mt-6">
                    <section className="space-y-10 p-10 bg-slate-900 border border-slate-800 rounded-lg shadow-2xl relative group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-white text-center border-b border-slate-800 pb-2">Imaging_Stack</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-slate-600 tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-black text-slate-500 hover:text-blue-400 transition-colors cursor-default">
                                                    <span>{s}</span>
                                                    <div className="w-8 h-px bg-slate-800 group-hover:w-16 group-hover:bg-blue-500 transition-all opacity-20" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600">Board_Credentials</h2>
                        <div className="space-y-10">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 border-r-4 border-slate-900 pr-6 group text-right">
                                    <h3 className="text-sm font-black text-white leading-tight uppercase group-hover:text-blue-400 transition-colors italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase py-1">{edu.school}</p>
                                    <p className="text-[9px] font-black text-slate-800 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t border-slate-800 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] text-slate-600 italic">
                <span>Revealing the Unseen</span>
                <span className="opacity-10 font-mono text-[8px] tracking-tight">ENCRYPTED_AUTH: 2026.RAD.X01</span>
                <span className="text-blue-900">DIAG_CORE</span>
            </footer>
        </div>
    );
};
