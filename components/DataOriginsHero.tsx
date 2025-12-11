"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const LLM_LOGOS = [
    { src: "/icons/claude-logo.png", alt: "Claude" },
    { src: "/icons/gemini-logo.png", alt: "Gemini" },
    { src: "/icons/ChatGPT-Logo.png", alt: "ChatGPT" },
    { src: "/icons/grok-logo.png", alt: "Grok" },
    { src: "/icons/deepseek-logo.png", alt: "DeepSeek" },
    { src: "/icons/perplexity-logo.png", alt: "Perplexity" },
];

const SOURCE_DOMAINS: string[] = [
    "wikipedia.org",
    "commoncrawl.org",
    "pile.eleuther.ai",
    "github.com",
    "huggingface.co",
    "gutenberg.org",
    "arxiv.org",
    "ncbi.nlm.nih.gov",
    "stackoverflow.com",
    "reddit.com",
    "bbc.com",
    "cnn.com",
    "nytimes.com",
    "elpais.com",
    "theguardian.com",
    "reuters.com",
    "apnews.com",
    "bloomberg.com",
    "semanticscholar.org",
    "pubmed.ncbi.nlm.nih.gov",
    "researchgate.net",
    "ssrn.com",
    "biorxiv.org",
    "medrxiv.org",
    "philarchive.org",
    "jstor.org",
    "doaj.org",
    "europepmc.org",
    "hal.science",
    "scielo.org",
    "jstage.jst.go.jp",
    "lemonde.fr",
    "washingtonpost.com",
    "spiegel.de",
    "folha.uol.com.br",
    "clarin.com",
    "lanacion.com.ar",
    "elmundo.es",
    "abc.es",
    "lavanguardia.com",
    "corriere.it",
    "faz.net",
    "asahi.com",
    "aljazeera.com",
    "scmp.com",
    "thehindu.com",
    "indiatimes.com",
    "news.ycombinator.com",
    "quora.com",
    "medium.com",
    "fanfiction.net",
    "archiveofourown.org",
    "legislation.gov.uk",
    "eur-lex.europa.eu",
    "congress.gov",
    "datos.gob.es",
    "cia.gov",
    "data.worldbank.org",
    "who.int",
    "un.org",
    "ec.europa.eu/eurostat",
    "ine.es",
    "britannica.com",
    "imdb.com",
    "themoviedb.org",
    "discogs.com",
    "musicbrainz.org",
    "genius.com",
    "developer.mozilla.org",
    "learn.microsoft.com",
    "docs.python.org",
    "httpd.apache.org",
    "nginx.org",
    "hub.docker.com",
    "npmjs.com",
    "pypi.org",
    "crates.io",
    "mvnrepository.com",
    "ietf.org",
    "youtube.com",
    "ted.com",
    "opensubtitles.org",
    "archive.org",
    "khanacademy.org",
    "mathworld.wolfram.com",
    "goodreads.com",
    "store.steampowered.com",
    "play.google.com",
    "apps.apple.com",
    "producthunt.com",
    "kickstarter.com",
    "patreon.com",
    "substack.com",
    "blogger.com",
    "wordpress.com",
    "wikimediafoundation.org",
    "paperswithcode.com",
    "news.google.com",
    "sec.gov",
    "clinicaltrials.gov",
    "fda.gov",
    "nasa.gov",
    "esa.int",
    "weather.gov",
    "ecb.europa.eu",
];

const SOURCES = SOURCE_DOMAINS.slice(0, 100).map((domain, i) => ({
    id: `src-${i}-${domain}`,
    domain,
    favicon: `https://www.google.com/s2/favicons?domain=${encodeURIComponent(domain)}&sz=64`,
}));

