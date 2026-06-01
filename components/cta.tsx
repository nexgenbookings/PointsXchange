import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/lib/content";

export function CTA({ title = "Get a competitive cash offer for your points." }: { title?: string }) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">We Beat Any Offer</p>
          <h2 className="mt-2 max-w-2xl font-serif text-3xl font-semibold md:text-4xl">{title}</h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/instant-quote" className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary px-5 text-sm font-semibold text-black hover:bg-accent">
            Get Instant Quote <ArrowRight className="size-4" />
          </Link>
          <a href={`https://wa.me/${whatsappNumber.replace("+", "")}`} className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/25 px-5 text-sm font-semibold hover:bg-white/10">
            <MessageCircle className="size-4" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
