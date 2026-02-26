"use client";

export const NetworkAdministratorNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#1a1c1e] p-10 min-h-[1056px] w-[816px] mx-auto text-slate-300 font-sans shadow-2xl border-t-8 border-cyan-500">
            {/* Network Topology Header */}
            <header className="flex justify-between items-start border-b border-slate-700 pb-10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" className="w-full h-full stroke-cyan-500 fill-none">
                        <circle cx="50" cy="50" r="40" strokeWidth="1" />
                        <circle cx="20" cy="20" r="5" fill="currentColor" />
                        <circle cx="80" cy="20" r="5" fill="currentColor" />
                        <circle cx="50" cy="80" r="5" fill="currentColor" />
                        <line x1="20" y1="20" x2="50" y2="50" strokeWidth="1" />
                        <line x1="80" y1="20" x2="50" y2="50" strokeWidth="1" />
                        <line x1="50" y1="80" x2="50" y2="50" strokeWidth="1" />
                    </svg>
                </div>

                <div className="space-y-4">
                    <h1 className="text-4xl font-black tracking-tight text-white uppercase italic">{personal.fullName || "Admin Name"}</h1>
                    <div className="flex items-center gap-3">
                        <span className="bg-cyan-500 text-black text-[10px] font-black px-3 py-1 rounded uppercase tracking-widest">{personal.jobTitle || "Network Administrator"}</span>
                        <div className="h-0.5 w-12 bg-slate-700" />
                        <span className="text-xs font-bold text-slate-500 uppercase">Node: {contact.location}</span>
                    </div>
                </div>

                <div className="text-right text-[11px] font-bold text-slate-400 space-y-1 group">
                    <p className="text-cyan-400 font-mono">REMOTE_ADDR: {contact.email}</p>
                    <p>PH_UPLINK: {contact.phone}</p>
                    <div className="pt-2 flex flex-col items-end gap-1 text-[9px] text-slate-600 group-hover:text-cyan-500 transition-colors font-mono">
                        {contact.linkedin && <span>LI_ADDR: {contact.linkedin}</span>}
                        {contact.github && <span>GIT_REPO: {contact.github}</span>}
                        {contact.portfolio && <span>PF_HOST: {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10 mt-12">
                {/* Protocol Overview */}
                <div className="col-span-12">
                    <section className="space-y-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500/50">Core_Protocol_Manual</h2>
                        <div className="p-8 bg-[#25282c] border border-slate-700 rounded-lg shadow-inner border-l-4 border-cyan-500">
                            <p className="text-sm leading-relaxed text-slate-300 antialiased font-medium">"{summary}"</p>
                        </div>
                    </section>
                </div>

                {/* Left: Routing Table / Experience */}
                <div className="col-span-8 space-y-12">
                    <section className="space-y-8">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500/50">Routing_History</h2>
                        <div className="space-y-12">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-8">
                                    <div className="absolute left-0 top-0 h-full w-px bg-slate-700" />
                                    <div className="absolute left-[-4px] top-2 w-2 h-2 bg-cyan-500 shadow-[0_0_10px_#06b6d4] rounded-sm" />
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-xl font-bold text-white uppercase tracking-tight">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-cyan-500/50 uppercase">[{exp.startDate} :: {exp.current ? "Present" : exp.endDate}]</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs font-bold">
                                            <span className="text-cyan-500">Gateway: {exp.company}</span>
                                            <span className="text-slate-600">|</span>
                                            <span className="text-slate-500">Subnet: {exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-400 leading-relaxed max-w-[95%]">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: Interface Config / Skills */}
                <div className="col-span-4 space-y-12">
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500/50">Interface_Config</h2>
                        <div className="space-y-6">
                            {["technical", "tools", "soft"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-3 p-5 bg-[#25282c] border border-slate-700 rounded-xl relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 w-16 h-1 bg-cyan-500/30" />
                                        <h3 className="text-[9px] font-black uppercase text-cyan-500 tracking-widest">{cat}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills[cat].map(s => (
                                                <span key={s} className="px-2 py-0.5 text-[10px] font-bold text-slate-300 border border-slate-600 rounded bg-slate-800/50">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    {/* Certifications / Education */}
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-500/50">Certification_Payload</h2>
                        <div className="space-y-4">
                            {education.map(edu => (
                                <div key={edu.id} className="p-4 border border-slate-700 rounded bg-[#1a1c1e] space-y-2">
                                    <h3 className="text-xs font-bold text-white">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase">{edu.school}</p>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-[8px] font-black text-cyan-500 opacity-50 uppercase tracking-widest">Valid_Uptime</span>
                                        <span className="text-[9px] font-black text-slate-600 uppercase">{edu.startDate} - {edu.endDate}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-20 py-6 border-t border-slate-800 text-center relative overflow-hidden">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-cyan-500 shadow-[0_0_20px_#06b6d4] opacity-20" />
                <p className="text-[9px] font-bold text-slate-600 tracking-[0.8em] uppercase">Packets. Transmitted. Secure.</p>
            </footer>
        </div>
    );
};
