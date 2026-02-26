"use client";

export const VideoEditorNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#18181b] p-12 min-h-[1056px] w-[816px] mx-auto text-zinc-400 font-sans shadow-2xl border-l-[12px] border-zinc-800 relative">
            {/* Timeline Sidebar Background */}
            <div className="absolute top-0 left-0 w-[40px] h-full bg-zinc-900 border-r border-zinc-800 -z-0" />

            <header className="relative z-10 grid grid-cols-12 gap-8 mb-16 items-center">
                <div className="col-span-8 space-y-4">
                    <h1 className="text-5xl font-black tracking-tighter text-white uppercase leading-none">{personal.fullName || "Motion Storyteller"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-zinc-500 italic tracking-tight">{personal.jobTitle || "Post-Production Specialist / Video Editor"}</span>
                    </div>
                </div>
                <div className="col-span-4 text-right space-y-2 border-l border-zinc-800 pl-8">
                    <p className="text-[10px] font-black text-white px-4 py-1 bg-zinc-800 rounded-sm inline-block uppercase tracking-widest">{contact.email}</p>
                    <p className="text-[10px] font-black text-zinc-600 uppercase tracking-[0.4em] pt-2">{contact.location} // {contact.phone}</p>
                    <div className="flex flex-col items-end gap-1 text-[9px] font-black text-zinc-700 uppercase">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                        {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-12">
                {/* The Cut / Summary */}
                <div className="col-span-12">
                    <section className="bg-zinc-900 p-12 border border-zinc-800 rounded-lg shadow-inner relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <svg className="w-16 h-16 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z" />
                            </svg>
                        </div>
                        <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-zinc-700 mb-6 text-center italic border-b border-zinc-800 pb-2">Director's_Statement</h2>
                        <p className="text-xl leading-relaxed text-zinc-300 font-serif italic text-center mx-auto max-w-2xl relative z-10">
                            "{summary}"
                        </p>
                    </section>
                </div>

                {/* Left: Filmography & Cuts / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-700 italic border-b border-zinc-900 pb-4">Timeline_Engagement_Log</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-12 border-l-2 border-zinc-800 hover:border-zinc-400 transition-all duration-500">
                                    <div className="absolute left-[-5px] top-1.5 w-2 h-2 rounded-sm bg-zinc-800 rotate-45 group-hover:bg-white group-hover:scale-150 transition-all" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-white tracking-tighter uppercase group-hover:italic transition-all leading-none">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-zinc-600 bg-zinc-900 px-3 py-1 rounded-sm uppercase italic border border-zinc-800 tracking-tighter">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-zinc-500 uppercase tracking-widest italic pt-1">
                                            <span>PRODUCTION: {exp.company}</span>
                                            <span className="text-zinc-800">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-zinc-500 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%] border-b border-zinc-900 pb-4">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-700 italic border-b border-zinc-900 pb-4">Selected_Portfolio_&_Cuts</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-zinc-900 border border-zinc-800 rounded-lg shadow-2xl group hover:border-zinc-400 transition-all border-dashed">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-3xl font-black italic tracking-tighter uppercase text-white leading-none">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-zinc-500 mb-4 font-bold border-b border-zinc-800 pb-2 inline-block italic">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-zinc-400">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Technical Stack / Skills & Edu */}
                <div className="col-span-4 space-y-16 mt-6">
                    <section className="space-y-10 p-10 bg-zinc-900 border border-zinc-800 rounded shadow-2xl relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-12 h-12 bg-white/5 skew-x-[-45deg]" />
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-zinc-100 text-center border-b border-zinc-800 pb-2 italic">The_Suite</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-zinc-600 tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-black text-zinc-500 hover:text-white transition-colors cursor-default group/item">
                                                    <span>{s}</span>
                                                    <div className="w-6 h-px bg-zinc-800 group-hover/item:w-10 group-hover/item:bg-white transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-700 italic border-b border-zinc-900 pb-4">Core_Foundations</h2>
                        <div className="space-y-10">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 border-r-2 border-zinc-800 pr-6 group text-right hover:border-white transition-all">
                                    <h3 className="text-xs font-black text-white leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-zinc-600 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-zinc-800 uppercase mt-2 tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t border-zinc-800 flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-zinc-700 italic">
                <span>Precision in Every Frame</span>
                <span className="opacity-10 text-[8px] tracking-normal font-mono italic">FR_RATE: 24FPS.D01</span>
                <span className="text-zinc-500">FILM_EDIT_STU</span>
            </footer>
        </div>
    );
};
