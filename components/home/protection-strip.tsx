"use client";

import { motion } from "framer-motion";
import { KeyRound, ShieldCheck, Banknote } from "lucide-react";

const items = [
  {
    icon: KeyRound,
    title: "We never ask for your login",
    desc: "All transfers go through your loyalty program's standard tools. Your username and password stay with you — always.",
  },
  {
    icon: Banknote,
    title: "Payment before you lose your points",
    desc: "We confirm transfer receipt and send ACH or Zelle payment within one business day. No holding periods, no surprises.",
  },
  {
    icon: ShieldCheck,
    title: "Every transaction is reviewed by a human",
    desc: "No bots, no automated pipelines. A real person on our desk reviews your balance, verifies the transfer, and approves payment.",
  },
];

export function ProtectionStrip() {
  return (
    <section className="relative border-t border-white/8 bg-[#111827]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">How we protect you</p>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-white sm:text-5xl">Safe by design.</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/60">
            Sellers have two real concerns: getting scammed and losing account access. Here&apos;s how we address both.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/8 bg-[#080C18] p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 ring-1 ring-primary/20">
                <Icon className="size-5 text-primary" />
              </span>
              <p className="mt-5 font-semibold text-white">{title}</p>
              <p className="mt-2 text-sm leading-6 text-white/60">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
