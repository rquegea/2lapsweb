export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  date: string; // ISO
  author: string;
  tags: string[];
  heroImage?: string;
  content: ContentBlock[];
  contentEn?: ContentBlock[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "inteligencia-de-mercado-definitiva",
    title: "2laps: La Inteligencia de Mercado Definitiva para la Era de la IA",
    titleEn: "2laps: The Definitive Market Intelligence for the AI Era",
    excerpt:
      "El nuevo jefe no es el cliente. Es la IA. La forma en que los clientes buscan información y toman decisiones ha cambiado drásticamente.",
    excerptEn:
      "The new boss isn't the client. It's AI. The way clients search for information and make decisions has changed drastically.",
    date: "2025-12-17",
    author: "2laps Research",
    tags: ["Market Intelligence", "AI Era", "Innovation", "Strategy"],
    heroImage: "/blogs/blog1.png",
    content: [
      {
        type: "heading",
        text: "El nuevo jefe no es el cliente. Es la IA.",
      },
      {
        type: "paragraph",
        text: "La forma en que los clientes buscan información y toman decisiones ha cambiado drásticamente. El mercado ha experimentado un 'Turning Point' donde el tradicional Google Search (G Search) está dando paso al AI Mode. La conversación sobre las marcas, competidores y mercado ya no se limita a redes sociales o buscadores, sino que se reparte en múltiples puntos del entorno digital, muchos de ellos invisibles para las herramientas tradicionales.",
      },
      {
        type: "paragraph",
        text: "En este nuevo panorama, la información es masiva, fragmentada e inaccesible, lo que hace que tomar las decisiones correctas, y a tiempo, sea el mayor desafío para las empresas.",
      },
      {
        type: "heading",
        text: "Del lago al océano: la revolución conversacional",
      },
      {
        type: "paragraph",
        text: "Durante años, el Social Listening ha intentado entender al consumidor analizando únicamente redes sociales (el famoso 10% de la huella digital). Ese fragmento, a menudo ruidoso y poco representativo, es solo el lago.",
      },
      {
        type: "paragraph",
        text: "El mercado real, sin embargo, es un océano. 2laps nace para navegar ese océano, ofreciendo Marketing Intelligence for the AI era y permitiendo a las empresas entender su mercado antes que nadie.",
      },
      {
        type: "paragraph",
        text: "Nuestra propuesta es simple y poderosa: Dejar el lago. Empezar a navegar el océano.",
      },
      {
        type: "heading",
        text: "La tecnología que convierte ruido en estrategia",
      },
      {
        type: "paragraph",
        text: "2laps amplía el monitoreo digital al 90% de Internet, cubriendo foros, blogs, noticias, reseñas, videos y fuentes variadas (académicas, financieras, gubernamentales, etc.).",
      },
      {
        type: "paragraph",
        text: "Para evitar sesgos y obtener una visión completa, 2laps utiliza una arquitectura de datos propia y un motor de orquestación inteligente que gestiona dinámicamente un conjunto de LLM's avanzados, incluyendo Gemini, ChatGPT, Claude, Perplexity, DeepSeek y Grok. Al analizar vastos volúmenes de información con el 98% de los LLM's, se garantiza la diversificación de fuentes.",
      },
      {
        type: "paragraph",
        text: "El Motor de Síntesis Estratégica (MSE) sintetiza los resultados, generando Informes Ejecutivos Accionables y un Dashboard para consulta recurrente.",
      },
      {
        type: "quote",
        text: "Sin ruido. Sin alucinaciones. Sin pérdida de tiempo.",
      },
      {
        type: "heading",
        text: "What, So What & Now What: la esencia de la inteligencia accionable",
      },
      {
        type: "paragraph",
        text: "Hoy, informar ya no es suficiente. Las empresas necesitan entender, anticipar y actuar. Por eso, 2laps no solo responde qué está pasando. Responde por qué está pasando y qué debería hacer su empresa a continuación.",
      },
      {
        type: "heading",
        text: "Nuestra propuesta de valor",
      },
      {
        type: "paragraph",
        text: "Nuestra propuesta de valor se fundamenta en cuatro pilares estratégicos:",
      },
      {
        type: "list",
        items: [
          "Ahorro de Tiempo y Coste: Al automatizar la ingesta, preprocesamiento y síntesis, un equipo de 2-4 analistas puede ahorrar entre 100 y 200 horas al mes.",
          "Velocidad de Reacción: Insights actualizados diariamente, listos para tomar decisiones en horas, no semanas. Esto puede mejorar el ROI de marketing en 5–10 puntos porcentuales.",
          "Reducción del Riesgo: Nuestra visión 360º en tiempo real y la validación constante reducen la exposición a lanzamientos fallidos o campañas mal dirigidas.",
          "Visión Estratégica: 2laps permite entender los drivers, barreras y pain points reales de sus clientes, detectar Tendencias y Señales Débiles emergentes, y medir su Cuota de Conversación (SOV) real.",
        ],
      },
      {
        type: "heading",
        text: "¿Listo para entender el mercado antes que nadie?",
      },
      {
        type: "paragraph",
        text: "Descubra el verdadero poder de la Inteligencia del Mercado Conversacional con 2laps. ¡Solicite una demostración hoy mismo y pase de los datos a la acción!",
      },
    ],
    contentEn: [
      {
        type: "heading",
        text: "The new boss isn't the client. It's AI.",
      },
      {
        type: "paragraph",
        text: "The way clients search for information and make decisions has changed drastically. The market has experienced a 'Turning Point' where traditional Google Search (G Search) is giving way to AI Mode. The conversation about brands, competitors, and the market is no longer limited to social networks or search engines, but is distributed across multiple points of the digital environment, many of them invisible to traditional tools.",
      },
      {
        type: "paragraph",
        text: "In this new landscape, information is massive, fragmented, and inaccessible, making making the right decisions, on time, the biggest challenge for companies.",
      },
      {
        type: "heading",
        text: "From the lake to the ocean: the conversational revolution",
      },
      {
        type: "paragraph",
        text: "For years, Social Listening has tried to understand the consumer by analyzing only social networks (the famous 10% of the digital footprint). That fragment, often noisy and unrepresentative, is just the lake.",
      },
      {
        type: "paragraph",
        text: "The real market, however, is an ocean. 2laps was born to navigate that ocean, offering Marketing Intelligence for the AI era and allowing companies to understand their market before anyone else.",
      },
      {
        type: "paragraph",
        text: "Our proposal is simple and powerful: Leave the lake. Start navigating the ocean.",
      },
      {
        type: "heading",
        text: "The technology that turns noise into strategy",
      },
      {
        type: "paragraph",
        text: "2laps expands digital monitoring to 90% of the Internet, covering forums, blogs, news, reviews, and varied sources (academic, financial, governmental, etc.).",
      },
      {
        type: "paragraph",
        text: "To avoid biases and obtain a complete view, 2laps uses a proprietary data architecture and an intelligent orchestration engine that dynamically manages a set of advanced LLMs, including Gemini, ChatGPT, Claude, Perplexity, DeepSeek, and Grok. By analyzing vast volumes of information with 98% of LLMs, source diversification is guaranteed.",
      },
      {
        type: "paragraph",
        text: "The Strategic Synthesis Engine (MSE) synthesizes the results, generating Actionable Executive Reports and a Dashboard for recurring consultation.",
      },
      {
        type: "quote",
        text: "No noise. No hallucinations. No wasted time.",
      },
      {
        type: "heading",
        text: "What, So What & Now What: the essence of actionable intelligence",
      },
      {
        type: "paragraph",
        text: "Today, reporting is no longer enough. Companies need to understand, anticipate, and act. That's why 2laps doesn't just answer what is happening. It answers why it is happening and what your company should do next.",
      },
      {
        type: "heading",
        text: "Our value proposition",
      },
      {
        type: "paragraph",
        text: "Our value proposition is based on four strategic pillars:",
      },
      {
        type: "list",
        items: [
          "Time and Cost Savings: By automating ingestion, preprocessing, and synthesis, a team of 2-4 analysts can save between 100 and 200 hours per month.",
          "Reaction Speed: Daily updated insights, ready for decision-making in hours, not weeks. This can improve marketing ROI by 5–10 percentage points.",
          "Risk Reduction: Our 360º real-time view and constant validation reduce exposure to failed launches or misdirected campaigns.",
          "Strategic Vision: 2laps allows you to understand the real drivers, barriers, and pain points of your customers, detect emerging Trends and Weak Signals, and measure your real Share of Voice (SOV).",
        ],
      },
      {
        type: "heading",
        text: "Ready to understand the market before anyone else?",
      },
      {
        type: "paragraph",
        text: "Discover the true power of Conversational Market Intelligence with 2laps. Request a demo today and go from data to action!",
      },
    ],
  },
];






