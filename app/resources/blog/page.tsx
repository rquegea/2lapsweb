import HeaderV2 from "@/components/HeaderV2";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";

export default function BlogPage() {
    return (
        <div className="min-h-screen bg-white font-sans">
            <HeaderV2 />
            <main>
                <section className="pt-32 pb-24 text-center">
                    <div className="container-v2">
                        <h1
                            className="text-5xl md:text-6xl font-medium text-zinc-900 mb-6"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            Blog
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12">
                            Latest news, insights, and trends from the 2laps team.
                        </p>

                        <div className="mt-12">
                            <div className="mx-auto max-w-md rounded-xl border border-zinc-200 bg-white p-8 text-center shadow-sm">
                                <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-zinc-100 grid place-items-center text-zinc-400">
                                    <span className="text-lg">📰</span>
                                </div>
                                <h2 className="text-xl font-semibold text-zinc-800">No hay noticias nuevas</h2>
                                <p className="mt-2 text-sm text-zinc-500">
                                    Vuelve pronto para ver las últimas publicaciones.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <CtaSectionV2 />
            </main>
            <FooterV2 />
        </div>
    );
}
