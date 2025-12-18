"use client";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useLanguage } from "./LanguageProvider";

export default function PricingFAQ() {
    const { t } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const FAQS = [
        { questionKey: "pricing.faq.q1", answerKey: "pricing.faq.a1" },
        { questionKey: "pricing.faq.q2", answerKey: "pricing.faq.a2" },
        { questionKey: "pricing.faq.q3", answerKey: "pricing.faq.a3" },
        { questionKey: "pricing.faq.q4", answerKey: "pricing.faq.a4" },
        { questionKey: "pricing.faq.q5", answerKey: "pricing.faq.a5" },
    ];

    return (
        <section className="py-24 bg-zinc-50">
            <div className="container-v2 max-w-3xl">
                <h2
                    className="text-3xl md:text-4xl font-medium text-center text-zinc-900 mb-12"
                    style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                >
                    {t("pricing.faq.title")}
                </h2>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
                            >
                                <span className="text-lg font-medium text-zinc-900">{t(faq.questionKey)}</span>
                                {openIndex === index ? (
                                    <MinusIcon className="w-5 h-5 text-zinc-500" />
                                ) : (
                                    <PlusIcon className="w-5 h-5 text-zinc-500" />
                                )}
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="p-6 pt-0 text-zinc-600 leading-relaxed">
                                    {t(faq.answerKey)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
