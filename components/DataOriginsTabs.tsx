"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

type TabContent = {
    id: string;
    number: string;
    title: string;
    description: string;
    bullets: string[];
    figureLabel: string;
    accent: string;
};

const TABS: TabContent[] = [
    {
        id: "open-web",
        number: "01",
        title: "Open Web",
        description:
            "Public reports, benchmarks, and docs that we clean and normalize so they plug straight into your stack.",
        bullets: [
            "Sources: sites, docs, PDFs, RSS with robots-safe scraping",
            "Transforms: HTML → JSON → Parquet with entity/date/geo tags",
            "Cadence: near-real-time refreshes for prices, SKUs, and specs",
        ],
        figureLabel: "Source map & freshness",
        accent: "from-emerald-400 to-lime-300",
    },
    {
        id: "media",
        number: "02",
        title: "Media & Press",
        description:
            "Global and niche outlets so you catch moves, messaging shifts, and regulatory news early.",
        bullets: [
            "Sources: wires, finance press, trade pubs (RSS/API)",
            "Transforms: headline normalization + sentiment and topic tags",
            "Cadence: low-latency ingest with alert rules on relevance",
        ],
        figureLabel: "Outlets & latency",
        accent: "from-sky-400 to-indigo-300",
    },
    {
        id: "social",
        number: "03",
        title: "Social & Forums",
        description:
            "Networks and forums clustered so you see early signals on adoption, feedback, and risk—always traceable.",
        bullets: [
            "Sources: APIs and firehoses (X, Reddit, forums, app stores)",
            "Transforms: clustering, language detection, safety filters",
            "Cadence: streaming for spikes; audit links to originals",
        ],
        figureLabel: "Conversations & provenance",
        accent: "from-rose-400 to-orange-300",
    },
    {
        id: "internal",
        number: "04",
        title: "Internal Data",
        description:
            "CRM, tickets, NPS, and wikis connected with governance so models use your proprietary signal safely.",
        bullets: [
            "Sources: CRM, support desk, NPS/CSAT, knowledge base",
            "Transforms: PII masking, versioning, role-based access",
            "Cadence: incremental syncs with audit trails and guardrails",
        ],
        figureLabel: "Connectors & controls",
        accent: "from-amber-400 to-emerald-300",
    },
];

const pillBase = "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold";

function Pill({ children, tone }: { children: string; tone: string }) {
    return <span className={`${pillBase} ${tone} bg-white/70 border border-white/60 shadow-sm`}>{children}</span>;
}

function OpenWebVisual() {
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
                <Pill tone="text-emerald-700">Sites & PDFs</Pill>
                <Pill tone="text-emerald-700">RSS feeds</Pill>
                <Pill tone="text-emerald-700">Robots-safe</Pill>
                <Pill tone="text-emerald-700">HTML → JSON</Pill>
                <Pill tone="text-emerald-700">Entity tagging</Pill>
            </div>
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3 shadow-sm">
                <div className="flex items-center justify-between text-sm text-emerald-900">
                    <span>Freshness</span>
                    <span className="font-semibold">≤ 15 min</span>
                </div>
                <div className="mt-2 h-2 w-full rounded-full bg-white/70 overflow-hidden">
                    <div className="h-full w-[82%] bg-gradient-to-r from-emerald-500 to-lime-400 rounded-full" />
                </div>
                <p className="mt-2 text-xs text-emerald-800">Dedup + provenance on every document.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-zinc-100 bg-white px-3 py-3 shadow-sm">
                    <p className="text-[11px] text-zinc-500">Regions & languages</p>
                    <p className="text-sm font-semibold text-zinc-900">62 countries · 18 langs</p>
                </div>
                <div className="rounded-xl border border-zinc-100 bg-white px-3 py-3 shadow-sm">
                    <p className="text-[11px] text-zinc-500">Quality</p>
                    <p className="text-sm font-semibold text-zinc-900">Noise filtered 87%</p>
                </div>
            </div>
        </div>
    );
}

