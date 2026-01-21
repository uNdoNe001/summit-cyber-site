// app/page.tsx
"use client";

import React, { useEffect } from "react";
import ApproachSection from "../components/ApproachSection";
import QuoteForm from "../components/QuoteForm";

export default function Page() {
  return (
    <main className="flex flex-col">
      {/* ===== HERO SECTION WITH VIDEO ===== */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/cyber-bg.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Practical Cyber Protection for Small and Medium-Sized Businesses
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Penetration Testing • Cyber-as-a-Service • vCISO • ISO27001/SOC2 Gap Assessments
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="rounded-md bg-sky-600 px-6 py-3 text-lg font-semibold shadow-md hover:bg-sky-700 transition"
            >
              Get a Quote
            </a>
            <a
              href="#services"
              className="rounded-md bg-white/10 px-6 py-3 text-lg font-semibold shadow-md hover:bg-white/20 transition"
            >
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="scroll-mt-24 py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            Our Services
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <ServiceCard
              title="Penetration Testing"
              text="Internal/External, WebApp, API, Mobile, and IoT. US-based certified pentesters."
            />
            <ServiceCard
              title="Cyber-as-a-Service"
              text="Phishing training, policy creation, vendor reviews, dark web monitoring."
            />
            <ServiceCard
              title="vCISO"
              text="Strategy creation, board reporting, KPI design — by lifelong CISOs."
            />
            <ServiceCard
              title="Gap Assessments"
              text="ISO 27001, GDPR, SOC 2, HIPAA, HITRUST — clear findings and remediation planning."
            />
          </div>
        </div>
      </section>

      {/* ===== CREDLY BADGE SECTION ===== */}
      <CredlyBadge />

      {/* ===== APPROACH SECTION ===== */}
      <ApproachSection />

      {/* ===== QUOTE SECTION ===== */}
      <section
        id="contact"
        className="scroll-mt-24 relative w-full overflow-hidden"
        style={{
          backgroundImage: "url('/mountain-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/20 to-slate-900/10" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
          <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
            {/* FORM */}
            <QuoteForm />

            {/* TEXT */}
            <div className="order-2 text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center md:text-left">
                Ready to climb?
              </h2>
              <p className="mt-3 text-slate-100/90 max-w-prose text-center md:text-left">
                Share your scope and we’ll recommend the leanest path to stronger security.
              </p>

              <ul className="mt-6 space-y-3 text-slate-100/90">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  External / Internal / Web and API testing
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-sky-400" />
                  vCISO guidance without enterprise overhead
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-violet-400" />
                  Gap assessments: ISO 27001, SOC 2, HIPAA, GDPR, HITRUST
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ===== Service Card Component ===== */
function ServiceCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl bg-sky-50 p-6 shadow-sm ring-1 ring-slate-200 hover:bg-sky-100 hover:shadow-lg hover:scale-[1.02] transition-transform duration-200">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-700 text-sm">{text}</p>
    </div>
  );
}

/* ===== Credly Badge Component ===== */
function CredlyBadge() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//cdn.credly.com/assets/utilities/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section className="py-10 bg-white">
      <div className="w-full flex justify-center">
        <div
          data-iframe-width="150"
          data-iframe-height="270"
          data-share-badge-id="0eb20d3f-86e3-4545-b873-1980ea7309f3"
          data-share-badge-host="https://www.credly.com"
        ></div>
      </div>
    </section>
  );
}
