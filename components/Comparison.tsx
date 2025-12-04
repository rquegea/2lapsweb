"use client";
import { CheckIcon, ArrowsRightLeftIcon } from "@heroicons/react/24/solid";
import LangText from "@/components/LangText";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE } from "@/lib/constants";

export default function Comparison() {
  const { language } = useLanguage();

  const LEFT_POINTS =
    language === "es"
      ? [
          "Monitorización básica de visibilidad",
          "Sin sentimiento",
          "Sin profundidad",
          "Sin soluciones accionables",
        ]
      : [
          "Basic visibility monitoring",
          "No sentiment",
          "No depth",
          "No actionable solutions",
        ];

  const RIGHT_POINTS =
    language === "es"
      ? [
          "Monitorización por capas (profundidad de la conversación ad‑hoc)",
          "KPI's cualitativos (sentimientos, tendencias de mercado, oportunidades, amenazas...)",
          "Análisis exhaustivo de la conversación",
          "Inteligencia del mercado conversacional profunda",
          "Reporte y estrategia conjunta, física y online",
          "Reportes ad‑hoc",
        ]
      : [
          "Layered monitoring (ad‑hoc conversation depth)",
          "Qualitative KPIs (sentiment, market trends, opportunities, threats...)",
          "Exhaustive conversation analysis",
          "Deep conversational market intelligence",
          "Joint reporting and strategy, online and offline",
          "Ad‑hoc reports",
        ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-700 shadow-sm">
          <ArrowsRightLeftIcon className="mr-2 h-4 w-4" />
          <LangText k="comparison.badge" />
        </div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          <LangText k="comparison.title" />
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
          <LangText k="comparison.description" />
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch">
        <Card title={<LangText k="comparison.left.title" />} points={LEFT_POINTS} />
        <Card title={<LangText k="comparison.right.title" />} points={RIGHT_POINTS} cta />
      </div>
    </section>
  );
}

function Card({
  title,
  points,
  cta,
}: {
  readonly title: React.ReactNode;
  readonly points: string[];
  readonly cta?: boolean;
}) {
  return (
    <div className="card card--deep reflect-top h-full rounded-3xl bg-white p-8">
      <h3 className="text-3xl font-semibold text-center">{title}</h3>
      <div className="my-6 h-px w-full bg-zinc-200" />
      <ul className="flex flex-col gap-4 text-zinc-700">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3">
            <CheckIcon className="mt-1 h-4 w-4 text-zinc-900" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      {cta && (
        <div className="mt-8">
          <a
            href={SITE.calendly}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex h-11 items-center justify-center rounded-xl border border-black bg-white px-4 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white"
          >
            <LangText k="cta.getStarted" />
          </a>
        </div>
      )}
    </div>
  );
}


