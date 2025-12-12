"use client";

export default function PlatformVideo() {
    return (
        <section className="w-full bg-[#050A18] py-24 md:py-32">
            <div className="container-v2">
                {/* Video Container */}
                <div className="relative w-full mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl">
                    {/* Aspect Ratio Box for "Video" feel, though we are putting content inside */}
                    <div className="aspect-[16/9] w-full flex flex-col justify-center items-center p-8 md:p-20 relative">

                        {/* Content mimicking the AI analysis video/demo */}
                        <div className="max-w-3xl relative z-10 text-center">
                            <p className="text-xl md:text-3xl text-zinc-800 leading-relaxed mb-0 font-medium">
                                <span className="bg-[#FFF500] px-1 box-decoration-clone">Our platform connects public and private signals</span> — Open Web, Media & Press, Social & Forums, and Internal Data — to surface <span className="bg-[#FFF500] px-1 box-decoration-clone">where the real opportunity opens</span>. Across the data stack we show who captures demand, which partners keep margin, and what risks are emerging.
                            </p>
                        </div>

                        {/* Decorative background elements for the "video" */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-50/50 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
