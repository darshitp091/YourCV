import { v4 as uuidv4 } from 'uuid';

/**
 * Adapter to convert ResumeAI data structure to Reactive Resume (rxresu.me) Schema
 */
export function mapToReactiveSchema(data, metadata = {}) {
    const { personal, education, experience, skills, summary } = data;

    return {
        picture: {
            hidden: !personal.photo,
            url: personal.photo || "",
            size: 80,
            rotation: 0,
            aspectRatio: 1,
            borderRadius: 0,
            borderColor: "rgba(0, 0, 0, 0.5)",
            borderWidth: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
            shadowWidth: 0,
        },
        basics: {
            name: personal.fullName || "",
            headline: personal.jobTitle || "",
            email: data.contact?.email || "",
            phone: data.contact?.phone || "",
            location: data.contact?.location || "",
            website: {
                url: data.contact?.portfolio || "",
                label: data.contact?.portfolio ? "Portfolio" : ""
            },
            customFields: [
                { id: uuidv4(), icon: "linkedin", name: "LinkedIn", value: data.contact?.linkedin || "" },
                { id: uuidv4(), icon: "github", name: "GitHub", value: data.contact?.github || "" },
            ],
        },
        summary: {
            title: "Summary",
            columns: 1,
            hidden: !summary,
            content: summary ? `<p>${summary}</p>` : "",
        },
        sections: {
            profiles: {
                title: "Profiles",
                columns: 1,
                hidden: !data.contact?.linkedin && !data.contact?.github,
                items: [
                    ...(data.contact?.linkedin ? [{ id: uuidv4(), network: "LinkedIn", username: data.contact.linkedin, url: data.contact.linkedin }] : []),
                    ...(data.contact?.github ? [{ id: uuidv4(), network: "GitHub", username: data.contact.github, url: data.contact.github }] : []),
                ],
            },
            experience: {
                title: "Experience",
                columns: 1,
                hidden: !experience || experience.length === 0,
                items: (experience || []).map(exp => ({
                    id: uuidv4(),
                    hidden: false,
                    company: exp.company || "",
                    position: exp.role || "",
                    location: exp.location || "",
                    period: `${exp.startDate || ""} - ${exp.endDate || "Present"}`,
                    website: { url: "", label: "" },
                    description: exp.description || "",
                })),
            },
            education: {
                title: "Education",
                columns: 1,
                hidden: !education || education.length === 0,
                items: (education || []).map(edu => ({
                    id: uuidv4(),
                    hidden: false,
                    school: edu.school || "",
                    degree: edu.degree || "",
                    area: edu.field || "",
                    grade: "",
                    location: edu.location || "",
                    period: `${edu.startDate || ""} - ${edu.endDate || ""}`,
                    website: { url: "", label: "" },
                    description: "",
                })),
            },
            projects: {
                title: "Projects",
                columns: 1,
                hidden: !data.projects || data.projects.length === 0,
                items: (data.projects || []).map(project => ({
                    id: uuidv4(),
                    hidden: false,
                    name: project.name || "",
                    description: project.description || "",
                    techStack: project.techStack || "",
                    url: project.link || "",
                    period: "",
                })),
            },
            skills: {
                title: "Skills",
                columns: 1,
                hidden: !skills?.technical?.length && !skills?.soft?.length,
                items: [
                    ...(skills?.technical || []).map(s => ({
                        id: uuidv4(),
                        hidden: false,
                        name: s,
                        proficiency: "Advanced",
                        level: 4,
                        keywords: [],
                    })),
                    ...(skills?.soft || []).map(s => ({
                        id: uuidv4(),
                        hidden: false,
                        name: s,
                        proficiency: "Advanced",
                        level: 4,
                        keywords: [],
                    }))
                ],
            },
            languages: {
                title: "Languages",
                columns: 1,
                hidden: true,
                items: [],
            },
            interests: {
                title: "Interests",
                columns: 1,
                hidden: true,
                items: [],
            },
            awards: {
                title: "Awards",
                columns: 1,
                hidden: true,
                items: [],
            },
            certifications: {
                title: "Certifications",
                columns: 1,
                hidden: true,
                items: [],
            },
            publications: {
                title: "Publications",
                columns: 1,
                hidden: true,
                items: [],
            },
            volunteer: {
                title: "Volunteer",
                columns: 1,
                hidden: true,
                items: [],
            },
            references: {
                title: "References",
                columns: 1,
                hidden: true,
                items: [],
            },
        },
        customSections: [],
        metadata: {
            template: metadata.template || "onyx",
            layout: {
                sidebarWidth: 35,
                pages: [
                    {
                        fullWidth: false,
                        main: ["summary", "experience", "education"],
                        sidebar: ["skills"],
                    },
                ],
            },
            css: { enabled: false, value: "" },
            page: { gapX: 4, gapY: 6, marginX: 14, marginY: 12, format: "a4", locale: "en-US", hideIcons: false },
            design: {
                colors: {
                    primary: metadata.primaryColor || "rgba(13, 110, 110, 1)", // Teal
                    text: "rgba(0, 0, 0, 1)",
                    background: "rgba(255, 255, 255, 1)",
                },
                level: {
                    icon: "star",
                    type: "circle",
                },
            },
            typography: {
                body: {
                    fontFamily: "Inter",
                    fontWeights: ["400", "500"],
                    fontSize: 10,
                    lineHeight: 1.5,
                },
                heading: {
                    fontFamily: "Outfit",
                    fontWeights: ["600"],
                    fontSize: 14,
                    lineHeight: 1.5,
                },
            },
            notes: "",
        },
    };
}
