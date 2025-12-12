import HeaderV2 from "@/components/HeaderV2";
import FooterV2 from "@/components/FooterV2";
import CtaSectionV2 from "@/components/CtaSectionV2";
import { BLOG_POSTS, type BlogPost } from "../posts";
import type { Metadata } from "next";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: "Blog | 2laps" };
  return {
    title: `${post.title} | 2laps`,
    description: post.excerpt,
  };
}

function RenderContent({ post }: { post: BlogPost }) {
  return (
    <div className="prose prose-zinc max-w-none">
      {post.content.map((block) => {
        const key = JSON.stringify(block).slice(0, 60);
        if (block.type === "heading") {
          return (
            <h2 key={`h-${key}`} className="mt-10">
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
  );
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <HeaderV2 />
        <main>
          <section className="pt-40 pb-24">
            <div className="container-v2 text-center">
              <h1 className="text-4xl font-semibold">Post not found</h1>
              <p className="text-zinc-500 mt-2">The content you are looking for does not exist.</p>
            </div>
          </section>
        </main>
        <FooterV2 />
      </div>
    );
  }

  const baseUrl = "https://2laps.trucoytrufa.es";
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${baseUrl}/icons/@2laps-logo.png`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "2laps",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "2laps",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/icons/@2laps-logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/resources/blog/${post.slug}`,
    },
    articleSection: post.tags.join(", "),
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <HeaderV2 />
      <main>
        <article className="pt-28 pb-16">
          <div className="container-v2 max-w-3xl">
            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-primary">{post.tags.join(" • ")}</div>
              <h1
                className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-[1.1] mt-3"
                style={{ fontFamily: '"Switzer", ui-sans-serif, system-ui' }}
              >
                {post.title}
              </h1>
              <div className="mt-3 text-sm text-zinc-500">
                <span>{new Date(post.date).toLocaleDateString()}</span>
                <span className="mx-2">·</span>
                <span>{post.author}</span>
              </div>
            </div>

            {/* Hero placeholder */}
            <div className="mb-10 aspect-[16/9] w-full rounded-xl bg-zinc-100 border border-zinc-200 grid place-items-center text-zinc-400">
              Cover Image
            </div>

            <RenderContent post={post} />
          </div>
        </article>
        <CtaSectionV2 />
      </main>
      <FooterV2 />
    </div>
  );
}






