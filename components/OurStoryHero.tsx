"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CASES = [
    {
        id: "retail",
        logo: "Retail",
        company: "RetailCo",
        metric: "+24% cobertura",
        summary: "Conectamos 120+ fuentes retail y activamos alertas en 2 semanas.",
        bullets: ["Omnicanal unificado", "-18% ruido en menciones", "Playbooks listos para marketing"],
    },
    {
        id: "telco",
        logo: "Telco",
        company: "TeleNorth",
        metric: "-32% tiempo a insight",
        summary: "Automatizamos ingesta y validación; insights diarios para el equipo de marca.",
        bullets: ["ETL gestionado", "Alertas de riesgo en vivo", "Copilots para briefs"],
    },
    {
        id: "cpg",
        logo: "CPG",
        company: "Fresh&Co",
        metric: "+18% lift en campañas",
        summary: "Narrativas emergentes detectadas 10 días antes que la competencia.",
        bullets: ["Signals de sentimiento", "Briefs con citados", "Orquestación multi-canal"],
    },
];

export default function OurStoryHero() {
    return (
        <section className="pt-24 pb-32 bg-white">
            <div className="container-v2 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                {/* Left Content */}
                <div className="flex-1">
                    <h1
                        className="text-5xl md:text-[64px] font-medium leading-[1.1] tracking-tight mb-8"
                        style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                    >
                        <span className="text-primary">Building the future of market intelligence</span> <span className="text-zinc-900">so every decision is insight-led</span>
                    </h1>
                    <p className="text-xl text-zinc-600 leading-relaxed max-w-xl">
                        We built 2laps to solve a universal problem: the gap between data and decision. Today, we empower the world's leading organizations to move faster than the market.
                    </p>
                </div>

                {/* Right Visual */}
                <div className="flex-1 w-full">
                    <CarouselCases />
                </div>
            </div>
        </section>
    );
}

function CarouselCases() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setActive((prev) => (prev + 1) % CASES.length), 4200);
        return () => clearInterval(id);
    }, []);

    const current = CASES[active];

    return (
        <div className="relative rounded-3xl p-8 md:p-12 overflow-hidden bg-gradient-to-br from-zinc-50 via-white to-zinc-100 shadow-2xl ring-1 ring-zinc-200/70">
            <div className="absolute inset-0 pointer-events-none">
                <div className="w-64 h-64 bg-primary/10 rounded-full blur-3xl absolute -top-16 -left-10" />
                <div className="w-52 h-52 bg-zinc-200/60 rounded-full blur-3xl absolute bottom-0 right-6" />
            </div>

            <div className="relative z-10 grid gap-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-[0.15em] font-semibold text-zinc-500">Our Story</p>
                        <p className="text-2xl font-semibold text-zinc-900 leading-tight">Impacto real en clientes</p>
                        <p className="text-sm text-zinc-600 mt-1">Resultados recientes con 2laps</p>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">Casos</span>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-zinc-200/70">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current.company}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -12 }}
                            transition={{ duration: 0.35 }}
                            className="grid gap-4"
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="h-11 w-11 rounded-xl bg-zinc-100 text-zinc-700 font-semibold flex items-center justify-center text-sm">
                                        {current.logo}
                                    </div>
                                    <div>
                                        <p className="text-sm text-zinc-500">Caso</p>
                                        <p className="text-lg font-semibold text-zinc-900">{current.company}</p>
                                    </div>
                                </div>
                                <span className="text-sm font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
                                    {current.metric}
                                </span>
                            </div>

                            <p className="text-zinc-700 text-sm leading-relaxed">{current.summary}</p>

                            <div className="grid grid-cols-3 gap-3 text-[12px] text-zinc-700">
                                {current.bullets.map((item) => (
                                    <div key={item} className="p-3 rounded-lg bg-zinc-50 border border-zinc-100">
                                        {item}
                                    </div>
                                ))}
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <div className="flex items-center gap-2">
                                    {CASES.map((item, idx) => (
                                        <button
                                            key={item.id}
                                            aria-label={`Ver caso ${idx + 1}`}
                                            onClick={() => setActive(idx)}
                                            className={`h-2.5 rounded-full transition-all ${active === idx ? "w-6 bg-primary" : "w-2.5 bg-zinc-200"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <button className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                                    Ver caso
                                </button>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
