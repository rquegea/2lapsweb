"use client";
import HeaderV2 from "@/components/HeaderV2";
import SolutionsHero from "@/components/SolutionsHero";
import SolutionsUseCases from "@/components/SolutionsUseCases";
import SolutionsTrusted from "@/components/SolutionsTrusted";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";
import { useLanguage } from "@/components/LanguageProvider";

const BRANDS = [
    { name: "Planeta Formación y Universidades", logo: "/logos/planeta.png" },
    { name: "VIU", logo: "/logos/viu.png" },
    { name: "The Core School", logo: "/logos/the-core.png" },
    { name: "EAE Business School", logo: "/logos/eae.png" },
    { name: "Universitat Oberta de Catalunya (UOC)", logo: "/logos/uoc.jpg" },
];

export default function EducationPage() {
    const { t } = useLanguage();
    
    const USE_CASES = [
        {
            id: "grants",
            number: "01",
            title: t("solutions.education.grants.title"),
            description: t("solutions.education.grants.desc"),
            mockupContent: (
                <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <div className="font-bold text-lg text-zinc-900">{t("solutions.education.grants.match")}</div>
                        <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">{t("solutions.education.grants.matchPercent")}</span>
                    </div>
                    <div className="text-sm font-semibold text-zinc-800 mb-1">NSF - AI in Education Initiative</div>
                    <div className="text-xs text-zinc-500 mb-4">{t("solutions.education.grants.deadline")}: Oct 15, 2025</div>
                    <p className="text-sm text-zinc-600 mb-4">
                        "{t("solutions.education.grants.proposals")}"
                    </p>
                    <div className="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-primary"></div>
                    </div>
                    <div className="text-xs text-zinc-400 mt-2 text-right">{t("solutions.education.grants.eligibility")}</div>
                </div>
            )
        },
        {
            id: "curriculum",
            number: "02",
            title: t("solutions.education.curriculum.title"),
            description: t("solutions.education.curriculum.desc"),
            mockupContent: (
                <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                    <div className="font-bold text-lg text-zinc-900 mb-4">{t("solutions.education.curriculum.skillDemand")}</div>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                            <span className="text-zinc-700">Prompt Engineering</span>
                            <span className="text-green-600 font-bold">+240%</span>
                        </div>
                        <div className="w-full bg-zinc-100 h-2 rounded-full">
                            <div className="bg-green-500 h-2 rounded-full w-[90%]"></div>
                        </div>

                        <div className="flex items-center justify-between text-sm mt-2">
                            <span className="text-zinc-700">Data Ethics</span>
                            <span className="text-green-600 font-bold">+85%</span>
                        </div>
                        <div className="w-full bg-zinc-100 h-2 rounded-full">
                            <div className="bg-green-500 h-2 rounded-full w-[60%]"></div>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "partnerships",
            number: "03",
            title: t("solutions.education.partnerships.title"),
            description: t("solutions.education.partnerships.desc"),
            mockupContent: (
                <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                    <div className="font-bold text-lg text-zinc-900 mb-4">{t("solutions.education.partnerships.potential")}</div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 hover:bg-zinc-50 rounded-lg border border-transparent hover:border-zinc-200 transition-colors cursor-pointer">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">T</div>
                            <div>
                                <div className="font-bold text-zinc-900">TechCorp Inc.</div>
                                <div className="text-xs text-zinc-500">{t("solutions.education.partnerships.investing")} $50M in EdTech</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 hover:bg-zinc-50 rounded-lg border border-transparent hover:border-zinc-200 transition-colors cursor-pointer">
                            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">L</div>
                            <div>
                                <div className="font-bold text-zinc-900">LearnGlobal</div>
                                <div className="text-xs text-zinc-500">{t("solutions.education.partnerships.seeking")}</div>
                            </div>
                        </div>
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
                    industry={t("v2.solutions.education")}
                    title={t("solutions.education.title")}
                    subtitle={t("solutions.education.subtitle")}
                />
                <SolutionsTrusted brands={BRANDS} title={t("solutions.trusted.title")} />
                <SolutionsUseCases
                    title={t("solutions.education.useCases")}
                    cases={USE_CASES}
                />
                <CtaSectionV2 />
            </main>
            <FooterV2 />
        </div>
    );
}
