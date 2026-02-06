Arcane Cyber Security — Website

Green-on-black, OffSec-inspired Next.js site for Arcane Cyber Security (arcanesec.net).
US-based certified pentesters. Red & purple team. PCI / HIPAA / SOX / SOC2.

Tech stack

Next.js 14 (App Router) + TypeScript

Tailwind CSS (custom arcane palette)

Framer Motion (subtle motion)

Nodemailer (Gmail SMTP) for contact form

Deployed on Vercel

Quick start
# Install
npm i

# Dev
npm run dev     # http://localhost:3000

# Production build
npm run build && npm start

Environment variables

Set these in Vercel → Project → Settings → Environment Variables (and in .env.local for local dev):

# Gmail SMTP (recommended for quick launch)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465            # or 587 if you prefer STARTTLS + secure: false
SMTP_USER=you@gmail.com  # must match the sender address
SMTP_PASS=****************  # 16-digit App Password (see notes below)

# Contact routing
CONTACT_FROM_EMAIL=you@gmail.com
CONTACT_TO_EMAIL=you@gmail.com


Gmail App Password:
Google Account → Security → 2-Step Verification → App Passwords → create one for “Mail” (custom name e.g., ArcaneSec Form). Use that 16-digit password for SMTP_PASS.

Optional: Resend (instead of Gmail SMTP)

If you switch later:

RESEND_API_KEY=...
CONTACT_FROM_EMAIL=noreply@arcanesec.net
CONTACT_TO_EMAIL=ops@arcanesec.net


…and swap the API route to the Resend version.

Project scripts

npm run dev — Next dev server

npm run build — Production build

npm run start — Start prod server

npm run lint — Next/ESLint

File tree (high level)
app/
  api/contact/route.ts     # Email handler (Node runtime)
  about/page.tsx
  contact/page.tsx
  methodology/page.tsx
  services/page.tsx
  layout.tsx
  page.tsx                 # Home (TerminalHero)
  globals.css
components/
  ContactForm.tsx
  TerminalHero.tsx
public/
  favicon.svg
  logo-arcane.svg
  wordmark-arcane.svg
tailwind.config.ts
postcss.config.js
next.config.ts
package.json
tsconfig.json

Styling

Tailwind custom palette in tailwind.config.ts:

colors: {
  arcane: {
    bg: "#050505",
    panel: "#0b0f0b",
    text: "#d6ffd6",
    neon: "#38ff6b",
    dim: "#6fbf7a"
  }
}


Key utility classes used: text-arcane-neon, text-arcane-text, panel borders, subtle scanlines.

Security & performance

Security headers via next.config.ts (X-Frame-Options, CSP, etc.)

Minimal client JS; App Router server components by default

Accessible, keyboard-friendly forms and links

Deploy (Vercel)

Connect repo → New Project → Framework: Next.js (auto-detected).

Add env vars (see above).

Deploy.

Add domain arcanesec.net in Project → Settings → Domains → follow DNS prompts.

Local development with env

Create .env.local (not committed):

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=you@gmail.com
SMTP_PASS=****************
CONTACT_FROM_EMAIL=you@gmail.com
CONTACT_TO_EMAIL=you@gmail.com

Troubleshooting

Build fails: “Can’t resolve './globals.css'”
Ensure file is app/globals.css (plural) and committed.

Tailwind classes missing (text-arcane-text not found)
Confirm tailwind.config.ts exists at repo root and content includes ./app/**/*.{ts,tsx}, ./components/**/*.{ts,tsx}. Rebuild.

Nodemailer not found / types error
nodemailer in dependencies and @types/nodemailer in devDependencies.
API route exports export const runtime = "nodejs"; at top.

Gmail blocks or throttles
Use App Passwords; avoid Free Gmail for volume. For reliability, move to Resend or AWS SES.

Roadmap

/legal (privacy, NDA, evidence handling)

Case studies (MDX) + research drops

Vercel Analytics (no cookies)

SES/Resend mail adapter and retry logic

License

Proprietary © Arcane Cyber Security. All rights reserved.
