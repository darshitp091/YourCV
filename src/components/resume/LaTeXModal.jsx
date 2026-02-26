"use client";

import { useEffect, useState } from "react";
import { Modal } from "../ui/Modal";
import { Button } from "../ui/Button";
import { useAuth } from "@/context/AuthContext";
import { LucideCopy, LucideDownload, LucideCheck, LucideExternalLink } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-latex";
import "prismjs/themes/prism-tomorrow.css"; // Dark theme for code
import { generateLatex } from "@/lib/latex-generator";
import { incrementUsage } from "@/lib/credits";

export const LaTeXModal = ({ isOpen, onClose, data }) => {
    const { user } = useAuth();
    const [copied, setCopied] = useState(false);
    const latexCode = generateLatex(data);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                Prism.highlightAll();
            }, 100);
        }
    }, [isOpen]);

    const handleCopy = async () => {
        if (!user) return;

        const hasCredits = await checkCredits(user.id, "latex");
        if (!hasCredits) {
            alert("You've reached your export limit for this month. Please upgrade to Premium!");
            return;
        }

        navigator.clipboard.writeText(latexCode);
        setCopied(true);
        await incrementUsage(user.id, "latex");
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = async () => {
        if (!user) return;

        const hasCredits = await checkCredits(user.id, "latex");
        if (!hasCredits) {
            alert("You've reached your export limit for this month. Please upgrade to Premium!");
            return;
        }

        const element = document.createElement("a");
        const file = new Blob([latexCode], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = `${data.personal.fullName || 'Resume'}_Source.tex`;
        await incrementUsage(user.id, "latex");
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="LaTeX Source Code"
            size="lg"
        >
            <div className="space-y-6">
                <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 flex items-start gap-3">
                    <LucideExternalLink className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-xs text-primary/80 leading-relaxed font-medium">
                        <span className="font-bold">Pro Tip:</span> You can compile this code using online editors like <a href="https://www.overleaf.com" target="_blank" className="font-bold underline">Overleaf</a>. Ensure you select the <span className="font-bold">moderncv</span> package and a LaTeX compiler.
                    </p>
                </div>

                <div className="relative group">
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        <Button variant="outline" size="sm" onClick={handleDownload} className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                            <LucideDownload className="w-4 h-4 mr-2" />
                            .tex
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleCopy} className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                            {copied ? <LucideCheck className="w-4 h-4 mr-2" /> : <LucideCopy className="w-4 h-4 mr-2" />}
                            {copied ? "Copied" : "Copy"}
                        </Button>
                    </div>
                    <pre className="rounded-2xl overflow-hidden text-sm bg-slate-900 border border-border max-h-[500px] overflow-y-auto custom-scrollbar">
                        <code className="language-latex">
                            {latexCode}
                        </code>
                    </pre>
                </div>

                <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                    <Button variant="outline" onClick={onClose}>Close</Button>
                    <Button onClick={handleDownload}>
                        <LucideDownload className="w-4 h-4 mr-2" />
                        Download Source File
                    </Button>
                </div>
            </div>
        </Modal>
    );
};
