"use client";

export const ProjectCoordinatorNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#fcfcfc] p-10 min-h-[1056px] w-[816px] mx-auto text-slate-800 font-sans shadow-lg border-t-8 border-slate-900 rounded-lg">
            <header className="flex justify-between items-end border-b-2 border-slate-100 pb-12 mb-12">
                <div className="space-y-4">
                    <div className="flex gap-2 mb-2">
                        <div className="w-4 h-4 rounded-sm bg-slate-900" />
                        <div className="w-4 h-4 rounded-sm bg-slate-400 opacity-20" />
                        <div className="w-4 h-4 rounded-sm bg-slate-400 opacity-20" />
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter uppercase text-slate-900 leading-none">{personal.fullName || "Coordinator"}</h1>
                    <div className="flex items-center gap-4 text-xs font-black text-slate-400 uppercase tracking-[0.4em] italic bg-slate-50 px-6 py-1.5 rounded-full border border-slate-100">
                        {personal.jobTitle || "Project & Logistics Coordinator"}
                    </div>
                </div>
                <div className="text-right space-y-2">
                    <p className="text-sm font-bold text-slate-900 underline decoration-slate-200 underline-offset-4">{contact.email}</p>
                    <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest">{contact.location}</p>
                    <p className="text-[10px] font-black text-slate-200 uppercase">{contact.phone} // Active</p>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-10">
                {/* Workflow Summary */}
                <div className="col-span-12">
                    <section className="space-y-4">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Phase_01_Strategic_Overview</h2>
                        <div className="p-10 bg-white border border-slate-100 rounded-3xl shadow-sm italic text-lg leading-relaxed text-slate-600 font-serif relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-2 h-full bg-slate-900 opacity-[0.03]" />
                            "{summary}"
                        </div>
                    </section>
                </div>

                {/* Left: Schedule History / Experience */}
                <div className="col-span-8 space-y-12">
                    <section className="space-y-10">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300">Phase_02_Milestone_History</h2>
                        <div className="space-y-12">
                            {experience.map((exp) => (
                                <div key={exp.id} className="relative pl-12 group">
                                    <div className="absolute left-0 top-0 h-full w-px bg-slate-100" />
                                    <div className="absolute left-[-5px] top-1.5 w-[10px] h-[10px] rounded-sm bg-slate-900 group-hover:rotate-90 transition-transform" />

                                    <div className="space-y-4">
                                        <div className="flex justify-between items-baseline">
                                            <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase underline decoration-slate-100 decoration-4 underline-offset-8 group-hover:decoration-slate-900 transition-all">{exp.role}</h3>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-3 py-1 rounded-sm border border-slate-100">{exp.startDate} — {exp.endDate}</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-sm font-bold text-slate-500 uppercase tracking-widest italic">
                                            <span>PROJ: {exp.company}</span>
                                            <span className="text-slate-200">/</span>
                                            <span>LOC: {exp.location}</span>
                                        </div>
                                        <p className="text-xs text-slate-600 leading-relaxed font-medium whitespace-pre-wrap max-w-[95%] border-l-2 border-slate-50 pl-6">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right: Asset Management / Skills & Edu */}
                <div className="col-span-4 space-y-12">
                    <section className="space-y-8 p-8 bg-slate-900 text-white rounded-[2.5rem] shadow-xl relative group">
                        <div className="absolute top-0 right-0 p-8 opacity-5">
                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14h-2V9h2v8zm-4 0H8v-4h2v4zm8 0h-2v-6h2v6z" />
                            </svg>
                        </div>
                        <h2 className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400 text-center">Resource_Toolkit</h2>
                        <div className="space-y-8 relative z-10">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[9px] font-black uppercase text-white border-b border-white/20 pb-1">{cat}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills[cat].map(s => (
                                                <span key={s} className="px-3 py-1 text-[10px] font-bold text-slate-400 bg-white/5 rounded-lg border border-white/10 hover:bg-white hover:text-slate-900 transition-all cursor-default">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    <section className="space-y-8 px-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Phase_03_Credentials</h2>
                        <div className="space-y-8">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-2 border-l-2 border-slate-200 pl-6 group">
                                    <h3 className="text-xs font-black text-slate-900 leading-tight uppercase group-hover:underline italic transition-all">{edu.degree}</h3>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{edu.school}</p>
                                    <p className="text-[9px] font-black text-slate-300 uppercase mt-2 tracking-widest">{edu.startDate} - {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </main>

            <footer className="mt-24 py-10 border-t-2 border-slate-100 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.8em] text-slate-300 italic">
                <span>Phase Complete</span>
                <span>UUID: COORD_HQ_2026</span>
                <span className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
                    Live_Status
                </span>
            </footer>
        </div>
    );
};
