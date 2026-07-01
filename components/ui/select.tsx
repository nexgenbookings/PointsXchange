import * as React from "react";
import { cn } from "@/lib/utils";

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cn(
        "h-12 w-full rounded-xl border border-white/10 bg-[#111827] px-4 text-sm text-white outline-none transition focus:border-primary/50 focus:bg-[#1a2235] focus:ring-1 focus:ring-primary/30",
        props.className
      )}
    />
  );
}
