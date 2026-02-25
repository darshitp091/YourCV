"use client";

export const ArtDirectorNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#111111] p-16 min-h-[1056px] w-[816px] mx-auto text-white font-sans shadow-2xl relative overflow-hidden ring-1 ring-white/10">
            {/* Minimalist Accents */}
            <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-white/5 skew-x-[-20deg] translate-x-[25%]" />
            <div className="absolute top-0 left-0 p-8">
                <div className="w-12 h-1 bg-white" />
                <div className="w-1 h-12 bg-white mt-[-4px]" />
            </div>

            <header className="relative z-10 flex flex-col items-center text-center gap-12 mb-20">
                <div className="space-y-6">
                    <h1 className="text-7xl font-black tracking-[-0.05em] uppercase leading-none mix-blend-difference">{personal.fullName || "Creative Lead"}</h1>
                    <div className="w-24 h-1 bg-white mx-auto" />
                    <p className="text-xl font-bold tracking-[0.6em] text-white/50 uppercase italic">{personal.jobTitle || "Executive Art Director"}</p>
                </div>

                <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.4em] opacity-30 italic">
                    <span>{contact.email}</span>
                    <span>{contact.location}</span>
                    <span className="text-white opacity-100">{contact.phone}</span>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-16">
                {/* Visual Vision / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <div className="p-16 border border-white/10 rounded-sm shadow-2xl bg-black/40 backdrop-blur-3xl italic text-2xl leading-[1.6] text-white/80 font-serif text-center relative group overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full border-2 border-white/5 scale-95 group-hover:scale-100 transition-transform duration-700" />
                            "{summary}"
                        </div>
                    </section>
                </div>

                {/* Left: Campaign History / Experience */}
                <div className="col-span-8 space-y-16 mt-8">
                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 border-b border-white/5 pb-4 italic">Campaign_&_Visual_Strategy_History</h2>
                        <div className="space-y-20">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group border-l border-white/10 pl-12 hover:border-white transition-all">
                                    <div className="absolute left-[-1px] top-0 w-[1px] h-12 bg-white scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500" />
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-3xl font-black tracking-tight text-white uppercase group-hover:italic transition-all">{exp.role}</h3>
                                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{exp.startDate} :: {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm font-bold text-white/40 uppercase tracking-[0.1em] italic">
                                            <span>THE_HOUSE: {exp.company}</span>
                                            <div className="w-2 h-2 rounded-full bg-white opacity-20" />
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-sm text-white/60 leading-[1.8] font-medium whitespace-pre-wrap max-w-[90%] italic">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: Technical Mastery / Skills & Edu */}
                <div className="col-span-4 space-y-20 mt-8">
                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 border-b border-white/5 pb-4 italic text-right">Mastery_Matrix</h2>
                        <div className="space-y-12 text-right">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-6">
                                        <h3 className="text-[9px] font-black uppercase text-white tracking-[0.3em] opacity-40">{cat}</h3>
                                        <div className="flex flex-col gap-4">
                                            {skills[cat].map(s => (
                                                <div key={s} className="group/item flex flex-col items-end">
                                                    <span className="text-[11px] font-black text-white/60 group-hover/item:text-white transition-colors cursor-default uppercase tracking-widest">{s}</span>
                                                    <div className="w-4 h-1 bg-white/10 mt-1 group-hover/item:w-12 group-hover/item:bg-white transition-all duration-300" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 border-b border-white/5 pb-4 italic text-right">The_Academy</h2>
                        <div className="space-y-12 text-right">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 group border-r-2 border-white/5 pr-6 hover:border-white transition-all">
                                    <h3 className="text-sm font-black text-white leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-white/40 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-white/20 uppercase mt-2 tracking-[0.4em]">{edu.startDate} // {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-32 py-16 border-t border-white/5 text-center flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-white/20 italic">
                <span>Elevate the Aesthetic</span>
                <span className="font-mono text-[8px] opacity-10">AUTH: ART_DIR_2026.0</span>
                <span>MMXXVI</span>
            </footer>
        </div>
    );
};
