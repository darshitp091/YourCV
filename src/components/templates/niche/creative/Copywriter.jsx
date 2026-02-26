"use client";

export const CopywriterNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#f9f7f2] p-16 min-h-[1056px] w-[816px] mx-auto text-[#2d2d2d] font-serif shadow-xl border-[1px] border-[#d1cfc9]">
            <header className="flex flex-col items-center text-center gap-10 border-b border-[#2d2d2d]/10 pb-16 mb-16">
                <div className="space-y-4">
                    <h1 className="text-5xl font-extrabold tracking-tight text-[#2d2d2d] uppercase leading-none">{personal.fullName || "The Wordsmith"}</h1>
                    <div className="w-16 h-0.5 bg-[#2d2d2d] mx-auto opacity-20" />
                    <p className="text-xl font-medium text-[#5a5a5a] italic tracking-wide lowercase">{personal.jobTitle || "Direct Response Copywriter & Narrative Strategist"}</p>
                </div>

                <div className="flex gap-12 text-[10px] font-bold text-[#8a8a8a] uppercase tracking-[0.4em] font-sans italic">
                    <span className="border-b border-[#2d2d2d]/10 pb-1">{contact.email}</span>
                    <span>{contact.location}</span>
                    <span className="text-[#2d2d2d]">{contact.phone}</span>
                    <div className="flex gap-6 text-[#2d2d2d]/40">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                        {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-16">
                {/* Manifesto / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <div className="p-16 bg-white border border-[#d1cfc9] rounded-sm shadow-sm italic text-2xl leading-[1.8] text-[#444444] text-center mx-auto max-w-3xl relative">
                            <div className="absolute top-0 left-0 p-8 text-4xl opacity-10 font-serif">"</div>
                            <div className="absolute bottom-0 right-0 p-8 text-4xl opacity-10 font-serif rotate-180">"</div>
                            <p className="relative z-10">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Narrative History / Experience */}
                <div className="col-span-8 space-y-16 mt-8">
                    <section className="space-y-12">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-[#8a8a8a] italic">Campaign_Journeys_&_Narratives</h2>
                        <div className="space-y-20">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-10 border-l border-[#2d2d2d]/10 hover:border-[#2d2d2d] transition-colors">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-[#2d2d2d] tracking-tight">{exp.role}</h3>
                                            <span className="text-[10px] font-bold text-[#8a8a8a] uppercase tracking-widest font-sans">{exp.startDate} :: {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm font-bold text-[#5a5a5a] uppercase tracking-[0.1em] font-sans italic">
                                            <span>MANDATE: {exp.company}</span>
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#2d2d2d]/10" />
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-sm text-[#5a5a5a] leading-[1.8] font-medium whitespace-pre-wrap max-w-[95%] italic opacity-80 group-hover:opacity-100 transition-opacity">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-12 mt-16">
                            <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-[#8a8a8a] italic">Published_Works_&_Creative_Copy</h2>
                            <div className="space-y-12">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-12 bg-white border border-[#d1cfc9] shadow-inner group hover:border-[#2d2d2d] transition-colors relative">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-3xl font-black text-[#2d2d2d] tracking-tight italic">"{proj.name}"</h3>
                                            <span className="text-[10px] font-bold text-[#8a8a8a] uppercase tracking-widest font-sans">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-[#2d2d2d]/40 mb-4 font-bold italic underline decoration-[#d1cfc9]">{proj.link}</p>
                                        <p className="text-lg leading-[1.8] font-serif italic text-[#444444]">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Linguistic Toolkit / Skills & Edu */}
                <div className="col-span-4 space-y-20 mt-8">
                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#2d2d2d] border-b border-[#2d2d2d]/10 pb-4 italic">Linguistic_Stack</h2>
                        <div className="space-y-12">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-6">
                                        <h3 className="text-[9px] font-black uppercase text-[#8a8a8a] font-sans tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-4">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex flex-col group/item">
                                                    <span className="text-[11px] font-bold text-[#5a5a5a] hover:text-[#2d2d2d] transition-colors cursor-default tracking-wide">{s}</span>
                                                    <div className="w-4 h-0.5 bg-[#2d2d2d]/10 mt-1 group-hover/item:w-10 group-hover/item:bg-[#2d2d2d] transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-12">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.6em] text-[#8a8a8a] italic">The_Foundation</h2>
                        <div className="space-y-10">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 group">
                                    <h3 className="text-sm font-black text-[#2d2d2d] leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-[#8a8a8a] font-bold uppercase font-sans py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-[#d1cfc9] uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-32 py-16 border-t border-[#2d2d2d]/10 text-center flex justify-between items-center text-[10px] font-bold uppercase tracking-[1em] text-[#8a8a8a] italic">
                <span>The Narrative Prevails</span>
                <span className="font-sans text-[8px] opacity-20">REF_CODE: WORDS_D01</span>
                <span>(C) STORY_LABS_MMXXVI</span>
            </footer>
        </div>
    );
};
