import { NextResponse } from "next/server"

const projects = [
  {
    category: "Logo",
    tag: "Logo + Branding",
    title: "Minimal Mark Logo",
    gradient: "from-[#6366f1] to-[#06b6d4",
  },
  {
    category: "T-shirt",
    tag: "T-shirt + Print",
    title: "Streetwear Tee",
    gradient: "from-[#ec4899] to-[#f97316",
  },
  {
    category: "Business Card",
    tag: "Business Card",
    title: "Corporate Card",
    gradient: "from-[#06b6d4] to-[#10b981]",
  },
  {
    category: "Web Projects",
    tag: "Web + UI",
    title: "Landing — Eco App",
    gradient: "from-[#3b82f6] to-[#8b5cf6]",
  },
  {
    category: "Logo",
    tag: "Logo",
    title: "Monogram Emblem",
    gradient: "from-[#8b5cf6] to-[#6366f1]",
  },
  {
    category: "Business Card",
    tag: "Business Card",
    title: "Minimal Card Set",
    gradient: "from-[#06b6d4] to-[#3b82f6]",
  },
  {
    category: "T-shirt",
    tag: "T-shirt",
    title: "Vintage Print",
    gradient: "from-[#f97316] to-[#ec4899]",
  },
  {
    category: "Web Projects",
    tag: "Web + Next.js",
    title: "Portfolio Website",
    gradient: "from-[#06b6d4] to-[#8b5cf6]",
  },
]

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get("category")

  const filtered =
    category && category !== "All"
      ? projects.filter((p) => p.category === category)
      : projects

  return NextResponse.json({ projects: filtered })
}
