"use client";
import HeaderV2 from "@/components/HeaderV2";
import ContactSection from "@/components/ContactSection";
import FooterV2 from "@/components/FooterV2";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main>
                <ContactSection />
            </main>
            <FooterV2 />
        </div>
    );
}
