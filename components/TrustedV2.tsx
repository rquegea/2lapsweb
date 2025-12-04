"use client";

export default function TrustedV2() {
  return (
    <section className="bg-white">
      <div className="container-v2 py-16 md:py-24 text-center">
        <h2
          className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900"
          style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
        >
          Trusted by 6,000+ of the world’s largest enterprises
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-3 md:grid-cols-6 place-items-center text-zinc-500">
          <span className="text-lg md:text-xl">Pfizer</span>
          <span className="text-lg md:text-xl">Microsoft</span>
          <span className="text-lg md:text-xl">J.P.Morgan</span>
          <span className="text-lg md:text-xl">PG&amp;E</span>
          <span className="text-lg md:text-xl">Gladstone</span>
          <span className="text-lg md:text-xl">Verano</span>
        </div>
      </div>
    </section>
  );
}




