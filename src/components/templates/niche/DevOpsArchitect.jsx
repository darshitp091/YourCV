"use client";

export const DevOpsArchitectNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#0b0e14] p-10 min-h-[1056px] w-[816px] mx-auto text-[#d1d5db] font-mono shadow-2xl border-l-[8px] border-[#3b82f6]">
            <header className="flex justify-between items-center border-b border-zinc-800 pb-10">
                <div className="space-y-3">
                    <h1 className="text-4xl font-bold tracking-tight text-white flex items-center gap-2">
                        <span className="text-[#3b82f6]">$</span> {personal.fullName || "Engineer Name"}
                    </h1>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e293b] rounded text-[#3b82f6] text-xs font-bold border border-[#3b82f6]/30">
                        {personal.jobTitle || "DevOps Architect"}
                    </div>
                </div>
                <div className="text-right text-[10px] space-y-1 font-bold tracking-widest uppercase text-zinc-500">
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.location}</p>
                </div>
            </header>

            <div className="mt-12 grid grid-cols-12 gap-12">
                {/* Infrastructure Overview */}
                <div className="col-span-12">
                    <section className="space-y-4">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#3b82f6]">System.manifest</h2>
                        <div className="bg-[#111827] p-6 rounded-lg border border-zinc-800 shadow-xl">
                            <p className="text-sm leading-relaxed text-zinc-300 antialiased italic">"{summary}"</p>
                        </div>
                    </section>
                </div>

                {/* Left: Pipeline History */}
                <div className="col-span-8 space-y-10">
                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#3b82f6]">Deployment_History</h2>
                        <div className="space-y-8">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-8 group">
                                    <div className="absolute left-0 top-1.5 w-0.5 h-full bg-zinc-800" />
                                    <div className="absolute left-[-3px] top-1.5 w-2 h-2 rounded-full bg-[#3b82f6] shadow-[0_0_10px_#3b82f6]" />

                                    <div className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-lg font-bold text-white uppercase">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-zinc-500">{exp.startDate} :: {exp.current ? "HEAD" : exp.endDate}</span>
                                        </div>
                                        <div className="text-xs font-bold text-[#3b82f6]">STAGE: {exp.company}</div>
                                        <p className="text-xs text-zinc-400 leading-relaxed font-sans">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: Technical Stack */}
                <div className="col-span-4 space-y-10">
                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#3b82f6]">Stack_Configs</h2>
                        <div className="space-y-4">
                            {["technical", "tools", "soft"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-3 p-4 bg-[#111827] rounded-lg border border-zinc-800">
                                        <h3 className="text-[9px] font-black uppercase text-[#3b82f6] tracking-widest">{cat}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills[cat].map(s => (
                                                <span key={s} className="px-2 py-0.5 text-[9px] font-bold text-zinc-300 border border-zinc-700 bg-[#1e293b] rounded">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#3b82f6]">Certifications</h2>
                        {education.map(edu => (
                            <div key={edu.id} className="space-y-1 text-[11px]">
                                <h3 className="font-bold text-white">{edu.degree}</h3>
                                <p className="text-zinc-500 uppercase tracking-tighter">{edu.school}</p>
                                <p className="text-[9px] text-[#3b82f6] font-black">[{edu.startDate} - {edu.endDate}]</p>
                            </div>
                        ))}
                    </section>
                </div>
            </div>

            <footer className="mt-20 pt-6 border-t border-zinc-800 text-center">
                <p className="text-[9px] font-bold text-zinc-600 tracking-widest uppercase italic">Build Version: 2026.02.23 // Immutable Infrastructure</p>
            </footer>
        </div>
    );
};
