import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education Solutions | AI Research Assistant for Institutions",
  description:
    "Empower educational institutions with AI-powered market intelligence. Identify grant opportunities, develop curricula, and forge strategic partnerships with data-driven insights.",
  openGraph: {
    title: "Education Solutions | AI Research Assistant for Institutions",
    description:
      "Empower educational institutions with AI-powered market intelligence. Identify grant opportunities and develop curricula.",
    url: "https://2laps.trucoytrufa.es/solutions/education",
  },
  alternates: {
    canonical: "https://2laps.trucoytrufa.es/solutions/education",
  },
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


