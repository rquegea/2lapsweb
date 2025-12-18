"use client";
import Link from "next/link";
import { BLOG_POSTS } from "./posts";
import HeaderV2 from "@/components/HeaderV2";
import CtaSectionV2 from "@/components/CtaSectionV2";
import FooterV2 from "@/components/FooterV2";
import { useLanguage } from "@/components/LanguageProvider";

export default function BlogPage() {
    const { t } = useLanguage();

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
                            {t("blog.title")}
                        </h1>
                        <p className="text-xl text-zinc-600 max-w-2xl mx-auto mb-12">
                            {t("blog.description")}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 text-left">
                            {BLOG_POSTS.map((post) => (
                                <Link href={`/resources/blog/${post.slug}`} key={post.slug} className="group block h-full">
                                    <article className="flex flex-col h-full rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-zinc-300">
                                        {post.heroImage ? (
                                            <div className="aspect-[16/9] w-full bg-zinc-100 overflow-hidden relative">
                                                <img
                                                    src={post.heroImage}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        ) : (
                                            <div className="aspect-[16/9] w-full bg-zinc-100 grid place-items-center text-zinc-300">
                                                <span className="text-4xl">📄</span>
                                            </div>
                                        )}
                                        <div className="p-6 flex flex-col flex-1">
                                            <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-3">
                                                {post.tags[0]}
                                                <span className="text-zinc-300">•</span>
                                                <span className="text-zinc-500 font-normal">{new Date(post.date).toLocaleDateString()}</span>
                                            </div>
                                            <h2 className="text-xl font-medium text-zinc-900 mb-3 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h2>
                                            <p className="text-zinc-600 text-sm line-clamp-3 mb-4 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center text-sm font-medium text-primary mt-auto">
                                                Read article <span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
                <CtaSectionV2 />
            </main>
            <FooterV2 />
        </div>
    );
}
