import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { ThreeBackground } from "./ThreeBackground";
import { LucideChevronRight, LucideRocket, LucideCheckCircle, LucideBot } from "lucide-react";
import { MockResumeVisual } from "./MockResumeVisual";
import Link from "next/link";
import gsap from "gsap";

export const HeroSection = () => {
    const heroRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".reveal-text", {
                y: 80,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power4.out",
                delay: 0.4
            });
        }, heroRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
            <ThreeBackground />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Text Content */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl glass border border-primary/20 bg-primary/5 text-primary text-xs font-black uppercase tracking-[0.2em] reveal-text">
                        <div className="relative">
                            <LucideBot className="w-5 h-5 animate-pulse" />
                            <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white animate-ping" />
                        </div>
                        <span>Neural_Enhancement_Active</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black font-heading leading-[1.1] tracking-tight reveal-text">
                        Build your <br />
                        <span className="text-gradient">Dream Career</span><br />
                        with AI precision.
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed reveal-text">
                        Stunning templates, ATS-optimized content, and LaTeX-perfect precision.
                        YourCV turns your experience into opportunities in seconds.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 reveal-text">
                        <div className="flex flex-col gap-2">
                            <Link href="/signup">
                                <Button size="lg" className="group px-8 py-7 text-lg rounded-2xl shadow-xl shadow-primary/20 w-full sm:w-auto h-[76px]">
                                    Get 5 Free Resumes
                                    <LucideChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <p className="text-[10px] text-center lg:text-left font-bold text-emerald-600 uppercase tracking-widest flex items-center justify-center lg:justify-start gap-1">
                                <LucideCheckCircle className="w-3 h-3" />
                                100% Watermark-Free PDF
                            </p>
                        </div>
                        <Link href="/templates" className="mb-[18px]">
                            <Button variant="outline" size="lg" className="px-8 py-7 text-lg rounded-2xl h-[76px] w-full sm:w-auto">
                                View Templates
                            </Button>
                        </Link>
                    </div>

                    {/* Stats/Badges */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-8 reveal-text">
                        <div className="flex -space-x-4">
                            {[
                                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=100&auto=format&fit=crop"
                            ].map((src, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                                    className="w-12 h-12 rounded-full border-4 border-[#FAF7F2] overflow-hidden shadow-sm cursor-pointer transition-all"
                                >
                                    <img src={src} alt={`User ${i + 1}`} className="w-full h-full object-cover" />
                                </motion.div>
                            ))}
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-1.5 text-primary">
                                <LucideCheckCircle className="w-4 h-4" />
                                <span className="text-sm font-bold tracking-tight">Trusted by 10,000+ Users</span>
                            </div>
                            <p className="text-xs text-muted-foreground font-medium">Joined by professionals worldwide</p>
                        </div>
                    </div>
                </div>

                {/* Visual Element (3D floating effect placeholder) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
                    className="hidden lg:block relative"
                >
                    <div className="relative w-full aspect-square flex items-center justify-center">
                        {/* Glowing Atmosphere */}
                        <div className="absolute w-[600px] h-[600px] bg-primary/20 rounded-full blur-[180px] mix-blend-multiply animate-pulse" />

                        {/* Animated Card Stacks */}
                        <div className="relative z-10 animate-float rotate-2">
                            <MockResumeVisual />
                        </div>

                        {/* Secondary Faded Card (Decorative) */}
                        <div className="absolute w-80 h-[450px] glass-card p-6 -rotate-6 opacity-30 -translate-x-12 translate-y-8 border-white/30 -z-10">
                            <div className="h-4 w-1/2 bg-accent/20 rounded mb-4" />
                            <div className="space-y-3">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="h-2 w-full bg-border/30 rounded" />)}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
