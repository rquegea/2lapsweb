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

const monthlyRevenue = [
  { month: "Jan", actual: 120, target: 110, forecast: 128 },
  { month: "Feb", actual: 132, target: 120, forecast: 135 },
  { month: "Mar", actual: 140, target: 130, forecast: 150 },
  { month: "Apr", actual: 128, target: 138, forecast: 142 },
  { month: "May", actual: 172, target: 150, forecast: 168 },
  { month: "Jun", actual: 160, target: 158, forecast: 175 },
];

const insightSources = [
  { source: "CRM", insights: 42 },
  { source: "Tickets", insights: 34 },
  { source: "Surveys", insights: 27 },
  { source: "Internal conversations", insights: 53 },
  { source: "SharePoint", insights: 31 },
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
  const [mostrarPrediccion, setMostrarPrediccion] = useState(true);

  return (
    <div className="container-v2">
      {/* Hero */}
      <section className="pt-20 pb-10 text-center">
        <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
          Enterprise Intelligence
        </div>
        <h1
          className="text-4xl md:text-6xl font-medium text-zinc-900 mb-4"
          style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
        >
          Explain, don’t just show: internal conversations turned into decisions
        </h1>
        <p className="text-zinc-600 text-lg max-w-3xl mx-auto">
          Bring together conversations, wikis, and internal sheets to uncover patterns, validate
          hypotheses, and align teams. Below is an illustrative walkthrough with sample data.
        </p>
      </section>

      {/* Cómo funciona */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-900">1. Ingest</div>
          <p className="text-sm text-zinc-600 mt-2">
            Connectors to SharePoint, Google Drive, CRM, and knowledge bases. Secure indexing and
            granular access controls for conversations.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-900">2. Understanding</div>
          <p className="text-sm text-zinc-600 mt-2">
            Entity, relationship, and metric extraction. Semantic enrichment and disambiguation.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-900">3. Decision</div>
          <p className="text-sm text-zinc-600 mt-2">
            Dashboards, alerts, and natural-language answers. Validate sales, research, and performance.
          </p>
        </div>
      </section>

      {/* KPIs del pipeline */}
      <section className="mb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Metric label="Conversations processed" value={pipelineKpis.conversations} />
          <Metric label="Entities extracted" value={pipelineKpis.entities} />
          <Metric label="Relationships detected" value={pipelineKpis.relations} />
          <Metric label="Actionable insights" value={pipelineKpis.insights} />
        </div>
      </section>

      {/* Ejemplo 1: Ventas vs Objetivo con predicción */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="lg:col-span-2 p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-semibold text-zinc-700">
              Monthly revenue: actual vs target {mostrarPrediccion ? "and forecast" : ""}
            </div>
            <label className="inline-flex items-center gap-2 text-sm text-zinc-600">
              <input
                type="checkbox"
                className="rounded border-zinc-300"
                checked={mostrarPrediccion}
                onChange={(e) => setMostrarPrediccion(e.target.checked)}
                aria-label="Show forecast series"
              />
              <span>Show forecast</span>
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
                <Line type="monotone" dataKey="actual" name="Actual" stroke="#111827" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="target" name="Target" stroke="#ef4444" strokeDasharray="4 4" />
                {mostrarPrediccion && (
                  <Line type="monotone" dataKey="forecast" name="Forecast" stroke="#3b82f6" />
                )}
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-zinc-500 mt-3">
            Illustration: targets come from OKR docs and actuals from finance reports. The forecast is
            calculated from historical performance.
          </p>
        </div>
        <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-700 mb-2">What does it deliver?</div>
          <ul className="text-sm text-zinc-600 list-disc pl-4 space-y-1">
            <li>Reconcile numbers across Finance, Sales, and Marketing.</li>
            <li>Spot deviations versus target in real time.</li>
            <li>Explain the “why” with references to internal conversations.</li>
          </ul>
        </div>
      </section>

      {/* Ejemplo 2: Origen de insights */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
        <div className="p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-700 mb-2">
            Insight origin by source
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
            Aggregated example: which repositories yield more useful findings. Optimize where to invest
            in curating conversations and content.
          </p>
        </div>
        <div className="lg:col-span-2 p-5 rounded-xl bg-white border border-zinc-100 shadow-sm">
          <div className="text-sm font-semibold text-zinc-700 mb-2">
            Cumulative: conversations, entities, and insights
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
                <Area type="monotone" dataKey="conversations" name="Conversations" stroke="#111827" fill="url(#gDocs)" />
                <Area type="monotone" dataKey="entities" name="Entities" stroke="#3b82f6" fill="url(#gEnt)" />
                <Area type="monotone" dataKey="insights" name="Insights" stroke="#ef4444" fill="url(#gIns)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-zinc-500 mt-3">
            Evolution example: as conversations grow, so do entities and relationships — and the
            resulting business insights.
          </p>
        </div>
      </section>

      {/* Cierre / CTA */}
      <section className="mb-16">
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-100 text-center">
          <h3 className="text-xl font-semibold text-zinc-900">Want to see this with your data?</h3>
          <p className="text-zinc-600 mt-1">
            We activate connectors and tailor ontologies in days, not months.
          </p>
          <a
            href="/about/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-[15px] font-semibold text-white mt-4 hover:bg-primary-hover active:scale-95"
          >
            Request a demo
          </a>
        </div>
      </section>
    </div>
  );
}




