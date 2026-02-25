"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { LucideMailCheck, LucideArrowLeft } from "lucide-react";
import Link from "next/link";

export default function VerifyPage() {
    return (
        <main className="min-h-screen flex items-center justify-center p-6 bg-[#FAF7F2]">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md text-center"
            >
                <Card variant="glass" className="p-10 space-y-8">
                    <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto">
                        <LucideMailCheck className="w-10 h-10 text-primary" />
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold font-heading">Check your email</h1>
                        <p className="text-muted-foreground">
                            We've sent a verification link to your email address. Please click the link to activate your account.
                        </p>
                    </div>

                    <div className="pt-4">
                        <Link href="/login">
                            <Button variant="outline" className="w-full">
                                <LucideArrowLeft className="mr-2 w-4 h-4" />
                                Back to Login
                            </Button>
                        </Link>
                    </div>
                </Card>
            </motion.div>
        </main>
    );
}
