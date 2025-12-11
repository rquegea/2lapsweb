"use client";

import { motion } from "framer-motion";

type FeaturePanelMockProps = {
    title: string;
    accent?: string;
};

// Panel ilustrativo inspirado en UI de research con pestañas apiladas,
// lista de "tickers", eventos y un mini-barchart.
export default function FeaturePanelMock({ title, accent = "#e11d48" }: FeaturePanelMockProps) {
    const tabs = ["Energy", "Technology", "Healthcare"];
    const tickers = [
        { code: "CMPA", delta: "+8%", value: "139,329", color: "#2563eb" },
        { code: "CMPB", delta: "-2%", value: "687,848", color: "#06b6d4" },
        { code: "CMPC", delta: "+5%", value: "2,301,164", color: "#22c55e" },
    ];
    const events = [
        { title: "Q1 Earnings Release", date: "10 Apr", who: "CMPA" },
        { title: "Strategy Update", date: "16 Apr", who: "CMPB" },
        { title: "Annual General Meeting", date: "21 Apr", who: "CMPC" },
    ];
    const bars = [8, 5, 7, 4, 6, 9, 10, 7, 8, 6, 9, 11];

    return (
        <motion.div
            className="relative bg-white rounded-xl border border-zinc-200 shadow-sm overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {/* Pestañas apiladas */}
            <div className="absolute -top-6 left-6 right-6 h-6 pointer-events-none">
                <div className="absolute inset-x-8 top-2 h-6 rounded-md bg-zinc-100 border border-zinc-200" />
                <div className="absolute inset-x-4 top-0 h-6 rounded-md bg-zinc-100 border border-zinc-200" />
            </div>

            {/* Header con tabs */}
            <div className="px-6 pt-8 pb-4 bg-zinc-50 border-b border-zinc-200 flex items-center gap-3">
                <div className="text-sm font-medium text-zinc-700 mr-2">{title}</div>
                <div className="flex items-center gap-2">
                    {tabs.map((t, i) => (
                        <div
                            key={t}
                            className={`text-xs px-2.5 py-1 rounded-full border ${
                                i === 1 ? "bg-white border-zinc-300 text-zinc-900" : "bg-zinc-100 border-zinc-200 text-zinc-500"
                            }`}
                        >
                            {t}
                        </div>
                    ))}
                </div>
            </div>

            {/* Contenido */}
            <div className="p-6 grid grid-cols-12 gap-6">
                {/* Lista de tickers */}
                <div className="col-span-12 md:col-span-6">
                    <div className="text-sm font-semibold text-zinc-800 mb-3">Overview</div>
                    <div className="space-y-3">
                        {tickers.map((t) => (
                            <div key={t.code} className="flex items-center justify-between rounded-lg border border-zinc-200 px-3 py-2 bg-white">
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-1 rounded bg-zinc-100 text-zinc-700 text-xs font-semibold" style={{ border: "1px solid #e5e7eb" }}>
                                        {t.code}
                                    </span>
                                    <span className="text-xs text-zinc-500">{t.delta}</span>
                                </div>
                                <div className="text-sm font-medium tabular-nums text-zinc-900">{t.value}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Eventos + mini chart */}
                <div className="col-span-12 md:col-span-6 flex flex-col gap-4">
                    <div className="rounded-lg border border-zinc-200 p-3 bg-white">
                        <div className="text-sm font-semibold text-zinc-800 mb-2">Upcoming</div>
                        <div className="space-y-2">
                            {events.map((e, idx) => (
                                <div key={idx} className="flex items-center justify-between text-sm">
                                    <div className="text-zinc-700">{e.title}</div>
                                    <div className="text-zinc-400 text-xs">{e.date} · {e.who}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-lg border border-zinc-200 p-3 bg-white">
                        <div className="text-sm font-semibold text-zinc-800 mb-2">Signals</div>
                        <svg viewBox="0 0 120 36" className="w-full h-16">
                            {bars.map((b, i) => {
                                const w = 6;
                                const x = i * (w + 4);
                                const h = Math.max(2, Math.min(30, b));
                                return (
                                    <rect
                                        key={i}
                                        x={x}
                                        y={36 - h}
                                        width={w}
                                        height={h}
                                        fill={i % 2 === 0 ? accent : "#d4d4d8"}
                                        rx={1}
                                    />
                                );
                            })}
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}





