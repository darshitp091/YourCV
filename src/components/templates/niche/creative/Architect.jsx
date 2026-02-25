"use client";

export const ArchitectNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#f2f2f2] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-2xl border-[1px] border-slate-300 relative overflow-hidden">
            {/* Blueprint Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '20px 20px' }} />

            <header className="relative z-10 grid grid-cols-12 gap-8 mb-16 border-b-2 border-slate-900 pb-12">
                <div className="col-span-8 space-y-4">
                    <div className="flex gap-1 mb-4">
                        <div className="w-12 h-1 bg-slate-900" />
                        <div className="w-4 h-1 bg-slate-300" />
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase leading-none">{personal.fullName || "Structural Lead"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-slate-500 italic tracking-tight">{personal.jobTitle || "Chartered Architect & Urban Designer"}</span>
                    </div>
                </div>
                <div className="col-span-4 text-right flex flex-col justify-end space-y-2 border-l border-slate-200 pl-8">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] mb-4">{contact.location}</p>
                    <div className="bg-white border border-slate-200 p-4 rounded-sm shadow-sm">
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">{contact.email}</p>
                        <p className="text-[10px] font-bold text-slate-400 pt-1">{contact.phone}</p>
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-12">
                {/* Architectural Statement / Summary */}
                <div className="col-span-4 space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 border-b border-slate-200 pb-2 italic">Design_Mandate</h2>
                        <div className="p-8 bg-white border border-slate-200 shadow-inner italic text-lg leading-relaxed text-slate-600 font-serif">
                            "{summary}"
                        </div>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 border-b border-slate-200 pb-2 italic">Technical_Drafting</h2>
                        <div className="space-y-8">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-slate-900 tracking-[0.2em] font-mono">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-black text-slate-400 hover:text-slate-900 transition-colors cursor-crosshair border-b border-slate-100 pb-1">
                                                    <span>{s}</span>
                                                    <div className="w-2 h-2 rounded-full border border-slate-200" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>
                </div>

                {/* Project Portfolio & Structural Experience */}
                <div className="col-span-8 space-y-12">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 border-b border-slate-200 pb-2 italic">Structural_Project_Timeline</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-12 border-l-2 border-slate-900 hover:bg-white hover:p-8 hover:rounded-lg hover:shadow-xl transition-all duration-500">
                                    <div className="absolute left-[-2px] top-1.5 w-[2px] h-12 bg-slate-300 group-hover:bg-slate-900 transition-all" />
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-slate-400 uppercase italic bg-slate-50 px-3 py-1 border border-slate-200">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest italic pt-1 group-hover:text-slate-900 transition-colors">
                                            <span>FIRM: {exp.company}</span>
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
                </div>

                <div className="col-span-12 pt-12">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 border-b border-slate-200 pb-2 italic">Academic_Acquisitions</h2>
                        <div className="grid grid-cols-2 gap-10">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 group bg-white p-8 border border-slate-100 shadow-sm rounded-sm">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-slate-200 uppercase mt-2 font-mono tracking-tighter">{edu.startDate} // {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t border-slate-200 flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-slate-300 italic">
                <span>The Built Environment</span>
                <span className="opacity-10 text-[8px] font-mono tracking-normal">REF: ARCH_2026_X_01</span>
                <span className="text-slate-900">MMXXVI</span>
            </footer>
        </div>
    );
};
