"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalChatBot() {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        // Mostrar el chatbot después de 3 segundos si no ha sido cerrado
        const timer = setTimeout(() => {
            if (!isClosed) {
                setIsVisible(true);
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, [isClosed]);

    const handleClose = () => {
        setIsVisible(false);
        setIsClosed(true);
    };

    const handleBookMeeting = () => {
        // Abre Calendly en una nueva pestaña
        window.open('https://calendly.com/rodrigo-quesada-trucoytrufa/30min', '_blank');
    };

    if (isClosed) return null;

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="fixed bottom-6 right-6 max-w-[280px] z-50"
                >
                    <div className="bg-white rounded-xl shadow-2xl border border-zinc-200 p-3 relative">
                        {/* Botón de cerrar */}
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2 w-5 h-5 flex items-center justify-center rounded-full hover:bg-zinc-100 transition-colors text-zinc-400 hover:text-zinc-600"
                            aria-label="Close chat"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-3 h-3"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="flex items-start gap-2 mb-2">
                            {/* Avatar generado por IA */}
                            <img
                                src="https://api.dicebear.com/7.x/personas/svg?seed=Carlos&backgroundColor=3b82f6"
                                alt="Carlos - AI Representative at 2laps providing conversational market intelligence assistance"
                                className="w-8 h-8 rounded-full flex-shrink-0 border border-zinc-100"
                            />
                            <div>
                                <div className="font-semibold text-zinc-900 text-xs">Carlos</div>
                                <div className="text-[10px] text-zinc-500">AI Representative</div>
                            </div>
                        </div>
                        <p className="text-xs text-zinc-700 mb-3 leading-relaxed">
                            Welcome back! I'm Carlos, an AI Representative at 2Laps. Anything specific you're curious about regarding our platform today?
                        </p>
                        <button
                            onClick={handleBookMeeting}
                            className="w-full bg-white border-2 border-primary text-primary font-semibold px-3 py-2 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 text-xs"
                        >
                            Book a Meeting
                        </button>
                        <p className="text-[9px] text-zinc-400 mt-2 leading-relaxed">
                            This chat may be recorded for quality assurance. You can view our{" "}
                            <a href="/privacy" className="underline hover:text-zinc-600">
                                privacy policy
                            </a>{" "}
                            here.
                        </p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

