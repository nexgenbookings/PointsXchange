import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Building2,
  CheckCircle2,
  CreditCard,
  Headphones,
  MessageCircle,
  Plane,
  ShieldCheck,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { CTA } from "@/components/cta";
import { QuoteForm } from "@/components/quote-form";
import { whatsappNumber } from "@/lib/content";
import { getPrograms, getTestimonials } from "@/lib/data";

const categoryMeta: Record<string, { icon: typeof Building2; color: string; bg: string }> = {
  Hotels:         { icon: Building2,  color: "text-amber-600",  bg: "bg-amber-50" },
  Airlines:       { icon: Plane,      color: "text-sky-600",    bg: "bg-sky-50" },
  "Credit Cards": { icon: CreditCard, color: "text-violet-600", bg: "bg-violet-50" },
};

const processSteps = [
  { n: "01", title: "Choose your program", desc: "Select your hotel, airline, or credit card rewards program." },
  { n: "02", title: "Enter your balance",  desc: "Tell us how many points you're looking to sell." },
  { n: "03", title: "See the range",       desc: "Get an indicative payout range instantly, no sign-up needed." },
  { n: "04", title: "Get your offer",      desc: "Submit contact details and our desk reviews your balance." },
  { n: "05", title: "Get paid",            desc: "Receive cash via ACH or Zelle — typically within 1 business day." },
];

const trustItems = [
  { label: "Same-day review",  detail: "Offers reviewed within hours",  icon: Zap },
  { label: "We beat offers",   detail: "Match any competing quote",     icon: TrendingUp },
  { label: "ACH & Zelle",      detail: "Two fast payout rails",         icon: Banknote },
  { label: "Discreet process", detail: "Private, 1-on-1 desk service",  icon: ShieldCheck },
  { label: "Direct support",   detail: "WhatsApp desk, no bots",        icon: Headphones },
  { label: "Verified payouts", detail: "Every transaction confirmed",   icon: CheckCircle2 },
];

