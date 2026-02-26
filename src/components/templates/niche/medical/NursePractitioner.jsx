"use client";

export const NursePractitionerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fbfcff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-700 font-sans shadow-lg border-l-[16px] border-teal-600 rounded-r-3xl">
            <header className="flex flex-col gap-6 border-b border-teal-50 pb-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black tracking-tight text-slate-900 border-b-4 border-teal-600 inline-block pb-2">{personal.fullName || "Nurse Leader"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-teal-600 italic tracking-tight">{personal.jobTitle || "DNP - Nurse Practitioner"}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-100" />
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{contact.location}</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex gap-10 text-[11px] font-black text-slate-400 tracking-[0.2em] uppercase">
                        <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-teal-400 group-hover:animate-ping" /> {contact.email}</span>
                        <span>{contact.phone}</span>
                        <span className="ml-auto text-teal-200">LIC: NP-REG_2026</span>
                    </div>
                    <div className="flex gap-4 text-[9px] font-bold text-teal-300 uppercase">
                        {contact.linkedin && <span>LinkedIn / {contact.linkedin}</span>}
                        {contact.github && <span>GitHub / {contact.github}</span>}
                        {contact.portfolio && <span>Portfolio / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-12">
                {/* Patient Care Statement / Summary */}
                <div className="col-span-12">
                    <section className="bg-white p-10 rounded-[3rem] border border-teal-50 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-6 opacity-5">
                            <svg className="w-12 h-12 text-teal-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75zM7.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75zM10.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75zM13.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75zM16.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75zM19.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75zM22.5 3.75a.75.75 0 0 0-1.5 0v16.5a.75.75 0 0 0 1.5 0V3.75z" />
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                            </svg>
                        </div>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-300 mb-4 text-center">Clinical_Philosophy</h2>
                        <p className="text-lg leading-relaxed text-slate-500 font-serif italic text-center mx-auto max-w-2xl px-6 relative z-10">
                            "{summary}"
                        </p>
                    </section>
                </div>

                {/* Left: Clinical Rotations & Practice / Experience */}
                <div className="col-span-8 space-y-12 mt-4">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-300">Practice_&_Care_History</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-10 group border-l-2 border-teal-50 hover:border-teal-600 transition-all">
                                    <div className="absolute left-[-6px] top-1.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-teal-100 group-hover:border-teal-600 group-hover:scale-125 transition-all" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-teal-300 bg-teal-50 px-4 py-1 rounded-full uppercase italic border border-teal-100">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest italic">
                                            <span>@ {exp.company}</span>
                                            <span className="text-teal-100">|</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed font-medium whitespace-pre-wrap max-w-[95%]">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-300">Clinical_Research_&_Projects</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-teal-50/30 rounded-[3rem] border border-teal-100 shadow-sm group hover:bg-teal-600 transition-all">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-2xl font-black text-teal-900 tracking-tighter group-hover:text-white uppercase italic transition-colors">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-teal-400 uppercase tracking-widest group-hover:text-teal-100 transition-colors">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-teal-600 mb-4 font-bold border-b border-teal-200 pb-2 inline-block group-hover:text-white group-hover:border-teal-400 transition-colors">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-slate-500 group-hover:text-teal-50 transition-colors">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Expertise & Credentials / Skills & Edu */}
                <div className="col-span-4 space-y-12 mt-4">
                    <section className="space-y-8 p-10 bg-white rounded-[2.5rem] border border-teal-50 shadow-sm relative group">
                        <div className="absolute top-0 right-0 p-6 opacity-5 rotate-12">
                            <svg className="w-16 h-16 text-teal-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
                            </svg>
                        </div>
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-teal-600 text-center">Care_Toolbox</h2>
                        <div className="space-y-8">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-teal-900 border-b border-teal-50 pb-1">{cat}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills[cat].map(s => (
                                                <span key={s} className="px-3 py-1 text-[10px] font-bold text-teal-500 bg-teal-50/50 rounded-lg border border-teal-100 hover:bg-teal-600 hover:text-white transition-all cursor-default">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-teal-300">Credentials_Base</h2>
                        <div className="space-y-10">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 border-l-2 border-teal-100 pl-6 group">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:text-teal-600 transition-colors italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[9px] font-black text-teal-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t border-teal-50 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.6em] text-teal-200 italic shadow-[0_-20px_50px_rgba(20,184,166,0.02)]">
                <span>Compassionate Care</span>
                <span>UUID: NP_CORE_2026</span>
                <span>(C) HEALTHCARE_DESIGN_LAB</span>
            </footer>
        </div>
    );
};
