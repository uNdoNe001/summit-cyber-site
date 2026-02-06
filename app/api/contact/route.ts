export const runtime = "nodejs";

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = body.name;
    const email = body.email;

    // accept either old or new field names
    const company = body.company ?? "";
    const message = body.message ?? body.notes ?? "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Missing name/email/message" },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || 465);

    // allow explicit override, otherwise infer from port
    const secure =
      process.env.SMTP_SECURE != null
        ? String(process.env.SMTP_SECURE) === "true"
        : port === 465;

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      return NextResponse.json(
        { ok: false, error: "Missing SMTP_USER/SMTP_PASS" },
        { status: 500 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || process.env.SMTP_TO || user;
    const from =
      process.env.CONTACT_FROM_EMAIL || `"Summit Cyber" <${user}>`;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `New Contact Request — Summit Cyber`,
      text: `Name: ${name}
Email: ${email}
Company: ${company || "N/A"}
Message: ${message}`.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SMTP error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
