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
    <>
      <article className="mx-auto max-w-3xl px-4 py-16 lg:px-8">
        <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{post.title}</h1>
        <p className="mt-5 text-lg leading-8 text-neutral-700">{post.excerpt}</p>
        <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-800">
          {post.content.split("\n\n").map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </article>
      <CTA />
    </>
  );
}
