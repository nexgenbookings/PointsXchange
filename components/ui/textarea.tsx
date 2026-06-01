import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "min-h-28 w-full rounded-xl border border-white/8 bg-white/5 px-3 py-3 text-sm text-white outline-none transition placeholder:text-[#A0A0A0]/60 focus:border-primary/50 focus:ring-1 focus:ring-primary/30",
        props.className
      )}
    />
  );
}
