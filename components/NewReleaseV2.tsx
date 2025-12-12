"use client";
import { useLanguage } from "@/components/LanguageProvider";

export default function NewReleaseV2() {
    const { t } = useLanguage();

    return (
        <section className="bg-white py-24">
            <div className="container-v2">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Column: Video Placeholder */}
                    <div className="relative w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden shadow-2xl">
                        {/* Placeholder for video */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-zinc-500 font-medium">{t("v2.newRelease.preview")}</span>
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div>
                        <div className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-6">
                            {t("v2.newRelease.badge")}
                        </div>
                        <h2
                            className="text-3xl md:text-4xl lg:text-5xl font-medium text-zinc-900 mb-8 leading-[1.1]"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            {t("v2.newRelease.title")}
                        </h2>
                        <div className="space-y-6 text-lg text-zinc-600 leading-relaxed">
                            <p>
                                {t("v2.newRelease.description1")}
                            </p>
                            <p>
                                {t("v2.newRelease.description2")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
