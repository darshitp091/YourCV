"use client";

export const AcademicScholar = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects = [], additional = {} } = data;

    return (
        <div id="resume-preview" className="bg-white p-12 shadow-2xl min-h-[1056px] w-[816px] mx-auto text-black font-serif leading-normal border-t-8 border-gray-900">
            {/* Header */}
            <header className="border-b pb-8 space-y-4">
                <h1 className="text-3xl font-black text-center uppercase tracking-widest">{personal.fullName || "Your Name"}</h1>
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-gray-600 italic">
                    <span>{contact.email}</span>
                    <span>{contact.phone}</span>
                    <span>{contact.location}</span>
                    {contact.linkedin && <span>LinkedIn: {contact.linkedin}</span>}
                    {contact.github && <span>GitHub: {contact.github}</span>}
                    {contact.portfolio && <span>Portfolio: {contact.portfolio}</span>}
                </div>
            </header>

            <div className="mt-10 space-y-10">
                {/* Summary / Objective / Research Interest */}
                {summary && (
                    <section className="space-y-3">
                        <h2 className="text-sm font-black uppercase tracking-widest border-b pb-1">Research Profile</h2>
                        <p className="text-sm leading-relaxed text-gray-800">{summary}</p>
                    </section>
                )}

                {/* Education */}
                <section className="space-y-6">
                    <h2 className="text-sm font-black uppercase tracking-widest border-b pb-1">Academic Background</h2>
                    <div className="space-y-8">
                        {education.map(edu => (
                            <div key={edu.id} className="grid grid-cols-12 gap-4">
                                <div className="col-span-3 text-xs font-bold text-gray-500">{edu.startDate} — {edu.endDate}</div>
                                <div className="col-span-9 space-y-1">
                                    <h3 className="font-bold text-lg leading-none">{edu.degree}</h3>
                                    <p className="text-sm text-gray-600 italic">{edu.school}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experience / Research Experience */}
                <section className="space-y-6">
                    <h2 className="text-sm font-black uppercase tracking-widest border-b pb-1">Research & Teaching Experience</h2>
                    <div className="space-y-10">
                        {experience.map((exp) => (
                            <div key={exp.id} className="grid grid-cols-12 gap-4">
                                <div className="col-span-3 text-xs font-bold text-gray-500">{exp.startDate} — {exp.endDate}</div>
                                <div className="col-span-9 space-y-2">
                                    <h3 className="text-lg font-bold">{exp.role}</h3>
                                    <p className="text-sm font-black text-gray-500 uppercase tracking-tighter">{exp.company}</p>
                                    <p className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects / Publications */}
                {projects.length > 0 && (
                    <section className="space-y-6">
                        <h2 className="text-sm font-black uppercase tracking-widest border-b pb-1">Publications & Selected Projects</h2>
                        <div className="space-y-6">
                            {projects.map(project => (
                                <div key={project.id} className="space-y-1">
                                    <h3 className="font-bold text-sm">"{project.name}"</h3>
                                    <p className="text-xs text-gray-600 leading-relaxed">{project.description}</p>
                                    <p className="text-[10px] text-gray-400 italic">Key Technologies: {project.techStack}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-2 gap-12">
                    {/* Skills */}
                    <section className="space-y-4">
                        <h2 className="text-sm font-black uppercase tracking-widest border-b pb-1">Specialized Skills</h2>
                        <div className="space-y-4">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-1">
                                        <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">{cat}</h3>
                                        <p className="text-[11px] text-gray-800 leading-relaxed font-medium">
                                            {skills[cat].join(" • ")}
                                        </p>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>

                    {/* Additional */}
                    {additional && Object.values(additional).some(arr => Array.isArray(arr) && arr.length > 0) && (
                        <section className="space-y-4">
                            <h2 className="text-sm font-black uppercase tracking-widest border-b pb-1">Certifications & Honors</h2>
                            <div className="space-y-4">
                                {Object.entries(additional).map(([key, items]) => (
                                    items.length > 0 && (
                                        <div key={key} className="space-y-1">
                                            <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-400">{key}</h3>
                                            <ul className="space-y-1">
                                                {items.map(item => (
                                                    <li key={item} className="text-[11px] text-gray-800 font-medium">• {item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
            {/* Footer Page Number */}
            <footer className="mt-20 pt-4 border-t border-gray-100 text-[10px] text-gray-400 flex justify-between uppercase font-bold tracking-widest">
                <span>Academic Curriculum Vitae</span>
                <span>Page 1</span>
            </footer>
        </div>
    );
};
