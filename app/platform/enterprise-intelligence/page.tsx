"use client";
import HeaderV2 from "@/components/HeaderV2";
import FooterV2 from "@/components/FooterV2";
import EnterpriseIntelligenceExplainer from "@/components/EnterpriseIntelligenceExplainer";

export default function EnterpriseIntelligencePage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main className="pb-24">
                <EnterpriseIntelligenceExplainer />
            </main>
            <FooterV2 />
        </div>
    );
}
