import { NextResponse } from "next/server"

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

export async function GET() {
  return NextResponse.json({ testimonials })
}
