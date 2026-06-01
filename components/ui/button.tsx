import * as React from "react";
import { cn } from "@/lib/utils";

export function Button({
  className,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline" | "ghost";
}) {
  return (
    <button
      className={cn(
        "inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" && "bg-primary text-primary-foreground shadow-gold hover:bg-accent",
        variant === "secondary" && "bg-black text-white hover:bg-neutral-800",
        variant === "outline" && "border border-primary/50 bg-white text-black hover:bg-primary/10",
        variant === "ghost" && "text-black hover:bg-primary/10",
        className
      )}
      {...props}
    />
  );
}
