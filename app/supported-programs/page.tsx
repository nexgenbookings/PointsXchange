import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CreditCard, Plane } from "lucide-react";
import { CTA } from "@/components/cta";
import { getPrograms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Supported Programs",
  description: "Review supported hotel, airline, and credit card rewards programs for Points Xchange quotes."
};

const categoryMeta: Record<string, { icon: typeof Building2; label: string; color: string }> = {
  HOTEL:       { icon: Building2,  label: "Hotel",       color: "text-amber-400"  },
  AIRLINE:     { icon: Plane,      label: "Airline",     color: "text-sky-400"    },
  CREDIT_CARD: { icon: CreditCard, label: "Credit Card", color: "text-violet-400" },
};

export default async function SupportedProgramsPage() {
  const programs = await getPrograms();
  const grouped = {
    HOTEL:       programs.filter((p) => p.category === "HOTEL"),
    AIRLINE:     programs.filter((p) => p.category === "AIRLINE"),
    CREDIT_CARD: programs.filter((p) => p.category === "CREDIT_CARD"),
  };

  return (
    <div className="bg-[#0A0A0A]">
      {/* Header */}
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
          <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Active Programs</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">Programs we actively buy.</h1>
          <p className="mt-4 max-w-2xl text-[#A0A0A0]">
            Rates and minimums are set by our desk and updated regularly. Submit a quote request to get a verified offer for your specific balance.
          </p>
        </div>
      </div>

      {/* Programs by category */}
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="space-y-12">
          {Object.entries(grouped).map(([cat, items]) => {
            const meta = categoryMeta[cat];
            const Icon = meta.icon;
            return (
              <div key={cat}>
                <div className="flex items-center gap-3 border-b border-white/8 pb-4">
                  <span className="grid size-8 place-items-center rounded-lg bg-white/5">
                    <Icon className={`size-4 ${meta.color}`} />
                  </span>
                  <h2 className="font-serif text-xl font-semibold text-white">{meta.label} Programs</h2>
                  <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-[#A0A0A0]">{items.length}</span>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((program) => (
                    <div key={program.slug} className="group rounded-2xl border border-white/8 bg-[#111] p-5 transition-all hover:border-primary/20">
                      <div className="flex items-start justify-between">
                        <h3 className="font-semibold text-white">{program.name}</h3>
                        <span className="rounded-full border border-green-500/20 bg-green-500/8 px-2 py-0.5 text-[0.65rem] font-semibold text-green-400">buying</span>
                      </div>
                      {program.description && (
                        <p className="mt-2 text-xs leading-5 text-[#A0A0A0]">{program.description}</p>
                      )}
                      <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                        <p className="text-xs text-[#A0A0A0]">Min: <span className="font-semibold text-white">{program.minimumPoints.toLocaleString()} pts</span></p>
                        <Link href="/instant-quote" className="text-xs font-semibold text-primary transition-colors hover:text-accent">
                          Get offer →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CTA />
    </div>
  );
}
