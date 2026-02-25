"use client";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Input = ({
    label,
    error,
    className,
    ...props
}) => {
    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-foreground/80 ml-1">
                    {label}
                </label>
            )}
            <input
                className={twMerge(
                    "w-full px-4 py-2.5 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 placeholder:text-muted-foreground",
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
