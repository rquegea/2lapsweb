"use client";
import { FEATURES } from "@/lib/constants";
import { motion } from "framer-motion";
import { Cog6ToothIcon, BoltIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, CpuChipIcon, AdjustmentsHorizontalIcon, CubeIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/components/LanguageProvider";

export default function Features() {
  const { t } = useLanguage();
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-700 shadow-sm">
          <CubeIcon className="h-4 w-4 text-zinc-400" />
          {t("features.badge")}
        </div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {t("features.title")}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{t("features.subtitle")}</p>
      </div>
      {/* Primera línea: 66% (izq) / 33% (der) */}
      <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-stretch">
        {FEATURES.slice(0, 2).map((f, i) => (
          <div key={`row1-${f.title}`} className={i === 0 ? "md:basis-2/3" : "md:basis-1/3"}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card card--deep reflect-top h-full min-h-[260px] rounded-3xl bg-white p-6"
            >
              {i === 0 ? (
                <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
                  <div className="relative h-48 w-full rounded-2xl neo-emboss reflect-top overflow-hidden md:h-56">
                    <img
                      src="features/feature-1.png"
                      alt="Feature visual 1"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 text-white shadow-lg ring-1 ring-black/20">
                      <BoltIcon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold leading-tight">{t("features.card1.title")}</h3>
                    </div>
                    <p className="text-base text-zinc-600">{t("features.card1.desc")}</p>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 text-white shadow-lg ring-1 ring-black/20">
                    <Cog6ToothIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight">{t("features.card2.title")}</h3>
                  </div>
                  <p className="text-base text-zinc-600">{t("features.card2.desc")}</p>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Segunda línea: 33% (izq) / 66% (der) */}
      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-stretch">
        {FEATURES.slice(2, 4).map((f, i) => (
          <div key={`row2-${f.title}`} className={i === 0 ? "md:basis-1/3" : "md:basis-2/3"}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="card card--deep reflect-top h-full min-h-[260px] rounded-3xl bg-white p-6"
            >
              {i === 0 ? (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                  <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 text-white shadow-lg ring-1 ring-black/20">
                    <ChartBarIcon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight">{t("features.card3.title")}</h3>
                  </div>
                  <p className="text-base text-zinc-600">{t("features.card3.desc")}</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2">
                  <div className="relative h-48 w-full rounded-2xl neo-emboss reflect-top overflow-hidden md:h-56">
                    <img
                      src="features/feature-2.png"
                      alt="Feature visual 2"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 text-white shadow-lg ring-1 ring-black/20">
                      <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
                      </div>
                      <h3 className="text-xl font-semibold leading-tight">{t("features.card4.title")}</h3>
                    </div>
                    <p className="text-base text-zinc-600">{t("features.card4.desc")}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* (Última fila eliminada según requerimiento) */}
    </section>
  );
}

function renderSmallIcon(index: number) {
  if (index % 3 === 0) return <CpuChipIcon className="h-5 w-5" />;
  if (index % 3 === 1) return <AdjustmentsHorizontalIcon className="h-5 w-5" />;
  return <BoltIcon className="h-5 w-5" />;
}



