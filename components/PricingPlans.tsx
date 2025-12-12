"use client";

type Plan = {
    title: string;
    highlight?: boolean;
    ideal: string;
    items: { label: string; value: string }[];
};

const plans: Plan[] = [
    {
        title: "Essential",
        ideal: "Basic monitoring for small teams",
        items: [
            { label: "Analyzed conversations / month", value: "Up to 3,600" },
            { label: "Analysis", value: "Weekly (Essential) / Monthly (Essential)" },
            { label: "Support", value: "Initial (email)" },
            { label: "Setup", value: "Guided kickoff" },
            { label: "Additional conversations", value: "Contact for pack" }
        ]
    },
    {
        title: "Professional",
        ideal: "Marketing and strategy teams",
        items: [
            { label: "Analyzed conversations / month", value: "Up to 10,800" },
            { label: "Analysis", value: "Weekly (Essential) / Monthly (Professional)" },
            { label: "Support", value: "On demand (email)" },
            { label: "Onboarding", value: "Yes" },
            { label: "Setup", value: "Assisted kickoff" },
            { label: "Additional conversations", value: "Contact for pack" }
        ]
    },
    {
        title: "Premium",
        highlight: true,
        ideal: "Large departments or agencies",
        items: [
            { label: "Analyzed conversations / month", value: "Up to 36,000" },
            { label: "Analysis", value: "Weekly (Professional) / Monthly (Premium)" },
            { label: "Support", value: "Priority (email + chat) + onboarding" },
            { label: "Onboarding", value: "Yes" },
            { label: "Setup", value: "Advanced kickoff" },
            { label: "Additional conversations", value: "Contact for pack" }
        ]
    },
    {
        title: "Enterprise",
        ideal: "Large corporations or custom needs",
        items: [
            { label: "Analyzed conversations / month", value: "Customized" },
            { label: "Analysis", value: "Ad hoc" },
            { label: "Support", value: "Dedicated (account manager) + SLA" },
            { label: "Onboarding", value: "Yes" },
            { label: "Setup", value: "Included in project" },
            { label: "Additional conversations", value: "Included / customized" }
        ]
    }
];

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
    return (
        <section className="py-24 bg-white">
            <div className="container-v2">
                <h2
                    className="text-4xl md:text-5xl font-medium text-center text-zinc-900 mb-6"
                    style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                >
                    Choose the plan that fits your team
                </h2>
                <p className="text-center text-zinc-500 max-w-3xl mx-auto mb-14">
                    Inspired by our service structures: no prices shown, just coverage and level of support for each organizational profile.
                </p>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {plans.map((plan) => (
                        <div
                            key={plan.title}
                            className={`border rounded-2xl overflow-hidden flex flex-col h-full ${
                                plan.highlight ? "border-primary shadow-xl shadow-primary/10" : "border-zinc-200"
                            }`}
                        >
                            <div
                                className={`p-6 ${
                                    plan.highlight ? "bg-primary text-white" : "bg-[#0A0F1F] text-white"
                                }`}
                            >
                                <h3 className="text-2xl font-bold">{plan.title}</h3>
                                <p className="text-sm mt-2 opacity-80">{plan.ideal}</p>
                            </div>

                            <div className="p-6 flex-1 flex flex-col gap-4">
                                {plan.items.map((item) => (
                                    <div key={item.label} className="flex items-start gap-3">
                                        <CheckIcon active={!!plan.highlight} />
                                        <div>
                                            <p className="text-xs uppercase tracking-wide text-zinc-500 font-semibold">
                                                {item.label}
                                            </p>
                                            <p className="text-sm text-zinc-800 leading-snug">{item.value}</p>
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
                                    Talk to sales
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
