export const metadata = { title: "Services — Arcane Cyber Security" };

export default function Services() {
  const items = [
    { title: "Web & API Pentesting", bullets: ["OWASP ASVS/API", "AuthN/AuthZ abuse", "SSRF, desync, race"] },
    { title: "External / Perimeter", bullets: ["Attack surface mapping", "Exploit dev (where warranted)", "Egress controls"] },
    { title: "Internal / AD", bullets: ["Privilege escalation", "Kerberoasting/NTLM", "Lateral movement"] },
    { title: "IoT / Embedded", bullets: ["Firmware & RF", "UART/JTAG", "Cloud & mobile ties"] },
    { title: "AI / LLM Security", bullets: ["Prompt injection", "RAG poisoning", "Data exfil / jailbreaks"] },
    { title: "Purple Team", bullets: ["Detection engineering", "Use-case tuning", "Tabletop & fix-verify"] },
  ];
  return (
    <div className="py-14">
      <h1 className="hacker text-3xl">Services</h1>
      <p className="mt-3 text-neutral-300">PCI • HIPAA • SOX • SOC2 coverage in deliverables.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {items.map((i) => (
          <div key={i.title} className="rounded-2xl border border-neutral-900/70 bg-arcane-panel p-6">
            <div className="hacker text-arcane-neon">{i.title}</div>
            <ul className="mt-3 list-disc pl-5 text-sm text-neutral-300">
              {i.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
