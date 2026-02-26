"use client";

export const ElectricianNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-xl border-t-[15px] border-blue-700 rounded-b-sm relative overflow-hidden">
            {/* Safety/Technical Accents */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-50/50 rounded-full -translate-y-1/2 translate-x-1/2 -z-0" />
            <div className="absolute top-0 left-0 p-8 flex gap-1">
                <div className="w-2 h-8 bg-blue-700" />
                <div className="w-2 h-8 bg-yellow-400" />
            </div>

            <header className="relative z-10 flex flex-col gap-6 mb-16 border-b-2 border-slate-100 pb-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase leading-none">{personal.fullName || "Certified Electrician"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-blue-700 italic tracking-tight">{personal.jobTitle || "Master Electrician & Systems Integration Specialist"}</span>
                    </div>
                </div>

                <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 italic font-mono pt-4 relative group">
                    <span>{contact.email}</span>
                    <span>//</span>
                    <span>{contact.location}</span>
                    <span>//</span>
                    <span className="text-blue-700">{contact.phone}</span>
                    <div className="absolute -bottom-4 flex gap-4 text-[8px] tracking-[0.2em] text-slate-200 group-hover:text-blue-700 transition-colors">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                        {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-12">
                {/* Reliability / Summary */}
                <div className="col-span-12">
                    <section className="bg-slate-50 p-10 rounded-xl border-l-[8px] border-yellow-400 shadow-sm relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <svg className="w-16 h-16 text-blue-700" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M7 2v11h3v9l7-12h-4l4-8z" />
                            </svg>
                        </div>
                        <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-blue-900/30 mb-6 italic border-b border-blue-900/5 pb-2">Technical_Mission_&_Compliance</h2>
                        <p className="text-xl leading-relaxed text-slate-700 font-serif italic text-center mx-auto max-w-2xl relative z-10 font-black tracking-tight">
                            "{summary}"
                        </p>
                    </section>
                </div>

                {/* Left: Project Logs / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 italic border-b border-slate-50 pb-4">Operational_Timeline_&_Infrastructure</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-10 border-l border-slate-100 hover:border-blue-700 transition-all duration-500">
                                    <div className="absolute left-[-1px] top-0 w-[2px] h-12 bg-blue-700 scale-y-0 group-hover:scale-y-100 origin-top transition-transform" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none group-hover:italic transition-all">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-white bg-blue-700 px-4 py-1 rounded-sm uppercase italic shadow-sm">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest italic pt-1 group-hover:text-blue-700 transition-colors">
                                            <span>SITE: {exp.company}</span>
                                            <span className="text-slate-100">//</span>
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
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 italic border-b border-slate-50 pb-4">Specialized_Infrastructure_&_System_Rollouts</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-slate-50 border-2 border-slate-100 rounded-xl shadow-sm group hover:border-blue-700 transition-all border-dashed relative">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none group-hover:text-blue-700 transition-colors">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-blue-700 uppercase tracking-widest bg-white px-3 py-1 border border-blue-50 font-mono">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-blue-700/50 mb-4 font-bold italic underline decoration-blue-100">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-slate-500">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Technical Toolkit / Skills & Edu */}
                <div className="col-span-4 space-y-16 mt-6">
                    <section className="space-y-10 p-10 bg-white border border-slate-100 rounded-lg shadow-sm relative group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-700 text-center border-b border-blue-50 pb-2 italic">Electrical_Stack</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-5">
                                        <h3 className="text-[9px] font-black uppercase text-slate-300 tracking-[0.2em] font-mono">{cat}</h3>
                                        <div className="flex flex-col gap-4">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-black text-slate-600 hover:text-blue-700 transition-colors cursor-default border-b border-slate-50 pb-1 group/item">
                                                    <span>{s}</span>
                                                    <div className="w-4 h-1 bg-yellow-400/20 group-hover/item:bg-yellow-400 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-200 italic border-b border-slate-50 pb-4 text-right font-mono">Board_Licensing</h2>
                        <div className="space-y-10 text-right">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 group border-r-4 border-slate-50 pr-6 hover:border-yellow-400 transition-all">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tight py-1 font-mono">{edu.school}</p>
                                    <p className="text-[8px] font-black text-slate-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t border-slate-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-slate-200 italic relative z-10">
                <span>Powering Progress</span>
                <span className="opacity-10 text-[8px] tracking-normal font-mono italic">VOLT_ID: ELEC_2026.1</span>
                <span className="text-yellow-400">MMXXVI</span>
            </footer>
        </div>
    );
};
