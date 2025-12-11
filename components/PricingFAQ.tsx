"use client";
import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

const FAQS = [
    {
        question: "How is pricing determined?",
        answer: "Our pricing is tailored to your organization's specific needs, based on the number of seats, data modules required, and the level of enterprise support needed. Contact our sales team for a personalized quote."
    },
    {
        question: "Do you offer a free trial?",
        answer: "Yes, we offer a 14-day free trial for qualified businesses. This allows you to explore the full capabilities of our Market Intelligence platform before committing."
    },
    {
        question: "Can I upgrade my plan later?",
        answer: "Absolutely. You can add more seats, data sources, or upgrade to the Enterprise Intelligence package at any time. Our account managers will assist you with a seamless transition."
    },
    {
        question: "What kind of support is included?",
        answer: "All plans include access to our 24/7 help center. Enterprise plans benefit from a dedicated account manager, priority support, and custom onboarding sessions."
    },
    {
        question: "Is my data secure?",
        answer: "Security is our top priority. We are SOC2 Type II compliant and use enterprise-grade encryption for all data. For Enterprise clients, we offer private cloud hosting options for maximum isolation."
    }
];

export default function PricingFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-zinc-50">
            <div className="container-v2 max-w-3xl">
                <h2
                    className="text-3xl md:text-4xl font-medium text-center text-zinc-900 mb-12"
                    style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                >
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => (
                        <div key={index} className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
                            >
                                <span className="text-lg font-medium text-zinc-900">{faq.question}</span>
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
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
