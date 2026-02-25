"use client";

import { motion } from "framer-motion";
import { getTemplateComponent } from "@/lib/template-registry";

const MOCK_DATA_VARIANTS = [
    // Core Templates
    {
        id: "classic-professional",
        resumeData: {
            personal: { fullName: "Jonathan Carter", jobTitle: "Senior Financial Analyst" },
            contact: { email: "j.carter@finance.com", phone: "+1 212 555 0198", location: "New York, NY" },
            summary: "Detail-oriented Financial Analyst with 10+ years of experience in corporate valuation and strategic planning.",
            experience: [{ id: "1", role: "VP of Finance", company: "Goldman Sachs", startDate: "2018", endDate: "Present", description: "Managing $500M+ portfolio..." }],
            education: [{ id: "1", degree: "MBA in Finance", school: "Wharton School", startDate: "2010", endDate: "2012" }],
            skills: { technical: ["Valuation", "M&A", "Python"], soft: ["Leadership", "Strategy"], tools: ["Bloomberg", "Excel"] },
        }
    },
    {
        id: "tech-engineer",
        resumeData: {
            personal: { fullName: "Sarah Jenkins", jobTitle: "Lead DevOps Engineer" },
            contact: { email: "sarah.j@cloud.io", phone: "+1 415 555 0122", location: "San Francisco, CA" },
            summary: "Infrastructure architect specializing in Kubernetes, AWS, and automated CI/CD pipelines.",
            experience: [{ id: "1", role: "Principal Engineer", company: "Netflix", startDate: "2020", endDate: "Present", description: "Scaling global traffic..." }],
            education: [{ id: "1", degree: "B.S. Computer Science", school: "UC Berkeley", startDate: "2012", endDate: "2016" }],
            skills: { technical: ["AWS", "K8s", "Go"], soft: ["Collaboration"], tools: ["Docker", "Terraform"] },
        }
    },
    {
        id: "creative-designer",
        resumeData: {
            personal: { fullName: "Elena Rossi", jobTitle: "Art Director" },
            contact: { email: "elena@studio.design", phone: "+39 02 555 0123", location: "Milan, Italy" },
            summary: "Award-winning designer with a focus on minimalist aesthetics and tactile digital experiences.",
            experience: [{ id: "1", role: "Senior Designer", company: "Vogue", startDate: "2019", endDate: "Present", description: "Redefining digital fashion..." }],
            education: [{ id: "1", degree: "M.A. Visual Arts", school: "IED Milan", startDate: "2014", endDate: "2016" }],
            skills: { technical: ["Typography", "Layout"], soft: ["Vision"], tools: ["Figma", "After Effects"] },
        }
    },
    {
        id: "executive-leader",
        resumeData: {
            personal: { fullName: "Marcus Thorne", jobTitle: "Chief Operations Officer" },
            contact: { email: "m.thorne@global.com", phone: "+44 20 7946 0123", location: "London, UK" },
            summary: "Strategic leader focused on driving operational excellence and sustainable growth across EMEA markets.",
            experience: [{ id: "1", role: "COO", company: "Global Logistics", startDate: "2021", endDate: "Present", description: "Optimizing supply chains..." }],
            education: [{ id: "1", degree: "M.S. Management", school: "LBS", startDate: "2008", endDate: "2010" }],
            skills: { technical: ["Operations", "Scale"], soft: ["Diplomacy"], tools: ["SAP", "PowerBI"] },
        }
    },
    {
        id: "academic-scholar",
        resumeData: {
            personal: { fullName: "Dr. Alicia Wu", jobTitle: "Research Scientist" },
            contact: { email: "alicia.wu@mit.edu", phone: "+1 617 555 0199", location: "Cambridge, MA" },
            summary: "Published researcher in Neural Networks and Human-Computer Interaction.",
            experience: [{ id: "1", role: "Postdoctoral Fellow", company: "MIT Media Lab", startDate: "2022", endDate: "Present", description: "Advancing AI ethics..." }],
            education: [{ id: "1", degree: "PhD in Computer Science", school: "Stanford", startDate: "2017", endDate: "2022" }],
            skills: { technical: ["PyTorch", "LaTeX"], soft: ["Teaching"], tools: ["Jupyter", "Git"] },
        }
    },
    // Tech Niches
    {
        id: "software-engineer-niche",
        resumeData: {
            personal: { fullName: "Alex River", jobTitle: "Full Stack Developer" },
            contact: { email: "alex.r@dev.com", phone: "+1 555 0101", location: "Austin, TX" },
            summary: "Modern web developer passionate about React, Node.js, and scalable cloud architectures.",
            experience: [{ id: "1", role: "Lead Dev", company: "Vercel", startDate: "2021", endDate: "Present", description: "Building the next web..." }],
            education: [{ id: "1", degree: "CS Fundamentals", school: "UT Austin", startDate: "2016", endDate: "2020" }],
            skills: { technical: ["React", "Next.js", "Node"], soft: ["Agile"], tools: ["VS Code", "Vercel"] },
        }
    },
    {
        id: "data-scientist-niche",
        resumeData: {
            personal: { fullName: "Li Wei", jobTitle: "Senior AI Researcher" },
            contact: { email: "li.wei@data.ai", phone: "+1 555 0202", location: "Seattle, WA" },
            summary: "Transforming complex datasets into actionable business intelligence through deep learning.",
            experience: [{ id: "1", role: "Data Scientist", company: "OpenAI", startDate: "2020", endDate: "Present", description: "Training large language models..." }],
            education: [{ id: "1", degree: "PhD Stats", school: "UW", startDate: "2015", endDate: "2019" }],
            skills: { technical: ["Python", "Transformers", "SQL"], soft: ["Insights"], tools: ["PyTorch", "HuggingFace"] },
        }
    },
    {
        id: "ux-ui-designer-niche",
        resumeData: {
            personal: { fullName: "Sophie Martin", jobTitle: "Product Designer" },
            contact: { email: "sophie@ux.design", phone: "+1 555 0303", location: "Portland, OR" },
            summary: "Creating intuitive, user-centric interfaces that bridge the gap between human and machine.",
            experience: [{ id: "1", role: "Senior UX", company: "Airbnb", startDate: "2019", endDate: "Present", description: "Designing travel experiences..." }],
            education: [{ id: "1", degree: "HCI Design", school: "RISD", startDate: "2014", endDate: "2018" }],
            skills: { technical: ["Wireframing", "Prototyping"], soft: ["Empathy"], tools: ["Figma", "Webflow"] },
        }
    },
    // Corporate Niches
    {
        id: "product-manager-niche",
        resumeData: {
            personal: { fullName: "David Kim", jobTitle: "Technical Product Manager" },
            contact: { email: "david.kim@pm.com", phone: "+1 555 0404", location: "Silicon Valley, CA" },
            summary: "Shipping high-impact features and managing complex product lifecycles for SaaS enterprises.",
            experience: [{ id: "1", role: "Sr. PM", company: "Slack", startDate: "2021", endDate: "Present", description: "Leading productivity tools..." }],
            education: [{ id: "1", degree: "MBA", school: "Stanford GSB", startDate: "2017", endDate: "2019" }],
            skills: { technical: ["Product Strategy", "Roadmapping"], soft: ["Leadership"], tools: ["Jira", "Mixpanel"] },
        }
    },
    {
        id: "financial-analyst-niche",
        resumeData: {
            personal: { fullName: "Emily Chen", jobTitle: "Investment Associate" },
            contact: { email: "emily@capital.com", phone: "+1 555 0505", location: "Chicago, IL" },
            summary: "Specializing in venture capital and emerging tech markets with a focus on FinTech.",
            experience: [{ id: "1", role: "Associate", company: "Andreessen Horowitz", startDate: "2021", endDate: "Present", description: "Evaluating Series A startups..." }],
            education: [{ id: "1", degree: "B.A. Economics", school: "UChicago", startDate: "2015", endDate: "2019" }],
            skills: { technical: ["Modeling", "Due Diligence"], soft: ["Analysis"], tools: ["CapIQ", "Excel"] },
        }
    },
    {
        id: "hr-manager-niche",
        resumeData: {
            personal: { fullName: "Maria Garcia", jobTitle: "People Operations Lead" },
            contact: { email: "maria.g@hr.com", phone: "+1 555 0606", location: "Miami, FL" },
            summary: "Building diverse, high-performing teams and fostering inclusive workplace cultures.",
            experience: [{ id: "1", role: "HR Lead", company: "HubSpot", startDate: "2020", endDate: "Present", description: "Scaling remote culture..." }],
            education: [{ id: "1", degree: "M.S. HR Management", school: "Cornell", startDate: "2012", endDate: "2014" }],
            skills: { technical: ["Talent Acquisition", "DE&I"], soft: ["Mediation"], tools: ["Workday", "Lattice"] },
        }
    },
    // Medical Niches
    {
        id: "doctor-niche",
        resumeData: {
            personal: { fullName: "Dr. James Wilson", jobTitle: "Chief Medical Officer" },
            contact: { email: "j.wilson@health.org", phone: "+1 555 0707", location: "Houston, TX" },
            summary: "Expert physician with 15+ years of clinical excellence and hospital management.",
            experience: [{ id: "1", role: "CMO", company: "Mayo Clinic", startDate: "2018", endDate: "Present", description: "Directing clinical ops..." }],
            education: [{ id: "1", degree: "M.D.", school: "Johns Hopkins", startDate: "2004", endDate: "2008" }],
            skills: { technical: ["Clinical Research", "Internal Med"], soft: ["Patient Care"], tools: ["Epic", "EHR"] },
        }
    },
    {
        id: "radiologist-niche",
        resumeData: {
            personal: { fullName: "Dr. Anya Volkov", jobTitle: "Diagnostic Radiologist" },
            contact: { email: "anya.v@imaging.com", phone: "+1 555 0808", location: "Denver, CO" },
            summary: "Specializing in neuroradiology and high-precision diagnostic imaging interpretation.",
            experience: [{ id: "1", role: "Radiologist", company: "Cedars-Sinai", startDate: "2019", endDate: "Present", description: "Interpreting MRI/CT scans..." }],
            education: [{ id: "1", degree: "Residency", school: "Harvard Med", startDate: "2014", endDate: "2018" }],
            skills: { technical: ["Neuroradiology", "PACS"], soft: ["Precision"], tools: ["Synapse", "GE View"] },
        }
    },
    {
        id: "nurse-practitioner-niche",
        resumeData: {
            personal: { fullName: "Sarah Miller", jobTitle: "Family Nurse Practitioner" },
            contact: { email: "s.miller@med.com", phone: "+1 555 0909", location: "Nashville, TN" },
            summary: "Compassionate primary care provider focused on holistic family health and preventive medicine.",
            experience: [{ id: "1", role: "Advanced NP", company: "Vanderbilt Health", startDate: "2020", endDate: "Present", description: "Treating primary care patients..." }],
            education: [{ id: "1", degree: "Master of Nursing", school: "Duke", startDate: "2016", endDate: "2018" }],
            skills: { technical: ["Diagnostics", "Pharmacology"], soft: ["Empathy"], tools: ["Athenahealth", "EHR"] },
        }
    },
    // Creative Niches
    {
        id: "graphic-designer-niche",
        resumeData: {
            personal: { fullName: "Leo Vance", jobTitle: "Senior Brand Designer" },
            contact: { email: "leo@vance.design", phone: "+1 555 1010", location: "Brooklyn, NY" },
            summary: "Defining visual identities for global brands through bold typography and color theory.",
            experience: [{ id: "1", role: "Lead Designer", company: "Pentagram", startDate: "2021", endDate: "Present", description: "Rebranding tech giants..." }],
            education: [{ id: "1", degree: "BFA Design", school: "Pratt", startDate: "2014", endDate: "2018" }],
            skills: { technical: ["Branding", "Illustrations"], soft: ["Creativity"], tools: ["Illustrator", "InDesign"] },
        }
    },
    {
        id: "art-director-niche",
        resumeData: {
            personal: { fullName: "Nina Choi", jobTitle: "Creative Art Director" },
            contact: { email: "nina.c@agency.com", phone: "+1 555 1111", location: "Los Angeles, CA" },
            summary: "Orchestrating high-impact visual campaigns for fashion, music, and digital media.",
            experience: [{ id: "1", role: "Art Director", company: "Wieden+Kennedy", startDate: "2019", endDate: "Present", description: "Global campaign lead..." }],
            education: [{ id: "1", degree: "Visual Arts", school: "ArtCenter", startDate: "2010", endDate: "2014" }],
            skills: { technical: ["Art Direction", "Film Pros"], soft: ["Leadership"], tools: ["Cinema 4D", "Premiere"] },
        }
    },
    {
        id: "architect-niche",
        resumeData: {
            personal: { fullName: "Marco Rossi", jobTitle: "Principal Architect" },
            contact: { email: "marco@rossi.arch", phone: "+39 555 1212", location: "Rome, Italy" },
            summary: "Sustainable urban design and high-end residential architecture with a neoclassical edge.",
            experience: [{ id: "1", role: "Architect", company: "Zaha Hadid Architects", startDate: "2018", endDate: "Present", description: "Leading futuristic projects..." }],
            education: [{ id: "1", degree: "M.Arch", school: "Politecnico di Milano", startDate: "2012", endDate: "2014" }],
            skills: { technical: ["Urban Planning", "Sustainability"], soft: ["Drafting"], tools: ["Revit", "AutoCAD"] },
        }
    },
    {
        id: "copywriter-niche",
        resumeData: {
            personal: { fullName: "Julian Gray", jobTitle: "Senior Copywriter" },
            contact: { email: "julian@words.com", phone: "+1 555 1313", location: "London, UK" },
            summary: "Narrative strategist crafting compelling brand stories that drive customer conversion.",
            experience: [{ id: "1", role: "Sr Copywriter", company: "Droga5", startDate: "2020", endDate: "Present", description: "Writing punchy headlines..." }],
            education: [{ id: "1", degree: "English Literature", school: "Oxford", startDate: "2012", endDate: "2015" }],
            skills: { technical: ["Content Strategy", "SEO"], soft: ["Writing"], tools: ["Grammarly", "Hemingway"] },
        }
    },
    {
        id: "social-media-manager-niche",
        resumeData: {
            personal: { fullName: "Ava Brooks", jobTitle: "Social Strategy Head" },
            contact: { email: "ava@vibe.agency", phone: "+1 555 1414", location: "Toronto, Canada" },
            summary: "Scaling organic brand growth through viral content and community engagement.",
            experience: [{ id: "1", role: "Social Lead", company: "TikTok", startDate: "2021", endDate: "Present", description: "Managing creator partnerships..." }],
            education: [{ id: "1", degree: "Digital Marketing", school: "UofT", startDate: "2016", endDate: "2020" }],
            skills: { technical: ["Growth Hacking", "Analytics"], soft: ["Trends"], tools: ["Hootsuite", "Canva"] },
        }
    },
    // Trades Niches
    {
        id: "real-estate-agent-niche",
        resumeData: {
            personal: { fullName: "Chris Morgan", jobTitle: "Luxury Estate Broker" },
            contact: { email: "chris@prestige.com", phone: "+1 555 1515", location: "Beverly Hills, CA" },
            summary: "Closing multi-million dollar deals with elite negotiation and localized market insights.",
            experience: [{ id: "1", role: "Broker", company: "The Agency", startDate: "2017", endDate: "Present", description: "Selling high-end estates..." }],
            education: [{ id: "1", degree: "RE License", school: "Kaplan", startDate: "2016", endDate: "2016" }],
            skills: { technical: ["Negotiation", "Valuation"], soft: ["Sales"], tools: ["Zillow", "MLS"] },
        }
    },
    {
        id: "chef-niche",
        resumeData: {
            personal: { fullName: "Chef Andre Laroche", jobTitle: "Executive Head Chef" },
            contact: { email: "andre@bistro.com", phone: "+33 555 1616", location: "Paris, France" },
            summary: "Michelin-starred culinary artist redefining contemporary French cuisine with local flavors.",
            experience: [{ id: "1", role: "Exec Chef", company: "Le Meurice", startDate: "2015", endDate: "Present", description: "Directing 3-star kitchen..." }],
            education: [{ id: "1", degree: "Culinary Arts", school: "Ferrandi Paris", startDate: "2008", endDate: "2011" }],
            skills: { technical: ["Menu Design", "Ops"], soft: ["Flavor"], tools: ["ThermoMix", "Sous-Vide"] },
        }
    },
    {
        id: "fitness-trainer-niche",
        resumeData: {
            personal: { fullName: "Jax 'The Beast' Strong", jobTitle: "Elite Performance Coach" },
            contact: { email: "jax@power.fit", phone: "+1 555 1717", location: "Las Vegas, NV" },
            summary: "Transformation specialist for professional athletes and high-performance individuals.",
            experience: [{ id: "1", role: "Head Trainer", company: "Equinox", startDate: "2019", endDate: "Present", description: "Coaching pro athletes..." }],
            education: [{ id: "1", degree: "Kinesiology", school: "UNLV", startDate: "2014", endDate: "2018" }],
            skills: { technical: ["Biomechanics", "Nutrition"], soft: ["Drive"], tools: ["MyFitnessPal", "Trainerize"] },
        }
    },
    {
        id: "electrician-niche",
        resumeData: {
            personal: { fullName: "Robert Sparks", jobTitle: "Master Electrician" },
            contact: { email: "robert@spark.co", phone: "+1 555 1818", location: "Phoenix, AZ" },
            summary: "Fault-tolerant electrical systems design and industrial grid infrastructure management.",
            experience: [{ id: "1", role: "Lead Electrician", company: "Tesla Energy", startDate: "2018", endDate: "Present", description: "Grid-scale solar ops..." }],
            education: [{ id: "1", degree: "Apprenticeship", school: "IBEW", startDate: "2010", endDate: "2014" }],
            skills: { technical: ["Diagnostics", "Grid Ops"], soft: ["Safety"], tools: ["Fluke", "Multimeter"] },
        }
    },
    {
        id: "logistics-coordinator-niche",
        resumeData: {
            personal: { fullName: "Sita Sharma", jobTitle: "Global Logistics Director" },
            contact: { email: "sita@supply.com", phone: "+91 555 1919", location: "Mumbai, India" },
            summary: "Optimizing global shipping pipelines and multi-modal freight operations for mass scale.",
            experience: [{ id: "1", role: "Logistics Lead", company: "Amazon", startDate: "2019", endDate: "Present", description: "Reducing last-mile costs..." }],
            education: [{ id: "1", degree: "SCM Degree", school: "IIM", startDate: "2015", endDate: "2017" }],
            skills: { technical: ["Optimization", "Supply Chain"], soft: ["Agility"], tools: ["Oracle SCM", "Tableau"] },
        }
    },
    // Final Selection to reach 30
    {
        id: "startup-founder",
        resumeData: {
            personal: { fullName: "Tim Draper Jr.", jobTitle: "Serial Entrepreneur" },
            contact: { email: "tim@venture.com", phone: "+1 555 2020", location: "Palo Alto, CA" },
            summary: "Building and scaling zero-to-one startups with a focus on disruptive AI technologies.",
            experience: [{ id: "1", role: "Founder", company: "NewCo AI", startDate: "2022", endDate: "Present", description: "Raising Seed/Series A..." }],
            education: [{ id: "1", degree: "Drought Dropout", school: "Stanford", startDate: "2018", endDate: "2020" }],
            skills: { technical: ["Growth", "Fundraising"], soft: ["Vision"], tools: ["Pitch", "Notion"] },
        }
    },
    {
        id: "marketing-maven",
        resumeData: {
            personal: { fullName: "Chloe Bloom", jobTitle: "Head of Growth" },
            contact: { email: "chloe@growth.com", phone: "+1 555 2121", location: "NYC, NY" },
            summary: "Master of retention loops and performance marketing for hyper-growth consumer apps.",
            experience: [{ id: "1", role: "Growth Lead", company: "Duolingo", startDate: "2021", endDate: "Present", description: "Optimizing LTV/CAC..." }],
            education: [{ id: "1", degree: "Marketing", school: "NYU Stern", startDate: "2015", endDate: "2019" }],
            skills: { technical: ["Paid Social", "Funnel Ops"], soft: ["Data Driven"], tools: ["Amplitude", "Meta Ads"] },
        }
    },
    {
        id: "legal-counsel",
        resumeData: {
            personal: { fullName: "Harvey Specter II", jobTitle: "Senior Corporate Counsel" },
            contact: { email: "harvey@law.com", phone: "+1 555 2222", location: "New York, NY" },
            summary: "Handling complex M&A and regulatory compliance for Fortune 500 tech firms.",
            experience: [{ id: "1", role: "Partner", company: "Pearson Hardman", startDate: "2015", endDate: "Present", description: "Winning M&A deals..." }],
            education: [{ id: "1", degree: "J.D.", school: "Harvard Law", startDate: "2008", endDate: "2011" }],
            skills: { technical: ["Corporate Law", "Litigation"], soft: ["Persuasion"], tools: ["LexisNexis", "Westlaw"] },
        }
    },
    {
        id: "healthcare-pro",
        resumeData: {
            personal: { fullName: "Dr. Lisa Chan", jobTitle: "Clinical Director" },
            contact: { email: "lisa@care.org", phone: "+1 555 2323", location: "Seattle, WA" },
            summary: "Pioneering telehealth initiatives and patient-centric care models in urban clinics.",
            experience: [{ id: "1", role: "Director", company: "Planned Parenthood", startDate: "2020", endDate: "Present", description: "Modernizing care delivery..." }],
            education: [{ id: "1", degree: "Master Clinical", school: "Yale", startDate: "2014", endDate: "2016" }],
            skills: { technical: ["Telehealth", "Policy"], soft: ["Patient Advocacy"], tools: ["Teladoc", "Salesforce Health"] },
        }
    },
    {
        id: "qa-engineer-niche",
        resumeData: {
            personal: { fullName: "Omar Khan", jobTitle: "Lead SDET" },
            contact: { email: "omar@test.it", phone: "+1 555 2424", location: "Austin, TX" },
            summary: "Building bulletproof automated test suites and ensuring zero-defect deployments.",
            experience: [{ id: "1", role: "QA Lead", company: "Tesla", startDate: "2021", endDate: "Present", description: "Auto-pilot test systems..." }],
            education: [{ id: "1", degree: "B.S. Eng", school: "Texas A&M", startDate: "2016", endDate: "2020" }],
            skills: { technical: ["Selenium", "Cypress", "Pytest"], soft: ["Attention"], tools: ["Jenkins", "BrowserStack"] },
        }
    },
    {
        id: "it-project-manager-niche",
        resumeData: {
            personal: { fullName: "Becca Thorne", jobTitle: "Senior IT Program Manager" },
            contact: { email: "becca@it.pro", phone: "+1 555 2525", location: "Chicago, IL" },
            summary: "Managing enterprise-wide migration projects and high-value IT infrastructure upgrades.",
            experience: [{ id: "1", role: "Program Manager", company: "IBM", startDate: "2018", endDate: "Present", description: "Directing cloud shift..." }],
            education: [{ id: "1", degree: "PMP Cert", school: "PMI", startDate: "2017", endDate: "2017" }],
            skills: { technical: ["SDLC", "Governance"], soft: ["Communication"], tools: ["Azure", "Jira"] },
        }
    },
];

