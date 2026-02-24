"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { Mail, MapPin, Phone, Loader2 } from "lucide-react"
import { contactSchema, type ContactFormData } from "@/lib/validations/contact"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "" },
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json()

      if (!res.ok) {
        if (json.errors) {
          Object.entries(json.errors).forEach(([, messages]) => {
            const msg = Array.isArray(messages) ? messages[0] : messages
            if (msg) toast.error(msg)
          })
        } else {
          toast.error(json.error || "Failed to send message")
        }
        return
      }

      toast.success("Message sent successfully! I'll get back to you soon.")
      reset()
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 px-4 lg:px-8 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-white">Contact</h2>
        <span className="text-sm text-[#94a3b8] hidden sm:inline">{"Let's work together — send a message"}</span>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                {...register("name")}
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1e293b] text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] transition-colors"
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
              )}
            </div>
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1e293b] text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] transition-colors"
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
              )}
            </div>
          </div>
          <div>
            <input
              {...register("subject")}
              type="text"
              placeholder="Subject (optional)"
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1e293b] text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] transition-colors"
            />
          </div>
          <div>
            <textarea
              {...register("message")}
              placeholder="Your message"
              rows={5}
              className="w-full px-4 py-3 rounded-xl bg-[#111827] border border-[#1e293b] text-sm text-white placeholder-[#64748b] focus:outline-none focus:border-[#06b6d4] transition-colors resize-none"
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-xs text-[#94a3b8]">Or reach out via social links.</p>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 text-sm font-medium text-white rounded-lg bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="rounded-2xl border border-[#1e293b] bg-[#111827] p-6">
          <h3 className="text-base font-semibold text-white mb-1">Contact Info</h3>
          <p className="text-xs text-[#94a3b8] mb-6">{"Based in Bangladesh • Available for freelance & remote work"}</p>

          <div className="space-y-5">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#06b6d4]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Email</p>
                <p className="text-xs text-[#94a3b8]">naim191982@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-[#06b6d4]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">Location</p>
                <p className="text-xs text-[#94a3b8]">Bangladesh</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#06b6d4]" />
              </div>
              <div>
                <p className="text-sm font-medium text-white">WhatsApp</p>
                <p className="text-xs text-[#94a3b8]">+8801310361853</p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-semibold text-white mb-3">Follow</p>
            <div className="flex items-center gap-3">
              {["Facebook", "Behance", "GitHub", "LinkedIn", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-[#1e293b] flex items-center justify-center text-[#94a3b8] hover:text-[#06b6d4] hover:border-[#06b6d4] transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
