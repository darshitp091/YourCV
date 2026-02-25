"use client";

import { motion } from "framer-motion";
import { LucideQuote, LucideStar } from "lucide-react";

const TESTIMONIALS = [
    {
        name: "Sarah Jenkins",
        role: "Senior UX Designer",
        company: "Adobe",
        content: "The AI summary generator is a game-changer. It helped me articulate my complex role into words that actually get noticed by hiring managers.",
        stars: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        name: "Marcus Thorne",
        role: "Full Stack Developer",
        company: "Stripe",
        content: "I've tried every resume builder out there. YourCV is the only one that feels professional and actually understands tech niche terminology.",
        stars: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
    },
    {
        name: "Elena Rodriguez",
        role: "Product Manager",
        company: "Atlassian",
        content: "The niche-specific templates are incredibly high quality. I saw an immediate increase in my application callback rate after switching.",
        stars: 5,
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elena"
    }
];

export const Testimonials = () => {
    return (
        <section className="py-32 relative overflow-hidden bg-[#FAF7F2]">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -ml-64 -mb-64" />

            <div className="max-w-7xl mx-auto px-6 relative">
                <div className="text-center space-y-4 mb-20">
                    <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Success Stories</h2>
                    <h3 className="text-4xl md:text-5xl font-black font-heading tracking-tight text-foreground">
                        Trusted by Professionals at <span className="text-gradient">Top Companies.</span>
                    </h3>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Join thousands of job seekers who landed their dream roles using our AI-powered platform.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, idx) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 bg-white border border-border/50 rounded-[32px] shadow-xl shadow-foreground/5 relative group hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="absolute -top-4 right-8 bg-primary rounded-2xl p-3 shadow-lg group-hover:rotate-12 transition-transform">
                                <LucideQuote className="w-5 h-5 text-white" />
                            </div>

                            <div className="space-y-6">
                                <div className="flex gap-1">
                                    {[...Array(testimonial.stars)].map((_, i) => (
                                        <LucideStar key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                <p className="text-foreground/80 leading-relaxed font-medium">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center gap-4 pt-6 border-t border-border/40">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full bg-secondary/20 border border-border/50"
                                    />
                                    <div className="space-y-0.5">
                                        <h4 className="font-bold text-sm">{testimonial.name}</h4>
                                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">
                                            {testimonial.role} @ <span className="text-primary">{testimonial.company}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