export default function DataOriginsHero() {
    // Escenario para favicons aleatorios (uno a uno, sin solaparse)
    const stageRef = useRef<HTMLDivElement | null>(null);
    const [stageSize, setStageSize] = useState<{ w: number; h: number }>({ w: 0, h: 0 });
    const [sprites, setSprites] = useState<
        {
            id: string;
            x: number;
            y: number;
            favicon: string;
            alt: string;
            phase: "enter" | "idle" | "exit";
            enterMs: number;
            exitMs: number;
        }[]
    >([]);
    const TARGET_COUNT = 18;
    const ICON = 18; // ligeramente más grande
    const MARGIN = 13;
    const INTERVAL_MS = 380; // aparecen uno a uno más rápido
    const EXIT_MS = 500; // desaparición en 0.5s

    // Observa tamaño del contenedor
    useEffect(() => {
        const el = stageRef.current;
        if (!el) return;
        const update = () => setStageSize({ w: el.clientWidth, h: el.clientHeight });
        update();
        const ro = new ResizeObserver(update);
        ro.observe(el);
        return () => ro.disconnect();
    }, []);

    function placeOne(existing: Array<{ x: number; y: number; alt: string }>) {
        const w = stageSize.w || 520;
        const h = stageSize.h || 220;
        const minDist = ICON + MARGIN;
        const minDistSq = minDist * minDist;
        const maxY = Math.max(8, h - ICON - MARGIN); // permite ocupar toda la tarjeta
        const exclusion = {
            x: w / 2 - 110,
            y: h / 2 - 70,
            w: 220,
            h: 140,
        };
        const existingDomains = new Set(existing.map((s) => s.alt));
        const shuffled = [...SOURCES].sort(() => Math.random() - 0.5);
        for (let i = 0; i < shuffled.length; i++) {
            if (existingDomains.has(shuffled[i].domain)) continue;
            let tries = 0;
            while (tries < 80) {
                const x = Math.random() * (w - ICON);
                const y = Math.random() * maxY;
                const isInsideCenter = x > exclusion.x && x < exclusion.x + exclusion.w && y > exclusion.y && y < exclusion.y + exclusion.h;
                if (isInsideCenter) {
                    tries++;
                    continue;
                }
                let ok = true;
                for (const s of existing) {
                    const dx = s.x - x;
                    const dy = s.y - y;
                    if (dx * dx + dy * dy < minDistSq) {
                        ok = false;
                        break;
                    }
                }
                if (ok) {
                    return {
                        id: shuffled[i].id + "-" + Math.random().toString(36).slice(2, 7),
                        x,
                        y,
                        favicon: shuffled[i].favicon,
                        alt: shuffled[i].domain,
                        enterMs: 180 + Math.floor(Math.random() * 180), // 180–360ms
                        exitMs: EXIT_MS,
                    };
                }
                tries++;
            }
        }
        // fallback: esquina
        return {
            id: "fallback-" + Math.random().toString(36).slice(2, 7),
            x: 4,
            y: 4,
            favicon: SOURCES[0].favicon,
            alt: SOURCES[0].domain,
            enterMs: 240,
            exitMs: EXIT_MS,
        };
    }

    // Arranque con la tarjeta llena de favicons visibles desde el inicio
    useEffect(() => {
        if (!stageSize.w || !stageSize.h) return;
        setSprites((prev) => {
            if (prev.length) return prev;
            const initial: typeof prev = [];
            for (let i = 0; i < TARGET_COUNT; i++) {
                const placed = placeOne(initial);
                initial.push({ ...placed, phase: "idle" });
            }
            return initial;
        });
    }, [stageSize.w, stageSize.h]);

    useEffect(() => {
        const id = setInterval(() => {
            setSprites((prev) => {
                // si ya llegamos al objetivo, marcamos el más antiguo para salida
                let base = [...prev];
                if (base.length >= TARGET_COUNT) {
                    base = base.map((s, i) => (i === 0 ? { ...s, phase: "exit" } : s));
                }
                const p = placeOne(base);
                return [...base, { ...p, phase: "enter" }];
            });
            // pequeño retardo para iniciar el fade-in del recién añadido
            setTimeout(() => {
                setSprites((prev) =>
                    prev.map((s, idx) => (idx === prev.length - 1 && s.phase === "enter" ? { ...s, phase: "idle" } : s))
                );
            }, 60);
            // eliminar los que están en salida tras el tiempo de fade-out
            setTimeout(() => {
                setSprites((prev) => prev.filter((s) => s.phase !== "exit"));
            }, EXIT_MS);
        }, INTERVAL_MS);
        return () => clearInterval(id);
    }, [stageSize.w, stageSize.h]);

    return (
        <section className="pt-24 pb-32 bg-white">
            <div className="container-v2 max-w-[1200px] flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1">
                    <h1
                        className="text-5xl md:text-[64px] font-medium text-zinc-900 tracking-tight leading-[1.05] mb-10"
                        style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                    >
                        Data from the <span className="text-primary">entire Internet</span>, distilled by LLMs
                    </h1>

                    <div className="flex items-center gap-6">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white transition-transform active:scale-95 hover:bg-primary-hover shadow-lg shadow-primary/20"
                        >
                            Get Started
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ml-2">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                        
                    </div>
                </div>

                {/* Hero Visual: Logos de LLM conectados */}
                <div className="flex-1 relative max-w-[420px] w-full mx-auto">
                    <div className="relative z-10 bg-white rounded-3xl p-4 shadow-2xl border border-zinc-100 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-100/30 pointer-events-none" />

                        <div className="relative flex flex-col items-center justify-center gap-0 min-h-[260px]">

                            {/* Escenario de favicons aleatorios sin solaparse */}
                            <div ref={stageRef} className="relative w-full h-[220px]">
                                {sprites.map((s) => {
                                    const isHidden = s.phase === "enter" || s.phase === "exit";
                                    const scale = isHidden ? 0.6 : 1;
                                    const opacity = isHidden ? 0 : 1;
                                    return (
                                    <Image
                                                key={s.id}
                                                src={s.favicon}
                                                alt={s.alt}
                                                width={ICON}
                                                height={ICON}
                                                className="absolute rounded"
                                                style={{
                                                    left: s.x,
                                                    top: s.y,
                                                    opacity,
                                                    transform: `translate(0,0) scale(${scale})`,
                                                    transitionProperty: "opacity, transform",
                                                    transitionDuration: `${s.phase === "exit" ? s.exitMs : s.enterMs}ms`,
                                                    transitionTimingFunction: "cubic-bezier(.2,.7,.3,1)",
                                                }}
                                        />
                                    );
                                })}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="flex flex-nowrap justify-center gap-1.5 lg:gap-2 bg-white/85 backdrop-blur-sm px-2.5 py-1.5 rounded-2xl shadow-[0_0_0_2px_rgba(248,113,113,0.55)] border border-red-200/70">
                                        {LLM_LOGOS.map((logo) => (
                                            <div
                                                key={logo.alt}
                                                className="relative w-9 h-9 lg:w-10 lg:h-10 rounded-2xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center"
                                            >
                                                <Image
                                                    src={logo.src}
                                                    alt={logo.alt}
                                                    fill
                                                    className="object-contain p-2"
                                                    sizes="56px"
                                                />
                                                <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fondos decorativos */}
                    <div className="absolute top-[-20px] right-[-20px] left-[20px] bottom-[20px] bg-blue-100 rounded-2xl -z-10 opacity-50 transform rotate-3"></div>
                    <div className="absolute top-[-40px] right-[-40px] left-[40px] bottom-[40px] bg-blue-50 rounded-2xl -z-20 opacity-30 transform rotate-6"></div>
                </div>
            </div>
        </section>
    );
}
