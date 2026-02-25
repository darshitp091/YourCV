"use client";

import { motion } from "framer-motion";

export const BrandLogo = ({ className = "", variant = "default", size = "md" }) => {
    const isInverse = variant === "inverse";

    const sizes = {
        sm: "text-lg",
        md: "text-2xl",
        lg: "text-5xl",
        xl: "text-7xl"
    };

    return (
        <div className={`flex items-center gap-2 group ${className}`}>
            <div className={`flex items-baseline font-heading font-black tracking-tighter ${sizes[size]} ${isInverse ? 'text-white' : ''}`}>
                <span className={isInverse ? "text-white" : "text-[#0D6E6E]"}>ur</span>
                <span className="text-[#C9A84C]">CV</span>
            </div>
        </div>
    );
};