function MediaVisual() {
    return (
        <div className="space-y-5">
            <div className="flex flex-wrap gap-2">
                <Pill tone="text-sky-700">Wires</Pill>
                <Pill tone="text-sky-700">Finance press</Pill>
                <Pill tone="text-sky-700">Trade pubs</Pill>
                <Pill tone="text-sky-700">RSS/API</Pill>
                <Pill tone="text-sky-700">Headline normalize</Pill>
            </div>
            <div className="rounded-2xl border border-sky-100 bg-sky-50/70 px-4 py-3 shadow-sm">
                <div className="flex items-center justify-between text-sm text-sky-900">
                    <span>Latency</span>
                    <span className="font-semibold">&lt; 5 min</span>
                </div>
                <p className="mt-2 text-xs text-sky-800">Sentiment and topics applied on ingest.</p>
                <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-sky-900">
                    <div className="rounded-lg bg-white/80 border border-sky-100 px-3 py-2">
                        <p className="text-[11px] text-sky-600">Tracked outlets</p>
                        <p className="text-sm font-semibold text-sky-900">+180 priority</p>
                    </div>
                    <div className="rounded-lg bg-white/80 border border-sky-100 px-3 py-2">
                        <p className="text-[11px] text-sky-600">Languages</p>
                        <p className="text-sm font-semibold text-sky-900">24 with locale rules</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-zinc-100 bg-white px-3 py-3 shadow-sm">
                    <p className="text-[11px] text-zinc-500">Relevance alerts</p>
                    <p className="text-sm font-semibold text-zinc-900">Noise trimmed 72%</p>
                </div>
                <div className="rounded-xl border border-zinc-100 bg-white px-3 py-3 shadow-sm">
                    <p className="text-[11px] text-zinc-500">Provenance</p>
                    <p className="text-sm font-semibold text-zinc-900">Signed links kept</p>
                </div>
            </div>
        </div>
    );
}

