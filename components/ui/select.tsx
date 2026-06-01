import * as React from "react";
import { cn } from "@/lib/utils";

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className={cn(
        "h-11 w-full rounded-xl border border-white/8 bg-[#111] px-3 text-sm text-white outline-none transition focus:border-primary/50 focus:ring-1 focus:ring-primary/30",
        props.className
      )}
    />
  );
}
