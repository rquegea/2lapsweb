"use client";

const left = [
  "Investment Banking",
  "Hedge Funds",
  "Private Equity",
  "Asset Management",
  "Consulting",
];
const right = [
  "Life Sciences & Healthcare",
  "Tech, Media, & Telecom",
  "Energy",
  "Industrials",
  "Consumer Goods & Retail",
];

export default function SolutionsV2() {
  return (
    <section className="bg-white">
      <div className="container-v2 pt-20 md:pt-24 pb-8 md:pb-10">
        <h2
          className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900"
          style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
        >
          AI workflows that speak your market’s language
        </h2>
        <div className="mt-8 text-sm font-medium uppercase tracking-wide text-zinc-500">
          Explore solutions
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <ul className="divide-y divide-zinc-200">
            {left.map((item) => (
              <li key={item} className="py-5">
                <a href="#solutions" className="flex justify-between items-center">
                  <span className="text-lg md:text-xl text-zinc-900">{item}</span>
                  <span aria-hidden className="text-zinc-400">→</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="divide-y divide-zinc-200">
            {right.map((item) => (
              <li key={item} className="py-5">
                <a href="#solutions" className="flex justify-between items-center">
                  <span className="text-lg md:text-xl text-zinc-900">{item}</span>
                  <span aria-hidden className="text-zinc-400">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}


