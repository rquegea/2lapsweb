"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BoltIcon, Cog6ToothIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/components/LanguageProvider";

export default function Services() {
  const { t, language } = useLanguage();
  const titleSize = language === "es" ? "text-lg md:text-xl" : "text-xl md:text-2xl";
  const descSize = language === "es" ? "text-[13px] md:text-sm" : "text-sm md:text-base";
  const infoMinH = language === "es" ? "min-h-[176px] md:min-h-[140px]" : "min-h-[160px] md:min-h-[128px]";
  const videos: Array<string | undefined> = [
    "videos/ai-strategy.mp4",
    "videos/content-generation.mp4",
    "videos/chatbots.mp4",
    "videos/automations.mp4",
  ];
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-24">
      <div className="text-center">
        <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-700 shadow-sm">
          <Cog6ToothIcon className="h-4 w-4 text-zinc-400 mr-2" />
          {t("services.badge")}
        </div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {t("services.title")}
        </h2>
        <WordByWord key={`services-subtitle-${language}`} className="mx-auto mt-3 max-w-2xl text-zinc-600" text={t("services.subtitle")} />
      </div>

      {/* Fila 1: 66/33 con tarjetas más altas */}
      <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-stretch">
        {[0, 1].map((i) => (
          <div key={`srv-row1-${i}`} className={i === 0 ? "md:basis-1/3" : "md:basis-2/3"}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card h-full min-h-[360px] rounded-3xl bg-white p-8 flex flex-col"
            >
              {i === 0 ? (
                <>
                  <VideoSurface src={videos[0]} className="h-64 w-full md:h-72" contain pad="md" front />
                  <div className={`mt-auto pt-6 ${infoMinH}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 text-white shadow-lg ring-1 ring-black/20">
                        <BoltIcon className="h-5 w-5" />
                      </div>
                      <h3 className={`${titleSize} font-semibold leading-snug clamp-2`}>{t("services.card1.title")}</h3>
                    </div>
                    <WordByWord key={`services-c1-${language}`} className={`mt-2 ${descSize} text-zinc-600`} text={t("services.card1.desc")} />
                  </div>
                </>
              ) : (
                <>
                  <VideoSurface src={videos[1]} className="h-64 w-full md:h-72" contain pad="md" front />
                  <div className={`mt-auto pt-6 ${infoMinH}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 text-white shadow-lg ring-1 ring-black/20">
                        <Cog6ToothIcon className="h-5 w-5" />
                      </div>
                      <h3 className={`${titleSize} font-semibold leading-snug clamp-2`}>{t("services.card2.title")}</h3>
                    </div>
                    <WordByWord key={`services-c2-${language}`} className={`mt-2 ${descSize} text-zinc-600`} text={t("services.card2.desc")} />
                  </div>
                </>
              )}
            </motion.div>
          </div>
        ))}
      </div>

      {/* Fila 2: 33/66 con tarjetas más altas */}
      <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-stretch">
        {[0, 1].map((i) => (
          <div key={`srv-row2-${i}`} className={i === 0 ? "md:basis-2/3" : "md:basis-1/3"}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="card h-full min-h-[360px] rounded-3xl bg-white p-8 flex flex-col"
            >
              {i === 0 ? (
                <>
                  <ChatAnimation />
                  <div className={`mt-auto pt-6 ${infoMinH}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 text-white shadow-lg ring-1 ring-black/20">
                        <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />
                      </div>
                      <h3 className={`${titleSize} font-semibold leading-snug clamp-2`}>{t("services.card3.title")}</h3>
                    </div>
                    <WordByWord key={`services-c3-${language}`} className={`${descSize} text-zinc-600`} text={t("services.card3.desc")} />
                  </div>
                </>
              ) : (
                <>
                  <FloatingIcons />
                  <div className={`mt-auto pt-6 ${infoMinH}`}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="inline-grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-b from-zinc-700 to-zinc-900 text-white shadow-lg ring-1 ring-black/20">
                        <ChartBarIcon className="h-5 w-5" />
                      </div>
                      <h3 className={`${titleSize} font-semibold leading-snug clamp-2`}>{t("services.card4.title")}</h3>
                    </div>
                    <WordByWord key={`services-c4-${language}`} className={`mt-2 ${descSize} text-zinc-600`} text={t("services.card4.desc")} />
                  </div>
                </>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

function VideoSurface({
  src,
  className = "",
  contain = false,
  pad = "md",
  front = true,
}: Readonly<{ src?: string; className?: string; contain?: boolean; pad?: "none" | "sm" | "md" | "lg"; front?: boolean }>) {
  const base = `relative overflow-hidden rounded-2xl neo-emboss ${className}`.trim();
  const objectClass = contain ? "object-contain" : "object-cover";
  const insetClass = pad === "lg" ? "inset-4 md:inset-6" : pad === "md" ? "inset-3 md:inset-5" : pad === "sm" ? "inset-2 md:inset-4" : "inset-0";
  return (
    <div className={base}>
      {src ? (
        <div className={`absolute ${insetClass} ${front ? "z-20" : "z-0"}`}>
          <video
            className={`h-full w-full ${objectClass} rounded-2xl`}
            src={src}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </div>
      ) : (
        <div className="h-full w-full" />
      )}
    </div>
  );
}

function ChatAnimation() {
  const { language } = useLanguage();
  const [phase, setPhase] = useState<"start" | "reply" | "fade">("start");

  useEffect(() => {
    const timers: Array<ReturnType<typeof setTimeout>> = [];
    function runCycle() {
      setPhase("start");
      timers.push(setTimeout(() => setPhase("reply"), 1000));
      timers.push(setTimeout(() => setPhase("fade"), 4000));
      timers.push(setTimeout(runCycle, 5500));
    }
    runCycle();
    return () => {
      for (const t of timers) clearTimeout(t);
    };
  }, []);

  const userText =
    language === "es"
      ? "Basado en mi visibilidad y la de mi competencia, ¿cuáles son las acciones que puedo tomar?"
      : "Based on my visibility and that of my competitors, what actions can I take?";
  const botText =
    language === "es" ? "Las acciones a tomar son:" : "The actions to take are:";
  const inputPlaceholder = language === "es" ? "Escribe un mensaje" : "Type a message";

  return (
    <div className="relative h-64 w-full md:h-72 rounded-2xl neo-emboss overflow-hidden bg-white">
      <div className="relative h-full w-full">
        <div className={`chat-bubble user-message ${phase === "fade" ? "hidden" : ""}`}>
          {userText}
        </div>
        <div
          className={`chat-bubble bot-message ${
            phase === "reply" ? "visible" : phase === "fade" ? "hidden" : ""
          }`}
        >
          {botText}
        </div>
      </div>
      <div className="message-input-bar">{inputPlaceholder}</div>
      <style jsx>{`
        .chat-bubble {
          position: absolute;
          padding: 12px 18px;
          border-radius: 20px;
          max-width: 75%;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          opacity: 1;
          transform: translateY(0);
          transition: opacity 0.4s ease-out, transform 0.4s ease-out;
          font-size: 14px;
          line-height: 1.2;
        }
        .user-message {
          background: #e9e9eb;
          color: #000;
          top: 18px;
          right: 18px;
          border-bottom-right-radius: 6px;
        }
        .bot-message {
          background: #0a66ff;
          color: #fff;
          top: 84px;
          left: 18px;
          border-bottom-left-radius: 6px;
          opacity: 0;
          transform: translateY(20px);
        }
        .visible { opacity: 1; transform: translateY(0); }
        .hidden { opacity: 0; transform: translateY(-30px); transition-duration: .3s; }
        .message-input-bar {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: 12px 16px;
          border-top: 1px solid #eee;
          background: #f9f9f9;
          color: #aaa;
          font-size: 13px;
        }
      `}</style>
    </div>
  );
}

function FloatingIcons() {
  return (
    <div className="relative h-64 w-full md:h-72 rounded-2xl neo-emboss overflow-hidden bg-white">
      <div className="icon-container absolute inset-0">
        <div className="icon" id="icon-main">
          <Image src="/icons/@2laps-logo.png" alt="2laps" width={40} height={40} priority />
        </div>
        <div className="icon" id="icon-gemini">
          <Image src="icons/gemini-logo.png" alt="Gemini" width={36} height={36} priority />
        </div>
        <div className="icon" id="icon-chatgpt">
          <Image src="icons/ChatGPT-Logo.png" alt="ChatGPT" width={34} height={34} priority />
        </div>
        <div className="icon" id="icon-claude">
          <Image src="icons/claude-logo.png" alt="Claude" width={38} height={38} priority />
        </div>
        <div className="icon" id="icon-perplexity">
          <Image src="icons/perplexity-logo.png" alt="Perplexity" width={36} height={36} priority />
        </div>
        <div className="icon" id="icon-copilot">
          <Image src="icons/Copilot-Logo.png" alt="Copilot" width={34} height={34} priority />
        </div>
        <div className="icon" id="icon-metaai">
          <Image src="icons/metaai-logo.png" alt="Meta AI" width={34} height={34} priority />
        </div>
        <div className="icon" id="icon-grok">
          <Image src="icons/grok-logo.png" alt="Grok" width={34} height={34} priority />
        </div>
        <div className="icon" id="icon-deepseek">
          <Image src="icons/deepseek-logo.png" alt="DeepSeek" width={34} height={34} priority />
        </div>
      </div>
      <style jsx>{`
        @keyframes float { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
        .icon-container { position: relative; width: 100%; height: 100%; }
        .icon { position: absolute; background: #f0f2f5; border-radius: 22px; display: grid; place-items: center; box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff; animation: float 6s ease-in-out infinite; z-index: 0; }
        .icon :global(img) { width: 56% !important; height: 56% !important; object-fit: contain; opacity: .95; }
        #icon-main { width: 96px; height: 96px; top: 32%; left: 36%; transform: translate(-36%, -32%); border-radius: 24px; animation-delay: -1s; z-index: 20; }
        #icon-gemini { width: 58px; height: 58px; top: 10%; left: 12%; animation-delay: -2.5s; }
        #icon-claude { width: 64px; height: 64px; top: 50%; left: 6%; animation-delay: -5s; }
        #icon-chatgpt { width: 52px; height: 52px; top: 18%; right: 12%; animation-delay: 0s; }
        #icon-perplexity { width: 56px; height: 56px; bottom: 10%; right: 18%; animation-delay: -4s; }
        #icon-copilot { width: 50px; height: 50px; bottom: 16%; left: 18%; animation-delay: -3s; }
        #icon-metaai { width: 52px; height: 52px; top: 60%; right: 8%; animation-delay: -1.5s; }
        #icon-grok { width: 48px; height: 48px; top: 8%; right: 34%; animation-delay: -3.5s; }
        #icon-deepseek { width: 50px; height: 50px; bottom: 30%; left: 42%; animation-delay: -2s; }
      `}</style>
    </div>
  );
}


function WordByWord({
  text,
  className = "",
}: Readonly<{ text: string; className?: string }>) {
  const words = (text || "").split(/\s+/);
  return (
    <motion.p
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={{ show: { transition: { staggerChildren: 0.02 } } }}
    >
      {words.map((word, idx) => (
        <motion.span
          key={`${word}-${idx}`}
          className="inline-block mr-1"
          variants={{
            hidden: { opacity: 0, y: 2, filter: "blur(2px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          transition={{ duration: 0.15, ease: "easeOut" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.p>
  );
}
