"use client";
import HeaderV2 from "@/components/HeaderV2";
import PricingHero from "@/components/PricingHero";
import PricingPlans from "@/components/PricingPlans";
import PricingTable from "@/components/PricingTable";
import PricingFAQ from "@/components/PricingFAQ";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";

export default function PricingPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main>
                <PricingHero />
                <PricingPlans />
                <PricingTable />
                <PricingFAQ />
                <CtaSectionV2 />
            </main>
            <FooterV2 />
        </div>
    );
}
