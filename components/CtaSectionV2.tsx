"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function CtaSectionV2() {
    const { t } = useLanguage();

    return (
        <section className="bg-[#E5E9E2] relative overflow-hidden mb-0">
            <div className="container-v2 py-24 md:py-32 relative z-10">
                <div className="max-w-3xl">
                    <h2
                        className="text-4xl md:text-6xl font-medium text-zinc-900 tracking-tight leading-[1.1] mb-6"
                        style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                    >
                        {t("v2.cta.title")} <span className="text-primary">{t("v2.cta.titleHighlight")}</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-700 mb-10 max-w-2xl leading-relaxed">
                        {t("v2.cta.description")}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white transition-transform active:scale-95 hover:bg-primary-hover shadow-lg shadow-primary/20"
                        >
                            {t("v2.cta.button")}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
