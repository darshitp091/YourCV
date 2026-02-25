"use client";

import { motion } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const Button = ({
    children,
    className,
    variant = "primary",
    size = "md",
    isLoading = false,
    ...props
}) => {
    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border-2 border-primary text-primary hover:bg-primary/10",
        ghost: "text-primary hover:bg-primary/10",
        accent: "bg-accent text-accent-foreground hover:bg-accent/90 shadow-md",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-6 py-2.5 text-base font-medium",
        lg: "px-8 py-3.5 text-lg font-semibold",
        icon: "p-2",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={twMerge(
                "inline-flex items-center justify-center rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed",
                variants[variant],
                sizes[size],
                className
            )}
            disabled={isLoading}
            {...props}
        >
            {isLoading ? (
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : null}
            {children}
        </motion.button>
    );
};
