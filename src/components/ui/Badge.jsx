"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Badge = ({
    children,
    variant = "primary",
    className,
    ...props
}) => {
    const variants = {
        primary: "bg-primary/10 text-primary border-primary/20",
        secondary: "bg-secondary/20 text-secondary-foreground border-secondary/30",
        accent: "bg-accent/10 text-accent-foreground border-accent/20",
        success: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
        warning: "bg-amber-500/10 text-amber-600 border-amber-500/20",
        error: "bg-destructive/10 text-destructive border-destructive/20",
        ghost: "bg-transparent text-foreground/60 border-border",
    };

    return (
        <span
            className={twMerge(
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border transition-all duration-200",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
};
