import type { MetadataRoute } from "next";
import { blogPosts, seoPages } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://www.pointsxchange.cc";
  const staticRoutes = ["", "/instant-quote", "/sell-points", "/supported-programs", "/blog", "/faq", "/contact", "/privacy", "/terms"];
  return [
    ...staticRoutes.map((route) => ({ url: `${base}${route}`, lastModified: new Date() })),
    ...seoPages.map((page) => ({ url: `${base}/${page.slug}`, lastModified: new Date() })),
    ...blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date() }))
  ];
}
