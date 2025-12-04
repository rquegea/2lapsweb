"use client";
import { BENEFITS } from "@/lib/constants";
import { motion } from "framer-motion";
import { BoltIcon, CpuChipIcon, ChartBarIcon, SparklesIcon, Cog8ToothIcon, StarIcon } from "@heroicons/react/24/solid";
import { useLanguage } from "@/components/LanguageProvider";
import React, { useEffect, useRef, useState } from "react";

function Dial({ transparent = false }: { readonly transparent?: boolean }) {
  const [step, setStep] = useState<number>(0);
  const steps = useRef([
    // Frame 1: solo punto superior derecho
    { angle: -18, dots: [false, true, false] },
    // Frame 2: tres puntos visibles
    { angle: 22, dots: [true, true, true] },
  ]);

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => (s + 1) % steps.current.length);
    }, 1300);
    return () => clearInterval(id);
  }, []);

  const current = steps.current[step];

  return (
    <div className="mx-auto mt-2 h-44 w-44 rounded-full neo-emboss relative md:h-52 md:w-52">
      {!transparent && <div className="absolute inset-4 rounded-full neo-inset" />}
      {/* marcadores que aparecen según el estado */}
      <div className={`absolute left-6 top-10 h-6 w-6 rounded-full neo-emboss transition-opacity duration-300 ${current.dots[0] ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute right-8 top-10 h-6 w-6 rounded-full neo-emboss transition-opacity duration-300 ${current.dots[1] ? "opacity-100" : "opacity-0"}`} />
      <div className={`absolute right-12 bottom-10 h-6 w-6 rounded-full neo-emboss transition-opacity duration-300 ${current.dots[2] ? "opacity-100" : "opacity-0"}`} />

      {/* aguja animada por pasos con origen en el centro */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-left transition-transform duration-400 ease-out"
        style={{ transform: `translate(-50%, -50%) rotate(${current.angle}deg)` }}
      >
        <div className="h-4 w-28 rounded-full bg-white neo-emboss" />
      </div>
      {/* pivote */}
      <div className="absolute top-1/2 left-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-900 shadow-md" />
    </div>
  );
}

function Bars() {
  return (
    <div className="mx-auto mt-2 grid w-full max-w-[260px] grid-cols-5 items-end gap-2">
      {[40, 72, 96, 58, 80].map((h, i) => (
        <div key={`bar-${i}-${h}`} className="flex items-end justify-center">
          <div
            className="w-8 rounded-2xl bg-white neo-emboss"
            style={{ height: `${h}px` }}
          />
        </div>
      ))}
    </div>
  );
}

function Nodes() {
  return (
    <div className="relative mx-auto mt-2 h-40 w-40 md:h-48 md:w-48">
      <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full neo-emboss" />
      <div className="absolute -left-2 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full neo-emboss" />
      <div className="absolute right-0 top-8 h-10 w-10 rounded-full neo-emboss" />
      <div className="absolute bottom-4 right-6 h-10 w-10 rounded-full neo-emboss" />
    </div>
  );
}

export default function Benefits() {
  const { t } = useLanguage();
  const benefitVideos: Array<string | undefined> = [
    "videos/benefit-analytics.mp4",
    "videos/benefit-growth.mp4",
    "videos/benefit-sync.mp4",
  ];
  const titles = [t("benefits.card1.title"), t("benefits.card2.title"), t("benefits.card3.title")];
  const descs = [t("benefits.card1.desc"), t("benefits.card2.desc"), t("benefits.card3.desc")];
  return (
    <section id="benefits" className="mx-auto max-w-6xl px-6 pt-20 pb-32">
      <div className="text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-zinc-700 shadow-sm">
          <StarIcon className="h-4 w-4 text-zinc-400" />
          {t("benefits.badge")}
        </div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">{t("benefits.title")}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600">{t("benefits.description")}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 items-stretch">
        {BENEFITS.map((b, idx) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card card--deep reflect-top rounded-3xl bg-white p-6 flex flex-col"
          >
            <VideoSurface
              src={benefitVideos[idx]}
              className="mb-5 h-48 md:h-56 grid place-items-center"
              contain={Boolean(benefitVideos[idx])}
              pad={Boolean(benefitVideos[idx]) ? "lg" : "none"}
              front={Boolean(benefitVideos[idx])}
            >
              {renderVisual(idx, Boolean(benefitVideos[idx]))}
            </VideoSurface>
            <h3 className="text-lg font-semibold">{titles[idx]}</h3>
            <p className="mt-auto text-sm text-zinc-600">{descs[idx]}</p>
          </motion.div>
        ))}
      </div>

      {/* Marquee chips */}
      <div className="mt-10 marquee pb-6">
        <div className="marquee-track gap-4">
          {getChips(t).map((c) => (
            <Chip key={`chip-a-${c.label}`} {...c} />
          ))}
          {getChips(t).map((c) => (
            <Chip key={`chip-b-${c.label}`} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function renderVisual(index: number, hasVideo: boolean) {
  // Si hay video en el primer card, no dibujamos el dial para dejar el video visible
  if (index === 0) return hasVideo ? null : <Dial transparent={false} />;
  if (index === 1) return <Bars />;
  return <Nodes />;
}

function getChips(t: (k: string) => string) {
  return [
    { icon: <BoltIcon className="h-4 w-4" />, label: t("chips.fasterInnovation") },
    { icon: <CpuChipIcon className="h-4 w-4" />, label: t("chips.automation") },
    { icon: <ChartBarIcon className="h-4 w-4" />, label: t("chips.dataDriven") },
    { icon: <SparklesIcon className="h-4 w-4" />, label: t("chips.aiInsights") },
    { icon: <Cog8ToothIcon className="h-4 w-4" />, label: t("chips.scalableSolutions") },
  ];
}

function Chip({ icon, label }: { readonly icon: React.ReactNode; readonly label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-zinc-700 shadow-sm neo-emboss">
      <span className="text-zinc-900">{icon}</span>
      {label}
    </span>
  );
}




function VideoSurface({
  src,
  className = "",
  children,
  contain = false,
  pad = "none",
  front = false,
}: Readonly<{ src?: string; className?: string; children?: React.ReactNode; contain?: boolean; pad?: "none" | "sm" | "md" | "lg"; front?: boolean }>) {
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
      ) : null}
      <div className={`relative ${front ? "z-0" : "z-10"}`}>{children}</div>
    </div>
  );
}
