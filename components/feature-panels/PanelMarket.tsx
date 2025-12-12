"use client";

import { motion } from "framer-motion";
import { makeLocalFavicon } from "../../lib/localFavicon";

export default function PanelMarket() {
    const tabs = ["Sector", "Region", "Coverage"];
    const tickers = [
        { code: "NVDA", name: "NVIDIA", delta: "Sentiment +6%", value: "24.3K mentions 24h", color: "#76b900", note: "News + social", domain: "www.nvidia.com/es-es/" },
        { code: "AMD", name: "AMD", delta: "Sentiment -3%", value: "11.8K mentions 24h", color: "#ed1c24", note: "MI300 focus", domain: "amd.com" },
        { code: "AVGO", name: "Broadcom", delta: "Sentiment +2%", value: "7.2K mentions 24h", color: "#0ea5e9", note: "Licensing pricing", domain: "broadcom.com" },
    ];
    const events = [
        { title: "NVDA earnings call", date: "Apr 16", who: "NVDA" },
        { title: "MI300X launch", date: "Apr 21", who: "AMD" },
        { title: "EU AI Act vote", date: "Apr 10", who: "EU" },
    ];
    const sources = [
        { title: "Financial Times · NVDA data-center outlook", source: "FT · 12m", domain: "ft.com" },
        { title: "Reddit r/semiconductors · MI300 yields", source: "Community · 7m", domain: "reddit.com" },
        { title: "USPTO · Chiplet cooling patent (AMD)", source: "Patents · 2h", domain: "uspto.gov" },
    ];
    const bars = [
        { id: "t01", value: 8 },
        { id: "t02", value: 5 },
        { id: "t03", value: 7 },
        { id: "t04", value: 4 },
        { id: "t05", value: 6 },
        { id: "t06", value: 9 },
        { id: "t07", value: 12 },
        { id: "t08", value: 7 },
        { id: "t09", value: 9 },
        { id: "t10", value: 6 },
        { id: "t11", value: 10 },
        { id: "t12", value: 13 },
    ];
    const barWidth = 8;
    const barGap = 6;
    const chartWidth = bars.length * (barWidth + barGap) - barGap;
    const chartHeight = (chartWidth * 3) / 4; // Mantener aspecto 4:3

    const getFavicon = (domain: string) => makeLocalFavicon(domain, 48);

    return (
        <motion.div
            className="relative bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            {/* Tabs apiladas */}
            <div className="absolute -top-8 left-6 right-6 h-8 pointer-events-none">
                <div className="absolute inset-x-10 top-4 h-8 rounded-md bg-zinc-100 border border-zinc-200" />
                <div className="absolute inset-x-6 top-2 h-8 rounded-md bg-zinc-100 border border-zinc-200" />
                <div className="absolute inset-x-2 top-0 h-8 rounded-md bg-zinc-100 border border-zinc-200" />
            </div>

            {/* Header */}
            <div className="px-6 pt-10 pb-4 bg-zinc-50 border-b border-zinc-200 flex items-center gap-3">
                <div className="text-sm font-semibold text-zinc-800">Semiconductors · Market intelligence</div>
                <div className="flex items-center gap-2">
                    {tabs.map((t, i) => (
                        <span
                            key={t}
                            className={`text-xs px-2.5 py-1 rounded-full border ${
                                i === 1 ? "bg-white border-zinc-300 text-zinc-900" : "bg-zinc-100 border-zinc-200 text-zinc-500"
                            }`}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-6 grid grid-cols-12 gap-6">
                {/* Tickers */}
                <div className="col-span-12 md:col-span-6 space-y-3">
                    {tickers.map((t) => (
                        <div key={t.code} className="flex items-center justify-between rounded-lg border border-zinc-200 px-4 py-3 bg-white min-w-[260px]">
                            <div className="flex items-center gap-3">
                                <img
                                    src={getFavicon(t.domain)}
                                    alt={`${t.name || t.code} company logo - Market intelligence data source tracked by 2laps`}
                                    className="w-8 h-8 rounded-full border border-zinc-200 bg-white"
                                    style={{ background: t.color }}
                                />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-sm font-semibold text-zinc-900">{t.name ?? t.code}</span>
                                    <span className="text-[11px] text-zinc-500">{t.delta}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm font-semibold tabular-nums text-zinc-900">{t.value}</div>
                                <div className="text-[11px] text-zinc-500">{t.note}</div>
                            </div>
                        </div>
                    ))}

                    {/* Recent sources */}
                    <div className="rounded-lg border border-zinc-200 bg-white p-3 space-y-3">
                        <div className="text-xs font-semibold text-zinc-600 uppercase">Recent sources</div>
                        {sources.map((s) => (
                            <div key={s.title} className="flex items-start gap-3">
                                <img
                                    src={getFavicon(s.domain)}
                                    alt={`${s.domain} source logo - Market intelligence data aggregated by 2laps platform`}
                                    className="w-6 h-6 rounded-md border border-zinc-200 shrink-0 mt-0.5 bg-white"
                                />
                                <div className="space-y-0.5">
                                    <div className="text-sm text-zinc-800">{s.title}</div>
                                    <div className="text-xs text-zinc-500">{s.source}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Eventos y mini chart */}
                <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                    <div className="rounded-lg border border-zinc-200 p-3 bg-white">
                        <div className="text-sm font-semibold text-zinc-800 mb-2">Upcoming events</div>
                        <div className="space-y-2">
                            {events.map((e) => (
                                <div key={e.title} className="flex items-center justify-between text-sm">
                                    <div className="text-zinc-700">{e.title}</div>
                                    <div className="text-zinc-400 text-xs">{e.date} · {e.who}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-lg border border-zinc-200 p-3 bg-white">
                        <div className="text-sm font-semibold text-zinc-800 mb-1">News velocity (notes/hr)</div>
                        <div className="text-xs text-zinc-500 mb-3">Spikes vs. 7d baseline</div>
                        <div className="w-full aspect-[4/3]">
                            <svg viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="w-full h-full" preserveAspectRatio="none">
                            {bars.map((b, i) => {
                                    const x = i * (barWidth + barGap);
                                    const h = Math.max(6, Math.min(chartHeight - 6, b.value * 3));
                                return (
                                    <rect
                                        key={b.id}
                                        x={x}
                                            y={chartHeight - h}
                                            width={barWidth}
                                        height={h}
                                        fill={i % 2 === 0 ? "#e11d48" : "#d4d4d8"}
                                        rx={1}
                                    />
                                );
                            })}
                        </svg>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}






