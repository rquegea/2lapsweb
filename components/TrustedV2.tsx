"use client";
import { useLanguage } from "@/components/LanguageProvider";

// 1. Sube tus logos a la carpeta "public/logos/"
// 2. Asegúrate de que los nombres de archivo coincidan aquí abajo:
const BRANDS = [
  { name: "Moët & Chandon", logo: "/logos/moet.png" },
  { name: "Ruinart", logo: "/logos/ruinart.png" },
  { name: "Veuve Clicquot", logo: "/logos/veuve-clicquot-logo.jpg" },
  { name: "Dom Pérignon", logo: "/logos/dom-perignon.png" },
  { name: "Planeta Formación y Universidades", logo: "/logos/planeta.png" },
  { name: "VIU", logo: "/logos/viu.png" },
  { name: "The Core School", logo: "/logos/the-core.png" },
  { name: "EAE Business School", logo: "/logos/eae.png" },
  { name: "Leifheit", logo: "/logos/leifheit.png" },
];

export default function TrustedV2() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="container-v2 py-16 md:py-24 text-center">
        <h2
          className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900"
          style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
        >
          {t("v2.trusted.title")}
        </h2>

        {/* Grid de logos */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-x-12 md:gap-x-16 gap-y-10">
          {BRANDS.map((brand) => (
            <div key={brand.name} className="group relative flex items-center justify-center">
              {/* Imagen del logo */}
              <img
                src={brand.logo}
                alt={`${brand.name} - Cliente de 2laps para inteligencia de mercado y análisis competitivo`}
                // Ajusta 'h-8' o 'h-10' para cambiar el tamaño general de los logos
                className="h-8 md:h-10 w-auto max-w-[160px] object-contain opacity-60 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                // Script simple para manejar si la imagen no existe
                onError={(e) => {
                  const img = e.currentTarget;
                  img.style.display = "none"; // Ocultar imagen rota
                  const span = img.parentElement?.querySelector(".fallback-text") as HTMLElement;
                  if (span) span.style.display = "block"; // Mostrar texto fallback
                }}
              />
              {/* Fallback de texto: Se muestra automáticamente si la imagen falla al cargar */}
              <span
                style={{ display: "none" }}
                className="fallback-text text-lg md:text-xl font-medium text-zinc-400 whitespace-nowrap"
              >
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}