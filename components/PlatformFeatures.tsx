"use client";
import Image from "next/image";
import { type ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Mic, ArrowUp } from "lucide-react";

type Feature = {
    id: string;
    number: string;
    title: string;
    description: string;
    mockup: ReactNode;
};

export default function PlatformFeatures() {
    const [activeTab, setActiveTab] = useState(0);
    const askText = "Ask anything about your market";

    const features: Feature[] = [
        {
            id: "generative-search",
            number: "01",
            title: "Generative Search",
            description: "2laps understands your industry's language, anticipates the questions a senior analyst would ask, and returns cited insights in seconds so you can decide without stitching sources.",
            mockup: (
                <div className="relative w-full h-full flex items-center justify-center p-8">
                    {/* Barra de búsqueda protagonista */}
                    <div
                        className="w-full max-w-3xl bg-white text-zinc-900 rounded-2xl shadow-lg px-5 py-4 flex items-center gap-4 border border-zinc-200"
                    >
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-zinc-700 border border-zinc-200 shadow-sm">
                            <Plus className="w-4 h-4" strokeWidth={2.5} />
                        </div>
                        <input
                            type="text"
                            value={askText}
                            readOnly
                            aria-readonly="true"
                            className="flex-1 text-lg bg-transparent text-zinc-900 placeholder:text-zinc-400 focus:outline-none cursor-default select-none"
                            aria-label="Ask Anything"
                        />
                        <Mic className="w-5 h-5 text-zinc-500" />
                        <button
                            type="button"
                            className="flex items-center justify-center w-9 h-9 rounded-full bg-[#D1D3D6] text-zinc-800 border border-zinc-300 shadow-sm transition hover:-translate-y-[1px]"
                            aria-label="Enviar"
                        >
                            <ArrowUp className="w-4 h-4" strokeWidth={2.6} />
                        </button>
                    </div>
                </div>
            ),
        },
        {
            id: "deep-research",
            number: "02",
            title: "Deep Research",
            description: "Access transcripts, filings, press, and internal notes in a single view. Deep dive into companies, value chains, and geographies without jumping between tools.",
            mockup: (
                <div className="relative flex h-full w-full items-center justify-center">
                    <div className="relative">
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                className="absolute inset-0 rounded-full bg-purple-300/30"
                                initial={{ scale: 0.8, opacity: 0.35 }}
                                animate={{ scale: 1.8, opacity: 0 }}
                                transition={{
                                    delay: i * 0.35,
                                    duration: 1.6,
                                    repeat: Infinity,
                                    ease: "easeOut",
                                }}
                            />
                        ))}

                        <button className="relative z-10 flex items-center gap-4 rounded-full border border-purple-200 bg-white px-8 py-4 text-purple-700 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-50 border border-purple-100 shadow-inner">
                                <Image
                                    src="/icons/microscope.png"
                                    alt="Microscopio"
                                    width={44}
                                    height={44}
                                    className="h-11 w-11 object-contain"
                                    priority
                                />
                            </div>
                            <span className="text-base font-semibold uppercase tracking-wide">Deep Research</span>

                            <div className="absolute -right-10 bottom-0">
                                <motion.div
                                    initial={{ scale: 0.9, rotate: -8 }}
                                    animate={{ scale: [1, 0.92, 1], rotate: [-8, -4, -8] }}
                                    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                                    className="relative"
                                >
                                    <div className="absolute -inset-3 rounded-full border-2 border-purple-300 opacity-70" />
                                    <div className="absolute -inset-1 rounded-full border border-purple-200 opacity-70" />
                                    <svg className="relative z-10 h-12 w-12 text-zinc-800 drop-shadow-md" viewBox="0 0 32 32" fill="currentColor">
                                        <path d="M4 3.5v21l5.8-4.5 3.9 7 2.8-1.6-3.9-7 7.4.2z" />
                                    </svg>
                                </motion.div>
                            </div>
                        </button>
                    </div>
                </div>
            ),
        },
        {
            id: "monitoring",
            number: "03",
            title: "Monitoring",
            description: "Set live alerts on key accounts, trends, and risks. We notify you when market narratives shift, new players emerge, or contradictory evidence shows up.",
            mockup: (
                <div className="flex flex-col lg:flex-row h-full w-full p-8 gap-8">
                    {/* Pie chart */}
                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-56 h-56">
                            <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-sm">
                                <circle r="16" cx="16" cy="16" fill="#F6F7F3" />
                                <path d="M16 16 L16 0 A16 16 0 0 1 31.111 19.2 Z" fill="#F2A7A3" />
                                <path d="M16 16 L31.111 19.2 A16 16 0 0 1 11 31.5 Z" fill="#8DB7EB" />
                                <path d="M16 16 L11 31.5 A16 16 0 0 1 1.5 10 Z" fill="#F7D995" />
                                <path d="M16 16 L1.5 10 A16 16 0 0 1 16 0 Z" fill="#9ED4A8" />
                                <circle r="9" cx="16" cy="16" fill="#FAFBFC" stroke="#E7EAEE" strokeWidth="0.6" />
                            </svg>
                        </div>
                    </div>

                    {/* Legend + Alert insight */}
                    <div className="flex-1 flex flex-col justify-center gap-4">
                        <div className="grid grid-cols-2 gap-3 text-sm text-zinc-700">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm bg-[#F2A7A3]"></span>
                                <span>Competitor A · 32%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm bg-[#8DB7EB]"></span>
                                <span>Competitor B · 28%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm bg-[#F7D995]"></span>
                                <span>Brand X · 24%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-sm bg-[#9ED4A8]"></span>
                                <span>Brand Y · 16%</span>
                            </div>
                        </div>

                        <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 shadow-sm">
                            <div className="text-xs font-semibold uppercase text-amber-700 mb-1 tracking-wide">Alert</div>
                            <div className="text-sm text-amber-900 leading-relaxed">
                                Competitor A spiked +12% mention share in the last 48h after a pricing update. Recommend monitoring sentiment and prepping response lines.
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            id: "enterprise-intelligence",
            number: "04",
            title: "Enterprise Intelligence",
            description: "Securely connect your internal documents with our external sources. Search, analyze, and share without data leakage, with access controls and traceability.",
            mockup: (
                <div className="relative flex h-full w-full items-center justify-center px-8">
                    {(() => {
                        const docs = [
                            { name: "Informe de ventas.xlsx", type: "Sheets" },
                            { name: "Research Notes.pdf", type: "PDF" },
                            { name: "Contract_v3.docx", type: "Word" },
                            { name: "Quarterly KPIs.csv", type: "CSV" },
                            { name: "Market Outlook.pptx", type: "Slides" },
                        ];

                        const marquee = [...docs, ...docs];

                        return (
                            <div className="relative w-full overflow-hidden rounded-3xl">
                                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#D8E0D6] via-[#D8E0D6]/90 to-transparent z-10" />
                                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#D8E0D6] via-[#D8E0D6]/90 to-transparent z-10" />

                                <motion.div
                                    className="flex gap-6 w-max py-6"
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                                >
                                    {marquee.map((doc, idx) => (
                                        <div
                                            key={`${doc.name}-${idx}`}
                                            className="flex items-center gap-3 rounded-2xl bg-white/95 border border-zinc-200/80 shadow-sm px-4 py-4 w-[230px]"
                                            style={{ boxShadow: "0 12px 28px -18px rgba(0,0,0,0.18)" }}
                                        >
                                            <div className="flex h-12 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                                                <svg viewBox="0 0 38 46" className="h-10 w-8" fill="none" stroke="currentColor" strokeWidth="2.2">
                                                    <path d="M9 3h16l7 8v32H9z" />
                                                    <path d="M25 3v8h7" />
                                                    <path d="M13 26l3 4 4-6 4 8" strokeLinecap="round" />
                                                    <path d="M13 32h12" />
                                                </svg>
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-sm font-semibold text-zinc-900">{doc.name}</span>
                                                <span className="text-xs text-zinc-500">{doc.type}</span>
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>
                        );
                    })()}
                </div>
            ),
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container-v2">
                {/* Tabs Navigation */}
                <div className="flex overflow-x-auto no-scrollbar border-b border-zinc-200 mb-16">
                    {features.map((feature, index) => (
                        <button
                            key={feature.id}
                            onClick={() => setActiveTab(index)}
                            className={`flex-shrink-0 px-6 py-4 relative text-sm font-medium transition-colors ${activeTab === index ? "text-zinc-900" : "text-zinc-500 hover:text-zinc-700"
                                }`}
                        >
                            <span className="text-[10px] text-zinc-400 mr-2 align-top">{feature.number}</span>
                            <span className="text-lg">{feature.title}</span>
                            {activeTab === index && (
                                <motion.div
                                    layoutId="active-tab-line"
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
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-3xl font-medium text-zinc-900 mb-6" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                                    {features[activeTab].title}
                                </h3>
                                <p className="text-lg text-zinc-600 leading-relaxed">
                                    {features[activeTab].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Visual Content */}
                    <div className="bg-[#D8E0D6] rounded-3xl aspect-[4/3] overflow-hidden relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                {features[activeTab].mockup}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
