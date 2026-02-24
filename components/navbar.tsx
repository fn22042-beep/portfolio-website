"use client"

import { useState } from "react"
import { Moon, Menu, X } from "lucide-react"

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117]/90 backdrop-blur-md border-b border-[#1e293b]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#06b6d4] to-[#8b5cf6] flex items-center justify-center text-sm font-bold text-white">
            NH
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-white leading-tight">Md. Naim Hasan</p>
            <p className="text-[11px] text-[#94a3b8] leading-tight">Graphic Designer & Web Developer</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <button
            className="w-9 h-9 rounded-full border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            <Moon className="w-4 h-4" />
          </button>
          <a href="#contact" className="hidden sm:inline-flex text-sm text-[#94a3b8] hover:text-white transition-colors">
            Hire Me
          </a>
          <a
            href="#portfolio"
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] hover:opacity-90 transition-opacity"
          >
            View Portfolio
          </a>
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center text-[#94a3b8]"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0d1117] border-t border-[#1e293b] px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#94a3b8] hover:text-white transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#portfolio"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6]"
            onClick={() => setMobileOpen(false)}
          >
            View Portfolio
          </a>
        </div>
      )}
    </nav>
  )
}
