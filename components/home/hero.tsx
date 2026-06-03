"use client";

import { useState, useMemo, useActionState } from "react";
import type React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, LockKeyhole, MessageCircle } from "lucide-react";
import Link from "next/link";
import { submitLead } from "@/lib/actions";
import { calculateQuote, type QuoteProgram } from "@/lib/quote";
import { formatCurrency } from "@/lib/utils";
import { whatsappNumber } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function FadeUp({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PremiumSlider({ value, min, max, onChange }: { value: number; min: number; max: number; onChange: (v: number) => void }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="relative h-6 w-full flex items-center">
      <div className="absolute inset-x-0 h-[3px] rounded-full bg-white/10">
        <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary to-accent" style={{ width: `${pct}%` }} />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={5000}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="absolute inset-0 w-full cursor-pointer opacity-0 z-10"
      />
      <div
        className="absolute size-5 rounded-full border-2 border-primary bg-[#111] shadow-lg shadow-primary/30 pointer-events-none"
        style={{ left: `calc(${pct}% - 10px)` }}
      />
    </div>
  );
}

export function Hero({ programs }: { programs: QuoteProgram[] }) {
  const [programId, setProgramId] = useState(programs[0]?.id || "");
  const [points, setPoints] = useState(100000);
  const [showForm, setShowForm] = useState(false);
  const [state, action, pending] = useActionState(submitLead, null);

  const selected = useMemo(
    () => programs.find((p) => p.id === programId) || programs[0],
    [programs, programId]
  );
  const preview = useMemo(
    () => selected ? calculateQuote(selected, points) : null,
    [selected, points]
  );

  const presets = [25000, 50000, 100000, 250000, 500000];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0A0A0A]">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-primary/6 blur-[80px] sm:h-[600px] sm:w-[600px] sm:blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-48 w-48 rounded-full bg-primary/4 blur-[60px] sm:h-96 sm:w-96 sm:blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:gap-12 md:py-20 lg:gap-16 lg:px-8 lg:py-28">

        {/* Left — Headline */}
        <div>
          <FadeUp delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold tracking-[0.15em] uppercase text-primary">
              <span className="size-1.5 animate-pulse rounded-full bg-primary" />
              Private Points Brokerage
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
              Turn loyalty points<br />into cash.
            </h1>
          </FadeUp>

          <div className="mt-5 space-y-1.5">
            {["without marketplaces.", "without the hassle.", "without waiting."].map((line, i) => (
              <FadeUp key={line} delay={0.2 + i * 0.08}>
                <p className="text-2xl font-light text-white/30 sm:text-3xl">{line}</p>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <p className="mt-8 max-w-md text-base leading-7 text-[#A0A0A0]">
              Private point brokerage for hotel rewards, airline miles, and credit card points. We review balances manually and provide verified cash offers within one business day.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/instant-quote"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-black transition-all hover:bg-accent hover:shadow-lg hover:shadow-primary/20 active:scale-[0.97]"
              >
                Get Instant Quote <ArrowRight className="size-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 px-6 text-sm font-semibold text-white/70 transition-all hover:border-white/20 hover:text-white"
              >
                How It Works <ChevronDown className="size-4" />
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="mt-12 flex items-center gap-6 border-t border-white/8 pt-8 text-sm">
              <div>
                <p className="text-lg font-semibold text-white">18+</p>
                <p className="text-[#A0A0A0]">Programs</p>
              </div>
              <div className="h-6 w-px bg-white/8" />
              <div>
                <p className="text-lg font-semibold text-white">2 days</p>
                <p className="text-[#A0A0A0]">Avg. turnaround</p>
              </div>
              <div className="h-6 w-px bg-white/8" />
              <div>
                <p className="text-lg font-semibold text-white">ACH + Zelle</p>
                <p className="text-[#A0A0A0]">Payment methods</p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right — Calculator */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-2xl border border-white/8 bg-[#111] p-4 shadow-2xl shadow-black/50 sm:p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Quote Calculator</p>
                <h2 className="mt-1 text-xl font-semibold text-white">Estimate your payout</h2>
              </div>
              <span className="flex items-center gap-1.5 rounded-full border border-green-500/20 bg-green-500/8 px-3 py-1 text-xs font-semibold text-green-400">
                <span className="size-1.5 animate-pulse rounded-full bg-green-400" />
                Live desk
              </span>
            </div>

            {!state?.ok ? (
              <form action={action} className="mt-6 space-y-5">
                {/* Program selector */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-[#A0A0A0]">Rewards program</label>
                  <div className="relative">
                    <select
                      name="programId"
                      value={programId}
                      onChange={(e) => setProgramId(e.target.value)}
                      className="w-full appearance-none rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                    >
                      {programs.map((p) => (
                        <option key={p.id} value={p.id} className="bg-[#111]">{p.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-[#A0A0A0]" />
                  </div>
                </div>

                {/* Points slider */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-[#A0A0A0]">Points amount</label>
                    <motion.span
                      key={points}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm font-semibold text-white"
                    >
                      {points.toLocaleString()}
                    </motion.span>
                  </div>
                  <PremiumSlider value={points} min={10000} max={1000000} onChange={setPoints} />
                  <div className="flex justify-between text-[0.6rem] text-[#A0A0A0] sm:text-[0.65rem]">
                    <span>10K</span><span>250K</span><span>500K</span><span>1M</span>
                  </div>
                </div>

                {/* Preset amounts */}
                <div className="grid grid-cols-5 gap-1.5">
                  {presets.map((v) => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setPoints(v)}
                      className={`rounded-lg py-2 text-xs font-semibold transition-all ${
                        points === v
                          ? "bg-primary text-black"
                          : "border border-white/8 text-[#A0A0A0] hover:border-primary/30 hover:text-white"
                      }`}
                    >
                      {v >= 1000000 ? "1M" : v >= 100000 ? `${v / 1000}k` : `${v / 1000}k`}
                    </button>
                  ))}
                </div>

                {/* Live estimate */}
                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="flex items-center justify-between">
                    <p className="flex items-center gap-1.5 text-xs font-medium text-[#A0A0A0]">
                      <LockKeyhole className="size-3" /> Indicative range
                    </p>
                    <p className="text-[0.65rem] text-[#A0A0A0]">Not a public formula</p>
                  </div>
                  <motion.p
                    key={`${programId}-${points}`}
                    initial={{ opacity: 0.5, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="mt-2 text-3xl font-semibold tabular-nums text-white"
                  >
                    {preview ? `${formatCurrency(preview.low)} – ${formatCurrency(preview.high)}` : "—"}
                  </motion.p>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                      animate={{ width: `${Math.min(100, Math.max(5, (points / 500000) * 100))}%` }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-[#A0A0A0]">
                    {preview?.belowMinimum ? preview.message : "Submit details for a verified offer from our desk."}
                  </p>
                </div>

                {/* Hidden fields */}
                {selected && (
                  <>
                    <input type="hidden" name="programName" value={selected.name} />
                    <input type="hidden" name="buyRate" value={String(selected.buyRate)} />
                    <input type="hidden" name="sellRate" value={String(selected.sellRate)} />
                    <input type="hidden" name="spread" value={String(selected.spread)} />
                    <input type="hidden" name="minimumPoints" value={selected.minimumPoints} />
                    <input type="hidden" name="pointsAmount" value={points} />
                  </>
                )}

                {/* Contact fields */}
                <div className="grid gap-2.5 sm:grid-cols-3">
                  {[["name", "Name", "text"], ["email", "Email", "email"], ["phone", "Phone", "tel"]].map(([name, placeholder, type]) => (
                    <input
                      key={name}
                      name={name}
                      type={type}
                      placeholder={placeholder}
                      required
                      className="rounded-xl border border-white/8 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-[#A0A0A0]/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-black transition-all hover:bg-accent hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] disabled:opacity-60"
                >
                  {pending ? "Submitting…" : "Request Verified Offer"}
                  {!pending && <ArrowRight className="size-4" />}
                </button>

                {state?.message && !state.ok && (
                  <p className="text-center text-sm text-red-400">{state.message}</p>
                )}
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 space-y-4"
              >
                <div className="rounded-xl border border-green-500/20 bg-green-500/8 p-4 text-center">
                  <p className="text-sm font-semibold text-green-400">Offer request received</p>
                  <p className="mt-1 text-xs text-[#A0A0A0]">Our desk will review and follow up within one business day.</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5 text-center">
                  <p className="text-xs text-[#A0A0A0]">Estimated payout range</p>
                  <p className="mt-2 text-4xl font-semibold text-primary">
                    {formatCurrency(state.quote!.low)} – {formatCurrency(state.quote!.high)}
                  </p>
                  <p className="mt-2 text-xs text-amber-400">This estimate is valid for 24 hours</p>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/8 py-3 text-sm font-semibold text-white transition-all hover:bg-white/5"
                >
                  <MessageCircle className="size-4 text-primary" /> Follow up on WhatsApp
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
