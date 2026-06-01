import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";
import { getPrograms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Instant Quote Calculator",
  description: "Estimate the cash payout range for hotel points, airline miles, and credit card rewards."
};

export default async function InstantQuotePage() {
  const programs = await getPrograms();
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.8fr_1.2fr] md:items-start lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Instant Quote</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Estimate your payout range.</h1>
        <p className="mt-5 text-neutral-700">Enter your rewards program and points balance. We collect your details before showing detailed results so our team can verify availability and deliver an exact offer.</p>
      </div>
      <QuoteForm programs={programs} />
    </section>
  );
}
