"use client";

export const InteriorDesignerNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fdfbf7] p-12 min-h-[1056px] w-[816px] mx-auto text-[#43464a] font-serif shadow-xl border-[1px] border-[#ebe7e0] rounded-sm">
            {/* Structural Accent */}
            <div className="flex border-b border-[#43464a]/10 pb-8 mb-12 items-baseline justify-between overflow-hidden">
                <div className="space-y-4 relative">
                    <div className="absolute -left-12 top-0 w-8 h-8 border-t-2 border-l-2 border-[#43464a]/20" />
                    <h1 className="text-5xl font-black tracking-tighter text-[#1a1c1e] uppercase leading-none">{personal.fullName || "Spatial Designer"}</h1>
                    <div className="flex items-center gap-6">
                        <span className="text-xl font-medium italic text-[#8d949b] tracking-wide">{personal.jobTitle || "Senior Interior Architect & Spatial Stylist"}</span>
                    </div>
                </div>
                <div className="text-right text-[10px] font-bold text-[#8d949b] uppercase tracking-[0.5em] font-sans italic">
                    {contact.location}
                </div>
            </div>

            <main className="grid grid-cols-12 gap-16">
                {/* Contact Banner */}
                <div className="col-span-12 flex justify-between bg-white p-8 border border-[#ebe7e0] rounded-sm shadow-sm text-[11px] font-bold text-[#8d949b] uppercase tracking-widest font-sans italic">
                    <span className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-[#43464a]/10 border border-[#43464a]/20" /> {contact.email}</span>
                    <span>{contact.phone}</span>
                    <span className="text-[#1a1c1e] opacity-20">EST_MMXXVI</span>
                </div>

                {/* Left: Design Philosophy / Summary */}
                <div className="col-span-4 space-y-12 mt-4">
                    <section className="space-y-8">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-[#d1cfc9] border-b border-[#ebe7e0] pb-2">The_Concept</h2>
                        <p className="text-lg leading-[1.8] text-[#43464a] italic font-medium pr-4 border-l-2 border-[#1a1c1e]/5 pl-8">
                            "{summary}"
                        </p>
                    </section>

                    <section className="space-y-8">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-[#d1cfc9] border-b border-[#ebe7e0] pb-2">Spatial_Toolkit</h2>
                        <div className="space-y-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-5">
                                        <h3 className="text-[8px] font-black uppercase text-[#1a1c1e] tracking-[0.2em] font-sans">{cat}</h3>
                                        <div className="flex flex-col gap-4">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-bold text-[#8d949b] hover:text-[#1a1c1e] transition-colors cursor-default italic border-b border-[#ebe7e0]/30 pb-1 group">
                                                    <span>{s}</span>
                                                    <div className="w-4 h-4 rounded-full border border-[#ebe7e0] group-hover:bg-[#1a1c1e] group-hover:border-[#1a1c1e] transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: Portfolio & Projects / Experience */}
                <div className="col-span-8 space-y-16 mt-4">
                    <section className="space-y-12">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-[#d1cfc9] border-b border-[#ebe7e0] pb-2">Curated_Work_History</h2>
                        <div className="space-y-20">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-12 border-l border-[#ebe7e0] hover:border-[#1a1c1e] transition-all duration-700">
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-start">
                                            <div className="space-y-2">
                                                <h3 className="text-3xl font-black text-[#1a1c1e] tracking-tighter uppercase group-hover:italic transition-all leading-none">{exp.role}</h3>
                                                <div className="flex items-center gap-3 text-sm font-bold text-[#8d949b] uppercase tracking-widest italic pt-1">
                                                    <span>STUDIO: {exp.company}</span>
                                                </div>
                                            </div>
                                            <span className="text-[9px] font-bold text-[#d1cfc9] uppercase tracking-widest font-sans border border-[#ebe7e0] px-4 py-1 italic rounded-full shadow-sm">{exp.startDate} :: {exp.endDate}</span>
                                        </div>
                                        <p className="text-sm text-[#5a5d61] leading-[1.8] font-medium whitespace-pre-wrap max-w-[95%] italic pr-8 relative">
                                            <span className="absolute -left-12 top-0 text-xl text-[#ebe7e0]">_</span>
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="space-y-12 pt-12">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-[#d1cfc9] border-b border-[#ebe7e0] pb-2">Foundational_Studies</h2>
                        <div className="grid grid-cols-1 gap-8">
                            {education.map(edu => (
                                <div key={edu.id} className="flex justify-between items-baseline group border-b border-[#ebe7e0] pb-6 hover:border-[#1a1c1e] transition-all">
                                    <div className="space-y-1">
                                        <h3 className="text-sm font-black text-[#1a1c1e] uppercase group-hover:italic transition-all">{edu.degree}</h3>
                                        <p className="text-[10px] text-[#8d949b] font-bold uppercase tracking-widest font-sans">{edu.school}</p>
                                    </div>
                                    <p className="text-[8px] font-black text-[#d1cfc9] uppercase italic">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-16 border-t border-[#43464a]/10 flex justify-between items-center text-[9px] font-black uppercase tracking-[1em] text-[#d1cfc9] italic">
                <span>Form Follows Function</span>
                <span className="opacity-10 text-[7px] tracking-normal font-sans">SPACE_ID: INT_ARCH_2026</span>
                <span className="text-[#1a1c1e]">DESIGN_RESURGENCE</span>
            </footer>
        </div>
    );
};
