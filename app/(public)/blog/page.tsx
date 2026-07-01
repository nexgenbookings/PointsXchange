import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getBlogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog",
  description: "Guides to points values, selling rewards, and comparing cash offers."
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <div className="bg-[#080C18]">
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Insights</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">Points Xchange Blog</h1>
          <p className="mt-3 text-[#A0A0A0]">Guides to maximizing points value, understanding market rates, and selling rewards for cash.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const wordCount = post.content.split(/\s+/).length;
            const readTime = Math.max(1, Math.ceil(wordCount / 200));
            return (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative rounded-2xl border border-white/8 bg-[#111827] p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="absolute left-0 top-4 bottom-4 w-0.5 rounded-full bg-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
              <div className="flex items-center gap-2">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Article</p>
                <span className="text-white/20">·</span>
                <p className="text-xs text-white/40">{readTime} min read</p>
              </div>
              <h2 className="mt-3 font-serif text-xl font-semibold leading-snug text-white transition-colors group-hover:text-primary/90">
                {post.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/60 line-clamp-3">{post.excerpt}</p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read article <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
