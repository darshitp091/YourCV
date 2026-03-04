# YourCV - Open-Source Professional Resume Builder

**YourCV** is an open-source, state-of-the-art resume builder designed to help professionals create stunning, industry-tailored resumes for free. Supported by the community, YourCV ensures your professional profile stands out to recruiters and applicant tracking systems (ATS) without any subscription fees or limits.

## 🚀 Features

- **100% Free & Unlimited**: Build and export as many resumes as you need. No credits, no limits.
- **AI-Powered Optimization**: Generate professional summaries and role descriptions using Google Gemini AI.
- **Dynamic Template Engine**: Access the full library of professional templates, including reactive designs like "Pikachu" and "Onyx".
- **Niche Specialization**: Industry-specific templates for Tech, Creative, Medical, Corporate, and more.
- **Real-Time Preview**: Instant rendering of your data across all templates.
- **PDF Export**: Export high-quality, print-ready PDFs without watermarks.
- **Community Supported**: Monetized through Adsterra ads to keep the tool free for everyone.

## 🛠️ Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org), [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com), [Framer Motion](https://www.framer.com/motion/)
- **Backend / Database**: [Supabase](https://supabase.com) (Auth, PostgreSQL)
- **AI**: [Google Gemini Pro API](https://ai.google.dev/)
- **Ad Network**: [Adsterra](https://adsterra.com)
- **Icons**: [Lucide React](https://lucide.dev)

## 📦 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- npm or pnpm
- Supabase Account
- Gemini API Key (for AI features)
- Adsterra API Key (optional for stats)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/darshitp091/YourCV.git
   cd YourCV
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env.local` file in the root directory and add your credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ADSTERRA_API_KEY=your_adsterra_api_key
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the application**:
   Navigate to [http://localhost:3000](http://localhost:3000).

## 📄 License

This project is open-source under the MIT License.

---
Built with ❤️ for professional excellence.
