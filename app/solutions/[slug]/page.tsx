import HeaderV2 from "@/components/HeaderV2";
import Footer from "@/components/Footer";

export function generateStaticParams() {
    return [
        { slug: 'retail' },
        { slug: 'fmcg' },
        { slug: 'education' },
    ];
}

export default function SolutionPage({ params }: { params: { slug: string } }) {
    return (
        <div className="min-h-screen bg-white font-sans flex flex-col">
            <HeaderV2 />
            <main className="flex-grow">
                {/* Contenido en blanco por ahora */}
            </main>
            <Footer />
        </div>
    );
}
