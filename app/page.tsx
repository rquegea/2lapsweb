import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Features from "@/components/Features";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Outputs from "@/components/Outputs";
import Comparison from "@/components/Comparison";
import Footer from "@/components/Footer";
import LangText from "@/components/LangText";
import TestimonialQuote from "@/components/TestimonialQuote";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="ambient-overlay" />
      <Header />
      <main>
        <Hero />
        {/* Testimonial destacado */}
        <section aria-label="testimonial" className="mx-auto max-w-4xl px-6 py-12">
          <figure className="text-center">
            <TestimonialQuote />
          </figure>
        </section>
        <Benefits />
        <Features />
        <Services />
        <Outputs />
        <Pricing />

        
        {/* Sección Comparison al final */}
        <Comparison />

        {/* Contact (anchor) al final */}
        <section id="contact" className="mx-auto max-w-6xl px-6 pb-20">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              <LangText k="contact.title" />
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
              <LangText k="contact.description" /> <a className="underline" href="mailto:trucoytrufa@trucoytrufa.es">trucoytrufa@trucoytrufa.es</a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
