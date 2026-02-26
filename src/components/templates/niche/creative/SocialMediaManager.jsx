"use client";

export const SocialMediaManagerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#f0f2f5] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-sans shadow-2xl border-b-[30px] border-blue-600 rounded-b-3xl relative overflow-hidden">
            {/* Social UI Accents */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />

            <header className="relative z-10 flex flex-col items-center gap-6 mb-20 bg-white p-12 rounded-[3rem] shadow-xl border border-white">
                <div className="space-y-4 text-center">
                    <h1 className="text-5xl font-black tracking-tight text-slate-900 leading-none">@{personal.fullName?.replace(/\s+/g, '').toLowerCase() || "digital.pro"}</h1>
                    <div className="flex items-center justify-center gap-4">
                        <span className="text-xl font-bold text-blue-600 italic tracking-tight">{personal.jobTitle || "Head of Social Strategy & Community Growth"}</span>
                    </div>
                </div>

                <div className="flex gap-10 text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase italic">
                    <span className="flex items-center gap-2 border-b-2 border-blue-500/20 pb-1">{contact.email}</span>
                    <span>{contact.location}</span>
                    <span className="text-blue-600">{contact.phone}</span>
                    <div className="flex gap-4 text-blue-400">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                        {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-10">
                {/* Growth Strategy / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <div className="p-12 bg-blue-600 text-white rounded-[4rem] shadow-inner relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </div>
                            <p className="text-2xl leading-relaxed italic text-center mx-auto max-w-2xl px-6 relative z-10 font-bold tracking-tight">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Campaign & Growth Logs / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 italic border-b border-slate-200 pb-4">Social_Campaign_Engagements</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group p-8 bg-white rounded-[2rem] border border-white hover:border-blue-500 hover:shadow-2xl transition-all duration-700">
                                    <div className="absolute top-[-10px] left-8 bg-blue-600 text-white px-5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest italic group-hover:scale-110 transition-transform">
                                        {exp.startDate} — {exp.endDate}
                                    </div>
                                    <div className="space-y-4 pt-2">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none">{exp.role}</h3>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-blue-500 uppercase tracking-widest italic pt-1 group-hover:translate-x-2 transition-transform">
                                            <span>MANDATE: {exp.company}</span>
                                            <span className="text-slate-100">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%] border-l-4 border-blue-50 pl-6 group-hover:border-blue-600 transition-all">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 italic border-b border-slate-200 pb-4">Viral_Campaigns_&_Engagement_Labs</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-white border-2 border-blue-50 rounded-[4rem] shadow-xl group hover:border-blue-600 transition-all border-dashed">
                                        <div className="flex justify-between items-center mb-4">
                                            <div className="space-y-1">
                                                <h3 className="text-3xl font-black text-slate-800 tracking-tighter uppercase leading-none">#{proj.name.replace(/\s+/g, '').toLowerCase()}</h3>
                                                <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{proj.techStack}</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-blue-600 mb-4 font-bold italic underline decoration-blue-100">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-slate-500">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Platform Stack / Skills & Edu */}
                <div className="col-span-4 space-y-16 mt-6">
                    <section className="space-y-10 p-10 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500 opacity-10 rounded-full -translate-y-1/2 translate-x-1/2" />
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400 text-center border-b border-slate-800 pb-2 italic">Growth_Tech</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-5">
                                        <h3 className="text-[9px] font-black uppercase text-slate-500 tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-4">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-black text-slate-400 hover:text-white transition-colors cursor-default group/item">
                                                    <span>{s}</span>
                                                    <div className="flex gap-0.5">
                                                        <div className="w-1 h-1 rounded-full bg-blue-500/20 group-hover/item:bg-blue-500 transition-all" />
                                                        <div className="w-1 h-1 rounded-full bg-blue-500/20 group-hover/item:bg-blue-500 transition-all delay-75" />
                                                        <div className="w-1 h-1 rounded-full bg-blue-500/20 group-hover/item:bg-blue-500 transition-all delay-150" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 italic border-b border-slate-200 pb-4">Academic_Feed</h2>
                        <div className="space-y-10">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 group border-r-4 border-blue-50 pr-6 hover:border-blue-600 transition-all text-right">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-blue-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-16 border-t border-slate-200 flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-slate-300 italic">
                <span>Amplifying the Voice</span>
                <span className="opacity-10 text-[8px] tracking-normal font-mono">TREND_ID: SOCIAL_CORE_2026.0</span>
                <span className="text-blue-600">VIRAL_MINDSET</span>
            </footer>
        </div>
    );
};
