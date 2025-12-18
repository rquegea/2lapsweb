"use client";
import Link from "next/link";
import { NAV } from "@/lib/constants";
import { useLanguage } from "@/components/LanguageProvider";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const getNavKeyFromHref = (href: string) => {
    if (href.includes("features")) return "nav.features";
    if (href.includes("pricing")) return "nav.pricing";
    if (href.includes("services")) return "nav.services";
    if (href.startsWith("http")) return "nav.contact";
    if (href.includes("contact")) return "nav.contact";
    return "";
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70">
      <div className="mx-auto max-w-6xl px-6 py-4 grid grid-cols-[1fr_auto_1fr] items-center">
        <Link href="#" className="flex items-center gap-2 justify-self-start">
          <img src="/logos/2lapslogoletras.png" alt="2laps" className="h-6 w-auto" />
        </Link>
        <nav className="hidden md:flex justify-center gap-16 text-sm justify-self-center">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-zinc-800 hover:text-black transition-colors"
              {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {t(getNavKeyFromHref(item.href)) || item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center justify-self-end gap-6">
          <div className="inline-flex items-center rounded-lg border border-black/10 bg-white p-0.5 shadow-sm">
            <button
              aria-label="Cambiar a Español"
              onClick={() => setLanguage("es")}
              className={`px-2.5 py-1 text-xs rounded-md transition ${
                language === "es" ? "bg-zinc-900 text-white" : "text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              ES
            </button>
            <button
              aria-label="Switch to English"
              onClick={() => setLanguage("en")}
              className={`px-2.5 py-1 text-xs rounded-md transition ${
                language === "en" ? "bg-zinc-900 text-white" : "text-zinc-700 hover:bg-zinc-100"
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}



