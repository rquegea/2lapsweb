"use client";

export default function CtaSectionV2() {
    return (
        <section className="bg-[#E5E9E2] relative overflow-hidden mb-0">
            {/* Background decoration - large faded text or shape */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none opacity-5">
                <span className="text-[400px] font-bold leading-none tracking-tighter">AI</span>
            </div>

            <div className="container-v2 py-24 md:py-32 relative z-10">
                <div className="max-w-3xl">
                    <h2
                        className="text-4xl md:text-6xl font-medium text-zinc-900 tracking-tight leading-[1.1] mb-6"
                        style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                    >
                        From Data to <span className="text-primary">Action</span>
                    </h2>
                    <p className="text-lg md:text-xl text-zinc-700 mb-10 max-w-xl leading-relaxed">
                        Develop bold strategies, seize opportunities, and lead with clarity and confidence.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#get-started"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white transition-transform active:scale-95 hover:bg-primary-hover shadow-lg shadow-primary/20"
                        >
                            Get Started for Free
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