function SocialVisual() {
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
                <Pill tone="text-rose-700">APIs (X, Reddit)</Pill>
                <Pill tone="text-rose-700">Forums</Pill>
                <Pill tone="text-rose-700">App stores</Pill>
                <Pill tone="text-rose-700">Streaming</Pill>
                <Pill tone="text-rose-700">Audit links</Pill>
            </div>
            <div className="rounded-2xl border border-rose-100 bg-rose-50/70 px-4 py-3 shadow-sm">
                <div className="flex items-center justify-between text-sm text-rose-900">
                    <span>Traceability</span>
                    <span className="font-semibold">100% links kept</span>
                </div>
                <p className="mt-2 text-xs text-rose-800">Spikes and anomalies flagged with source URLs.</p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-rose-900">
                    {[
                        { label: "Spike detection", value: "+41% / 24h" },
                        { label: "New topics", value: "12" },
                        { label: "Safety filters", value: "On" },
                    ].map((item) => (
                        <div key={item.label} className="rounded-lg bg-white/80 border border-rose-100 px-3 py-2">
                            <p className="text-[11px] text-rose-600">{item.label}</p>
                            <p className="text-sm font-semibold text-rose-900">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-zinc-100 bg-white px-3 py-3 shadow-sm">
                    <p className="text-[11px] text-zinc-500">Latency</p>
                    <p className="text-sm font-semibold text-zinc-900">&lt; 2 min streaming</p>
                </div>
                <div className="rounded-xl border border-zinc-100 bg-white px-3 py-3 shadow-sm">
                    <p className="text-[11px] text-zinc-500">Noise trimmed</p>
                    <p className="text-sm font-semibold text-zinc-900">81% filtered</p>
                </div>
            </div>
        </div>
    );
}

function InternalVisual() {
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
                <Pill tone="text-amber-700">CRM</Pill>
                <Pill tone="text-amber-700">Support desk</Pill>
                <Pill tone="text-amber-700">NPS/CSAT</Pill>
                <Pill tone="text-amber-700">Wiki/KB</Pill>
                <Pill tone="text-amber-700">SFTP/Webhook</Pill>
            </div>
            <div className="rounded-2xl border border-amber-100 bg-amber-50/70 px-4 py-3 shadow-sm">
                <div className="flex items-center justify-between text-sm text-amber-900">
                    <span>Access control</span>
                    <span className="font-semibold">Role-based</span>
                </div>
                <p className="mt-2 text-xs text-amber-800">Masking for PII + audit logs kept.</p>
                <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] text-amber-900">
                    {[
                        { label: "Connectors", value: "12 active" },
                        { label: "Incremental sync", value: "15 min" },
                        { label: "Versions", value: "1.4k stored" },
                    ].map((item) => (
                        <div key={item.label} className="rounded-lg bg-white/80 border border-amber-100 px-3 py-2">
                            <p className="text-[11px] text-amber-600">{item.label}</p>
                            <p className="text-sm font-semibold text-amber-900">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-zinc-100 bg-white px-3 py-3 shadow-sm">
                    <p className="text-[11px] text-zinc-500">Guardrails</p>
                    <p className="text-sm font-semibold text-zinc-900">24 enforced</p>
                </div>
                <div className="rounded-xl border border-zinc-100 bg-white px-3 py-3 shadow-sm">
                    <p className="text-[11px] text-zinc-500">Auditability</p>
                    <p className="text-sm font-semibold text-zinc-900">Trace on every change</p>
                </div>
            </div>
        </div>
    );
}

export default function DataOriginsTabs() {
    const [activeTab, setActiveTab] = useState(0);
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-white">
            <div className="container-v2">
                <div className="max-w-3xl mb-16">
                    <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 mb-6" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                        {t("dataOrigins.tabs.title")}
                    </h2>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        {t("dataOrigins.tabs.description")}
                    </p>
                </div>

                {/* Tabs Navigation */}
                <div className="flex overflow-x-auto no-scrollbar border-b border-zinc-200 mb-16">
                    {TABS.map((tab, index) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(index)}
                            className={`flex-shrink-0 px-6 py-4 relative text-sm font-medium transition-colors ${activeTab === index ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
                                }`}
                        >
                            <span className="text-[10px] text-zinc-400 mr-2 align-top">{tab.number}</span>
                            <span className="text-lg">{tab.title}</span>
                            {activeTab === index && (
                                <motion.div
                                    layoutId="active-origin-tab"
                                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <div className="max-w-lg">
                        <h3 className="text-2xl font-medium text-zinc-900 mb-4">
                            {TABS[activeTab].title}
                        </h3>
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            {TABS[activeTab].description}
                        </p>
                        <ul className="mt-5 space-y-2 text-zinc-700">
                            {TABS[activeTab].bullets.map((item) => (
                                <li key={item} className="flex gap-2">
                                    <span className="mt-[6px] h-[6px] w-[6px] rounded-full bg-primary" aria-hidden />
                                    <span className="text-base leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Visual Content */}
                    <div className="bg-[#D8E0D6] rounded-3xl aspect-[4/3] flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
                        <div className="bg-white rounded-2xl shadow-xl w-full max-w-xl p-5 relative z-10 border border-zinc-100">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <p className="text-xs uppercase tracking-[0.12em] text-zinc-500">{t("dataOrigins.tabs.generatedSample")}</p>
                                    <p className="text-sm text-zinc-700">{TABS[activeTab].figureLabel}</p>
                                </div>
                                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                                    {t("dataOrigins.tabs.llmRag")}
                                </span>
                            </div>
                            <div className="relative w-full h-[280px] rounded-xl overflow-hidden border border-zinc-100 bg-gradient-to-br from-white via-white to-zinc-50">
                                <div className={`absolute inset-0 bg-gradient-to-br ${TABS[activeTab].accent} opacity-10`} />
                                <div className="relative h-full w-full p-4">
                                    {activeTab === 0 && <OpenWebVisual />}
                                    {activeTab === 1 && <MediaVisual />}
                                    {activeTab === 2 && <SocialVisual />}
                                    {activeTab === 3 && <InternalVisual />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
