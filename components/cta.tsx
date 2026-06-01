import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/lib/content";

export function CTA({ title = "Turn your points into cash — faster than you think." }: { title?: string }) {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 -top-32 size-96 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute -bottom-24 right-0 size-80 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <span className="size-1.5 animate-pulse-gold rounded-full bg-primary" />
              We Beat Any Offer
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              Submit your points balance and get a verified cash offer within one business day.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/instant-quote"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-black transition-all duration-150 hover:bg-accent hover:shadow-gold active:scale-[0.97]"
            >
              Get Instant Quote <ArrowRight className="size-4" />
            </Link>
            <a
              href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-semibold transition-all hover:border-white/40 hover:bg-white/8 active:scale-[0.97]"
            >
              <MessageCircle className="size-4" /> WhatsApp desk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
