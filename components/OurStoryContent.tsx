"use client";
import { useLanguage } from "./LanguageProvider";

export default function OurStoryContent() {
    const { t } = useLanguage();
    
    const valueProps = [
        {
            numero: "01",
            titulo: t("ourStory.content.timeSavings.title"),
            texto: t("ourStory.content.timeSavings.text"),
        },
        {
            numero: "02",
            titulo: t("ourStory.content.speedResponse.title"),
            texto: t("ourStory.content.speedResponse.text"),
        },
        {
            numero: "03",
            titulo: t("ourStory.content.riskReduction.title"),
            texto: t("ourStory.content.riskReduction.text"),
        },
        {
            numero: "04",
            titulo: t("ourStory.content.strategicVision.title"),
            texto: t("ourStory.content.strategicVision.text"),
        },
    ];
    
    return (
        <section className="py-24 bg-white">
            <div className="container-v2">

                {/* Mission Statement */}
                <div className="max-w-4xl mx-auto text-center mb-32">
                    <h2 className="text-3xl md:text-4xl font-medium text-zinc-900 leading-tight mb-8" style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}>
                        "{t("ourStory.content.mission")}"
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-zinc-300"></div>
                        <span className="text-zinc-500 font-medium uppercase tracking-widest text-sm">{t("ourStory.content.missionLabel")}</span>
                        <div className="h-px w-12 bg-zinc-300"></div>
                    </div>
                </div>

                {/* Key value proposition */}
                <div className="mb-32">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-12">{t("ourStory.content.valueProposition")}</h3>
                    <div className="grid gap-6 md:grid-cols-2">
                        {valueProps.map((item) => (
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
