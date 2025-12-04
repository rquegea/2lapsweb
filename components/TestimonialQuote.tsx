"use client";
import React, { useMemo } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { motion } from "framer-motion";

type Segment = { text: string; bold?: boolean };

function buildSegments(language: string): Segment[] {
  if (language === "en") {
    return [
      { text: "“We harness " },
      { text: "your data", bold: true },
      { text: ", understand your audience and their " },
      { text: "conversation", bold: true },
      {
        text:
          " in the market, and use AI to help your brand stand out from the noise. The best part? We ",
      },
      { text: "execute", bold: true },
      { text: " too.”" },
    ];
  }
  // Español por defecto
  return [
    { text: "“Aprovechamos " },
    { text: "tus datos", bold: true },
    { text: ", entendemos a tu audiencia y su " },
    { text: "conversación", bold: true },
    {
      text:
        " en el mercado, y usamos inteligencia artificial para ayudar a tu marca a destacar del ruido. ¿La mejor parte? También te decimos cómo ",
    },
    { text: "ejecutarlo", bold: true },
    { text: ".”" },
  ];
}

export default function TestimonialQuote() {
  const { language } = useLanguage();

  const segments = useMemo(() => buildSegments(language), [language]);
  const fullText = useMemo(
    () => segments.map((s) => s.text).join(""),
    [segments]
  );

  return (
    <motion.blockquote
      initial={{ opacity: 0, filter: "blur(8px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="text-zinc-600 text-xl leading-relaxed md:text-3xl md:leading-snug"
      aria-label={fullText}
    >
      {segments.map((segment) => (
          <span
            key={`${segment.text}-${segment.bold ? "b" : "n"}`}
            className={segment.bold ? "font-semibold text-black" : undefined}
          >
          {segment.text}
          </span>
      ))}
    </motion.blockquote>
  );
}


