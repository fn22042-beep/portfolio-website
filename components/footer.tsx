import { Dribbble, Github, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-[#1e293b] py-8 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-white">Md. Naim Hasan</span>
          <span className="text-xs text-[#94a3b8]">{"Creative Graphic Designer & Web Developer"}</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">3+</span>
            <span className="text-[10px] text-[#94a3b8]">Years</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-white">12</span>
            <span className="text-[10px] text-[#94a3b8]">Projects</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {[Dribbble, Github, Linkedin].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-8 h-8 rounded-full border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-[#06b6d4] hover:border-[#06b6d4] transition-colors"
              aria-label="Social link"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
