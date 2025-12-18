"use client";
import { useLanguage } from "./LanguageProvider";

export default function ContactSection() {
    const { t } = useLanguage();
    
    return (
        <section className="py-24 bg-white">
            <div className="container-v2 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Column: Contact Info */}
                    <div>
                        <h1
                            className="text-5xl font-medium text-zinc-900 mb-8"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            {t("contact.getInTouch")}
                        </h1>
                        <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
                            {t("contact.questionsHelp")}
                        </p>

                        <div className="space-y-10">
                            <div>
                                <h3 className="text-lg font-bold text-zinc-900 mb-2">{t("contact.salesInquiries")}</h3>
                                <p className="text-zinc-600 mb-1">{t("contact.interestedDemo")}</p>
                                <a href="mailto:sales@2laps.com" className="text-primary font-medium hover:underline">sales@2laps.com</a>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-zinc-900 mb-2">{t("contact.supportTitle")}</h3>
                                <p className="text-zinc-600 mb-1">{t("contact.needHelp")}</p>
                                <a href="mailto:support@2laps.com" className="text-primary font-medium hover:underline">support@2laps.com</a>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold text-zinc-900 mb-2">{t("contact.globalOffices")}</h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div>
                                        <div className="font-semibold text-zinc-900">New York</div>
                                        <div className="text-sm text-zinc-500">123 Broadway, Suite 100<br />New York, NY 10010</div>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-zinc-900">London</div>
                                        <div className="text-sm text-zinc-500">45 King's Cross Rd<br />London, WC1X 9LP</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="bg-zinc-50 rounded-3xl p-8 md:p-10 border border-zinc-100">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-semibold text-zinc-900 mb-2">{t("contact.firstName")}</label>
                                    <input type="text" id="first-name" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Jane" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-semibold text-zinc-900 mb-2">{t("contact.lastName")}</label>
                                    <input type="text" id="last-name" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-zinc-900 mb-2">{t("contact.workEmail")}</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="jane@company.com" />
                            </div>

                            <div>
                                <label htmlFor="company" className="block text-sm font-semibold text-zinc-900 mb-2">{t("contact.company")}</label>
                                <input type="text" id="company" className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Acme Inc." />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-zinc-900 mb-2">{t("contact.message")}</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder={t("contact.messagePlaceholder")}></textarea>
                            </div>

                            <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary-hover transition-colors shadow-lg shadow-primary/20">
                                {t("contact.sendMessage")}
                            </button>

                            <p className="text-xs text-zinc-500 text-center mt-4">
                                {t("contact.termsAgree")} <a href="#" className="underline">{t("contact.termsOfService")}</a> {t("contact.and")} <a href="#" className="underline">{t("contact.privacyPolicy")}</a>.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
