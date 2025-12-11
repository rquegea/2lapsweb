"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";

type SeriesItem = {
    label: string;
    color: string;
    points: number[]; // values normalized on any numeric scale
    icon?: string; // optional public path to logo/icon
};

type FeatureChartProps = {
    series: SeriesItem[];
    xLabels?: string[];
    height?: number;
};

// Simple responsive animated line chart with hover scrub and legend toggle
export default function FeatureChart({ series, xLabels, height = 320 }: FeatureChartProps) {
    const [activeLabels, setActiveLabels] = useState<Set<string>>(
        () => new Set(series.map((s) => s.label))
    );
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const maxLen = useMemo(() => Math.max(...series.map((s) => s.points.length)), [series]);
    const labels = useMemo(() => {
        if (xLabels && xLabels.length === maxLen) return xLabels;
        return Array.from({ length: maxLen }, (_, i) => `M${i + 1}`);
    }, [xLabels, maxLen]);

    const [minY, maxY] = useMemo(() => {
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;
        series.forEach((s) => {
            s.points.forEach((v) => {
                if (v < min) min = v;
                if (v > max) max = v;
            });
        });
        if (!Number.isFinite(min) || !Number.isFinite(max)) return [0, 1];
        // add a little padding
        const padding = (max - min) * 0.1 || 1;
        return [min - padding, max + padding];
    }, [series]);

    const viewBox = { width: 800, height: 260, padding: { top: 20, right: 24, bottom: 32, left: 40 } };
    const chartW = viewBox.width - viewBox.padding.left - viewBox.padding.right;
    const chartH = viewBox.height - viewBox.padding.top - viewBox.padding.bottom;

    const xFor = (i: number) => {
        if (maxLen <= 1) return viewBox.padding.left;
        return viewBox.padding.left + (i / (maxLen - 1)) * chartW;
    };
    const yFor = (v: number) => {
        if (maxY === minY) return viewBox.padding.top + chartH / 2;
        const t = (v - minY) / (maxY - minY);
        return viewBox.padding.top + (1 - t) * chartH;
    };

    const buildPath = (points: number[]) => {
        if (points.length === 0) return "";
        const d = points
            .map((v, i) => `${i === 0 ? "M" : "L"} ${xFor(i)} ${yFor(v)}`)
            .join(" ");
        return d;
    };

    const handleMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        // convert to closest index
        let closest = 0;
        let minDist = Infinity;
        for (let i = 0; i < maxLen; i++) {
            const px = (xFor(i) / viewBox.width) * rect.width;
            const d = Math.abs(px - x);
            if (d < minDist) {
                minDist = d;
                closest = i;
            }
        }
        setHoverIndex(closest);
    };

    const handleLeave = () => setHoverIndex(null);

    const toggleSeries = (label: string) => {
        setActiveLabels((prev) => {
            const next = new Set(prev);
            if (next.has(label)) next.delete(label);
            else next.add(label);
            return next;
        });
    };

    return (
        <div className="w-full" style={{ height }}>
            <div
                ref={containerRef}
                className="relative bg-white rounded-lg border border-zinc-200 overflow-hidden"
                onMouseMove={handleMove}
                onMouseLeave={handleLeave}
            >
                <svg
                    viewBox={`0 0 ${viewBox.width} ${viewBox.height}`}
                    className="w-full h-[220px] block"
                    aria-hidden="true"
                >
                    {/* grid */}
                    <g opacity="0.55">
                        {/* horizontal grid lines */}
                        {[0, 0.25, 0.5, 0.75, 1].map((t) => {
                            const y = viewBox.padding.top + t * chartH;
                            return (
                                <line
                                    key={t}
                                    x1={viewBox.padding.left}
                                    x2={viewBox.width - viewBox.padding.right}
                                    y1={y}
                                    y2={y}
                                    stroke="#e6e6e6"
                                />
                            );
                        })}
                    </g>
                    {/* axes */}
                    <line
                        x1={viewBox.padding.left}
                        x2={viewBox.padding.left}
                        y1={viewBox.padding.top}
                        y2={viewBox.height - viewBox.padding.bottom}
                        stroke="#d4d4d8"
                    />
                    <line
                        x1={viewBox.padding.left}
                        x2={viewBox.width - viewBox.padding.right}
                        y1={viewBox.height - viewBox.padding.bottom}
                        y2={viewBox.height - viewBox.padding.bottom}
                        stroke="#d4d4d8"
                    />

                    {/* series paths */}
                    {series.map((s, idx) => {
                        const active = activeLabels.has(s.label);
                        const d = buildPath(s.points);
                        return (
                            <g key={s.label}>
                                <motion.path
                                    d={d}
                                    fill="none"
                                    stroke={s.color}
                                    strokeWidth={active ? 3 : 2}
                                    strokeOpacity={active ? 1 : 0.25}
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.2, ease: "easeOut", delay: idx * 0.1 }}
                                />
                                {/* shadow / glow */}
                                <motion.path
                                    d={d}
                                    fill="none"
                                    stroke={s.color}
                                    strokeOpacity={active ? 0.15 : 0}
                                    strokeWidth={12}
                                />
                            </g>
                        );
                    })}

                    {/* hover vertical line and markers */}
                    {hoverIndex !== null && (
                        <g>
                            <line
                                x1={xFor(hoverIndex)}
                                x2={xFor(hoverIndex)}
                                y1={viewBox.padding.top}
                                y2={viewBox.height - viewBox.padding.bottom}
                                stroke="#e11d48"
                                strokeDasharray="4 4"
                                opacity="0.7"
                            />
                            {series.map((s) => {
                                if (!activeLabels.has(s.label)) return null;
                                const y = yFor(s.points[hoverIndex] ?? 0);
                                return (
                                    <g key={`${s.label}-dot`}>
                                        <circle cx={xFor(hoverIndex)} cy={y} r={5} fill="white" stroke={s.color} strokeWidth={3} />
                                    </g>
                                );
                            })}
                        </g>
                    )}

                    {/* x labels */}
                    <g>
                        {labels.map((l, i) => (
                            <text
                                key={l + i}
                                x={xFor(i)}
                                y={viewBox.height - viewBox.padding.bottom + 18}
                                textAnchor="middle"
                                fontSize="10"
                                fill="#71717a"
                            >
                                {l}
                            </text>
                        ))}
                    </g>
                </svg>

            </div>

            {/* Legend with brand icons */}
            <div className="flex flex-wrap gap-4 mt-4">
                {series.map((s) => {
                    const active = activeLabels.has(s.label);
                    return (
                        <button
                            key={s.label}
                            onClick={() => toggleSeries(s.label)}
                            className={`flex items-center gap-2 rounded-full border px-3 py-1.5 transition-colors ${
                                active ? "border-zinc-300 bg-white" : "border-zinc-200 bg-zinc-50 opacity-60"
                            }`}
                        >
                            <span
                                className="inline-block w-2 h-2 rounded-full"
                                style={{ background: s.color }}
                                aria-hidden
                            />
                            {s.icon && (
                                <img
                                    src={s.icon}
                                    alt={s.label}
                                    className="w-4 h-4 object-contain"
                                    loading="lazy"
                                />
                            )}
                            <span className="text-sm text-zinc-700" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                                {s.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}





