"use client";

export const MedicalResearcherNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#f8fafc] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-lg border-t-[8px] border-slate-900 rounded-lg">
            <header className="flex justify-between items-start border-b-2 border-slate-100 pb-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 uppercase italic leading-none">{personal.fullName || "Research Scientist"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-lg font-bold text-slate-500 tracking-tight">{personal.jobTitle || "Principle Investigator - Biotech"}</span>
                    </div>
                </div>
                <div className="text-right space-y-2">
                    <div className="bg-slate-900 text-white px-6 py-2 rounded-sm shadow-lg text-[11px] font-black uppercase tracking-widest inline-block">
                        {contact.email}
                    </div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] pt-2">{contact.location} // {contact.phone}</p>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-12">
                {/* Research Vision / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Hypothesis_&_Impact_Statement</h2>
                        <div className="p-12 bg-white border border-slate-100 rounded-sm shadow-inner italic text-xl leading-relaxed text-slate-600 font-serif relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <svg className="w-24 h-24 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M10.2 12c.1 0 .2 0 .3-.1l5.5-5.5c.2-.2.2-.5 0-.7l-1-1c-.2-.2-.5-.2-.7 0l-5.5 5.5c-.1.1-.1.2-.1.3v1.5zM20 18v-5c0-.6-.4-1-1-1s-1 .4-1 1v5h-5c-.6 0-1 .4-1 1s.4 1 1 1h5c1.1 0 2-.9 2-2zM6 18v-5c0-.6-.4-1-1-1s-1 .4-1 1v5c0 1.1.9 2 2 2h5c.6 0 1-.4 1-1s-.4-1-1-1H6z" />
                                </svg>
                            </div>
                            <p className="text-center mx-auto max-w-2xl relative z-10">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Investigation History / Experience */}
                <div className="col-span-8 space-y-12">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Clinical_Protocols_&_Trials</h2>
                        <div className="space-y-16">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group border-l-4 border-slate-100 pl-10 hover:border-slate-900 transition-all">
                                    <div className="absolute left-[-4px] top-1.5 w-1.5 h-6 bg-slate-900 group-hover:h-full transition-all" />
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 uppercase italic">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest italic pt-1 group-hover:text-slate-900">
                                            <span>FACILITY: {exp.company}</span>
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

                {/* Right: Technical Toolkit / Skills & Edu */}
                <div className="col-span-4 space-y-16">
                    <section className="space-y-10 p-10 bg-white rounded-sm border border-slate-100 relative group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900 text-center border-b-2 border-slate-900 pb-2 italic">Scientific_Stack</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-slate-500 tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-black text-slate-500 hover:text-slate-900 transition-colors cursor-default">
                                                    <span>{s}</span>
                                                    <div className="w-8 h-px bg-slate-100 group-hover:w-12 transition-all" />
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
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:text-amber-600 transition-colors italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-slate-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t-2 border-slate-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] text-slate-900 italic">
                <span>Advancing the Frontier</span>
                <span className="opacity-20">PROTO_REF: SCI_CORE_2026</span>
                <span>(C) GLOBAL_RESEARCH_CONSORTIUM</span>
            </footer>
        </div>
    );
};
