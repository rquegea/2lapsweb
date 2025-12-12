"use client";
import HeaderV2 from "@/components/HeaderV2";
import DataOriginsHero from "@/components/DataOriginsHero";
import DataOriginsTabs from "@/components/DataOriginsTabs";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function DataOriginsPage() {
    const { t } = useLanguage();
    
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main>
                <DataOriginsHero />
                <section className="py-20 bg-white">
                    <div className="container-v2 max-w-6xl">
                        <div className="mb-8">
                            <h2
                                className="text-3xl md:text-4xl font-medium text-zinc-900 mb-3"
                                style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                            >
                                {t("dataOrigins.flow.title")}
                            </h2>
                            <p className="text-lg text-zinc-600">
                                {t("dataOrigins.flow.description")}
                            </p>
                        </div>
                        <div className="relative w-full aspect-[16/7]">
                            <Image
                                src="/data-origins-llm.jpg"
                                alt="Data ingestion pipeline into the LLM layer and insights panel"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </section>
                <DataOriginsTabs />
                <CtaSectionV2 />
            </main>
            <FooterV2 />
        </div>
    );
}
