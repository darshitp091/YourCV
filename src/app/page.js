"use client";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { TemplateShowcase } from "@/components/landing/TemplateShowcase";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { CTASection } from "@/components/landing/CTASection";
import { Testimonials } from "@/components/landing/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <HeroSection />

      <div id="features">
        <FeaturesSection />
      </div>

      <TemplateShowcase />
      <Testimonials />

      <div id="pricing">
        <PricingSection />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <CTASection />

      <Footer />
    </main>
  );
}
