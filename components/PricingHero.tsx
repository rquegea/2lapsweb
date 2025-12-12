"use client";
import { useLanguage } from "./LanguageProvider";

export default function PricingHero() {
    const { t } = useLanguage();
    
    return (
        <section className="bg-[#050A18] text-white py-24">
            <div className="container-v2 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                {/* Left Content */}
                <div className="flex-1 lg:pt-12">
                    <h1
                        className="text-5xl md:text-6xl font-medium leading-[1.1] mb-8"
                        style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                    >
                        {t("pricing.hero.title")}
                    </h1>
                    <p className="text-lg text-zinc-400 mb-12 leading-relaxed max-w-xl">
                        {t("pricing.hero.description")}
                    </p>

                </div>

                {/* Right Form */}
                <div className="flex-1 w-full max-w-md bg-white rounded-lg p-8 text-zinc-900 shadow-2xl">
                    <div className="mb-8">
                        {/* Abstract Logo/Icon */}
                        <div className="w-12 h-12 rounded-full border-2 border-zinc-900 flex items-center justify-center mb-6">
                            <div className="w-1 h-1 bg-zinc-900 rounded-full mx-0.5"></div>
                            <div className="w-1 h-1 bg-zinc-900 rounded-full mx-0.5"></div>
                            <div className="w-1 h-1 bg-zinc-900 rounded-full mx-0.5"></div>
                        </div>
                        <h3 className="text-2xl font-medium leading-tight">
                            {t("pricing.form.title")}
                        </h3>
                    </div>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1">{t("pricing.form.email")}</label>
                            <input type="email" className="w-full border-b border-zinc-300 py-2 focus:border-primary focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1">{t("pricing.form.phone")}</label>
                            <input type="tel" className="w-full border-b border-zinc-300 py-2 focus:border-primary focus:outline-none transition-colors" />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1">{t("pricing.form.role")}</label>
                            <select className="w-full border-b border-zinc-300 py-2 focus:border-primary focus:outline-none transition-colors bg-transparent">
                                <option>{t("pricing.form.roleSelect")}</option>
                                <option>{t("pricing.form.roleExecutive")}</option>
                                <option>{t("pricing.form.roleManager")}</option>
                                <option>{t("pricing.form.roleAnalyst")}</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-zinc-500 mb-1">{t("pricing.form.country")}</label>
                            <select className="w-full border-b border-zinc-300 py-2 focus:border-primary focus:outline-none transition-colors bg-transparent">
                                <option>{t("pricing.form.countryUS")}</option>
                                <option>{t("pricing.form.countryUK")}</option>
                                <option>{t("pricing.form.countryES")}</option>
                            </select>
                        </div>

                        <div className="flex items-start gap-3 pt-4">
                            <input type="checkbox" className="mt-1" />
                            <p className="text-xs text-zinc-500">
                                {t("pricing.form.updates")}
                            </p>
                        </div>

                        <button type="submit" className="w-full bg-primary text-white font-bold py-3 rounded mt-6 hover:bg-primary-hover transition-colors">
                            {t("pricing.form.submit")}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
