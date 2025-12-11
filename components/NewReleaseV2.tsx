"use client";

export default function NewReleaseV2() {
    return (
        <section className="bg-white py-24">
            <div className="container-v2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Video Placeholder */}
                    <div className="relative w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden shadow-2xl">
                        {/* Placeholder for video */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-zinc-500 font-medium">Preview available soon</span>
                        </div>
                        {/* You can replace the above with a <video> tag later:
            <video 
              className="w-full h-full object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
              poster="/path/to/poster.jpg"
            >
              <source src="/path/to/video.mp4" type="video/mp4" />
            </video>
            */}
                    </div>

                    {/* Right Column: Text Content */}
                    <div>
                        <div className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
                            New release
                        </div>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-medium text-zinc-900 mb-8 leading-[1.1]"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            Actionable research in one place, with AI agents that prep everything for you
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                            <p>
                                We centralize the data your next decision needs: standardized fundamentals, transcripts, filings, and news—ready to explore without jumping between tools.
                            </p>
                            <p>
                                Our workflow agents investigate, synthesize, and deliver committee-ready summaries in seconds. Use them for ramp-ups, earnings prep, competitive benchmarking, or diligence while you stay focused on strategy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
