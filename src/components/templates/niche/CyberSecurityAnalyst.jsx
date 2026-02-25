"use client";

export const CyberSecurityAnalystNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#050505] p-10 min-h-[1056px] w-[816px] mx-auto text-[#00ff41] font-mono shadow-2xl border border-[#00ff41]/20">
            {/* HUD / Header */}
            <header className="relative border-b-2 border-[#00ff41] pb-10 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-[8px] opacity-30 text-right uppercase tracking-[0.5em]">
                    Authorized Access Only<br />
                    Secure Link Protocol v4.2<br />
                    Encrypted Header Payload
                </div>

                <div className="space-y-4">
                    <div className="inline-block border-2 border-[#00ff41] px-6 py-2 bg-[#00ff41]/5 animate-pulse">
                        <h1 className="text-3xl font-black uppercase tracking-tighter shadow-[0_0_15px_#00ff41]">{personal.fullName || "AGENT IDENTITY"}</h1>
                    </div>
                    <p className="text-sm font-bold bg-[#00ff41] text-black px-3 py-0.5 inline-block uppercase tracking-widest">{personal.jobTitle || "Cyber Security Analyst"}</p>
                </div>

                <div className="mt-8 flex gap-8 text-[10px] font-bold uppercase tracking-widest">
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#00ff41] rounded-full" /> {contact.email}</span>
                    <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-[#00ff41] rounded-full" /> {contact.location}</span>
                    <span className="flex items-center gap-1.5 text-white/50">{contact.phone}</span>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10 mt-12">
                {/* Threat Intel / Summary */}
                <div className="col-span-12">
                    <section className="space-y-4">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] bg-[#00ff41]/10 px-4 py-1 inline-block border-l-4 border-[#00ff41]">Executive_Intel</h2>
                        <div className="p-6 bg-[#0a0a0a] border border-[#00ff41]/10 rounded-sm">
                            <p className="text-sm leading-relaxed text-[#00ff41]/80 antialiased font-mono">"{summary}"</p>
                        </div>
                    </section>
                </div>

                {/* Operations History */}
                <div className="col-span-7 space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00ff41]/60">Operations_Log</h2>
                        <div className="space-y-10">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group">
                                    <div className="absolute left-[-20px] top-0 text-[8px] font-black text-[#00ff41]/30 uppercase rotate-90 origin-left">TIMESTAMP</div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-lg font-bold uppercase tracking-tight text-white border-b border-[#00ff41]/20 pb-1">{exp.role}</h3>
                                            <span className="text-[9px] font-black opacity-60">[{exp.startDate} :: {exp.current ? "ACTIVE" : exp.endDate}]</span>
                                        </div>
                                        <div className="text-[10px] font-black italic opacity-80">{exp.company} // SEC_CLEARANCE_LVL: 7</div>
                                        <p className="text-xs leading-relaxed opacity-70 font-sans text-white/90">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Firewall / Skills */}
                <div className="col-span-5 space-y-12">
                    <section className="space-y-8">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00ff41]/60">Hard_Defense_Node</h2>
                        <div className="space-y-6">
                            {["technical", "tools", "soft"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-3">
                                        <h3 className="text-[9px] font-black uppercase text-[#00ff41] bg-[#00ff41]/5 px-2 py-0.5 inline-block">{cat}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills[cat].map(s => (
                                                <span key={s} className="px-2 py-0.5 text-[10px] bg-[#0a0a0a] border border-[#00ff41]/30 rounded-full hover:bg-[#00ff41]/10 transition-colors shadow-[0_0_5px_rgba(0,255,65,0.1)]">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-[#00ff41]/60">Academic_Backdoor</h2>
                        {education.map(edu => (
                            <div key={edu.id} className="space-y-1 text-[11px] border-l-2 border-[#00ff41]/20 pl-4">
                                <h3 className="font-bold text-white">{edu.degree}</h3>
                                <p className="opacity-60">{edu.school}</p>
                                <p className="text-[9px] font-black text-[#00ff41]/40 uppercase">{edu.startDate} — {edu.endDate}</p>
                            </div>
                        ))}
                    </section>
                </div>
            </main>

            <footer className="mt-20 py-4 border-t border-[#00ff41]/20 flex justify-between items-center text-[8px] font-bold uppercase tracking-[0.3em] opacity-30">
                <span>Core.v1.0.Security_Audit</span>
                <span>(C) 2026 Black_Shield_Operations</span>
                <span>UUID: {crypto.randomUUID ? crypto.randomUUID().slice(0, 8) : "88A2-BC1F"}</span>
            </footer>
        </div>
    );
};
