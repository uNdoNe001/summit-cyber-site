// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo-summit.png" alt="Summit Cyber Group" width={40} height={40} />
            <span className="text-xl font-extrabold tracking-tight">Summit Cyber Group</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:opacity-70">Services</a>
            <a href="#approach" className="hover:opacity-70">Approach</a>
            <a href="#contact" className="hover:opacity-70">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="h-[56vh] md:h-[68vh] bg-center bg-cover"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1920&auto=format&fit=crop)",
          }}
        />
        <div className="absolute inset-0 bg-sky-900/60" />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-4xl px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-extrabold">Practical Cyber Protection</h1>
            <p className="mt-4 text-lg text-slate-100/90">
              Penetration Testing, Cyber-as-a-Service, vCISO, and Gap Assessments for SMBs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#contact" className="rounded-2xl bg-sky-600 px-6 py-3 font-semibold hover:bg-sky-700">
                Get a Quote
              </a>
              <a href="#services" className="rounded-2xl border border-white/80 px-6 py-3 font-semibold hover:bg-white/10">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-center">
          Services for Modern SMBs
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card title="Penetration Testing"
                text="External, internal, web/app, API, mobile, and cloud—reproducible findings and fix-first reporting." />
          <Card title="Cyber-as-a-Service"
                text="Phishing training, policies, vendor reviews, roadmap coaching—no 24/7 SOC upsell." />
          <Card title="vCISO"
                text="Guidance from a lifelong CISO—strategy, board reporting, KPIs, program design." />
          <Card title="Gap Assessments"
                text="ISO 27001, GDPR, SOC 2, HIPAA, HITRUST—clear findings and remediation plan." />
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-slate-100 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">Our Approach</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Step num="1" title="Discover" text="Lightweight intake and scoping—fast clarity." />
            <Step num="2" title="Test & Validate" text="Focus on real risks, not checklists." />
            <Step num="3" title="Fix & Scale" text="Actionable fixes and ongoing coaching." />
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-7xl px-4 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold">Ready to climb?</h2>
            <p className="mt-3 text-slate-600">
              Share your scope and we’ll recommend the leanest path to stronger security.
            </p>
          </div>
          <form className="grid grid-cols-1 gap-4">
            <input className="rounded-xl border px-3 py-2" placeholder="Name" />
            <input className="rounded-xl border px-3 py-2" placeholder="Work Email" />
            <textarea className="rounded-xl border px-3 py-2" placeholder="What do you want to secure?" rows={4} />
            <button className="rounded-2xl bg-sky-600 px-6 py-3 text-white font-semibold hover:bg-sky-700">
              Send
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t py-10 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Summit Cyber Group
      </footer>
    </div>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm">{text}</p>
    </div>
  );
}

function Step({ num, title, text }: { num: string; title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-md">
      <p className="text-sky-600 font-bold text-xl">{num}</p>
      <h3 className="mt-2 font-bold text-lg">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm">{text}</p>
    </div>
  );
}
