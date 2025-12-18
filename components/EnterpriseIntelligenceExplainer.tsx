"use client";
import React, { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useLanguage } from "./LanguageProvider";

const monthlyRevenue = [
  { month: "Jan", actual: 120, target: 110, forecast: 128 },
  { month: "Feb", actual: 132, target: 120, forecast: 135 },
  { month: "Mar", actual: 140, target: 130, forecast: 150 },
  { month: "Apr", actual: 128, target: 138, forecast: 142 },
  { month: "May", actual: 172, target: 150, forecast: 168 },
  { month: "Jun", actual: 160, target: 158, forecast: 175 },
];

const pipelineKpis = {
  conversations: 1240,
  entities: 15840,
  relations: 3120,
  insights: 480,
};

const monthlyCumulative = [
  { month: "Jan", conversations: 120, entities: 980, insights: 35 },
  { month: "Feb", conversations: 210, entities: 1650, insights: 68 },
  { month: "Mar", conversations: 340, entities: 2720, insights: 120 },
  { month: "Apr", conversations: 510, entities: 3920, insights: 190 },
  { month: "May", conversations: 760, entities: 6120, insights: 310 },
  { month: "Jun", conversations: 1240, entities: 15840, insights: 480 },
];

function Metric({ label, value, suffix = "" }: Readonly<{ label: string; value: number; suffix?: string }>) {
  const formatted = useMemo(
    () => new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(value),
    [value]
  );
  return (
    <div className="p-4 rounded-xl bg-white border border-zinc-100 shadow-sm">
      <div className="text-xs font-semibold text-zinc-500">{label}</div>
      <div className="text-2xl font-semibold text-zinc-900 mt-1">
        {formatted}
        {suffix}
      </div>
    </div>
  );
}

export default function EnterpriseIntelligenceExplainer() {
  const { t } = useLanguage();
  const [mostrarPrediccion, setMostrarPrediccion] = useState(true);

  const insightSources = [
    { source: "CRM", insights: 42 },
    { source: "Tickets", insights: 34 },
    { source: "Surveys", insights: 27 },
    { source: t("enterprise.kpis.conversations"), insights: 53 },
    { source: "SharePoint", insights: 31 },
  ];

  return (
    <div className="container-v2">
      {/* Hero */}
      <section className="pt-20 pb-10 text-center">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          {t("enterprise.badge")}
        </div>
        <h1
          className="text-4xl md:text-6xl font-medium text-zinc-900 mb-4"
          style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
        >
          {t("enterprise.hero.title")}
        </h1>
        <p className="text-zinc-600 text-lg max-w-3xl mx-auto">
          {t("enterprise.hero.description")}
        </p>
      </section>

      {/* Cómo funciona */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-900">{t("enterprise.howItWorks.ingest")}</div>
          <p className="text-sm text-zinc-600 mt-2">
            {t("enterprise.howItWorks.ingestDesc")}
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-900">{t("enterprise.howItWorks.understanding")}</div>
          <p className="text-sm text-zinc-600 mt-2">
            {t("enterprise.howItWorks.understandingDesc")}
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-900">{t("enterprise.howItWorks.decision")}</div>
          <p className="text-sm text-zinc-600 mt-2">
            {t("enterprise.howItWorks.decisionDesc")}
          </p>
        </div>
      </section>

      {/* KPIs del pipeline */}
      <section className="mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Metric label={t("enterprise.kpis.conversations")} value={pipelineKpis.conversations} />
          <Metric label={t("enterprise.kpis.entities")} value={pipelineKpis.entities} />
          <Metric label={t("enterprise.kpis.relations")} value={pipelineKpis.relations} />
          <Metric label={t("enterprise.kpis.insights")} value={pipelineKpis.insights} />
        </div>
      </section>

      {/* Ejemplo 1: Ventas vs Objetivo con predicción */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2 p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-zinc-700">
              {t("enterprise.revenue.title")} {mostrarPrediccion ? t("enterprise.revenue.andForecast") : ""}
            </div>
            <label className="inline-flex items-center gap-2 text-sm text-zinc-600">
              <input
                type="checkbox"
                className="rounded border-zinc-300"
                checked={mostrarPrediccion}
                onChange={(e) => setMostrarPrediccion(e.target.checked)}
                aria-label={t("enterprise.revenue.showForecast")}
              />
              <span>{t("enterprise.revenue.showForecast")}</span>
            </label>
          </div>
          <div className="w-full h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="actual" name={t("enterprise.revenue.actual")} stroke="#111827" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="target" name={t("enterprise.revenue.target")} stroke="#ef4444" strokeDasharray="4 4" />
                {mostrarPrediccion && (
                  <Line type="monotone" dataKey="forecast" name={t("enterprise.revenue.forecast")} stroke="#3b82f6" />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-zinc-500 mt-3">
            {t("enterprise.revenue.explanation")}
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-700 mb-2">{t("enterprise.delivers.title")}</div>
          <ul className="text-sm text-zinc-600 list-disc pl-4 space-y-1">
            <li>{t("enterprise.delivers.item1")}</li>
            <li>{t("enterprise.delivers.item2")}</li>
            <li>{t("enterprise.delivers.item3")}</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo 2: Origen de insights */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-700 mb-2">
            {t("enterprise.insightOrigin")}
          </div>
          <div className="w-full h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={insightSources}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="source" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="insights" name="Insights" fill="#ef4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-zinc-500 mt-3">
            {t("enterprise.insightOriginExplanation")}
          </p>
        </div>
        <div className="lg:col-span-2 p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-700 mb-2">
            {t("enterprise.cumulative")}
          </div>
          <div className="w-full h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyCumulative}>
                <defs>
                  <linearGradient id="gDocs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#111827" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#111827" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gEnt" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gIns" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend />
                <Area type="monotone" dataKey="conversations" name={t("enterprise.kpis.conversations")} stroke="#111827" fill="url(#gDocs)" />
                <Area type="monotone" dataKey="entities" name={t("enterprise.kpis.entities")} stroke="#3b82f6" fill="url(#gEnt)" />
                <Area type="monotone" dataKey="insights" name="Insights" stroke="#ef4444" fill="url(#gIns)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-zinc-500 mt-3">
            {t("enterprise.cumulativeExplanation")}
          </p>
        </div>
      </section>

      {/* Cierre / CTA */}
      <section className="mb-16">
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 text-center">
          <h3 className="text-xl font-semibold text-zinc-900">{t("enterprise.cta.title")}</h3>
          <p className="text-zinc-600 mt-1">
            {t("enterprise.cta.description")}
          </p>
          <a
            href="/about/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-[15px] font-semibold text-white mt-4 hover:bg-primary-hover active:scale-95"
          >
            {t("enterprise.cta.button")}
          </a>
        </div>
      </section>
    </div>
  );
}
