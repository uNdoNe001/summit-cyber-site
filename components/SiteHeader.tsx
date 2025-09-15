// components/SiteHeader.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  // close drawer on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const closeAnd = (fn?: () => void) => () => {
    setOpen(false);
    fn?.();
  };

  return (
    <>
      {/* Header bar */}
      <header className="fixed top-0 left-0 z-50 w-full bg-transparent">
        <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4">
          {/* Logo pinned top-left */}
          <Link href="/" aria-label="Summit Cyber Group" className="flex items-center shrink-0">
            <Image
              src="/logo-summit.png"   // <-- make sure this exists in /public
              alt="Summit Cyber Group"
              width={100}
              height={100}
              className="h-12 w-12 md:h-16 md:w-16 object-contain"
              priority
            />
          </Link>

          {/* Desktop nav (top-right) */}
          <nav className="hidden md:flex items-center gap-8 text-white font-medium">
            <a href="#services" className="hover:text-blue-300 transition-colors">Services</a>
            <a href="#approach" className="hover:text-blue-300 transition-colors">Approach</a>
            <a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a>
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden hover:bg-white/10"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity md:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed right-0 top-0 z-50 h-full w-72 transform bg-slate-900 text-white shadow-xl transition-transform md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4">
          <span className="text-sm font-semibold tracking-wide">Menu</span>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="rounded-md p-2 hover:bg-white/10"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="mt-2 grid gap-1 px-2">
          <a href="#services" onClick={closeAnd()} className="rounded-lg px-3 py-3 hover:bg-white/10">Services</a>
          <a href="#approach" onClick={closeAnd()} className="rounded-lg px-3 py-3 hover:bg-white/10">Approach</a>
          <a href="#contact" onClick={closeAnd()} className="rounded-lg px-3 py-3 hover:bg-white/10">Contact</a>

          <div className="my-2 border-t border-white/10" />

          <a
            href="#contact"
            onClick={closeAnd()}
            className="mx-2 mt-2 rounded-xl bg-sky-600 px-3 py-3 text-center font-semibold hover:bg-sky-700"
          >
            Get a Quote
          </a>
        </nav>

        <div className="mt-auto p-4 text-xs text-white/60">
          © {new Date().getFullYear()} Summit Cyber Group
        </div>
      </aside>
    </>
  );
}
