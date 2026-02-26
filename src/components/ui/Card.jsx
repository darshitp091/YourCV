"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Card = ({
    children,
    className,
    variant = "default",
    ...props
}) => {
    const variants = {
        default: "bg-white border border-border shadow-sm text-foreground",
        glass: "glass-card",
        outline: "bg-transparent border border-border text-foreground",
        premium: "bg-white border border-black/[0.08] shadow-[0_24px_64px_-12px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.02]",
    };

    return (
        <div
            className={twMerge(
                "rounded-2xl p-6 transition-all duration-300",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};

export const CardHeader = ({ children, className }) => (
    <div className={twMerge("mb-4", className)}>{children}</div>
);

export const CardContent = ({ children, className }) => (
    <div className={twMerge("space-y-4", className)}>{children}</div>
);

export const CardFooter = ({ children, className }) => (
    <div className={twMerge("mt-6 py-4 border-t border-border/50", className)}>
        {children}
    </div>
);
