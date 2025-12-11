"use client";

interface Brand {
    name: string;
    logo: string;
}

interface SolutionsTrustedProps {
    title?: string;
    brands: Brand[];
}

export default function SolutionsTrusted({ title = "Trusted by industry leaders", brands }: SolutionsTrustedProps) {
    return (
        <section className="bg-white border-b border-zinc-100">
            <div className="container-v2 py-16 text-center">
                <h3
                    className="text-xl md:text-2xl font-medium text-zinc-900 mb-12"
                    style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                >
                    {title}
                </h3>

                <div className="flex flex-wrap justify-center items-center gap-x-12 md:gap-x-20 gap-y-10">
                    {brands.map((brand) => (
                        <div key={brand.name} className="group relative flex items-center justify-center">
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="h-8 md:h-12 w-auto max-w-[180px] object-contain opacity-60 grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
                                onError={(e) => {
                                    const img = e.currentTarget;
                                    img.style.display = "none";
                                    const span = img.parentElement?.querySelector(".fallback-text") as HTMLElement;
                                    if (span) span.style.display = "block";
                                }}
                            />
                            <span
                                style={{ display: "none" }}
                                className="fallback-text text-lg font-medium text-zinc-400 whitespace-nowrap"
                            >
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
