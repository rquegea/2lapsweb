"use client";
import HeaderV2 from "@/components/HeaderV2";
import SolutionsHero from "@/components/SolutionsHero";
import SolutionsUseCases from "@/components/SolutionsUseCases";
import SolutionsTrusted from "@/components/SolutionsTrusted";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";

const BRANDS = [
    { name: "Moët & Chandon", logo: "/logos/moet.png" },
    { name: "Ruinart", logo: "/logos/ruinart.png" },
    { name: "Veuve Clicquot", logo: "/logos/veuve-clicquot.png" },
    { name: "Dom Pérignon", logo: "/logos/dom-perignon.svg" },
    { name: "Leifheit", logo: "/logos/leifheit.png" },
];

const USE_CASES = [
    {
        id: "trends",
        number: "01",
        title: "Trend Spotting & Innovation",
        description: "Identify emerging consumer trends before they go mainstream. Analyze social sentiment, patent filings, and competitor launches to fuel your R&D pipeline.",
        mockupContent: (
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                <div className="font-bold text-lg text-zinc-900 mb-4">Trend Velocity: Sustainable Packaging</div>
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
                    "Biodegradable materials" mentions up 124% YoY in competitor earnings calls.
                </div>
            </div>
        )
    },
    {
        id: "competitor",
        number: "02",
        title: "Competitor Intelligence",
        description: "Track competitor pricing strategies, supply chain shifts, and marketing campaigns in real-time. Get alerted to new product announcements instantly.",
        mockupContent: (
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">C</div>
                    <div>
                        <div className="font-bold text-zinc-900">Competitor Alert</div>
                        <div className="text-xs text-zinc-500">Just now</div>
                    </div>
                </div>
                <p className="text-sm text-zinc-800 font-medium mb-2">New Product Line Detected</p>
                <p className="text-sm text-zinc-600">
                    Competitor X has filed trademarks for a new plant-based energy drink line.
                </p>
                <button className="mt-4 text-primary text-sm font-semibold">View Source Documents &rarr;</button>
            </div>
        )
    },
    {
        id: "consumer",
        number: "03",
        title: "Consumer Sentiment Analysis",
        description: "Understand the 'why' behind the buy. Aggregate reviews, social media, and expert calls to decode shifting consumer preferences.",
        mockupContent: (
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                <div className="font-bold text-lg text-zinc-900 mb-4">Sentiment Analysis</div>
                <div className="flex gap-4 mb-6">
                    <div className="flex-1 text-center p-3 bg-green-50 rounded-lg border border-green-100">
                        <div className="text-2xl font-bold text-green-600">68%</div>
                        <div className="text-xs text-green-800">Positive</div>
                    </div>
                    <div className="flex-1 text-center p-3 bg-red-50 rounded-lg border border-red-100">
                        <div className="text-2xl font-bold text-red-600">12%</div>
                        <div className="text-xs text-red-800">Negative</div>
                    </div>
                </div>
                <div className="text-sm text-zinc-600 italic">
                    "Customers love the new flavor profile but are complaining about the bottle cap design..."
                </div>
            </div>
        )
    },
];

export default function FMCGPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main>
                <SolutionsHero
                    industry="FMCG"
                    title="Give every brand an agentic AI edge"
                    subtitle="Accelerate product innovation and outpace competitors with AI-driven insights from the world's most comprehensive market intelligence platform."
                />
                <SolutionsTrusted brands={BRANDS} />
                <SolutionsUseCases
                    title="Product Use Cases"
                    cases={USE_CASES}
                />
                <CtaSectionV2 />
            </main>
            <FooterV2 />
        </div>
    );
}
