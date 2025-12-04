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
    <header className="sticky top-0 z-40 bg-white border-b border-zinc-100">
      {/* Usamos flex estándar (sin justify-between) para que los elementos fluyan desde la izquierda */}
      <div className="container-v2 h-20 flex items-center">

        {/* IZQUIERDA: Logo */}
        {/* Añadimos mr-10 para dar espacio entre logo y menú */}
        <Link href="#" className="inline-flex items-center gap-2 mr-10">
          <span
            className="text-2xl tracking-tight text-zinc-900 font-medium leading-none"
            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
          >
            2laps
          </span>
        </Link>

        {/* CENTRO -> AHORA IZQUIERDA: Nav (Pegado al logo) */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-zinc-600">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-zinc-900 transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        {/* DERECHA: Acciones */}
        {/* ml-auto empuja este bloque totalmente a la derecha */}
        <div className="ml-auto flex items-center gap-4 md:gap-6">
          <button
            type="button"
            className="text-zinc-500 hover:text-zinc-900"
            aria-label="Buscar"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>

          <div className="hidden md:flex items-center gap-4">
            <a href="#login" className="text-[15px] font-medium text-zinc-600 hover:text-zinc-900">
              Log In
            </a>
            <a
              href="#get-started"
              // CAMBIO: Color #Bc4a52
              className="inline-flex items-center justify-center rounded-full bg-[#Bc4a52] px-5 py-2.5 text-[15px] font-semibold text-white transition-transform active:scale-95 hover:bg-[#a63f46]"
            >
              Get Started for Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}