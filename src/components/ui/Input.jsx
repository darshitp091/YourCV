"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Input = ({
    label,
    error,
    className,
    variant = "default",
    ...props
}) => {
    const variants = {
        default: "bg-white border-border text-foreground focus:ring-primary/20 focus:border-primary",
        premium: "bg-white/5 border-white/10 text-white placeholder:text-zinc-500 focus:ring-primary/40 focus:border-primary focus:bg-white/[0.08] backdrop-blur-sm"
    };

    return (
        <div className="w-full space-y-2 group/input">
            {label && (
                <label className={clsx(
                    "text-[10px] font-black uppercase tracking-[0.2em] ml-1 transition-colors duration-300",
                    variant === "premium" ? "text-zinc-500 group-focus-within/input:text-primary" : "text-foreground/80"
                )}>
                    {label}
                </label>
            )}
            <input
                className={twMerge(
                    "w-full px-5 py-3.5 border rounded-2xl focus:outline-none focus:ring-4 transition-all duration-300 placeholder:text-muted-foreground font-medium",
                    variants[variant],
                    error && "border-destructive focus:ring-destructive/20 focus:border-destructive",
                    className
                )}
                {...props}
            />
            {error && (
                <span className="text-xs text-destructive ml-1">
                    {error}
                </span>
            )}
        </div>
    );
};
