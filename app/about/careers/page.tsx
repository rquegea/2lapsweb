"use client";
import HeaderV2 from "@/components/HeaderV2";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";

export default function CareersPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main>
                <section className="pt-32 pb-48 text-center">
                    <div className="container-v2">
                        <h1
                            className="text-5xl md:text-6xl font-medium text-zinc-900 mb-6"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            Join our team
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
                            We're always looking for talented individuals to help us revolutionize market intelligence.
                        </p>
                        <div className="mt-16 p-12 bg-zinc-50 rounded-3xl border border-zinc-100 inline-block">
                            <span className="text-zinc-400 font-medium">No open positions at the moment. Check back soon!</span>
                        </div>
                    </div>
                </section>
                <CtaSectionV2 />
            </main>
            <FooterV2 />
        </div>
    );
}
