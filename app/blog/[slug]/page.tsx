import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CTA } from "@/components/cta";
import { getBlogPosts } from "@/lib/data";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = (await getBlogPosts()).find((item) => item.slug === slug);
  return { title: post?.title || "Blog", description: post?.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = (await getBlogPosts()).find((item) => item.slug === slug);
  if (!post) notFound();
  return (
    <div className="bg-[#0A0A0A]">
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Blog</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-[#A0A0A0]">{post.excerpt}</p>
        </div>
      </div>
      <article className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
        <div className="space-y-6 text-lg leading-8 text-[#A0A0A0]">
          {post.content.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </article>
      <CTA />
    </div>
  );
}
