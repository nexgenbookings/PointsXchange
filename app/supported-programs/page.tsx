import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { CTA } from "@/components/cta";
import { getPrograms } from "@/lib/data";

export const metadata: Metadata = {
  title: "Supported Programs",
  description: "Review supported hotel, airline, and credit card rewards programs for Points Xchange quotes."
};

export default async function SupportedProgramsPage() {
  const programs = await getPrograms();
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h1 className="font-serif text-4xl font-semibold sm:text-5xl">Supported Programs</h1>
        <p className="mt-5 max-w-2xl text-neutral-700">Rates, minimums, and active programs are configurable in the admin dashboard.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.slug}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{program.category.replace("_", " ")}</p>
              <h2 className="mt-2 font-serif text-2xl font-semibold">{program.name}</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">{program.description}</p>
              <p className="mt-4 text-sm font-semibold">Minimum: {program.minimumPoints.toLocaleString()} points</p>
            </Card>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
