"use client";
import HeaderV2 from "@/components/HeaderV2";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main>
                <section className="pt-32 pb-24 text-center">
                    <div className="container-v2">
                        <h1
                            className="text-5xl md:text-6xl font-medium text-zinc-900 mb-6"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            Case Studies
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12">
                            See how leading organizations use 2laps to drive growth.
                        </p>

                        <div className="grid max-w-3xl mx-auto gap-8 text-left">
                            <div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg transition-shadow cursor-pointer">
                                <div className="h-8 w-24 bg-zinc-200 rounded mb-6"></div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                                    How Company X increased revenue by 20% using 2laps
                                </h3>
                                <p className="text-zinc-600 mb-6">
                                    "2laps has completely transformed our market research workflow. We can now identify trends weeks before our competitors."
                                </p>
                                <span className="text-primary font-bold text-sm">Read Story &rarr;</span>
                            </div>
                        </div>
                    </div>
                </section>
                <CtaSectionV2 />
            </main>
            <FooterV2 />
        </div>
    );
}
