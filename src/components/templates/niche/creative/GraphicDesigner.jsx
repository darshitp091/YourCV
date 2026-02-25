"use client";

export const GraphicDesignerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-2xl border-r-[40px] border-violet-600 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-600/5 rounded-full -translate-y-1/2 translate-x-1/2" />

            <header className="relative z-10 grid grid-cols-12 gap-8 mb-16">
                <div className="col-span-8 space-y-4">
                    <h1 className="text-6xl font-black tracking-tighter text-slate-900 uppercase leading-[0.85]">{personal.fullName || "Creative Mind"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold text-violet-600 italic tracking-tight">{personal.jobTitle || "Senior Graphic Designer"}</span>
                    </div>
                </div>
                <div className="col-span-4 text-right flex flex-col justify-end space-y-2">
                    <p className="text-xs font-black text-slate-400 uppercase tracking-[0.4em] mb-4">{contact.location}</p>
                    <div className="bg-slate-900 text-white p-4 rounded-tl-3xl shadow-xl">
                        <p className="text-[10px] font-black uppercase tracking-widest truncate">{contact.email}</p>
                        <p className="text-[10px] font-bold opacity-50 pt-1">{contact.phone}</p>
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-12">
                {/* Creative Vision / Summary */}
                <div className="col-span-4">
                    <section className="space-y-6">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.8em] text-violet-600/30 rotate-180 [writing-mode:vertical-lr] absolute -left-6 top-0 h-full">Visionary_Summary</h2>
                        <div className="p-8 bg-violet-50/50 border-l-4 border-violet-600 rounded-tr-[3rem] shadow-sm italic text-lg leading-relaxed text-slate-600 font-serif">
                            "{summary}"
                        </div>
                    </section>
                </div>

                {/* Right Content: Portfolio & Experience */}
                <div className="col-span-8 space-y-12">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 border-b border-slate-100 pb-2">Design_Execution_Timeline</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group hover:scale-[1.02] transition-transform">
                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase group-hover:text-violet-600 transition-colors leading-none">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-white bg-violet-600 px-4 py-1 rounded-full uppercase italic shadow-md">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-400 uppercase tracking-widest italic pt-1 group-hover:text-slate-900">
                                            <span>AGENCY: {exp.company}</span>
                                            <span className="text-violet-100">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%] border-l-2 border-slate-100 pl-6 group-hover:border-violet-600 transition-all">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="col-span-12 grid grid-cols-3 gap-8 mt-6">
                    {/* Skills: Toolkit */}
                    <div className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Visual_Toolkit</h2>
                        <div className="flex flex-wrap gap-2">
                            {skills.technical?.map(s => (
                                <span key={s} className="px-4 py-2 text-[10px] font-black uppercase text-violet-600 bg-violet-50 rounded-full border border-violet-100 hover:bg-violet-600 hover:text-white transition-all cursor-crosshair shadow-sm">
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Skills: Concepts */}
                    <div className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Core_Concepts</h2>
                        <div className="space-y-3">
                            {skills.soft?.map(s => (
                                <div key={s} className="flex items-center gap-3 group/item">
                                    <div className="w-2 h-2 rounded-full border-2 border-violet-200 group-hover/item:bg-violet-600 group-hover/item:border-violet-600 transition-all" />
                                    <span className="text-[11px] font-black text-slate-500 uppercase italic group-hover/item:text-slate-900 transition-colors cursor-default">{s}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Academic_Fine_Arts</h2>
                        <div className="space-y-6">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 border-b border-slate-100 pb-4 group">
                                    <h3 className="text-xs font-black text-slate-900 leading-tight uppercase group-hover:text-violet-600 transition-colors italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-violet-100 uppercase tracking-widest">{edu.startDate} // {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            <footer className="mt-20 py-10 border-t border-slate-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] text-slate-300 italic relative z-10">
                <span>Breaking the Grid</span>
                <span>UUID: CREATIVE_GD_2026</span>
                <span className="text-violet-600 opacity-50">(C) DESIGN_LAB_GLOBAL</span>
            </footer>
        </div>
    );
};
