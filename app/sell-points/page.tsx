import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "Sell Points",
  description: "Sell hotel points, airline miles, and credit card rewards through a secure premium brokerage."
};

export default function SellPointsPage() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 py-16 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Sell Points</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">A premium brokerage process for rewards sellers.</h1>
        <p className="mt-6 text-lg leading-8 text-neutral-700">Points Xchange helps customers convert unused loyalty balances into cash through competitive offers, discreet verification, and fast ACH or Zelle payouts.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {["Hotel points", "Airline miles", "Credit card rewards"].map((item) => <div key={item} className="rounded-md border p-5 font-semibold">{item}</div>)}
        </div>
        <div className="mt-8 flex gap-4">
          <Link href="/instant-quote" className="rounded-md bg-primary px-5 py-3 text-sm font-semibold text-black">Get Instant Quote</Link>
          <Link href="/supported-programs" className="rounded-md border px-5 py-3 text-sm font-semibold">View Programs</Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
