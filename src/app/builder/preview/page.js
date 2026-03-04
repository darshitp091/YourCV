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
    LucideSparkles
} from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { LaTeXModal } from "@/components/resume/LaTeXModal";
import { triggerWorkflow } from "@/lib/workflows/engine";
import { SocialShare } from "@/components/common/SocialShare";
import { ResumeStrength } from "@/components/resume/ResumeStrength";
import { AdBanner } from "@/components/common/AdBanner";

export default function PreviewPage() {
    const { user } = useAuth();
    const { resumeData } = useResume();
    const router = useRouter();
    const [exporting, setExporting] = useState(false);
    const [isLatexOpen, setIsLatexOpen] = useState(false);
    const [bulkTemplates, setBulkTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const resumeRef = useRef(null);

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

    const downloadPDF = async () => {
        if (!user) {
            router.push("/login?redirect=/builder/preview");
            return;
        }

        try {
            setExporting(true);
            const input = document.getElementById('resume-preview');

            // The following block was inserted as per user instruction.
            // Note: 'supabase' and 'fullName' are not defined in the current scope.
            // This might lead to a runtime error if not addressed in a broader context.
            // Assuming 'data' refers to 'user' from useAuth() if 'user' has a 'data' property.
            // Assuming 'fullName' would be derived from 'resumeData.personal.fullName'.
            // For this specific instruction, the code is inserted as provided.
            // const { error: profileError } = await supabase.from('profiles').upsert({
            //     id: data.user.id,
            //     full_name: fullName
            // });

            const canvas = await html2canvas(input, {
                scale: 2,
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

            triggerWorkflow('pdf_downloaded', user.id, {
                resumeId: localStorage.getItem("current_resume_id"),
                filename: `${resumeData.personal.fullName || 'Resume'}_YourCV.pdf`
            });

        } catch (error) {
            console.error("PDF Export Error:", error);
            alert("Failed to export PDF.");
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

            <div className="max-w-7xl mx-auto px-4 py-8">
                <AdBanner placementId="73b6b292ed780e89f620ff15c77b7ef0" format="banner" className="mb-8" />

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Sidebar Info */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white p-6 rounded-3xl border border-border space-y-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Select Template</p>
                            <div className="grid grid-cols-1 gap-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`text-[10px] justify-start h-8 ${!selectedTemplate ? 'bg-primary/10 text-primary' : ''}`}
                                    onClick={() => setSelectedTemplate(null)}
                                >
                                    Modern Minimal
                                </Button>
                                {bulkTemplates.map(t => (
                                    <Button
                                        key={t.id}
                                        variant="ghost"
                                        size="sm"
                                        className={`text-[10px] justify-start h-8 w-full ${selectedTemplate?.id === t.id ? 'bg-primary/10 text-primary' : ''}`}
                                        onClick={() => setSelectedTemplate({ ...t, type: 'bulk' })}
                                    >
                                        {t.name}
                                    </Button>
                                ))}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`text-[10px] justify-start h-8 w-full ${selectedTemplate?.id === 'pikachu' ? 'bg-primary/10 text-primary' : ''}`}
                                    onClick={() => setSelectedTemplate({ id: 'pikachu', name: 'Pikachu (Premium)', type: 'reactive' })}
                                >
                                    Pikachu (Modern)
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    className={`text-[10px] justify-start h-8 w-full ${selectedTemplate?.id === 'onyx' ? 'bg-primary/10 text-primary' : ''}`}
                                    onClick={() => setSelectedTemplate({ id: 'onyx', name: 'Onyx (Premium)', type: 'reactive' })}
                                >
                                    Onyx (Formal)
                                </Button>
                            </div>
                        </div>

                        <ResumeStrength data={resumeData} />

                        <div className="bg-primary/5 p-6 rounded-3xl border border-primary/20 space-y-4">
                            <LucideSparkles className="w-8 h-8 text-primary opacity-50" />
                            <div>
                                <p className="font-bold text-primary">Open Source Forever</p>
                                <p className="text-[10px] text-muted-foreground">This platform is now free and open-source. Enjoy unlimited access!</p>
                            </div>
                        </div>

                        {/* High Payout Direct Link Ad */}
                        <div className="pt-4">
                            <AdBanner format="direct-link" placementId="73b6b292ed780e89f620ff15c77b7ef0" className="mt-4">
                                <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-2xl text-white text-center shadow-lg shadow-primary/20 cursor-pointer hover:scale-[1.02] transition-transform">
                                    <p className="text-[10px] font-black uppercase tracking-widest mb-1">🎁 Exclusive Offer</p>
                                    <p className="text-xs font-bold leading-tight">Get Premium Resume Review & Job Matching (Sponsored)</p>
                                </div>
                            </AdBanner>
                        </div>
                    </div>

                    {/* Live Preview */}
                    <div className="lg:col-span-3 flex justify-center">
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
            </div>

            <LaTeXModal
                isOpen={isLatexOpen}
                onClose={() => setIsLatexOpen(false)}
                data={resumeData}
            />
        </div>
    );
}
