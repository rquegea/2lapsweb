"use client";
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE } from "@/lib/constants";

export default function FloatingDemoButton() {
  const { t } = useLanguage();
  const href = SITE.calendly || "#contact";

  return (
    <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 z-50">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("cta.requestDemo")}
        className="group inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.35)] border border-white/10 hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)] transition-all active:translate-y-[1px]"
      >
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-md bg-white/10 text-[12px] leading-none">
          {/* símbolo Command para guiño visual */}
          ⌘
        </span>
        <span className="text-sm font-medium tracking-[-0.01em]">
          {t("cta.requestDemo")}
        </span>
      </a>
    </div>
  );
}











