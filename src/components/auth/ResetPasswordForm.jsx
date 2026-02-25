"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { LucideLock, LucideArrowRight, LucideCheckCircle } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import Link from "next/link";
import { motion } from "framer-motion";

export const ResetPasswordForm = () => {
    const { updatePassword } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const formData = new FormData(e.target);
        const password = formData.get("password");
        const confirmPassword = formData.get("confirmPassword");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try {
            const { error: updateError } = await updatePassword(password);
            if (updateError) throw updateError;
            setSuccess(true);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    if (success) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 p-8"
            >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <LucideCheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-3xl font-black font-heading tracking-tight">Success!</h2>
                    <p className="text-muted-foreground font-medium">Your password has been reset successfully.</p>
                </div>
                <Link href="/login" className="block">
                    <Button className="w-full h-14 rounded-2xl text-lg font-bold">
                        Go to Sign In
                    </Button>
                </Link>
            </motion.div>
        );
    }

    return (
        <div className="space-y-8">
            <div className="text-center space-y-2">
                <BrandLogo size="lg" className="mx-auto mb-6" />
                <h1 className="text-4xl font-black font-heading tracking-tight">New Password</h1>
                <p className="text-muted-foreground font-medium">Secure your account with a new password</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {error && <p className="text-sm text-destructive text-center p-3 bg-destructive/10 rounded-xl border border-destructive/20">{error}</p>}

                <div className="space-y-4">
                    <div className="relative">
                        <Input
                            name="password"
                            type="password"
                            placeholder="New Password"
                            required
                            className="pl-12 h-14 rounded-2xl bg-secondary/30 border-none transition-all focus:ring-2 focus:ring-primary/20"
                        />
                        <LucideLock className="absolute left-4 top-1 text-muted-foreground w-5 h-5 translate-y-[1.125rem]" />
                    </div>
                    <div className="relative">
                        <Input
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            required
                            className="pl-12 h-14 rounded-2xl bg-secondary/30 border-none transition-all focus:ring-2 focus:ring-primary/20"
                        />
                        <LucideLock className="absolute left-4 top-1 text-muted-foreground w-5 h-5 translate-y-[1.125rem]" />
                    </div>
                </div>

                <Button type="submit" className="w-full h-14 rounded-2xl text-lg font-bold" isLoading={loading}>
                    Reset Password <LucideArrowRight className="ml-2 w-5 h-5" />
                </Button>
            </form>
        </div>
    );
};
