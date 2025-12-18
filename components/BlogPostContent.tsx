"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { BlogPost } from "@/app/resources/blog/posts";
import CtaSectionV2 from "@/components/CtaSectionV2";

export default function BlogPostContent({ post }: { post: BlogPost }) {
    const { language } = useLanguage();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Avoid hydration mismatch by rendering default (es) until mounted.
    // Actually, for content, it's better to show something.
    // If we show default, then switch, it flickers.
    // But if we don't handle hydration, we get error.
    // Best practice: Render default, then update.

    const isEn = mounted && language === "en";

    const title = (isEn && post.titleEn) ? post.titleEn : post.title;
    // For excerpt, we don't display it in body typically, but checking anyway
    const content = (isEn && post.contentEn) ? post.contentEn : post.content;

    return (
        <main>
            <article className="pt-28 pb-16">
                <div className="container-v2 max-w-3xl">
                    <div className="mb-6">
                        <div className="text-xs font-bold uppercase tracking-wider text-primary">
                            {post.tags.join(" • ")}
                        </div>
                        <h1
                            className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-[1.1] mt-3"
                            style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
                        >
                            {title}
                        </h1>
                        <div className="mt-3 text-sm text-zinc-500">
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                            <span className="mx-2">·</span>
                            <span>{post.author}</span>
                        </div>
                    </div>

                    {post.heroImage ? (
                        <div className="mb-10 aspect-[16/9] w-full rounded-xl bg-zinc-100 border border-zinc-200 overflow-hidden">
                            <img
                                src={post.heroImage}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ) : (
                        <div className="mb-10 aspect-[16/9] w-full rounded-xl bg-zinc-100 border border-zinc-200 grid place-items-center text-zinc-400">
                            Cover Image
                        </div>
                    )}

                    <div className="prose prose-zinc max-w-none">
                        {content.map((block, index) => {
                            const key = JSON.stringify(block).slice(0, 60) + index;
                            if (block.type === "heading") {
                                return (
                                    <h2
                                        key={`h-${key}`}
                                        className="font-sans text-3xl md:text-4xl font-medium mt-12 mb-6 text-zinc-900 leading-tight"
                                    >
                                        {block.text}
                                    </h2>
                                );
                            }
                            if (block.type === "paragraph") {
                                return <p key={`p-${key}`}>{block.text}</p>;
                            }
                            if (block.type === "quote") {
                                return <blockquote key={`q-${key}`}>{block.text}</blockquote>;
                            }
                            if (block.type === "list") {
                                return (
                                    <ul key={`l-${key}`}>
                                        {block.items.map((it) => (
                                            <li key={`li-${it}`}>{it}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            return null;
                        })}
                    </div>

                    <div className="mt-16 pt-8 border-t border-zinc-200">
                        <div className="bg-zinc-50 rounded-2xl p-8 md:p-12 text-center">
                            <h3 className="font-sans text-2xl md:text-3xl font-medium text-zinc-900 mb-4">
                                {isEn ? "Ready to go from data to action?" : "¿Listo para pasar de los datos a la acción?"}
                            </h3>
                            <p className="text-zinc-600 mb-8 max-w-xl mx-auto">
                                {isEn
                                    ? "Discover how 2laps can transform your market intelligence into a real competitive advantage."
                                    : "Descubra cómo 2laps puede transformar su inteligencia de mercado en ventaja competitiva real."}
                            </p>
                            <a
                                href="https://calendly.com/trucoytrufa/demo-2laps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
                            >
                                {isEn ? "Request a Demo" : "Solicitar una Demo"}
                            </a>
                        </div>
                    </div>
                </div>
            </article>
            <CtaSectionV2 />
        </main>
    );
}
