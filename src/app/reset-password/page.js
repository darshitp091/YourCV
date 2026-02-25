"use client";

import { ResetPasswordForm } from "@/components/auth/ResetPasswordForm";
import { motion } from "framer-motion";

export default function ResetPasswordPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-[#FAF7F2] p-4">
            {/* Background Effects */}
            <div className="fixed inset-0 -z-10 bg-[#FAF7F2]">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-lg bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden p-8 sm:p-12"
            >
                <ResetPasswordForm />
            </motion.div>
        </div>
    );
}
