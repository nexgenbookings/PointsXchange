import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogCTA() {
  return (
    <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Get started</p>
      <h3 className="mt-2 font-serif text-2xl font-semibold text-white sm:text-3xl">
        Ready to turn your points into cash?
      </h3>
      <p className="mt-3 text-sm leading-7 text-[#A0A0A0]">
        Get a verified offer range in under 60 seconds. No account required, no commitments — just a real number from our desk.
      </p>
      <Link
        href="/instant-quote"
        className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-black transition-all hover:bg-accent hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]"
      >
        Get Instant Quote <ArrowRight className="size-4" />
      </Link>
    </div>
  );
}
