"use client";

export const FashionDesignerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-16 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-serif shadow-2xl relative overflow-hidden border-[1px] border-slate-100">
            {/* Editorial Accents */}
            <div className="absolute top-0 right-0 w-[400px] h-full bg-[#f9f9f9] -z-0" />

            <header className="relative z-10 grid grid-cols-12 gap-8 mb-20 border-b border-slate-900 pb-12">
                <div className="col-span-12 space-y-6">
                    <h1 className="text-7xl font-extrabold tracking-[-0.08em] text-slate-900 uppercase leading-none mix-blend-multiply">{personal.fullName || "Fashion Visionary"}</h1>
                    <div className="flex justify-between items-end">
                        <span className="text-2xl font-light italic text-slate-400 tracking-widest">{personal.jobTitle || "Creative Director / Fashion Designer"}</span>
                        <div className="text-right text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">
                            Established MMXXVI
                        </div>
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-16">
                {/* Brand Statement / Summary */}
                <div className="col-span-4 space-y-12">
                    <section className="space-y-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[1em] text-slate-200 border-b border-slate-100 pb-4">Manifesto</h2>
                        <p className="text-xl leading-[1.8] text-slate-600 italic font-light pr-6">
                            "{summary}"
                        </p>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[1em] text-slate-200 border-b border-slate-100 pb-4">Aesthetic_Toolkit</h2>
                        <div className="space-y-6">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-slate-900 tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-bold text-slate-400 hover:text-slate-900 transition-colors cursor-default border-b border-slate-50 pb-1">
                                                    <span>{s}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>
                </div>

                {/* Collections & Experience */}
                <div className="col-span-8 space-y-16">
                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[1em] text-slate-200 border-b border-slate-100 pb-4">Collection_History</h2>
                        <div className="space-y-20">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-10 border-l border-slate-900 hover:border-slate-300 transition-all duration-700">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none group-hover:italic transition-all">{exp.role}</h3>
                                            <span className="text-[9px] font-bold text-slate-300 uppercase tracking-widest">{exp.startDate} // {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest italic pt-1">
                                            <span>THE_LABEL: {exp.company}</span>
                                            <div className="w-1 h-1 rounded-full bg-slate-200" />
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 leading-relaxed font-light whitespace-pre-wrap max-w-[95%] italic pr-8 border-r border-slate-50">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-12 pt-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[1em] text-slate-200 border-b border-slate-100 pb-4">Academic_Foundation</h2>
                        <div className="grid grid-cols-2 gap-10">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 group border-b border-slate-50 pb-6">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:underline transition-all underline-offset-4">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-slate-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t border-slate-900 flex justify-between items-center text-[10px] font-extrabold uppercase tracking-[1em] text-slate-200 italic">
                <span>The Silhouette Defined</span>
                <span className="opacity-30">COLL_REF: FASH_2026.1</span>
                <span>(C) VOGUE_LABS_GLOBAL</span>
            </footer>
        </div>
    );
};
