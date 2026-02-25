"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export default function TermsPage() {
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
                            <h1 className="text-5xl font-black font-heading leading-tight">Terms of Service</h1>
                            <p className="text-muted-foreground font-medium">Last updated: February 22, 2026</p>
                        </div>

                        <div className="prose prose-lg prose-primary max-w-none text-muted-foreground
                            prose-headings:font-heading prose-headings:text-foreground prose-headings:font-black
                            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
                            prose-p:mb-6
                            prose-strong:text-foreground prose-strong:font-bold"
                        >
                            <h2>1. Acceptance of Terms</h2>
                            <p>By accessing or using YourCV, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.</p>

                            <h2>2. Description of Service</h2>
                            <p>YourCV is an AI-powered resume building platform. We provide tools for content generation, ATS optimization, and professional template rendering in HTML, PDF, and LaTeX formats.</p>

                            <h2>3. Account Registration</h2>
                            <p>To use certain features, you must register for an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>

                            <h2>4. Subscription and Payments</h2>
                            <ul>
                                <li><strong>Free Plan:</strong> Includes basic resume building and limited templates with watermarks.</li>
                                <li><strong>Premium Plan:</strong> Recurring monthly fee for full access to all features, priority AI, and clean exports.</li>
                                <li><strong>Refunds:</strong> Payments are generally non-refundable, but we evaluate requests on a case-by-case basis.</li>
                            </ul>

                            <h2>5. Prohibited Conduct</h2>
                            <p>You agree not to use YourCV for any unlawful purpose or in any way that violates these Terms. You may not attempt to reverse engineer or extract the AI models used by our service.</p>

                            <h2>6. Intellectual Property</h2>
                            <p>The service and its original content (excluding user-provided data) are and will remain the exclusive property of YourCV.</p>

                            <h2>7. Limitation of Liability</h2>
                            <p>YourCV shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>

                            <h2>8. Governing Law</h2>
                            <p>These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which YourCV operates.</p>

                            <h2>9. Contact Information</h2>
                            <p>Questions about the Terms of Service should be sent to us at legal@resumeai.io.</p>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
