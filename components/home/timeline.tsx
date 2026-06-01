"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Choose Program",
    short: "Select your rewards program",
    detail: "Select the loyalty program you want to sell — hotel, airline, or credit card. We support 18+ programs across all major brands.",
  },
  {
    n: "02",
    title: "Verify Balance",
    short: "Confirm your points balance",
    detail: "Share your account balance with our desk. We review the points, account status, and transfer eligibility before making an offer.",
  },
  {
    n: "03",
    title: "Receive Offer",
    short: "Get a verified cash offer",
    detail: "Our desk sends a verified cash offer based on current market demand and your specific balance. No automated formulas.",
  },
  {
    n: "04",
    title: "Accept Terms",
    short: "Review and agree",
    detail: "Review the offer terms, transfer instructions, and payment method. Accept when you're ready — no pressure.",
  },
  {
    n: "05",
    title: "Get Paid",
    short: "Cash via ACH or Zelle",
    detail: "Once the transfer is confirmed, payment is sent via ACH or Zelle. Most transactions complete within one business day.",
  },
];

export function ProcessTimeline() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="how-it-works" className="bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">The process</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">From balance to payout.</h2>
          </div>
          <p className="max-w-sm text-sm text-[#A0A0A0]">Hover each step to learn more. Most transactions complete within one business day.</p>
        </motion.div>

        {/* Desktop horizontal timeline */}
        <div className="mt-12 hidden lg:block">
          <div className="relative flex items-start gap-4">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-6 h-px bg-white/8" />
            <motion.div
              className="absolute left-0 top-6 h-px bg-gradient-to-r from-primary to-primary/20"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {steps.map((step, i) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative flex-1"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
              >
                {/* Step dot */}
                <div className={`relative z-10 mx-auto flex size-12 items-center justify-center rounded-full border transition-all duration-200 ${
                  active === i
                    ? "border-primary bg-primary text-black shadow-lg shadow-primary/30"
                    : "border-white/15 bg-[#111] text-white"
                }`}>
                  <span className="text-sm font-bold">{step.n}</span>
                </div>

                <div className="mt-4 px-2 text-center">
                  <p className={`text-sm font-semibold transition-colors ${active === i ? "text-white" : "text-white/70"}`}>
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs text-[#A0A0A0]">{step.short}</p>

                  <AnimatePresence>
                    {active === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-3 overflow-hidden rounded-xl border border-primary/20 bg-primary/5 p-3 text-left"
                      >
                        <p className="text-xs leading-5 text-[#A0A0A0]">{step.detail}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="mt-8 space-y-3 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              onClick={() => setActive(active === i ? null : i)}
              className="cursor-pointer rounded-2xl border border-white/8 bg-[#111] p-4"
            >
              <div className="flex items-center gap-4">
                <span className={`grid size-10 shrink-0 place-items-center rounded-full text-sm font-bold transition-all ${
                  active === i ? "bg-primary text-black" : "border border-white/15 text-white"
                }`}>
                  {step.n}
                </span>
                <div>
                  <p className="font-semibold text-white">{step.title}</p>
                  <p className="text-xs text-[#A0A0A0]">{step.short}</p>
                </div>
              </div>
              <AnimatePresence>
                {active === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 overflow-hidden pl-14 text-sm leading-6 text-[#A0A0A0]"
                  >
                    {step.detail}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
