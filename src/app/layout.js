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
  metadataBase: new URL('https://your-cv-eta.vercel.app'),
  title: {
    default: "YourCV | Smart AI-Powered Resume Builder & ATS Optimizer",
    template: "%s | YourCV"
  },
  description: "Build a job-winning resume in minutes with AI. YourCV uses advanced algorithms to optimize your resume for ATS, provides premium templates, and offers direct LaTeX exports for the highest professional standard.",
  keywords: [
    // Tier 1: High Volume (10K-100K+/mo)
    "resume builder", "cv maker", "free resume builder", "resume maker",
    "build resume online", "AI resume builder", "resume templates",
    "cv builder", "resume format", "resume generator",
    // Tier 2: Medium Volume (1K-10K/mo)
    "ATS resume builder", "professional resume builder", "best resume builder",
    "resume builder AI free", "resume builder online free", "resume maker online",
    "create resume free", "one page resume", "online cv maker free",
    "resume builder free download",
    // Tier 3: Long-Tail (100-1K/mo, Low Competition)
    "ATS friendly resume template free", "AI resume writer free",
    "resume builder for freshers", "resume builder for students",
    "free resume builder no credit card", "LaTeX resume builder",
    "resume builder with AI", "ATS score checker free",
    "resume builder India", "resume for software engineer",
    "resume for data scientist", "resume for product manager",
    "best free resume builder 2026", "professional CV template free download",
    "modern resume template free", "ATS optimized resume",
    "smart resume optimizer", "AI job application",
    "career growth tools", "resume writing tips",
    "how to write a resume", "resume examples",
    "resume keywords for ATS", "job application resume format"
  ],
  authors: [{ name: "Darshit Patel", url: "https://your-cv-eta.vercel.app/about" }],
  creator: "YourCV AI",
  publisher: "YourCV AI",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "YourCV | Smart AI-Powered Resume Builder",
    description: "Stop getting rejected by bots. Create an ATS-proof resume with AI-driven content optimization and professional LaTeX templates.",
    url: 'https://your-cv-eta.vercel.app',
    siteName: 'YourCV',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'YourCV AI Resume Platform Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "YourCV | The Future of Resume Building",
    description: "Launch your career with an AI-engineered resume that beats the ATS every time.",
    creator: "@yourcv_ai",
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "0WrWMJSbAPlEDBaLCgaWgJS-aih-NIocVf-GeRtVP4c",
  },
  category: 'technology',
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
        {/* Adsterra Social Bar (Anti-Adblock) */}
        <script type='text/javascript' src='//pl25927364.highperformanceformat.com/73/b6/b2/73b6b292ed780e89f620ff15c77b7ef0.js' async></script>
        {/* Adsterra Pop-under (Main Revenue Tab) */}
        <script type='text/javascript' src='//pl25927364.highperformanceformat.com/a4/bc/cc/a4bccc84e68e42d07fe284186b2af48a.js' async></script>
      </body>
    </html>
  );
}
