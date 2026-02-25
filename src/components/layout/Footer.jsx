"use client";

import Link from "next/link";
import { BrandLogo } from "../ui/BrandLogo";
import { Twitter, Github, Linkedin } from "lucide-react";

const FOOTER_LINKS = {
    Product: [
        { name: "Features", href: "/#features" },
        { name: "Templates", href: "/templates" },
        { name: "AI Builder", href: "/builder" },
        { name: "Pricing", href: "/#pricing" },
    ],
    Company: [
        { name: "About", href: "/about" },
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "Contact", href: "/contact" },
    ],
    Resources: [
        { name: "Career Blog", href: "/blog" },
        { name: "Resume Tips", href: "/resources/tips" },
        { name: "Resume Examples", href: "/resources/examples" },
        { name: "ATS Guide", href: "/resources/ats-guide" },
    ],
};

export const Footer = () => {
    return (
        <footer className="bg-white border-t border-border pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Col */}
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <BrandLogo />
                        </Link>
                        <p className="text-muted-foreground max-w-sm leading-relaxed">
                            Empowering job seekers with AI-driven, high-quality, ATS-optimized resumes that stand out and get results in minutes.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="https://twitter.com/yourcv" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-border rounded-2xl hover:border-primary/30 hover:bg-primary/5 transition-all group">
                                <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                            </a>
                            <a href="https://github.com/yourcv" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-border rounded-2xl hover:border-primary/30 hover:bg-primary/5 transition-all group">
                                <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                            </a>
                            <a href="https://linkedin.com/company/yourcv" target="_blank" rel="noopener noreferrer" className="p-3 bg-white border border-border rounded-2xl hover:border-primary/30 hover:bg-primary/5 transition-all group">
                                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                            </a>
                        </div>
                    </div>

                    {/* Links Cols */}
                    {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                        <div key={category} className="space-y-6">
                            <h4 className="font-heading font-semibold text-foreground">{category}</h4>
                            <ul className="space-y-4">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>© {new Date().getFullYear()} YourCV. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
