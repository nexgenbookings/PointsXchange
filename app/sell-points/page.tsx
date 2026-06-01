import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CreditCard, Plane } from "lucide-react";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "Sell Points",
  description: "Sell hotel points, airline miles, and credit card rewards through a secure premium brokerage."
};

const types = [
  { label: "Hotel Points",       desc: "Marriott, Hilton, Hyatt, IHG, and more",        icon: Building2 },
  { label: "Airline Miles",      desc: "American, Delta, United, Southwest, and more",   icon: Plane     },
  { label: "Credit Card Rewards",desc: "Amex, Chase, Capital One, Citi, Bilt",           icon: CreditCard},
];

const steps = [
  ["Submit balance",   "Tell us your program and point balance using the quote calculator."],
  ["Receive offer",    "Our desk reviews your balance and sends a verified cash offer."],
  ["Confirm transfer", "Follow the simple transfer instructions at your own pace."],
  ["Get paid",         "Payment via ACH or Zelle — typically within one business day."],
];

export default function SellPointsPage() {
  return (
    <div className="bg-[#0A0A0A]">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Sell Points</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            A private desk for rewards sellers.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#A0A0A0]">
            Convert unused loyalty balances into cash through competitive offers, discreet verification, and fast ACH or Zelle payouts.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/instant-quote" className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-black transition-all hover:bg-accent active:scale-[0.97]">
              Get Instant Quote <ArrowRight className="size-4" />
            </Link>
            <Link href="/supported-programs" className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 px-6 text-sm font-semibold text-white/70 transition-all hover:border-white/20 hover:text-white">
              View Programs
            </Link>
          </div>
        </div>
      </div>

      {/* What we buy */}
      <div className="mx-auto max-w-5xl px-4 py-14 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">What we buy</p>
        <h2 className="mt-2 font-serif text-2xl font-semibold text-white sm:text-3xl">Three categories. All programs.</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {types.map(({ label, desc, icon: Icon }) => (
            <div key={label} className="rounded-2xl border border-white/8 bg-[#111] p-6 transition-all hover:border-primary/20">
              <span className="grid size-10 place-items-center rounded-xl bg-primary/10">
                <Icon className="size-5 text-primary" />
              </span>
              <p className="mt-4 font-semibold text-white">{label}</p>
              <p className="mt-1.5 text-sm text-[#A0A0A0]">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}
      <div className="border-t border-white/8 bg-[#111]">
        <div className="mx-auto max-w-5xl px-4 py-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">The process</p>
          <h2 className="mt-2 font-serif text-2xl font-semibold text-white sm:text-3xl">Four steps to payout.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(([title, desc], i) => (
              <div key={title} className="rounded-2xl border border-white/8 bg-[#0A0A0A] p-5">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-black">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 font-semibold text-white">{title}</p>
                <p className="mt-1.5 text-xs leading-5 text-[#A0A0A0]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTA />
    </div>
  );
}
