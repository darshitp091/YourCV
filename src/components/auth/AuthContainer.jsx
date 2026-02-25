"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card } from "@/components/ui/Card";
import { LucideMail, LucideLock, LucideUser, LucideArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const AuthContainer = ({ initialMode = "signin" }) => {
    const [mode, setMode] = useState(initialMode); // modes: 'signin', 'signup', 'forgot'
    const isSignIn = mode === 'signin';
    const isSignUp = mode === 'signup';
    const isForgot = mode === 'forgot';

    const { signIn, signUp, resetPassword } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleFormSubmit = async (e, currentMode) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");
        const fullName = formData.get("fullName");

        const validatePassword = (pass) => {
            const minLength = 8;
            const hasUpper = /[A-Z]/.test(pass);
            const hasLower = /[a-z]/.test(pass);
            const hasNumber = /[0-9]/.test(pass);
            const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(pass);

            if (pass.length < minLength) return "Password must be at least 8 characters long.";
            if (!hasUpper || !hasLower) return "Password must contain both uppercase and lowercase letters.";
            if (!hasNumber) return "Password must contain at least one number.";
            if (!hasSpecial) return "Password must contain at least one special character.";
            return null;
        };

        try {
            if (currentMode === "signin") {
                const { error: signInError } = await signIn(email, password);
                if (signInError) throw signInError;
                router.push("/dashboard");
            } else if (currentMode === "signup") {
                const passwordError = validatePassword(password);
                if (passwordError) throw new Error(passwordError);

                const { error: signUpError } = await signUp(email, password, fullName);
                if (signUpError) throw signUpError;
                router.push("/verify");
            } else if (currentMode === "forgot") {
                const { error: resetError } = await resetPassword(email);
                if (resetError) throw resetError;
                setSuccess("Recovery email sent! Please check your inbox.");
                setLoading(false);
            }
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#FAF7F2] p-4 sm:p-6 lg:p-8">
            {/* Background Effects */}
            <div className="fixed inset-0 -z-10 bg-[#FAF7F2]">
                <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" />
            </div>

            <div className="relative w-full max-w-[1000px] h-[700px] bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden hidden md:block">
                {/* Forms Container */}
                <div className="relative w-full h-full flex">

                    {/* Sign In / Forgot Form (Left Content Area) */}
                    <div className="w-1/2 h-full flex flex-col items-center justify-center p-16">
                        <motion.div
                            animate={{
                                opacity: (isSignIn || isForgot) ? 1 : 0,
                                x: (isSignIn || isForgot) ? 0 : -20,
                                pointerEvents: (isSignIn || isForgot) ? 'auto' : 'none'
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="w-full space-y-8"
                        >
                            <div className="text-center space-y-2">
                                <h1 className="text-4xl font-black font-heading tracking-tight">
                                    {isForgot ? 'Recover Password' : 'Welcome Back'}
                                </h1>
                                <p className="text-muted-foreground font-medium">
                                    {isForgot ? "We'll send you a recovery link" : 'Please enter your details'}
                                </p>
                            </div>

                            <form onSubmit={(e) => handleFormSubmit(e, isForgot ? "forgot" : "signin")} className="space-y-4">
                                {(isSignIn || isForgot) && error && <p className="text-sm text-destructive text-center p-3 bg-destructive/10 rounded-xl border border-destructive/20">{error}</p>}
                                {(isSignIn || isForgot) && success && <p className="text-sm text-green-600 text-center p-3 bg-green-50 rounded-xl border border-green-100">{success}</p>}

                                <div className="space-y-4">
                                    <div className="relative">
                                        <Input name="email" type="email" placeholder="Email" required className="pl-12 h-14 rounded-2xl bg-secondary/30 border-none transition-all focus:ring-2 focus:ring-primary/20" />
                                        <LucideMail className="absolute left-4 top-1 text-muted-foreground w-5 h-5 translate-y-[1.125rem]" />
                                    </div>
                                    {!isForgot && (
                                        <div className="relative">
                                            <Input name="password" type="password" placeholder="Password" required className="pl-12 h-14 rounded-2xl bg-secondary/30 border-none transition-all focus:ring-2 focus:ring-primary/20" />
                                            <LucideLock className="absolute left-4 top-1 text-muted-foreground w-5 h-5 translate-y-[1.125rem]" />
                                        </div>
                                    )}
                                </div>

                                {!isForgot && (
                                    <button
                                        type="button"
                                        onClick={() => setMode('forgot')}
                                        className="text-xs font-bold text-muted-foreground/60 hover:text-primary transition-colors text-right block w-full"
                                    >
                                        Forgot Password?
                                    </button>
                                )}

                                <Button type="submit" className="w-full h-14 rounded-2xl text-lg font-bold" isLoading={loading && (isSignIn || isForgot)}>
                                    {isForgot ? 'Send Recovery Email' : 'Sign In'} <LucideArrowRight className="ml-2 w-5 h-5" />
                                </Button>

                                {isForgot && (
                                    <button
                                        type="button"
                                        onClick={() => setMode('signin')}
                                        className="text-sm font-bold text-primary hover:underline underline-offset-4 block mx-auto pt-4"
                                    >
                                        Back to Sign In
                                    </button>
                                )}
                            </form>
                        </motion.div>
                    </div>

                    {/* Sign Up Form (Right Content Area) */}
                    <div className="w-1/2 h-full flex flex-col items-center justify-center p-16">
                        <motion.div
                            animate={{ opacity: isSignUp ? 1 : 0, x: isSignUp ? 0 : 20, pointerEvents: isSignUp ? 'auto' : 'none' }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="w-full space-y-8"
                        >
                            <div className="text-center space-y-2">
                                <h1 className="text-4xl font-black font-heading tracking-tight">Join YourCV</h1>
                                <p className="text-muted-foreground font-medium">Build your future today</p>
                            </div>

                            <form onSubmit={(e) => handleFormSubmit(e, "signup")} className="space-y-4">
                                {isSignUp && error && <p className="text-sm text-destructive text-center p-3 bg-destructive/10 rounded-xl border border-destructive/20">{error}</p>}
                                <div className="space-y-4">
                                    <div className="relative">
                                        <Input name="fullName" type="text" placeholder="Full Name" required className="pl-12 h-14 rounded-2xl bg-secondary/30 border-none transition-all focus:ring-2 focus:ring-primary/20" />
                                        <LucideUser className="absolute left-4 top-1 text-muted-foreground w-5 h-5 translate-y-[1.125rem]" />
                                    </div>
                                    <div className="relative">
                                        <Input name="email" type="email" placeholder="Email" required className="pl-12 h-14 rounded-2xl bg-secondary/30 border-none transition-all focus:ring-2 focus:ring-primary/20" />
                                        <LucideMail className="absolute left-4 top-1 text-muted-foreground w-5 h-5 translate-y-[1.125rem]" />
                                    </div>
                                    <div className="relative">
                                        <Input name="password" type="password" placeholder="Password" required className="pl-12 h-14 rounded-2xl bg-secondary/30 border-none transition-all focus:ring-2 focus:ring-primary/20" />
                                        <LucideLock className="absolute left-4 top-1 text-muted-foreground w-5 h-5 translate-y-[1.125rem]" />
                                    </div>
                                </div>
                                <Button type="submit" className="w-full h-14 rounded-2xl text-lg font-bold" isLoading={loading && isSignUp}>
                                    Create Account <LucideArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <p className="text-[10px] text-muted-foreground/60 text-center px-4 leading-relaxed">
                                    By proceeding, you verify that you have read and agree to our
                                    <Link href="/terms" className="hover:text-primary transition-colors font-bold px-1">Terms of Service</Link>
                                    and
                                    <Link href="/privacy" className="hover:text-primary transition-colors font-bold px-1">Privacy Policy</Link>.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>

                {/* Sliding Overlay Container */}
                <motion.div
                    animate={{ x: (isSignIn || isForgot) ? '100%' : '0%' }}
                    transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
                    className="absolute top-0 left-0 w-1/2 h-full bg-primary z-20 flex flex-col items-center justify-between py-16 px-12 overflow-hidden"
                >
                    {/* Brand Logo in Overlay - Clickable */}
                    <Link href="/" className="relative z-30 transition-transform active:scale-95 group">
                        <BrandLogo variant="inverse" size="xl" />
                    </Link>

                    {/* Animated Circles for premium look */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-50" />
                    </div>

                    <div className="relative z-30 text-center text-white space-y-10">
                        <AnimatePresence mode="wait">
                            {(isSignIn || isForgot) ? (
                                <motion.div
                                    key="signup-text"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-4"
                                >
                                    <h2 className="text-5xl font-black font-heading leading-tight">New here?</h2>
                                    <p className="text-white/80 text-lg font-medium leading-relaxed">
                                        Create an account and start building your ATS-certified resume in minutes.
                                    </p>
                                    <button
                                        onClick={() => setMode('signup')}
                                        className="inline-flex items-center justify-center w-full h-14 rounded-2xl bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold text-lg transition-all backdrop-blur-sm"
                                    >
                                        Sign Up Now
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="signin-text"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-4"
                                >
                                    <h2 className="text-5xl font-black font-heading leading-tight">One of us?</h2>
                                    <p className="text-white/80 text-lg font-medium leading-relaxed">
                                        If you already have an account, just sign in. We've missed you!
                                    </p>
                                    <button
                                        onClick={() => setMode('signin')}
                                        className="inline-flex items-center justify-center w-full h-14 rounded-2xl bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-bold text-lg transition-all backdrop-blur-sm"
                                    >
                                        Sign In
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            {/* Mobile View (Standard Stack) */}
            <div className="block md:hidden w-full max-w-md space-y-8">
                <div className="text-center">
                    <BrandLogo className="mx-auto mb-6" />
                    <h2 className="text-3xl font-black font-heading">
                        {isForgot ? 'Recover' : isSignIn ? 'Sign In' : 'Create Account'}
                    </h2>
                </div>

                <Card className="p-8 rounded-[2rem] shadow-xl">
                    <form onSubmit={(e) => handleFormSubmit(e, isForgot ? 'forgot' : isSignIn ? "signin" : "signup")} className="space-y-4">
                        {error && <p className="text-xs text-destructive text-center p-3 bg-destructive/10 rounded-xl">{error}</p>}
                        {success && <p className="text-xs text-green-600 text-center p-3 bg-green-50 rounded-xl">{success}</p>}

                        {isSignUp && (
                            <div className="relative">
                                <Input name="fullName" type="text" placeholder="Full Name" required className="pl-11 h-12 rounded-xl bg-secondary/30 border-none" />
                                <LucideUser className="absolute left-3.5 top-3.5 text-muted-foreground w-5 h-5" />
                            </div>
                        )}
                        <div className="relative">
                            <Input name="email" type="email" placeholder="Email" required className="pl-11 h-12 rounded-xl bg-secondary/30 border-none" />
                            <LucideMail className="absolute left-3.5 top-3.5 text-muted-foreground w-5 h-5" />
                        </div>
                        {!isForgot && (
                            <div className="relative">
                                <Input name="password" type="password" placeholder="Password" required className="pl-11 h-12 rounded-xl bg-secondary/30 border-none" />
                                <LucideLock className="absolute left-3.5 top-3.5 text-muted-foreground w-5 h-5" />
                            </div>
                        )}
                        <Button type="submit" className="w-full h-12 rounded-xl" isLoading={loading}>
                            {isForgot ? 'Send Email' : isSignIn ? 'Sign In' : 'Create Account'}
                        </Button>
                        {!isSignIn && !isForgot && (
                            <p className="text-[9px] text-muted-foreground/60 text-center pt-2 leading-tight">
                                By signing up, you acknowledge acceptance of our
                                <Link href="/terms" className="font-bold underline px-1">Terms</Link> &
                                <Link href="/privacy" className="font-bold underline px-1">Privacy Policy</Link>.
                            </p>
                        )}
                    </form>

                    <div className="mt-8 pt-8 border-t border-border text-center space-y-4">
                        {isSignIn && (
                            <button
                                type="button"
                                onClick={() => setMode('forgot')}
                                className="text-sm font-bold text-muted-foreground block w-full hover:text-primary transition-colors"
                            >
                                Forgot Password?
                            </button>
                        )}
                        <button
                            onClick={() => setMode(isSignIn || isForgot ? 'signup' : 'signin')}
                            className="text-sm font-bold text-primary hover:underline underline-offset-4"
                        >
                            {isSignIn || isForgot ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
                        </button>
                    </div>
                </Card>
            </div>
        </div>
    );
};
