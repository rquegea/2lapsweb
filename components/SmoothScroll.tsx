'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // Un desplazamiento más lento y suave
      duration: 1.0, // extiende la duración de la animación
      easing: (t: number) => 1 - Math.pow(1 - t, 2), // easeOutQuad
      smoothWheel: true,
    });

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      // @ts-ignore - lenis destroy exists
      if (typeof lenis.destroy === 'function') lenis.destroy();
    };
  }, []);

  return null;
}


