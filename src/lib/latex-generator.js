/**
 * Escapes LaTeX special characters.
 */
function escapeLatex(str) {
    if (!str) return "";
    return str
        .replace(/\\/g, "\\\\")
        .replace(/%/g, "\\%")
        .replace(/\$/g, "\\$")
        .replace(/#/g, "\\#")
        .replace(/_/g, "\\_")
        .replace(/{/g, "\\{")
        .replace(/}/g, "\\}")
        .replace(/~/g, "\\textasciitilde ")
        .replace(/\^/g, "\\textasciicircum ")
        .replace(/&/g, "\\&");
}

export function generateLatex(data) {
    const { personal, contact, summary, experience, education, skills, projects, additional } = data;

    const latex = `
\\documentclass[11pt,a4paper,sans]{moderncv}

% moderncv themes
\\moderncvstyle{classic}                             
\\moderncvcolor{blue}                               

% character encoding
\\usepackage[utf8]{inputenc}                       

% adjust the page margins
\\usepackage[scale=0.75]{geometry}

% personal data
\\name{${escapeLatex(personal.fullName.split(" ")[0])}}{${escapeLatex(personal.fullName.split(" ").slice(1).join(" "))}}
\\title{${escapeLatex(personal.jobTitle)}}
\\address{${escapeLatex(contact.location)}}
\\phone[mobile]{${escapeLatex(contact.phone)}}
\\email{${escapeLatex(contact.email)}}
${contact.portfolio ? `\\homepage{${escapeLatex(contact.portfolio)}}` : ""}

%----------------------------------------------------------------------------------
%            content
%----------------------------------------------------------------------------------
\\begin{document}
\\makecvtitle

\\section{Profile}
\\quote{${escapeLatex(summary)}}

\\section{Education}
${education.map(edu => `
\\cventry{${escapeLatex(edu.startDate)}--${escapeLatex(edu.endDate)}}{${escapeLatex(edu.degree)}}{${escapeLatex(edu.school)}}{${escapeLatex(edu.location || "")}}{}{\\textit{${escapeLatex(edu.field)}} ${edu.gpa ? `, GPA: ${edu.gpa}` : ""}}
`).join("")}

\\section{Experience}
${experience.map(exp => `
\\cventry{${escapeLatex(exp.startDate)}--${exp.current ? "Present" : escapeLatex(exp.endDate)}}{${escapeLatex(exp.role)}}{${escapeLatex(exp.company)}}{${escapeLatex(exp.location)}}{}{${escapeLatex(exp.description)}}
`).join("")}

\\section{Projects}
${projects.map(p => `
\\cvitem{${escapeLatex(p.name)}}{\\textit{${escapeLatex(p.techStack)}}: ${escapeLatex(p.description)}}
`).join("")}

\\section{Languages}
\\cvitemwithcomment{Languages}{${escapeLatex(additional.languages.join(", "))}}{}

\\section{Skills}
\\cvitem{Technical}{${escapeLatex(skills.technical.join(", "))}}
\\cvitem{Tools}{${escapeLatex(skills.tools.join(", "))}}
\\cvitem{Soft Skills}{${escapeLatex(skills.soft.join(", "))}}

\\section{Interests}
\\cvitem{Certifications}{${escapeLatex(additional.certifications.join(", "))}}

\\end{document}
  `.trim();

    return latex;
}
