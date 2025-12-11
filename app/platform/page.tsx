import HeaderV2 from "@/components/HeaderV2";
import PlatformHero from "@/components/PlatformHero";
import PlatformVideo from "@/components/PlatformVideo";
import PlatformWorkflow from "@/components/PlatformWorkflow";
import PlatformFeatures from "@/components/PlatformFeatures";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";

export default function PlatformPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main>
                <PlatformHero />
                <PlatformVideo />
                <PlatformWorkflow />
                <PlatformFeatures />
                <CtaSectionV2 />
            </main>
            <FooterV2 />
        </div>
    );
}
