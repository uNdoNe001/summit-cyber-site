"use client";

import { useState } from "react";

export default function ContactForm() {
  const [state, setState] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    try {
      const data = Object.fromEntries(new FormData(e.currentTarget) as any);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data)
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <form onSubmit={submit} className="mt-6 grid gap-4 max-w-xl">
      <input required name="name" placeholder="Your name" className="rounded-xl bg-black/50 border border-neutral-800 px-4 py-3" />
      <input required name="email" type="email" placeholder="Work email" className="rounded-xl bg-black/50 border border-neutral-800 px-4 py-3" />
      <input name="company" placeholder="Company" className="rounded-xl bg-black/50 border border-neutral-800 px-4 py-3" />
      <textarea name="notes" placeholder="Brief context, targets, timelines…" rows={5} className="rounded-xl bg-black/50 border border-neutral-800 px-4 py-3" />
      <button disabled={state!=="idle"} className="btn btn-primary w-fit">
        {state==="sending" ? "Sending…" : "Send"}
      </button>
      {state==="sent" && <p className="text-arcane-neon text-sm">Received — we’ll reach out shortly.</p>}
      {state==="error" && <p className="text-red-400 text-sm">Something went wrong. Try again.</p>}
    </form>
  );
}
