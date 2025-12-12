"use client";

import { motion } from "framer-motion";

export default function PanelReporting() {
    const highlights = [
        { label: "Total mentions (7d)", value: "67.2K", change: "+18% vs 7d" },
        { label: "Average sentiment", value: "+4.3", change: "+0.6 vs 7d" },
        { label: "Critical alerts", value: "3", change: "EU regulation, NVDA BoM" },
    ];

    const checklist = [
        "Auto-generated executive summary (2m ago)",
        "Slides ready for ExCo (PPT + PDF)",
        "Appendix: transcripts and cited sources",
    ];

    return (
        <motion.div
            className="relative bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="p-6 space-y-5">
                {/* Reporte generado */}
                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4">
                    <div className="text-xs font-semibold text-zinc-600 mb-2">Automated report</div>
                    <div className="flex items-start justify-between gap-3">
                        <div>
                            <div className="text-xl font-semibold text-zinc-900">Weekly Market Intelligence</div>
                            <div className="text-sm text-zinc-600">Sent to ExCo · 08:15h</div>
                        </div>
                        <button className="px-3 py-1.5 rounded-md border border-zinc-300 text-xs text-zinc-700 bg-white">Export PDF</button>
                    </div>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {highlights.map((h) => (
                            <div key={h.label} className="rounded-lg border border-zinc-200 bg-white p-3">
                                <div className="text-xs text-zinc-500">{h.label}</div>
                                <div className="text-lg font-semibold text-zinc-900 mt-1">{h.value}</div>
                                <div className="text-xs text-emerald-600">{h.change}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contenido del informe */}
                <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center text-sm font-semibold">
                            2L
                        </div>
                        <div className="flex-1">
                            <div className="text-sm text-zinc-900 font-semibold mb-1">CapEx keeps accelerating despite AI Act</div>
                            <div className="text-sm text-zinc-600">
                                Data center demand, driven by <span className="bg-yellow-100 px-1 rounded">GPU inference</span>, keeps rising. Hyperscalers prioritize energy efficiency and supplier consolidation, sustaining higher prices short term.
                            </div>
                            <div className="mt-3 text-xs text-zinc-500">Sources cited: earnings calls, newswire, technical forums</div>
                        </div>
                    </div>

                    <div className="border-t border-zinc-200 pt-3 flex flex-wrap gap-3">
                        {checklist.map((item) => (
                            <div key={item} className="flex items-center gap-2 text-sm text-zinc-700">
                                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}







