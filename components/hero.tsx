import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        {/* Left Column */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center text-sm font-bold text-white">
              N
            </div>
            <div>
              <p className="text-xs text-[#94a3b8]">{"Hello, I'm"}</p>
              <p className="text-sm font-semibold text-white">Md. Naim Hasan</p>
            </div>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-4 text-balance">
            Graphic Designer & Web Developer
          </h1>

          <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 max-w-lg">
            {
              "I craft memorable brand identities and engaging visuals \u2014 logos, business cards, T-shirts, Amazon images and more. I'm learning modern web development to bring designs to life with Next.js."
            }
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <a
              href="#portfolio"
              className="px-5 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] hover:opacity-90 transition-opacity"
            >
              View Portfolio
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium text-white rounded-lg border border-[#1e293b] hover:border-[#06b6d4] transition-colors"
            >
              Hire Me
            </a>

            {/* ✅ FIXED: Download CV button */}
            <a
              href="/documents/cv.pdf" 
              download="cv.pdf"
              className="px-5 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">
                2+
              </span>
              <span className="text-xs text-[#94a3b8]">
                2+ years
                <br />
                Graphic Design Experience
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] bg-clip-text text-transparent">
                10+
              </span>
              <span className="text-xs text-[#94a3b8]">
                12
                <br />
                Projects Completed
              </span>
            </div>
          </div>
        </div>

        {/* Right Column - Profile Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-2xl border border-[#1e293b] bg-[#111827] overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-[#06b6d4] via-[#8b5cf6] to-[#06b6d4] flex items-center justify-center">
              <div className="text-center">
                <img
                  src="/naim-hasan.png"
                  alt="Profile"
                  className="w-24 h-24 rounded-full mx-auto mb-3 border-4 border-white/20 object-cover"
                />
                <p className="text-2xl font-bold text-white">Md. Naim Hasan</p>
                <p className="text-sm text-white/80">Mawlana Bhashani Science and Technology University</p>
                <p className="text-xs text-white/60">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
            <div className="p-5 text-center">
              <p className="text-sm font-semibold text-white mb-1">
                Graphic Designer + Junior Web Developer
              </p>
              <p className="text-xs text-[#94a3b8] mb-4">
                Specialized in branding, product visuals, and responsive web UI
              </p>
              <div className="flex justify-center gap-3">
                <span className="px-4 py-2 rounded-lg bg-[#1e293b] text-xs text-[#94a3b8]">
                  <span className="block text-white font-medium">Logo</span>
                  Brand Identity
                </span>
                <span className="px-4 py-2 rounded-lg bg-[#1e293b] text-xs text-[#94a3b8]">
                  <span className="block text-white font-medium">Web</span>
                  Next.js
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}