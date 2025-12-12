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

    // V2 Navigation & Header
    "v2.nav.platform": "Plataforma",
    "v2.nav.platform.main": "La Plataforma 2laps",
    "v2.nav.platform.main.desc": "Explora características, herramientas y flujos de trabajo",
    "v2.nav.platform.origins": "Orígenes de Datos",
    "v2.nav.platform.origins.desc": "Fuentes confiables que potencian insights cruciales",
    "v2.nav.platform.enterprise": "Inteligencia Empresarial",
    "v2.nav.platform.enterprise.desc": "Desbloquea valor de tu contenido interno",
    "v2.nav.solutions": "Soluciones",
    "v2.nav.solutions.fmcg": "FMCG",
    "v2.nav.solutions.fmcg.desc": "Detecta tendencias, analiza competidores, innova más rápido",
    "v2.nav.solutions.education": "Educación",
    "v2.nav.solutions.education.desc": "Acelera el descubrimiento, asegura financiación, mejora el currículo",
    "v2.nav.resources": "Recursos",
    "v2.nav.resources.blog": "Blog",
    "v2.nav.resources.blog.desc": "Últimas noticias e insights",
    "v2.nav.resources.caseStudies": "Casos de Estudio",
    "v2.nav.resources.caseStudies.desc": "Ve cómo otros tienen éxito",
    "v2.nav.resources.webinars": "Webinars",
    "v2.nav.resources.webinars.desc": "Aprende de los expertos",
    "v2.nav.about": "Nosotros",
    "v2.nav.about.story": "Nuestra Historia",
    "v2.nav.about.story.desc": "Por qué construimos 2laps",
    "v2.nav.about.careers": "Carreras",
    "v2.nav.about.careers.desc": "Únete a nuestro equipo",
    "v2.nav.about.contact": "Contacto",
    "v2.nav.about.contact.desc": "Ponte en contacto",
    "v2.nav.pricing": "Precios",
    "v2.nav.login": "Iniciar Sesión",
    "v2.nav.getStarted": "Comenzar Gratis",
    "v2.search.placeholder": "Buscar en 2laps (⌘K / Ctrl+K)",
    "v2.search.noResults": "Sin resultados para",
    "v2.search.close": "Cerrar",

    // V2 Hero
    "v2.hero.title1": "Toma cada decisión con",
    "v2.hero.title2": "la última inteligencia del mercado",
    "v2.hero.description": "Optimiza tu flujo de trabajo con una plataforma de nivel empresarial — diseñada para equipos que necesitan moverse rápido y tomar decisiones confiadas con la inteligencia de mercado más fresca.",
    "v2.hero.cta": "Comenzar gratis",

    // V2 Trusted Brands
    "v2.trusted.title": "La elección de las mejores compañías",

    // V2 Solutions
    "v2.solutions.badge": "Explorar soluciones",
    "v2.solutions.title": "Insights de IA que hablan el lenguaje de tu mercado",
    "v2.solutions.fmcg": "FMCG",
    "v2.solutions.education": "Educación",

    // V2 Platform Description
    "v2.platform.title": "La plataforma de análisis de mercado más exhaustiva, rápida y confiable jamás creada.",

    // V2 Features
    "v2.features.badge": "Características",
    "v2.features.market.title": "Inteligencia de Mercado",
    "v2.features.market.desc": "Obtén una vista completa de tu mercado con agregación de datos en tiempo real. Rastreamos competidores, estrategias de precios y sentimiento del consumidor para que tú no tengas que hacerlo.",
    "v2.features.predictive.title": "Análisis Predictivo",
    "v2.features.predictive.desc": "Anticípate a las tendencias del mercado con modelos de machine learning que analizan patrones históricos y señales emergentes para proyectar movimientos futuros.",
    "v2.features.reporting.title": "Informes Automatizados",
    "v2.features.reporting.desc": "Genera informes personalizados automáticamente con insights accionables. Ahorra horas de trabajo manual y comparte hallazgos clave con tu equipo al instante.",
    "v2.features.benchmarking.title": "Comparación Competitiva",
    "v2.features.benchmarking.desc": "Compara tu rendimiento con la competencia a través de métricas clave. Identifica fortalezas, debilidades y oportunidades de mejora en tiempo real.",

    // V2 New Release
    "v2.newRelease.badge": "Nuevo Lanzamiento",
    "v2.newRelease.title": "Investigación accionable en un solo lugar, con agentes de IA que preparan todo por ti",
    "v2.newRelease.description1": "Centralizamos los datos que tu próxima decisión necesita: fundamentos estandarizados, transcripciones, documentos y noticias—listos para explorar sin saltar entre herramientas.",
    "v2.newRelease.description2": "Nuestros agentes de flujo investigan, sintetizan y entregan resúmenes listos para el comité en segundos. Úsalos para preparación, análisis de ganancias, comparación competitiva o diligencia debida mientras te enfocas en estrategia.",
    "v2.newRelease.preview": "Vista previa disponible pronto",

    // V2 CTA
    "v2.cta.title": "De Datos a",
    "v2.cta.titleHighlight": "Acción",
    "v2.cta.description": "Desarrolla estrategias audaces, aprovecha oportunidades y lidera con claridad y confianza.",
    "v2.cta.button": "Comenzar Gratis",

    // V2 Footer
    "v2.footer.platform": "Plataforma",
    "v2.footer.platform.main": "La Plataforma 2laps",
    "v2.footer.platform.origins": "Orígenes de Datos",
    "v2.footer.platform.enterprise": "Inteligencia Empresarial",
    "v2.footer.solutions": "Soluciones",
    "v2.footer.solutions.fmcg": "FMCG",
    "v2.footer.solutions.education": "Educación",
    "v2.footer.resources": "Recursos",
    "v2.footer.resources.blog": "Blog",
    "v2.footer.resources.caseStudies": "Casos de Estudio",
    "v2.footer.resources.webinars": "Webinars",
    "v2.footer.about": "Nosotros",
    "v2.footer.about.story": "Nuestra Historia",
    "v2.footer.about.careers": "Carreras",
    "v2.footer.about.contact": "Contacto",
    "v2.footer.login": "Iniciar Sesión",
    "v2.footer.legal": "Legal y Cumplimiento",
    "v2.footer.cookies": "Preferencias de Cookies",
    "v2.footer.privacy": "Política de Privacidad",
    "v2.footer.terms": "Términos y Condiciones",
    "v2.footer.copyright": "2laps Inc. 2025. Todos los Derechos Reservados",

    // Data Origins Page
    "dataOrigins.hero.title": "Datos de ",
    "dataOrigins.hero.titleHighlight": "toda Internet",
    "dataOrigins.hero.titleEnd": ", destilados por LLMs",
    "dataOrigins.hero.cta": "Comenzar",
    "dataOrigins.flow.title": "Nuestro flujo de ingesta y orquestación LLM",
    "dataOrigins.flow.description": "Conectamos fuentes distribuidas, normalizamos los datos y los elevamos a un grafo de conocimiento listo para análisis y toma de decisiones.",
    "dataOrigins.tabs.title": "Dónde obtenemos y orquestamos datos",
    "dataOrigins.tabs.description": "Ingestamos fuentes abiertas, medios, redes sociales y tus sistemas internos. Los modelos limpian, normalizan y vinculan entidades para que cada señal llegue contextualizada y lista para decidir.",
    "dataOrigins.tabs.generatedSample": "Muestra generada",
    "dataOrigins.tabs.llmRag": "LLM + RAG",
    
    // Pricing Page
    "pricing.hero.title": "Conecta con nuestro equipo de ventas para precios escalables",
    "pricing.hero.description": "Ofrecemos opciones de suscripción flexibles, desde soluciones empresariales hasta precios por usuario, para ajustarnos a las necesidades de tu organización. Ya seas un equipo pequeño o una operación global, adaptamos nuestros planes para maximizar tu valor.",
    "pricing.form.title": "Conecta con nuestro equipo de ventas para precios escalables",
    "pricing.form.email": "Email empresarial *",
    "pricing.form.phone": "Teléfono *",
    "pricing.form.role": "Rol *",
    "pricing.form.roleSelect": "Selecciona tu rol",
    "pricing.form.roleExecutive": "Ejecutivo",
    "pricing.form.roleManager": "Gerente",
    "pricing.form.roleAnalyst": "Analista",
    "pricing.form.country": "País *",
    "pricing.form.countryUS": "Estados Unidos",
    "pricing.form.countryUK": "Reino Unido",
    "pricing.form.countryES": "España",
    "pricing.form.updates": "Me gustaría recibir actualizaciones y comunicaciones regulares de 2laps.",
    "pricing.form.submit": "Obtener precios",

    // Platform Page
    "platform.hero.title1": "Una plataforma integrada que convierte señales dispersas en ",
    "platform.hero.titleHighlight": "ventaja estratégica",
    "platform.hero.description": "2laps conecta exploración, análisis profundo y storytelling ejecutivo en un solo flujo. Combinamos IA generativa, investigación experta y datos propietarios para que tomes decisiones con contexto y confianza.",
    "platform.hero.cta": "Explorar el nuevo lanzamiento",
    "platform.features.generativeSearch.title": "Búsqueda Generativa",
    "platform.features.generativeSearch.description": "2laps entiende el lenguaje de tu industria, anticipa las preguntas que haría un analista senior y devuelve insights citados en segundos para que puedas decidir sin tener que unir fuentes.",
    "platform.features.deepResearch.title": "Investigación Profunda",
    "platform.features.deepResearch.description": "Accede a transcripciones, presentaciones, prensa y notas internas en una sola vista. Profundiza en empresas, cadenas de valor y geografías sin saltar entre herramientas.",
    "platform.features.monitoring.title": "Monitoreo",
    "platform.features.monitoring.description": "Establece alertas en vivo sobre cuentas clave, tendencias y riesgos. Te notificamos cuando cambian las narrativas del mercado, emergen nuevos competidores o aparece evidencia contradictoria.",
    "platform.features.enterpriseIntelligence.title": "Inteligencia Empresarial",
    "platform.features.enterpriseIntelligence.description": "Conecta de forma segura tus documentos internos con nuestras fuentes externas. Busca, analiza y comparte sin filtración de datos, con controles de acceso y trazabilidad.",
    "platform.features.askPlaceholder": "Pregunta cualquier cosa sobre tu mercado",
    "platform.features.alert": "Alerta",
    "platform.features.alertText": "El Competidor A aumentó +12% en menciones en las últimas 48h tras una actualización de precios. Se recomienda monitorear el sentimiento y preparar líneas de respuesta.",

    // Solutions Page
    "solutions.hero.getStarted": "Comenzar gratis",
    "solutions.hero.interactiveTour": "Tour Interactivo",
    "solutions.hero.thinkingPlaceholder": "Interpretando tu pregunta",
    "solutions.hero.thinking": "Pensando...",
    "solutions.hero.analyzePrompt": "Analiza las tendencias actuales en",
    "solutions.hero.analyzePrompt2": "y cómo la IA está remodelando el panorama competitivo.",

    // Our Story Page
    "ourStory.hero.title1": "Construyendo el futuro de la inteligencia de mercado",
    "ourStory.hero.title2": "para que cada decisión esté guiada por insights",
    "ourStory.hero.description": "Creamos 2laps para resolver un problema universal: la brecha entre datos y decisión. Hoy, empoderamos a las organizaciones líderes del mundo para moverse más rápido que el mercado.",
    "ourStory.carousel.header": "Nuestra Historia",
    "ourStory.carousel.title": "Impacto real en clientes",
    "ourStory.carousel.subtitle": "Resultados recientes con 2laps",
    "ourStory.carousel.cases": "Casos",
    "ourStory.carousel.case": "Caso",
    "ourStory.carousel.viewCase": "Ver caso",
    "ourStory.content.mission": "Creemos que en un mundo ahogado en datos, el activo más valioso es la claridad. Nuestra misión es organizar la información empresarial del mundo y hacerla accionable.",
    "ourStory.content.missionLabel": "Nuestra Misión",
    "ourStory.content.valueProposition": "Propuesta de valor clave",
    "ourStory.content.timeSavings.title": "Ahorro de tiempo/costos",
    "ourStory.content.timeSavings.text": "Automatizamos la ingesta, limpieza y síntesis para liberar 100-200 horas/mes para equipos de 2-4 analistas y reducir costos operativos.",
    "ourStory.content.speedResponse.title": "Velocidad de respuesta",
    "ourStory.content.speedResponse.text": "Insights diarios y conexión cual-cuant para decidir más rápido: potencial de +5-10 puntos porcentuales de ROI de marketing al alinear campañas.",
    "ourStory.content.riskReduction.title": "Reducción de riesgos",
    "ourStory.content.riskReduction.text": "Validación constante y una vista 360 en tiempo real para minimizar lanzamientos fallidos o campañas mal dirigidas, evitando pérdidas de miles de euros.",
    "ourStory.content.strategicVision.title": "Visión estratégica",
    "ourStory.content.strategicVision.text": "Comprensión continua de qué, por qué y hacia dónde se mueve el mercado. Inteligencia accionable que los equipos pueden compartir.",

    // Chatbot Carlos
    "chatbot.name": "Carlos",
    "chatbot.role": "Representante de IA",
    "chatbot.welcomeMessage": "¡Bienvenido de nuevo! Soy Carlos, un Representante de IA en 2Laps. ¿Algo específico sobre lo que tengas curiosidad respecto a nuestra plataforma hoy?",
    "chatbot.bookMeeting": "Reservar una Reunión",
    "chatbot.privacyNotice": "Este chat puede ser grabado para garantía de calidad. Puedes ver nuestra",
    "chatbot.privacyPolicy": "política de privacidad",
    "chatbot.privacyHere": "aquí",
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

    // V2 Navigation & Header
    "v2.nav.platform": "Platform",
    "v2.nav.platform.main": "The 2laps Platform",
    "v2.nav.platform.main.desc": "Explore features, tools, and workflows",
    "v2.nav.platform.origins": "Data Point Origins",
    "v2.nav.platform.origins.desc": "Trusted sources that power crucial insights",
    "v2.nav.platform.enterprise": "Enterprise Intelligence",
    "v2.nav.platform.enterprise.desc": "Unlock value from your internal content",
    "v2.nav.solutions": "Solutions",
    "v2.nav.solutions.fmcg": "FMCG",
    "v2.nav.solutions.fmcg.desc": "Spot trends, analyze competitors, innovate faster",
    "v2.nav.solutions.education": "Education",
    "v2.nav.solutions.education.desc": "Accelerate discovery, secure funding, enhance curriculum",
    "v2.nav.resources": "Resources",
    "v2.nav.resources.blog": "Blog",
    "v2.nav.resources.blog.desc": "Latest news and insights",
    "v2.nav.resources.caseStudies": "Case Studies",
    "v2.nav.resources.caseStudies.desc": "See how others succeed",
    "v2.nav.resources.webinars": "Webinars",
    "v2.nav.resources.webinars.desc": "Learn from the experts",
    "v2.nav.about": "About",
    "v2.nav.about.story": "Our Story",
    "v2.nav.about.story.desc": "Why we built 2laps",
    "v2.nav.about.careers": "Careers",
    "v2.nav.about.careers.desc": "Join our team",
    "v2.nav.about.contact": "Contact",
    "v2.nav.about.contact.desc": "Get in touch",
    "v2.nav.pricing": "Pricing",
    "v2.nav.login": "Log In",
    "v2.nav.getStarted": "Get Started for Free",
    "v2.search.placeholder": "Search 2laps (⌘K / Ctrl+K)",
    "v2.search.noResults": "No results for",
    "v2.search.close": "Close",

    // V2 Hero
    "v2.hero.title1": "Make every decision with",
    "v2.hero.title2": "the market's latest intelligence",
    "v2.hero.description": "Streamline your workflow with an enterprise‑grade platform — designed for teams who need to move quickly and make confident decisions with the freshest market intelligence.",
    "v2.hero.cta": "Get started for free",

    // V2 Trusted Brands
    "v2.trusted.title": "The choice of top companies",

    // V2 Solutions
    "v2.solutions.badge": "Explore solutions",
    "v2.solutions.title": "AI Insights that speak your market's language",
    "v2.solutions.fmcg": "FMCG",
    "v2.solutions.education": "Education",

    // V2 Platform Description
    "v2.platform.title": "The most exhaustive fast and reliable market analysis platform ever.",

    // V2 Features
    "v2.features.badge": "Features",
    "v2.features.market.title": "Market Intelligence",
    "v2.features.market.desc": "Get a complete view of your market with real-time data aggregation. We track competitors, pricing strategies, and consumer sentiment so you don't have to.",
    "v2.features.predictive.title": "Predictive Analytics",
    "v2.features.predictive.desc": "Stay ahead of market trends with machine learning models that analyze historical patterns and emerging signals to project future movements.",
    "v2.features.reporting.title": "Automated Reporting",
    "v2.features.reporting.desc": "Generate custom reports automatically with actionable insights. Save hours of manual work and share key findings with your team instantly.",
    "v2.features.benchmarking.title": "Competitor Benchmarking",
    "v2.features.benchmarking.desc": "Compare your performance against competitors across key metrics. Identify strengths, weaknesses, and opportunities for improvement in real-time.",

    // V2 New Release
    "v2.newRelease.badge": "New Release",
    "v2.newRelease.title": "Actionable research in one place, with AI agents that prep everything for you",
    "v2.newRelease.description1": "We centralize the data your next decision needs: standardized fundamentals, transcripts, filings, and news—ready to explore without jumping between tools.",
    "v2.newRelease.description2": "Our workflow agents investigate, synthesize, and deliver committee-ready summaries in seconds. Use them for ramp-ups, earnings prep, competitive benchmarking, or diligence while you stay focused on strategy.",
    "v2.newRelease.preview": "Preview available soon",

    // V2 CTA
    "v2.cta.title": "From Data to",
    "v2.cta.titleHighlight": "Action",
    "v2.cta.description": "Develop bold strategies, seize opportunities, and lead with clarity and confidence.",
    "v2.cta.button": "Get Started for Free",

    // V2 Footer
    "v2.footer.platform": "Platform",
    "v2.footer.platform.main": "The 2laps Platform",
    "v2.footer.platform.origins": "Data Point Origins",
    "v2.footer.platform.enterprise": "Enterprise Intelligence",
    "v2.footer.solutions": "Solutions",
    "v2.footer.solutions.fmcg": "FMCG",
    "v2.footer.solutions.education": "Education",
    "v2.footer.resources": "Resources",
    "v2.footer.resources.blog": "Blog",
    "v2.footer.resources.caseStudies": "Case Studies",
    "v2.footer.resources.webinars": "Webinars",
    "v2.footer.about": "About",
    "v2.footer.about.story": "Our Story",
    "v2.footer.about.careers": "Careers",
    "v2.footer.about.contact": "Contact",
    "v2.footer.login": "Log In",
    "v2.footer.legal": "Legal & Compliance",
    "v2.footer.cookies": "Cookie Preferences",
    "v2.footer.privacy": "Privacy Policy",
    "v2.footer.terms": "Terms & Conditions",
    "v2.footer.copyright": "2laps Inc. 2025. All Rights Reserved",

    // Data Origins Page
    "dataOrigins.hero.title": "Data from the ",
    "dataOrigins.hero.titleHighlight": "entire Internet",
    "dataOrigins.hero.titleEnd": ", distilled by LLMs",
    "dataOrigins.hero.cta": "Get Started",
    "dataOrigins.flow.title": "Our ingestion and LLM orchestration flow",
    "dataOrigins.flow.description": "We connect distributed sources, normalize the data, and elevate it into a knowledge graph ready for analysis and decision‑making.",
    "dataOrigins.tabs.title": "Where we source and orchestrate data",
    "dataOrigins.tabs.description": "We ingest open sources, media, social, and your internal systems. Models clean, normalize, and link entities so every signal arrives contextualized and decision-ready.",
    "dataOrigins.tabs.generatedSample": "Generated sample",
    "dataOrigins.tabs.llmRag": "LLM + RAG",
    
    // Pricing Page
    "pricing.hero.title": "Connect with our sales team for scalable pricing",
    "pricing.hero.description": "We offer flexible subscription options, from enterprise-wide solutions to per-seat pricing, to fit your organization's needs. Whether you're a small team or a global operation, we tailor our plans to maximize your value.",
    "pricing.form.title": "Connect with our sales team for scalable pricing",
    "pricing.form.email": "Business Email *",
    "pricing.form.phone": "Phone *",
    "pricing.form.role": "Role *",
    "pricing.form.roleSelect": "Select your role",
    "pricing.form.roleExecutive": "Executive",
    "pricing.form.roleManager": "Manager",
    "pricing.form.roleAnalyst": "Analyst",
    "pricing.form.country": "Country *",
    "pricing.form.countryUS": "United States",
    "pricing.form.countryUK": "United Kingdom",
    "pricing.form.countryES": "Spain",
    "pricing.form.updates": "I would like to receive regular updates and communications from 2laps.",
    "pricing.form.submit": "Get pricing",

    // Platform Page
    "platform.hero.title1": "An integrated platform that turns scattered signals into ",
    "platform.hero.titleHighlight": "strategic advantage",
    "platform.hero.description": "2laps connects exploration, deep analysis, and executive storytelling in a single flow. We combine generative AI, expert research, and proprietary data so you make decisions with context and confidence.",
    "platform.hero.cta": "Explore the new release",
    "platform.features.generativeSearch.title": "Generative Search",
    "platform.features.generativeSearch.description": "2laps understands your industry's language, anticipates the questions a senior analyst would ask, and returns cited insights in seconds so you can decide without stitching sources.",
    "platform.features.deepResearch.title": "Deep Research",
    "platform.features.deepResearch.description": "Access transcripts, filings, press, and internal notes in a single view. Deep dive into companies, value chains, and geographies without jumping between tools.",
    "platform.features.monitoring.title": "Monitoring",
    "platform.features.monitoring.description": "Set live alerts on key accounts, trends, and risks. We notify you when market narratives shift, new players emerge, or contradictory evidence shows up.",
    "platform.features.enterpriseIntelligence.title": "Enterprise Intelligence",
    "platform.features.enterpriseIntelligence.description": "Securely connect your internal documents with our external sources. Search, analyze, and share without data leakage, with access controls and traceability.",
    "platform.features.askPlaceholder": "Ask anything about your market",
    "platform.features.alert": "Alert",
    "platform.features.alertText": "Competitor A spiked +12% mention share in the last 48h after a pricing update. Recommend monitoring sentiment and prepping response lines.",

    // Solutions Page
    "solutions.hero.getStarted": "Get started for free",
    "solutions.hero.interactiveTour": "Interactive Tour",
    "solutions.hero.thinkingPlaceholder": "Interpreted your question",
    "solutions.hero.thinking": "Thinking...",
    "solutions.hero.analyzePrompt": "Analyze the current trends in",
    "solutions.hero.analyzePrompt2": "and how AI is reshaping the competitive landscape.",

    // Our Story Page
    "ourStory.hero.title1": "Building the future of market intelligence",
    "ourStory.hero.title2": "so every decision is insight-led",
    "ourStory.hero.description": "We built 2laps to solve a universal problem: the gap between data and decision. Today, we empower the world's leading organizations to move faster than the market.",
    "ourStory.carousel.header": "Our Story",
    "ourStory.carousel.title": "Real impact on clients",
    "ourStory.carousel.subtitle": "Recent results with 2laps",
    "ourStory.carousel.cases": "Cases",
    "ourStory.carousel.case": "Case",
    "ourStory.carousel.viewCase": "View case",
    "ourStory.content.mission": "We believe that in a world drowning in data, the most valuable asset is clarity. Our mission is to organize the world's business information and make it actionable.",
    "ourStory.content.missionLabel": "Our Mission",
    "ourStory.content.valueProposition": "Key value proposition",
    "ourStory.content.timeSavings.title": "Time/cost savings",
    "ourStory.content.timeSavings.text": "We automate ingestion, cleansing, and synthesis to free up 100-200 hours/month for teams of 2-4 analysts and reduce operating costs.",
    "ourStory.content.speedResponse.title": "Speed of response",
    "ourStory.content.speedResponse.text": "Daily insights and qual-quant connection to decide faster: potential of +5-10 percentage points of marketing ROI when aligning campaigns.",
    "ourStory.content.riskReduction.title": "Risk reduction",
    "ourStory.content.riskReduction.text": "Constant validation and a 360-degree real-time view to minimize failed launches or mistargeted campaigns, avoiding losses of thousands of euros.",
    "ourStory.content.strategicVision.title": "Strategic vision",
    "ourStory.content.strategicVision.text": "Continuous understanding of what, why, and where the market is moving. Actionable intelligence that teams can share.",

    // Chatbot Carlos
    "chatbot.name": "Carlos",
    "chatbot.role": "AI Representative",
    "chatbot.welcomeMessage": "Welcome back! I'm Carlos, an AI Representative at 2Laps. Anything specific you're curious about regarding our platform today?",
    "chatbot.bookMeeting": "Book a Meeting",
    "chatbot.privacyNotice": "This chat may be recorded for quality assurance. You can view our",
    "chatbot.privacyPolicy": "privacy policy",
    "chatbot.privacyHere": "here",
  },
};

export function LanguageProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [language, setLanguageState] = useState<SupportedLanguage>("en");

  useEffect(() => {
    if (typeof globalThis.window !== "undefined") {
      const stored = globalThis.localStorage.getItem("lang") as SupportedLanguage | null;
      if (stored === "es" || stored === "en") {
        setLanguageState(stored);
      } else {
        // Default to English if no preference is stored
        setLanguageState("en");
      }
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


