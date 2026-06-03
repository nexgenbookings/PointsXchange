"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Search } from "lucide-react";

const statuses = ["", "NEW", "CONTACTED", "IN_NEGOTIATION", "CLOSED", "LOST"];

export function LeadsFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const update = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) params.set(key, value);
      else params.delete(key);
      router.push(`/admin/leads?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#A0A0A0]" />
        <input
          type="text"
          placeholder="Search by name, email or program…"
          defaultValue={searchParams.get("search") || ""}
          onChange={(e) => update("search", e.target.value)}
          className="h-10 w-full rounded-xl border border-white/8 bg-white/5 pl-9 pr-3 text-sm text-white placeholder-[#A0A0A0]/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
        />
      </div>
      <select
        defaultValue={searchParams.get("status") || ""}
        onChange={(e) => update("status", e.target.value)}
        className="h-10 rounded-xl border border-white/8 bg-[#111] px-3 text-sm text-white focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
      >
        {statuses.map((s) => (
          <option key={s} value={s} className="bg-[#111]">
            {s || "All statuses"}
          </option>
        ))}
      </select>
    </div>
  );
}
