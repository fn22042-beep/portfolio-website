const designTools = [
  { name: "Photoshop", desc: "Image editing, retouch", level: 90 },
  { name: "Illustrator", desc: "Vector & logo work", level: 85 },
  { name: "Canva", desc: "Quick layouts & social", level: 80 },
  { name: "Figma", desc: "UI & prototyping", level: 70 },
]

const devTools = [
  { name: "VS Code", desc: "Daily coding", level: 75 },
  { name: "Next.js", desc: "Learning modern apps", level: 50 },
]

const otherSkills = [
  "Logo & brand identity",
  "Product listing optimization",
  "Print & packaging layouts",
  "Photo retouch and compositing",
]

const tags = ["Logo", "Branding", "UI", "Editing"]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-white">{"Skills & Tools"}</h2>
        <span className="text-sm text-[#94a3b8] hidden sm:inline">Design and development tools I use</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Design Tools */}
        <div className="rounded-2xl border border-[#1e293b] bg-[#111827] p-6">
          <h3 className="text-base font-semibold text-white mb-5">Design Tools</h3>
          <div className="grid grid-cols-2 gap-4">
            {designTools.map((tool) => (
              <div key={tool.name}>
                <p className="text-sm font-medium text-white">{tool.name}</p>
                <p className="text-xs text-[#94a3b8] mb-2">{tool.desc}</p>
                <div className="w-full h-1.5 rounded-full bg-[#1e293b]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]"
                    style={{ width: `${tool.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div className="rounded-2xl border border-[#1e293b] bg-[#111827] p-6">
          <h3 className="text-base font-semibold text-white mb-5">Other Skills</h3>
          <ul className="space-y-2 mb-5">
            {otherSkills.map((skill) => (
              <li key={skill} className="flex items-start gap-2 text-sm text-[#94a3b8]">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#06b6d4] shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#1e293b] text-xs text-[#94a3b8]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Development Tools */}
      <div className="mt-6 rounded-2xl border border-[#1e293b] bg-[#111827] p-6">
        <h3 className="text-base font-semibold text-white mb-5">Development Tools</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {devTools.map((tool) => (
            <div key={tool.name}>
              <p className="text-sm font-medium text-white">{tool.name}</p>
              <p className="text-xs text-[#94a3b8] mb-2">{tool.desc}</p>
              <div className="w-full h-1.5 rounded-full bg-[#1e293b]">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]"
                  style={{ width: `${tool.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
