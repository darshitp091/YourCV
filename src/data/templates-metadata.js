export const TEMPLATE_CATEGORIES = [
    { id: "all", name: "All Templates" },
    { id: "tech", name: "Technology" },
    { id: "corporate", name: "Corporate" },
    { id: "medical", name: "Medical" },
    { id: "creative", name: "Creative" },
    { id: "trades", name: "Trades & Services" },
];

export const TEMPLATES_METADATA = [
    // Core Templates
    { id: "classic-professional", name: "Classic Professional", category: "corporate", tags: ["Business", "Finance", "Law"], description: "A high-impact, professional layout for corporate leadership." },
    { id: "modern-minimal", name: "Modern Minimal", category: "tech", tags: ["Tech", "Startups", "Clean"], description: "A sleek, content-focused layout for the modern workforce." },
    { id: "tech-engineer", name: "Tech Engineer", category: "tech", tags: ["Software", "DevOps", "IT"], description: "Optimized for technical depth and infrastructure skills." },
    { id: "creative-designer", name: "Creative Designer", category: "creative", tags: ["Arts", "Marketing", "UI/UX"], description: "Express your portfolio with a visually striking arrangement." },
    { id: "executive-leader", name: "Executive Leader", category: "corporate", tags: ["C-Suite", "Management"], description: "Dignified and structured for high-level executive profiles." },
    { id: "academic-scholar", name: "Academic Scholar", category: "medical", tags: ["Research", "Education", "PhD"], description: "Long-form structure ideal for CVs and research backgrounds." },
    { id: "healthcare-pro", name: "Healthcare Pro", category: "medical", tags: ["Medical", "Nursing", "Pharma"], description: "Focused on clinical experience and certifications." },
    { id: "startup-founder", name: "Startup Founder", category: "tech", tags: ["Product", "Growth", "VC"], description: "Dynamic and bold layout for serial entrepreneurs." },
    { id: "legal-counsel", name: "Legal Counsel", category: "corporate", tags: ["Compliance", "Corporate Law"], description: "Structured for legal precision and case history." },
    { id: "marketing-maven", name: "Marketing Maven", category: "creative", tags: ["Social Media", "PR", "Sales"], description: "Performance-oriented design for growth and PR." },

    // Tech Family
    { id: "software-engineer-niche", name: "Software Engineer", category: "tech", tags: ["Code", "Full Stack", "Algorithmic"], description: "Handcrafted for software developers with deep coding roots." },
    { id: "devops-architect-niche", name: "DevOps Architect", category: "tech", tags: ["Infra", "K8s", "CI/CD"], description: "Focuses on cloud infrastructure and automation mastery." },
    { id: "cyber-security-niche", name: "Cyber Security", category: "tech", tags: ["Security", "SecOps", "Audit"], description: "Professional layout for defense and penetration experts." },
    { id: "data-scientist-niche", name: "Data Scientist", category: "tech", tags: ["AI", "ML", "Analytics"], description: "Bold data visualization focus with academic roots." },
    { id: "ux-ui-designer-niche", name: "UX/UI Designer", category: "tech", tags: ["Design", "HCI", "Product"], description: "Modern, spacing-aware layout for visual specialists." },
    { id: "frontend-developer-niche", name: "Frontend Developer", category: "tech", tags: ["React", "UI", "Web"], description: "Visual-heavy layout for creators of the modern web." },
    { id: "network-administrator-niche", name: "Network Admin", category: "tech", tags: ["Networking", "Cisco", "IT Ops"], description: "Reliable and clear for hardware and grid specialists." },
    { id: "qa-engineer-niche", name: "QA Engineer", category: "tech", tags: ["Testing", "SDET", "Automation"], description: "Precision-focused layout for quality guardians." },
    { id: "it-project-manager-niche", name: "IT Project Manager", category: "tech", tags: ["PMP", "Agile", "Delivery"], description: "Strategic layout for technical delivery leaders." },
    { id: "cloud-architect-niche", name: "Cloud Architect", category: "tech", tags: ["AWS", "Azure", "Cloud"], description: "Architecture-first design for distributed system experts." },
    { id: "database-administrator-niche", name: "DBA Specialist", category: "tech", tags: ["SQL", "NoSQL", "DB"], description: "Structured for high-integrity data professionals." },
    { id: "mobile-developer-niche", name: "Mobile Developer", category: "tech", tags: ["iOS", "Android", "Swift"], description: "App-centric design for mobile ecosystem creators." },

    // Corporate Family
    { id: "financial-analyst-niche", name: "Financial Analyst", category: "corporate", tags: ["Valuation", "M&A", "Finance"], description: "Precision-driven for high-stakes financial environments." },
    { id: "hr-manager-niche", name: "HR Manager", category: "corporate", tags: ["People", "Talent", "Culture"], description: "Warm and professional for people operations leaders." },
    { id: "product-manager-niche", name: "Product Manager", category: "corporate", tags: ["Strategy", "Roadmap", "PM"], description: "Impact-focused for the visionaries of product development." },
    { id: "operations-director-niche", name: "Ops Director", category: "corporate", tags: ["Efficiency", "Scale", "Directing"], description: "Strong and stable for operational excellence." },
    { id: "business-analyst-niche", name: "Business Analyst", category: "corporate", tags: ["Insights", "SQL", "Strategy"], description: "Clear and data-forward for bridging tech and business." },
    { id: "marketing-director-niche", name: "Marketing Director", category: "corporate", tags: ["Brand", "Growth", "CMO"], description: "Bold and authoritative for marketing leadership." },
    { id: "sales-executive-niche", name: "Sales Executive", category: "corporate", tags: ["Quotas", "Sales", "B2B"], description: "Results-focused for high-performing sales pros." },
    { id: "project-coordinator-niche", name: "Project Coordinator", category: "corporate", tags: ["Tracking", "Support", "Admin"], description: "Organized and clear for coordination specialists." },
    { id: "account-manager-niche", name: "Account Manager", category: "corporate", tags: ["CSM", "Retention", "Success"], description: "Relationship-first design for customer success leaders." },
    { id: "supply-chain-manager-niche", name: "SCM Specialist", category: "corporate", tags: ["Logistics", "SAP", "Planning"], description: "Pipeline-focused for global supply chain experts." },
    { id: "legal-consultant-niche", name: "Legal Consultant", category: "corporate", tags: ["Compliance", "Policy", "Law"], description: "Document-style layout for legal professionals." },
    { id: "risk-manager-niche", name: "Risk Manager", category: "corporate", tags: ["Audit", "Finance", "Safety"], description: "High-dependability layout for risk analysts." },

    // Medical Family
    { id: "doctor-niche", name: "Physician", category: "medical", tags: ["Clinical", "M.D.", "Residency"], description: "Classic medical CV for licensed doctors." },
    { id: "nurse-practitioner-niche", name: "Nurse Practitioner", category: "medical", tags: ["Care", "Health", "Clinical"], description: "Patient-centered layout for advanced practitioners." },
    { id: "medical-researcher-niche", name: "Medical Researcher", category: "medical", tags: ["Lab", "PhD", "Trials"], description: "Academic-heavy for medical science experts." },
    { id: "pharmacist-niche", name: "Pharmacist", category: "medical", tags: ["Drugs", "Retail", "Hospital"], description: "Regulated and clear for pharmacy professionals." },
    { id: "physiotherapist-niche", name: "Physiotherapist", category: "medical", tags: ["Rehab", "Sports", "Health"], description: "Active and specialized for mobility experts." },
    { id: "surgeon-niche", name: "Surgeon", category: "medical", tags: ["OR", "Precision", "Surgical"], description: "High-stakes layout for specialists in the OR." },
    { id: "radiologist-niche", name: "Radiologist", category: "medical", tags: ["Imaging", "Diagnostic", "Digital"], description: "Digital-forward for medical imaging specialists." },
    { id: "hospital-administrator-niche", name: "Hospital Admin", category: "medical", tags: ["Ops", "Clinical", "Policy"], description: "Institutional and authoritative for health admins." },

    // Creative Family
    { id: "graphic-designer-niche", name: "Graphic Designer", category: "creative", tags: ["Typography", "Portfolio", "Adobe"], description: "Visual focus for brand and layout experts." },
    { id: "art-director-niche", name: "Art Director", category: "creative", tags: ["Creative", "Agency", "Directing"], description: "Visionary layout for agency and house leaders." },
    { id: "content-creator-niche", name: "Content Creator", category: "creative", tags: ["Social", "YouTube", "Viral"], description: "Modern and bold for digital media personalities." },
    { id: "copywriter-niche", name: "Copywriter", category: "creative", tags: ["Blogger", "Ads", "Creative"], description: "Typographic-first design for bridge of words." },
    { id: "fashion-designer-niche", name: "Fashion Designer", category: "creative", tags: ["Trend", "Apparel", "Stylist"], description: "Avant-garde flair for the fashion industry." },
    { id: "interior-designer-niche", name: "Interior Designer", category: "creative", tags: ["Space", "3D", "Interiors"], description: "Spatially aware layout for environment creators." },
    { id: "photographer-niche", name: "Photographer", category: "creative", tags: ["Visual", "Shooting", "Studio"], description: "Image-conscious layout for lens specialists." },
    { id: "video-editor-niche", name: "Video Editor", category: "creative", tags: ["NLE", "Motion", "Cut"], description: "Timeline-inspired structure for post-pro experts." },
    { id: "architect-niche", name: "Architect", category: "creative", tags: ["Building", "Revit", "Urban"], description: "Structured and geometric for space designers." },
    { id: "social-media-manager-niche", name: "Social Strategy", category: "creative", tags: ["Growth", "Social", "Trends"], description: "Dynamic and visual for modern brand voices." },

    // Trades Family
    { id: "real-estate-agent-niche", name: "Real Estate Broker", category: "trades", tags: ["Sales", "Network", "Broker"], description: "Personable and polished for sales pros." },
    { id: "chef-niche", name: "Executive Chef", category: "trades", tags: ["Food", "Michelin", "Cooking"], description: "Tasteful and elegant for culinary leaders." },
    { id: "fitness-trainer-niche", name: "Personal Trainer", category: "trades", tags: ["Health", "Sports", "Coaching"], description: "Energetic and impact-focused for health pros." },
    { id: "hair-stylist-niche", name: "Master Stylist", category: "trades", tags: ["Salon", "Style", "Fashion"], description: "Chic and modern for the beauty industry." },
    { id: "mechanic-niche", name: "Auto Mechanic", category: "trades", tags: ["Fixing", "Diagnostics", "Engineering"], description: "Reliable and clear for technical machine specialists." },
    { id: "electrician-niche", name: "Electrician", category: "trades", tags: ["Grid", "Safety", "Industrial"], description: "Clear and dependable for trade experts." },
    { id: "plumber-niche", name: "Plumbing Specialist", category: "trades", tags: ["Ops", "Trades", "Maintenance"], description: "Clean and practical for maintenance pros." },
    { id: "logistics-coordinator-niche", name: "Logistics Pro", category: "trades", tags: ["Ships", "Supply", "Freight"], description: "Movement-focused for coordination experts." },
];
