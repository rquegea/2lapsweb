"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Sparkles,
    ChevronDown,
    ChevronUp,
    FileText,
    Download,
    Search,
    Globe,
    Database
} from "lucide-react";

export default function AIResearchSidebar() {
    const [phase, setPhase] = useState<"input" | "thinking" | "result">("input");
    const [thinkingStep, setThinkingStep] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const interestingFacts = [
        "conversation spikes +35% after competitor campaign",
        "net sentiment tone +12% in 48h (positive mentions)",
        "highest traction channels: TikTok and X (SOV 62%)",
        "search queries about your brand +18% week over week",
    ];

    // Loop sequence
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        let stepsInterval: NodeJS.Timeout | undefined;

        if (phase === "input") {
            // Mantén la fase inicial un poco más de tiempo para que se aprecie
            timeoutId = setTimeout(() => setPhase("thinking"), 4200);
        } else if (phase === "thinking") {
            stepsInterval = setInterval(() => {
                setThinkingStep((prev) => (prev < 3 ? prev + 1 : prev));
            }, 1800);

            timeoutId = setTimeout(() => {
                setPhase("result");
                if (stepsInterval) clearInterval(stepsInterval);
            }, 7200);

            return () => {
                if (stepsInterval) clearInterval(stepsInterval);
                clearTimeout(timeoutId);
            };
        } else if (phase === "result") {
            timeoutId = setTimeout(() => {
                setPhase("input");
                setThinkingStep(0);
            }, 7000);
        }

        return () => clearTimeout(timeoutId);
    }, [phase]);

    const bodyMinHeight = phase === "input" ? 220 : phase === "thinking" ? 320 : 360;

    return (
        <div className="w-full max-w-md mx-auto font-sans">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                {/* Header Section */}
                <div className="p-6 border-b border-slate-50">
                    <div className="flex items-center gap-2 mb-3">
                        <div className="p-1.5 bg-blue-50 rounded-lg">
                            <Sparkles className="w-4 h-4 text-blue-600" />
                        </div>
                        <h2 className="text-sm font-semibold text-slate-800">Deep Dive</h2>
                    </div>

                    {/* Petición original (permanece y se atenúa en gris al avanzar) */}
                    <motion.div
                        key="question-sticky"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeInOut" }}
                    >
                        <p className="text-slate-500 text-sm font-medium">
                            {phase === "input" ? "Interpreting your request" : "Query"}
                        </p>
                        <p className={`text-lg font-medium mt-1 leading-tight ${phase === "input" ? "text-slate-900" : "text-slate-400"}`}>
                            "Analyze the sentiment trend for my brand based on my competitor's campaign"
                        </p>
                    </motion.div>

                    {/* Estado de procesamiento (solo mientras piensa) */}
                    <AnimatePresence mode="wait">
                        {phase === "thinking" && (
                            <motion.div
                                key="processing-text"
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                                className="mt-3"
                            >
                                <p className="text-slate-500 text-sm font-medium">
                                    Processing request... searching for interesting signals
                                </p>
                                <div className="h-6 w-3/4 bg-slate-100 rounded mt-2 animate-pulse" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Área de contenido con altura fija y vistas superpuestas */}
                <div className="relative overflow-hidden border-b border-slate-100" style={{ minHeight: bodyMinHeight }}>
                    <AnimatePresence mode="wait">
                        {(phase === "thinking" || phase === "input") && (
                            <motion.div
                                key="thinking"
                                className="absolute inset-0 bg-slate-50/50"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <div className="p-6 h-full flex flex-col min-h-0">
                                <div className="flex items-center justify-between mb-4">
                                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                                            Thinking Process
                                        </span>
                                        <motion.div
                                            /* Haz que el círculo rote siempre que no estemos en resultado */
                                            animate={{ rotate: phase === "input" || phase === "thinking" ? 360 : 0 }}
                                            transition={{ duration: 1.6, repeat: phase === "input" || phase === "thinking" ? Infinity : 0, ease: "linear" }}
                                        >
                                            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full" />
                                        </motion.div>
                                    </div>

                                    <div className="space-y-3 overflow-auto pr-1">
                                        <ThinkingStep text="Analyzing brand sentiment and conversation trend..." isVisible={true} isCompleted={thinkingStep > 0} />
                                        <ThinkingStep text="Reviewing competitor campaigns and market response..." isVisible={thinkingStep >= 1} isCompleted={thinkingStep > 1} />
                                        <ThinkingStep text="Cross-checking recent trends and search volume..." isVisible={thinkingStep >= 2} isCompleted={thinkingStep > 2} />
                                        <ThinkingStep text="Synthesizing actionable insights and predictions..." isVisible={thinkingStep >= 3} isCompleted={false} />
                                    </div>

                                    {phase === "thinking" && thinkingStep >= 1 && (
                                        <motion.div
                                            key={`facts-${thinkingStep}`}
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -6 }}
                                            transition={{ duration: 0.6, ease: "easeInOut" }}
                                            className="mt-4 text-xs text-slate-600 italic"
                                        >
                                            Interesting findings: {interestingFacts[Math.min(thinkingStep - 1, interestingFacts.length - 1)]}.
                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )}

                        {phase === "result" && (
                            <motion.div
                                key="result"
                                className="absolute inset-0 bg-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            >
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500" />
                                            <span className="text-sm font-medium text-slate-600">Analysis complete</span>
                                        </div>
                                        <span className="text-xs text-slate-400">0.8s</span>
                                    </div>

                                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/50 border border-blue-100 shadow-sm">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-blue-900 font-semibold text-base mb-1">Generative search results</h3>
                                                <p className="text-blue-700/80 text-sm">
                                                    Market sentiment is moderately optimistic; signals of +15% intent in AI infrastructure.
                                                </p>
                                            </div>
                                            <div className="p-2 bg-white rounded-lg shadow-sm">
                                                <FileText className="w-5 h-5 text-blue-600" />
                                            </div>
                                        </div>

                                        {/* Barra de búsqueda dentro de la vista de resultados */}
                                        <div className="flex items-center gap-2 bg-white border border-blue-100 rounded-lg px-3 py-2 shadow-sm">
                                            <Search className="w-4 h-4 text-blue-600" />
                                            <input
                                                type="text"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                placeholder="Buscar en resultados generativos..."
                                                className="w-full bg-transparent text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none"
                                            />
                                        </div>

                                        {/* Sentiment / SOV Graph (tamaño bloqueado) */}
                                        <div className="mt-4 bg-white/60 rounded-lg p-3 border border-blue-100/50 overflow-hidden">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-xs font-semibold text-blue-800 uppercase">Market Sentiment</span>
                                                <span className="text-xs font-bold text-green-600">+12.4%</span>
                                            </div>
                                            <div className="flex items-end gap-1 h-[48px] min-h-[48px] max-h-[48px] w-full overflow-hidden">
                                                {[40, 65, 45, 80, 55, 90, 75].map((h, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ height: 0 }}
                                                        animate={{ height: `${h}%` }}
                                                        transition={{ duration: 0.9, delay: i * 0.12, ease: "easeInOut" }}
                                                        className="flex-1 bg-blue-500/20 rounded-sm relative group"
                                                    >
                                                        <div className="absolute bottom-0 w-full bg-blue-500 rounded-sm transition-all duration-500" style={{ height: "100%" }} />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4">
                            {/* Botón de descarga ocultado por petición */}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}

function ThinkingStep({ text, isVisible, isCompleted }: { text: string; isVisible: boolean; isCompleted: boolean }) {
    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
        >
            <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${isCompleted ? "bg-blue-600 border-blue-600" : "border-slate-300"}`}>
                {isCompleted && <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-white text-[10px]">✓</motion.div>}
            </div>
            <span className={`text-sm break-words ${isCompleted ? "text-slate-600" : "text-slate-900 font-medium"}`}>
                {text}
            </span>
        </motion.div>
    );
}
