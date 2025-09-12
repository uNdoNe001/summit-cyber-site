// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader"; // ⬅️ relative path fix

export const metadata: Metadata = {
  title: "Summit Cyber Group",
  description: "Practical cyber protection for SMBs.",
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
export const metadata = {
  icons: {
    icon: "/favicon.ico",
  },
};
