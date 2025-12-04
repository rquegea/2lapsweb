"use client";
import HeaderV2 from "@/components/HeaderV2";
import HeroV2 from "@/components/HeroV2";
import TrustedV2 from "@/components/TrustedV2";
import SolutionsV2 from "@/components/SolutionsV2";
import SourcesV2 from "@/components/SourcesV2";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function V2() {
  const [showSplash, setShowSplash] = useState(true);
  const [hideSplash, setHideSplash] = useState(false);
  const [revealUnderline, setRevealUnderline] = useState(false);

  useEffect(() => {
    // dispara el subrayado un poco antes de ocultar
    const underlineId = window.setTimeout(() => {
      setRevealUnderline(true);
    }, 700);
    const id = window.setTimeout(() => {
      setHideSplash(true);
      const id2 = window.setTimeout(() => {
        setShowSplash(false);
      }, 400);
      return () => window.clearTimeout(id2);
    }, 1400);
    return () => {
      window.clearTimeout(id);
      window.clearTimeout(underlineId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {showSplash && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-400 ${hideSplash ? "opacity-0" : "opacity-100"
            }`}
        >
          <div
            className="text-2xl md:text-4xl text-zinc-900 font-medium"
            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
          >
            <span>Understand</span> the{" "}
            <span className="relative inline-block">
              <span>market</span>
              {/* CAMBIO: Color del subrayado actualizado */}
              <span
                className={`absolute left-0 -bottom-1 h-[3px] bg-[#Bc4a52] transition-all duration-300 ${revealUnderline ? "w-full" : "w-0"
                  }`}
                aria-hidden="true"
              />
            </span>{" "}
            before anyone else.
          </div>
        </div>
      )}
      {!showSplash && <HeaderV2 />}
      <main className="py-16">
        {!showSplash && (
          <>
            <HeroV2 />
            <TrustedV2 />
            <SolutionsV2 />
            <SourcesV2 />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}