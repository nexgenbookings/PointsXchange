"use client";

import { useMemo, useState, useActionState } from "react";
import { ArrowRight, Building2, Calculator, CheckCircle2, CreditCard, LockKeyhole, Plane, Sparkles } from "lucide-react";
import { submitLead } from "@/lib/actions";
import { calculateQuote, type QuoteProgram } from "@/lib/quote";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

type Props = { programs: QuoteProgram[] };

const categories = [
  { label: "All",     value: "ALL",         icon: Sparkles  },
  { label: "Hotels",  value: "HOTEL",       icon: Building2 },
  { label: "Airlines",value: "AIRLINE",     icon: Plane     },
  { label: "Cards",   value: "CREDIT_CARD", icon: CreditCard },
];

const presets = [25000, 50000, 100000, 250000];

export function QuoteForm({ programs }: Props) {
  const [category, setCategory] = useState("ALL");
  const [programId, setProgramId] = useState(programs[0]?.id || "");
  const [pointsAmount, setPointsAmount] = useState(50000);
  const [state, action, pending] = useActionState(submitLead, null);

  const filteredPrograms = useMemo(
    () => category === "ALL" ? programs : programs.filter((p) => p.category === category),
    [category, programs]
  );

  const selected = useMemo(
    () => filteredPrograms.find((p) => p.id === programId) || filteredPrograms[0] || programs[0],
    [filteredPrograms, programId, programs]
  );

  const preview = selected ? calculateQuote(selected, pointsAmount || 0) : null;
  const progress = Math.min(100, Math.max(6, (pointsAmount / Math.max(selected?.minimumPoints || 25000, 1)) * 55));

  function chooseCategory(value: string) {
    setCategory(value);
    const next = value === "ALL" ? programs[0] : programs.find((p) => p.category === value);
    if (next?.id) setProgramId(next.id);
  }

  if (state?.ok && state.quote) {
    return (
      <div className="quote-desk rounded-2xl p-6 text-black sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 className="size-5" />
          </span>
          <div>
            <p className="font-semibold">Offer submitted</p>
            <p className="text-sm text-muted-foreground">Our desk will review and follow up shortly.</p>
          </div>
        </div>
        <div className="mt-6 rounded-xl bg-black p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-neutral-400">Estimated payout range</p>
          <p className="mt-2 text-3xl font-semibold text-primary">
            {formatCurrency(state.quote.low)} – {formatCurrency(state.quote.high)}
          </p>
          <p className="mt-2 text-xs text-neutral-500">Exact offer sent to your email after desk review.</p>
        </div>
        {state.message && (
          <p className="mt-3 text-sm font-medium text-green-700">{state.message}</p>
        )}
      </div>
    );
  }

  return (
    <div className="quote-desk rounded-2xl p-5 text-black sm:p-6">
      {/* Header */}
      <div className="flex items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-black text-primary">
          <Calculator className="size-5" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-primary">Private Offer Desk</p>
          <h2 className="font-serif text-xl font-semibold leading-tight sm:text-2xl">Estimate your payout</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">Choose a program, set a balance, get a range.</p>
        </div>
        <div className="hidden shrink-0 rounded-xl border bg-white/80 px-3 py-2 text-right text-xs sm:block">
          <p className="font-semibold text-green-700">Live desk</p>
          <p className="text-muted-foreground">ACH · Zelle</p>
        </div>
      </div>

      <form action={action} className="mt-5 grid gap-4">
        {/* Category tabs */}
        <div className="grid grid-cols-4 gap-1.5 rounded-xl border bg-neutral-100/80 p-1">
          {categories.map(({ label, value, icon: Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => chooseCategory(value)}
              className={`flex h-9 items-center justify-center gap-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                category === value
                  ? "bg-black text-primary shadow-sm"
                  : "text-neutral-500 hover:bg-white hover:text-black hover:shadow-sm"
              }`}
            >
              <Icon className="size-3.5" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>

        {/* Program selector */}
        <label className="grid gap-1.5 text-sm font-medium">
          Rewards program
          <Select
            name="programId"
            value={programId}
            onChange={(e) => setProgramId(e.target.value)}
            required
          >
            {filteredPrograms.map((program) => (
              <option key={program.id} value={program.id}>{program.name}</option>
            ))}
          </Select>
        </label>

        {/* Points input */}
        <label className="grid gap-1.5 text-sm font-medium">
          Points amount
          <Input
            name="pointsAmount"
            type="number"
            min={1000}
            step={1000}
            value={pointsAmount}
            onChange={(e) => setPointsAmount(Number(e.target.value))}
            required
          />
        </label>

        {/* Preset amounts */}
        <div className="grid grid-cols-4 gap-2">
          {presets.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setPointsAmount(value)}
              className={`rounded-lg border py-2 text-xs font-semibold transition-all duration-150 active:scale-[0.97] ${
                pointsAmount === value
                  ? "border-primary bg-primary/12 text-black shadow-sm"
                  : "bg-white text-neutral-600 hover:border-primary/50 hover:bg-primary/5"
              }`}
            >
              {value >= 100000 ? `${value / 1000}k` : value.toLocaleString()}
            </button>
          ))}
        </div>

        {/* Hidden fields */}
        {selected && (
          <>
            <input type="hidden" name="programName"    value={selected.name} />
            <input type="hidden" name="buyRate"        value={String(selected.buyRate)} />
            <input type="hidden" name="sellRate"       value={String(selected.sellRate)} />
            <input type="hidden" name="spread"         value={String(selected.spread)} />
            <input type="hidden" name="minimumPoints"  value={selected.minimumPoints} />
          </>
        )}

        {/* Live preview */}
        <div className="rounded-xl border bg-white p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="flex items-center gap-1.5 text-sm font-semibold">
              <LockKeyhole className="size-3.5 text-primary" /> Indicative range
            </p>
            <p className="text-[0.65rem] font-medium text-neutral-400">Not a public formula</p>
          </div>
          <p className="mt-2 text-2xl font-semibold tabular-nums sm:text-3xl">
            {preview ? `${formatCurrency(preview.low)} – ${formatCurrency(preview.high)}` : "Select a program"}
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-spring"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2.5 text-xs leading-5 text-muted-foreground">
            {preview?.belowMinimum
              ? preview.message
              : "Exact offer requires contact details so our desk can verify your balance."}
          </p>
        </div>

        {/* Contact fields */}
        <div className="grid gap-2.5 sm:grid-cols-3">
          <Input name="name"  placeholder="Your name"  required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="phone" placeholder="Phone" required />
        </div>

        <Button type="submit" disabled={pending} className="gap-2 rounded-xl">
          {pending ? "Submitting…" : "Request Verified Offer"}
          {!pending && <ArrowRight className="size-4" />}
        </Button>

        {state?.message && !state.ok && (
          <p className="text-sm font-medium text-red-600">{state.message}</p>
        )}
      </form>
    </div>
  );
}
