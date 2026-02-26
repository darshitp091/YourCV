"use client";

export const HairStylistNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#ffffff] p-12 min-h-[1056px] w-[816px] mx-auto text-[#43464a] font-sans shadow-xl border-[1px] border-[#f0f0f0] rounded-sm relative overflow-hidden">
            {/* Elegant Background Accents */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#fff5f6] rounded-full -translate-y-1/2 translate-x-1/2 -z-0" />
            <div className="absolute top-0 left-0 p-8">
                <div className="w-8 h-8 rounded-full border-2 border-[#ffc1cc]/30" />
            </div>

            <header className="relative z-10 flex flex-col items-center gap-10 mb-16 border-b border-[#f0f0f0] pb-12">
                <div className="space-y-4 text-center">
                    <h1 className="text-5xl font-black tracking-tighter text-[#1a1c1e] uppercase leading-none">{personal.fullName || "Style Expert"}</h1>
                    <div className="flex items-center justify-center gap-6">
                        <span className="text-xl font-medium text-[#ff7b9c] italic tracking-wide">{personal.jobTitle || "Master Stylist & Creative Director"}</span>
                    </div>
                </div>

                <div className="flex gap-10 text-[11px] font-bold text-[#b0b0b0] uppercase tracking-widest font-sans italic border-y border-[#f0f0f0] py-3 w-full justify-center relative group">
                    <span>{contact.email}</span>
                    <span className="text-[#ff7b9c] opacity-50">✦</span>
                    <span>{contact.location}</span>
                    <span className="text-[#ff7b9c] opacity-50">✦</span>
                    <span className="text-[#1a1c1e]">{contact.phone}</span>
                    <div className="absolute -bottom-6 flex gap-4 text-[8px] tracking-[0.3em] font-sans text-[#b0b0b0] group-hover:text-[#ff7b9c] transition-colors">
                        {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                        {contact.github && <span>GH / {contact.github}</span>}
                        {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-12">
                {/* Artistic Philosophy / Summary */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <div className="p-12 bg-[#fffcfd] border-2 border-[#ffc1cc]/20 rounded-[4rem] shadow-sm italic text-2xl leading-[1.8] text-[#5a5d61] text-center mx-auto max-w-2xl relative group">
                            <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center border border-[#ffc1cc]/20 shadow-sm text-[#ff7b9c] group-hover:rotate-45 transition-transform duration-700">
                                ✂️
                            </div>
                            "{summary}"
                        </div>
                    </section>
                </div>

                {/* Left: Professional Journey / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#d0d0d0] border-b border-[#f0f0f0] pb-4 italic">The_Styling_Log</h2>
                        <div className="space-y-16">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-12 border-l-2 border-[#ffc1cc]/10 hover:border-[#ff7b9c] transition-all duration-700">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-3xl font-black text-[#1a1c1e] tracking-tighter uppercase group-hover:italic transition-all leading-none">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-[#ff7b9c] bg-[#fff5f6] px-3 py-1 rounded-full uppercase italic border border-[#ffc1cc]/10">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-[#b0b0b0] uppercase tracking-widest italic pt-1 group-hover:text-[#1a1c1e] transition-colors">
                                            <span>SALON: {exp.company}</span>
                                            <span className="text-[#f0f0f0]">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-[#8d949b] leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%] italic pr-8 relative">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#d0d0d0] border-b border-[#f0f0f0] pb-4 italic">Artistic_Portfolio_&_Style_Exhibits</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-white border border-[#ffc1cc]/20 rounded-[4rem] shadow-sm group hover:border-[#ff7b9c] transition-all relative">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-3xl font-black text-[#1a1c1e] tracking-tighter uppercase leading-none group-hover:italic transition-all">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-[#ff7b9c] uppercase tracking-widest bg-[#fff5f6] px-3 py-1 rounded-full">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-[#ff7b9c]/50 mb-4 font-bold border-b border-[#fff5f6] pb-2 inline-block italic">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-[#5a5d61]">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Technical Mastery / Skills & Edu */}
                <div className="col-span-4 space-y-20 mt-6">
                    <section className="space-y-12 p-10 bg-white border border-[#f0f0f0] rounded-[3rem] shadow-sm relative group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-[#ff7b9c] text-center border-b border-[#fff5f6] pb-2 italic">Technique_Stack</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-6">
                                        <h3 className="text-[9px] font-black uppercase text-[#d0d0d0] tracking-[0.2em] font-sans">{cat}</h3>
                                        <div className="flex flex-col gap-4">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-bold text-[#8d949b] hover:text-[#ff7b9c] transition-colors cursor-default italic group">
                                                    <span>{s}</span>
                                                    <div className="w-1.5 h-1.5 rounded-full bg-[#f0f0f0] group-hover:bg-[#ff7b9c] transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-12 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-[#d0d0d0] italic border-b border-[#f0f0f0] pb-4 text-right">Education</h2>
                        <div className="space-y-10 text-right">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 group border-r-4 border-[#fffcfd] pr-6 hover:border-[#ffc1cc] transition-all">
                                    <h3 className="text-sm font-black text-[#1a1c1e] leading-tight uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-[#b0b0b0] font-bold uppercase tracking-tight py-1 font-sans">{edu.school}</p>
                                    <p className="text-[8px] font-black text-[#ffc1cc] uppercase mt-2 tracking-[0.2em] font-sans">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-32 py-16 border-t border-[#f0f0f0] flex justify-between items-center text-[10px] font-black uppercase tracking-[1em] text-[#d0d0d0] italic">
                <span>Defining Style</span>
                <span className="opacity-10 text-[8px] tracking-normal font-sans italic">AUTH: STYLE_CORE_D01</span>
                <span className="text-[#ff7b9c]">MMXXVI</span>
            </footer>
        </div>
    );
};
