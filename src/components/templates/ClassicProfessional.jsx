"use client";

export const ClassicProfessional = ({ data }) => {
    const { personal, contact, summary, experience, education, skills, projects = [], additional = {} } = data;

    return (
        <div id="resume-preview" className="bg-white p-16 shadow-2xl min-h-[1100px] w-[816px] mx-auto text-gray-800 font-serif leading-snug">
            {/* Header */}
            <header className="text-center space-y-4 border-b pb-8">
                <h1 className="text-5xl font-bold tracking-tight text-gray-900">{personal.fullName || "Your Name"}</h1>
                <p className="text-xl text-gray-500 uppercase tracking-widest font-medium italic">{personal.jobTitle || "Professional Title"}</p>

                <div className="flex justify-center gap-6 text-sm text-gray-600 font-medium">
                    <span>{contact.email}</span>
                    <span>•</span>
                    <span>{contact.phone}</span>
                    <span>•</span>
                    <span>{contact.location}</span>
                </div>

                <div className="flex justify-center flex-wrap gap-4 text-xs font-bold text-gray-400 uppercase tracking-tighter">
                    {contact.linkedin && <span>LinkedIn / {contact.linkedin}</span>}
                    {contact.github && <span>GitHub / {contact.github}</span>}
                    {contact.portfolio && <span>Portfolio / {contact.portfolio}</span>}
                </div>
            </header>

            <div className="mt-10 space-y-12">
                {/* Summary */}
                {summary && (
                    <section className="space-y-4">
                        <h2 className="text-lg font-bold border-b-2 border-primary w-fit pr-4 pb-1">Professional Summary</h2>
                        <p className="text-base text-gray-700 leading-relaxed indent-8">{summary}</p>
                    </section>
                )}

                {/* Experience */}
                <section className="space-y-6">
                    <h2 className="text-lg font-bold border-b-2 border-primary w-fit pr-4 pb-1">Work Experience</h2>
                    <div className="space-y-10">
                        {experience.map((exp) => (
                            <div key={exp.id} className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                                        <p className="text-lg font-medium text-gray-600">{exp.company}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-gray-700">{exp.startDate} — {exp.current ? "Present" : exp.endDate}</p>
                                        <p className="text-sm text-gray-500 italic">{exp.location}</p>
                                    </div>
                                </div>
                                <p className="text-base text-gray-700 leading-relaxed whitespace-pre-wrap pl-4 border-l-2 border-gray-100">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                {projects.length > 0 && (
                    <section className="space-y-6">
                        <h2 className="text-lg font-bold border-b-2 border-primary w-fit pr-4 pb-1">Key Projects</h2>
                        <div className="space-y-8">
                            {projects.map(project => (
                                <div key={project.id} className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                                        <span className="text-sm font-bold text-gray-400 italic">{project.techStack}</span>
                                    </div>
                                    <p className="text-base text-gray-700 leading-relaxed font-bold pl-4 border-l-2 border-gray-100 italic">{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid grid-cols-2 gap-12">
                    {/* Education */}
                    <section className="space-y-6">
                        <h2 className="text-lg font-bold border-b-2 border-primary w-fit pr-4 pb-1">Education</h2>
                        <div className="space-y-6">
                            {education.map(edu => (
                                <div key={edu.id} className="space-y-1">
                                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                                    <p className="text-sm text-gray-600 font-medium">{edu.school}</p>
                                    <p className="text-xs text-gray-400 font-bold italic uppercase">{edu.startDate} — {edu.endDate}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Skills */}
                    <section className="space-y-6">
                        <h2 className="text-lg font-bold border-b-2 border-primary w-fit pr-4 pb-1">Expertise</h2>
                        <div className="grid grid-cols-1 gap-6">
                            {["technical", "soft", "tools"].map(cat => (
                                skills[cat] && skills[cat].length > 0 && (
                                    <div key={cat} className="space-y-2">
                                        <h3 className="text-xs font-black uppercase tracking-widest text-primary">{cat}</h3>
                                        <p className="text-sm text-gray-700 leading-relaxed font-medium">
                                            {skills[cat].join(", ")}
                                        </p>
                                    </div>
                                )
                            ))}
                        </div>
                    </section>
                </div>

                {/* Additional */}
                {additional && Object.values(additional).some(arr => Array.isArray(arr) && arr.length > 0) && (
                    <section className="space-y-6">
                        <h2 className="text-lg font-bold border-b-2 border-primary w-fit pr-4 pb-1">Supplemental Information</h2>
                        <div className="grid grid-cols-2 gap-8">
                            {Object.entries(additional).map(([key, items]) => (
                                items.length > 0 && (
                                    <div key={key} className="space-y-2">
                                        <h3 className="text-xs font-black uppercase tracking-widest text-primary">{key}</h3>
                                        <ul className="space-y-1 list-disc list-inside">
                                            {items.map(item => (
                                                <li key={item} className="text-sm text-gray-700 font-medium">{item}</li>
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
    );
};
