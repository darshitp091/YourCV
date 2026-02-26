"use client";

export const LogisticsCoordinatorNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#f9f7f2] p-12 min-h-[1056px] w-[816px] mx-auto text-zinc-900 font-sans shadow-2xl border-[1px] border-zinc-200 relative overflow-hidden flex flex-col">
            {/* Shipping Label Aesthetic */}
            <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-zinc-300 opacity-20 pointer-events-none" />

            <header className="relative z-10 grid grid-cols-12 gap-8 mb-12 border-b-2 border-zinc-900 pb-10">
                <div className="col-span-8 space-y-4">
                    <div className="flex gap-2 mb-2">
                        <div className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-widest">FRAGILE</div>
                        <div className="bg-zinc-200 text-zinc-900 px-3 py-1 text-[10px] font-black uppercase tracking-widest">EXPRESS</div>
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter text-zinc-900 uppercase leading-none">{personal.fullName || "Logistics Lead"}</h1>
                    <div className="flex items-center gap-4">
                        <p className="text-xl font-bold text-zinc-500 italic tracking-tight">{personal.jobTitle || "Supply Chain Coordinator & Inventory Strategist"}</p>
                    </div>
                </div>
                <div className="col-span-4 text-right flex flex-col justify-end space-y-2 border-l border-zinc-200 pl-8">
                    <div className="space-y-1">
                        <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">MANIFEST_ID</p>
                        <p className="text-[14px] font-black text-zinc-900 font-mono">#{contact.phone?.slice(-4) || "2026"}-LOG</p>
                    </div>
                    <div className="pt-4 space-y-1">
                        <p className="text-[9px] font-black text-zinc-400 uppercase">{contact.email}</p>
                        <p className="text-[9px] font-black text-zinc-400 uppercase">{contact.location}</p>
                        <div className="flex flex-col items-end gap-1 mt-2 text-[8px] font-black text-zinc-300">
                            {contact.linkedin && <span>LI / {contact.linkedin}</span>}
                            {contact.github && <span>GH / {contact.github}</span>}
                            {contact.portfolio && <span>PF / {contact.portfolio}</span>}
                        </div>
                    </div>
                </div>
            </header>

            <main className="relative z-10 grid grid-cols-12 gap-12 flex-grow">
                {/* Efficiency Mandate / Summary */}
                <div className="col-span-12">
                    <section className="bg-zinc-100 p-10 border border-zinc-200 rounded-sm shadow-inner relative group border-t-4 border-t-black">
                        <div className="absolute bottom-4 right-8 font-mono text-[8px] opacity-10 tracking-[0.5em] rotate-180 uppercase">Optimized_Flow</div>
                        <h2 className="text-[9px] font-black uppercase tracking-[0.8em] text-zinc-400 mb-6 italic border-b border-zinc-200 pb-2">Operational_Optimization_Strategy</h2>
                        <p className="text-xl leading-relaxed text-zinc-700 font-serif italic text-center mx-auto max-w-2xl relative z-10 font-bold">
                            "{summary}"
                        </p>
                    </section>
                </div>

                {/* Left: Shipment & Chain History / Experience */}
                <div className="col-span-8 space-y-12 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-300 border-b border-zinc-100 pb-4 italic">Supply_Chain_Engagement_Log</h2>
                        <div className="space-y-14">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-12 border-l border-zinc-900 hover:border-zinc-300 transition-all duration-700">
                                    <div className="absolute left-[-2px] top-2 w-[4px] h-[4px] bg-black group-hover:scale-150 transition-transform" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-zinc-900 tracking-tighter uppercase group-hover:italic transition-all leading-none">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-zinc-400 font-mono uppercase italic border border-zinc-100 px-3 py-1">TIMESTAMP: {exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-zinc-400 uppercase tracking-widest italic pt-1 group-hover:text-zinc-900">
                                            <span>NETWORK: {exp.company}</span>
                                            <span className="text-zinc-100">//</span>
                                            <span>{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-zinc-500 leading-relaxed font-bold font-sans whitespace-pre-wrap max-w-[95%] border-b border-zinc-50 pb-4">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-300 border-b border-zinc-100 pb-4 italic">Global_Distribution_Matrix_&_Process_Audits</h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-10 bg-white border border-zinc-200 rounded-sm shadow-sm group hover:border-zinc-900 transition-all relative">
                                        <div className="flex justify-between items-center mb-4">
                                            <h3 className="text-3xl font-black text-zinc-900 tracking-tighter uppercase leading-none group-hover:italic transition-all">{proj.name}</h3>
                                            <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest bg-zinc-50 px-3 py-1 border border-zinc-100 font-mono">{proj.techStack}</span>
                                        </div>
                                        <p className="text-xs text-zinc-400 mb-4 font-bold border-b border-zinc-50 pb-2 inline-block italic">{proj.link}</p>
                                        <p className="text-lg leading-relaxed font-serif italic text-zinc-500">"{proj.description}"</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Right: Technical Stack / Skills & Edu */}
                <div className="col-span-4 space-y-16 mt-6">
                    <section className="space-y-10 p-10 bg-white border border-zinc-100 rounded-sm shadow-sm relative group">
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-black text-center border-b-2 border-zinc-900 pb-2 italic">Network_Toolkit</h2>
                        <div className="space-y-10 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4 text-right">
                                        <h3 className="text-[9px] font-black uppercase text-zinc-300 tracking-[0.2em] font-mono">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[10px] font-black text-zinc-500 hover:text-black transition-colors cursor-default border-b border-zinc-50 pb-1 group/item">
                                                    <div className="w-4 h-px bg-zinc-100 group-hover/item:bg-black transition-all" />
                                                    <span>{s}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-200 italic border-b border-zinc-100 pb-4 text-right">Academic_Intake</h2>
                        <div className="space-y-10 text-right">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 group border-r-2 border-zinc-900 pr-6 hover:border-zinc-300 transition-all">
                                    <h3 className="text-sm font-black text-zinc-900 uppercase group-hover:italic transition-all leading-tight">{edu.degree}</h3>
                                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight py-1 font-mono">{edu.school}</p>
                                    <p className="text-[8px] font-black text-zinc-200 uppercase mt-2">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-20 py-10 border-t-2 border-zinc-900 flex justify-between items-center text-zinc-400 italic font-mono text-[9px]">
                <div className="flex flex-col gap-1">
                    <span className="font-black text-zinc-900 tracking-[0.5em] uppercase">VERIFIED_SHIPMENT</span>
                    <span className="opacity-40">CARRIER_REF: 2026.SUPPLY.NET</span>
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                    <span className="text-zinc-900 font-black tracking-widest">|||| || | ||| |||| |</span>
                    <span className="opacity-40 uppercase">MMXXVI_OPTIMIZED</span>
                </div>
            </footer>
        </div>
    );
};
