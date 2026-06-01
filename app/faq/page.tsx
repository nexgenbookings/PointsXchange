import type { Metadata } from "next";
import { CTA } from "@/components/cta";
import { FAQSection } from "@/components/home/faq-section";
import { getFaqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers about selling hotel points, airline miles, and credit card rewards for cash."
};

export default async function FAQPage() {
  // FAQSection has its own built-in questions — DB FAQs shown below if available
  const rows = await getFaqs();
  return (
    <div className="bg-[#0A0A0A]">
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">FAQ</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">Frequently asked questions.</h1>
        </div>
      </div>

      <FAQSection />

      {rows.length > 0 && (
        <div className="border-t border-white/8 bg-[#0A0A0A]">
          <div className="mx-auto max-w-3xl px-4 py-14 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">More questions</p>
            <div className="mt-6 divide-y divide-white/8">
              {rows.map((faq) => (
                <details key={faq.id} className="group py-5">
                  <summary className="cursor-pointer list-none font-semibold text-white/80 hover:text-white">{faq.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-[#A0A0A0]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      )}

      <CTA />
    </div>
  );
}
