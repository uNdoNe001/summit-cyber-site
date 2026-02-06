export const metadata = { title: "About — Summit Cyber Group" };

export default function About() {
  return (
    <div className="py-14">
      <h1 className="hacker text-3xl">US-Based Certified Operators</h1>
      <p className="mt-3 text-neutral-300">
        Summit Cyber Group is a tight-knit team of certified penetration testers (not bug-bounty contractors) and cyber security experts.
        We focus on in-depth dark web analysis, malware, cloud, vulnerability detection, exploitation and forensics. Certifications include OSCP/CPTS/CWES/CISSP/cCISO/CCFE.  
      </p>
      <div className="mt-8 rounded-2xl border border-neutral-900/70 bg-arcane-panel p-6 text-sm text-neutral-300">
        We value secure and efficient infrastructure: minimal blast radius, zero trust on principle,
        and ruthless clarity in reporting. Every engagement includes fix-verify and remediation assistance.
      </div>
    </div>
  );
}
