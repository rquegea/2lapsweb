"use client";

export default function PlatformWorkflow() {
    return (
        <section className="py-24 bg-white border-b border-zinc-100">
            <div className="container-v2">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row gap-10 md:gap-20 mb-20">
                    <div className="flex-1">
                        <h2
                            className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight leading-tight"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            Replace fragmented research with one unified flow
                        </h2>
                    </div>
                    <div className="flex-1">
                        <p className="text-lg text-zinc-600 leading-relaxed">
                            Explore markets, dig into signals, and monitor risks in one place. Our AI understands your industry context, crosses sources, and delivers actionable narrative without manual data wrangling.
                        </p>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row items-end gap-10 md:gap-20">
                    <div className="flex-1">
                        <h2
                            className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight leading-tight"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            Our technology understands what you need and delivers in seconds
                        </h2>
                    </div>
                </div>
            </div>
        </section>
    );
}
