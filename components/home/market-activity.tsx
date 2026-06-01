"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { QuoteProgram } from "@/lib/quote";
import { formatCurrency } from "@/lib/utils";

type Demand = "High" | "Strong" | "Moderate" | "Active" | "Custom";

const demandMeta: Record<Demand, { color: string; bg: string; bar: string }> = {
  High:     { color: "text-green-400",  bg: "bg-green-500/10",  bar: "bg-green-500" },
  Strong:   { color: "text-green-400",  bg: "bg-green-500/10",  bar: "bg-green-500" },
  Moderate: { color: "text-yellow-400", bg: "bg-yellow-500/10", bar: "bg-yellow-500" },
  Active:   { color: "text-blue-400",   bg: "bg-blue-500/10",   bar: "bg-blue-500" },
  Custom:   { color: "text-[#A0A0A0]",  bg: "bg-white/5",       bar: "bg-white/30" },
};

const demandByCategory: Record<string, Demand> = {
  HOTEL:       "High",
  AIRLINE:     "Active",
  CREDIT_CARD: "Strong",
};

const trendByIndex = [
  { icon: TrendingUp,   label: "+steady",  color: "text-green-400" },
  { icon: TrendingUp,   label: "+strong",  color: "text-green-400" },
  { icon: Minus,        label: "stable",   color: "text-[#A0A0A0]" },
  { icon: TrendingDown, label: "review",   color: "text-yellow-400" },
  { icon: TrendingUp,   label: "+active",  color: "text-green-400" },
  { icon: TrendingUp,   label: "+premium", color: "text-green-400" },
];

export function MarketActivity({ programs }: { programs: QuoteProgram[] }) {
  const display = programs.slice(0, 6);

  return (
    <section className="border-t border-white/8 bg-[#0A0A0A]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Live Desk</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-white sm:text-4xl">Current market activity.</h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#A0A0A0]">
            <span className="size-2 animate-pulse rounded-full bg-green-400" />
            Desk is actively buying
          </div>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {display.map((program, i) => {
            const demand = demandByCategory[program.category || "HOTEL"] ?? "Active";
            const meta = demandMeta[demand];
            const trend = trendByIndex[i % trendByIndex.length];
            const TrendIcon = trend.icon;
            const buyRate = Number(program.buyRate);
            const sellRate = Number(program.sellRate) || buyRate * 1.25;
            const low = buyRate * 0.94;
            const high = buyRate * 1.04;
            const barWidth = Math.min(95, Math.max(30, (buyRate / 0.015) * 100));

            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -2, borderColor: "rgba(212,175,55,0.25)" }}
                className="group rounded-2xl border border-white/8 bg-[#111] p-5 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-semibold text-white">{program.name}</p>
                    <p className="mt-0.5 text-xs capitalize text-[#A0A0A0]">
                      {program.category?.replace("_", " ").toLowerCase()}
                    </p>
                  </div>
                  <span className={`flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${meta.color} ${meta.bg}`}>
                    <span className={`size-1.5 rounded-full ${meta.bar} animate-pulse`} />
                    {demand}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#A0A0A0]">Rate range</p>
                    <div className={`flex items-center gap-1 text-xs font-medium ${trend.color}`}>
                      <TrendIcon className="size-3" />
                      {trend.label}
                    </div>
                  </div>
                  <p className="mt-1 text-lg font-semibold tabular-nums text-white">
                    {formatCurrency(low * 1000)} – {formatCurrency(high * 1000)}
                    <span className="ml-1 text-xs font-normal text-[#A0A0A0]">per 1k pts</span>
                  </p>
                </div>

                <div className="mt-4 h-1 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className={`h-full rounded-full ${meta.bar} opacity-60`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${barWidth}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: i * 0.07 + 0.2 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
