"use client";

export const MobileDeveloperNiche = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects } = data;

    return (
        <div className="bg-[#f0f2f5] p-10 min-h-[1056px] w-[816px] mx-auto text-zinc-900 font-sans shadow-lg border-[24px] border-zinc-900 rounded-[60px]">
            {/* Mobile Status Bar Styled Header */}
            <header className="flex flex-col gap-6 mb-12">
                <div className="flex justify-between items-center px-4 pt-2 pb-6 border-b border-zinc-200">
                    <span className="text-xs font-black">9:41</span>
                    <div className="w-20 h-6 bg-zinc-900 rounded-full" />
                    <div className="flex gap-1.5 items-center">
                        <div className="w-3 h-3 bg-zinc-900 rounded-sm" />
                        <div className="w-4 h-2 bg-zinc-900 rounded-sm" />
                    </div>
                </div>

                <div className="flex justify-between items-end px-4">
                    <div className="space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-tr from-rose-500 to-orange-500 rounded-[1.5rem] shadow-xl flex items-center justify-center text-white text-3xl font-black italic shadow-orange-500/20">
                            {personal.fullName?.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="space-y-1">
                            <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 uppercase">{personal.fullName || "App Developer"}</h1>
                            <p className="text-xl font-bold text-orange-600 bg-orange-50 px-4 py-1 rounded-full inline-block">
                                {personal.jobTitle || "Mobile Engineer (iOS/Android)"}
                            </p>
                        </div>
                    </div>
                    <div className="text-right text-xs font-bold text-zinc-400 space-y-2 uppercase tracking-widest pb-2">
                        <p>{contact.location}</p>
                        <p className="text-zinc-900">{contact.email}</p>
                        <p>{contact.phone}</p>
                        <div className="flex flex-col items-end gap-1 pt-2">
                            {contact.linkedin && <span className="text-rose-500 lowercase">li://{contact.linkedin}</span>}
                            {contact.github && <span className="text-orange-500 lowercase">git://{contact.github}</span>}
                        </div>
                    </div>
                </div>
            </header>

            <main className="space-y-12 px-4">
                {/* App Bio / Summary */}
                <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-zinc-100 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-6 opacity-5">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.1 2.48-1.34.03-1.77-.79-3.29-.79-1.53 0-2.01.76-3.27.82-1.31.05-2.33-1.32-3.15-2.5-1.66-2.42-2.93-6.83-1.22-9.76 1.13-1.92 3.12-2.3 4.49-2.3 1.37 0 2.66.94 3.51.94.84 0 2.44-1.12 4.09-1.12 1.94 0 3.44.7 4.54 2.21-3.66 2.14-3.08 6.78.6 8.32-1.21 2.92-2.4 5.92-3.7 7.71M15.42 4.2C16.92 2.37 16.5 1.05 16.5 1s-1.12.1-2.44 1.63c-1.31 1.54-1.23 2.87-1.21 2.8s1.07.6 2.57-1.23z" />
                        </svg>
                    </div>
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 mb-4">Core_Application_logic</h2>
                    <p className="text-lg leading-relaxed text-zinc-600 font-medium italic italic">
                        "{summary}"
                    </p>
                </section>

                <div className="grid grid-cols-12 gap-10">
                    {/* Left: Component Repository / Skills */}
                    <div className="col-span-4 space-y-10">
                        <section className="space-y-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Library_Modules</h2>
                            <div className="space-y-8">
                                {["technical", "tools", "soft"].map(cat => (
                                    skills[cat] && skills[cat].length > 0 && (
                                        <div key={cat} className="space-y-4">
                                            <h3 className="text-[9px] font-black uppercase text-orange-600 tracking-widest px-3 py-1 bg-orange-50 rounded-lg inline-block">{cat}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                {skills[cat].map(s => (
                                                    <span key={s} className="px-3 py-1.5 text-[10px] font-bold text-zinc-600 bg-white shadow-sm border border-zinc-100 rounded-2xl hover:bg-zinc-900 hover:text-white transition-all cursor-default">{s}</span>
                                                ))}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>

                        <section className="space-y-6">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Training_Logs</h2>
                            <div className="space-y-4">
                                {education.map(edu => (
                                    <div key={edu.id} className="p-5 bg-white rounded-[1.5rem] shadow-sm border border-zinc-100 space-y-1">
                                        <h3 className="text-[11px] font-black text-zinc-900 leading-tight uppercase tracking-tight">{edu.degree}</h3>
                                        <p className="text-[9px] text-zinc-500 font-bold uppercase">{edu.school}</p>
                                        <p className="text-[8px] font-black text-zinc-300 uppercase pt-2 tracking-widest">{edu.startDate} - {edu.endDate}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right: Version History / Experience */}
                    <div className="col-span-8 space-y-12">
                        <section className="space-y-8">
                            <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">Release_Timeline</h2>
                            <div className="space-y-10">
                                {experience.map((exp) => (
                                    <div key={exp.id} className="relative group">
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-baseline">
                                                <h3 className="text-2xl font-black text-zinc-900 tracking-tighter hover:text-orange-600 transition-colors">{exp.role}</h3>
                                                <span className="text-[10px] font-bold text-zinc-400 bg-zinc-100 px-3 py-1 rounded-full">{exp.startDate} — {exp.current ? "Present" : exp.endDate}</span>
                                            </div>
                                            <div className="text-sm font-bold text-zinc-500 flex items-center gap-2 mb-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                                                <span>{exp.company}</span>
                                                <span className="text-zinc-300 uppercase text-[9px] font-black tracking-widest">({exp.location})</span>
                                            </div>
                                            <p className="text-xs text-zinc-600 leading-relaxed font-medium whitespace-pre-wrap max-w-[95%] border-l-2 border-zinc-100 pl-4">{exp.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* App Showcase Projects */}
                        {projects && projects.length > 0 && (
                            <section className="space-y-6">
                                <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 underline decoration-zinc-100 underline-offset-8">Featured_Apps</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    {projects.map((proj) => (
                                        <div key={proj.id} className="p-5 bg-white rounded-3xl border border-zinc-100 shadow-sm space-y-2 group hover:shadow-lg transition-all">
                                            <div className="w-10 h-10 bg-zinc-900 rounded-xl mb-4 group-hover:scale-110 transition-transform" />
                                            <h3 className="font-bold text-zinc-900 text-sm tracking-tight">{proj.name}</h3>
                                            <p className="text-[10px] text-zinc-500 font-medium leading-relaxed">{proj.description}</p>
                                            <div className="pt-2">
                                                <span className="text-[7px] font-black bg-zinc-900 text-white px-2 py-0.5 rounded uppercase">{proj.techStack}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </main>

            <footer className="mt-20 py-10 border-t border-zinc-200 text-center relative">
                <div className="w-32 h-1 bg-zinc-200 rounded-full mx-auto mb-6" />
                <p className="text-[8px] font-black text-zinc-300 uppercase tracking-[0.5em] italic">Mobile First. Performance Always.</p>
            </footer>
        </div>
    );
};
