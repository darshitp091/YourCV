"use client";

export const UXUIDesignerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-10 min-h-[1056px] w-[816px] mx-auto text-zinc-900 font-sans shadow-lg border-[20px] border-zinc-50 rounded-[40px]">
            <header className="flex justify-between items-center mb-12">
                <div className="space-y-4">
                    <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center text-white text-2xl font-black italic">
                        {personal.fullName?.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="space-y-1">
                        <h1 className="text-4xl font-black tracking-tight">{personal.fullName || "Designer Name"}</h1>
                        <p className="text-xl font-medium text-zinc-400 font-serif italic">{personal.jobTitle || "UX/UI Designer"}</p>
                    </div>
                </div>
                <div className="text-right text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 space-y-2 group">
                    <div className="bg-zinc-100 px-4 py-2 rounded-full inline-block border border-zinc-200">PORTFOLIO.LNK</div>
                    <p className="pt-2">{contact.email}</p>
                    <p>{contact.location}</p>
                    <div className="flex flex-col items-end gap-1 pt-2 text-[9px] text-zinc-300 group-hover:text-zinc-900 transition-colors">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                    </div>
                </div>
            </header>

            <main className="space-y-12">
                {/* Design Philosophy / Summary */}
                <section className="bg-zinc-900 p-10 rounded-[2rem] text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full -mr-16 -mt-16" />
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-500 mb-4">Philosophy.v1</h2>
                    <p className="text-lg leading-relaxed font-serif italic text-zinc-200">
                        "{summary}"
                    </p>
                </section>

                <div className="grid grid-cols-12 gap-12">
                    {/* Left: Component Library / Skills */}
                    <div className="col-span-4 space-y-10">
                        <section className="space-y-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Design_System</h2>
                            <div className="space-y-8">
                                {["technical", "tools", "soft"].map(cat => (
                                    skills[cat] && skills[cat].length > 0 && (
                                        <div key={cat} className="space-y-3">
                                            <h3 className="text-[9px] font-black uppercase text-zinc-900 border-b border-zinc-100 pb-1">{cat}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {skills[cat].map(s => (
                                                    <span key={s} className="px-3 py-1 text-[10px] font-bold text-zinc-600 bg-zinc-50 border border-zinc-100 rounded-lg hover:bg-zinc-900 hover:text-white transition-all cursor-default">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Academic_Stack</h2>
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-1 border-l-2 border-zinc-100 pl-4">
                                    <h3 className="text-xs font-bold text-zinc-900 leading-tight">{edu.degree}</h3>
                                    <p className="text-[10px] text-zinc-400 font-bold uppercase">{edu.school}</p>
                                    <p className="text-[8px] font-black text-zinc-300 uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </section>
                    </div>

                    {/* Right: Interaction History / Experience */}
                    <div className="col-span-8 space-y-12">
                        <section className="space-y-8">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Interaction_Log</h2>
                            <div className="space-y-12">
                                {experience.map((exp) => (
                                    <div key={exp.id} className="group cursor-default">
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h3 className="text-2xl font-black text-zinc-900 tracking-tighter group-hover:italic transition-all">{exp.role}</h3>
                                            <span className="text-[10px] font-bold text-zinc-400 bg-zinc-50 px-3 py-1 rounded-full">{exp.startDate} — {exp.current ? "Present" : exp.endDate}</span>
                                        </div>
                                        <p className="text-sm font-bold text-zinc-500 mb-3">{exp.company} // {exp.location}</p>
                                        <p className="text-xs text-zinc-600 leading-relaxed font-medium whitespace-pre-wrap max-w-[95%]">{exp.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Showcase Projects */}
                        {projects && projects.length > 0 && (
                            <section className="space-y-6">
                                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Case_Studies</h2>
                                <div className="grid grid-cols-1 gap-4">
                                    {projects.map((proj) => (
                                        <div key={proj.id} className="p-6 bg-zinc-50 rounded-2xl border border-zinc-100 flex justify-between items-center group hover:bg-zinc-100 transition-colors">
                                            <div className="space-y-1">
                                                <h3 className="font-bold text-zinc-900">{proj.name}</h3>
                                                <p className="text-[10px] text-zinc-500 font-medium">{proj.description.slice(0, 100)}...</p>
                                            </div>
                                            <div className="text-[8px] font-black text-zinc-300 uppercase rotate-90">{proj.techStack}</div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>

            <footer className="mt-20 pt-10 border-t border-zinc-100 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.3em] text-zinc-300">
                <span>Refining Digital Experiences</span>
                <span>UUID: UI-2026-X</span>
                <span>Grid Alignment: Passive</span>
            </footer>
        </div>
    );
};
