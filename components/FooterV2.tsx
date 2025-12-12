"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "./LanguageProvider";

function FooterColumn({ column, colIndex }: { column: { titleKey: string, links: { labelKey: string, href: string }[] }, colIndex: number }) {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const { t } = useLanguage();

    return (
        <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-6">
                {t(column.titleKey)}
            </h4>
            <div className="relative border-l border-zinc-800 ml-1" onMouseLeave={() => setActiveIndex(null)}>
                <ul className="space-y-4 pl-4">
                    {column.links.map((link, linkIndex) => {
                        const isActive = activeIndex === linkIndex;
                        return (
                            <li
                                key={link.labelKey}
                                className="relative"
                                onMouseEnter={() => setActiveIndex(linkIndex)}
                            >
                                {isActive && (
                                    <motion.span
                                        layoutId={`footer-line-${colIndex}`}
                                        className="absolute -left-[17px] top-0 bottom-0 w-[2px] bg-primary"
                                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                    />
                                )}
                                <Link
                                    href={link.href}
                                    className={`text-sm transition-colors block ${isActive ? "text-white font-medium" : "text-zinc-400 hover:text-white"
                                        }`}
                                >
                                    {t(link.labelKey)}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default function FooterV2() {
    const { t } = useLanguage();
    
    const FOOTER_LINKS = [
        {
            titleKey: "v2.footer.platform",
            links: [
                { labelKey: "v2.footer.platform.main", href: "/platform" },
                { labelKey: "v2.footer.platform.origins", href: "/data-point-origins" },
                { labelKey: "v2.footer.platform.enterprise", href: "/platform/enterprise-intelligence" },
            ]
        },
        {
            titleKey: "v2.footer.solutions",
            links: [
                { labelKey: "v2.footer.solutions.fmcg", href: "/solutions/fmcg" },
                { labelKey: "v2.footer.solutions.education", href: "/solutions/education" },
            ]
        },
        {
            titleKey: "v2.footer.resources",
            links: [
                { labelKey: "v2.footer.resources.blog", href: "/resources/blog" },
                { labelKey: "v2.footer.resources.caseStudies", href: "/resources/case-studies" },
                { labelKey: "v2.footer.resources.webinars", href: "/resources/webinars" },
            ]
        },
        {
            titleKey: "v2.footer.about",
            links: [
                { labelKey: "v2.footer.about.story", href: "/about/our-story" },
                { labelKey: "v2.footer.about.careers", href: "/about/careers" },
                { labelKey: "v2.footer.about.contact", href: "/about/contact" },
            ]
        }
    ];

    return (
        <footer className="bg-[#111111] text-white pt-12 md:pt-20 pb-10 relative overflow-hidden">
            <div className="container-v2 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">

                    {/* Links Columns */}
                    <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                        {FOOTER_LINKS.map((column, colIndex) => (
                            <FooterColumn key={column.titleKey} column={column} colIndex={colIndex} />
                        ))}
                    </div>

                    {/* Right Side: Actions */}
                    <div className="lg:w-72 flex flex-col items-start gap-6">
                        <Link
                            href="https://platform.2laps.io"
                            className="w-full text-center rounded-md bg-white text-zinc-900 px-6 py-3 text-sm font-semibold hover:bg-zinc-100 transition-colors"
                        >
                            {t("v2.footer.login")}
                        </Link>

                        <Link
                            href="https://www.linkedin.com/company/2laps/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex items-center gap-2 mt-2 text-sm text-white hover:text-white/80 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zm-9 19H7V9h3v10zm-1.5-11.2c-.97 0-1.75-.79-1.75-1.75S7.53 4.3 8.5 4.3s1.75.79 1.75 1.75S9.47 7.8 8.5 7.8zM20 19h-3v-5.2c0-1.24-1.01-2.25-2.25-2.25S12.5 12.56 12.5 13.8V19h-3V9h3v1.1c.56-.85 1.7-1.4 2.75-1.4 1.96 0 3.75 1.57 3.75 3.5V19z" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <span
                            className="text-xl md:text-2xl tracking-tight text-white font-medium leading-none"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            2laps
                        </span>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-xs text-zinc-500">
                        <span>{t("v2.footer.copyright")}</span>
                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            <Link href="#" className="hover:text-zinc-300">{t("v2.footer.legal")}</Link>
                            <Link href="#" className="hover:text-zinc-300">{t("v2.footer.cookies")}</Link>
                            <Link href="#" className="hover:text-zinc-300">{t("v2.footer.privacy")}</Link>
                            <Link href="#" className="hover:text-zinc-300">{t("v2.footer.terms")}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
