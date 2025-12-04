"use client";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const NAV_ITEMS = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
];

export default function HeaderV2() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-zinc-200">
      <div className="container-v2 py-4 grid grid-cols-[auto_1fr_auto] items-center">
        {/* Logo texto en Switzer fina */}
        <Link href="#" className="justify-self-start inline-flex items-baseline gap-2">
          <span
            className="text-2xl tracking-tight text-zinc-900 font-light leading-none"
            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
          >
            2laps
          </span>
        </Link>

        {/* Nav centrado */}
        <nav className="hidden md:flex justify-center gap-8 text-sm text-zinc-900">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-black">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Acciones derecha */}
        <div className="justify-self-end flex items-center gap-4">
          <button
            type="button"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full ring-1 ring-black/10 text-zinc-700 hover:bg-zinc-100"
            aria-label="Buscar"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>
          <a href="#login" className="text-sm text-zinc-800 hover:text-black hidden sm:inline">
            Log in
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-[#C23342] px-4 py-2 text-sm font-medium text-white shadow hover:bg-[#A12B39]"
          >
            Get started for free
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}


