"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FeaturePanelMock from "./FeaturePanelMock";
import PanelMarket from "./feature-panels/PanelMarket";
import PanelPredictive from "./feature-panels/PanelPredictive";
import PanelReporting from "./feature-panels/PanelReporting";
import PanelBenchmark from "./feature-panels/PanelBenchmark";
import { useRef } from "react";

const FEATURES = [
    {
        id: "market-intelligence",
        title: "Market Intelligence",
        subtitle: "Vision general del mercado en tiempo real",
        description:
            "Get a complete view of your market with real-time data aggregation. We track competitors, pricing strategies, and consumer sentiment so you don't have to.",
        image: "/images/feature-1.png",
        thumb: "/features/feature-1.png",
    },
    {
        id: "predictive-analytics",
        title: "Predictive Analytics",
        subtitle: "Pronósticos y tendencias impulsadas por IA",
        description:
            "Stop guessing. Our AI models forecast trends and demand shifts, allowing you to allocate resources efficiently and stay ahead of the curve.",
        image: "/images/feature-2.png",
        thumb: "/features/feature-2.png",
    },
    {
        id: "automated-reporting",
        title: "Automated Reporting",
        subtitle: "Informes automáticos listos para compartir",
        description:
            "Save hours every week. Generate beautiful, insightful reports with a single click and share them instantly with your stakeholders.",
        image: "/images/feature-3.png",
        thumb: "/features/feature-4.png",
    },
    {
        id: "competitor-benchmarking",
        title: "Competitor Benchmarking",
        subtitle: "Comparativas frente a la competencia",
        description:
            "See exactly how you stack up against the competition. Compare KPIs, market share, and growth metrics in a unified dashboard.",
        image: "/images/feature-4.png",
        thumb: "/features/feature-6.png",
    },
];

export default function FeatureScroll() {
    const [activeId, setActiveId] = useState(FEATURES[0].id);
    const navRef = useRef<HTMLDivElement | null>(null);
    const isSteppingRef = useRef(false);
    const [scrollDir, setScrollDir] = useState<"up" | "down">("down");
    const wheelAccRef = useRef(0);
    const sectionRef = useRef<HTMLDivElement | null>(null);

    // Nota: desactivamos IntersectionObserver para que SOLO cambie al
    // usar la rueda o hacer click en la tarjeta izquierda.

    // Step-scroll en la navegación izquierda (rueda arriba/abajo)
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        const handleWheel = (e: WheelEvent) => {
            // solo desktop
            if (window.matchMedia("(max-width: 1023px)").matches) return;
            // acumular delta para evitar saltos con micro-gestos de trackpad
            wheelAccRef.current += e.deltaY;
            const threshold = 110; // sensibilidad moderada
            if (Math.abs(wheelAccRef.current) < threshold) return;
            const idx = FEATURES.findIndex((f) => f.id === activeId);
            const dir: "up" | "down" = wheelAccRef.current > 0 ? "down" : "up";
            wheelAccRef.current = 0; // reset
            const canStep =
                (dir === "down" && idx < FEATURES.length - 1) ||
                (dir === "up" && idx > 0);
            if (!canStep) return; // deja scrollear la página
            if (isSteppingRef.current) {
                e.preventDefault();
                return;
            }
            isSteppingRef.current = true;
            setTimeout(() => (isSteppingRef.current = false), 850);
            e.preventDefault();
            setScrollDir(dir);
            const target = dir === "down" ? FEATURES[idx + 1] : FEATURES[idx - 1];
            if (target) handleScrollTo(target.id);
        };
        el.addEventListener("wheel", handleWheel, { passive: false });
        return () => el.removeEventListener("wheel", handleWheel as any);
    }, [activeId]);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            setActiveId(id);
            // Offset for sticky header if needed, though scrollIntoView usually handles it well enough or we use window.scrollTo
            const yOffset = -100; // Adjust based on header height
            let y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            const scrollEl = (document.scrollingElement || document.documentElement) as HTMLElement;
            const maxY = Math.max(0, scrollEl.scrollHeight - window.innerHeight - 4);
            if (y > maxY) y = maxY;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <section ref={sectionRef} className="relative bg-white py-24">
            {/* Fondo azul a la derecha: de mitad de viewport (sm) y más amplio en desktop para cubrir el panel de 5 cols */}
            <div className="pointer-events-none absolute inset-y-0 right-0 left-1/2 lg:left-[38%] bg-[#0F172A]" />
            <div className="container-v2 relative">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column: Sticky Navigation */}
                    <div className="hidden lg:block lg:col-span-4">
                        <div ref={navRef} className="sticky top-32">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                                Features
                            </h3>
                            {/* Texto estilo hero + indicador vertical (sin card) */}
                            {(() => {
                                const current = FEATURES.find((f) => f.id === activeId)!;
                                const activeIdx = FEATURES.findIndex((f) => f.id === activeId);
                                const stepHeight = 56; // px
                                return (
                                    <div className="flex items-start gap-8">
                                        {/* Stepper vertical */}
                                        <div className="relative" aria-hidden="true">
                                            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-zinc-200" />
                                            <motion.div
                                                className="absolute left-2 w-0.5 bg-primary rounded-full"
                                                style={{ height: 24 }}
                                                animate={{ top: activeIdx * stepHeight + 16 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            />
                                            <div className="flex flex-col">
                                                {FEATURES.map((_, i) => (
                                                    <div key={i} className="h-14 flex items-center text-[11px] tabular-nums text-zinc-500 pl-4">
                                                        {(i + 1).toString().padStart(2, "0")}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        {/* Copy */}
                                        <motion.button
                                            key={current.id}
                                            onClick={() => handleScrollTo(current.id)}
                                            initial={{ opacity: 0, y: scrollDir === "down" ? 24 : -24 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: scrollDir === "down" ? -24 : 24 }}
                                            transition={{ duration: 0.35 }}
                                            className="w-full text-left"
                                        >
                                            <div>
                                                <h2
                                                    className="text-4xl md:text-5xl font-semibold text-zinc-900 leading-tight"
                                                    style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                                                >
                                                    {current.title}
                                                </h2>
                                                <p className="mt-4 text-zinc-700 text-lg max-w-xl">
                                                    {current.description}
                                                </p>
                                            </div>
                                        </motion.button>
                                    </div>
                                );
                            })()}
                        </div>
                    </div>

                    {/* Middle Column: Content */}
                    <div className="col-span-1 lg:col-span-3 space-y-24">
                        {FEATURES.map((feature) => (
                            <div
                                key={feature.id}
                                id={feature.id}
                                className="scroll-mt-32 flex flex-col gap-8"
                            >
                                <div className="lg:hidden">
                                    <h3
                                        className="text-2xl font-medium text-zinc-900 mb-2"
                                        style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                                    >
                                        {feature.title}
                                    </h3>
                                </div>

                                {/* Área de anclaje sin cards (solo espacio para scroll/activación) */}
                                <div className="min-h-[90vh]" aria-hidden="true" />
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Sticky preview sobre fondo azul a toda derecha */}
                    <div className="hidden lg:block lg:col-span-5">
                        <div className="sticky top-24 h-[calc(100vh-6rem)] rounded-2xl overflow-visible relative">
                            {/* Panel activo */}
                            <div className="absolute inset-0 p-6 flex items-center justify-center">
                                <motion.div key={activeId} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full">
                                    {activeId === "market-intelligence" && <PanelMarket />}
                                    {activeId === "predictive-analytics" && <PanelPredictive />}
                                    {activeId === "automated-reporting" && <PanelReporting />}
                                    {activeId === "competitor-benchmarking" && <PanelBenchmark />}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
