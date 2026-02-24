# পরবর্তী ধাপগুলো (Next Steps)

## 1. Local Development Test (ইমেইল ছাড়া)

```bash
npm run dev
```

- Browser এ `http://localhost:3000` খুলুন
- Contact form টেস্ট করুন
- **Note:** `RESEND_API_KEY` ছাড়া form submit হবে কিন্তু ইমেইল পাঠানো হবে না (console এ log দেখবেন)

## 2. Email Setup (Production এর জন্য)

### Option A: Resend (Recommended - Free)
1. [Resend.com](https://resend.com) এ sign up করুন
2. API Key নিন (Dashboard → API Keys)
3. `.env.local` file তৈরি করুন:
   ```bash
   # Windows PowerShell
   Copy-Item .env.example .env.local
   
   # বা manually তৈরি করুন
   ```
4. `.env.local` এ API key যোগ করুন:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   CONTACT_EMAIL=naim191982@gmail.com
   ```

### Option B: Alternative Email Services
- **Nodemailer** (Gmail SMTP)
- **SendGrid**
- **Mailgun**

## 3. Test Contact Form

1. Development server চালু করুন: `npm run dev`
2. Contact section এ যান
3. Form fill করুন:
   - Name: আপনার নাম
   - Email: test@example.com
   - Message: Test message
4. Submit করুন
5. Success toast দেখবেন
6. Email inbox check করুন (যদি Resend setup করা থাকে)

## 4. Build & Deploy

### Local Build Test
```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)
1. GitHub এ push করুন
2. [Vercel.com](https://vercel.com) এ sign up/login
3. "New Project" → GitHub repo select করুন
4. Environment Variables যোগ করুন:
   - `RESEND_API_KEY` = আপনার API key
   - `CONTACT_EMAIL` = naim191982@gmail.com
5. Deploy করুন

### Deploy to Other Platforms
- **Netlify**: Similar process, add env vars in dashboard
- **Railway**: Auto-detects Next.js, add env vars
- **Render**: Connect repo, add env vars

## 5. Post-Deployment Checklist

- [ ] Contact form কাজ করছে
- [ ] Email inbox এ message পাচ্ছেন
- [ ] Mobile responsive check করুন
- [ ] All links কাজ করছে
- [ ] Portfolio projects দেখাচ্ছে
- [ ] Testimonials দেখাচ্ছে

## 6. Optional Improvements

### Database Integration (Future)
- Contact messages database এ save করতে পারেন
- MongoDB/Supabase/PostgreSQL ব্যবহার করুন

### Admin Panel (Future)
- Contact messages দেখার জন্য admin panel
- Projects/Testimonials manage করার জন্য CMS

### Analytics
- Vercel Analytics (already added)
- Google Analytics (optional)

## Troubleshooting

### Email না যাচ্ছে?
- `.env.local` file আছে কিনা check করুন
- `RESEND_API_KEY` সঠিক আছে কিনা verify করুন
- Resend dashboard এ email logs check করুন
- Console errors check করুন

### Form submit হচ্ছে না?
- Browser console check করুন
- Network tab এ API call দেখুন
- Validation errors আছে কিনা check করুন

### Build Error?
```bash
npm run lint
# Fix any TypeScript/ESLint errors
```
