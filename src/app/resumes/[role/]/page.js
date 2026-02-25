import { ROLES } from "@/data/roles";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { LucideCheckCircle2, LucideSparkles, LucideTerminal, LucideBriefcase, LucideLineChart } from "lucide-react";

export async function generateStaticParams() {
    return ROLES.map((role) => ({
        role: role.slug,
    }));
}

export async function generateMetadata({ params }) {
    const { role: roleSlug } = await params;
    const role = ROLES.find(r => r.slug === roleSlug);

    if (!role) return {};

    return {
        title: role.title,
        description: role.description,
        keywords: role.keywords,
        openGraph: {
            title: `Build a Professional ${role.title}`,
            description: role.description,
        }
    };
}

const IconMap = {
    "software-engineer": LucideTerminal,
    "data-scientist": LucideLineChart,
    "product-manager": LucideBriefcase
};

export default async function RoleResumePage({ params }) {
    const { role: roleSlug } = await params;
    const role = ROLES.find(r => r.slug === roleSlug);
    const Icon = IconMap[roleSlug] || LucideBriefcase;

    if (!role) return <div>Role not found</div>;

    return (
        <main className="min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-24 px-6 bg-[#FAF7F2]">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-8">
                    <div className="p-4 bg-primary/10 rounded-3xl">
                        <Icon className="w-12 h-12 text-primary" />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black font-heading leading-tight">
                        Perfect <span className="text-gradient">{role.title}s</span> <br />Made Simple.
                    </h1>
                    <p className="max-w-2xl text-xl text-muted-foreground leading-relaxed">
                        {role.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="/signup">
                            <Button size="lg" className="px-10 py-8 text-lg rounded-3xl shadow-xl shadow-primary/20">
                                Build My {roleSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')} Resume
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Role Tips Section */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-4xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-black font-heading">Expert Tips for {roleSlug.replace('-', ' ')}s</h2>
                        <p className="text-muted-foreground">Boost your visibility and beat the ATS with these role-specific insights.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {role.tips.map((tip, idx) => (
                            <div key={idx} className="p-8 bg-[#FAF7F2] rounded-[2rem] border border-border/50 space-y-4 hover:border-primary/30 transition-colors">
                                <LucideCheckCircle2 className="w-8 h-8 text-primary" />
                                <p className="font-bold text-lg leading-snug">{tip}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-24 px-6">
                <div className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-primary/30">
                    <LucideSparkles className="absolute top-10 right-10 w-20 h-20 text-white/10" />
                    <div className="max-w-2xl mx-auto space-y-8 relative">
                        <h2 className="text-4xl md:text-5xl font-black font-heading leading-tight">Ready to stand out in the {roleSlug.replace('-', ' ')} job market?</h2>
                        <p className="text-white/80 text-lg">Join 50,000+ professionals using YourCV to land interviews at top companies.</p>
                        <Link href="/signup">
                            <Button variant="secondary" size="lg" className="px-12 py-8 text-lg rounded-2xl shadow-lg">
                                Get Started for Free
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
