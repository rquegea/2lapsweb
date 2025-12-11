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
        ideal: "Monitorización básica para equipos pequeños",
        items: [
            { label: "Conversaciones analizadas / mes", value: "Hasta 3.600" },
            { label: "Análisis", value: "Semanal (Essential) / Mensual (Essential)" },
            { label: "Soporte", value: "Inicial (email)" },
            { label: "Puesta en marcha", value: "Kickoff guiado" },
            { label: "Conversaciones adicionales", value: "Contactar para pack" }
        ]
    },
    {
        title: "Professional",
        ideal: "Equipos de marketing y estrategia",
        items: [
            { label: "Conversaciones analizadas / mes", value: "Hasta 10.800" },
            { label: "Análisis", value: "Semanal (Essential) / Mensual (Professional)" },
            { label: "Soporte", value: "A demanda (email)" },
            { label: "Onboarding", value: "Sí" },
            { label: "Puesta en marcha", value: "Kickoff asistido" },
            { label: "Conversaciones adicionales", value: "Contactar para pack" }
        ]
    },
    {
        title: "Premium",
        highlight: true,
        ideal: "Departamentos grandes o agencias",
        items: [
            { label: "Conversaciones analizadas / mes", value: "Hasta 36.000" },
            { label: "Análisis", value: "Semanal (Professional) / Mensual (Premium)" },
            { label: "Soporte", value: "Prioritario (email + chat) + onboarding" },
            { label: "Onboarding", value: "Sí" },
            { label: "Puesta en marcha", value: "Kickoff avanzado" },
            { label: "Conversaciones adicionales", value: "Contactar para pack" }
        ]
    },
    {
        title: "Enterprise",
        ideal: "Grandes corporaciones o necesidades a medida",
        items: [
            { label: "Conversaciones analizadas / mes", value: "Personalizado" },
            { label: "Análisis", value: "Ad hoc" },
            { label: "Soporte", value: "Dedicado (gestor de cuenta) + SLA" },
            { label: "Onboarding", value: "Sí" },
            { label: "Puesta en marcha", value: "Incluida en proyecto" },
            { label: "Conversaciones adicionales", value: "Incluido / a medida" }
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
                    Elige el plan que encaja con tu equipo
                </h2>
                <p className="text-center text-zinc-500 max-w-3xl mx-auto mb-14">
                    Inspirado en nuestras estructuras de servicio: sin mostrar precios, solo la
                    cobertura y el nivel de acompañamiento para cada perfil de organización.
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
                                        <CheckIcon active={plan.highlight} />
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
                                    Hablar con ventas
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
