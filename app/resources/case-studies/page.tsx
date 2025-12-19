"use client";
import HeaderV2 from "@/components/HeaderV2";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";
import { useLanguage } from "@/components/LanguageProvider";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

export default function CaseStudiesPage() {
    const { t } = useLanguage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({ name: "", company: "", email: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Construct mailto link
        const subject = encodeURIComponent(`Solicitud de Informe: ${formData.company}`);
        const body = encodeURIComponent(
            `Hola Rodrigo,\n\nMe gustaría recibir el informe del Retailer Líder del Mercado de Galletas.\n\nDatos de contacto:\nNombre: ${formData.name}\nEmpresa: ${formData.company}\nEmail: ${formData.email}`
        );

        window.location.href = `mailto:rodrigo.quesada@trucoytrufa.es?subject=${subject}&body=${body}`;

        setIsSubmitted(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsSubmitted(false);
            setFormData({ name: "", company: "", email: "" });
        }, 3000);
    };

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
                            {t("caseStudies.title")}
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12">
                            {t("caseStudies.description")}
                        </p>

                        <div className="grid max-w-3xl mx-auto gap-8 text-left">
                            <div
                                onClick={() => setIsModalOpen(true)}
                                className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:shadow-lg transition-shadow cursor-pointer group"
                            >
                                <div className="h-8 w-24 bg-zinc-200 rounded mb-6 group-hover:bg-primary/10 transition-colors"></div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-primary transition-colors">
                                    {t("caseStudies.example.title")}
                                </h3>
                                <p className="text-zinc-600 mb-6">
                                    "{t("caseStudies.example.quote")}"
                                </p>
                                <span className="text-primary font-bold text-sm flex items-center gap-2">
                                    {t("caseStudies.readStory")} <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                <CtaSectionV2 />
            </main>
            <FooterV2 />

            {/* Lead Capture Modal */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 p-2 text-zinc-400 hover:text-zinc-900 transition-colors"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>

                            {isSubmitted ? (
                                <div className="py-12 text-center">
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                                        {t("caseStudies.modal.success")}
                                    </h3>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold text-zinc-900 mb-6 pr-8">
                                        {t("caseStudies.modal.title")}
                                    </h3>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-900 mb-1.5">
                                                {t("caseStudies.modal.name")}
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                placeholder="Ej. Juan Pérez"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-900 mb-1.5">
                                                {t("caseStudies.modal.company")}
                                            </label>
                                            <input
                                                required
                                                type="text"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                placeholder="Ej. Galletas S.A."
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-zinc-900 mb-1.5">
                                                {t("caseStudies.modal.email")}
                                            </label>
                                            <input
                                                required
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                                                placeholder="ejemplo@empresa.com"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-hover transition-all active:scale-[0.98] mt-4 shadow-lg shadow-primary/20"
                                        >
                                            {t("caseStudies.modal.submit")}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
}
