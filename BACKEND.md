# Portfolio Backend Setup

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form (sends email) |
| GET | `/api/projects` | Get portfolio projects (optional `?category=Logo`) |
| GET | `/api/testimonials` | Get testimonials |

## Contact Form Email Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Sign up at [Resend](https://resend.com) (free tier: 100 emails/day)

3. Get your API key from Resend Dashboard → API Keys

4. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   ```

5. **Important:** Resend free tier sends to the email you signed up with. Use `CONTACT_EMAIL` if you want messages at a different address (requires domain verification).

## Local Development

- Without `RESEND_API_KEY`: Form submits successfully but email is not sent (logged to console)
- With `RESEND_API_KEY`: Emails are delivered to your inbox

## Contact Form Validation

- **Name:** 2–100 characters
- **Email:** Valid email format
- **Subject:** Optional, max 200 characters
- **Message:** 10–2000 characters
