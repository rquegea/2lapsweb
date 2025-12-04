"use client";
import { CheckIcon, TagIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { SITE } from "@/lib/constants";

type Plan = {
  name: string;
  priceMonthly: number;
  description: string;
  features: string[];
  highlight?: boolean;
  customPricing?: boolean;
};

type Lang = "es" | "en";

function getPlans(lang: Lang): Plan[] {
  if (lang === "en") {
    return [
      {
        name: "Essential",
        priceMonthly: 599,
        description: "Basic monitoring",
        features: [
          "Up to 5 brands/companies",
          "Up to 20 conversations",
          "Basic (Quant, Sentiment, Essential Qual)",
          "1 Basic Report weekly and 1 Basic Report monthly",
          "No optimization articles",
        ],
      },
      {
        name: "Professional",
        priceMonthly: 1499,
        description: "Marketing/Strategy teams",
        features: [
          "Up to 15 brands/companies (Total)",
          "Up to 60 conversations",
          "Complete (All standard agents)",
          "1 Standard Report + 1 Basic Report weekly",
          "4 optimization articles per month",
        ],
        highlight: true,
      },
      {
        name: "Premium",
        priceMonthly: 3999,
        description: "Large departments / Agencies",
        features: [
          "Up to 45 brands/companies (Total)",
          "Up to 200 conversations",
          "Deep (All Agents + Extended RAG + Custom (Max 3))",
          "1 Premium Report + 1 Standard Report weekly",
          "8 optimization articles per month",
        ],
      },
      {
        name: "Enterprise",
        priceMonthly: 7000,
        description: "Large corporations / Tailored needs",
        features: [
          "Custom",
          "Custom",
          "Included / Tailor‑made",
          "Dedicated (Account Manager) + SLA",
          "Custom articles",
        ],
        customPricing: true,
      },
    ];
  }

  // Español
  return [
    {
      name: "Essential",
      priceMonthly: 599,
      description: "Monitorización básica",
      features: [
        "Hasta 5 marcas/empresas",
        "Hasta 20 conversaciones",
        "Básico (Cuanti, Senti, Cuali Esencial)",
        "1 Reporte Básico semanal y 1 Reporte Básico mensual",
        "Sin artículos de optimización",
      ],
    },
    {
      name: "Professional",
      priceMonthly: 1499,
      description: "Equipos Marketing/Estrategia",
      features: [
        "Hasta 15 marcas/empresas (Total)",
        "Hasta 60 conversaciones",
        "Completo (Todos los agentes estándar)",
        "1 Reporte Estándar + 1 Reporte Básico semanal",
        "4 artículos al mes para optimización digital",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      priceMonthly: 3999,
      description: "Departamentos grandes / Agencias",
      features: [
        "Hasta 45 marcas/empresas (Total)",
        "Hasta 200 conversaciones",
        "Profundo (Todos Agentes + RAG Extendido + Custom (Máx 3))",
        "1 Reporte Premium + 1 Reporte Estándar semanal",
        "8 artículos al mes para optimización digital",
      ],
    },
    {
      name: "Enterprise",
      priceMonthly: 7000,
      description: "Grandes corporaciones / Necesidades a medida",
      features: [
        "Personalizado",
        "Personalizado",
        "Incluido / A medida",
        "Dedicado (Gestor de cuenta) + SLA",
        "Artículos a medida",
      ],
      customPricing: true,
    },
  ];
}

export default function Pricing() {
  const { t, language } = useLanguage();
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const monthlyRef = useRef<HTMLSpanElement | null>(null);
  const yearlyGroupRef = useRef<HTMLSpanElement | null>(null);
  const [indicatorLeft, setIndicatorLeft] = useState<number>(0);
  const [indicatorWidth, setIndicatorWidth] = useState<number>(0);
  // altura del bloque superior (título + precio + descripción) para alinear el botón
  const topMinH = language === "es" ? "min-h-[144px]" : "min-h-[128px]";

  const updateIndicator = () => {
    const container = containerRef.current;
    const target = billing === "monthly" ? monthlyRef.current : yearlyGroupRef.current;
    if (!container || !target) return;
    const cRect = container.getBoundingClientRect();
    const tRect = target.getBoundingClientRect();
    setIndicatorLeft(tRect.left - cRect.left);
    setIndicatorWidth(tRect.width);
  };

  useEffect(() => {
    updateIndicator();
  }, [billing, language]);

  useEffect(() => {
    const onResize = () => updateIndicator();
    globalThis.addEventListener("resize", onResize);
    // Recalcula tras render para evitar FOUT
    const id = globalThis.setTimeout(updateIndicator, 0);
    return () => {
      globalThis.removeEventListener("resize", onResize);
      globalThis.clearTimeout(id);
    };
  }, []);

  const formatPrice = (monthly: number) => {
    const value = billing === "monthly" ? monthly : Math.round(monthly * 0.9);
    return `${value.toLocaleString("es-ES")} €`;
  };

  const requestInfoLabel = language === "es" ? "Solicita información" : "Request info";
  const requestInfoMail = "mailto:trucoytrufa@trucoytrufa.es";

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-700 shadow-sm">
          <TagIcon className="h-4 w-4 text-zinc-500" /> {t("pricing.badge")}
        </div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t("pricing.title")}</h2>
        <div ref={containerRef} className="mt-6 inline-flex items-center gap-2 rounded-full bg-white p-1 shadow-sm relative overflow-hidden">
          <span ref={monthlyRef}
            className={`inline-flex items-center gap-2 pb-1`}
          >
            <button
              type="button"
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                billing === "monthly" ? "text-zinc-900" : "text-zinc-600"
              }`}
            >
              {t("pricing.monthly")}
            </button>
          </span>
          <span ref={yearlyGroupRef}
            className={`inline-flex items-center gap-2 pb-1`}
          >
            <button
              type="button"
              onClick={() => setBilling("yearly")}
              className={`rounded-full px-4 py-2 text-sm font-medium ${
                billing === "yearly" ? "text-zinc-900" : "text-zinc-600"
              }`}
            >
              {t("pricing.yearly")}
            </button>
            <span className="rounded-full bg-white px-3 py-2 text-xs font-medium text-zinc-700 ring-1 ring-black/10">
              {t("pricing.discount")}
            </span>
          </span>
          <div
            className="pointer-events-none absolute bottom-0 h-[2px] bg-black transition-all duration-300 ease-out"
            style={{ left: indicatorLeft, width: indicatorWidth }}
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
        {getPlans(language as Lang).map((plan) => (
          <div
            key={plan.name}
            className={`group card card--deep reflect-top rounded-3xl bg-white p-8 flex flex-col ${
              plan.highlight ? "ring-1 ring-black/10" : ""
            }`}
          >
            <div className={`flex flex-col ${topMinH}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                {plan.highlight && (
                  <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                    {t("pricing.popular")}
                  </span>
                )}
              </div>
              <div className="relative mt-6 flex items-baseline gap-2">
                {plan.customPricing ? (
                  <div className={`${language === "es" ? "text-3xl" : "text-4xl"} font-semibold`}>{t("pricing.customPrice")}</div>
                ) : (
                  <>
                    <div className="text-4xl font-semibold blur-sm md:blur-md transition">
                      {formatPrice(plan.priceMonthly)}
                    </div>
                    <div className="text-zinc-500">{t("pricing.perMonth")}</div>
                    {/* Overlay para solicitar información */}
                    <a
                      href={requestInfoMail}
                      className="pointer-events-none group-hover:pointer-events-auto absolute -inset-1 flex items-center justify-center rounded-xl bg-white/70 opacity-0 backdrop-blur-sm transition duration-200 group-hover:opacity-100"
                      aria-label={requestInfoLabel}
                    >
                      <span className="text-sm font-medium text-zinc-900">{requestInfoLabel}</span>
                    </a>
                  </>
                )}
              </div>
              <p className="mt-4 text-sm text-zinc-600">{plan.description}</p>
            </div>

            <button
              className={`mt-6 w-full rounded-2xl px-5 py-3 text-sm font-medium shadow ${
                plan.highlight
                  ? "bg-black text-white hover:opacity-90"
                  : "bg-white text-zinc-900 ring-1 ring-black/10 hover:bg-zinc-50"
              }`}
            >
              {t("cta.getStarted")}
            </button>

            <div className="my-6 h-px w-full bg-zinc-200" />
            <ul className="flex flex-col gap-3 text-sm text-zinc-700">
              {plan.features.map((f, idx) => (
                <li key={`${plan.name}-${idx}`} className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-zinc-900" /> {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <button
          className="rounded-2xl bg-black px-6 py-3 text-sm font-medium text-white shadow hover:opacity-90"
          type="button"
        >
          {t("pricing.bundleDiscountsCta")}
        </button>
        <button
          className="rounded-2xl bg-white px-6 py-3 text-sm font-medium text-zinc-900 ring-1 ring-black/10 shadow hover:bg-zinc-50"
          type="button"
          onClick={() => window.open(SITE.calendly, "_blank", "noopener,noreferrer")}
        >
          {t("cta.requestDemo")}
        </button>
      </div>
    </section>
  );
}


