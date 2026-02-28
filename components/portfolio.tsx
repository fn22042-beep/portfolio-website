"use client";

import { useState } from "react";

const categories = ["All", "Logo", "T-shirt", "Business Card", "Web Projects"];

const projects = [
  {
    category: "Logo",
    tag: "Logo + Branding",
    title: "Minimal Mark Logo",
    image: "/images/portfolio/brand-logo.png", // update with your image path
  },
  {
    category: "Logo",
    tag: "Logo",
    title: "Monogram Emblem",
    image: "/images/portfolio/image.png",
  },
  {
    category: "T-shirt",
    tag: "T-shirt + Print",
    title: "Streetwear Tee",
    image: "/images/portfolio/tshirt-streetwear.jpg",
  },
    {
    category: "T-shirt",
    tag: "T-shirt",
    title: "Vintage Print",
    image: "/images/portfolio/t-shirt-design-fortfollio.jpg",
  },
  {
    category: "Business Card",
    tag: "Business Card",
    title: "Minimal Card Set",
    image: "/images/portfolio/i-will-create-professional-buisness-card-design.jpg",
  },
  {
    category: "Business Card",
    tag: "Business Card",
    title: "Corporate Card",
    image: "/images/portfolio/I will create  professional business card design (2).jpg",
  },

  {
    category: "Web Projects",
    tag: "Web + UI",
    title: "Landing — Eco App",
    image: "/images/portfolio/Fish Frocessing.png",
  },
  {
    category: "Web Projects",
    tag: "Web + UI",
    title: "Portfolio Website",
    image: "/images/portfolio/portfolio website.png",
  },
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-white">Portfolio</h2>
        <span className="text-sm text-[#94a3b8] hidden sm:inline">
          Selected projects across categories
        </span>
      </div>

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${
                active === cat
                  ? "bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] text-white"
                  : "bg-[#1e293b] text-[#94a3b8] hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <span className="text-xs text-[#94a3b8] hidden md:inline">
          Hover a project to view details
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filtered.map((project, i) => (
          <div
            key={`${project.title}-${i}`}
            className="group relative rounded-2xl overflow-hidden border border-[#1e293b] hover:border-[#06b6d4]/50 transition-all cursor-pointer"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="text-[10px] text-white/70 mb-1">{project.tag}</p>
                <p className="text-sm font-semibold text-white">{project.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}