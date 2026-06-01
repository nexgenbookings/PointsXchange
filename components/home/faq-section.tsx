"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How quickly do I get paid?",
    a: "Most transactions complete within one business day of the transfer being confirmed. Payment is sent via ACH or Zelle — whichever you prefer.",
  },
  {
    q: "How are offers calculated?",
    a: "Every offer is manually reviewed by our desk. We factor in your specific program, balance size, current market demand, transfer logistics, and account standing. No automated pricing engines.",
  },
  {
    q: "Which programs do you buy?",
    a: "We actively purchase hotel points (Marriott Bonvoy, Hilton Honors, World of Hyatt, IHG, and more), airline miles (American, Delta, United, Southwest, JetBlue, Alaska), and credit card rewards (Amex, Chase, Capital One, Citi, Bilt).",
  },
  {
    q: "Is there any risk to my loyalty account?",
    a: "Selling or transferring loyalty points may violate the terms of service of some programs and could result in account suspension or closure. Points Xchange does not accept any liability for account closures, point forfeitures, or any action taken by a loyalty program against your account. You sell at your own risk and should review your program's terms before proceeding.",
  },
  {
    q: "What payment methods do you offer?",
    a: "We pay via ACH bank transfer or Zelle. Both are fast and secure. ACH typically settles within 1-2 business days; Zelle is often immediate.",
  },
  {
    q: "Is there a minimum balance?",
    a: "Minimums vary by program — generally 25,000–50,000 points. Use the quote calculator to check eligibility for your specific program and balance.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-white/8 bg-[#111]">
      <div className="mx-auto max-w-3xl px-4 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Common questions</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">Frequently asked.</h2>
        </motion.div>

        <div className="mt-10 divide-y divide-white/8">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
              >
                <span className={`text-sm font-semibold transition-colors sm:text-base ${open === i ? "text-white" : "text-white/70"}`}>
                  {faq.q}
                </span>
                <span className={`grid size-6 shrink-0 place-items-center rounded-full border transition-all ${
                  open === i ? "border-primary bg-primary/15 text-primary" : "border-white/15 text-[#A0A0A0]"
                }`}>
                  {open === i ? <Minus className="size-3" /> : <Plus className="size-3" />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm leading-7 text-[#A0A0A0]">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
