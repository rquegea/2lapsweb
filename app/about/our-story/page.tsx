"use client";
import HeaderV2 from "@/components/HeaderV2";
import OurStoryHero from "@/components/OurStoryHero";
import OurStoryContent from "@/components/OurStoryContent";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";

export default function OurStoryPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main>
                <OurStoryHero />
                <OurStoryContent />
                <CtaSectionV2 />
            </main>
            <FooterV2 />
        </div>
    );
}
