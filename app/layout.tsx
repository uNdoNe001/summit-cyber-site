// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader"; // ⬅️ relative path fix

export const metadata: Metadata = {
  title: "Summit Cyber Group",
  description: "Practical cyber protection for SMBs.",
  icons: {
    icon: [
      { url: "/favicon.ico" }, // multi-size .ico
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <SiteHeader />
        <main className="pt-0">{children}</main>
      </body>
    </html>
  );
}
