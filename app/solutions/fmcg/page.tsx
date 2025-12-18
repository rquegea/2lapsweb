"use client";
import HeaderV2 from "@/components/HeaderV2";
import SolutionsHero from "@/components/SolutionsHero";
import SolutionsUseCases from "@/components/SolutionsUseCases";
import SolutionsTrusted from "@/components/SolutionsTrusted";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";
import { useLanguage } from "@/components/LanguageProvider";

const BRANDS = [
    { name: "Moët & Chandon", logo: "/logos/moet.png" },
    { name: "Ruinart", logo: "/logos/ruinart.png" },
    { name: "Veuve Clicquot", logo: "/logos/veuve-clicquot-logo.jpg" },
    { name: "Dom Pérignon", logo: "/logos/dom-perignon.png" },
    { name: "Leifheit", logo: "/logos/leifheit.png" },
];

export default function FMCGPage() {
    const { t } = useLanguage();
    
    const USE_CASES = [
        {
            id: "trends",
            number: "01",
            title: t("solutions.fmcg.trends.title"),
            description: t("solutions.fmcg.trends.desc"),
            mockupContent: (
                <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                    <div className="font-bold text-lg text-zinc-900 mb-4">{t("solutions.fmcg.trends.velocity")}</div>
                    <div className="h-32 bg-zinc-50 rounded-lg flex items-end justify-between p-4 gap-2">
                        <div className="w-full bg-primary/20 h-[30%] rounded-t"></div>
                        <div className="w-full bg-primary/40 h-[50%] rounded-t"></div>
                        <div className="w-full bg-primary/60 h-[40%] rounded-t"></div>
                        <div className="w-full bg-primary/80 h-[70%] rounded-t"></div>
                        <div className="w-full bg-primary h-[90%] rounded-t relative">
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">+124%</div>
                        </div>
                    </div>
                    <div className="mt-4 text-sm text-zinc-600">
                        {t("solutions.fmcg.trends.mentions")}
                    </div>
                </div>
            )
        },
        {
            id: "competitor",
            number: "02",
            title: t("solutions.fmcg.competitor.title"),
            description: t("solutions.fmcg.competitor.desc"),
            mockupContent: (
                <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">C</div>
                        <div>
                            <div className="font-bold text-zinc-900">{t("solutions.fmcg.competitor.alert")}</div>
                            <div className="text-xs text-zinc-500">{t("solutions.fmcg.competitor.justNow")}</div>
                        </div>
                    </div>
                    <p className="text-sm text-zinc-800 font-medium mb-2">{t("solutions.fmcg.competitor.newProduct")}</p>
                    <p className="text-sm text-zinc-600">
                        {t("solutions.fmcg.competitor.trademark")}
                    </p>
                    <button className="mt-4 text-primary text-sm font-semibold">{t("solutions.fmcg.competitor.viewSource")} &rarr;</button>
                </div>
            )
        },
        {
            id: "consumer",
            number: "03",
            title: t("solutions.fmcg.consumer.title"),
            description: t("solutions.fmcg.consumer.desc"),
            mockupContent: (
                <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                    <div className="font-bold text-lg text-zinc-900 mb-4">{t("solutions.fmcg.consumer.sentiment")}</div>
                    <div className="flex gap-4 mb-6">
                        <div className="flex-1 text-center p-3 bg-green-50 rounded-lg border border-green-100">
                            <div className="text-2xl font-bold text-green-600">68%</div>
                            <div className="text-xs text-green-800">{t("solutions.fmcg.consumer.positive")}</div>
                        </div>
                        <div className="flex-1 text-center p-3 bg-red-50 rounded-lg border border-red-100">
                            <div className="text-2xl font-bold text-red-600">12%</div>
                            <div className="text-xs text-red-800">{t("solutions.fmcg.consumer.negative")}</div>
                        </div>
                    </div>
                    <div className="text-sm text-zinc-600 italic">
                        "{t("solutions.fmcg.consumer.insight")}"
                    </div>
                </div>
            )
        },
    ];

    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main>
                <SolutionsHero
                    industry="FMCG"
                    title={t("solutions.fmcg.title")}
                    subtitle={t("solutions.fmcg.subtitle")}
                />
                <SolutionsTrusted brands={BRANDS} title={t("solutions.trusted.title")} />
                <SolutionsUseCases
                    title={t("solutions.fmcg.useCases")}
                    cases={USE_CASES}
                />
                <CtaSectionV2 />
            </main>
            <FooterV2 />
        </div>
    );
}
