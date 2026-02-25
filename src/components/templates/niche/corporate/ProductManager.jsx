"use client";

export const ProductManagerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-lg border-t-[20px] border-indigo-900">
            <header className="flex justify-between items-start border-b border-slate-100 pb-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase">{personal.fullName || "Product Lead"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-indigo-900 italic font-serif tracking-tight">{personal.jobTitle || "Senior Product Manager"}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{contact.location}</span>
                    </div>
                </div>
                <div className="text-right space-y-2 pt-2">
                    <div className="bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl inline-block shadow-sm">
                        <p className="text-xs font-bold text-slate-800 tracking-tight underline decoration-indigo-100">{contact.email}</p>
                    </div>
                    <p className="text-[10px] font-black text-slate-400 opacity-50 uppercase tracking-widest">{contact.phone}</p>
                    <div className="pt-2 flex flex-col items-end gap-1 text-[9px] font-bold text-slate-300 uppercase">
                        {contact.linkedin && <span>LinkedIn / {contact.linkedin}</span>}
                        {contact.github && <span>GitHub / {contact.github}</span>}
                        {contact.portfolio && <span>Portfolio / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="space-y-12">
                {/* Product Vision / Summary */}
                <section className="space-y-6">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-900/30">Strategic_Vision</h2>
                    <div className="bg-indigo-50/50 p-10 rounded-[2.5rem] border border-indigo-50 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-900 opacity-[0.02] rounded-full translate-x-16 -translate-y-16" />
                        <p className="text-xl leading-relaxed text-slate-700 font-serif italic text-center mx-auto max-w-2xl">
                            "{summary}"
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-12 gap-12 mt-6">
                    {/* Main: Roadmap history / Experience */}
                    <div className="col-span-8 space-y-12">
                        <section className="space-y-8">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-900/30">Build_Log_&_Releases</h2>
                            <div className="space-y-14">
                                {experience.map((exp) => (
                                    <div key={exp.id} className="relative pl-10 group">
                                        <div className="absolute left-0 top-0 h-full w-px bg-slate-100" />
                                        <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border-2 border-slate-200 bg-white group-hover:bg-indigo-900 group-hover:border-indigo-900 transition-all" />

                                        <div className="space-y-4">
                                            <div className="flex justify-between items-baseline">
                                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter group-hover:italic transition-all">{exp.role}</h3>
                                                <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-4 py-1 rounded-full uppercase italic">{exp.startDate} — {exp.endDate}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm font-bold text-indigo-900/60 uppercase tracking-widest italic">
                                                <span>@ {exp.company}</span>
                                                <span className="text-slate-200">//</span>
                                                <span>{exp.location}</span>
                                            </div>
                                            <p className="text-xs text-slate-600 leading-relaxed font-medium whitespace-pre-wrap max-w-[95%]">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {projects && projects.length > 0 && (
                            <section className="space-y-8 mt-12">
                                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-900/30">Strategic_Product_Initiatives</h2>
                                <div className="space-y-6">
                                    {projects.map((proj) => (
                                        <div key={proj.id} className="p-6 bg-slate-50/50 rounded-3xl border border-slate-100 hover:border-indigo-900/30 transition-all border-dashed">
                                            <div className="flex justify-between items-center mb-2">
                                                <h3 className="text-xl font-black text-slate-900 tracking-tighter group-hover:italic">{proj.name}</h3>
                                                <span className="text-[9px] font-black text-indigo-900/40 uppercase tracking-widest bg-white px-3 py-1 rounded-full">{proj.techStack}</span>
                                            </div>
                                            <p className="text-xs text-indigo-900/40 mb-2 italic underline decoration-indigo-50">{proj.link}</p>
                                            <p className="text-xs text-slate-600 leading-relaxed font-medium">{proj.description}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar: Growth Matrix / Skills & Edu */}
                    <div className="col-span-4 space-y-12">
                        <section className="space-y-8">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-900/30">Growth_Toolbox</h2>
                            <div className="space-y-8">
                                {["technical", "soft", "tools"].map(cat => (
                                    skills[cat] && skills[cat].length > 0 && (
                                        <div key={cat} className="space-y-4">
                                            <h3 className="text-[9px] font-black uppercase text-indigo-900 border-b-2 border-indigo-50 pb-1">{cat}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {skills[cat].map(s => (
                                                    <span key={s} className="px-3 py-1 text-[10px] font-bold text-slate-600 bg-white border border-slate-100 rounded-lg shadow-sm hover:border-indigo-900 hover:text-indigo-900 transition-all cursor-default">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8 px-2">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-900/30">Academic_Stack</h2>
                            <div className="space-y-6">
                                {education.map(edu => (
                                    <div key={edu.id} className="space-y-2 border-l-2 border-slate-50 pl-4">
                                        <h3 className="text-xs font-black text-slate-900 leading-tight uppercase">{edu.degree}</h3>
                                        <p className="text-[10px] text-slate-400 font-bold italic py-1">{edu.school}</p>
                                        <p className="text-[9px] font-black text-slate-200 uppercase tracking-widest font-sans">{edu.startDate} — {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="mt-24 py-8 border-t border-slate-100 text-center flex justify-between items-center text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">
                <span>Defining the Future</span>
                <span>UUID: PROD_LEAD_X</span>
                <span>(C) IMPACT_MANAGEMENT_GRP</span>
            </footer>
        </div>
    );
};
