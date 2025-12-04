"use client";

export default function HeroV2() {
  return (
    <section className="bg-white">
      {/* Headline grande */}
      <div className="container-v2 pt-16 pb-10">
        <h1
          className="text-4xl md:text-6xl leading-[1.05] tracking-tight text-zinc-900 font-medium"
          style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
        >
          <span className="block">Make every decision with</span>
          {/* CAMBIO: Texto en rojo actualizado */}
          <span className="block text-[#Bc4a52]">the market’s latest intelligence</span>
        </h1>
      </div>

      {/* Bloque dividido 50/50 */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-[6fr_6fr] min-h-[600px] md:min-h-[760px]">
          {/* Columna izquierda (copy + CTA) full-bleed rojo */}
          {/* CAMBIO: Fondo rojo actualizado */}
          <div className="bg-[#Bc4a52] text-white">
            <div className="align-left-v2 pt-12 md:pt-16 pb-10 pr-6 md:pr-8 h-full flex items-start">
              <div className="max-w-2xl">
                <p className="text-base/7 md:text-lg/8 opacity-95">
                  Streamline your workflow with an enterprise‑grade platform — designed for teams
                  who need to move quickly and make confident decisions with the freshest market intelligence.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="#get-started"
                    // CAMBIO: Texto del botón actualizado al nuevo rojo
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[#Bc4a52] shadow hover:bg-zinc-50"
                  >
                    Get started for free <span aria-hidden>→</span>
                  </a>
                  <a
                    href="#tour"
                    className="inline-flex items-center gap-2 text-sm font-medium underline decoration-white/60 decoration-2 underline-offset-4 hover:opacity-90"
                  >
                    Take the tour
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Columna derecha (placeholder UI) full-bleed negro */}
          <div className="bg-[#0F172A]">
            <div className="align-right-v2 py-10 md:py-12 pl-6 md:pl-8 h-full flex items-center">
              <div className="h-72 md:h-[520px] rounded-xl bg-white/5 ring-1 ring-white/10 grid place-items-center text-white/70 w-full">
                <span className="text-sm">UI preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}