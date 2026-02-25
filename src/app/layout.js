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
  metadataBase: new URL('https://yourcv.app'),
  title: {
    default: "YourCV | Smart AI-Powered Resume Builder & ATS Optimizer",
    template: "%s | YourCV"
  },
  description: "Build a job-winning resume in minutes with AI. YourCV uses advanced algorithms to optimize your resume for ATS, provides premium templates, and offers direct LaTeX exports for the highest professional standard.",
  keywords: [
    "resume builder",
    "AI resume maker",
    "ATS optimized resume",
    "free cv builder",
    "professional resume templates",
    "LaTeX resume generator",
    "career growth tools",
    "AI job application",
    "smart resume optimizer"
  ],
  authors: [{ name: "Darshit Patel", url: "https://yourcv.app/about" }],
  creator: "YourCV AI",
  publisher: "YourCV AI",
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "YourCV | Smart AI-Powered Resume Builder",
    description: "Stop getting rejected by bots. Create an ATS-proof resume with AI-driven content optimization and professional LaTeX templates.",
    url: 'https://yourcv.app',
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
      </body>
    </html>
  );
}