const Row = ({ items, direction = "left", speed = 100 }) => {
    return (
        <div className="relative flex overflow-hidden py-10">
            <motion.div
                animate={{ x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"] }}
                transition={{
                    duration: speed,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="flex gap-12 whitespace-nowrap px-6"
            >
                {[...items, ...items].map((item, idx) => {
                    const Template = getTemplateComponent(item.id);
                    const enrichedData = {
                        projects: [],
                        additional: {},
                        ...item.resumeData,
                        skills: {
                            technical: [],
                            soft: [],
                            tools: [],
                            ...(item.resumeData.skills || {})
                        }
                    };
                    return (
                        <div
                            key={`${item.id}-${idx}`}
                            className="inline-block w-[320px] flex-shrink-0 group/card"
                        >
                            {/* Card with Resume Aspect Ratio (Paper feeling) */}
                            <div className="relative h-[440px] w-full shadow-2xl rounded-2xl overflow-hidden border border-border/50 bg-white group-hover/card:scale-[1.05] group-hover/card:shadow-primary/20 transition-all duration-500">
                                {/* Scaled Template Container */}
                                <div className="absolute top-0 left-0 w-[816px] h-[1056px] origin-top-left scale-[0.39] bg-white pointer-events-none">
                                    <Template data={enrichedData} />
                                </div>

                                {/* Glass Overlay on Hover */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                                    <p className="text-white font-black text-[10px] uppercase tracking-[0.2em] mb-1">
                                        {item.id.replace(/-/g, ' ')}
                                    </p>
                                    <p className="text-white/80 text-[9px] font-bold leading-relaxed line-clamp-2">
                                        Handcrafted for {item.resumeData.personal.jobTitle} professionals looking for high impact.
                                    </p>
                                </div>
                            </div>

                            {/* Refined Label Section */}
                            <div className="mt-6 text-center space-y-1">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-900">
                                    {item.id.replace(/-niche/g, '').replace(/-/g, ' ')}
                                </h4>
                                <p className="text-[9px] font-bold text-muted-foreground italic">
                                    {item.resumeData.personal.jobTitle}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export const TemplateShowcase = () => {
    // Split 30 items into 3 rows
    const row1 = MOCK_DATA_VARIANTS.slice(0, 10);
    const row2 = MOCK_DATA_VARIANTS.slice(10, 20);
    const row3 = MOCK_DATA_VARIANTS.slice(20, 30);

    return (
        <section id="templates" className="py-24 bg-[#fafafa] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/5 border border-primary/10"
                >
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Industry Specific Design</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-6xl font-black font-heading tracking-tight mb-6"
                >
                    Masterfully Crafted <span className="text-gradient">Templates.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium"
                >
                    50+ specialized layouts tailored for every career path. From high-stakes finance to avant-garde creative roles.
                </motion.p>
            </div>

            {/* Marquee Rows */}
            <div className="relative space-y-4">
                <Row items={row1} direction="left" speed={120} />
                <Row items={row2} direction="right" speed={140} />
                <Row items={row3} direction="left" speed={130} />

                {/* Wider Gradient Masks for premium fade */}
                <div className="absolute top-0 left-0 w-80 h-full bg-gradient-to-r from-[#fafafa] via-[#fafafa]/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-[#fafafa] via-[#fafafa]/80 to-transparent z-20 pointer-events-none" />
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center justify-center gap-12 border-t border-zinc-200 pt-12"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-zinc-900 leading-none">50+</span>
                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest mt-2">Niche Layouts</span>
                    </div>
                    <div className="w-px h-12 bg-zinc-200" />
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-zinc-900 leading-none">100%</span>
                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest mt-2">ATS Optimized</span>
                    </div>
                    <div className="w-px h-12 bg-zinc-200" />
                    <div className="flex flex-col items-center">
                        <span className="text-3xl font-black text-zinc-900 leading-none">20+</span>
                        <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest mt-2">Industries</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
