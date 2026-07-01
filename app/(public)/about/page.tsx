import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Users, DollarSign } from "lucide-react";
import { CTA } from "@/components/cta";

export const metadata: Metadata = {
  title: "About Us",
  description: "Points Xchange is a private points brokerage founded in 2025. Learn who we are and how we operate.",
};

const values = [
  {
    icon: Users,
    title: "Human, not automated",
    desc: "Every offer is reviewed by a real person. We read your balance, check current market demand, and write you a verified number — no bots, no formulas.",
  },
  {
    icon: DollarSign,
    title: "Competitive by design",
    desc: "We built this desk to beat marketplace rates. We have one simple standard: if you find a better offer, bring it to us and we'll match or exceed it.",
  },
  {
    icon: ShieldCheck,
    title: "Discreet and secure",
    desc: "We never ask for your loyalty account login. Transfers are handled through standard program transfer tools, and payment is sent via ACH or Zelle.",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    desc: "Most sellers receive an offer the same day they submit. Once a transfer is confirmed, payment goes out within one business day — no waiting weeks.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#080C18]">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute left-0 bottom-0 h-64 w-64 rounded-full bg-primary/3 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-16 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">About</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            A desk built for<br className="hidden sm:block" /> sellers, not buyers.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/65">
            Points Xchange is a private points brokerage based in the United States. We buy hotel points, airline miles, and credit card rewards directly from individuals — at rates the resale marketplaces can&apos;t match.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:items-start">
          <div className="sticky top-24">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Our story</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-white sm:text-4xl">Why we started.</h2>
            <div className="mt-4 h-px w-12 bg-primary/40" />
          </div>
          <div className="space-y-5 text-base leading-8 text-white/65">
            <p>
              Points Xchange was founded in 2025 by Nosson, a loyalty program enthusiast who grew frustrated watching people leave money on the table. Friends and family would accumulate hundreds of thousands of hotel and airline points — and either let them expire or redeem them for far below their market value.
            </p>
            <p>
              The existing options weren&apos;t good enough. Resale marketplaces take large cuts and pay slow. Facebook groups are filled with fraud risk and tire-kickers. Brokers with big websites often ghost after you submit.
            </p>
            <p>
              So we built something simple: a private desk that responds same-day, makes competitive offers, and pays within one business day. No complicated platform, no account creation, no games. Just a straightforward transaction between two parties.
            </p>
            <p>
              We&apos;ve since helped sellers across the US convert unused loyalty balances into real cash — quickly, cleanly, and at rates they couldn&apos;t find anywhere else.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="border-t border-white/8 bg-[#111827]">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">How we operate</p>
            <h2 className="mt-2 font-serif text-4xl font-semibold text-white sm:text-5xl">What we stand for.</h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/8 bg-[#080C18] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <span className="grid size-10 place-items-center rounded-xl bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </span>
                <p className="mt-4 font-semibold text-white">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="border-t border-white/8 bg-[#080C18]">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[
              "Based in the United States",
              "No login credentials required",
              "ACH & Zelle payments only",
              "Same-day response",
              "We beat any offer",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/50">
                <span className="size-1.5 rounded-full bg-primary/60" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <CTA />
    </div>
  );
}
