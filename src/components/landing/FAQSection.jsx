"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucidePlus, LucideMinus } from "lucide-react";

const FAQS = [
    {
        question: "How does the AI resume builder work?",
        answer: "Our system uses the Gemini AI API to analyze your input data and refine it into professional, impact-driven bullet points and summaries. It follows industry best practices to ensure your resume is both human-readable and ATS-optimized.",
    },
    {
        question: "What is ATS optimization?",
        answer: "Applicant Tracking Systems (ATS) are used by recruiters to filter resumes. We ensure your resume uses the right formatting, keywords, and structural hierarchy so it doesn't get rejected by these automated systems.",
    },
    {
        question: "Can I download my resume in LaTeX format?",
        answer: "Yes! Every resume can be exported as raw LaTeX code or a compiled PDF. We use the moderncv template to ensure your resume looks exceptionally clean and academic.",
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We use Supabase for secure authentication and database management. Your personal information is encrypted and never shared with third parties.",
    },
    {
        question: "How many templates are available?",
        answer: "We offer 10+ professional templates covering various industries including Tech, Finance, Healthcare, Creative, and Legal roles.",
    },
    {
        question: "What's the difference between Free and Premium?",
        answer: "The Free plan allows for 5 resumes per month with NO watermarks. Premium gives you 30 resumes, full ATS score breakdowns, priority AI generation, and access to elite templates.",
    },
];

const FAQItem = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="border-b border-border"
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left group"
            >
                <span className="text-lg font-bold font-heading group-hover:text-primary transition-colors">
                    {question}
                </span>
                {isOpen ? (
                    <LucideMinus className="w-5 h-5 text-primary" />
                ) : (
                    <LucidePlus className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-muted-foreground leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const FAQSection = () => {
    return (
        <section id="faq" className="py-24 px-6 bg-[#FAF7F2]">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-bold font-heading">Frequently Asked <span className="text-gradient">Questions</span></h2>
                    <p className="text-muted-foreground">Everything you need to know about the platform.</p>
                </div>
                <div className="space-y-2">
                    {FAQS.map((faq, index) => (
                        <FAQItem key={index} {...faq} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
