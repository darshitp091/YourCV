"use client";

export const CloudArchitectNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#0f172a] p-10 min-h-[1056px] w-[816px] mx-auto text-[#94a3b8] font-sans shadow-2xl border border-[#38bdf8]/20 relative overflow-hidden">
            {/* Cloud Grid Background Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

            <header className="flex justify-between items-start border-b border-[#1e293b] pb-10 relative z-10">
                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#38bdf8] to-[#6366f1] rounded-xl flex items-center justify-center text-white font-black text-xl shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                            CL
                        </div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-white uppercase">{personal.fullName || "Cloud Specialist"}</h1>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-[#38bdf8] font-mono font-bold tracking-widest text-sm uppercase px-3 py-1 bg-[#38bdf8]/10 rounded border border-[#38bdf8]/20">
                            {personal.jobTitle || "Cloud Infrastructure Architect"}
                        </span>
                        <div className="h-px w-8 bg-[#1e293b]" />
                        <span className="text-[10px] font-black text-[#475569] uppercase tracking-widest italic">{contact.location} // HighAvailability: 99.9%</span>
                    </div>
                </div>
                <div className="text-right text-[11px] font-bold text-[#64748b] space-y-1">
                    <p className="text-[#38bdf8]">PUBLIC_DNS: {contact.email}</p>
                    <p>PH_UPLINK: {contact.phone}</p>
                    <div className="flex flex-col items-end gap-1 mt-2 text-[9px] text-[#475569] font-mono">
                        {contact.linkedin && <span>LI_ADDR: {contact.linkedin}</span>}
                        {contact.github && <span>GIT_REPO: {contact.github}</span>}
                        {contact.portfolio && <span>PF_HOST: {contact.portfolio}</span>}
                    </div>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10 mt-12 relative z-10">
                {/* Architecture Schema / Summary */}
                <div className="col-span-12">
                    <section className="space-y-4">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.5em] text-[#38bdf8]/50 flex items-center gap-3">
                            <span className="w-12 h-0.5 bg-[#1e293b]" />
                            Architecture_Philosophy
                        </h2>
                        <div className="p-8 bg-[#111827] border border-[#1e293b] rounded-2xl shadow-xl relative group">
                            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-10">Scale: Horizontal</div>
                            <p className="text-sm leading-relaxed text-[#f1f5f9] antialiased italic">"{summary}"</p>
                        </div>
                    </section>
                </div>

                {/* Main: Deployment Records / Experience */}
                <div className="col-span-8 space-y-12 mt-4">
                    <section className="space-y-10">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.5em] text-[#38bdf8]/50 flex items-center gap-3">
                            <span className="w-12 h-0.5 bg-[#1e293b]" />
                            Deployment_History
                        </h2>
                        <div className="space-y-12">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative group pl-10">
                                    <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-[#38bdf8]/50 to-transparent" />
                                    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#38bdf8] transition-colors">{exp.role}</h3>
                                            <span className="text-[9px] font-black text-[#64748b] uppercase tracking-[0.2em]">{exp.startDate} :: {exp.current ? "Present" : exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-xs font-bold text-[#38bdf8]/80 italic">
                                            <span>Cloud_Provider: {exp.company}</span>
                                            <span className="text-[#1e293b] font-normal font-sans tracking-normal">|</span>
                                            <span className="text-[#64748b]">{exp.location}</span>
                                        </div>
                                        <p className="text-xs text-[#94a3b8] leading-relaxed max-w-[95%] font-medium whitespace-pre-wrap">{exp.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects && projects.length > 0 && (
                        <section className="space-y-10 mt-16">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#38bdf8]/50 flex items-center gap-3">
                                <span className="w-12 h-0.5 bg-[#1e293b]" />
                                Infrastructure_Architectures_&_Solutions
                            </h2>
                            <div className="space-y-10">
                                {projects.map((proj) => (
                                    <div key={proj.id} className="p-8 bg-[#111827] border border-[#1e293b] rounded-2xl shadow-xl group hover:border-[#38bdf8]/50 transition-all relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-[#38bdf8]/20">{proj.techStack}</div>
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#38bdf8] transition-colors">{proj.name}</h3>
                                            <p className="text-[10px] text-[#38bdf8]/50 font-mono italic underline decoration-[#38bdf8]/10">{proj.link}</p>
                                            <p className="text-xs text-[#94a3b8] leading-relaxed font-medium">"{proj.description}"</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </div>

                {/* Sidebar: Stack Modules / Skills */}
                <div className="col-span-4 space-y-12 mt-4">
                    <section className="space-y-6">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.5em] text-[#38bdf8]/50 flex items-center gap-3">
                            <span className="w-12 h-px bg-[#1e293b]" />
                            Cloud_Stack
                        </h2>
                        <div className="space-y-4">
                            {["technical", "tools", "soft"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-3 p-5 bg-[#111827] border border-[#1e293b] rounded-xl relative overflow-hidden group hover:border-[#38bdf8]/20 transition-all">
                                        <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-br from-[#38bdf8]/10 to-transparent rounded-bl-full" />
                                        <h3 className="text-[9px] font-black uppercase text-[#38bdf8] tracking-widest">{cat}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills[cat].map(s => (
                                                <span key={s} className="px-2 py-0.5 text-[9px] font-bold text-[#f1f5f9] bg-[#1e293b] border border-[#334155] rounded hover:border-[#38bdf8] transition-colors cursor-default">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.5em] text-[#38bdf8]/50 flex items-center gap-3">
                            <span className="w-12 h-px bg-[#1e293b]" />
                            Infrastructure_IQ
                        </h2>
                        <div className="space-y-4">
                            {education.map(edu => (
                                <div key={edu.id} className="p-4 bg-[#111827] border-l-2 border-[#38bdf8] rounded-r-lg space-y-2">
                                    <h3 className="text-[11px] font-bold text-white leading-tight uppercase tracking-tight">{edu.degree}</h3>
                                    <p className="text-[10px] text-[#64748b] font-bold">{edu.school}</p>
                                    <p className="text-[9px] font-black text-[#38bdf8]/40 uppercase tracking-widest">{edu.startDate} - {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-20 py-10 border-t border-[#1e293b] flex justify-between items-center text-[9px] font-black uppercase tracking-[0.4em] text-[#475569] relative z-10">
                <span>Terraform_Certified_Associate</span>
                <span className="text-[#38bdf8]">KUBECON_SPEC_02</span>
                <span>(C) CLOUD_ARCH_GLOBAL</span>
            </footer>
        </div>
    );
};
