// components/QuoteForm.tsx
"use client";

import { useState, FormEvent } from "react";

export default function QuoteForm() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value.trim();
    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value.trim(); // honeypot

    // Honeypot: if filled, drop silently
    if (company) {
      setSubmitting(false);
      setStatus({ ok: true, msg: "Thanks! We’ll be in touch." });
      form.reset();
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Email failed");
      }

      setStatus({ ok: true, msg: "Got it — we’ll reach out shortly." });
      form.reset();
    } catch (err: any) {
      setStatus({ ok: false, msg: err?.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="order-1 rounded-2xl bg-white/90 backdrop-blur p-6 shadow-xl ring-1 ring-black/5 md:p-8"
    >
      <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Request a Quote</h2>
      <p className="mt-2 text-slate-600 text-sm">Quick details → focused proposal. No spam.</p>

      {/* Honeypot (hidden from users) */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] -top-[9999px] opacity-0"
        aria-hidden="true"
      />

      <div className="mt-6 grid gap-4">
        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Work Email"
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
          required
        />
        <textarea
          name="message"
          placeholder="What do you want to secure?"
          rows={4}
          className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
          required
        />

        <button
          type="submit"
          disabled={submitting}
          className="rounded-2xl bg-sky-600 px-6 py-3 font-semibold text-white hover:bg-sky-700 disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Request a Quote"}
        </button>

        {status && (
          <p
            className={`text-sm ${
              status.ok ? "text-emerald-700" : "text-rose-700"
            }`}
          >
            {status.msg}
          </p>
        )}
      </div>
    </form>
  );
}
