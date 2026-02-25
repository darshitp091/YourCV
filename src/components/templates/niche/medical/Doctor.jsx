"use client";

export const DoctorNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-white p-12 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-lg border-t-[14px] border-blue-600">
            <header className="flex justify-between items-start border-b border-slate-100 pb-10 mb-10">
                <div className="space-y-4">
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 border-l-8 border-blue-600 pl-6">{personal.fullName || "Medical Professional"}</h1>
                    <div className="flex items-center gap-4 pl-8">
                        <span className="text-lg font-bold text-blue-600 italic">{personal.jobTitle || "Specialist Physician"}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{contact.location}</span>
                    </div>
                </div>
                <div className="text-right text-[11px] font-black text-slate-400 space-y-2 uppercase tracking-widest pt-2">
                    <p className="text-blue-600 font-bold border-b border-blue-50 pb-1">{contact.email}</p>
                    <p>{contact.phone}</p>
                    <div className="pt-2 flex flex-col items-end gap-1 text-[9px] text-slate-300">
                        {contact.linkedin && <span>LinkedIn / {contact.linkedin}</span>}
                        {contact.github && <span>GitHub / {contact.github}</span>}
                        {contact.portfolio && <span>Portfolio / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-12">
                {/* Clinical Summary */}
                <div className="col-span-12">
                    <section className="bg-slate-50 p-10 rounded-2xl border border-slate-100 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <svg className="w-20 h-20 text-blue-900" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
                            </svg>
                        </div>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600/50 mb-4">Clinical_Mission_&_Objective</h2>
                        <p className="text-lg leading-relaxed text-slate-600 font-medium italic text-center mx-auto max-w-2xl px-6 relative z-10">
                            "{summary}"
                        </p>
                    </section>
                </div>

                {/* Left Side: Clinical Experience */}
                <div className="col-span-8 space-y-12 mt-4">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600/50">Post-Graduate_Clinical_Record</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-10 group border-l-2 border-slate-50 hover:border-blue-600 transition-all">
                                    <div className="absolute left-[-6px] top-1.5 w-[10px] h-[10px] rounded-full bg-white border-2 border-slate-200 group-hover:border-blue-600 group-hover:bg-blue-600 transition-all" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tight">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 italic bg-white px-3 py-1 rounded-full border border-slate-100">{exp.startDate} — {exp.current ? "Present" : exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-blue-600 uppercase tracking-widest italic pt-1">
                                            <span>{exp.company}</span>
                                            <span className="text-slate-200 font-normal">|</span>
                                            <span className="text-slate-400 font-normal">{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed font-medium whitespace-pre-wrap max-w-[95%]">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600/50">Key_Research_&_Medical_Projects</h2>
                            <div className="space-y-8">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-8 bg-blue-50/50 rounded-2xl border border-blue-100 hover:border-blue-600 transition-all">
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-xl font-black text-slate-900 leading-none">{proj.name}</h3>
                                            <span className="text-[9px] font-bold text-blue-600 uppercase tracking-widest bg-white px-2 py-1 rounded-full shadow-sm">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-blue-400 font-bold mb-2 italic underline decoration-blue-100">{proj.link}</p>
                                        <p className="text-sm text-slate-600 leading-relaxed italic">{proj.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right Side: Credentials & Skills */}
                <div className="col-span-4 space-y-12 mt-4">
                    <section className="space-y-8 p-10 bg-blue-50/30 rounded-[3rem] border border-blue-100 shadow-sm group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-800 text-center">Clinical_Board_Skills</h2>
                        <div className="space-y-8">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-blue-900 border-b-2 border-blue-100 pb-1">{cat}</h3>
                                        <div className="flex flex-col gap-2.5">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex items-center gap-3 group/item">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover/item:bg-blue-600 group-hover/item:w-3 transition-all" />
                                                    <span className="text-[11px] font-bold text-slate-500 group-hover/item:text-blue-900 transition-colors cursor-default">{s}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8 px-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600/50">Academic_Inventory</h2>
                        <div className="space-y-8">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 border-l-4 border-slate-50 pl-6 hover:border-blue-600 transition-all group">
                                    <h3 className="text-xs font-black text-slate-900 leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase py-1">{edu.school}</p>
                                    <p className="text-[9px] font-black text-slate-200 uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-10 border-t border-slate-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] text-slate-300 italic">
                <span>Healing Excellence</span>
                <span>(C) MEDICAL_CORE_INITIATIVE</span>
                <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    CERTIFIED
                </span>
            </footer>
        </div>
    );
};
