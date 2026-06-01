"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

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
  val === "yes"     ? <Check className="size-4 text-green-400" /> :
  val === "partial" ? <Minus className="size-4 text-yellow-400" /> :
                      <X className="size-4 text-white/20" />;

const cols = [
  { key: "px",     label: "PointsXchange", highlight: true  },
  { key: "market", label: "Marketplaces",  highlight: false },
  { key: "fb",     label: "FB Groups",     highlight: false },
] as const;

export function Comparison() {
  return (
    <section className="border-t border-white/8 bg-[#111]">
      <div className="mx-auto max-w-5xl px-4 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Why us</p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">Why sellers choose us.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 overflow-hidden rounded-2xl border border-white/8"
        >
          {/* Header */}
          <div className="grid grid-cols-4 border-b border-white/8 bg-white/[0.02]">
            <div className="p-4" />
            {cols.map((col) => (
              <div
                key={col.key}
                className={`p-4 text-center text-sm font-semibold ${
                  col.highlight
                    ? "border-x border-primary/20 bg-primary/8 text-primary"
                    : "text-[#A0A0A0]"
                }`}
              >
                {col.label}
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
              <div className="p-4 text-sm text-[#A0A0A0]">{row.label}</div>
              {cols.map((col) => (
                <div
                  key={col.key}
                  className={`flex items-center justify-center p-4 ${
                    col.highlight ? "border-x border-primary/10 bg-primary/[0.03]" : ""
                  }`}
                >
                  <Icon val={row[col.key]} />
                </div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
