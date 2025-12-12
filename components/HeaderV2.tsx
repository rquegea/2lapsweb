"use client";
import Link from "next/link";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";

type SearchItem = {
  title: string;
  href: string;
  category: string;
  keywords?: string;
  description?: string;
};

type NavChild = {
  title: string;
  desc: string;
  icon: string;
  href?: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

const SEARCH_INDEX: SearchItem[] = [
  { title: "2laps Platform", href: "/platform", category: "Platform", keywords: "features tools workflows" },
  { title: "Data Point Origins", href: "/data-point-origins", category: "Platform", keywords: "sources data lineage" },
  { title: "Enterprise Intelligence", href: "/platform/enterprise-intelligence", category: "Platform", keywords: "internal content knowledge" },
  { title: "Solutions for FMCG", href: "/solutions/fmcg", category: "Solutions", keywords: "retail consumer goods" },
  { title: "Solutions for Education", href: "/solutions/education", category: "Solutions", keywords: "universities research grants" },
  { title: "Blog", href: "/resources/blog", category: "Resources", keywords: "articles news insights" },
  { title: "Case Studies", href: "/resources/case-studies", category: "Resources", keywords: "customers success stories" },
  { title: "Webinars", href: "/resources/webinars", category: "Resources", keywords: "events learn live" },
  { title: "Our Story", href: "/about/our-story", category: "About", keywords: "mission company background" },
  { title: "Careers", href: "/about/careers", category: "About", keywords: "jobs hiring roles" },
  { title: "Contact", href: "/about/contact", category: "About", keywords: "support sales demo" },
  { title: "Pricing", href: "/pricing", category: "Pricing", keywords: "plans cost tiers" },
];

const NAV_ITEMS: NavItem[] = [
  {
    label: "v2.nav.platform",
    href: "#platform",
    children: [
      { title: "v2.nav.platform.main", desc: "v2.nav.platform.main.desc", icon: "layers", href: "/platform" },
      { title: "v2.nav.platform.origins", desc: "v2.nav.platform.origins.desc", icon: "folder", href: "/data-point-origins" },
      { title: "v2.nav.platform.enterprise", desc: "v2.nav.platform.enterprise.desc", icon: "cube", href: "/platform/enterprise-intelligence" },
    ]
  },
  {
    label: "v2.nav.solutions",
    href: "#solutions",
    children: [
      { title: "v2.nav.solutions.fmcg", desc: "v2.nav.solutions.fmcg.desc", icon: "shopping-bag", href: "/solutions/fmcg" },
      { title: "v2.nav.solutions.education", desc: "v2.nav.solutions.education.desc", icon: "academic-cap", href: "/solutions/education" },
    ]
  },
  {
    label: "v2.nav.resources",
    href: "#resources",
    children: [
      { title: "v2.nav.resources.blog", desc: "v2.nav.resources.blog.desc", icon: "newspaper", href: "/resources/blog" },
      { title: "v2.nav.resources.caseStudies", desc: "v2.nav.resources.caseStudies.desc", icon: "document", href: "/resources/case-studies" },
      { title: "v2.nav.resources.webinars", desc: "v2.nav.resources.webinars.desc", icon: "video", href: "/resources/webinars" },
    ]
  },
  {
    label: "v2.nav.about",
    href: "#about",
    children: [
      { title: "v2.nav.about.story", desc: "v2.nav.about.story.desc", icon: "flag", href: "/about/our-story" },
      { title: "v2.nav.about.careers", desc: "v2.nav.about.careers.desc", icon: "user-group", href: "/about/careers" },
      { title: "v2.nav.about.contact", desc: "v2.nav.about.contact.desc", icon: "chat", href: "/about/contact" },
    ]
  },
  { label: "v2.nav.pricing", href: "/pricing" }, // No dropdown for pricing
];

function DropdownMenu({ items }: Readonly<{ items: NavChild[] }>) {
  const [hoveredChild, setHoveredChild] = useState<number | null>(null);
  const { t } = useLanguage();

  return (
    <ul className="flex flex-col relative" onMouseLeave={() => setHoveredChild(null)}>
      {items.map((child, index) => (
        <li key={child.title}>
          <Link
            href={child.href || "#"}
            className="group/item flex items-start gap-4 p-4 rounded-lg hover:bg-zinc-50 transition-colors relative"
            onMouseEnter={() => setHoveredChild(index)}
          >
            {/* Sliding Red Line Indicator */}
            {hoveredChild === index && (
              <motion.div
                layoutId="dropdown-line"
                className="absolute left-0 top-2 bottom-2 w-[3px] bg-primary rounded-r-full"
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}

            {/* Icon Placeholder */}
            <div className="mt-1 flex-shrink-0 text-zinc-400 group-hover/item:text-primary transition-colors">
              {getIcon(child.icon)}
            </div>
            <div>
              <div className="text-zinc-900 font-semibold text-sm group-hover/item:text-primary transition-colors">
                {t(child.title)}
              </div>
              <div className="text-zinc-500 text-xs mt-0.5 font-normal">
                {t(child.desc)}
              </div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function HeaderV2() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { t } = useLanguage();

  const filteredResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return SEARCH_INDEX.slice(0, 6);

    return SEARCH_INDEX.filter((item) => {
      const haystack = `${item.title} ${item.category} ${item.keywords ?? ""}`.toLowerCase();
      return haystack.includes(query);
    });
  }, [searchQuery]);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();

      if ((event.metaKey || event.ctrlKey) && key === "k") {
        event.preventDefault();
        setIsSearchOpen(true);
        return;
      }

      if (key === "escape") {
        setIsSearchOpen(false);
        setSearchQuery("");
      }
    };

    const target = globalThis as unknown as EventTarget & {
      addEventListener?: (type: string, listener: EventListenerOrEventListenerObject) => void;
      removeEventListener?: (type: string, listener: EventListenerOrEventListenerObject) => void;
    };

    if (!target?.addEventListener || !target?.removeEventListener) return undefined;

    target.addEventListener("keydown", handler as EventListener);
    return () => target.removeEventListener("keydown", handler as EventListener);
  }, []);

  const handleSelect = (href: string) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    router.push(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-zinc-100">
      <div className="container-v2 h-16 md:h-20 flex items-center">

        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-2 mr-auto md:mr-10 z-50 relative">
          <span
            className="text-xl md:text-2xl tracking-tight text-zinc-900 font-medium leading-none"
            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
          >
            2laps
          </span>
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden lg:block text-[15px] font-medium text-zinc-600 h-full">
          <ul className="flex items-center gap-8 h-full">
            {NAV_ITEMS.map((item, index) => (
              <li
                key={item.label}
                className="relative h-full flex items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a
                  href={item.href}
                  className={`group inline-flex items-center gap-1 transition-colors relative py-2 ${hoveredIndex === index ? "text-zinc-900" : "hover:text-zinc-900"
                    }`}
                >
                  <span>{t(item.label)}</span>
                  {item.children && (
                    <ChevronDownIcon
                      className={`h-3 w-3 transition-transform duration-200 ${hoveredIndex === index ? "rotate-180" : ""
                        }`}
                      strokeWidth={2.5}
                    />
                  )}

                  {/* Red Underline Animation */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {hoveredIndex === index && item.children && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-[360px] bg-white rounded-xl shadow-xl border border-zinc-100 p-2 overflow-hidden"
                      style={{ marginTop: '-10px' }}
                    >
                      <DropdownMenu items={item.children} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="ml-auto flex items-center gap-3 md:gap-6 z-50 relative">
          <button
            type="button"
            className="text-zinc-500 hover:text-zinc-900"
            aria-label="Search"
            onClick={() => setIsSearchOpen(true)}
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
          </button>

          <LanguageSwitcher />

          <div className="hidden md:flex items-center gap-4">
            <a href="https://platform.2laps.io" className="text-[15px] font-medium text-zinc-600 hover:text-zinc-900">
              {t("v2.nav.login")}
            </a>
            <a
              href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-[15px] font-semibold text-white transition-transform active:scale-95 hover:bg-primary-hover"
            >
              {t("v2.nav.getStarted")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden text-zinc-900 p-2 -mr-2"
            aria-label="Menu"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-zinc-100 bg-white overflow-hidden"
          >
            <nav className="container-v2 py-6 space-y-6">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div>
                      <div className="text-sm font-semibold text-zinc-900 mb-3">{t(item.label)}</div>
                      <div className="space-y-3 pl-4 border-l-2 border-zinc-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.title}
                            href={child.href || "#"}
                            className="block text-sm text-zinc-600 hover:text-primary"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {t(child.title)}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-sm font-semibold text-zinc-900 hover:text-primary"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {t(item.label)}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3 border-t border-zinc-100">
                <a
                  href="https://platform.2laps.io"
                  className="block text-sm font-medium text-zinc-600 hover:text-zinc-900"
                >
                  {t("v2.nav.login")}
                </a>
                <a
                  href="https://calendly.com/rodrigo-quesada-trucoytrufa/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-hover"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t("v2.nav.getStarted")}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <SearchOverlay
        isOpen={isSearchOpen}
        query={searchQuery}
        results={filteredResults}
        onQueryChange={setSearchQuery}
        onClose={() => {
          setIsSearchOpen(false);
          setSearchQuery("");
        }}
        onSelect={handleSelect}
      />
    </header>
  );
}

// Simple icon mapper for the demo
function getIcon(name: string) {
  // You can replace these with actual HeroIcons components
  const className = "w-5 h-5";
  switch (name) {
    case "layers": return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>;
    case "folder": return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;
    case "cube": return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
    case "chart": return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
    case "shopping-bag": return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>;
    case "academic-cap": return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>;
    case "truck": return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>;
    default: return <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
  }
}

function SearchOverlay({
  isOpen,
  query,
  results,
  onQueryChange,
  onClose,
  onSelect,
}: Readonly<{
  isOpen: boolean;
  query: string;
  results: SearchItem[];
  onQueryChange: (value: string) => void;
  onClose: () => void;
  onSelect: (href: string) => void;
}>) {
  const { t } = useLanguage();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.18 }}
            className="mx-auto mt-24 w-full max-w-2xl rounded-2xl bg-white shadow-2xl ring-1 ring-black/5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-100">
              <MagnifyingGlassIcon className="h-5 w-5 text-zinc-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && results[0]) {
                    onSelect(results[0].href);
                  }
                }}
                placeholder={t("v2.search.placeholder")}
                className="w-full bg-transparent text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none"
              />
              <button
                type="button"
                onClick={onClose}
                className="text-xs font-medium text-zinc-500 hover:text-zinc-800"
              >
                Esc
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {results.length === 0 && (
                <div className="px-4 py-6 text-sm text-zinc-500">{t("v2.search.noResults")} "{query}".</div>
              )}

              {results.map((item) => (
                <button
                  key={item.href}
                  className="w-full text-left px-4 py-3 hover:bg-zinc-50 transition-colors border-b border-zinc-100 last:border-b-0"
                  onClick={() => onSelect(item.href)}
                >
                  <div className="text-sm font-semibold text-zinc-900">{item.title}</div>
                  <div className="mt-1 text-xs text-zinc-500 flex items-center gap-2">
                    <span className="inline-flex items-center rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] font-medium text-zinc-600">
                      {item.category}
                    </span>
                    <span>{item.description ?? item.keywords}</span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}