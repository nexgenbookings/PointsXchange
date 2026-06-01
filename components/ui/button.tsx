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
        "inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 active:scale-[0.97]",
        variant === "primary" && "bg-primary text-black shadow-gold-md hover:bg-accent hover:shadow-gold active:shadow-none",
        variant === "secondary" && "bg-white/5 border border-white/8 text-white hover:bg-white/10",
        variant === "outline" && "border border-primary/50 bg-transparent text-white hover:border-primary hover:bg-primary/10",
        variant === "ghost" && "text-[#A0A0A0] hover:bg-white/8 hover:text-white",
        className
      )}
      {...props}
    />
  );
}
