# YourCV - AI-Powered Professional Resume Builder

**YourCV** is a premium, state-of-the-art resume builder designed to help professionals create stunning, industry-tailored resumes in minutes. Leveraging AI and a wide array of dynamic templates, YourCV ensures your professional profile stands out to recruiters and applicant tracking systems (ATS).

## 🚀 Features

- **AI-Powered Optimization**: Generate professional summaries and role descriptions using Google Gemini AI.
- **Dynamic Template Engine**: Choose from a library of 10+ professional templates, including high-fidelity "Pikachu" and "Onyx" reactive designs.
- **Niche Specialization**: Industry-specific templates for Tech, Creative, Medical, Corporate, and Trades.
- **Real-Time Preview**: Interactive builder with instant rendering of your data across all templates.
- **PDF Export**: Export high-quality, print-ready PDFs using `html2canvas` and `jspdf`.
- **Payment Integration**: Seamless credit based system powered by Razorpay.
- **Secure Authentication**: Robust user management and data persistence via Supabase.

## 🛠️ Tech Stack

- **Frontend**: [Next.js 16](https://nextjs.org), [React 19](https://react.dev)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com), [Framer Motion](https://www.framer.com/motion/), [GSAP](https://gsap.com)
- **Backend / Database**: [Supabase](https://supabase.com) (Auth, PostgreSQL)
- **AI**: [Google Gemini Pro API](https://ai.google.dev/)
- **Payments**: [Razorpay](https://razorpay.com)
- **Icons**: [Phosphor Icons](https://phosphoricons.com), [Lucide React](https://lucide.dev)

## 📦 Getting Started

### Prerequisites

- Node.js (Latest LTS)
- npm or pnpm
- Supabase Account
- Razorpay Key (for payments)
- Gemini API Key (for AI features)

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
   NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. **Open the application**:
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

## 📄 License

This project is private and owned by Darshit Patel.

---
Built with ❤️ for professional excellence.
