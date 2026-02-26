"use client";

export const ContentCreatorNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-2xl relative overflow-hidden border-b-[20px] border-amber-400">
            {/* Playful Accents */}
            <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-amber-50 to-transparent -z-0" />

            <header className="relative z-10 flex flex-col items-center gap-6 mb-16">
                <div className="space-y-2 text-center">
                    <h1 className="text-5xl font-black tracking-tight text-slate-900 uppercase italic leading-none">{personal.fullName || "Content Pro"}</h1>
                    <div className="inline-block bg-slate-900 text-white px-6 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
                        {personal.jobTitle || "Digital Storyteller & Creator"}
                    </div>
                </div>

                <div className="flex gap-10 text-[11px] font-black text-slate-400 tracking-[0.2em] uppercase italic">
                    <span className="flex items-center gap-2 underline decoration-amber-400 decoration-4 underline-offset-4">{contact.email}</span>
                    <span>{contact.location}</span>
                    <span className="text-slate-900">{contact.phone}</span>
                    <div className="flex gap-4 text-amber-500">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                        {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-10">
                {/* Engagement Vision / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <div className="p-10 bg-white border-[3px] border-slate-900 rounded-[3rem] shadow-[10px_10px_0px_#f59e0b] italic text-xl leading-relaxed text-slate-700 font-serif text-center relative group">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <svg className="w-12 h-12 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </div>
                            "{summary}"
                        </div>
                    </section>
                </div>

                {/* Left: Engagement History / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Campaign_&_Content_Chronicle</h2>
                        <div className="grid grid-cols-1 gap-12">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group p-8 bg-slate-50/50 rounded-2xl border border-slate-100 hover:border-amber-400 hover:bg-white transition-all">
                                    <div className="absolute top-[-10px] left-8 bg-slate-900 text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest italic group-hover:bg-amber-400 group-hover:text-slate-900 transition-all">
                                        {exp.startDate} — {exp.endDate}
                                    </div>
                                    <div className="space-y-4 pt-2">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase">{exp.role}</h3>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-amber-500 uppercase tracking-widest italic">
                                            <span>@ {exp.company}</span>
                                            <span className="text-slate-200">//</span>
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
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Viral_Productions_&_Creative_Exhibits</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-slate-900 text-white rounded-[4rem] shadow-2xl group hover:scale-[1.02] transition-transform relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-8 opacity-5">
                                            <h4 className="text-[8px] font-black tracking-[0.5em]">{proj.techStack}</h4>
                                        </div>
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-3xl font-black italic tracking-tighter uppercase leading-none text-amber-400">#{proj.name?.replace(/\s+/g, '').toLowerCase() || "STORY"}</h3>
                                        </div>
                                        <p className="text-xs text-slate-400 mb-4 font-bold border-b border-slate-800 pb-2 inline-block italic">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-white/90">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Technical Toolkit / Skills & Edu */}
                <div className="col-span-4 space-y-16 mt-6">
                    <section className="space-y-10 p-10 bg-slate-900 text-white rounded-[4rem] shadow-2xl relative group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-amber-400 text-center border-b border-slate-800 pb-2 italic">Creator_Stack</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[10px] font-black uppercase text-white tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-black text-slate-400 hover:text-amber-400 transition-colors cursor-default">
                                                    <span>{s}</span>
                                                    <div className="w-10 h-0.5 bg-slate-800 group-hover:w-16 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Credentials</h2>
                        <div className="space-y-10">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 border-l-4 border-amber-50 pl-6 group">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:text-amber-500 transition-colors italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[9px] font-black text-amber-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t border-slate-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] text-slate-300 italic">
                <span>Engage the Audience</span>
                <span className="opacity-10 text-[8px] tracking-normal">AUTH: CONTENT_CORE_2026</span>
                <span className="text-amber-400">VIRAL_FLOW</span>
            </footer>
        </div>
    );
};
