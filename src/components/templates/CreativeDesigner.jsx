"use client";

import { motion } from "framer-motion";

export const CreativeDesigner = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects, additional } = data;

    return (
        <div id="resume-preview" className="bg-[#121212] p-16 shadow-2xl min-h-[1150px] w-[850px] mx-auto text-white font-sans overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[150px] rounded-full -mr-48 -mt-48" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 blur-[150px] rounded-full -ml-48 -mb-48" />

            <div className="relative z-10 grid grid-cols-12 gap-16">
                {/* Left col - Bio & Info */}
                <div className="col-span-12 lg:col-span-5 space-y-12">
                    <header className="space-y-6">
                        <div className="inline-block px-4 py-1.5 bg-primary rounded-full text-[10px] font-black uppercase tracking-widest text-black">
                            {personal.jobTitle || "Creative Director"}
                        </div>
                        <h1 className="text-6xl font-black font-heading leading-tight tracking-tighter">
                            {personal.fullName || "Your Name"}.
                        </h1>
                        <div className="space-y-4 text-sm font-bold text-gray-400">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-gray-700" />
                                {contact.email}
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-gray-700" />
                                {contact.phone}
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-[1px] bg-gray-700" />
                                {contact.location}
                            </div>
                            {(contact.linkedin || contact.github || contact.portfolio) && (
                                <div className="pt-4 space-y-3">
                                    <h3 className="text-[10px] uppercase tracking-widest text-primary/50">Connectivity</h3>
                                    {contact.linkedin && <div className="text-[10px] break-all border-l border-primary/20 pl-4 py-1">LinkedIn / {contact.linkedin}</div>}
                                    {contact.github && <div className="text-[10px] break-all border-l border-primary/20 pl-4 py-1">GitHub / {contact.github}</div>}
                                    {contact.portfolio && <div className="text-[10px] break-all border-l border-primary/20 pl-4 py-1">Portfolio / {contact.portfolio}</div>}
                                </div>
                            )}
                        </div>
                    </header>

                    {summary && (
                        <section className="space-y-4">
                            <h2 className="text-xs font-black uppercase tracking-widest text-primary">Philosophy</h2>
                            <p className="text-lg font-medium text-gray-300 leading-relaxed italic border-l-4 border-primary pl-6">
                                "{summary}"
                            </p>
                        </section>
                    )}

                    <section className="space-y-10">
                        <h2 className="text-xs font-black uppercase tracking-widest text-primary">Skillset</h2>
                        <div className="grid grid-cols-1 gap-8">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-4">
                                        <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500">{cat}</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skills[cat].map(skill => (
                                                <span key={skill} className="px-5 py-2 border border-gray-800 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all cursor-default">
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>
                </div>

                {/* Right col - Experience & Work */}
                <div className="col-span-12 lg:col-span-7 space-y-16 mt-6">
                    <section className="space-y-10">
                        <h2 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-4">
                            The Journey
                            <span className="h-[1px] flex-grow bg-gray-800" />
                        </h2>
                        <div className="space-y-12">
                            {experience.map((exp) => (
                                <div key={exp.id} className="group space-y-4">
                                    <div className="flex justify-between items-baseline">
                                        <h3 className="text-3xl font-black group-hover:text-primary transition-colors">{exp.role}</h3>
                                        <span className="text-[10px] font-black text-gray-500">{exp.startDate} — {exp.endDate}</span>
                                    </div>
                                    <div className="text-sm font-bold text-gray-400">
                                        {exp.company} <span className="text-gray-700 mx-2">//</span> {exp.location}
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed font-medium">
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {projects.length > 0 && (
                        <section className="space-y-10">
                            <h2 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-4">
                                Selected Works
                                <span className="h-[1px] flex-grow bg-gray-800" />
                            </h2>
                            <div className="grid grid-cols-2 gap-6">
                                {projects.map(project => (
                                    <div key={project.id} className="p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all space-y-3">
                                        <h4 className="font-black text-lg">{project.name}</h4>
                                        <p className="text-xs text-gray-500 line-clamp-2">{project.description}</p>
                                        <div className="text-[9px] font-black text-primary uppercase tracking-tighter">{project.techStack}</div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <section className="space-y-8">
                        <h2 className="text-xs font-black uppercase tracking-widest text-primary flex items-center gap-4">
                            Roots
                            <span className="h-[1px] flex-grow bg-gray-800" />
                        </h2>
                        <div className="grid grid-cols-2 gap-8">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-1">
                                    <h3 className="font-black text-base">{edu.degree}</h3>
                                    <p className="text-sm text-gray-500 font-bold">{edu.school}</p>
                                    <p className="text-[10px] text-gray-600 uppercase font-black tracking-widest">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
