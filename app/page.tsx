"use client";
import TerminalHero from "@/components/TerminalHero";
import { motion } from "framer-motion";
import { Shield, Target, Cpu, Network } from "lucide-react";

export default function HomePage() {
  return (
    <div className="py-16">
      <TerminalHero />

      {/* Proof points */}
      <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { icon: Shield, title: "Certified US Team", text: "CPTS / OSCP / CWES / CISSP" },
          { icon: Target, title: "Purple Team", text: "Offense + defense to uplevel SOC" },
          { icon: Cpu, title: "AI Pentesting", text: "Prompt inj., guardrails, data exfil" },
          { icon: Network, title: "Full Stack", text: "Web • Internal • External • IoT" },
        ].map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-neutral-900/70 bg-black/40 p-6"
          >
            <c.icon className="mb-4" />
            <div className="hacker">{c.title}</div>
            <p className="mt-2 text-neutral-400 text-sm">{c.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Services summary */}
      <section className="mt-24">
        <h2 className="hacker text-2xl">Core Services</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            { title: "Web App & API Pentest", desc: "OWASP ASVS / API top 10, authZ bypass, data exposure." },
            { title: "Internal / External Network", desc: "AD/Azure AD abuse, lateral movement, egress/resilience." },
            { title: "IoT / Embedded", desc: "RF, firmware extraction, hw interfaces, cloud side." },
            { title: "AI / LLM Security", desc: "Prompt injection, RAG poisoning, jailbreak, model exfil." },
          ].map((s, i) => (
            <div key={i} className="rounded-2xl border border-neutral-900/70 bg-arcane-panel p-6">
              <div className="hacker text-arcane-neon">{s.title}</div>
              <p className="mt-2 text-neutral-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 text-sm text-neutral-400">
          Compliance coverage: PCI, HIPAA, SOX, SOC2 (evidence-ready reporting).
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24 rounded-3xl border border-neutral-900/70 bg-black/50 p-10">
        <h3 className="hacker text-2xl">Ready to simulate real adversaries?</h3>
        <p className="mt-2 text-neutral-300 text-sm">We’ll scope to risk, not vanity metrics.</p>
        <a className="btn btn-primary mt-6" href="/contact">Start scoping</a>
      </section>
    </div>
  );
}
