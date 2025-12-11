"use client";
import HeaderV2 from "@/components/HeaderV2";
import SolutionsHero from "@/components/SolutionsHero";
import SolutionsUseCases from "@/components/SolutionsUseCases";
import SolutionsTrusted from "@/components/SolutionsTrusted";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";

const BRANDS = [
    { name: "Planeta Formación y Universidades", logo: "/logos/planeta.png" },
    { name: "VIU", logo: "/logos/viu.png" },
    { name: "The Core School", logo: "/logos/the-core.png" },
    { name: "EAE Business School", logo: "/logos/eae.png" },
    { name: "Universitat Oberta de Catalunya (UOC)", logo: "/logos/uoc.jpg" },
];

const USE_CASES = [
    {
        id: "grants",
        number: "01",
        title: "Grant Funding & Research",
        description: "Identify funding opportunities faster. Scan thousands of grant databases and policy documents to find the perfect match for your research initiatives.",
        mockupContent: (
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                <div className="flex justify-between items-center mb-4">
                    <div className="font-bold text-lg text-zinc-900">Grant Match Found</div>
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">98% Match</span>
                </div>
                <div className="text-sm font-semibold text-zinc-800 mb-1">NSF - AI in Education Initiative</div>
                <div className="text-xs text-zinc-500 mb-4">Deadline: Oct 15, 2025</div>
                <p className="text-sm text-zinc-600 mb-4">
                    "Proposals sought for AI-driven personalized learning systems..."
                </p>
                <div className="h-1 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-primary"></div>
                </div>
                <div className="text-xs text-zinc-400 mt-2 text-right">Eligibility Check: Passed</div>
            </div>
        )
    },
    {
        id: "curriculum",
        number: "02",
        title: "Curriculum Development",
        description: "Stay at the forefront of academic trends. Analyze global research output and industry demands to design relevant, future-proof curricula.",
        mockupContent: (
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                <div className="font-bold text-lg text-zinc-900 mb-4">Skill Demand Analysis</div>
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
        title: "Corporate Partnerships",
        description: "Connect with industry leaders. Identify companies investing in R&D areas that align with your institution's expertise for strategic partnerships.",
        mockupContent: (
            <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
                <div className="font-bold text-lg text-zinc-900 mb-4">Potential Partners</div>
                <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 hover:bg-zinc-50 rounded-lg border border-transparent hover:border-zinc-200 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">T</div>
                        <div>
                            <div className="font-bold text-zinc-900">TechCorp Inc.</div>
                            <div className="text-xs text-zinc-500">Investing $50M in EdTech</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 hover:bg-zinc-50 rounded-lg border border-transparent hover:border-zinc-200 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">L</div>
                        <div>
                            <div className="font-bold text-zinc-900">LearnGlobal</div>
                            <div className="text-xs text-zinc-500">Seeking AI research partners</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
];

export default function EducationPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main>
                <SolutionsHero
                    industry="Education"
                    title="Give every institution an agentic AI edge"
                    subtitle="Empower researchers, administrators, and students with the world's most advanced AI research assistant."
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
