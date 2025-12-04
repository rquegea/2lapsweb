"use client";
import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { SITE } from "@/lib/constants";

export default function CTAButton({
  className = "",
  label,
}: Readonly<{
  className?: string;
  label?: string;
}>) {
  const { t } = useLanguage();
  const url = SITE.calendly;
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center rounded-xl px-6 py-3 bg-[var(--surface)] text-black border border-black/10 shadow-lg hover:border-black/20 hover:shadow-xl transition ${className}`}
    >
      {label ?? t("cta.requestDemo")}
    </motion.a>
  );
}