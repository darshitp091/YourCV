"use client";

export const PhysiotherapistNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fcfdff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-700 font-sans shadow-lg border-t-[10px] border-indigo-400 rounded-b-[2rem]">
            <header className="flex justify-between items-end border-b-2 border-slate-50 pb-12 mb-12">
                <div className="space-y-4">
                    <div className="flex gap-1.5">
                        <div className="w-8 h-2 bg-indigo-400 rounded-full" />
                        <div className="w-4 h-2 bg-indigo-100 rounded-full" />
                    </div>
                    <h1 className="text-5xl font-black tracking-tight text-slate-900 uppercase leading-none">{personal.fullName || "Therapist"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-indigo-500 italic tracking-tight">{personal.jobTitle || "Registered Physiotherapist"}</span>
                    </div>
                </div>
                <div className="text-right space-y-2">
                    <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">{contact.email}</p>
                    <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.4em]">{contact.location}</p>
                    <p className="text-[10px] font-black text-indigo-200 uppercase">{contact.phone} // Active</p>
                    <div className="flex flex-col items-end gap-1 text-[9px] font-black text-indigo-200 uppercase">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                        {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10">
                {/* Rehab Philosophy / Summary */}
                <div className="col-span-12">
                    <section className="bg-indigo-50/30 p-10 rounded-[3rem] border border-indigo-50 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <svg className="w-16 h-16 text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13.5 1.5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-2 19.5h4v1.5h-4V21zm4-12.5v1.5h-4v-1.5h4zm-4 3.5h4v1.5h-4v-1.5zm4 3.5v1.5h-4v-1.5z" />
                                <path d="M19 13v-2c0-1.1-.9-2-2-2h-3V7.5c0-1.1-.9-2-2-2s-2 .9-2 2V9H7c-1.1 0-2 .9-2 2v2h2v4.5c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V13h2z" />
                            </svg>
                        </div>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-300 mb-4 text-center">Movement_&_Rehab_Philosophy</h2>
                        <p className="text-lg leading-relaxed text-slate-500 font-serif italic text-center mx-auto max-w-2xl px-6 relative z-10">
                            "{summary}"
                        </p>
                    </section>
                </div>

                {/* Left: Clinical Practice / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-300">Therapeutic_Practice_History</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-12 group border-l-2 border-indigo-100 hover:border-indigo-400 transition-all">
                                    <div className="absolute left-[-5px] top-1.5 w-[10px] h-[10px] rounded-full bg-white border-2 border-indigo-200 group-hover:bg-indigo-500 group-hover:border-indigo-500 transition-all" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-indigo-300 bg-white px-4 py-1 rounded-full uppercase italic border border-indigo-50">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest italic pt-1 group-hover:text-indigo-500 transition-colors">
                                            <span>CLINIC: {exp.company}</span>
                                            <span className="text-indigo-100">/</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%]">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-300">Community_Health_&_Case_Studies</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-white border border-indigo-100 rounded-[3rem] shadow-sm group hover:border-indigo-500 transition-all border-dashed">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-indigo-500 mb-4 font-bold underline decoration-indigo-50">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-slate-500">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Technical Toolkit / Skills & Edu */}
                <div className="col-span-4 space-y-16 mt-6">
                    <section className="space-y-10 p-10 bg-white rounded-[3rem] border border-indigo-50 shadow-sm relative group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-indigo-400 text-center italic border-b border-indigo-100 pb-2">Rehab_Techniques</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-indigo-200 tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-black text-slate-400 hover:text-indigo-500 transition-colors cursor-default">
                                                    <span>{s}</span>
                                                    <div className="w-8 h-3 rounded-full bg-indigo-50 group-hover:bg-indigo-400 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-indigo-200">Qualifications</h2>
                        <div className="space-y-8">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 border-l-2 border-indigo-50 pl-6 group">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:text-indigo-500 transition-colors italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[9px] font-black text-indigo-100 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t border-indigo-50 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.6em] text-indigo-200 italic">
                <span>Restoring Function</span>
                <span className="opacity-10">REHAB_CORE_D01</span>
                <span>(C) PHYSIO_HUB_2026</span>
            </footer>
        </div>
    );
};
