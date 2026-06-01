import * as React from "react";
import { cn } from "@/lib/utils";

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(
        "min-h-28 w-full rounded-md border bg-white px-3 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:ring-2 focus:ring-primary",
        props.className
      )}
    />
  );
}
