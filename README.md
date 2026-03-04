# YourCV - The AI-Powered Community Resume Builder 🚀

**YourCV** is a high-performance, open-source resume builder designed to level the professional playing field. By combining **Google Gemini AI** with **LaTeX-quality precision**, YourCV helps you build job-winning resumes in minutes—completely free, forever.

### 🌟 Why YourCV?
Most "free" resume builders lock your best work behind a paywall at the last second. YourCV is built differently. We are **100% ad-supported and community-driven**, meaning you get premium features like AI refinement, unlimited templates, and watermark-free exports without ever opening your wallet.

## ✨ Key Features

- **🛡️ 100% Free & Unlimited**: No subscription, no "credits", no catch. Build 1 or 100 resumes.
- **🧠 AI-Engineered Content**: Leverage Google Gemini Pro to write professional summaries and bullet points that beat ATS filters.
- **🎨 Premium Templates**: Access a library of sleek, modern, and reactive templates (including "Pikachu" and "Onyx").
- **📑 LaTeX-Level Precision**: Clean, professional layouts that look perfect on any screen or printer.
- **🚫 Zero Watermarks**: Your data, your resume. Download clean PDFs every time.
- **📈 Ad-Supported Mission**: Powered by non-intrusive ads to keep the servers running and the tools free for all.

## 🛠️ Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org), [React 19](https://react.dev)
- **Styling**: Vanilla CSS (Premium Custom Design), [Framer Motion](https://www.framer.com/motion/)
- **Backend**: [Supabase](https://supabase.com) (Auth & PostgreSQL)
- **AI Engine**: [Google Gemini Pro](https://ai.google.dev/)
- **Monetization**: [Adsterra](https://adsterra.com)

## 📦 Local Development

### Prerequisites
- Node.js 18+
- Supabase Project (Auth & DB)
- Gemini API Key

### Setup
1. **Clone & Install**:
   ```bash
   git clone https://github.com/darshitp091/YourCV.git
   cd YourCV
   npm install
   ```

2. **Environment Configuration**:
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_key
   ```

3. **Launch**:
   ```bash
   npm run dev
   ```

## 📄 License
Distributed under the MIT License. See `LICENSE` for more information.

---
**Built with ❤️ for a fairer job market.**
