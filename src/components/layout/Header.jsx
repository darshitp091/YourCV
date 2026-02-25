"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { BrandLogo } from "../ui/BrandLogo";
import { Button } from "../ui/Button";

const NAV_LINKS = [
    { name: "Features", href: "/#features" },
    { name: "Templates", href: "/templates" },
    { name: "Pricing", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
];

export const Header = () => {
    const { user } = useAuth();

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <BrandLogo />
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors cursor-pointer"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                {/* CTAs */}
                <div className="flex items-center gap-4">
                    {user ? (
                        <Link href="/dashboard">
                            <Button size="sm" variant="outline" className="border-primary/20 text-primary">
                                Dashboard
                            </Button>
                        </Link>
                    ) : (
                        <Link href="/signup">
                            <Button size="md" className="px-8 shadow-lg shadow-primary/20">Get Started</Button>
                        </Link>
                    )}
                </div>
            </div>
        </motion.header>
    );
};
