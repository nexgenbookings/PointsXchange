import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Banknote, Clock, Headphones, MessageCircle, ShieldCheck, TrendingUp } from "lucide-react";
import { CTA } from "@/components/cta";
import { QuoteForm } from "@/components/quote-form";
import { Card } from "@/components/ui/card";
import { displayWhatsappNumber, whatsappNumber } from "@/lib/content";
import { getPrograms, getTestimonials } from "@/lib/data";

const trust = [
  ["Payout rails", "ACH · Zelle", Clock],
  ["Transaction review", "Secure desk process", ShieldCheck],
  ["Offer matching", "We Beat Any Offer", TrendingUp],
  ["Private support", "Direct WhatsApp desk", Headphones]
];

const marketNotes = [
  ["Marriott Bonvoy", "Active demand", "+ steady"],
  ["Amex Business Platinum", "Premium card points", "+ strong"],
  ["United MileagePlus", "Airline review", "custom"],
  ["World of Hyatt", "High-value hotel", "+ strong"]
];

export default async function HomePage() {
  const [programs, testimonials] = await Promise.all([getPrograms(), getTestimonials()]);
  const grouped = {
    Hotels: programs.filter((p) => p.category === "HOTEL"),
    Airlines: programs.filter((p) => p.category === "AIRLINE"),
    "Credit Cards": programs.filter((p) => p.category === "CREDIT_CARD")
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#050505] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(212,175,55,0.16),transparent_35%),radial-gradient(circle_at_78%_22%,rgba(244,197,66,0.12),transparent_26rem)]" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8 lg:py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-primary/30 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="size-2 rounded-full bg-primary" />
              Private points brokerage
            </div>
            <h1 className="mt-5 max-w-2xl font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">A premium desk for turning rewards into cash.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg">
              Sell hotel points, airline miles, and credit card rewards through a discreet quote process built around fast review, competitive offers, and ACH or Zelle payouts.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <Link href="/instant-quote" className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-black transition hover:bg-accent">
                Start quote review <ArrowRight className="size-4" />
              </Link>
              <a href={`https://wa.me/${whatsappNumber.replace("+", "")}`} className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/20 px-6 text-sm font-semibold transition hover:bg-white/10">
                <MessageCircle className="size-4" /> WhatsApp desk
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 divide-x divide-white/10 rounded-lg border border-white/10 bg-white/[0.04]">
              <div className="p-4">
                <p className="text-2xl font-semibold text-primary">50+</p>
                <p className="mt-1 text-xs text-neutral-400">minimum profit check</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-semibold text-primary">2</p>
                <p className="mt-1 text-xs text-neutral-400">payment rails</p>
              </div>
              <div className="p-4">
                <p className="text-2xl font-semibold text-primary">1:1</p>
                <p className="mt-1 text-xs text-neutral-400">offer review</p>
              </div>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="hidden space-y-4 lg:block">
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <Image src="/points-xchange-logo.png" alt="Points Xchange" width={160} height={160} className="mx-auto rounded-lg" />
                <p className="mt-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary">Sell points. Unlock value.</p>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">Desk watchlist</p>
                <div className="mt-3 divide-y divide-white/10">
                  {marketNotes.map(([name, status, signal]) => (
                    <div key={name} className="grid grid-cols-[1fr_auto] gap-3 py-3 text-sm">
                      <div>
                        <p className="font-semibold">{name}</p>
                        <p className="text-xs text-neutral-400">{status}</p>
                      </div>
                      <span className="self-center rounded-full border border-primary/30 px-2 py-1 text-xs font-semibold text-primary">{signal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <QuoteForm programs={programs} />
          </div>
        </div>
      </section>

      <section className="border-b bg-[#f7f5ef]">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {trust.map(([label, detail, Icon]) => (
            <div key={label as string} className="flex items-center gap-3 rounded-lg border bg-white p-4">
              <Icon className="size-5 text-primary" />
              <div>
                <p className="text-sm font-semibold">{label as string}</p>
                <p className="text-xs text-muted-foreground">{detail as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">Supported programs</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">Rewards markets we actively review.</h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-neutral-600 lg:justify-self-end">
            The desk reviews program demand, balance size, account details, and available payout rails before giving an exact offer. Public ranges are intentionally indicative.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {Object.entries(grouped).map(([title, items]) => (
            <Card key={title} className="transition hover:-translate-y-1 hover:border-primary/60 hover:shadow-gold">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-2xl font-semibold">{title}</h3>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-black">{items.length} active</span>
              </div>
              <ul className="mt-5 grid gap-2 text-sm text-neutral-700">
                {items.map((program) => <li key={program.slug} className="flex items-center justify-between gap-2 rounded-md border bg-neutral-50 px-3 py-2"><span className="flex items-center gap-2"><Banknote className="size-4 text-primary" /> {program.name}</span><span className="text-xs text-neutral-400">review</span></li>)}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Execution flow</p>
              <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">From estimate to payout.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-neutral-400">A cleaner process for sellers who want numbers quickly without a messy back-and-forth.</p>
          </div>
          <div className="mt-8 grid gap-3 md:grid-cols-5">
            {["Choose your rewards program", "Enter your points amount", "Receive estimated payout range", "Get your exact offer", "Get paid via ACH or Zelle"].map((step, index) => (
              <div key={step} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                <span className="grid size-8 place-items-center rounded-full bg-primary text-sm font-semibold text-black">{index + 1}</span>
                <p className="mt-4 text-sm font-medium leading-6 text-neutral-100">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:py-16 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">Trusted by rewards sellers.</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.id}>
              <p className="text-neutral-700">&ldquo;{item.quote}&rdquo;</p>
              <p className="mt-5 font-semibold">{item.name}</p>
              <p className="text-sm text-muted-foreground">{item.role}</p>
            </Card>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
