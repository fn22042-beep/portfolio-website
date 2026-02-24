import { Layers, Square, Shirt, MailCheck, Image, Globe } from "lucide-react"

const services = [
  {
    icon: Layers,
    title: "Logo Design",
    description: "Create distinct logos and brand systems that scale from web to print.",
  },
  {
    icon: Square,
    title: "Business Card",
    description: "Professional, print-ready business card layouts that reflect brand identity.",
  },
  {
    icon: Shirt,
    title: "T-shirt Design",
    description: "Unique merchandise designs optimized for printing and presentation.",
  },
  {
    icon: MailCheck,
    title: "Email Signature",
    description: "Branded email signatures that look professional across devices.",
  },
  {
    icon: Image,
    title: "Amazon Product Images",
    description: "Optimized A+ content and listing images that boost conversions.",
  },
  {
    icon: Globe,
    title: "Website Design",
    description: "Modern, responsive web UI designs. Basic development with Next.js & HTML/CSS.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-white">Services</h2>
        <span className="text-sm text-[#94a3b8] hidden sm:inline">What I can help with</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="rounded-2xl border border-[#1e293b] bg-[#111827] p-5 hover:border-[#06b6d4]/50 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-[#1e293b] flex items-center justify-center mb-4 group-hover:bg-[#06b6d4]/10 transition-colors">
                <Icon className="w-5 h-5 text-[#94a3b8] group-hover:text-[#06b6d4] transition-colors" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-xs text-[#94a3b8] leading-relaxed">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
