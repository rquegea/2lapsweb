"use client";

export default function PlatformHero() {
    return (
        <section className="pt-24 pb-32 bg-white">
            <div className="container-v2 max-w-[1200px]">
                <h1
                    className="text-5xl md:text-[80px] font-medium text-zinc-900 tracking-tight leading-[1.05] mb-10 max-w-5xl"
                    style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                >
                    An integrated platform that turns scattered signals into <span className="text-primary">strategic advantage</span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-3xl leading-relaxed font-light">
                    2laps connects exploration, deep analysis, and executive storytelling in a single flow. We combine generative AI, expert research, and proprietary data so you make decisions with context and confidence.
                </p>

                <div>
                    <a
                        href="/platform"
                        className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white transition-transform active:scale-95 hover:bg-primary-hover shadow-lg shadow-primary/20 gap-2"
                    >
                        Explore the new release
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
