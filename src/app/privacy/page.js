"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-white">
            <Header />

            <section className="pt-32 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-12"
                    >
                        <div className="space-y-4">
                            <h1 className="text-5xl font-black font-heading leading-tight">Privacy Policy</h1>
                            <p className="text-muted-foreground font-medium">Last updated: February 22, 2026</p>
                        </div>

                        <div className="prose prose-lg prose-primary max-w-none text-muted-foreground
                            prose-headings:font-heading prose-headings:text-foreground prose-headings:font-black
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                            prose-p:mb-6
                            prose-strong:text-foreground prose-strong:font-bold"
                        >
                            <h2>1. Introduction</h2>
                            <p>Welcome to YourCV. We are committed to protecting your personal data and your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you used our AI-powered resume building services.</p>

                            <h2>2. Information We Collect</h2>
                            <p>When you use YourCV, we collect information that you provides to us voluntarily:</p>
                            <ul>
                                <li><strong>Account Information:</strong> Name, email address, password.</li>
                                <li><strong>Resume Content:</strong> Contact details, work experience, education, skills, and any other information you include in your resume.</li>
                                <li><strong>Payment Information:</strong> Transaction details through our third-party payment processor (Razorpay).</li>
                            </ul>

                            <h2>3. How We Use AI</h2>
                            <p>Our platform uses advanced AI models (Google Gemini API) to analyze and refine your resume content. Your data is sent to these models strictly for processing your requests and is not used for training general-purpose models by YourCV.</p>

                            <h2>4. Data Storage and Security</h2>
                            <p>We use Supabase for secure data storage. Your data is encrypted at rest and in transit. You have full control over your saved resumes and can delete them at any time.</p>

                            <h2>5. Third-Party Services</h2>
                            <p>We utilize the following third-party services:</p>
                            <ul>
                                <li><strong>Google Gemini API:</strong> For AI content refinement.</li>
                                <li><strong>Supabase:</strong> For authentication and database hosting.</li>
                                <li><strong>Razorpay:</strong> For secure payment processing.</li>
                            </ul>

                            <h2>6. Your Rights</h2>
                            <p>You have the right to access, correct, or delete your personal information. If you wish to close your account or delete your data, you can do so through the Dashboard or by contacting us.</p>

                            <h2>7. Changes to This Policy</h2>
                            <p>We may update this policy from time to time. We will notify you of any significant changes by posting the new policy on this page.</p>

                            <h2>8. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact us at privacy@resumeai.io.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
