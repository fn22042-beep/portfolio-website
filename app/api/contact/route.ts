import { NextResponse } from "next/server"
import { contactSchema } from "@/lib/validations/contact"
import { sendContactEmail } from "@/lib/email"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = contactSchema.safeParse(body)

    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = parsed.data

    const result = await sendContactEmail({ name, email, subject, message })

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error || "Failed to send message" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" })
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request" },
      { status: 400 }
    )
  }
}
