"use client";

export const MechanicNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#1a1a1a] p-12 min-h-[1056px] w-[816px] mx-auto text-zinc-300 font-sans shadow-2xl border-l-[15px] border-amber-500 relative overflow-hidden">
            {/* Industrial Textures */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 0)', backgroundSize: '30px 30px' }} />

            <header className="relative z-10 flex flex-col items-start gap-8 mb-16 border-b border-zinc-800 pb-12">
                <div className="flex gap-2 mb-4">
                    <div className="w-8 h-8 rounded-sm bg-amber-500 flex items-center justify-center text-black font-black text-xl">M</div>
                    <div className="w-8 h-8 rounded-sm bg-zinc-800 flex items-center justify-center border border-zinc-700">⚙️</div>
                </div>
                <div className="space-y-4">
                    <h1 className="text-6xl font-black tracking-tighter text-white uppercase leading-none">{personal.fullName || "Lead Technician"}</h1>
                    <div className="flex items-center gap-6">
                        <span className="text-xl font-bold text-amber-500 italic tracking-tight">{personal.jobTitle || "Master Automotive Technician (ASE Certified)"}</span>
                    </div>
                </div>

                <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 italic pt-6 w-full border-t border-zinc-800/50 mt-4">
                    <span>{contact.email}</span>
                    <span className="text-zinc-800">//</span>
                    <span>{contact.location}</span>
                    <span className="text-zinc-800">//</span>
                    <span className="text-amber-500">{contact.phone}</span>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-12">
                {/* Service Ethos / Summary */}
                <div className="col-span-12">
                    <section className="bg-zinc-900 p-12 rounded-lg border border-zinc-800 shadow-inner relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <svg className="w-16 h-16 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.5 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                            </svg>
                        </div>
                        <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-zinc-700 mb-6 italic border-b border-zinc-800 pb-2">Technical_Service_Philosophy</h2>
                        <p className="text-xl leading-relaxed text-zinc-300 font-serif italic text-center mx-auto max-w-2xl relative z-10 font-bold">
                            "{summary}"
                        </p>
                    </section>
                </div>

                {/* Left: Engagement History / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-700 italic border-b border-zinc-900 pb-4">Service_Engagement_Timeline</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-12 border-l-2 border-zinc-800 hover:border-amber-500 transition-all duration-500">
                                    <div className="absolute left-[-2px] bottom-0 w-[2px] h-12 bg-zinc-800 group-hover:h-full group-hover:bg-amber-500 transition-all" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-white tracking-tighter uppercase group-hover:italic transition-all leading-none">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-zinc-600 bg-zinc-900 px-4 py-1 rounded-sm uppercase italic border border-zinc-800">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-zinc-500 uppercase tracking-widest italic pt-1 group-hover:text-amber-500">
                                            <span>FACILITY: {exp.company}</span>
                                            <span className="text-zinc-800">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-zinc-500 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%]">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: Technical Toolkit / Skills & Edu */}
                <div className="col-span-4 space-y-16 mt-6">
                    <section className="space-y-10 p-10 bg-zinc-900/50 border border-zinc-800 rounded-sm shadow-2xl relative group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-amber-500 text-center border-b border-zinc-800 pb-2 italic">Diagnostic_Stack</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-zinc-700 tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-black text-zinc-500 hover:text-white transition-colors cursor-default border-b border-zinc-800/30 pb-1 group/item">
                                                    <span>{s}</span>
                                                    <div className="w-4 h-1 bg-zinc-800 group-hover/item:bg-amber-500 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-700 italic border-b border-zinc-900 pb-4 text-right">Certifications</h2>
                        <div className="space-y-10 text-right">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 group border-r-2 border-zinc-800 pr-6 hover:border-amber-500 transition-all">
                                    <h3 className="text-sm font-black text-white leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-zinc-800 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t border-zinc-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-zinc-700 italic">
                <span>Engineered for Performance</span>
                <span className="opacity-10 text-[8px] tracking-normal font-mono italic">TRACE_ID: MECH_PROC_2026</span>
                <span className="text-amber-500">MMXXVI</span>
            </footer>
        </div>
    );
};
