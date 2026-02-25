"use client";

export const FitnessTrainerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#000000] p-12 min-h-[1056px] w-[816px] mx-auto text-white font-sans shadow-2xl border-t-[30px] border-orange-600 rounded-b-2xl relative overflow-hidden">
            {/* Dynamic Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-600 opacity-[0.05] rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px]" />
            <div className="absolute top-0 left-0 p-8">
                <div className="w-16 h-1 bg-white opacity-20" />
                <div className="w-1 h-16 bg-white opacity-20 mt-[-4px]" />
            </div>

            <header className="relative z-10 flex flex-col items-center gap-8 mb-16 pt-8">
                <div className="space-y-4 text-center">
                    <h1 className="text-7xl font-black tracking-[-0.08em] uppercase leading-none italic">{personal.fullName || "The Athlete"}</h1>
                    <div className="bg-orange-600 text-black px-8 py-2 rounded-full text-xl font-black tracking-tighter uppercase italic skew-x-[-10deg]">
                        {personal.jobTitle || "Performance Coach & Elite Trainer"}
                    </div>
                </div>

                <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.4em] text-white/40 italic">
                    <span className="flex items-center gap-3">EMAIL: {contact.email}</span>
                    <span className="text-orange-600">LOC: {contact.location}</span>
                    <span className="text-white">PH: {contact.phone}</span>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-10 mt-8">
                {/* Motivation / Summary */}
                <div className="col-span-12">
                    <section className="bg-zinc-900 border-x-4 border-orange-600 p-12 rounded-sm shadow-inner relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 6.28 3.43 4.86 2 3.43 3.43 2 2l1.43 1.43L2 4.86l1.43 1.43L2 7.71l1.43 1.43L2 10.57l1.43 1.43L4.86 13.43l1.43-1.43 8.57 8.57-3.57 3.57 1.43 1.43 1.43-1.43 1.43 1.43 1.43-1.43 1.43 1.43 1.43-1.43 1.43 1.43 1.43-1.43L20.57 14.86z" />
                            </svg>
                        </div>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-700 mb-6 italic border-b border-white/5 pb-2">Training_Philosophy</h2>
                        <p className="text-3xl leading-none text-white font-black uppercase tracking-tighter max-w-2xl relative z-10 italic">
                            "{summary}"
                        </p>
                    </section>
                </div>

                {/* Left: Transformation Logs / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-700 italic border-b border-zinc-900 pb-4">Performance_&_Coaching_History</h2>
                        <div className="space-y-16">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-12 border-l-8 border-zinc-900 hover:border-orange-600 transition-all duration-500">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-3xl font-black text-white tracking-tighter uppercase group-hover:italic transition-all leading-none">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-orange-600 uppercase tracking-widest">{exp.startDate} \\ {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm font-bold text-zinc-500 uppercase tracking-widest italic pt-1">
                                            <span>GYM: {exp.company}</span>
                                            <span className="text-zinc-800">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-sm text-zinc-500 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%] italic pr-8">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: Technical Stack / Skills & Edu */}
                <div className="col-span-4 space-y-20 mt-6">
                    <section className="space-y-12 p-10 bg-zinc-950 border border-zinc-900 rounded-lg shadow-2xl relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <h4 className="text-[6px] font-black uppercase tracking-[1em] rotate-90">ELITE</h4>
                        </div>
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-white text-center border-b border-zinc-900 pb-2 italic underline decoration-orange-600 decoration-4">Performance_Matrix</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-6">
                                        <h3 className="text-[9px] font-black uppercase text-zinc-700 tracking-[0.3em]">{cat}</h3>
                                        <div className="flex flex-col gap-4">
                                            {skills[cat].map(s => (
                                                <div key={s} className="group/item flex flex-col">
                                                    <span className="text-[11px] font-black text-zinc-500 group-hover/item:text-orange-600 transition-colors cursor-default uppercase tracking-widest">{s}</span>
                                                    <div className="w-6 h-1 bg-zinc-900 mt-1 group-hover/item:w-16 group-hover/item:bg-orange-600 transition-all duration-300" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-12 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-zinc-700 italic border-b border-zinc-900 pb-4 text-right">Credentials</h2>
                        <div className="space-y-10 text-right">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 group border-r-4 border-zinc-900 pr-6 hover:border-orange-600 transition-all">
                                    <h3 className="text-sm font-black text-white leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-zinc-800 uppercase mt-2 tracking-[0.4em]">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-32 py-16 border-t border-zinc-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[1.5em] text-zinc-800 italic">
                <span>Relentless Excellence</span>
                <span className="font-mono text-[7px] opacity-10 italic">AUTH: TRAIN_PRO_2026.0</span>
                <span className="text-orange-600">IRON_CORE</span>
            </footer>
        </div>
    );
};
