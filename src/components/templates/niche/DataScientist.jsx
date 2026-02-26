"use client";

export const DataScientistNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fcf8f3] p-10 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-lg border-t-8 border-indigo-600">
            <header className="flex justify-between items-end border-b-2 border-slate-200 pb-10">
                <div className="space-y-3">
                    <h1 className="text-5xl font-extrabold tracking-tight text-slate-800">{personal.fullName || "Scientist Name"}</h1>
                    <div className="flex items-center gap-3">
                        <span className="text-xl font-bold text-indigo-600">{personal.jobTitle || "Data Scientist"}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">{contact.location}</span>
                    </div>
                </div>
                <div className="text-right text-sm space-y-1 font-semibold text-slate-400">
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <div className="flex flex-col items-end gap-1 mt-2 text-xs">
                        {contact.github && <p className="text-indigo-400">github.com/{contact.github}</p>}
                        {contact.linkedin && <p className="text-indigo-400">linkedin.com/in/{contact.linkedin}</p>}
                        {contact.portfolio && <p className="text-indigo-400">{contact.portfolio}</p>}
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-12 mt-12">
                {/* Hypothesis / Summary */}
                <div className="col-span-12">
                    <section className="space-y-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 border-l-4 border-indigo-500 pl-4">Analysis_Overview</h2>
                        <div className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm italic text-lg leading-relaxed text-slate-600 font-serif">
                            "{summary}"
                        </div>
                    </section>
                </div>

                {/* Left: Experimental History */}
                <div className="col-span-8 space-y-10">
                    <section className="space-y-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 border-l-4 border-indigo-500 pl-4">Professional_Dataset</h2>
                        <div className="space-y-12">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-800 tracking-tight">{exp.role}</h3>
                                            <span className="text-xs font-black text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">{exp.startDate} — {exp.current ? "Present" : exp.endDate}</span>
                                        </div>
                                        <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">{exp.company} // {exp.location}</div>
                                        <p className="text-[13px] leading-relaxed text-slate-600 font-medium whitespace-pre-wrap">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Published Projects */}
                    {projects && projects.length > 0 && (
                        <section className="space-y-8">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 border-l-4 border-indigo-500 pl-4">Statistical_Projects</h2>
                            <div className="grid grid-cols-2 gap-6">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-3">
                                        <div className="flex flex-col">
                                            <h3 className="font-bold text-slate-800 mb-1">{proj.name}</h3>
                                            <span className="text-[9px] font-black text-indigo-500 uppercase">{proj.techStack}</span>
                                        </div>
                                        <p className="text-[11px] text-slate-500 leading-relaxed italic">{proj.description}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Technical Toolkit */}
                <div className="col-span-4 space-y-10">
                    <section className="space-y-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 border-l-4 border-indigo-500 pl-4">Tool_Vector</h2>
                        <div className="space-y-6">
                            {["technical", "tools", "soft"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-3">
                                        <h3 className="text-[10px] font-black uppercase text-indigo-600 tracking-widest">{cat}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills[cat].map(s => (
                                                <span key={s} className="px-3 py-1 text-[10px] font-bold text-slate-700 bg-white border border-slate-200 rounded-lg shadow-sm">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 border-l-4 border-indigo-500 pl-4">Education_Log</h2>
                        {education.map(edu => (
                            <div key={edu.id} className="space-y-1 text-xs border-b border-slate-100 pb-4 last:border-0">
                                <h3 className="font-bold text-slate-800 leading-tight">{edu.degree}</h3>
                                <p className="text-slate-500 font-semibold">{edu.school}</p>
                                <p className="text-[10px] font-black text-slate-300 uppercase mt-1">{edu.startDate} — {edu.endDate}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </main>

            <footer className="mt-20 py-8 border-t border-slate-100 text-center">
                <p className="text-[10px] font-bold text-slate-300 tracking-[0.5em] uppercase">Insight . Precision . Scale</p>
            </footer>
        </div>
    );
};
