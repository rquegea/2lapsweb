"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface UseCase {
    id: string;
    number: string;
    title: string;
    description: string;
    mockupContent: React.ReactNode;
}

interface SolutionsUseCasesProps {
    title: string;
    cases: UseCase[];
}

export default function SolutionsUseCases({ title, cases }: SolutionsUseCasesProps) {
    const [activeId, setActiveId] = useState(cases[0].id);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        cases.forEach((useCase) => {
            const element = document.getElementById(useCase.id);
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActiveId(useCase.id);
                            }
                        });
                    },
                    {
                        rootMargin: "-50% 0px -50% 0px", // Trigger when element is in the middle of the viewport
                        threshold: 0,
                    }
                );
                observer.observe(element);
                observers.push(observer);
            }
        });

        return () => {
            observers.forEach((observer) => observer.disconnect());
        };
    }, [cases]);

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -100; // Adjust based on header height
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    return (
        <section className="bg-white py-24">
            <div className="container-v2">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    {/* Left Column: Sticky Navigation */}
                    <div className="hidden lg:block lg:col-span-4">
                        <div className="sticky top-32">
                            <h3
                                className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-8"
                                style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                            >
                                {title}
                            </h3>
                            <nav className="space-y-6">
                                {cases.map((useCase) => (
                                    <button
                                        key={useCase.id}
                                        onClick={() => handleScrollTo(useCase.id)}
                                        className={`group flex items-center w-full text-left transition-colors duration-300 ${activeId === useCase.id
                                                ? "text-zinc-900"
                                                : "text-zinc-400 hover:text-zinc-600"
                                            }`}
                                    >
                                        {/* Active Indicator Line */}
                                        <div className="w-1 mr-4 h-6 relative flex flex-col justify-center">
                                            {activeId === useCase.id && (
                                                <motion.div
                                                    layoutId="active-indicator"
                                                    className="w-full h-full bg-primary rounded-full"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                            {activeId !== useCase.id && (
                                                <div className="w-full h-full bg-zinc-200 rounded-full scale-y-0 group-hover:scale-y-50 transition-transform duration-300 origin-center" />
                                            )}
                                        </div>

                                        <span
                                            className={`text-lg font-medium ${activeId === useCase.id ? "font-semibold" : ""
                                                }`}
                                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                                        >
                                            {useCase.title}
                                        </span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="col-span-1 lg:col-span-8 space-y-24">
                        {cases.map((useCase) => (
                            <div
                                key={useCase.id}
                                id={useCase.id}
                                className="scroll-mt-32 flex flex-col gap-8"
                            >
                                <div className="lg:hidden">
                                    <h3
                                        className="text-2xl font-medium text-zinc-900 mb-2"
                                        style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                                    >
                                        {useCase.title}
                                    </h3>
                                </div>

                                {/* Content Block */}
                                <div className="bg-zinc-50 rounded-2xl p-8 md:p-12 border border-zinc-100 shadow-sm">
                                    {/* Mockup Content */}
                                    <div className="w-full mb-8 flex items-center justify-center">
                                        {useCase.mockupContent}
                                    </div>

                                    <h4
                                        className="text-2xl md:text-3xl font-medium text-zinc-900 mb-4 hidden lg:block"
                                        style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                                    >
                                        {useCase.title}
                                    </h4>
                                    <p className="text-lg text-zinc-600 leading-relaxed">
                                        {useCase.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
