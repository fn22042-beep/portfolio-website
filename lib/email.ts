/**
 * Email sending via Resend (https://resend.com)
 * Add RESEND_API_KEY to .env.local for production
 */
const RESEND_API_URL = "https://api.resend.com/emails"
const TO_EMAIL = process.env.CONTACT_EMAIL || "naim191982@gmail.com"

export async function sendContactEmail(data: {
  name: string
  email: string
  subject?: string
  message: string
}): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn("RESEND_API_KEY not set - email not sent. Message:", data)
    return { success: true } // Still return success for dev - message would be logged
  }

  try {
    const res = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: data.subject
          ? `[Portfolio] ${data.subject}`
          : `[Portfolio] Message from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        html: `
          <h2>New contact form submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, "<br>")}</p>
        `,
      }),
    })

    const json = await res.json()
    if (!res.ok) {
      return { success: false, error: json.message || "Failed to send email" }
    }
    return { success: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return { success: false, error: message }
  }
}
