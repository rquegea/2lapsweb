"use client";
import { motion } from "framer-motion";

interface SolutionsHeroProps {
    industry: string;
    title: string;
    subtitle: string;
}

export default function SolutionsHero({ industry, title, subtitle }: SolutionsHeroProps) {
    return (
        <section className="flex flex-col lg:flex-row min-h-[600px] w-full">
            {/* Left Side - Primary Color */}
            <div className="bg-primary flex-1 p-12 lg:p-24 flex flex-col justify-center text-white relative overflow-hidden">
                <div className="relative z-10">
                    <div className="text-xs font-bold tracking-widest uppercase mb-6 opacity-90">{industry}</div>
                    <h1
                        className="text-5xl lg:text-7xl font-medium leading-[1.1] mb-8"
                        style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                    >
                        {title}
                    </h1>
                    <p className="text-lg lg:text-xl text-white/90 mb-10 max-w-md leading-relaxed">
                        {subtitle}
                    </p>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-primary transition-transform active:scale-95 hover:bg-zinc-50"
                        >
                            Get started for free
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="#" className="font-semibold underline decoration-white/30 underline-offset-4 hover:decoration-white transition-all">
                            Interactive Tour
                        </a>
                    </div>
                </div>

                {/* Abstract Background Pattern */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
                        <path d="M0 100 L100 0 L100 100 Z" fill="currentColor" />
                    </svg>
                </div>
            </div>

            {/* Right Side - Dark with Mockup */}
            <div className="bg-[#050A18] flex-1 p-12 lg:p-24 flex items-center justify-center relative overflow-hidden">
                <div className="relative z-10 w-full max-w-md">
                    {/* Mockup Card */}
                    <div className="bg-white rounded-2xl shadow-2xl p-6 transform transition-transform duration-500 hover:rotate-2">
                        <div className="flex justify-between items-center mb-6">
                            <div className="flex items-center gap-2">
                                <span className="text-primary">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z" /></svg>
                                </span>
                                <span className="font-bold text-zinc-900">Deep Research</span>
                            </div>
                            <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </div>

                        <div className="space-y-4">
                            <div className="text-sm text-zinc-500 font-medium">Interpreted your question</div>
                            <div className="text-sm text-zinc-500 font-medium">Thinking...</div>

                            <div className="bg-zinc-50 rounded-xl p-4 text-sm text-zinc-700 leading-relaxed border border-zinc-100">
                                "Analyze the current trends in <span className="bg-[#FFF500] px-1">{industry}</span> and how AI is reshaping the competitive landscape."
                            </div>

                            <div className="space-y-2">
                                <div className="h-2 bg-zinc-100 rounded w-3/4"></div>
                                <div className="h-2 bg-zinc-100 rounded w-full"></div>
                                <div className="h-2 bg-zinc-100 rounded w-5/6"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            </div>
        </section>
    );
}
