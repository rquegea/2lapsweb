"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Dot = {
    label: string;
    color: string;
    radius?: number;
    visible?: boolean;
};

type Props = {
    dots?: Dot[];
    height?: number;
    speed?: number; // base multiplier
    autoplay?: boolean;
    showControls?: boolean;
    startDaysAgo?: number; // rango de simulación hacia atrás
    rateHoursPerSec?: number; // a m=1, cuántas horas sim pasan por segundo real
};

// Matriz SOV (x: 0-100) vs Sentimiento (y: 0-100 con 50 = neutro)
// Bolas con física simple y rebotes para simular una “mesa de pool”.
export default function SOVSentimentMatrix({
    dots = [
        { label: "Competitor A", color: "#ef4444" },
        { label: "Competitor B", color: "#3b82f6" },
        { label: "Competitor C", color: "#10b981" },
        { label: "Competitor D", color: "#f59e0b" },
        { label: "Competitor E", color: "#8b5cf6" },
    ],
    height = 360,
    speed = 0.35,
    autoplay = true,
    showControls = false,
    startDaysAgo = 14,
    rateHoursPerSec = 12,
}: Props) {
    const [running, setRunning] = useState(autoplay);
    const [multiplier, setMultiplier] = useState(speed);
    const [active, setActive] = useState<Set<string>>(
        () => new Set(dots.map((d) => d.label))
    );
    const [hovered, setHovered] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    type Body = { x: number; y: number; vx: number; vy: number; r: number; label: string; color: string; targetX: number; targetY: number; };
    const bodiesRef = useRef<Body[]>([]);

    // cuadrantes objetivo aproximados (0..100)
    // top-right (High SOV, High Sentiment): estrellas
    const targets = [
        { x: 78, y: 78 }, // A
        { x: 25, y: 75 }, // B
        { x: 75, y: 25 }, // C
        { x: 22, y: 22 }, // D
        { x: 60, y: 65 }, // E
    ];

    // inicializar partículas
    useEffect(() => {
        const rand = (min: number, max: number) => Math.random() * (max - min) + min;
        bodiesRef.current = dots.map((d, i) => {
            const t = targets[i % targets.length];
            const startX = t.x + rand(-6, 6);
            const startY = t.y + rand(-6, 6);
            return {
                x: startX,
                y: startY,
                vx: rand(-0.05, 0.05),
                vy: rand(-0.05, 0.05),
                r: d.radius ?? 7,
                label: d.label,
                color: d.color,
                targetX: t.x,
                targetY: t.y,
            };
        });
    }, [dots]);

    // animación
    const [, forceRender] = useState(0);
    useEffect(() => {
        let raf: number;
        let last = performance.now();
        // tiempo simulado en milisegundos desde startDate
        const simMsRef = (SOVSentimentMatrix as any)._simMsRef ?? { current: 0 };
        const startDateRef = (SOVSentimentMatrix as any)._startDateRef ?? { current: new Date(Date.now() - startDaysAgo * 24 * 3600 * 1000) };
        (SOVSentimentMatrix as any)._simMsRef = simMsRef;
        (SOVSentimentMatrix as any)._startDateRef = startDateRef;
        const step = (now: number) => {
            const deltaMs = Math.min(33, now - last);
            const dt = deltaMs / 16.6667; // normaliza a ~60fps
            last = now;
            if (running) {
                const m = Math.max(0.1, Math.min(1.2, multiplier));
                const bodies = bodiesRef.current;
                for (const b of bodies) {
                    // fuerza de atracción suave hacia objetivo de cuadrante
                    const ax = (b.targetX - b.x) * 0.004;
                    const ay = (b.targetY - b.y) * 0.004;
                    // ruido muy leve para oscilación
                    const nx = (Math.random() - 0.5) * 0.004;
                    const ny = (Math.random() - 0.5) * 0.004;
                    // actualización de velocidad con fricción
                    b.vx = (b.vx + (ax + nx) * dt) * 0.985;
                    b.vy = (b.vy + (ay + ny) * dt) * 0.985;
                    // avance
                    b.x += b.vx * dt * m;
                    b.y += b.vy * dt * m;
                    // rebotes en paredes 0..100
                    if (b.x < 0) { b.x = 0; b.vx *= -1; }
                    if (b.x > 100) { b.x = 100; b.vx *= -1; }
                    if (b.y < 0) { b.y = 0; b.vy *= -1; }
                    if (b.y > 100) { b.y = 100; b.vy *= -1; }
                }
                // tiempo simulado: a m=1 avanzan rateHoursPerSec horas/seg real
                const advanceMs = (deltaMs / 1000) * m * rateHoursPerSec * 3600 * 1000;
                // clamp para no pasar de ahora
                const nowCap = Date.now() - startDateRef.current.getTime();
                simMsRef.current = Math.min(nowCap, simMsRef.current + advanceMs);
                forceRender((n) => (n + 1) % 1000000);
            }
            raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [running, multiplier, startDaysAgo, rateHoursPerSec]);

    const view = { width: 800, height: 280, pad: { l: 48, r: 24, t: 24, b: 40 } };
    const W = view.width - view.pad.l - view.pad.r;
    const H = view.height - view.pad.t - view.pad.b;
    const xToPx = (x: number) => view.pad.l + (x / 100) * W;
    const yToPx = (y: number) => view.pad.t + (1 - y / 100) * H;

    // No memorizamos posiciones para que cada repaint refleje las coordenadas actuales
    const activeBodies = bodiesRef.current.filter((b) => active.has(b.label));

    // leer tiempo simulado (almacenado en un ref estático del componente)
    const simMs = ((SOVSentimentMatrix as any)._simMsRef?.current ?? 0) as number;
    const startDate: Date =
        ((SOVSentimentMatrix as any)._startDateRef?.current as Date) ??
        new Date(Date.now() - startDaysAgo * 24 * 3600 * 1000);
    const simDate = new Date(startDate.getTime() + simMs);
    const now = new Date();
    const daysSinceStart = Math.floor((simDate.getTime() - startDate.getTime()) / (24 * 3600 * 1000));
    const dateLabel = `${simDate.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric",
    })} ${simDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit" })}`;
    const progress =
        Math.min(
            1,
            (simDate.getTime() - startDate.getTime()) /
                Math.max(1, now.getTime() - startDate.getTime())
        );

    return (
        <div ref={containerRef} className="w-full">
            <div className="bg-white rounded-lg border border-zinc-200 overflow-hidden relative">
                {/* contador tiempo simulado */}
                <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-md border border-zinc-200 bg-white/85 backdrop-blur text-[11px] text-zinc-700">
                    <div className="whitespace-nowrap">{dateLabel} {simDate >= now ? "(hoy)" : ""}</div>
                    <div className="mt-1 h-1 w-full bg-zinc-200 rounded">
                        <div
                            className="h-1 bg-primary rounded"
                            style={{ width: `${(progress * 100).toFixed(1)}%` }}
                        />
                    </div>
                </div>
                <svg viewBox={`0 0 ${view.width} ${view.height}`} className="w-full h-[280px] block">
                    {/* cuadrícula */}
                    <g>
                        {[0, 25, 50, 75, 100].map((p) => {
                            const y = yToPx(p);
                            return (
                                <line key={`hy-${p}`} x1={view.pad.l} x2={view.width - view.pad.r} y1={y} y2={y} stroke="#eeeeee" />
                            );
                        })}
                        {[0, 25, 50, 75, 100].map((p) => {
                            const x = xToPx(p);
                            return (
                                <line key={`vx-${p}`} y1={view.pad.t} y2={view.height - view.pad.b} x1={x} x2={x} stroke="#f1f1f1" />
                            );
                        })}
                        {/* eje neutro de sentimiento (50) */}
                        <line
                            x1={view.pad.l}
                            x2={view.width - view.pad.r}
                            y1={yToPx(50)}
                            y2={yToPx(50)}
                            stroke="#d4d4d8"
                            strokeDasharray="6 6"
                        />
                    </g>
                    {/* ejes */}
                    <line x1={view.pad.l} x2={view.pad.l} y1={view.pad.t} y2={view.height - view.pad.b} stroke="#d4d4d8" />
                    <line x1={view.pad.l} x2={view.width - view.pad.r} y1={view.height - view.pad.b} y2={view.height - view.pad.b} stroke="#d4d4d8" />

                    {/* etiquetas de ejes */}
                    <text x={view.width / 2} y={view.height - 8} textAnchor="middle" fontSize="12" fill="#09090b" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                        SOV (Share of Voice)
                    </text>
                    <text transform={`translate(14 ${view.height / 2}) rotate(-90)`} textAnchor="middle" fontSize="12" fill="#09090b" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                        Sentimiento
                    </text>
                    {/* extremos 0% y 100% */}
                    <text x={view.pad.l} y={view.height - view.pad.b + 18} textAnchor="middle" fontSize="10" fill="#71717a">0%</text>
                    <text x={view.width - view.pad.r} y={view.height - view.pad.b + 18} textAnchor="middle" fontSize="10" fill="#71717a">100%</text>
                    <text x={view.pad.l - 18} y={view.height - view.pad.b} textAnchor="end" fontSize="10" fill="#71717a">0%</text>
                    <text x={view.pad.l - 18} y={view.pad.t + 4} textAnchor="end" fontSize="10" fill="#71717a">100%</text>

                    {/* etiquetas BCG-like */}
                    <g opacity="0.7" style={{ pointerEvents: "none" }}>
                        <text x={xToPx(75)} y={yToPx(75)} textAnchor="middle" fontSize="12" fill="#a1a1aa" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                            Stars
                        </text>
                        <text x={xToPx(25)} y={yToPx(75)} textAnchor="middle" fontSize="12" fill="#a1a1aa" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                            Question Marks
                        </text>
                        <text x={xToPx(75)} y={yToPx(25)} textAnchor="middle" fontSize="12" fill="#a1a1aa" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                            Cash Cows
                        </text>
                        <text x={xToPx(25)} y={yToPx(25)} textAnchor="middle" fontSize="12" fill="#a1a1aa" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                            Dogs
                        </text>
                    </g>

                    {/* puntos */}
                    {activeBodies.map((b) => {
                        const cx = xToPx(b.x);
                        const cy = yToPx(b.y);
                        return (
                            <g key={b.label}>
                                <circle cx={cx} cy={cy} r={b.r + 8} fill={b.color} opacity={0.08} />
                                <motion.circle
                                    cx={cx}
                                    cy={cy}
                                    r={b.r}
                                    fill="#fff"
                                    stroke={b.color}
                                    strokeWidth={3}
                                    animate={{ cx, cy }}
                                    transition={{ type: "spring", stiffness: 220, damping: 26, mass: 0.7 }}
                                    onMouseEnter={() => setHovered(b.label)}
                                    onMouseLeave={() => setHovered(null)}
                                />
                            </g>
                        );
                    })}
                </svg>
            </div>

            {/* controles opcionales */}
            {showControls && (
                <div className="mt-4 flex flex-wrap items-center gap-4">
                    <button
                        onClick={() => setRunning((r) => !r)}
                        className="px-3 py-1.5 rounded-md border border-zinc-300 bg-white text-sm"
                    >
                        {running ? "Pausar" : "Reproducir"}
                    </button>
                    <div className="flex items-center gap-2">
                        <span className="text-xs text-zinc-500">Velocidad</span>
                        <input
                            type="range"
                            min={0.5}
                            max={2.5}
                            step={0.1}
                            value={multiplier}
                            onChange={(e) => setMultiplier(parseFloat(e.target.value))}
                        />
                        <span className="text-xs text-zinc-600">{multiplier.toFixed(1)}x</span>
                    </div>
                </div>
            )}

            {/* leyenda */}
            <div className="flex flex-wrap gap-3 mt-4">
                {dots.map((d) => {
                    const isOn = active.has(d.label);
                    return (
                        <button
                            key={d.label}
                            onClick={() =>
                                setActive((prev) => {
                                    const next = new Set(prev);
                                    if (next.has(d.label)) next.delete(d.label);
                                    else next.add(d.label);
                                    return next;
                                })
                            }
                            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${
                                isOn ? "border-zinc-300 bg-white" : "border-zinc-200 bg-zinc-50 opacity-60"
                            }`}
                        >
                            <span className="inline-block w-2 h-2 rounded-full" style={{ background: d.color }} />
                            {d.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}


