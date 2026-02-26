"use client";

export const ChefNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fdfcfb] p-16 min-h-[1056px] w-[816px] mx-auto text-slate-900 font-serif shadow-xl border-[1px] border-slate-200 relative overflow-hidden">
            {/* Minimalist Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <header className="relative z-10 flex flex-col items-center text-center gap-12 mb-20">
                <div className="space-y-6">
                    <h1 className="text-6xl font-black tracking-tighter text-slate-900 uppercase leading-none">{personal.fullName || "Chef de Cuisine"}</h1>
                    <div className="w-24 h-0.5 bg-slate-900 mx-auto opacity-20" />
                    <p className="text-xl font-bold tracking-[0.4em] text-slate-400 uppercase italic leading-none">{personal.jobTitle || "Executive Chef & Culinary Director"}</p>
                </div>

                <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.6em] text-slate-300 italic font-sans relative group">
                    <span className="border-b border-slate-100 pb-1">{contact.email}</span>
                    <span>{contact.location}</span>
                    <span className="text-slate-900 opacity-100 border-b border-slate-900 pb-1">{contact.phone}</span>
                    <div className="absolute -bottom-6 flex gap-4 text-[8px] tracking-[0.3em] font-sans text-slate-200 group-hover:text-slate-900 transition-colors">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                        {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-16">
                {/* Culinary Statement / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <div className="p-16 border border-slate-100 rounded-sm shadow-sm bg-white italic text-2xl leading-[1.8] text-slate-600 text-center mx-auto max-w-2xl relative">
                            <div className="absolute top-0 left-0 p-8 text-4xl opacity-10">"</div>
                            <div className="absolute bottom-0 right-0 p-8 text-4xl opacity-10 rotate-180">"</div>
                            "{summary}"
                        </div>
                    </section>
                </div>

                {/* Left: Gastronomic timeline / Experience */}
                <div className="col-span-8 space-y-16 mt-8">
                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-slate-200 border-b border-slate-50 pb-4 italic font-sans">Kitchen_Engagement_Log</h2>
                        <div className="space-y-20">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-12 border-l border-slate-900 hover:border-slate-300 transition-colors duration-700">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase group-hover:italic transition-all leading-none">{exp.role}</h3>
                                            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest font-sans italic">{exp.startDate} :: {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-sm font-bold text-slate-400 uppercase tracking-widest italic pt-1 group-hover:text-slate-900 transition-colors font-sans">
                                            <span>BRIGADE: {exp.company}</span>
                                            <span className="text-slate-100">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 leading-[1.8] font-medium whitespace-pre-wrap max-w-[95%] italic pr-8 relative border-r border-slate-50">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-12 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.8em] text-slate-200 border-b border-slate-50 pb-4 italic font-sans">Culinary_Innovations_&_Special_Menus</h2>
                            <div className="space-y-12">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-12 bg-white border border-slate-100 shadow-sm group hover:bg-slate-900 transition-all duration-500 relative">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-4xl font-black italic tracking-tighter uppercase text-slate-900 leading-none group-hover:text-white transition-colors">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest group-hover:text-slate-500 transition-colors">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 mb-4 font-bold border-b border-slate-50 pb-2 inline-block italic group-hover:text-slate-100 transition-colors">{proj.link}</p>
                                        <p className="text-xl leading-relaxed font-serif italic text-slate-500 group-hover:text-slate-300 transition-colors">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Technical Toolkit / Skills & Edu */}
                <div className="col-span-4 space-y-20 mt-8">
                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-200 border-b border-slate-50 pb-4 italic font-sans text-right">Culinary_Matrix</h2>
                        <div className="space-y-12 text-right">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-6">
                                        <h3 className="text-[9px] font-black uppercase text-slate-900 tracking-[0.3em] font-sans opacity-40">{cat}</h3>
                                        <div className="flex flex-col gap-4">
                                            {skills[cat].map(s => (
                                                <div key={s} className="group/item flex flex-col items-end">
                                                    <span className="text-[11px] font-bold text-slate-400 group-hover/item:text-slate-900 transition-colors cursor-default tracking-wide">{s}</span>
                                                    <div className="w-4 h-0.5 bg-slate-50 mt-1 group-hover/item:w-12 group-hover/item:bg-slate-900 transition-all duration-300" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-200 border-b border-slate-50 pb-4 italic font-sans text-right">The_Academy</h2>
                        <div className="space-y-12 text-right">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 group border-r-2 border-slate-50 pr-6 hover:border-slate-900 transition-all">
                                    <h3 className="text-sm font-black text-slate-900 leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tight py-1 font-sans">{edu.school}</p>
                                    <p className="text-[8px] font-black text-slate-100 uppercase mt-2 tracking-[0.4em] font-sans">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-32 py-16 border-t border-slate-50 text-center flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-slate-100 italic">
                <span>The Art of the Plate</span>
                <span className="font-sans text-[8px] opacity-10">AUTH: CHEF_CORE_2026</span>
                <span className="text-slate-900 opacity-20">MMXXVI</span>
            </footer>
        </div>
    );
};
