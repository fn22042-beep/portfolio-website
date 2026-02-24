"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "M. Akter",
    initials: "AK",
    text: "Great communication and professional designs that matched our brief perfectly.",
  },
  {
    name: "R. Islam",
    initials: "RI",
    text: "Naim delivered exceptional logo work with fast turnaround. Highly recommended!",
  },
  {
    name: "S. Rahman",
    initials: "SR",
    text: "Very creative and detail-oriented. The business cards turned out amazing.",
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-white">Testimonials</h2>
        <span className="text-sm text-[#94a3b8] hidden sm:inline">What clients say</span>
      </div>

      <div className="rounded-2xl border border-[#1e293b] bg-[#111827] p-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center text-xs font-bold text-white shrink-0">
            {t.initials}
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold text-white">{t.name}</p>
            <p className="text-sm text-[#94a3b8] truncate">{t.text}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#06b6d4] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-full border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#06b6d4] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
