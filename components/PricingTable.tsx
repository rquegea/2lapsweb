"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const PLANS = ["Essential", "Professional", "Premium", "Enterprise"] as const;

type PlanKey = (typeof PLANS)[number];
type RowValue = boolean | string;

type Section = {
    title: string;
    rows: { name: string; values: Record<PlanKey, RowValue> }[];
};

const SECTIONS: Section[] = [
    {
        title: "Servicio y soporte",
        rows: [
            { name: "Soporte 24/7", values: { Essential: true, Professional: true, Premium: true, Enterprise: true } },
            { name: "Account Manager dedicado", values: { Essential: "No incluido", Professional: "Opcional", Premium: true, Enterprise: true } },
            { name: "Soporte IT", values: { Essential: "No incluido", Professional: "Opcional", Premium: true, Enterprise: true } },
            { name: "Servicios profesionales", values: { Essential: "No incluido", Professional: "Bajo demanda", Premium: true, Enterprise: true } },
        ]
    },
    {
        title: "Formación",
        rows: [
            { name: "Formación virtual y presencial", values: { Essential: "No incluido", Professional: true, Premium: true, Enterprise: true } },
            { name: "Programa de formación a medida", values: { Essential: "No incluido", Professional: "Bajo demanda", Premium: true, Enterprise: true } },
        ]
    },
    {
        title: "Hosting y seguridad",
        rows: [
            { name: "SaaS", values: { Essential: true, Professional: true, Premium: true, Enterprise: true } },
            { name: "Private Cloud", values: { Essential: "No", Professional: "Opcional", Premium: "Opcional", Enterprise: true } },
        ]
    }
];

export default function PricingTable() {
    // State to manage open/closed sections, defaulting to all open
    const [openSections, setOpenSections] = useState<number[]>([0, 1, 2]);

    const toggleSection = (index: number) => {
        if (openSections.includes(index)) {
            setOpenSections(openSections.filter(i => i !== index));
        } else {
            setOpenSections([...openSections, index]);
        }
    };

    return (
        <section className="pb-24 bg-white">
            <div className="container-v2 max-w-5xl">

                {/* Cabecera (desktop) */}
                <div className="hidden md:grid grid-cols-12 gap-4 border-b border-zinc-200 pb-4 mb-8">
                    <div className="col-span-4"></div>
                    {PLANS.map((plan, idx) => (
                        <div
                            key={plan}
                            className={`col-span-2 text-center text-xs font-bold uppercase tracking-wider ${
                                idx === 2 || idx === 3 ? "text-primary" : "text-zinc-900"
                            }`}
                        >
                            {plan}
                        </div>
                    ))}
                </div>

                {/* Sections */}
                <div className="space-y-8">
                    {SECTIONS.map((section, index) => (
                        <div key={section.title} className="border-b border-zinc-100 pb-8">
                            <button
                                onClick={() => toggleSection(index)}
                                className="w-full flex items-center justify-between md:justify-start gap-4 mb-6 group"
                            >
                                <h3 className="text-2xl font-bold text-zinc-900">{section.title}</h3>
                                <ChevronDownIcon className={`w-5 h-5 text-zinc-400 transition-transform ${openSections.includes(index) ? "rotate-180" : ""}`} />

                                {/* Mobile Headers inline if needed, but usually hidden */}
                            </button>

                            {openSections.includes(index) && (
                                <div className="space-y-4">
                                    {section.rows.map((row) => (
                                        <div key={row.name} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-2">
                                            <div className="col-span-4 text-sm font-medium text-zinc-700">{row.name}</div>

                                            {PLANS.map((plan, idx) => {
                                                const value = row.values[plan];
                                                const isCheck = value === true;
                                                const isPrimary = idx >= 2;
                                                return (
                                                    <div key={plan} className="col-span-2 flex justify-between md:justify-center items-center">
                                                        <span className={`md:hidden text-xs uppercase mr-2 ${isPrimary ? "text-primary" : "text-zinc-400"}`}>
                                                            {plan}:
                                                        </span>
                                                        {isCheck ? (
                                                            <svg
                                                                className={`w-5 h-5 ${isPrimary ? "text-primary" : "text-zinc-900"}`}
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                stroke="currentColor"
                                                            >
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                            </svg>
                                                        ) : (
                                                            <span className="text-sm text-zinc-500">{value as string}</span>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
