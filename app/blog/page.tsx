import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPosts } from "@/lib/data";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides to points values, selling rewards, and comparing cash offers."
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
      <h1 className="font-serif text-4xl font-semibold sm:text-5xl">Points Xchange Blog</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug}>
            <h2 className="font-serif text-2xl font-semibold"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p className="mt-3 text-sm leading-6 text-neutral-700">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-5 inline-block text-sm font-semibold text-primary">Read article</Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
