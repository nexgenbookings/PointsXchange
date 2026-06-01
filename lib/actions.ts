"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { createAdminSession, clearAdminSession, isAdminAuthenticated } from "@/lib/auth";
import { contactEmail } from "@/lib/content";
import { prisma } from "@/lib/prisma";
import { calculateQuote } from "@/lib/quote";
import { sendLeadEmail } from "@/lib/email";
import { slugify } from "@/lib/utils";

const leadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  programId: z.string().min(1),
  programName: z.string().min(1),
  pointsAmount: z.coerce.number().int().positive(),
  buyRate: z.coerce.number().positive(),
  sellRate: z.coerce.number().positive(),
  spread: z.coerce.number().nonnegative(),
  minimumPoints: z.coerce.number().int().positive()
});

export async function submitLead(_: unknown, formData: FormData) {
  const parsed = leadSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { ok: false, message: "Please complete every field before requesting your quote." };
  const data = parsed.data;
  const quote = calculateQuote({ ...data, name: data.programName, active: true }, data.pointsAmount);

  try {
    await prisma.lead.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        programId: data.programId.length > 12 ? data.programId : undefined,
        programName: data.programName,
        pointsAmount: data.pointsAmount,
        estimatedLow: quote.low,
        estimatedHigh: quote.high
      }
    });
  } catch {
    return { ok: false, message: "We could not store the quote right now. Please contact us directly on WhatsApp." };
  }

  await sendLeadEmail(
    `New quote lead: ${data.programName}`,
    `<h2>New Points Xchange lead</h2><p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone}</p><p><strong>Program:</strong> ${data.programName}</p><p><strong>Points:</strong> ${data.pointsAmount.toLocaleString()}</p><p><strong>Estimate:</strong> $${quote.low.toFixed(0)} - $${quote.high.toFixed(0)}</p><p>${quote.message}</p>`
  );

  revalidatePath("/admin/leads");
  return { ok: true, quote, message: quote.message };
}

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10)
});

export async function submitContact(_: unknown, formData: FormData) {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) return { ok: false, message: "Please include your name, email, and message." };
  try {
    await prisma.contactRequest.create({ data: parsed.data });
    await sendLeadEmail(
      "New Points Xchange contact request",
      `<h2>New contact request</h2><p><strong>Name:</strong> ${parsed.data.name}</p><p><strong>Email:</strong> ${parsed.data.email}</p><p><strong>Phone:</strong> ${parsed.data.phone || ""}</p><p>${parsed.data.message}</p>`
    );
  } catch {
    return { ok: false, message: `Please email us directly at ${contactEmail}.` };
  }
  revalidatePath("/admin/contact-requests");
  return { ok: true, message: "Thanks. Our team will respond shortly." };
}

export async function loginAdmin(_: unknown, formData: FormData) {
  const password = String(formData.get("password") || "");
  if (!process.env.ADMIN_PASSWORD || password !== process.env.ADMIN_PASSWORD) {
    return { ok: false, message: "Invalid admin password." };
  }
  await createAdminSession();
  redirect("/admin");
}

export async function logoutAdmin() {
  await clearAdminSession();
  redirect("/admin");
}

async function requireAdmin() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
}

export async function updateLeadStatus(formData: FormData) {
  await requireAdmin();
  await prisma.lead.update({ where: { id: String(formData.get("id")) }, data: { status: String(formData.get("status")) as never } });
  revalidatePath("/admin/leads");
}

export async function upsertProgram(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const name = String(formData.get("name") || "");
  const buyRate = Number(formData.get("buyRate"));
  const sellRate = Number(formData.get("sellRate"));
  const data = {
    name,
    slug: slugify(name),
    category: String(formData.get("category")) as never,
    buyRate,
    sellRate,
    spread: Math.max(0, sellRate - buyRate),
    minimumPoints: Number(formData.get("minimumPoints")),
    active: formData.get("active") === "on",
    description: String(formData.get("description") || "")
  };
  if (id) await prisma.program.update({ where: { id }, data });
  else await prisma.program.create({ data });
  revalidatePath("/");
  revalidatePath("/admin/rates");
}

export async function deleteProgram(formData: FormData) {
  await requireAdmin();
  await prisma.program.delete({ where: { id: String(formData.get("id")) } });
  revalidatePath("/admin/programs");
}

export async function upsertBlogPost(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const title = String(formData.get("title") || "");
  const data = {
    title,
    slug: slugify(title),
    excerpt: String(formData.get("excerpt") || ""),
    content: String(formData.get("content") || ""),
    published: formData.get("published") === "on"
  };
  if (id) await prisma.blogPost.update({ where: { id }, data });
  else await prisma.blogPost.create({ data });
  revalidatePath("/blog");
  revalidatePath("/admin/blog");
}

export async function deleteBlogPost(formData: FormData) {
  await requireAdmin();
  await prisma.blogPost.delete({ where: { id: String(formData.get("id")) } });
  revalidatePath("/admin/blog");
}

export async function upsertFaq(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const data = {
    question: String(formData.get("question") || ""),
    answer: String(formData.get("answer") || ""),
    category: String(formData.get("category") || "General"),
    order: Number(formData.get("order") || 0),
    active: formData.get("active") === "on"
  };
  if (id) await prisma.fAQ.update({ where: { id }, data });
  else await prisma.fAQ.create({ data });
  revalidatePath("/faq");
}

export async function upsertTestimonial(formData: FormData) {
  await requireAdmin();
  const id = String(formData.get("id") || "");
  const data = {
    name: String(formData.get("name") || ""),
    role: String(formData.get("role") || ""),
    quote: String(formData.get("quote") || ""),
    rating: Number(formData.get("rating") || 5),
    active: formData.get("active") === "on"
  };
  if (id) await prisma.testimonial.update({ where: { id }, data });
  else await prisma.testimonial.create({ data });
  revalidatePath("/");
}
