"use client";

export const FrontendDeveloperNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#f8fafc] p-8 min-h-[1056px] w-[816px] mx-auto text-[#1e293b] font-sans shadow-xl border border-slate-200">
            {/* Browser Header Mockup */}
            <div className="bg-slate-800 rounded-t-xl p-3 flex gap-1.5 items-center mb-0 border-b border-slate-700">
                <div className="w-3 h-3 rounded-full bg-rose-500" />
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
                <div className="ml-4 bg-slate-700/50 px-4 py-0.5 rounded-md text-[9px] font-bold text-slate-400 font-mono flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    https://{personal.fullName?.toLowerCase().replace(/\s+/g, '-')}.dev
                </div>
            </div>

            <div className="bg-white p-10 border border-t-0 border-slate-200 rounded-b-xl min-h-[960px]">
                <header className="flex justify-between items-start mb-12">
                    <div className="space-y-4">
                        <div className="text-indigo-600 font-mono text-xl font-black">&lt;h1&gt;</div>
                        <h1 className="text-5xl font-black tracking-tight text-slate-900 border-l-8 border-indigo-600 pl-6">{personal.fullName || "Your Name"}</h1>
                        <div className="text-indigo-600 font-mono text-xl font-black ml-4">&lt;/h1&gt;</div>
                        <p className="text-lg font-bold text-slate-500 flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-indigo-600" />
                            {personal.jobTitle || "Frontend Developer"}
                        </p>
                    </div>
                    <div className="text-right space-y-3">
                        <div className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg inline-block font-mono text-xs font-bold border border-indigo-100">
                            const contact = &#123; status: 'available' &#125;;
                        </div>
                        <div className="flex flex-col text-[11px] font-bold text-slate-400 tracking-wider">
                            <span>{contact.email}</span>
                            <span>{contact.location}</span>
                            <span>{contact.phone}</span>
                        </div>
                    </div>
                </header>

                <main className="grid grid-cols-1 gap-12">
                    {/* Summary */}
                    <section className="bg-indigo-600 text-white p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-20 uppercase tracking-[0.4em]">Section: Bio</div>
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 opacity-50">About_Me</h2>
                        <p className="text-lg leading-relaxed font-medium">
                            {summary}
                        </p>
                    </section>

                    <div className="grid grid-cols-2 gap-12">
                        {/* Skills - Visualized as Tags */}
                        <section className="space-y-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 border-b border-slate-100 pb-2">Skills_&_Tech</h2>
                            <div className="space-y-6">
                                {["technical", "tools", "soft"].map(cat => (
                                    skills[cat] && skills[cat].length > 0 && (
                                        <div key={cat} className="space-y-3">
                                            <h3 className="text-[9px] font-bold uppercase text-indigo-600 font-mono">[{cat}]</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {skills[cat].map(s => (
                                                    <span key={s} className="px-3 py-1 text-[10px] font-bold text-slate-600 bg-white border border-slate-200 rounded-md shadow-sm hover:border-indigo-600 hover:text-indigo-600 transition-colors">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>

                        {/* Education */}
                        <section className="space-y-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 border-b border-slate-100 pb-2">Training_History</h2>
                            <div className="space-y-6">
                                {education.map(edu => (
                                    <div key={edu.id} className="p-4 bg-slate-50 rounded-xl border border-slate-100 group">
                                        <h3 className="text-sm font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">{edu.degree}</h3>
                                        <p className="text-[11px] text-slate-500 font-bold">{edu.school}</p>
                                        <p className="text-[9px] font-black text-slate-300 uppercase mt-2 tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Experience */}
                    <section className="space-y-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 border-b border-slate-100 pb-2">Professional_Timeline</h2>
                        <div className="space-y-10">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-1 before:h-full before:bg-indigo-100">
                                    <div className="absolute left-[-2px] top-2 w-2 h-2 rounded-full bg-indigo-600 shadow-[0_0_8px_rgba(79,70,229,0.5)]" />
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-2xl font-black text-slate-900 tracking-tight">{exp.role}</h3>
                                        <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{exp.startDate} — {exp.current ? "Present" : exp.endDate}</span>
                                    </div>
                                    <div className="text-sm font-bold text-slate-500 flex items-center gap-2 mb-4">
                                        <span>{exp.company}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                                        <span className="text-slate-400">{exp.location}</span>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed font-medium whitespace-pre-wrap max-w-[90%]">{exp.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>

            <div className="mt-8 text-center">
                <p className="text-[9px] font-black text-slate-300 uppercase tracking-[0.5em] italic">Code. Craft. Culture.</p>
            </div>
        </div>
    );
};
