/* Server-only email handler */

// Force Node runtime (needed for nodemailer, avoids Edge runtime)
export const runtime = "nodejs";

import { NextResponse } from "next/server";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nodemailer = require("nodemailer");

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = Number(process.env.SMTP_PORT || 465);
    const secure = String(process.env.SMTP_SECURE || "true") === "true";
    const user = process.env.SMTP_USER!;
    const pass = process.env.SMTP_PASS!;
    const to = process.env.SMTP_TO || user;

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Summit Cyber Quote" <${user}>`,
      to,
      subject: `New Quote Request from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SMTP error:", err);
    return NextResponse.json(
      { success: false, error: "Email failed" },
      { status: 500 }
    );
  }
}
