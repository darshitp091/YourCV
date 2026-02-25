"use client";

import { useResume } from "@/context/ResumeContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";
import { getTemplateComponent } from "@/lib/template-registry";
import { DynamicTemplate } from "@/components/templates/DynamicTemplate";
import { ReactiveRenderEngine } from "@/components/resume/external/reactive/ReactiveRenderEngine";
import { useRouter } from "next/navigation";
import {
    LucideArrowLeft,
    LucideDownload,
    LucideCode,
    LucideCheckCircle,
    LucideShare2,
    LucideSparkles
} from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { LaTeXModal } from "@/components/resume/LaTeXModal";
import { incrementUsage } from "@/lib/credits";
import { triggerCheckout } from "@/lib/razorpay";
import { triggerWorkflow } from "@/lib/workflows/engine";

export default function PreviewPage() {
    const { user } = useAuth();
    const { resumeData } = useResume();
    const router = useRouter();
    const [exporting, setExporting] = useState(false);
    const [isLatexOpen, setIsLatexOpen] = useState(false);
    const [bulkTemplates, setBulkTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null); // { id, name, html, type: 'bulk' | 'reactive' }
    const resumeRef = useRef(null);
    const isPremium = user?.user_metadata?.plan === "premium" || user?.plan === "premium";

    const fetchBulkTemplates = async () => {
        try {
            const res = await fetch("/api/templates/bulk");
            const data = await res.json();
            if (data.templates) setBulkTemplates(data.templates);
        } catch (error) {
            console.error("Fetch Bulk Templates Error:", error);
        }
    };

    useEffect(() => {
        fetchBulkTemplates();
    }, []);

    const handleUpgrade = async () => {
        if (!user) {
            router.push("/login?redirect=/builder/preview");
            return;
        }

        await triggerCheckout({
            userId: user.id,
            fullName: user.user_metadata?.full_name || "User",
            email: user.email,
            amount: 139, // INR 139 for Premium
            successCallback: (response) => {
                alert("Payment Successful! Your account is now Premium.");
                window.location.reload();
            }
        });
    };

    const downloadPDF = async () => {
        try {
            setExporting(true);
            const input = document.getElementById('resume-preview');

            const canvas = await html2canvas(input, {
                scale: 2, // Higher scale for better quality
                useCORS: true,
                logging: false,
                backgroundColor: "#ffffff"
            });

            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'px',
                format: 'a4'
            });

            const imgProps = pdf.getImageProperties(imgData);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save(`${resumeData.personal.fullName || 'Resume'}_YourCV.pdf`);

            // Trigger Workflow
            if (user) {
                triggerWorkflow('pdf_downloaded', user.id, {
                    resumeId: localStorage.getItem("current_resume_id"),
                    filename: `${resumeData.personal.fullName || 'Resume'}_YourCV.pdf`
                });
            }

            // Increment usage is now handled on resume creation in ResumeContext

        } catch (error) {
            console.error("PDF Export Error:", error);
            alert("Failed to export PDF. Please try again.");
        } finally {
            setExporting(false);
        }
    };

    return (
        <div className="min-h-screen bg-secondary/30 pb-20">
            {/* Top Navbar */}
            <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-border h-20 px-8 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <Link href="/builder" className="p-2 hover:bg-secondary/50 rounded-xl transition-colors">
                        <LucideArrowLeft className="w-5 h-5 text-muted-foreground" />
                    </Link>
                    <div>
                        <h1 className="text-xl font-bold font-heading">Preview & Export</h1>
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 uppercase tracking-widest">
                            <LucideCheckCircle className="w-3.5 h-3.5" />
                            Resume Ready
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="sm"
                        className="hidden sm:flex text-muted-foreground hover:text-foreground"
                        onClick={() => router.push("/dashboard")}
                    >
                        Finish & Back
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        className="hidden sm:flex border-primary/20 text-primary"
                        onClick={() => setIsLatexOpen(true)}
                    >
                        <LucideCode className="w-4 h-4 mr-2" />
                        LaTeX Code
                    </Button>
                    <Button
                        onClick={downloadPDF}
                        isLoading={exporting}
                        className="shadow-lg shadow-primary/20"
                    >
                        <LucideDownload className="w-4 h-4 mr-2" />
                        Download PDF
                    </Button>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
                {/* Sidebar Info */}
                <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
                    <div className="bg-white p-6 rounded-3xl border border-border space-y-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Active Template</p>
                        <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10">
                            <p className="font-bold text-primary">{selectedTemplate ? selectedTemplate.name : "Modern Minimal"}</p>
                            <p className="text-[10px] text-primary/60 uppercase tracking-tighter">
                                {selectedTemplate ? "Bulk Niche Template" : "Classic Template"}
                            </p>
                        </div>

                        {bulkTemplates.length > 0 && (
                            <div className="pt-2 space-y-2">
                                <p className="text-[10px] font-bold text-muted-foreground uppercase">Niche Templates (Bulk)</p>
                                <div className="grid grid-cols-1 gap-2">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className={`text-[10px] justify-start h-8 ${!selectedTemplate ? 'bg-primary/10 text-primary' : ''}`}
                                        onClick={() => setSelectedTemplate(null)}
                                    >
                                        Modern Minimal
                                    </Button>
                                    {bulkTemplates.map(t => {
                                        const isLocked = !isPremium;
                                        return (
                                            <div key={t.id} className="relative group/btn">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    disabled={isLocked}
                                                    className={`text-[10px] justify-start h-8 w-full ${selectedTemplate?.id === t.id ? 'bg-primary/10 text-primary' : ''} ${isLocked ? 'opacity-50' : ''}`}
                                                    onClick={() => !isLocked && setSelectedTemplate({ ...t, type: 'bulk' })}
                                                >
                                                    {t.name}
                                                    {isLocked && <LucideSparkles className="w-3 h-3 ml-auto text-amber-500" />}
                                                </Button>
                                                {isLocked && (
                                                    <div className="absolute inset-0 z-10 cursor-pointer" onClick={handleUpgrade} />
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        <div className="pt-2 space-y-2 border-t border-secondary mt-2">
                            <p className="text-[10px] font-bold text-muted-foreground uppercase">Premium (rxresu.me)</p>
                            <div className="grid grid-cols-1 gap-2">
                                <div className="relative group/btn">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        disabled={!isPremium}
                                        className={`text-[10px] justify-start h-8 w-full ${selectedTemplate?.id === 'pikachu' ? 'bg-primary/10 text-primary' : ''} ${!isPremium ? 'opacity-50' : ''}`}
                                        onClick={() => isPremium && setSelectedTemplate({ id: 'pikachu', name: 'Pikachu (Premium)', type: 'reactive' })}
                                    >
                                        Pikachu (Modern)
                                        {!isPremium && <LucideSparkles className="w-3 h-3 ml-auto text-amber-500" />}
                                    </Button>
                                    {!isPremium && <div className="absolute inset-0 z-10 cursor-pointer" onClick={handleUpgrade} />}
                                </div>
                                <div className="relative group/btn">
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        disabled={!isPremium}
                                        className={`text-[10px] justify-start h-8 w-full ${selectedTemplate?.id === 'onyx' ? 'bg-primary/10 text-primary' : ''} ${!isPremium ? 'opacity-50' : ''}`}
                                        onClick={() => isPremium && setSelectedTemplate({ id: 'onyx', name: 'Onyx (Premium)', type: 'reactive' })}
                                    >
                                        Onyx (Formal)
                                        {!isPremium && <LucideSparkles className="w-3 h-3 ml-auto text-amber-500" />}
                                    </Button>
                                    {!isPremium && <div className="absolute inset-0 z-10 cursor-pointer" onClick={handleUpgrade} />}
                                </div>
                            </div>
                        </div>
                        <Link href="/templates">
                            <Button variant="outline" size="sm" className="w-full text-xs">
                                Change Template
                            </Button>
                        </Link>
                    </div>

                    <div className="bg-primary p-6 rounded-3xl text-white space-y-4 shadow-xl shadow-primary/20">
                        <LucideSparkles className="w-8 h-8 opacity-50" />
                        <div className="space-y-1">
                            <p className="font-bold">Upgrade to Premium</p>
                            <p className="text-xs text-white/70">Remove the YourCV watermark and get access to all 10+ premium templates.</p>
                        </div>
                        <Button
                            variant="outline"
                            className="w-full border-white/20 hover:bg-white/10 text-white font-bold"
                            onClick={handleUpgrade}
                        >
                            Upgrade ₹139/mo
                        </Button>
                    </div>
                </div>

                {/* Live Preview */}
                <div className="lg:col-span-3 flex justify-center order-1 lg:order-2">
                    <div className="scale-[0.5] sm:scale-[0.7] md:scale-[0.85] lg:scale-[1] origin-top" id="resume-preview">
                        {!selectedTemplate ? (
                            (() => {
                                const Template = getTemplateComponent(resumeData.templateId || "modern-minimal");
                                return <Template data={resumeData} />;
                            })()
                        ) : selectedTemplate.type === 'bulk' ? (
                            <DynamicTemplate html={selectedTemplate.html} data={resumeData} />
                        ) : (
                            <ReactiveRenderEngine data={resumeData} templateId={selectedTemplate.id} />
                        )}
                    </div>
                </div>
            </div>

            <LaTeXModal
                isOpen={isLatexOpen}
                onClose={() => setIsLatexOpen(false)}
                data={resumeData}
            />
        </div>
    );
}
