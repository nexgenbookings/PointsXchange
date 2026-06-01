import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { getFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about selling hotel points, airline miles, and credit card rewards for cash."
};

export default async function FAQPage() {
  const rows = await getFaqs();
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <h1 className="font-serif text-4xl font-semibold sm:text-5xl">Frequently Asked Questions</h1>
        <div className="mt-8 divide-y rounded-lg border bg-white">
          {rows.map((faq) => (
            <details key={faq.id} className="group p-5">
              <summary className="cursor-pointer list-none font-semibold">{faq.question}</summary>
              <p className="mt-3 leading-7 text-neutral-700">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
