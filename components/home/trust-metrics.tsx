"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { prefix: "$", value: 2.8, suffix: "M+", label: "Balances Reviewed", decimals: 1 },
  { prefix: "",  value: 18,  suffix: "+",  label: "Programs Purchased", decimals: 0 },
  { prefix: "",  value: 98,  suffix: "%",  label: "Offer Acceptance Rate", decimals: 0 },
  { prefix: "",  value: 1,   suffix: " day", label: "Average Payout Time", decimals: 0 },
];

function CountUp({ end, prefix = "", suffix = "", decimals = 0, duration = 2 }: {
  end: number; prefix?: string; suffix?: string; decimals?: number; duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const ms = duration * 1000;
    const frame = () => {
      const p = Math.min((Date.now() - start) / ms, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));
      if (p < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }, [inView, end, duration, decimals]);

  return (
    <span ref={ref}>
      {prefix}{decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString()}{suffix}
    </span>
  );
}

export function TrustMetrics() {
  return (
    <section className="border-y border-white/8 bg-[#111]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-primary"
        >
          By the numbers
        </motion.p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                <CountUp end={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
              </p>
              <p className="mt-2 text-sm text-[#A0A0A0]">{m.label}</p>
              <div className="mx-auto mt-3 h-px w-8 bg-primary/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
