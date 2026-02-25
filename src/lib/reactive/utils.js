import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

export function getSectionTitle(type) {
    const titles = {
        summary: "Summary",
        profiles: "Profiles",
        experience: "Experience",
        education: "Education",
        projects: "Projects",
        skills: "Skills",
        languages: "Languages",
        interests: "Interests",
        awards: "Awards",
        certifications: "Certifications",
        publications: "Publications",
        volunteer: "Volunteer",
        references: "References",
    };
    return titles[type] || type;
}
