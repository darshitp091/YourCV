import { Outfit, Source_Sans_3 } from "next/font/google";
import "../styles/globals.css";
import { AuthProvider } from "@/context/AuthContext";
import { JsonLd } from "@/components/seo/JsonLd";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL('https://yourcv.app'), // Replace with actual domain when ready
  title: {
    default: "YourCV | Smart AI-Powered Resume Builder & ATS Optimizer",
    template: "%s | YourCV"
  },
  description: "Build professional, ATS-optimized resumes in minutes with YourCV. AI-driven content, niche-specific templates, and direct LaTeX exports.",
  keywords: ["resume builder", "free resume builder", "ATS resume", "AI resume builder", "cv maker", "professional resume", "LaTeX resume", "career tool"],
  authors: [{ name: "YourCV Team" }],
  creator: "YourCV",
  publisher: "YourCV AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "YourCV | Smart AI-Powered Resume Builder",
    description: "Launch your career with an ATS-optimized resume. AI-powered writing and premium templates.",
    url: 'https://yourcv.app',
    siteName: 'YourCV',
    images: [
      {
        url: '/og-image.png', // We should generate this later
        width: 1200,
        height: 630,
        alt: 'YourCV AI Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "YourCV | AI Resume Builder",
    description: "Build professional resumes in minutes with AI.",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${sourceSans.variable} font-body antialiased`}
      >
        <JsonLd />
        <AuthProvider>
          {children}
        </AuthProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
