"use client";
import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

type SupportedLanguage = "es" | "en";

type Translations = Record<string, string>;

type LanguageContextValue = {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const TRANSLATIONS: Record<SupportedLanguage, Translations> = {
  es: {
    "nav.features": "Características",
    "nav.pricing": "Precios",
    "nav.services": "Servicios",
    "nav.updates": "Actualizaciones",
    "nav.contact": "Contacto",

    "cta.getStarted": "Comenzar",
    "cta.requestDemo": "Solicitar Demo",

    "hero.badge": "INSIGHTS PROFUNDOS DEL MERCADO CONVERSACIONAL",
    "hero.subheading": "Inteligencia Competitiva Autónoma. Estrategia lista para la acción.",
    "hero.description":
      "Transformamos el ruido del mercado en inteligencia estratégica accionable. Un sistema multi‑AI con 7 analistas virtuales trabajando 24/7 para tu toma de decisiones.",
    "hero.viewServices": "Ver nuestros servicios",
    "hero.listenTitle": "Escucha la conversación de tus clientes en",
    "hero.finalLine": "sobre ti, tu competencia y tu mercado y ponte un paso por delante.",

    "testimonial.founderLabel": "Fundador de ORB AI",
    "testimonial.quote": "Aprovechamos tus datos, entendemos lo que hablan tus clientes, y usamos inteligencia artificial para ayudar a tu marca a destacar del ruido. ¿La mejor parte? También te decimos cómo ejecutarlo.",
    "hero.question": "¿Sabes de qué están hablando tus clientes con las IAs — sobre ti, tu mercado y la competencia?",
    "benefits.badge": "BENEFICIOS",
    "benefits.description": "Partner con una compañía con visión 360 del mercado.",
    "benefits.card1.title": "Analítica en tiempo real",
    "benefits.card1.desc": "Mantente por delante con seguimiento de rendimiento preciso y en tiempo real en base a los cambios diarios de tu cliente y tu mercado.",
    "benefits.card2.title": "Crecimiento impulsado por IA",
    "benefits.card2.desc": "Toma decisiones más inteligentes con insights de negocio precisos y en tiempo real.",
    "benefits.card3.title": "Sincroniza ad-hoc",
    "benefits.card3.desc": "Analiza tu audiencia, tu mercado y competencia a medida, sin planes fijos, para seguir progreso y actualizaciones.",
    "benefits.title": "Por qué elegirnos",
    "chips.fasterInnovation": "Innovación más rápida",
    "chips.automation": "Automatización",
    "chips.dataDriven": "Decisiones basadas en datos",
    "chips.aiInsights": "Insights de IA",
    "chips.scalableSolutions": "Soluciones escalables",

    "contact.title": "Contacto",
    "contact.description": "Agenda una demo o escríbenos:",

    "features.subtitle": "Descubre funciones que simplifican los datos y hacen crecer tu negocio.",
    "features.title": "Todas las funciones en 1 informe",
    "features.badge": "CARACTERÍSTICAS",
    "features.card1.title": "Resumen Ejecutivo Instantáneo",
    "features.card1.desc": "Obtén un resumen ejecutivo rápido que sintetiza la posición de tu marca y la de tus competidores. Ideal para decisiones de alto nivel sin ahogarte en datos.",
    "features.card2.title": "Estrategia Adaptativa",
    "features.card2.desc": "Ajusta tu estrategia según los cambios diarios del mercado y del cliente. Adáptate con agilidad y adelántate a la competencia.",
    "features.card3.title": "Analítica con insights",
    "features.card3.desc": "Obtén insights de datos profundos y en tiempo real con analítica avanzada de IA para guiar estrategias, decisiones y un crecimiento escalable.",
    "features.card4.title": "Reputación y Sentimiento de Marca",
    "features.card4.desc": "Sigue la reputación de tu marca y el sentimiento del consumidor sobre tu marca, productos y competidores — más allá de las redes sociales.",
    
    "pricing.badge": "PRECIOS",
    "pricing.title": "Planes flexibles que se ajustan a tu presupuesto y escala",
    "pricing.monthly": "Mensual",
    "pricing.yearly": "Anual",
    "pricing.discount": "10% menos",
    "pricing.perMonth": "/mes",
    "pricing.perYear": "/año",
    "pricing.popular": "Popular",
    "pricing.customPrice": "Personalizado",
    "pricing.bundleDiscountsCta": "Ofrecemos descuentos para conjuntos de planes",
    
    "services.card1.title": "Consultoría de Estrategia de IA",
    "services.card1.desc": "Obtén un plan detallado y al grano en base a datos reales de tus clientes para crecer tu negocio.",
    "services.card2.title": "Generación de Contenido",
    "services.card2.desc": "Ofrecemos soluciones de creación de contenido y campañas promocionales físicas y online para mejorar tu presencia y percepción en el mercado.",
    "services.card3.title": "Chatbots Potenciados por IA",
    "services.card3.desc": "(BETA) Analiza de manera dinámica la base de datos de las conversaciones con tus clientes para poder tener un análisis exhaustivo de las métricas que tienes a diario.",
    "services.card4.title": "Flujos Automatizados",
    "services.card4.desc": "Automatiza la recolección, análisis, determinación de estrategia y ejecución mediante insights diarias de tu mercado.",

    "services.badge": "SERVICIOS",
    "services.title": "Nuestros servicios impulsados por IA",
    "services.subtitle": "Aprovecha funciones de IA que incrementan el rendimiento de tu negocio.",

    // Comparison
    "comparison.badge": "COMPARATIVA",
    "comparison.title": "Precisión vs Básico",
    "comparison.description": "Mira cómo nuestra IA supera a la competencia en velocidad.",
    "comparison.left.title": "Otros",
    "comparison.right.title": "2laps",
    
    // Process / Outputs
    "process.badge": "PROCESO",
    "process.title": "Simple y Escalable",
    "process.subtitle": "Un proceso transparente de colaboración y feedback",
    "process.card1.title": "Evaluación de Flujos",
    "process.card1.desc": "Comenzamos examinando tu mercado y tus preocupaciones junto a ti para decidir qué conversaciones analizar y cómo extraer el mayor valor del análisis para lograr el mayor impacto.",
    "process.card1.image": "Visual de evaluación",
    "process.card2.title": "Despliegue con Confianza",
    "process.card2.desc": "Desarrollamos la primera presentación de conversaciones analizadas a medida en torno a tus objetivos, garantizando un despliegue seguro y fiable.",
    "process.card2.image": "Visual de despliegue",
    "process.card3.title": "Soporte y Optimización Continua",
    "process.card3.desc": "Tras el despliegue, damos soporte y refinamos tus sistemas de IA para mantener su mejor rendimiento.",
    "process.card3.image": "Visual de optimización",
  },
  en: {
    "nav.features": "Features",
    "nav.pricing": "Pricing",
    "nav.services": "Services",
    "nav.updates": "Updates",
    "nav.contact": "Contact",

    "cta.getStarted": "Get Started",
    "cta.requestDemo": "Request Demo",

    "hero.badge": "DEEP CONVERSATIONAL MARKET INSIGHTS",
    "hero.subheading": "Autonomous Competitive Intelligence. Strategy ready to execute.",
    "hero.description":
      "We turn market noise into actionable strategic intelligence. A multi‑AI system with 7 virtual analysts working 24/7 for your decisions.",
    "hero.viewServices": "See our services",
    "hero.listenTitle": "Listen to what your customers are saying on",
    "hero.finalLine": "about you, your competitors and your market — and stay a step ahead.",

    "testimonial.founderLabel": "Founder of ORB AI",
    "testimonial.quote": "We harness your data, understand your audience and their conversation in the market, and use artificial intelligence to help your brand stand out from the noise. The best part? We also tell you how to execute it.",
    "hero.question": "Do you know what your customers are talking about with AIs — about you, your market, and the competition?",
    "benefits.badge": "BENEFITS",
    "benefits.description": "Partner with a company with a 360 view of the market.",
    "benefits.card1.title": "Real-Time Analytics",
    "benefits.card1.desc": "Stay ahead with accurate, real-time performance tracking based on your customers' and market's daily changes.",
    "benefits.card2.title": "AI-Driven Growth",
    "benefits.card2.desc": "Make smarter moves with accurate, real-time business insights.",
    "benefits.card3.title": "Ad-hoc Sync",
    "benefits.card3.desc": "Analyze your audience, market, and competitors on demand — without fixed plans — to track progress and updates.",
    "benefits.title": "Why Choose Us",
    "chips.fasterInnovation": "Faster Innovation",
    "chips.automation": "Automation",
    "chips.dataDriven": "Data‑Driven Decisions",
    "chips.aiInsights": "AI Insights",
    "chips.scalableSolutions": "Scalable Solutions",

    "contact.title": "Contact",
    "contact.description": "Schedule a demo or email us:",

    "features.subtitle": "Discover features that simplify the data & grow your business.",
    "features.title": "All features in 1 Report",
    "features.badge": "FEATURES",
    "features.card1.title": "Instant Executive Summary",
    "features.card1.desc": "Get a fast executive summary that synthesizes your brand’s position and competitors — perfect for high‑level decision‑making without drowning in data.",
    "features.card2.title": "Adaptive Strategy",
    "features.card2.desc": "Continuously adjust your strategy based on daily market and customer shifts. Adapt quickly and stay ahead of competitors.",
    "features.card3.title": "Insightful Analytics",
    "features.card3.desc": "Gain deep, real-time data insights with advanced AI analytics to guide smarter strategies, decisions, and scalable business growth.",
    "features.card4.title": "Brand Reputation & Sentiment",
    "features.card4.desc": "Track brand reputation and overall consumer sentiment around your brand, products, and competitors — beyond social media.",
    
    "pricing.badge": "PRICING",
    "pricing.title": "Flexible pricing plans that fit your budget & scale",
    "pricing.monthly": "Monthly",
    "pricing.yearly": "Yearly",
    "pricing.discount": "10% off",
    "pricing.perMonth": "/month",
    "pricing.perYear": "/year",
    "pricing.popular": "Popular",
    "pricing.customPrice": "Custom",
    "pricing.bundleDiscountsCta": "We offer discounts for plan bundles",
    
    "services.card1.title": "AI Strategy Consulting",
    "services.card1.desc": "Get a detailed, straight-to-the-point plan based on real customer data to grow your business.",
    "services.card2.title": "Content Generation",
    "services.card2.desc": "We deliver content creation and physical + online promotional campaigns to strengthen your market presence and brand perception.",
    "services.card3.title": "AI-Powered Chatbots",
    "services.card3.desc": "(BETA) Dynamically analyze your customer conversation database to perform an exhaustive analysis of your daily metrics.",
    "services.card4.title": "Automated Workflows",
    "services.card4.desc": "Automate collection, analysis, strategy definition, and execution through daily market insights.",

    "services.badge": "SERVICES",
    "services.title": "Our AI-Driven Services",
    "services.subtitle": "Leverage AI features that boost performance to your business.",

    // Comparison
    "comparison.badge": "COMPARISON",
    "comparison.title": "Precision vs Basic",
    "comparison.description": "See how our AI outperforms competitors with speed.",
    "comparison.left.title": "Others",
    "comparison.right.title": "2laps",
    
    // Process / Outputs
    "process.badge": "PROCESS",
    "process.title": "Simple & Scalable",
    "process.subtitle": "A transparent process of collaboration and feedback",
    "process.card1.title": "Workflow Assessment",
    "process.card1.desc": "We start by examining your market and concerns with you to decide which conversations to analyze and how to extract the most value from the analysis to achieve the greatest impact.",
    "process.card1.image": "Assessment visual",
    "process.card2.title": "Deploy with Confidence",
    "process.card2.desc": "We develop the first tailored presentation of analyzed conversations around your goals, ensuring a safe and reliable deployment.",
    "process.card2.image": "Deployment visual",
    "process.card3.title": "Ongoing Support & Optimization",
    "process.card3.desc": "After deployment, we provide support and refine your AI systems to keep them performing at their best.",
    "process.card3.image": "Optimization visual",
  },
};

export function LanguageProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [language, setLanguageState] = useState<SupportedLanguage>("es");

  useEffect(() => {
    if (typeof globalThis.window !== "undefined") {
      const stored = globalThis.localStorage.getItem("lang") as SupportedLanguage | null;
      if (stored === "es" || stored === "en") {
        setLanguageState(stored);
        return;
      }
      const browserLang = globalThis.navigator.language?.toLowerCase().startsWith("es") ? "es" : "en";
      setLanguageState(browserLang);
    }
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const setLanguage = useCallback((lang: SupportedLanguage) => {
    setLanguageState(lang);
    if (typeof globalThis.window !== "undefined") {
      globalThis.localStorage.setItem("lang", lang);
    }
  }, []);

  const t = useCallback(
    (key: string) => {
      const dict = TRANSLATIONS[language] || {};
      return dict[key] ?? key;
    },
    [language]
  );

  const value = useMemo<LanguageContextValue>(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}


