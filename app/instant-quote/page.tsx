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
    <div className="relative overflow-hidden bg-[#0A0A0A]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/6 blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-[1fr_1.4fr] md:items-start lg:px-8 lg:py-20">
        <div className="pt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Instant Quote</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Estimate your payout range.
          </h1>
          <p className="mt-5 text-base leading-7 text-[#A0A0A0]">
            Enter your rewards program and points balance. We collect your details so our desk can verify availability and deliver an exact offer within one business day.
          </p>
          <div className="mt-8 space-y-4 border-t border-white/8 pt-8">
            {[
              ["Same-day review", "Offers reviewed within hours of submission"],
              ["Human desk",      "No automated pricing — every offer is manually set"],
              ["ACH or Zelle",    "Fast cash payment once transfer is confirmed"],
            ].map(([title, desc]) => (
              <div key={title} className="flex items-start gap-3">
                <span className="mt-1 size-1.5 shrink-0 rounded-full bg-primary" />
                <div>
                  <p className="text-sm font-semibold text-white">{title}</p>
                  <p className="text-xs text-[#A0A0A0]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <QuoteForm programs={programs} />
      </div>
    </div>
  );
}
