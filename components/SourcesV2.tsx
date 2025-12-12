"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function SourcesV2() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="container-v2 pt-8 md:pt-12 pb-20 md:pb-28">
        <div className="md:max-w-[50%]">
          <h2
            className="text-3xl md:text-5xl font-medium leading-tight tracking-tight text-zinc-900"
            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
          >
            {t("v2.platform.title")}
          </h2>
        </div>
      </div>
    </section>
  );
}