export default async function HomePage() {
  const [programs, testimonials] = await Promise.all([getPrograms(), getTestimonials()]);
  const grouped = {
    Hotels:         programs.filter((p) => p.category === "HOTEL"),
    Airlines:       programs.filter((p) => p.category === "AIRLINE"),
    "Credit Cards": programs.filter((p) => p.category === "CREDIT_CARD"),
  };

  return (
    <>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#050505] text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 -top-40 size-[500px] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute -right-20 top-10 size-72 rounded-full bg-primary/8 blur-[80px]" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:py-16 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8 lg:py-20">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              <span className="size-1.5 animate-pulse-gold rounded-full bg-primary" />
              Private points brokerage
            </div>

            <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[3.4rem]">
              A premium desk for turning rewards{" "}
              <span className="gold-shimmer">into cash.</span>
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-neutral-400">
              Sell hotel points, airline miles, and credit card rewards through a discreet quote process built around fast review, competitive offers, and same-day payouts.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/instant-quote"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-black transition-all duration-150 hover:bg-accent hover:shadow-gold active:scale-[0.97]"
              >
                Start a quote <ArrowRight className="size-4" />
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold text-white transition-all hover:border-white/35 hover:bg-white/8 active:scale-[0.97]"
              >
                <MessageCircle className="size-4" /> WhatsApp desk
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5 border-t border-white/10 pt-8">
              <div className="text-center">
                <p className="text-2xl font-semibold text-primary">18+</p>
                <p className="mt-0.5 text-xs text-neutral-500">programs reviewed</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-semibold text-primary">1:1</p>
                <p className="mt-0.5 text-xs text-neutral-500">personal desk</p>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div className="text-center">
                <p className="text-2xl font-semibold text-primary">ACH</p>
                <p className="mt-0.5 text-xs text-neutral-500">+ Zelle payouts</p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <QuoteForm programs={programs} />
          </div>
        </div>
      </section>

      {/* ─── Trust strip ──────────────────────────────────────────────── */}
      <section className="border-b bg-[#faf8f3]">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {trustItems.map(({ label, detail, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col gap-1.5 rounded-xl border bg-white p-3.5 transition-all duration-200 hover:border-primary/30 hover:shadow-sm"
              >
                <Icon className="size-4 text-primary" />
                <p className="text-xs font-semibold leading-tight">{label}</p>
                <p className="text-[0.7rem] leading-tight text-neutral-500">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Programs ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:py-18 lg:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Active markets</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">Programs we actively buy.</h2>
          </div>
          <Link
            href="/supported-programs"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 transition-colors hover:text-black"
          >
            See all programs
            <ArrowRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {Object.entries(grouped).map(([title, items]) => {
            const meta = categoryMeta[title];
            const Icon = meta.icon;
            return (
              <div key={title} className="hover-lift group rounded-2xl border bg-white p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className={`grid size-9 place-items-center rounded-lg ${meta.bg}`}>
                      <Icon className={`size-4 ${meta.color}`} />
                    </span>
                    <h3 className="font-serif text-xl font-semibold">{title}</h3>
                  </div>
                  <span className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-semibold text-neutral-600">
                    {items.length}
                  </span>
                </div>

                <ul className="mt-5 grid gap-1.5">
                  {items.map((program) => (
                    <li
                      key={program.slug}
                      className="flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-sm transition-colors hover:border-neutral-200 hover:bg-neutral-50"
                    >
                      <span className="font-medium">{program.name}</span>
                      <span className="text-xs text-neutral-400">buying</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/instant-quote"
                  className="mt-4 flex h-9 w-full items-center justify-center gap-1.5 rounded-lg border border-dashed border-neutral-300 text-xs font-semibold text-neutral-500 transition-all hover:border-primary/60 hover:bg-primary/5 hover:text-black"
                >
                  Get offer for {title.toLowerCase()} <ArrowRight className="size-3" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── How it works ─────────────────────────────────────────────── */}
      <section className="bg-[#050505] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-18 lg:px-8">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Simple process</p>
              <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">From balance to cash.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-neutral-400">
              No lengthy back-and-forth. No hidden fees. Just a straight line from your points to your payout.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-5">
            {processSteps.map(({ n, title, desc }, i) => (
              <div
                key={n}
                className="relative rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all duration-200 hover:border-primary/30 hover:bg-white/[0.06]"
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-black">
                  {n}
                </span>
                <p className="mt-4 text-sm font-semibold leading-snug">{title}</p>
                <p className="mt-1.5 text-xs leading-5 text-neutral-500">{desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="absolute -right-1.5 top-[22px] hidden h-px w-3 bg-primary/30 sm:block" />
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/instant-quote"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-black transition-all hover:bg-accent hover:shadow-gold active:scale-[0.97]"
            >
              Start the process <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────────── */}
      {testimonials.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-14 sm:py-18 lg:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">From sellers</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">Trusted by real people.</h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.id} className="hover-lift flex flex-col gap-5 rounded-2xl border bg-white p-7">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`size-3.5 ${s < (item.rating ?? 5) ? "fill-primary text-primary" : "text-neutral-200"}`}
                    />
                  ))}
                </div>
                <p className="flex-1 text-sm leading-6 text-neutral-700">&ldquo;{item.quote}&rdquo;</p>
                <div className="flex items-center gap-3 border-t pt-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/15 text-xs font-bold text-primary">
                    {item.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-xs text-neutral-500">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── Desk status bar ──────────────────────────────────────────── */}
      <section className="border-y bg-[#faf8f3]">
        <div className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Desk status</p>
              <h3 className="mt-1 font-serif text-xl font-semibold sm:text-2xl">
                Currently buying across all major programs.
              </h3>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="size-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-sm font-semibold text-green-700">Desk is live</span>
              <Link
                href="/instant-quote"
                className="ml-3 inline-flex h-9 items-center gap-1.5 rounded-full bg-black px-4 text-xs font-semibold text-white transition-all hover:bg-neutral-800 active:scale-[0.97]"
              >
                Get offer <ArrowRight className="size-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
