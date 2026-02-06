"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const LINES = [
  "summit@ops:~$ whoami",
  "US-based certified penetration testers and cyber experts",
  "summit@ops:~$ scope --show",
  "Web • API • Internal • External • IoT • AI • Forensics",
  "summit@ops:~$ compliance --targets PCI HIPAA SOX SOC2 - Small and Medium-Sized Business",
  "Evidence-ready reporting & fix-verify",
  "summit@ops:~$ engage --purple-team",
  "Detection engineering + remediation + retestesting"
];

export default function TerminalHero() {
  const [display, setDisplay] = useState<string[]>([]);
  const [typing, setTyping] = useState<string>("");
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const current = LINES[lineIndex] ?? "";
    const atEnd = charIndex >= current.length;

    // typing speed with slight jitter
    const step = () => {
      if (!atEnd) {
        setTyping(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else {
        // line complete: push to display, pause, then next line
        setDisplay((d) => [...d, current]);
        setTyping("");
        setCharIndex(0);
        setLineIndex((i) => (i + 1) % LINES.length);
      }
    };

    const delay = atEnd ? 800 : 28 + Math.random() * 60;
    timeoutRef.current = window.setTimeout(step, delay) as unknown as number;
    return () => { if (timeoutRef.current) window.clearTimeout(timeoutRef.current); };
  }, [charIndex, lineIndex]);

  return (
    <section className="relative overflow-hidden rounded-3xl border border-neutral-900/70 bg-black/70 p-0">
      <GlowFX />
      <div className="relative z-10">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-neutral-900/70 bg-arcane-panel px-4 py-2">
          <span className="size-3 rounded-full bg-red-400/70" />
          <span className="size-3 rounded-full bg-yellow-400/70" />
          <span className="size-3 rounded-full bg-green-400/70" />
          <span className="ml-3 hacker text-xs text-neutral-400">arcane@ops — terminal</span>
        </div>

        {/* Terminal body */}
        <div className="h-[380px] w-full overflow-hidden p-6 font-mono text-[14px] leading-relaxed text-arcane-text">
          {display.slice(-8).map((l, i) => (
            <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <span className="text-arcane-neon">➜</span> {l}
            </motion.div>
          ))}
          <div className="flex">
            <span className="text-arcane-neon">➜</span>&nbsp;
            <span aria-live="polite">{typing}</span>
            <Blink />
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap gap-3 border-t border-neutral-900/70 bg-black/50 px-6 py-4">
          <a className="btn btn-primary" href="/contact">Request scoping</a>
          <a className="btn" href="/methodology">See our playbook</a>
        </div>
      </div>
    </section>
  );
}

function Blink() {
  return (
    <span className="ml-1 inline-block h-[1.2em] w-[0.6ch] translate-y-[2px] bg-arcane-neon/90 animate-pulse" />
  );
}

function GlowFX() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div className="absolute -inset-20 opacity-40" style={{
        background: "radial-gradient(800px 300px at 20% 0%, rgba(56,255,107,0.12), transparent 60%)"
      }} />
      <div className="absolute inset-0"
           style={{ backgroundImage:
             "linear-gradient(rgba(56,255,107,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(56,255,107,0.05) 1px, transparent 1px)",
                    backgroundSize: "36px 36px" }} />
    </div>
  );
}
