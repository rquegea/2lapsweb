import type { Metadata } from "next";
import "./globals.css";
import FloatingDemoButton from "@/components/FloatingDemoButton";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title:
    "2laps — Conversational Market Intelligence",
  description:
    "Multi‑agent AI platform for market analysis, competitive intelligence, and action‑ready advisory reports.",
  icons: {
    icon: [
      { url: "/icons/@2laps-logo.png?v=3", type: "image/png", sizes: "16x16" },
      { url: "/icons/@2laps-logo.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/icons/@2laps-logo.png?v=3", type: "image/png", sizes: "48x48" },
      { url: "/icons/@2laps-logo.png?v=3", type: "image/png", sizes: "96x96" },
    ],
    apple: "/icons/@2laps-logo.png?v=3",
    shortcut: "/icons/@2laps-logo.png?v=3",
    other: [
      { rel: "mask-icon", url: "/logo-twolaps.svg?v=2", color: "#111111" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700,800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap"
        />
        {/* Fallback explícito para algunos navegadores */}
        <link rel="icon" href="/icons/@2laps-logo.png?v=3" sizes="16x16" type="image/png" />
        <link rel="icon" href="/icons/@2laps-logo.png?v=3" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/@2laps-logo.png?v=3" />
        <link rel="mask-icon" href="/logo-twolaps.svg?v=2" color="#111111" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
          <FloatingDemoButton />
        </LanguageProvider>
      </body>
    </html>
  );
}
