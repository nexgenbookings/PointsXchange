"use client";

import { useState, useMemo, useActionState } from "react";
import type React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Loader2, LockKeyhole, MessageCircle, Star } from "lucide-react";
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
        className="absolute size-5 rounded-full border-2 border-primary bg-[#111827] shadow-lg shadow-primary/30 pointer-events-none"
        style={{ left: `calc(${pct}% - 10px)` }}
      />
    </div>
  );
}

export function Hero({ programs }: { programs: QuoteProgram[] }) {
  const [programId, setProgramId] = useState(programs[0]?.id || "");
  const [points, setPoints] = useState(100000);
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
    <section className="relative min-h-screen overflow-hidden bg-[#080C18]">
      {/* Ambient background — warmer, more welcoming */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main warm gold glow — top left */}
        <div className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] sm:h-[700px] sm:w-[700px]" />
        {/* Secondary warm glow — right */}
        <div className="absolute -right-20 top-1/4 h-64 w-64 rounded-full bg-amber-500/8 blur-[80px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]" />
        {/* Bottom accent */}
        <div className="absolute bottom-0 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-primary/6 blur-[80px]" />
        {/* Top border shimmer */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        {/* Subtle grid texture for warmth */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `radial-gradient(circle, #D4AF37 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:gap-12 md:py-20 lg:gap-16 lg:px-8 lg:py-28">

        {/* Left — Headline */}
        <div>
          {/* Trust badge — friendlier than "Private Points Brokerage" */}
          <FadeUp delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-2.5 fill-primary text-primary" />
                ))}
              </span>
              Trusted by sellers across the US
            </div>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4rem]">
              Turn loyalty points<br />into cash.
            </h1>
          </FadeUp>

          {/* Warmer, human sub-lines */}
          <div className="mt-5 space-y-2">
            {[
              { text: "A real person reviews every offer." },
              { text: "Clear pricing, no hidden fees." },
              { text: "Paid within one business day." },
            ].map((item, i) => (
              <FadeUp key={item.text} delay={0.2 + i * 0.08}>
                <div className="flex items-center gap-2.5">
                  <span className="size-1.5 shrink-0 rounded-full bg-primary/70" />
                  <p className="text-lg font-light text-white/70 sm:text-xl">{item.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.4}>
            <p className="mt-8 max-w-md text-base leading-7 text-white/65">
              We buy hotel points, airline miles, and credit card rewards — and we pay fast. Every offer is reviewed by a real person, not an algorithm.
            </p>
          </FadeUp>

          <FadeUp delay={0.5}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/instant-quote"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-black transition-all hover:bg-accent hover:shadow-lg hover:shadow-primary/25 active:scale-[0.97]"
              >
                Get Instant Quote <ArrowRight className="size-4" />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/12 px-6 text-sm font-semibold text-white/70 transition-all hover:border-primary/30 hover:text-white"
              >
                How It Works <ChevronDown className="size-4" />
              </a>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="mt-12 flex items-center gap-0 divide-x divide-white/10 border-t border-white/8 pt-8">
              {[
                { value: "18+", label: "Programs" },
                { value: "1–2 days", label: "Turnaround" },
                { value: "ACH · Zelle", label: "Payment" },
              ].map(({ value, label }) => (
                <div key={label} className="flex-1 px-4 first:pl-0 last:pr-0">
                  <p className="text-base font-semibold text-white sm:text-lg">{value}</p>
                  <p className="mt-0.5 text-xs text-white/45">{label}</p>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* Right — Calculator */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtle warm glow behind card */}
          <div className="absolute -inset-4 rounded-3xl bg-primary/5 blur-2xl" />
          <div className="relative rounded-2xl border border-white/10 bg-[#111827] p-4 shadow-2xl shadow-black/60 ring-1 ring-primary/8 sm:p-6 md:p-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Quote Calculator</p>
                <h2 className="mt-1 text-xl font-semibold text-white">See what your points are worth</h2>
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
                        <option key={p.id} value={p.id} className="bg-[#111827]">{p.name}</option>
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
                  <div className="relative h-3 text-[0.6rem] text-[#A0A0A0] sm:text-[0.65rem]">
                    <span className="absolute left-0">10K</span>
                    <span className="absolute -translate-x-1/2" style={{ left: "24.74%" }}>250K</span>
                    <span className="absolute -translate-x-1/2" style={{ left: "49.49%" }}>500K</span>
                    <span className="absolute -translate-x-1/2" style={{ left: "74.24%" }}>750K</span>
                    <span className="absolute right-0">1M</span>
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
                      {v >= 1000000 ? "1M" : `${v / 1000}k`}
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
                    {preview?.belowMinimum ? preview.message : "This transaction may not meet our minimum requirements. Contact us for a custom review."}
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
                <div className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
                  <p className="mb-2.5 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/35">Your contact details</p>
                  <div className="grid gap-2.5 sm:grid-cols-3">
                    {[
                      { name: "name",  label: "Full name",    type: "text",  placeholder: "Jane Smith"         },
                      { name: "email", label: "Email",        type: "email", placeholder: "jane@example.com"   },
                      { name: "phone", label: "Phone",        type: "tel",   placeholder: "+1 (555) 000-0000"  },
                    ].map(({ name, label, type, placeholder }) => (
                      <label key={name} className="grid gap-1">
                        <span className="text-[0.65rem] font-medium text-white/50">{label}</span>
                        <input
                          name={name}
                          type={type}
                          placeholder={placeholder}
                          required
                          className="h-10 w-full rounded-lg border border-white/10 bg-white/5 px-3 text-sm text-white placeholder:text-white/25 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                <p className="rounded-lg border border-amber-500/15 bg-amber-500/5 px-3 py-2 text-xs leading-5 text-amber-400/70">
                  Note: Selling points may violate your loyalty program&apos;s terms of service.
                </p>

                <button
                  type="submit"
                  disabled={pending}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-black transition-all hover:bg-accent hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] disabled:opacity-60"
                >
                  {pending ? (
                    <><Loader2 className="size-4 animate-spin" /> Submitting…</>
                  ) : (
                    <>Request Verified Offer <ArrowRight className="size-4" /></>
                  )}
                </button>

                {state?.message && !state.ok && (
                  <p className="text-center text-sm text-red-400">{state.message}</p>
                )}

                <p className="text-center text-xs text-[#A0A0A0]/60">No commitment required. We&apos;ll follow up within one business day.</p>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 space-y-4"
              >
                <div className="rounded-xl border border-green-500/20 bg-green-500/8 p-4 text-center">
                  <p className="text-sm font-semibold text-green-400">Request received — thank you!</p>
                  <p className="mt-1 text-xs text-[#A0A0A0]">Our desk will review your balance and follow up within one business day.</p>
                </div>
                <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5 text-center">
                  <p className="text-xs text-[#A0A0A0]">Estimated payout range</p>
                  <p className="mt-2 text-4xl font-semibold text-primary">
                    {formatCurrency(state.quote!.low)} – {formatCurrency(state.quote!.high)}
                  </p>
                  <p className="mt-2 text-xs text-amber-400/80">Valid for 24 hours · Exact offer after desk review</p>
                </div>
                <a
                  href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/8 py-3 text-sm font-semibold text-white transition-all hover:border-primary/20 hover:bg-white/5"
                >
                  <MessageCircle className="size-4 text-primary" /> Chat with us on WhatsApp
                </a>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
