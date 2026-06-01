"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const inputs = [
  { label: "Program",          desc: "Which loyalty program" },
  { label: "Balance Size",     desc: "Total points available" },
  { label: "Market Demand",    desc: "Current buyer activity" },
  { label: "Transfer Friction",desc: "Ease of transfer process" },
  { label: "Risk Review",      desc: "Account standing check" },
];

export function OfferExplainer() {
  return (
    <section className="bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Transparent Pricing</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">How offers are calculated.</h2>
          <p className="mt-3 text-[#A0A0A0]">
            Every offer is individually reviewed. No automated formulas, no black boxes.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          {/* Inputs */}
          <div className="flex flex-1 flex-col gap-2">
            {inputs.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-center justify-between rounded-xl border border-white/8 bg-[#111] px-4 py-3"
              >
                <div>
                  <p className="text-sm font-semibold text-white">{item.label}</p>
                  <p className="text-xs text-[#A0A0A0]">{item.desc}</p>
                </div>
                <div className="size-2 rounded-full bg-primary/60" />
              </motion.div>
            ))}
          </div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center px-4 py-4 lg:py-0"
          >
            <div className="flex flex-col items-center gap-3 lg:flex-row">
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:h-px lg:w-16 lg:bg-gradient-to-r" />
              <div className="grid size-12 place-items-center rounded-full border border-primary/30 bg-primary/10">
                <ArrowRight className="size-5 text-primary lg:rotate-0 rotate-90" />
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent lg:h-px lg:w-16 lg:bg-gradient-to-r" />
            </div>
          </motion.div>

          {/* Output */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-1 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 p-8"
          >
            <div className="text-center">
              <div className="mx-auto grid size-14 place-items-center rounded-full bg-primary text-black">
                <span className="text-xl font-bold">$</span>
              </div>
              <p className="mt-4 text-xl font-semibold text-white">Verified Cash Offer</p>
              <p className="mt-2 text-sm text-[#A0A0A0]">Reviewed by a human desk</p>
              <p className="mt-1 text-sm text-[#A0A0A0]">Paid via ACH or Zelle</p>
              <div className="mt-4 rounded-lg border border-primary/20 bg-primary/8 px-4 py-2 text-xs font-semibold text-primary">
                Within 1 business day
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
