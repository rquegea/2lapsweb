import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FMCG Solutions | Market Intelligence for Consumer Goods",
  description:
    "AI-powered market intelligence platform for FMCG brands. Track competitors, spot trends, analyze consumer sentiment, and accelerate product innovation with real-time insights.",
  openGraph: {
    title: "FMCG Solutions | Market Intelligence for Consumer Goods",
    description:
      "AI-powered market intelligence platform for FMCG brands. Track competitors, spot trends, and analyze consumer sentiment.",
    url: "https://2laps.trucoytrufa.es/solutions/fmcg",
  },
  alternates: {
    canonical: "https://2laps.trucoytrufa.es/solutions/fmcg",
  },
};

export default function FMCGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

