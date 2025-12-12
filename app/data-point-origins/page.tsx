import type { Metadata } from "next";
import HeaderV2 from "@/components/HeaderV2";
import DataOriginsHero from "@/components/DataOriginsHero";
import DataOriginsTabs from "@/components/DataOriginsTabs";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Data Point Origins | Trusted Sources for Market Intelligence",
  description:
    "Discover how 2laps aggregates and orchestrates data from open web, media, social platforms, and internal systems. Transparent data lineage and source verification.",
  openGraph: {
    title: "Data Point Origins | Trusted Sources for Market Intelligence",
    description:
      "Discover how 2laps aggregates and orchestrates data from open web, media, social platforms, and internal systems.",
    url: "https://2laps.trucoytrufa.es/data-point-origins",
  },
  alternates: {
    canonical: "https://2laps.trucoytrufa.es/data-point-origins",
  },
};

export default function DataOriginsPage() {
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
                                Our ingestion and LLM orchestration flow
                            </h2>
                            <p className="text-lg text-zinc-600">
                                We connect distributed sources, normalize the data, and elevate it into a
                                knowledge graph ready for analysis and decision‑making.
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
