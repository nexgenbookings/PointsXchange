"use client";

import { motion } from "framer-motion";
import { Minus } from "lucide-react";

type Val = "yes" | "no" | "partial";

const rows: { label: string; px: Val; market: Val; fb: Val }[] = [
  { label: "Human review on every offer",  px: "yes",     market: "no",      fb: "no"      },
  { label: "Same-day response",            px: "yes",     market: "partial", fb: "no"      },
  { label: "Fraud protection",             px: "yes",     market: "partial", fb: "no"      },
  { label: "ACH / Zelle payment",          px: "yes",     market: "no",      fb: "no"      },
  { label: "Verified pricing",             px: "yes",     market: "no",      fb: "no"      },
  { label: "No account required",          px: "yes",     market: "no",      fb: "partial" },
  { label: "Direct support",              px: "yes",     market: "no",      fb: "partial" },
];

const Icon = ({ val }: { val: Val }) =>
  val === "yes" ? (
    <span className="flex size-5 items-center justify-center rounded-full bg-green-500/15 ring-1 ring-green-500/40">
      <svg className="size-3 text-green-400" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </span>
  ) : val === "partial" ? (
    <span className="flex size-5 items-center justify-center rounded-full bg-yellow-500/10 ring-1 ring-yellow-500/30">
      <Minus className="size-3 text-yellow-400" />
    </span>
  ) : (
    <span className="flex size-5 items-center justify-center rounded-full bg-white/5">
      <svg className="size-3 text-white/20" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
  );

const cols = [
  { key: "px",     label: "PointsXchange", highlight: true  },
  { key: "market", label: "Marketplaces",  highlight: false },
  { key: "fb",     label: "FB Groups",     highlight: false },
] as const;

export function Comparison() {
  return (
    <section className="border-t border-white/8 bg-[#111827]">
      <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Why us</p>
          <h2 className="mt-2 font-serif text-4xl font-semibold text-white sm:text-5xl">Why sellers choose us.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 overflow-x-auto rounded-2xl border border-white/8"
        >
          <div className="min-w-[480px]">
            {/* Header */}
            <div className="grid grid-cols-4 border-b border-white/8 bg-white/[0.02]">
              <div className="p-3 sm:p-4" />
              {cols.map((col) => (
                <div
                  key={col.key}
                  className={`p-3 text-center text-xs font-semibold sm:p-4 sm:text-sm ${
                    col.highlight
                      ? "border-x border-primary/20 bg-primary/8 text-primary"
                      : "text-white/60"
                  }`}
                >
                  {col.label}
                  {col.highlight && (
                    <span className="ml-2 inline-block rounded-full bg-primary px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-black">Best Value</span>
                  )}
                </div>
              ))}
            </div>

            {/* Rows */}
            {rows.map((row, i) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="grid grid-cols-4 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors"
              >
                <div className="p-3 text-xs text-white/60 sm:p-4 sm:text-sm">{row.label}</div>
                {cols.map((col) => (
                  <div
                    key={col.key}
                    className={`flex items-center justify-center p-3 sm:p-4 ${
                      col.highlight ? "border-x border-primary/10 bg-primary/[0.03]" : ""
                    }`}
                  >
                    <Icon val={row[col.key]} />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
