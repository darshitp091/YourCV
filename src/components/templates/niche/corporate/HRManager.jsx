"use client";

export const HRManagerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fffcf9] p-12 min-h-[1056px] w-[816px] mx-auto text-stone-800 font-sans shadow-lg border-x-[12px] border-stone-200">
            <header className="flex flex-col items-center text-center gap-6 mb-16 border-b border-stone-100 pb-12">
                <div className="space-y-2">
                    <h1 className="text-5xl font-black tracking-tight text-stone-900 uppercase underline decoration-stone-200 underline-offset-8 decoration-4">{personal.fullName || "HR Leader"}</h1>
                    <p className="text-xl font-bold text-stone-400 italic tracking-widest uppercase">{personal.jobTitle || "Human Resources Manager"}</p>
                </div>

                <div className="flex gap-8 text-[11px] font-black text-stone-400 tracking-[0.2em] uppercase">
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-stone-300" /> {contact.email}</span>
                    <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-stone-300" /> {contact.location}</span>
                    <span>{contact.phone}</span>
                </div>
                <div className="flex gap-4 mt-2 text-[9px] font-bold text-stone-300 uppercase">
                    {contact.linkedin && <span>LinkedIn / {contact.linkedin}</span>}
                    {contact.github && <span>GitHub / {contact.github}</span>}
                    {contact.portfolio && <span>Portfolio / {contact.portfolio}</span>}
                </div>
            </header>

            <main className="grid grid-cols-12 gap-12">
                {/* Cultural Statement / Summary */}
                <div className="col-span-12">
                    <section className="bg-white p-10 rounded-[3rem] border border-stone-100 shadow-sm relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-2 h-full bg-stone-900" />
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-300 mb-4">Core_Cultural_Values</h2>
                        <p className="text-lg leading-relaxed text-stone-600 font-serif italic text-center mx-auto max-w-2xl px-4">
                            "{summary}"
                        </p>
                    </section>
                </div>

                {/* Left: Skill Matrix / Skills */}
                <div className="col-span-4 space-y-12 mt-4">
                    <section className="space-y-8 p-8 bg-white rounded-3xl border border-stone-50 shadow-sm">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-300 text-center">Talent_Toolkit</h2>
                        <div className="space-y-8">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-stone-900 border-b border-stone-100 pb-1">{cat}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills[cat].map(s => (
                                                <span key={s} className="px-3 py-1 text-[10px] font-bold text-stone-500 bg-stone-50 rounded-full border border-stone-100 hover:bg-stone-900 hover:text-white transition-all cursor-default">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6 px-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-300">Academic_Roots</h2>
                        {education.map(edu => (
                            <div key={edu.id} className="space-y-1">
                                <h3 className="text-xs font-black text-stone-900 leading-tight uppercase underline decoration-stone-200 underline-offset-4">{edu.degree}</h3>
                                <p className="text-[10px] text-stone-500 font-bold uppercase py-1">{edu.school}</p>
                                <p className="text-[9px] font-black text-stone-200 uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                            </div>
                        ))}
                    </section>
                </div>

                {/* Right: Career Evolution / Experience */}
                <div className="col-span-8 space-y-12 mt-4">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-300">Professional_Journey</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-8 group">
                                    <div className="absolute left-0 top-1.5 w-px h-full bg-stone-100" />
                                    <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border-2 border-stone-200 bg-white group-hover:bg-stone-900 group-hover:border-stone-900 transition-all" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-stone-900 tracking-tight">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-stone-300 uppercase italic tracking-widest">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-stone-500 uppercase tracking-widest italic">
                                            <span>@ {exp.company}</span>
                                            <span className="text-stone-200 font-normal font-sans tracking-normal">|</span>
                                            <span className="text-stone-400">{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-stone-600 leading-relaxed font-medium whitespace-pre-wrap max-w-[95%]">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-12">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-300">Strategic_HR_Initiatives</h2>
                            <div className="space-y-8">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-8 bg-white rounded-3xl border border-stone-50 shadow-sm relative group overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-stone-900 opacity-[0.02] rounded-full translate-x-16 -translate-y-16" />
                                        <div className="flex justify-between items-center mb-2">
                                            <h3 className="text-xl font-black text-stone-900 tracking-tighter">{proj.name}</h3>
                                            <span className="text-[9px] font-black text-stone-400 uppercase tracking-widest">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-stone-400 mb-2 italic underline decoration-stone-50">{proj.link}</p>
                                        <p className="text-xs text-stone-600 leading-relaxed font-medium italic">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </main>

            <footer className="mt-20 py-8 border-t border-stone-100 text-center flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] text-stone-300 underline decoration-stone-50 underline-offset-8">
                <span>Empowering Teams</span>
                <span>UUID: HR_CORE_2026</span>
                <span>(C) CULTURE_DESIGN_INITIATIVE</span>
            </footer>
        </div>
    );
};
