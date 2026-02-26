"use client";

export const RealEstateAgentNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-lg border-t-[12px] border-amber-600 rounded-b-lg relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-0" />

            <header className="relative z-10 flex justify-between items-end border-b-2 border-slate-50 pb-12 mb-12">
                <div className="space-y-4">
                    <h1 className="text-5xl font-black tracking-tighter text-slate-900 uppercase leading-none">{personal.fullName || "Property Expert"}</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-xl font-bold text-amber-600 italic tracking-tight">{personal.jobTitle || "Licensed Real Estate Advisor"}</span>
                    </div>
                </div>
                <div className="text-right space-y-2">
                    <p className="text-sm font-black text-slate-900 uppercase tracking-widest underline decoration-amber-200">{contact.email}</p>
                    <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.4em]">{contact.location}</p>
                    <p className="text-[10px] font-black text-amber-600 uppercase italic">{contact.phone}</p>
                    <div className="pt-2 flex flex-col items-end gap-1 text-[9px] font-bold text-slate-400">
                        {contact.linkedin && <span>LinkedIn / {contact.linkedin}</span>}
                        {contact.github && <span>GitHub / {contact.github}</span>}
                        {contact.portfolio && <span>Portfolio / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-10">
                {/* Sales Philosophy / Summary */}
                <div className="col-span-12">
                    <section className="bg-slate-900 p-12 rounded-2xl shadow-2xl relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </svg>
                        </div>
                        <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-amber-400 mb-6 text-center italic border-b border-white/5 pb-2">Client_Advisory_Mission</h2>
                        <p className="text-xl leading-relaxed text-white font-serif italic text-center mx-auto max-w-2xl px-6 relative z-10 font-bold opacity-90">
                            "{summary}"
                        </p>
                    </section>
                </div>

                {/* Left: Transactional History / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 border-b border-slate-100 pb-4 italic">Notable_Portfolio_&_Engagement</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-10 border-l border-slate-900 hover:border-amber-600 transition-all duration-500">
                                    <div className="absolute left-[-1px] top-0 w-0.5 h-12 bg-amber-600 scale-y-0 group-hover:scale-y-100 origin-top transition-transform" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase leading-none group-hover:italic transition-all">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-sm uppercase italic border border-slate-100">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-amber-600 uppercase tracking-widest italic pt-1 group-hover:text-slate-900 transition-colors">
                                            <span>AGENCY: {exp.company}</span>
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

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 border-b border-slate-100 pb-4 italic">Key_Transactions_&_Market_Expansions</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-white border border-slate-100 rounded-sm shadow-sm group hover:border-amber-600 transition-all relative">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase leading-none group-hover:italic transition-all">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest bg-amber-50 px-3 py-1 border border-amber-100">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-amber-600/50 mb-4 font-bold border-b border-amber-50 pb-2 inline-block italic">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-slate-500">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Market Toolkit / Skills & Edu */}
                <div className="col-span-4 space-y-16 mt-6">
                    <section className="space-y-10 p-10 bg-white border border-slate-100 rounded-sm shadow-sm relative group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-900 text-center border-b-2 border-amber-600 pb-2 italic">Expertise_Matrix</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-slate-300 tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-black text-slate-400 hover:text-amber-600 transition-colors cursor-default border-b border-slate-50 pb-1">
                                                    <span>{s}</span>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-50 group-hover:bg-amber-600 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 italic border-b border-slate-100 pb-4">Licensing</h2>
                        <div className="space-y-8">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 group border-r-4 border-slate-50 pr-6 hover:border-amber-600 transition-all text-right">
                                    <h3 className="text-sm font-black text-slate-900 uppercase group-hover:italic transition-all leading-tight">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-slate-100 uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t-2 border-slate-900 flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-slate-300 italic relative z-10">
                <span>Unlocking Opportunity</span>
                <span className="opacity-10 text-[8px] tracking-normal">STATE_ID: RE_ADV_2026</span>
                <span className="text-amber-600">PREMIUM_REALTY</span>
            </footer>
        </div>
    );
};
