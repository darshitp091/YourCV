"use client";

export const PlumberNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#f0f4f8] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-xl border-t-[12px] border-sky-600 rounded-b-lg relative overflow-hidden">
            {/* Liquid/Bubble Accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200/20 rounded-full -translate-y-1/2 translate-x-1/2 -z-0 blur-3xl" />

            <header className="relative z-10 flex flex-col gap-6 mb-16 border-b border-sky-100 pb-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase leading-none">{personal.fullName || "Sanitary Engineer"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-sky-600 italic tracking-tight">{personal.jobTitle || "Master Plumber & Mechanical Systems Specialist"}</span>
                    </div>
                </div>

                <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 italic pt-4 relative group">
                    <span>{contact.email}</span>
                    <span className="text-sky-600">|</span>
                    <span>{contact.location}</span>
                    <span className="text-sky-600">|</span>
                    <span className="text-slate-900">{contact.phone}</span>
                    <div className="absolute -bottom-4 flex gap-4 text-[8px] tracking-[0.2em] text-slate-200 group-hover:text-sky-600 transition-colors">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                        {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-10">
                {/* Reliability / Summary */}
                <div className="col-span-12">
                    <section className="bg-white p-12 rounded-3xl shadow-inner border border-sky-50 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <svg className="w-16 h-16 text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                <path d="M12 6v6l4.25 2.52.75-1.23-3.5-2.09v-5.2z" />
                            </svg>
                        </div>
                        <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-sky-900/40 mb-6 italic border-b border-sky-900/5 pb-2">Operational_Methodology_&_Safety</h2>
                        <p className="text-2xl leading-relaxed text-slate-600 font-serif italic text-center mx-auto max-w-2xl relative z-10 font-bold tracking-tight">
                            "{summary}"
                        </p>
                    </section>
                </div>

                {/* Left: Project Logs / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 border-b border-slate-100 pb-4 italic">Mechanical_Systems_Timeline</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-10 border-l-4 border-sky-100 hover:border-sky-600 transition-all duration-500">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none group-hover:italic transition-all">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-white bg-sky-600 px-4 py-1 rounded-sm uppercase italic shadow-lg">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest italic pt-1 group-hover:text-sky-600 transition-colors">
                                            <span>MUNICIPALITY/FIRM: {exp.company}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%] border-b border-sky-50 pb-4">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 border-b border-slate-100 pb-4 italic">Commercial_System_Installs_&_Retrofits</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-white border border-sky-50 rounded-3xl shadow-sm group hover:border-sky-600 transition-all relative">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none group-hover:italic transition-all">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-sky-600 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-sky-600/50 mb-4 font-bold border-b border-sky-50 pb-2 inline-block italic">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-slate-500">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Technical Toolkit / Skills & Edu */}
                <div className="col-span-4 space-y-16 mt-6">
                    <section className="space-y-10 p-10 bg-white border border-sky-50 rounded-2xl shadow-sm relative group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-sky-600 text-center border-b border-sky-50 pb-2 italic">Systems_Expertise</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-5">
                                        <h3 className="text-[9px] font-black uppercase text-slate-300 tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-4">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-black text-slate-500 hover:text-sky-600 transition-colors cursor-default group/item">
                                                    <span>{s}</span>
                                                    <div className="flex gap-0.5">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-sky-100 group-hover/item:bg-sky-600 transition-all" />
                                                        <div className="w-1.5 h-1.5 rounded-full bg-sky-100 group-hover/item:bg-sky-600 transition-all delay-75" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-200 italic border-b border-slate-50 pb-4 text-right">Certifications</h2>
                        <div className="space-y-10 text-right">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 group border-r-4 border-sky-50 pr-6 hover:border-sky-600 transition-all">
                                    <h3 className="text-sm font-black text-slate-900 uppercase group-hover:italic transition-all leading-tight">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-slate-100 uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t border-sky-50 flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-slate-200 italic relative z-10">
                <span>Precision Flow</span>
                <span className="opacity-10 text-[8px] tracking-normal">TRACER: PLUMB_2026_A</span>
                <span className="text-sky-600">MMXXVI</span>
            </footer>
        </div>
    );
};
