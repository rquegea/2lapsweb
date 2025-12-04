"use client";

const BRANDS = [
  "Moët & Chandon",
  "Ruinart",
  "Veuve Clicquot",
  "Dom Pérignon",
  "VIU",
  "The Core School",
  "EAE Business School",
];

export default function TrustedV2() {
  return (
    <section className="bg-white">
      <div className="container-v2 py-16 md:py-24 text-center">
        <h2
          className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900"
          style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
        >
          The choice of top companies
        </h2>

        {/* Usamos Flexbox para centrar visualmente los 7 elementos */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-x-8 md:gap-x-16 gap-y-8 text-zinc-500">
          {BRANDS.map((brand) => (
            <span key={brand} className="text-lg md:text-xl font-medium whitespace-nowrap">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}