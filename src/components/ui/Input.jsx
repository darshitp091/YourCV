"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Input = ({
    label,
    error,
    required,
    className,
    variant = "default",
    ...props
}) => {
    const variants = {
        default: "bg-white border-border text-foreground focus:ring-primary/20 focus:border-primary",
        premium: "bg-white border-black/[0.08] text-zinc-900 placeholder:text-zinc-400 focus:ring-primary/10 focus:border-primary focus:bg-white transition-all shadow-sm"
    };

    return (
        <div className="w-full space-y-2 group/input">
            {label && (
                <label className={clsx(
                    "text-[10px] font-black uppercase tracking-[0.2em] ml-1 transition-colors duration-300",
                    variant === "premium" ? "text-zinc-400 group-focus-within/input:text-primary" : "text-foreground/80"
                )}>
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
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
