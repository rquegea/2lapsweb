import type { Metadata } from "next";
import "./globals.css";
import GlobalChatBot from "@/components/GlobalChatBot";
import { LanguageProvider } from "@/components/LanguageProvider";

const baseUrl = "https://2laps.trucoytrufa.es";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "2laps — Conversational Market Intelligence Platform",
    template: "%s | 2laps",
  },
  description:
    "AI-powered market intelligence platform for real-time competitive analysis, sentiment tracking, and strategic decision-making. Trusted by leading FMCG brands and educational institutions.",
  keywords: [
    "market intelligence",
    "competitive intelligence",
    "AI market analysis",
    "sentiment analysis",
    "market research platform",
    "FMCG intelligence",
    "education market insights",
    "automated reporting",
    "predictive analytics",
    "conversational AI",
  ],
  authors: [{ name: "2laps" }],
  creator: "2laps",
  publisher: "2laps",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "2laps",
    title: "2laps — Conversational Market Intelligence Platform",
    description:
      "AI-powered market intelligence platform for real-time competitive analysis, sentiment tracking, and strategic decision-making.",
    images: [
      {
        url: `${baseUrl}/icons/@2laps-logo.png`,
        width: 1200,
        height: 630,
        alt: "2laps - Conversational Market Intelligence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "2laps — Conversational Market Intelligence",
    description:
      "AI-powered market intelligence platform for real-time competitive analysis and strategic decision-making.",
    images: [`${baseUrl}/icons/@2laps-logo.png`],
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: "/icons/@2laps-logo.png?v=3", type: "image/png", sizes: "16x16" },
      { url: "/icons/@2laps-logo.png?v=3", type: "image/png", sizes: "32x32" },
      { url: "/icons/@2laps-logo.png?v=3", type: "image/png", sizes: "48x48" },
      { url: "/icons/@2laps-logo.png?v=3", type: "image/png", sizes: "96x96" },
    ],
    apple: "/icons/@2laps-logo.png?v=3",
    shortcut: "/icons/@2laps-logo.png?v=3",
    other: [
      { rel: "mask-icon", url: "/logo-twolaps.svg?v=2", color: "#111111" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Schemas for GEO Optimization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "2laps",
    legalName: "2laps - Conversational Market Intelligence",
    url: baseUrl,
    logo: `${baseUrl}/icons/@2laps-logo.png`,
    description:
      "Multi-agent AI platform for market analysis, competitive intelligence, and action-ready advisory reports",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Francisco Sancha 4, 2º",
      addressLocality: "Málaga",
      postalCode: "29016",
      addressCountry: "ES",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Sales",
      email: "trucoytrufa@trucoytrufa.es",
      availableLanguage: ["en", "es"],
    },
    sameAs: ["https://www.linkedin.com/company/2laps"],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    name: "2laps",
    image: `${baseUrl}/icons/@2laps-logo.png`,
    url: baseUrl,
    telephone: "",
    email: "trucoytrufa@trucoytrufa.es",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Francisco Sancha 4, 2º",
      addressLocality: "Málaga",
      postalCode: "29016",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.7213",
      longitude: "-4.4214",
    },
    priceRange: "$$",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}#website`,
    url: baseUrl,
    name: "2laps",
    description:
      "AI-powered market intelligence platform for competitive analysis and strategic decision-making",
    publisher: {
      "@id": `${baseUrl}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/resources/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Market Intelligence SaaS Platform",
    provider: {
      "@id": `${baseUrl}#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "2laps Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "SoftwareApplication",
            name: "Market Intelligence Platform",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Competitive Intelligence Consulting",
            serviceType: "Business Consulting",
          },
        },
      ],
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700,800&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600;700&display=swap"
        />
        {/* Fallback explícito para algunos navegadores */}
        <link rel="icon" href="/icons/@2laps-logo.png?v=3" sizes="16x16" type="image/png" />
        <link rel="icon" href="/icons/@2laps-logo.png?v=3" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/@2laps-logo.png?v=3" />
        <link rel="mask-icon" href="/logo-twolaps.svg?v=2" color="#111111" />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          {children}
          <GlobalChatBot />
        </LanguageProvider>
      </body>
    </html>
  );
}
