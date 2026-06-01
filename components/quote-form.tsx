"use client";

import { useMemo, useState, useActionState } from "react";
import { ArrowRight, Building2, Calculator, CreditCard, LockKeyhole, Plane, Sparkles } from "lucide-react";
import { submitLead } from "@/lib/actions";
import { calculateQuote, type QuoteProgram } from "@/lib/quote";
import { formatCurrency } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

type Props = { programs: QuoteProgram[] };
const categories = [
  { label: "All", value: "ALL", icon: Sparkles },
  { label: "Hotels", value: "HOTEL", icon: Building2 },
  { label: "Airlines", value: "AIRLINE", icon: Plane },
  { label: "Cards", value: "CREDIT_CARD", icon: CreditCard }
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
  const progress = Math.min(100, Math.max(8, (pointsAmount / Math.max(selected?.minimumPoints || 25000, 1)) * 55));

  function chooseCategory(value: string) {
    setCategory(value);
    const next = value === "ALL" ? programs[0] : programs.find((p) => p.category === value);
    if (next?.id) setProgramId(next.id);
  }

  return (
    <Card className="quote-desk p-4 text-black shadow-gold sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-10 shrink-0 place-items-center rounded-md bg-black text-primary"><Calculator className="size-5" /></span>
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-primary">Private Offer Desk</p>
          <h2 className="font-serif text-xl font-semibold leading-tight sm:text-2xl">Estimate your payout</h2>
          <p className="text-sm text-muted-foreground">Choose a category, set a balance, then request a verified offer.</p>
        </div>
        <div className="hidden rounded-md border bg-white px-3 py-2 text-right text-xs sm:block">
          <p className="font-semibold text-green-700">Live review</p>
          <p className="text-muted-foreground">ACH · Zelle</p>
        </div>
      </div>
      <form action={action} className="mt-6 grid gap-4">
        <div className="grid grid-cols-4 gap-2 rounded-lg border bg-white p-1.5">
          {categories.map(({ label, value, icon: Icon }) => (
            <button
              key={value}
              type="button"
              onClick={() => chooseCategory(value)}
              className={`flex h-10 items-center justify-center gap-1.5 rounded-md text-xs font-semibold transition ${category === value ? "bg-black text-primary" : "text-neutral-600 hover:bg-neutral-100"}`}
            >
              <Icon className="size-3.5" />
              {label}
            </button>
          ))}
        </div>
        <label className="grid gap-2 text-sm font-medium">
          Rewards program
          <Select name="programId" value={programId} onChange={(e) => setProgramId(e.target.value)} required>
            {filteredPrograms.map((program) => (
              <option key={program.id} value={program.id}>{program.name}</option>
            ))}
          </Select>
        </label>
        <label className="grid gap-2 text-sm font-medium">
          Points amount
          <Input name="pointsAmount" type="number" min={1000} step={1000} value={pointsAmount} onChange={(e) => setPointsAmount(Number(e.target.value))} required />
        </label>
        <div className="grid grid-cols-4 gap-2">
          {presets.map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setPointsAmount(value)}
              className={`rounded-md border px-2 py-2 text-xs font-semibold transition ${pointsAmount === value ? "border-primary bg-primary/15 text-black" : "bg-white text-neutral-600 hover:border-primary/60"}`}
            >
              {value >= 100000 ? `${value / 1000}k` : value.toLocaleString()}
            </button>
          ))}
        </div>
        {selected && (
          <>
            <input type="hidden" name="programName" value={selected.name} />
            <input type="hidden" name="buyRate" value={String(selected.buyRate)} />
            <input type="hidden" name="sellRate" value={String(selected.sellRate)} />
            <input type="hidden" name="spread" value={String(selected.spread)} />
            <input type="hidden" name="minimumPoints" value={selected.minimumPoints} />
          </>
        )}
        <div className="rounded-lg border bg-white p-4">
          <div className="flex items-center justify-between gap-3">
            <p className="flex items-center gap-2 text-sm font-semibold"><LockKeyhole className="size-4 text-primary" /> Indicative range</p>
            <p className="text-xs font-semibold text-neutral-500">Not a public formula</p>
          </div>
          <p className="mt-2 text-2xl font-semibold sm:text-3xl">{preview ? `${formatCurrency(preview.low)} - ${formatCurrency(preview.high)}` : "Select a program"}</p>
          <div className="mt-3 h-2 rounded-full bg-neutral-100">
            <div className="h-2 rounded-full bg-primary transition-all" style={{ width: `${progress}%` }} />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{preview?.belowMinimum ? preview.message : "Detailed results require your contact details so our desk can verify market availability."}</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <Input name="name" placeholder="Name" required />
          <Input name="email" type="email" placeholder="Email" required />
          <Input name="phone" placeholder="Phone" required />
        </div>
        <Button type="submit" disabled={pending} className="gap-2">{pending ? "Submitting..." : "Request Verified Offer"} {!pending && <ArrowRight className="size-4" />}</Button>
        {state?.message && (
          <p className={state.ok ? "text-sm font-medium text-green-700" : "text-sm font-medium text-red-700"}>{state.message}</p>
        )}
        {state?.ok && state.quote && (
          <div className="rounded-md bg-black p-4 text-white">
            <p className="text-sm text-neutral-300">Estimated payout range</p>
            <p className="mt-1 text-3xl font-semibold text-primary">{formatCurrency(state.quote.low)} - {formatCurrency(state.quote.high)}</p>
          </div>
        )}
      </form>
    </Card>
  );
}
