"use client";

export const MarketingDirectorNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fffaff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-lg border-t-[30px] border-rose-600">
            <header className="flex flex-col items-start gap-8 border-b border-rose-100 pb-12 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full translate-x-32 -translate-y-32 opacity-50" />

                <div className="space-y-4 relative z-10">
                    <h1 className="text-6xl font-black tracking-tighter text-slate-900 uppercase leading-none">{personal.fullName || "Marketing Lead"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-black text-rose-600 italic tracking-tight">{personal.jobTitle || "Director of Marketing & Brand"}</span>
                    </div>
                </div>

                <div className="flex justify-between w-full items-end relative z-10">
                    <div className="text-right text-[11px] font-black text-slate-500 uppercase tracking-widest space-y-2">
                        <div className="border border-slate-200 px-4 py-2 rounded-md inline-block shadow-sm mb-2">
                            {contact.email}
                        </div>
                        <p className="opacity-50 tracking-normal">LOC: {contact.location}</p>
                        <p className="text-slate-900 font-mono tracking-normal underline decoration-slate-100 decoration-4 underline-offset-4">TEL: {contact.phone}</p>
                        <div className="pt-2 flex flex-col items-end gap-1 text-[9px] font-black text-slate-300">
                            {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                            {contact.github && <span>GH / {contact.github}</span>}
                            {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                        </div>
                    </div>
                </div>
            </header>

            <main className="space-y-16">
                {/* Brand Vision / Summary */}
                <section className="space-y-6">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-rose-200">Brand_Philosophy_&_Growth</h2>
                    <div className="bg-rose-600 text-white p-12 rounded-[3.5rem] shadow-xl shadow-rose-600/10 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 text-[8px] font-black opacity-40 uppercase tracking-[0.4em]">Section: Vision</div>
                        <p className="text-2xl leading-relaxed font-serif italic text-center mx-auto max-w-3xl">
                            "{summary}"
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-12 gap-12">
                    {/* Main: Campaign History / Experience */}
                    <div className="col-span-8 space-y-12">
                        <section className="space-y-10">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-rose-200">Execution_Metrics_&_Campaigns</h2>
                            <div className="space-y-16">
                                {experience.map((exp) => (
                                    <div key={exp.id} className="relative group">
                                        <div className="space-y-6">
                                            <div className="flex justify-between items-baseline">
                                                <h3 className="text-3xl font-black text-slate-900 tracking-tighter group-hover:text-rose-600 transition-colors uppercase italic">{exp.role}</h3>
                                                <span className="text-[11px] font-black text-rose-300 uppercase tracking-widest">{exp.startDate} — {exp.endDate}</span>
                                            </div>
                                            <div className="flex items-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-[0.2em] italic bg-slate-50 px-6 py-2 rounded-full inline-block">
                                                <span>{exp.company}</span>
                                                <span className="text-slate-200">/</span>
                                                <span>{exp.location}</span>
                                            </div>
                                            <p className="text-xs text-slate-600 leading-relaxed font-bold whitespace-pre-wrap max-w-[95%] border-l-4 border-rose-50 pl-6">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {projects && projects.length > 0 && (
                            <section className="space-y-10 mt-16">
                                <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-rose-200">Featured_Campaigns_&_Case_Studies</h2>
                                <div className="space-y-10">
                                    {projects.map((proj) => (
                                        <div key={proj.id} className="p-10 bg-rose-600 text-white rounded-[3rem] shadow-lg shadow-rose-600/5 group hover:scale-[1.02] transition-transform">
                                            <div className="flex justify-between items-center mb-4">
                                                <h3 className="text-2xl font-black italic tracking-tighter uppercase">{proj.name}</h3>
                                                <span className="text-[10px] font-black text-rose-200 uppercase tracking-widest">{proj.techStack}</span>
                                            </div>
                                            <p className="text-xs text-rose-100 mb-4 font-bold border-b border-rose-400 pb-2 inline-block">{proj.link}</p>
                                            <p className="text-lg leading-relaxed font-serif italic opacity-90">"{proj.description}"</p>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Sidebar: Creative Stack / Skills & Edu */}
                    <div className="col-span-4 space-y-16">
                        <section className="space-y-10 bg-white p-10 rounded-[2.5rem] border border-rose-50 shadow-sm relative group">
                            <div className="absolute top-0 left-0 w-2 h-full bg-rose-600 opacity-20 group-hover:opacity-100 transition-opacity" />
                            <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-rose-600 text-center">Impact_Toolbox</h2>
                            <div className="space-y-10">
                                {["technical", "soft", "tools"].map(cat => (
                                    skills[cat] && skills[cat].length > 0 && (
                                        <div key={cat} className="space-y-5">
                                            <h3 className="text-[10px] font-black uppercase text-slate-900 border-b-4 border-rose-50 pb-2">{cat}</h3>
                                            <div className="flex flex-col gap-3">
                                                {skills[cat].map(s => (
                                                    <div key={s} className="flex justify-between items-center text-[11px] font-black text-slate-500 hover:text-rose-600 transition-colors cursor-default">
                                                        <span>{s}</span>
                                                        <div className="w-6 h-0.5 bg-rose-100" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>

                        <section className="space-y-8 px-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-rose-200">Creative_Credentials</h2>
                            <div className="space-y-8">
                                {education.map(edu => (
                                    <div key={edu.id} className="space-y-2 border-l-2 border-rose-100 pl-4 group cursor-default">
                                        <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:text-rose-600 transition-colors">{edu.degree}</h3>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">{edu.school}</p>
                                        <p className="text-[9px] font-black text-rose-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t border-rose-100 text-center flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] text-rose-200 italic shadow-[0_-20px_50px_rgba(225,29,72,0.02)]">
                <span>Amplifying Resonance</span>
                <span>UUID: MARK_DIR_2026</span>
                <span>(C) BRAND_ALCHEMIST_HUB</span>
            </footer>
        </div>
    );
};
