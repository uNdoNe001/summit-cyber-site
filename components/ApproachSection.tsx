// components/ApproachSection.tsx
import React from "react";

export default function ApproachSection() {
  return (
    <section id="approach" className="bg-slate-100 py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center">
          Our Approach
        </h2>

        {/* Desktop row with arrows between cards */}
        <div className="mt-10 hidden md:flex items-center justify-center gap-6">
          <FlowCard
            step="1"
            title="Discover"
            text="Lightweight intake and scoping—fast clarity."
          />
          <FatArrow />
          <FlowCard
            step="2"
            title="Test & Validate"
            text="Focus on real risks, not checklists."
          />
          <FatArrow />
          <FlowCard
            step="3"
            title="Fix & Scale"
            text="Actionable fixes and ongoing coaching."
          />
        </div>

        {/* Mobile stack with vertical arrows */}
        <div className="mt-10 space-y-6 md:hidden">
          <FlowCard
            step="1"
            title="Discover"
            text="Lightweight intake and scoping—fast clarity."
          />
          <FatArrowVertical />
          <FlowCard
            step="2"
            title="Test & Validate"
            text="Focus on real risks, not checklists."
          />
          <FatArrowVertical />
          <FlowCard
            step="3"
            title="Fix & Scale"
            text="Actionable fixes and ongoing coaching."
          />
        </div>
      </div>
    </section>
  );
}

/* ===== FlowCard ===== */
function FlowCard({
  step,
  title,
  text,
}: {
  step: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 w-64 hover:shadow-lg hover:scale-105 transition-transform duration-200">
      <p className="text-sky-600 font-bold text-xl">{step}</p>
      <h3 className="mt-2 font-bold text-lg">{title}</h3>
      <p className="mt-2 text-slate-600 text-sm">{text}</p>
    </div>
  );
}

/* ===== Fat horizontal arrow ===== */
function FatArrow() {
  return (
    <svg
      className="h-12 w-16 flex-shrink-0 text-sky-400"
      viewBox="0 0 100 40"
      fill="none"
    >
      <path
        d="M0 20 H70 L60 10 M70 20 L60 30"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ===== Fat vertical arrow (mobile) ===== */
function FatArrowVertical() {
  return (
    <svg
      className="mx-auto h-12 w-10 text-sky-400"
      viewBox="0 0 40 100"
      fill="none"
    >
      <path
        d="M20 0 V70 L10 60 M20 70 L30 60"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}
