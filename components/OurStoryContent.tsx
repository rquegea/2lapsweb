"use client";

export default function OurStoryContent() {
    return (
        <section className="py-24 bg-white">
            <div className="container-v2">

                {/* Mission Statement */}
                <div className="max-w-4xl mx-auto text-center mb-32">
                    <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 leading-tight mb-8" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                        "We believe that in a world drowning in data, the most valuable asset is clarity. Our mission is to organize the world's business information and make it actionable."
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-zinc-300"></div>
                        <span className="text-zinc-500 font-medium uppercase tracking-widest text-sm">Our Mission</span>
                        <div className="h-px w-12 bg-zinc-300"></div>
                    </div>
                </div>

                {/* Key value proposition */}
                <div className="mb-32">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-12">Key value proposition</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        {[
                            {
                                numero: "01",
                                titulo: "Time/cost savings",
                                texto: "We automate ingestion, cleansing, and synthesis to free up 100-200 hours/month for teams of 2-4 analysts and reduce operating costs.",
                            },
                            {
                                numero: "02",
                                titulo: "Speed of response",
                                texto: "Daily insights and qual-quant connection to decide faster: potential of +5-10 percentage points of marketing ROI when aligning campaigns.",
                            },
                            {
                                numero: "03",
                                titulo: "Risk reduction",
                                texto: "Constant validation and a 360-degree real-time view to minimize failed launches or mistargeted campaigns, avoiding losses of thousands of euros.",
                            },
                            {
                                numero: "04",
                                titulo: "Strategic vision",
                                texto: "Continuous understanding of what, why, and where the market is moving. Actionable intelligence that teams can share.",
                            },
                        ].map((item) => (
                            <div
                                key={item.numero}
                                className="rounded-2xl border border-zinc-100 bg-white p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_18px_55px_rgba(0,0,0,0.06)] transition-shadow duration-300"
                            >
                                <div className="text-sm font-semibold text-primary mb-3">{item.numero}</div>
                                <h4 className="text-xl font-medium text-zinc-900 mb-3">{item.titulo}</h4>
                                <p className="text-zinc-600 text-sm leading-relaxed">{item.texto}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
