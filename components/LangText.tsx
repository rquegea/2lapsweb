"use client";
import React from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function LangText({ k }: Readonly<{ k: string }>) {
  const { t } = useLanguage();
  return <>{t(k)}</>;
}


