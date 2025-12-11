"use client";
import Link from "next/link";

const solutions = [
  "FMCG",
  "Education",
];

export default function SolutionsV2() {
  const slugify = (text: string) => text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');

  return (
    <section className="bg-white">
      <div className="container-v2 pt-20 md:pt-24 pb-8 md:pb-10">
        <h2
          className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900"
          style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
        >
          AI Insights that speak your market’s language
        </h2>
        <div className="mt-8 text-sm font-medium uppercase tracking-wide text-zinc-500">
          Explore solutions
        </div>

        <div className="mt-8">
          <ul className="divide-y divide-zinc-200">
            {solutions.map((item) => (
              <li key={item} className="py-5">
                <Link href={`/solutions/${slugify(item)}`} className="group flex justify-between items-center">
                  <span className="relative inline-block text-lg md:text-xl text-zinc-900">
                    {item}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </span>
                  <span aria-hidden className="text-zinc-400 transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


