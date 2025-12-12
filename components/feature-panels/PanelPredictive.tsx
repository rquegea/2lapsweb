"use client";

import { motion } from "framer-motion";

export default function PanelPredictive() {
    const chips = ["All", "Demand", "Pricing", "Risk", "CapEx"];
    const forecasts = [
        { title: "GPU demand (12 weeks)", detail: "+14% requested volume vs 7d", confidence: "Confidence 82%" },
        { title: "Inference pricing", detail: "+6% QoQ from supply tightness", confidence: "Confidence 76%" },
        { title: "Hyperscaler CapEx", detail: "+9% planned average next 90d", confidence: "Confidence 71%" },
    ];
    const drivers = [
        "Mentions spike +32% for NVDA (24h)",
        "MI300 inventories normalize by June",
        "EU AI Act adds light regulatory risk",
    ];

    return (
        <motion.div
            className="relative bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="px-6 pt-6 pb-4 bg-zinc-50 border-b border-zinc-200">
                <div className="flex flex-wrap gap-2">
                    {chips.map((c, i) => (
                        <span
                            key={c}
                            className={`text-xs px-3 py-1 rounded-full border ${
                                i === 0 ? "bg-zinc-900 text-white border-zinc-900" : "bg-white border-zinc-200 text-zinc-700"
                            }`}
                        >
                            {c}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-6">
                <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-semibold">
                            2L
                        </div>
                        <div className="flex-1 space-y-3">
                            <div className="text-xs text-zinc-500">Predictive model</div>
                            <div className="text-lg font-semibold text-zinc-900">Ensemble + time series</div>

                            <div className="space-y-3">
                                {forecasts.map((f) => (
                                    <div key={f.title} className="rounded-lg border border-zinc-200 p-3 bg-zinc-50">
                                        <div className="flex items-start justify-between gap-3">
                                            <div>
                                                <div className="text-sm font-semibold text-zinc-900">{f.title}</div>
                                                <div className="text-sm text-zinc-700">{f.detail}</div>
                                            </div>
                                            <span className="text-[11px] px-2 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                                                {f.confidence}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div>
                                <div className="text-xs font-semibold text-zinc-600 uppercase mb-2">Detected drivers</div>
                                <ul className="list-disc pl-5 space-y-1.5 text-sm text-zinc-800">
                                    {drivers.map((d) => (
                                        <li key={d}>
                                            <span className="bg-yellow-100 rounded px-1">{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}







