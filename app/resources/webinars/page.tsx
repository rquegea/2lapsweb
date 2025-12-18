"use client";
import HeaderV2 from "@/components/HeaderV2";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";
import { useLanguage } from "@/components/LanguageProvider";

export default function WebinarsPage() {
    const { t } = useLanguage();
    
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
                            {t("webinars.title")}
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12">
                            {t("webinars.description")}
                        </p>

                        <div className="bg-primary rounded-2xl p-12 text-white text-left flex flex-col gap-6 md:gap-8 shadow-xl shadow-primary/20">
                            <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">{t("webinars.notificationList")}</div>
                            <h3 className="text-3xl md:text-4xl font-bold leading-tight">{t("webinars.getInvite")}</h3>
                            <p className="text-white/80 text-lg">
                                {t("webinars.sendInfo")}
                            </p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                                <a
                                    href="mailto:sales@2laps.com?subject=Notify%20me%20about%20the%20next%20webinar&body=Hi%2C%20please%20send%20me%20the%20invite%20when%20the%20new%20webinar%20is%20published.%20Thank%20you."
                                    className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-bold text-primary hover:bg-zinc-100 transition-colors"
                                >
                                    {t("webinars.notifyMe")}
                                </a>
                                <span className="text-sm text-white/80">{t("webinars.noSpam")}</span>
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
