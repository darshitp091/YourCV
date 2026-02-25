"use client";

import { AUTHORS } from "@/data/authors";
import { LucideShieldCheck, LucideExternalLink } from "lucide-react";

export const AuthorBio = ({ authorName }) => {
    const author = AUTHORS[authorName];

    if (!author) return null;

    return (
        <div className="mt-20 p-8 md:p-12 bg-[#FAF7F2] rounded-[2.5rem] border border-border/60">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="relative">
                    <img
                        src={author.avatar}
                        alt={author.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-[2rem] bg-white border-2 border-primary/20 shadow-xl"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-xl shadow-lg border-4 border-[#FAF7F2]">
                        <LucideShieldCheck className="w-5 h-5" />
                    </div>
                </div>

                <div className="flex-1 space-y-4">
                    <div className="space-y-1">
                        <h3 className="text-2xl font-black font-heading text-foreground flex items-center gap-3">
                            {author.name}
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 bg-primary/10 text-primary rounded-full">
                                Verified Expert
                            </span>
                        </h3>
                        <p className="text-sm text-primary font-bold uppercase tracking-widest leading-none">
                            {author.role} @ {author.company}
                        </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed italic text-lg">
                        "{author.bio}"
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 px-4 py-2 border border-border/40 rounded-xl bg-white shadow-sm">
                            CREDENTIALS: {author.credentials}
                        </div>
                        <button className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-2 hover:underline">
                            View Publications <LucideExternalLink size={12} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
