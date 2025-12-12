"use client";
import AIResearchSidebar from "@/components/AIResearchSidebar";
import { useLanguage } from "@/components/LanguageProvider";

export default function HeroV2() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      {/* Headline grande */}
      <div className="container-v2 pt-16 pb-10">
        <h1
          className="text-4xl md:text-6xl leading-[1.05] tracking-tight text-zinc-900 font-medium"
          style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
        >
          <span className="block">{t("v2.hero.title1")}</span>
          {/* CAMBIO: Uso de text-primary global */}
          <span className="block text-primary">{t("v2.hero.title2")}</span>
        </h1>
      </div>

      {/* Bloque dividido 50/50 */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-[6fr_6fr] min-h-[600px] md:min-h-[760px]">
          {/* Columna izquierda (copy + CTA) full-bleed rojo */}
          {/* CAMBIO: Uso de bg-primary global */}
          <div className="bg-primary text-white">
            <div className="align-left-v2 pt-12 md:pt-16 pb-10 pr-6 md:pr-8 h-full flex items-start">
              <div className="max-w-2xl">
                <p className="text-base/7 md:text-lg/8 opacity-95">
                  {t("v2.hero.description")}
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    // CAMBIO: Uso de text-primary global
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-primary shadow hover:bg-zinc-50"
                  >
                    {t("v2.hero.cta")} <span aria-hidden>→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Columna derecha (placeholder UI) full-bleed negro */}
          <div className="bg-[#0F172A]">
            <div className="py-10 md:py-12 h-full flex items-center justify-center px-6">
              <div className="w-full max-w-[720px] flex justify-center">
                <AIResearchSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}