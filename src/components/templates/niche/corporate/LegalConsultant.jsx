"use client";

export const LegalConsultantNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fcf8f4] p-[60px] min-h-[1056px] w-[816px] mx-auto text-[#1a1c1e] font-serif shadow-2xl border-[1px] border-[#d1d5db]">
            <header className="flex flex-col items-center text-center gap-8 border-b-2 border-[#1a1c1e]/10 pb-16 mb-16">
                <div className="space-y-4">
                    <h1 className="text-5xl font-extrabold tracking-tight text-[#1a1c1e] uppercase leading-none">{personal.fullName || "Counsel Name"}</h1>
                    <div className="w-24 h-1 bg-[#1a1c1e] mx-auto opacity-20" />
                    <p className="text-xl font-medium text-[#4a4f54] italic tracking-wide lowercase italic">{personal.jobTitle || "Legal Consultant & Compliance Specialist"}</p>
                </div>

                <div className="flex gap-10 text-[10px] font-bold text-[#8d949b] uppercase tracking-[0.3em] font-sans italic">
                    <span className="border-b border-[#e5e7eb] pb-1">{contact.email}</span>
                    <span>{contact.location}</span>
                    <span className="text-[#1a1c1e]">{contact.phone}</span>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-16">
                {/* Executive Summary / Advisory Vision */}
                <div className="col-span-12">
                    <section className="space-y-6">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.6em] text-[#8d949b] text-center italic">Executive_Advisory_Statement</h2>
                        <div className="p-12 bg-white border border-[#e5e7eb] rounded-sm shadow-sm italic text-xl leading-relaxed text-[#4a4f54] text-center mx-auto max-w-3xl underline decoration-[#f3f4f6] decoration-8 underline-offset-8">
                            "{summary}"
                        </div>
                    </section>
                </div>

                {/* Main Content: Legal Experience */}
                <div className="col-span-8 space-y-16">
                    <section className="space-y-12">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.6em] text-[#8d949b] italic">Professional_Engagement_Record</h2>
                        <div className="space-y-16">
                            {experience.map((exp) => (
                                <div key={exp.id} className="space-y-6 group">
                                    <div className="flex justify-between items-baseline border-b border-[#f3f4f6] pb-4 group-hover:border-[#1a1c1e] transition-colors">
                                        <h3 className="text-2xl font-black text-[#1a1c1e] tracking-tight">{exp.role}</h3>
                                        <span className="text-[10px] font-bold text-[#8d949b] uppercase tracking-widest font-sans">{exp.startDate} :: {exp.endDate}</span>
                                    </div>
                                    <div className="flex items-center gap-4 text-sm font-bold text-[#4a4f54] uppercase tracking-[0.1em] font-sans italic">
                                        <span>Practice: {exp.company}</span>
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#1a1c1e]/10" />
                                        <span>Jurisdiction: {exp.location}</span>
                                    </div>
                                    <p className="text-sm text-[#6b7280] leading-relaxed font-medium whitespace-pre-wrap max-w-[95%] italic opacity-80 group-hover:opacity-100 transition-opacity">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Sidebar: Compliance & Qualifications */}
                <div className="col-span-4 space-y-16 mt-2">
                    <section className="space-y-10 bg-[#f9fafb] p-10 border border-[#e5e7eb] rounded-sm shadow-inner group">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-[#1a1c1e] text-center border-b border-[#1a1c1e]/10 pb-4 italic">Statutory_Skills</h2>
                        <div className="space-y-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-5">
                                        <h3 className="text-[9px] font-black uppercase text-[#8d949b] font-sans tracking-[0.2em]">{cat}</h3>
                                        <div className="flex flex-col gap-3">
                                            {skills[cat].map(s => (
                                                <div key={s} className="flex justify-between items-center text-[11px] font-bold text-[#4a4f54] hover:text-[#1a1c1e] transition-colors cursor-default">
                                                    <span>{s}</span>
                                                    <div className="w-4 h-px bg-[#1a1c1e]/20 group-hover:w-8 transition-all" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-10 px-6">
                        <h2 className="text-[9px] font-black uppercase tracking-[0.5em] text-[#8d949b] italic">Academic_Credentials</h2>
                        <div className="space-y-10">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-3 border-l-2 border-[#1a1c1e]/10 pl-6 group">
                                    <h3 className="text-sm font-black text-[#1a1c1e] leading-tight uppercase group-hover:text-blue-900 transition-colors italic">{edu.degree}</h3>
                                    <p className="text-[10px] text-[#8d949b] font-bold uppercase font-sans py-1">{edu.school}</p>
                                    <p className="text-[8px] font-black text-[#8d949b] uppercase tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-12 border-t-2 border-[#1a1c1e]/10 text-center flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.8em] text-[#8d949b] italic">
                <span>Advocating Integrity</span>
                <span className="font-sans text-[8px] opacity-30">REF: LEGAL_CONSULT_V1</span>
                <span>(C) JURIS_DOCS_MMXXVI</span>
            </footer>
        </div>
    );
};
