"use client";

export const AccountManagerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-lg border-b-[20px] border-emerald-800">
            <header className="flex justify-between items-start border-b border-slate-100 pb-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase leading-none">{personal.fullName || "Account Lead"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-emerald-800 italic underline decoration-emerald-100 underline-offset-8">{personal.jobTitle || "Senior Account Manager"}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{contact.location}</span>
                    </div>
                </div>
                <div className="text-right space-y-2">
                    <div className="bg-emerald-50 border border-emerald-100 px-6 py-2 rounded-2xl inline-block shadow-sm">
                        <p className="text-xs font-bold text-emerald-900 tracking-tight">{contact.email}</p>
                    </div>
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em] font-mono">{contact.phone}</p>
                </div>
            </header>

            <main className="space-y-12">
                {/* Client Focus / Summary */}
                <section className="space-y-6">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-emerald-800/30">Client_Retention_&_Growth_Strategy</h2>
                    <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm italic text-lg leading-relaxed text-slate-600 font-serif relative overflow-hidden group hover:shadow-md transition-shadow">
                        <div className="absolute top-0 right-0 w-2 h-full bg-emerald-800 opacity-[0.05]" />
                        "{summary}"
                    </div>
                </section>

                <div className="grid grid-cols-12 gap-12 mt-6">
                    {/* Left: Engagement History / Experience */}
                    <div className="col-span-8 space-y-12">
                        <section className="space-y-10">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-emerald-800/30">Relationship_&_Revenue_Timeline</h2>
                            <div className="space-y-14">
                                {experience.map((exp) => (
                                    <div key={exp.id} className="relative pl-10 group">
                                        <div className="absolute left-0 top-0 h-full w-px bg-slate-100" />
                                        <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full border-2 border-slate-200 bg-white group-hover:bg-emerald-800 group-hover:border-emerald-800 transition-all" />

                                        <div className="space-y-4">
                                            <div className="flex justify-between items-baseline">
                                                <h3 className="text-2xl font-black text-slate-900 tracking-tighter group-hover:italic transition-all uppercase">{exp.role}</h3>
                                                <span className="text-[10px] font-black text-slate-400 bg-slate-50 px-4 py-1 rounded-full uppercase italic border border-slate-100">{exp.startDate} — {exp.endDate}</span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm font-bold text-emerald-800/70 uppercase tracking-widest italic">
                                                <span>Portfolio: {exp.company}</span>
                                                <span className="text-slate-200">//</span>
                                                <span>{exp.location}</span>
                                            </div>
                                            <p className="text-xs text-slate-600 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%]">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right: Negotiation Toolkit / Skills & Edu */}
                    <div className="col-span-4 space-y-12">
                        <section className="space-y-8 p-10 bg-emerald-50/50 rounded-[3rem] border border-emerald-100 shadow-sm">
                            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-emerald-900 text-center">Engagement_Toolbox</h2>
                            <div className="space-y-8">
                                {["technical", "soft", "tools"].map(cat => (
                                    skills[cat] && skills[cat].length > 0 && (
                                        <div key={cat} className="space-y-4">
                                            <h3 className="text-[9px] font-black uppercase text-slate-900 border-b-4 border-emerald-100 pb-1">{cat}</h3>
                                            <div className="flex flex-col gap-3">
                                                {skills[cat].map(s => (
                                                    <div key={s} className="flex justify-between items-center text-[11px] font-black text-slate-500 hover:text-emerald-800 transition-colors cursor-default">
                                                        <span>{s}</span>
                                                        <div className="w-6 h-px bg-emerald-100 group-hover:w-10 transition-all" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8 px-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-emerald-800/30">Academic_Roots</h2>
                            <div className="space-y-8">
                                {education.map(edu => (
                                    <div key={edu.id} className="space-y-2 border-l-2 border-emerald-50 pl-4 group">
                                        <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:text-emerald-800 transition-colors">{edu.degree}</h3>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase py-1">{edu.school}</p>
                                        <p className="text-[9px] font-black text-emerald-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="mt-24 py-10 border-t border-slate-100 flex justify-between items-center text-[9px] font-black uppercase tracking-[0.5em] text-slate-300">
                <span>Nurturing Partnerships</span>
                <span>UUID: ACC_MGR_HQ_2026</span>
                <span>(C) RELATIONSHIP_MGMT_CORP</span>
            </footer>
        </div>
    );
};
