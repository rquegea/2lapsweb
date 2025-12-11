"use client";

export default function DataOriginsStats() {
    return (
        <section className="py-24 bg-white">
            <div className="container-v2">
                <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden min-h-[500px]">
                    {/* Left Side - Primary Color */}
                    <div className="bg-primary flex-1 p-12 md:p-20 flex flex-col justify-between text-white">
                        <h2
                            className="text-4xl md:text-5xl font-medium leading-tight max-w-md"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            The broadest living knowledge graph, powered by LLMs
                        </h2>
                        <div className="text-white/80 text-sm mt-12">
                            Organized, deduplicated, and traceable signals—ready to activate
                        </div>
                    </div>

                    {/* Right Side - Light Gray */}
                    <div className="bg-[#F4F4F4] flex-1 p-12 md:p-20 flex flex-col justify-center gap-12">
                        <div>
                            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">500m+</div>
                            <div className="text-zinc-600 font-medium">Documents in our library</div>
                            <div className="h-px w-full bg-zinc-200 mt-8"></div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">1500</div>
                            <div className="text-zinc-600 font-medium">Verified sources and global partners</div>
                            <div className="h-px w-full bg-zinc-200 mt-8"></div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">200k</div>
                            <div className="text-zinc-600 font-medium">Transcripts and technical documents</div>
                            <div className="h-px w-full bg-zinc-200 mt-8"></div>
                        </div>
                        <div>
                            <div className="text-5xl md:text-6xl font-bold text-primary mb-2">4k+</div>
                            <div className="text-zinc-600 font-medium">Linked entities and dated events</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
