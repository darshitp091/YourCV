"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LucideMail, LucideMapPin, LucidePhone, LucideSend } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-7xl font-black font-heading"
                        >
                            Get in <span className="text-gradient">Touch</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-muted-foreground text-lg"
                        >
                            Have questions or feedback? We'd love to hear from you. Our team usually responds within 24 hours.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Info */}
                        <div className="space-y-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                                {[
                                    {
                                        icon: LucideMail,
                                        title: "Email Us",
                                        detail: "support@resumeai.io",
                                        description: "For support, partnerships, or media inquiries."
                                    },
                                    {
                                        icon: LucidePhone,
                                        title: "Call Us",
                                        detail: "+1 (555) 123-4567",
                                        description: "Available Mon-Fri, 9am - 5pm EST."
                                    },
                                    {
                                        icon: LucideMapPin,
                                        title: "Office",
                                        detail: "123 AI Lane, Tech City, TC 10101",
                                        description: "Our primary development hub."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 group">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                                            <item.icon size={28} />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-xs font-black uppercase tracking-widest text-primary">{item.title}</p>
                                            <p className="text-xl font-bold font-heading">{item.detail}</p>
                                            <p className="text-muted-foreground text-sm">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="glass-card p-10 rounded-[3rem] rounded-tr-none border border-border bg-[#FAF7F2]/50 backdrop-blur-xl"
                        >
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold ml-1">First Name</label>
                                        <input type="text" className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold ml-1">Last Name</label>
                                        <input type="text" className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Doe" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold ml-1">Email Address</label>
                                    <input type="email" className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@example.com" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold ml-1">Subject</label>
                                    <select className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all">
                                        <option>General Inquiry</option>
                                        <option>Technical Support</option>
                                        <option>Billing Question</option>
                                        <option>Partnership Request</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold ml-1">Message</label>
                                    <textarea rows={5} className="w-full bg-white border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="How can we help you?" />
                                </div>
                                <Button className="w-full py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 group">
                                    Send Message
                                    <LucideSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                                </Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
