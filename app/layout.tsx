import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arcane Cyber Security — US-Based Certified Pentesters",
  description: "US-based certified penetration testers. Red & purple team operations. PCI, HIPAA, SOX, SOC2. Web, internal, external, IoT, and AI pentesting.",
  metadataBase: new URL("https://arcanesec.net"),
  openGraph: { title: "Arcane Cyber Security", description: "US-based certified penetration testers.", url: "https://arcanesec.net", siteName: "Arcane Cyber Security", type: "website" },
  icons: [{ url: "/favicon.png", type: "image/png+xml" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-900/70 bg-black/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="/" className="flex items-center gap-3">
          {/* Mobile: just glyph */}
          <img
            src="/mobile.png"
            alt="Arcane Cyber Security"
            className="h-8 w-8 rounded-lg sm:hidden"
          />
          {/* Desktop: full wordmark */}
          <img
            src="/newlogo.png"
            alt="Arcane Cyber Security"
            className="hidden sm:block h-12"
          />
        </a>
        <nav className="flex items-center gap-6 text-sm">
          <a className="hover:text-white/90" href="/services">Services</a>
          <a className="hover:text-white/90" href="/methodology">Methodology</a>
          <a className="hover:text-white/90" href="/about">About</a>
          <a className="btn btn-primary" href="/contact">Get Tested</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-900/70">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
        <div className="flex flex-col gap-2">
          <span className="hacker text-arcane-dim">US-Based • Certified • No bug-bounty contractors</span>
          <span>© {new Date().getFullYear()} Arcane Cyber Security. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
