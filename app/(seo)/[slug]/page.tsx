import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/cta";
import { seoPages } from "@/lib/content";

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPages.find((item) => item.slug === slug);
  return { title: page?.title || "Sell Points", description: page?.intro };
}

export default async function SeoLandingPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = seoPages.find((item) => item.slug === slug);
  if (!page) notFound();
  return (
    <div className="bg-[#0A0A0A]">
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="mx-auto max-w-5xl px-4 py-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Points Brokerage</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">{page.title} For Cash</h1>
          <p className="mt-6 text-lg leading-8 text-[#A0A0A0]">{page.intro}</p>
        </div>
      </div>
      <section className="mx-auto max-w-5xl px-4 py-14 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {["Competitive quote review", "ACH or Zelle payouts", "Secure transaction support"].map((item) => (
            <div key={item} className="rounded-xl border border-white/8 bg-white/5 p-5 text-sm font-semibold text-white">{item}</div>
          ))}
        </div>
        <div className="mt-10 space-y-5 leading-8 text-[#A0A0A0]">
          <p>Points Xchange helps customers sell {page.program} through a premium, discreet, and market-aware process. Start with an instant estimate, then our desk reviews current demand and your balance to provide an exact offer.</p>
          <p>Public formulas cannot reflect real-time buyer demand, program restrictions, or transaction size. That is why we show an estimated payout range first and follow up with a verified offer after lead capture.</p>
          <p>Customers also use Points Xchange to compare offers. Send us a valid competing offer and, when market conditions allow, we aim to beat it.</p>
        </div>
        <div className="mt-8 flex gap-4">
          <Link href="/instant-quote" className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-black transition-colors hover:bg-accent">Get Instant Quote</Link>
          <Link href="/supported-programs" className="rounded-xl border border-white/8 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">Supported Programs</Link>
        </div>
        <div className="mt-12 rounded-2xl border border-white/8 bg-[#111] p-6">
          <h2 className="font-serif text-2xl font-semibold text-white">FAQs About {page.title}</h2>
          {["Can I get paid quickly?", "Do you offer exact pricing online?", "Can you beat another offer?"].map((question) => (
            <div key={question} className="mt-6 border-t border-white/8 pt-5">
              <h3 className="font-semibold text-white">{question}</h3>
              <p className="mt-2 leading-7 text-[#A0A0A0]">Submit an instant quote or contact the desk. We review every transaction individually for security, payout availability, and competitive market value.</p>
            </div>
          ))}
        </div>
      </section>
      <CTA title={`Ready to ${page.title.toLowerCase()}?`} />
    </div>
  );
}
