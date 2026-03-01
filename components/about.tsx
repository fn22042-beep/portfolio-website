export default function About() {
  const skills = ["Logo Design", "Branding", "Amazon Images", "Photo Editing"]

  return (
    <section id="about" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-white">About Me</h2>
        <span className="text-sm text-[#94a3b8] hidden sm:inline">Short bio & experience</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left */}
        <div className="rounded-2xl border border-[#1e293b] bg-[#111827] p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center text-xs font-bold text-white">
              NH
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Md. Naim Hasan</p>
              <p className="text-xs text-[#94a3b8]">Graphic Designer + Junior Web Developer</p>
            </div>
          </div>

          <p className="text-sm text-[#94a3b8] leading-relaxed mb-6">
            {"I'm a passionate Graphic Designer from Bangladesh with over 2+ years of experience designing logos, business cards, T-shirts, email signatures, Amazon product images, and other visual assets. I combine aesthetic sensibility with attention to detail to produce polished, brand-forward designs. Currently learning Next.js to create modern, responsive web experiences."}
          </p>

          <div className="flex items-center gap-6 mb-6">
            <div className="text-center rounded-xl border border-[#1e293b] bg-[#0d1117] px-6 py-4">
              <p className="text-2xl font-bold text-white">2</p>
              <p className="text-xs text-[#94a3b8]">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold text-white">Brand<br />Focus</p>
              <p className="text-xs text-[#94a3b8]">Logos,<br />Packaging</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#portfolio"
              className="px-5 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] hover:opacity-90 transition-opacity"
            >
              See Work
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium text-[#94a3b8] hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="rounded-2xl border border-[#1e293b] bg-[#111827] p-6">
          <h3 className="text-lg font-semibold text-white mb-3">Experience & Learning</h3>
          <p className="text-sm text-[#94a3b8] leading-relaxed mb-4">
            {"I bring creative direction, typography, and visual problem-solving to each brief. I'm expanding my skillset into web development using Next.js and building responsive UI to implement polished design systems."}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 rounded-lg bg-[#1e293b] text-xs text-[#94a3b8]"
              >
                {skill}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-white mb-3">Quick Facts</h3>
          <ul className="space-y-2 text-sm text-[#94a3b8]">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06b6d4] shrink-0" />
              Strong visual identity and brand-first approach
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06b6d4] shrink-0" />
              Fast turnaround, clear communication
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06b6d4] shrink-0" />
              {"Open to collaboration & long-term projects"}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
