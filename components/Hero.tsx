"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// usamos <img> para evitar cualquier incompatibilidad del optimizador en export estático
import CTAButton from "@/components/CTAButton";
import { useLanguage } from "@/components/LanguageProvider";

export default function Hero() {
  const { t } = useLanguage();
  const tools = [
    { name: "ChatGPT", icon: "icons/ChatGPT-Logo.png" },
    { name: "Claude", icon: "icons/claude-logo.png" },
    { name: "Gemini", icon: "icons/gemini-logo.png" },
    { name: "Perplexity", icon: "icons/perplexity-logo.png" },
    { name: "DeepSeek", icon: "icons/deepseek-logo.png" },
    { name: "Grok", icon: "icons/grok-logo.png" },
    { name: "Copilot", icon: "icons/Copilot-Logo.png" },
    { name: "MetaAI", icon: "icons/metaai-logo.png" },
  ] as const;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % tools.length);
    }, 3000);
    return () => clearInterval(id);
  }, [tools.length]);
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Fondo: blob de gradiente sólo para el hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-60px] top-[-60px] -z-10 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-yellow-200 opacity-70 blur-[120px]"
      />

      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 pb-24 text-center md:pt-36">
        {/* Badge superior */}
        <div className="mb-6 inline-flex items-center rounded-full bg-white px-5 py-2.5 text-xs font-medium text-zinc-700 pill-elevated ring-1 ring-black/5">
          {t("hero.badge")}
        </div>

        {/* Nuevo copy con carrusel de herramientas */}
        <h1 className="mt-2 text-3xl font-light leading-tight tracking-tight text-zinc-900 md:text-5xl">
          {t("hero.listenTitle")}
        </h1>
        <div className="relative mt-2 h-[60px] md:h-[80px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="mx-auto flex items-center justify-center gap-3 md:gap-4"
            >
              <img
                src={tools[index].icon}
                alt={tools[index].name}
                width={56}
                height={56}
                className="h-10 w-10 md:h-14 md:w-14 object-contain"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.src = "/icons/@2laps-logo.png";
                }}
              />
              <span className="block text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl">
                {tools[index].name}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        <h2 className="mt-1 text-lg text-zinc-700 md:text-2xl">
          {t("hero.finalLine")}
        </h2>

        <div className="mt-8 flex items-center justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}



