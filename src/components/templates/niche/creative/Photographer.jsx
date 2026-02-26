"use client";

export const PhotographerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#0a0a0a] p-12 min-h-[1056px] w-[816px] mx-auto text-slate-400 font-sans shadow-2xl relative overflow-hidden ring-1 ring-white/5">
            {/* Camera Viewfinder Accents */}
            <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/20" />
            <div className="absolute top-10 right-10 w-20 h-20 border-t-2 border-r-2 border-white/20" />
            <div className="absolute bottom-10 left-10 w-20 h-20 border-b-2 border-l-2 border-white/20" />
            <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/20" />

            <header className="relative z-10 flex flex-col items-center gap-8 mb-20">
                <div className="space-y-4 text-center">
                    <h1 className="text-6xl font-black tracking-[-0.04em] text-white uppercase leading-none">{personal.fullName || "Capture Artist"}</h1>
                    <div className="flex items-center justify-center gap-6">
                        <span className="text-lg font-bold text-white/40 italic tracking-[0.2em]">{personal.jobTitle || "Visual Storyteller & Commercial Photographer"}</span>
                    </div>
                </div>

                <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.6em] text-white/20 italic border-y border-white/5 py-4 w-full justify-center relative group">
                    <span>{contact.email}</span>
                    <span className="text-white opacity-100 italic">ƒ/2026</span>
                    <span>{contact.location}</span>
                    <div className="absolute -bottom-6 flex gap-4 text-[7px] tracking-[0.3em] text-white/10 group-hover:text-white transition-colors">
                        {contact.linkedin && <span>LI//{contact.linkedin}</span>}
                        {contact.github && <span>GH//{contact.github}</span>}
                        {contact.portfolio && <span>PF//{contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-16">
                {/* Exposure Statement / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <div className="p-16 bg-white shadow-2xl skew-x-[-2deg] flex flex-col items-center justify-center relative group overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-black" />
                            <p className="text-2xl leading-relaxed text-slate-900 font-serif italic text-center max-w-2xl px-6 relative z-10 skew-x-[2deg] font-black uppercase tracking-tighter">
                                "{summary}"
                            </p>
                        </div>
                    </section>
                </div>

                {/* Left: Gallery & Engagement / Experience */}
                <div className="col-span-8 space-y-16 mt-8">
                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/10 border-b border-white/5 pb-4 italic">The_Visual_Archive</h2>
                        <div className="space-y-20">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group p-8 border border-white/5 hover:border-white/20 transition-all rounded-sm bg-white/2 backdrop-blur-sm">
                                    <div className="absolute top-[-10px] left-8 bg-white text-black px-4 py-1 rounded-sm text-[9px] font-black uppercase tracking-widest italic group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        {exp.startDate} :: {exp.endDate}
                                    </div>
                                    <div className="space-y-6 pt-2">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-3xl font-black text-white tracking-tighter uppercase leading-none group-hover:italic transition-all">{exp.role}</h3>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs font-bold text-white/30 uppercase tracking-[0.2em] italic">
                                            <span>STUDIO & AGENCY: {exp.company}</span>
                                            <div className="w-1.5 h-1.5 rounded-full bg-white opacity-10" />
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-sm text-slate-500 leading-[1.8] font-medium whitespace-pre-wrap max-w-[95%] italic pr-8 relative">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-12 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/10 border-b border-white/5 pb-4 italic">Featured_Gallery_&_Technical_Shoots</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-12 bg-white text-black border-2 border-white shadow-[0_35px_60px_-15px_rgba(255,255,255,0.1)] group hover:scale-[1.01] transition-transform">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-4xl font-black italic tracking-tighter uppercase leading-none skew-x-[-4deg]">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest border border-slate-200 px-4 py-1">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-slate-500 mb-4 font-bold italic border-b border-slate-100 pb-2 inline-block">{proj.link}</p>
                                        <p className="text-xl leading-relaxed font-serif italic text-slate-800 font-bold">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Equipment & Specs / Skills & Edu */}
                <div className="col-span-4 space-y-20 mt-8">
                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/10 border-b border-white/5 pb-4 italic text-right">Optics_&_Post</h2>
                        <div className="space-y-12 text-right">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-6">
                                        <h3 className="text-[9px] font-black uppercase text-white/40 tracking-[0.3em] font-sans">{cat}</h3>
                                        <div className="flex flex-col gap-4">
                                            {skills[cat].map(s => (
                                                <div key={s} className="group/item flex flex-col items-end">
                                                    <span className="text-[11px] font-black text-white/40 group-hover/item:text-white transition-colors cursor-default uppercase tracking-widest">{s}</span>
                                                    <div className="w-4 h-0.5 bg-white/5 mt-1 group-hover/item:w-16 group-hover/item:bg-white transition-all duration-500" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-12">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-white/10 border-b border-white/5 pb-4 italic text-right">Development</h2>
                        <div className="space-y-12 text-right">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 group border-r-2 border-white/5 pr-6 hover:border-white transition-all">
                                    <h3 className="text-sm font-black text-white leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-white/30 font-bold uppercase tracking-tight py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-white/10 uppercase mt-2 tracking-[0.4em]">{edu.startDate} // {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-32 py-16 border-t border-white/5 text-center flex justify-between items-center text-[10px] font-black uppercase tracking-[1.5em] text-white/10 italic">
                <span>The Perfect Exposure</span>
                <span className="font-mono text-[7px] opacity-10">ISO_SPEED: 2026.RAD</span>
                <span>(C) CAPTURE_CO_GLOBAL</span>
            </footer>
        </div>
    );
};
