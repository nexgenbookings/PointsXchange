import { PrismaClient } from "@prisma/client";
import { blogPosts, faqs, starterPrograms, testimonials } from "../lib/content";

const prisma = new PrismaClient();

async function main() {
  for (const program of starterPrograms) {
    await prisma.program.upsert({
      where: { slug: program.slug },
      update: program,
      create: program
    });
  }

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: post,
      create: post
    });
  }

  for (const [index, [question, answer]] of faqs.entries()) {
    await prisma.fAQ.upsert({
      where: { id: `faq-${index}` },
      update: { question, answer, category: "General", active: true, order: index },
      create: { id: `faq-${index}`, question, answer, category: "General", active: true, order: index }
    });
  }

  for (const testimonial of testimonials) {
    await prisma.testimonial.upsert({
      where: { id: testimonial.name },
      update: testimonial,
      create: { id: testimonial.name, ...testimonial }
    });
  }
}

main()
  .finally(async () => {
    await prisma.$disconnect();
  });
