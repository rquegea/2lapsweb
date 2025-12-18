import HeaderV2 from "@/components/HeaderV2";
import FooterV2 from "@/components/FooterV2";
import { BLOG_POSTS, type BlogPost } from "../posts";
import type { Metadata } from "next";
import BlogPostContent from "@/components/BlogPostContent";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Blog | 2laps" };
  return {
    title: `${post.title} | 2laps`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
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
      <BlogPostContent post={post} />
      <FooterV2 />
    </div>
  );
}







