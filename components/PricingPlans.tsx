"use client";
import { useLanguage } from "./LanguageProvider";

const CheckIcon = ({ active }: { active: boolean }) => (
    <svg
        className={`w-5 h-5 ${active ? "text-primary" : "text-zinc-300"} shrink-0`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

export default function PricingPlans() {
    const { t } = useLanguage();

    const plans = [
        {
            titleKey: "pricing.plans.essential",
            idealKey: "pricing.plans.essential.ideal",
            items: [
                { labelKey: "pricing.plans.conversations", valueKey: "pricing.plans.upTo", valueExtra: " 3,600" },
                { labelKey: "pricing.plans.analysis", valueKey: "pricing.plans.weekly", valueExtra: ` (Essential) / ${t("pricing.plans.monthly")} (Essential)` },
                { labelKey: "pricing.plans.support", valueKey: "pricing.plans.initial" },
                { labelKey: "pricing.plans.setup", valueKey: "pricing.plans.guidedKickoff" },
                { labelKey: "pricing.plans.additionalConversations", valueKey: "pricing.plans.contactForPack" }
            ]
        },
        {
            titleKey: "pricing.plans.professional",
            idealKey: "pricing.plans.professional.ideal",
            items: [
                { labelKey: "pricing.plans.conversations", valueKey: "pricing.plans.upTo", valueExtra: " 10,800" },
                { labelKey: "pricing.plans.analysis", valueKey: "pricing.plans.weekly", valueExtra: ` (Essential) / ${t("pricing.plans.monthly")} (Professional)` },
                { labelKey: "pricing.plans.support", valueKey: "pricing.plans.onDemand" },
                { labelKey: "pricing.plans.onboarding", valueKey: "pricing.plans.yes" },
                { labelKey: "pricing.plans.setup", valueKey: "pricing.plans.assistedKickoff" },
                { labelKey: "pricing.plans.additionalConversations", valueKey: "pricing.plans.contactForPack" }
            ]
        },
        {
            titleKey: "pricing.plans.premium",
            highlight: true,
            idealKey: "pricing.plans.premium.ideal",
            items: [
                { labelKey: "pricing.plans.conversations", valueKey: "pricing.plans.upTo", valueExtra: " 36,000" },
                { labelKey: "pricing.plans.analysis", valueKey: "pricing.plans.weekly", valueExtra: ` (Professional) / ${t("pricing.plans.monthly")} (Premium)` },
                { labelKey: "pricing.plans.support", valueKey: "pricing.plans.priority" },
                { labelKey: "pricing.plans.onboarding", valueKey: "pricing.plans.yes" },
                { labelKey: "pricing.plans.setup", valueKey: "pricing.plans.advancedKickoff" },
                { labelKey: "pricing.plans.additionalConversations", valueKey: "pricing.plans.contactForPack" }
            ]
        },
        {
            titleKey: "pricing.plans.enterprise",
            idealKey: "pricing.plans.enterprise.ideal",
            items: [
                { labelKey: "pricing.plans.conversations", valueKey: "pricing.plans.customized" },
                { labelKey: "pricing.plans.analysis", valueKey: "pricing.plans.adHoc" },
                { labelKey: "pricing.plans.support", valueKey: "pricing.plans.dedicated" },
                { labelKey: "pricing.plans.onboarding", valueKey: "pricing.plans.yes" },
                { labelKey: "pricing.plans.setup", valueKey: "pricing.plans.includedInProject" },
                { labelKey: "pricing.plans.additionalConversations", valueKey: "pricing.plans.includedCustomized" }
            ]
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container-v2">
                <h2
                    className="text-4xl md:text-5xl font-medium text-center text-zinc-900 mb-6"
                    style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                >
                    {t("pricing.plans.title")}
                </h2>
                <p className="text-center text-zinc-500 max-w-3xl mx-auto mb-14">
                    {t("pricing.plans.description")}
                </p>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {plans.map((plan) => (
                        <div
                            key={plan.titleKey}
                            className={`border rounded-2xl overflow-hidden flex flex-col h-full ${
                                plan.highlight ? "border-primary shadow-xl shadow-primary/10" : "border-zinc-200"
                            }`}
                        >
                            <div
                                className={`p-6 ${
                                    plan.highlight ? "bg-primary text-white" : "bg-[#0A0F1F] text-white"
                                }`}
                            >
                                <h3 className="text-2xl font-bold">{t(plan.titleKey)}</h3>
                                <p className="text-sm mt-2 opacity-80">{t(plan.idealKey)}</p>
                            </div>

                            <div className="p-6 flex-1 flex flex-col gap-4">
                                {plan.items.map((item) => (
                                    <div key={item.labelKey} className="flex items-start gap-3">
                                        <CheckIcon active={!!plan.highlight} />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-zinc-500 font-semibold">
                                                {t(item.labelKey)}
                                            </p>
                                            <p className="text-sm text-zinc-800 leading-snug">
                                                {t(item.valueKey)}{item.valueExtra || ""}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="px-6 pb-6">
                                <button
                                    className={`w-full rounded-lg py-3 font-semibold transition-colors ${
                                        plan.highlight
                                            ? "bg-white text-primary hover:bg-zinc-100"
                                            : "bg-primary text-white hover:bg-primary-hover"
                                    }`}
                                >
                                    {t("pricing.plans.talkToSales")}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
