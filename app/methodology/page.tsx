export const metadata = { title: "Methodology — Summit Cyber Group" };

export default function Methodology() {
  const steps = [
    { n: "01", t: "Scoping", d: "Risk-based scope, rules of engagement, data-handling & safety." },
    { n: "02", t: "Recon", d: "Enumerate attack surface, tech stack, trust boundaries, crown jewels." },
    { n: "03", t: "Exploit", d: "Manual-first testing; exploit development when warranted." },
    { n: "04", t: "Abuse Paths", d: "Chain vulns; demonstrate real-world business impact." },
    { n: "05", t: "Purple Team", d: "Map to detections, tune alerts, verify controls." },
    { n: "06", t: "Report & Fix-Verify", d: "Evidence-ready reporting for PCI/HIPAA/SOX/SOC2; retest included." }
  ];
  return (
    <div className="py-14">
      <h1 className="hacker text-3xl">Our Playbook</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {steps.map(s => (
          <div key={s.n} className="rounded-2xl border border-neutral-900/70 bg-arcane-panel p-6">
            <div className="hacker text-arcane-neon">{s.n} — {s.t}</div>
            <p className="mt-2 text-sm text-neutral-300">{s.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
