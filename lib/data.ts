import type { Program } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { blogPosts, faqs, starterPrograms, testimonials } from "@/lib/content";

type SerializableProgram = Omit<Program, "buyRate" | "sellRate" | "spread"> & {
  buyRate: number;
  sellRate: number;
  spread: number;
};

function normalizeProgram(program: Program): SerializableProgram {
  return {
    ...program,
    buyRate: Number(program.buyRate),
    sellRate: Number(program.sellRate),
    spread: Number(program.spread)
  };
}

export async function getPrograms() {
  if (!process.env.DATABASE_URL) {
    return starterPrograms.map((p) => ({ ...p, id: p.slug, active: true, createdAt: new Date(), updatedAt: new Date() }));
  }
  try {
    const programs = await prisma.program.findMany({ where: { active: true }, orderBy: [{ category: "asc" }, { name: "asc" }] });
    return programs.length ? programs.map(normalizeProgram) : starterPrograms.map((p) => ({ ...p, id: p.slug, active: true, createdAt: new Date(), updatedAt: new Date() }));
  } catch {
    return starterPrograms.map((p) => ({ ...p, id: p.slug, active: true, createdAt: new Date(), updatedAt: new Date() }));
  }
}

export async function getAllProgramsForAdmin() {
  if (!process.env.DATABASE_URL) {
    return starterPrograms.map((p) => ({ ...p, id: p.slug, active: true, createdAt: new Date(), updatedAt: new Date() }));
  }
  try {
    return (await prisma.program.findMany({ orderBy: [{ category: "asc" }, { name: "asc" }] })).map(normalizeProgram);
  } catch {
    return starterPrograms.map((p) => ({ ...p, id: p.slug, active: true, createdAt: new Date(), updatedAt: new Date() }));
  }
}

export async function getBlogPosts() {
  if (!process.env.DATABASE_URL) {
    return blogPosts.map((p) => ({ ...p, id: p.slug, published: true, createdAt: new Date(), updatedAt: new Date() }));
  }
  try {
    const posts = await prisma.blogPost.findMany({ where: { published: true }, orderBy: { createdAt: "desc" } });
    return posts.length ? posts : blogPosts.map((p) => ({ ...p, id: p.slug, published: true, createdAt: new Date(), updatedAt: new Date() }));
  } catch {
    return blogPosts.map((p) => ({ ...p, id: p.slug, published: true, createdAt: new Date(), updatedAt: new Date() }));
  }
}

export async function getFaqs() {
  if (!process.env.DATABASE_URL) {
    return faqs.map(([question, answer], index) => ({ id: question, question, answer, category: "General", active: true, order: index, createdAt: new Date(), updatedAt: new Date() }));
  }
  try {
    const rows = await prisma.fAQ.findMany({ where: { active: true }, orderBy: [{ order: "asc" }, { createdAt: "asc" }] });
    return rows.length ? rows : faqs.map(([question, answer], index) => ({ id: question, question, answer, category: "General", active: true, order: index, createdAt: new Date(), updatedAt: new Date() }));
  } catch {
    return faqs.map(([question, answer], index) => ({ id: question, question, answer, category: "General", active: true, order: index, createdAt: new Date(), updatedAt: new Date() }));
  }
}

export async function getTestimonials() {
  if (!process.env.DATABASE_URL) {
    return testimonials.map((t) => ({ ...t, id: t.name, active: true, createdAt: new Date(), updatedAt: new Date() }));
  }
  try {
    const rows = await prisma.testimonial.findMany({ where: { active: true }, orderBy: { createdAt: "desc" } });
    return rows.length ? rows : testimonials.map((t) => ({ ...t, id: t.name, active: true, createdAt: new Date(), updatedAt: new Date() }));
  } catch {
    return testimonials.map((t) => ({ ...t, id: t.name, active: true, createdAt: new Date(), updatedAt: new Date() }));
  }
}
