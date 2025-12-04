"use client";
import { motion } from "framer-motion";
import { BoltIcon, ArrowTopRightOnSquareIcon, LifebuoyIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/components/LanguageProvider";

// Eliminado Placeholder: ahora mostramos una imagen real dentro de cada tarjeta

export default function Outputs() {
  const { t } = useLanguage();
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-700 shadow-sm">
          {t("process.badge")}
        </div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t("process.title")}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{t("process.subtitle")}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch auto-rows-fr">
        {/* Columna izquierda ocupa el alto completo (100% de la fila) */}
        <div className="md:row-span-2">
          <ProcessCard
            step="01"
            title={t("process.card1.title")}
            description={t("process.card1.desc")}
            icon={<BoltIcon className="h-5 w-5" />}
            imageLabel={t("process.card1.image")}
            imageSrc="features/feature-4.png"
          />
        </div>

        {/* Columna derecha: dos tarjetas 50/50 apiladas */}
        <ProcessCard
          step="02"
          title={t("process.card2.title")}
          description={t("process.card2.desc")}
          icon={<ArrowTopRightOnSquareIcon className="h-5 w-5" />}
          imageLabel={t("process.card2.image")}
          imageSrc="features/feature-5.png"
        />
        <ProcessCard
          step="03"
          title={t("process.card3.title")}
          description={t("process.card3.desc")}
          icon={<LifebuoyIcon className="h-5 w-5" />}
          imageLabel={t("process.card3.image")}
          imageSrc="features/feature-6.png"
        />
      </div>
    </section>
  );
}

function ProcessCard({
  step,
  title,
  description,
  icon,
  imageLabel,
  imageSrc,
}: {
  readonly step: string;
  readonly title: string;
  readonly description: string;
  readonly icon: React.ReactNode;
  readonly imageLabel: string;
  readonly imageSrc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="card card--deep reflect-top h-full rounded-3xl bg-white p-8 flex flex-col"
    >
      <div className="flex items-start justify-between">
        <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 text-white shadow-lg ring-1 ring-black/20">
          {icon}
        </div>
        <div className="flex items-center gap-1 text-zinc-400">
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
        </div>
      </div>
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-base text-zinc-600">{description}</p>
      <div className="my-6 h-px w-full bg-zinc-200" />
      <div className="text-4xl font-semibold tracking-tight text-zinc-900">{step}</div>
      <div className="mt-4 flex-1 flex">
        <div className="relative w-full rounded-2xl neo-emboss reflect-top overflow-hidden flex-1 flex items-center justify-center p-6 md:p-8 bg-white">
          <img
            src={imageSrc}
            alt={imageLabel}
            className="max-h-full h-auto w-[85%] md:w-[75%] object-contain"
            loading="lazy"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.src = "/icons/@2laps-logo.png";
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}



