"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0A0A0A]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center lg:px-8 lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-primary"
        >
          Get started
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-4 font-serif text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
        >
          See what your<br />points are worth.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-5 max-w-md text-base text-[#A0A0A0]"
        >
          Receive a verified offer range in seconds. No account required, no commitments.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
        >
          <Link
            href="/instant-quote"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-black transition-all hover:bg-accent hover:shadow-xl hover:shadow-primary/20 active:scale-[0.97]"
          >
            Get Instant Quote <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/supported-programs"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-white/10 px-8 text-sm font-semibold text-white/70 transition-all hover:border-white/20 hover:text-white"
          >
            View Programs
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
