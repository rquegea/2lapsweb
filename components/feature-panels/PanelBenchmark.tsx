"use client";

import { motion } from "framer-motion";
import { makeLocalFavicon } from "../../lib/localFavicon";

export default function PanelBenchmark() {
    const competitors = [
        { name: "NVIDIA", sov: "51%", sentiment: "+6.2", velocity: "+28% 24h", domain: "www.nvidia.com/es-es/" },
        { name: "AMD", sov: "27%", sentiment: "+2.1", velocity: "+12% 24h", domain: "amd.com" },
        { name: "AVGO", sov: "12%", sentiment: "+1.4", velocity: "+9% 24h", domain: "broadcom.com" },
    ];

    const insights = [
        "NVDA leads share of voice due to data-center launches.",
        "AMD sentiment rising from MI300 news, volume still lower.",
        "AVGO gaining momentum on pricing/licensing angles.",
    ];

    const getFavicon = (domain: string) => makeLocalFavicon(domain, 48);

    return (
        <motion.div
            className="relative bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="p-6">
                <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm space-y-4">
                    <div className="flex items-start justify-between">
                        <div>
                            <div className="text-xs font-semibold text-zinc-600 uppercase">Benchmark</div>
                            <div className="text-lg font-semibold text-zinc-900">Competitor comparison</div>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-zinc-100 text-zinc-700 border border-zinc-200">Updated 24h</span>
                    </div>

                    <div className="rounded-lg border border-zinc-200 overflow-hidden">
                        <div className="grid grid-cols-4 bg-zinc-50 text-xs font-semibold text-zinc-600">
                            <div className="px-3 py-2">Company</div>
                            <div className="px-3 py-2">Share of Voice</div>
                            <div className="px-3 py-2">Sentiment</div>
                            <div className="px-3 py-2">News velocity</div>
                        </div>
                        {competitors.map((c, idx) => {
                            const isLast = idx === competitors.length - 1;
                            return (
                                <div key={c.name} className={`grid grid-cols-4 text-sm ${isLast ? "" : "border-b border-zinc-200"}`}>
                                    <div className="px-3 py-2 font-semibold text-zinc-900 flex items-center gap-2">
                                        <img
                                            src={getFavicon(c.domain)}
                                            alt={`${c.name} company logo - Competitor benchmark data tracked by 2laps market intelligence platform`}
                                            className="w-8 h-8 rounded-full border border-zinc-200 bg-white"
                                        />
                                        {c.name}
                                    </div>
                                    <div className="px-3 py-2 text-zinc-800">{c.sov}</div>
                                    <div className="px-3 py-2 text-emerald-600">{c.sentiment}</div>
                                    <div className="px-3 py-2 text-zinc-800">{c.velocity}</div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="space-y-2">
                        <div className="text-sm font-semibold text-zinc-900">Key findings</div>
                        <ul className="list-disc pl-5 text-sm text-zinc-800 space-y-1.5">
                            {insights.map((insight) => (
                                <li key={insight}>
                                    <span className="bg-yellow-100 px-1 rounded">{insight}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="pt-2 flex items-center gap-2">
                        <input className="flex-1 rounded-md border border-zinc-300 px-3 py-2 text-sm" placeholder="Request a new cut (sector, region, etc.)" />
                        <button className="px-3 py-2 rounded-md bg-primary text-white text-sm">Generate</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}







