"use client";

import { useActionState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { submitContact } from "@/lib/actions";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null);

  if (state?.ok) {
    return (
      <div className="rounded-xl border border-green-500/20 bg-green-500/8 p-5 text-center">
        <p className="font-semibold text-green-400">Message received</p>
        <p className="mt-1 text-sm text-[#A0A0A0]">We&apos;ll respond within one business day.</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4">
      <label className="grid gap-1.5">
        <span className="text-xs font-medium text-white/60">Full name</span>
        <input
          name="name"
          type="text"
          placeholder="Jane Smith"
          required
          className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-primary/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-primary/30"
        />
      </label>
      <label className="grid gap-1.5">
        <span className="text-xs font-medium text-white/60">Email address</span>
        <input
          name="email"
          type="email"
          placeholder="jane@example.com"
          required
          className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-primary/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-primary/30"
        />
      </label>
      <label className="grid gap-1.5">
        <span className="text-xs font-medium text-white/60">Phone <span className="text-white/30">(optional)</span></span>
        <input
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          className="h-12 w-full rounded-xl border border-white/10 bg-white/5 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-primary/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-primary/30"
        />
      </label>
      <label className="grid gap-1.5">
        <span className="text-xs font-medium text-white/60">Message</span>
        <textarea
          name="message"
          placeholder="Tell us what you want to sell — program, rough balance, any questions."
          rows={4}
          required
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-primary/50 focus:bg-white/[0.07] focus:ring-1 focus:ring-primary/30"
        />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-black transition-all hover:bg-accent active:scale-[0.97] disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send Message
            <ArrowRight className="size-4" />
          </>
        )}
      </button>
      {state?.message && !state.ok && (
        <p className="text-sm text-red-400">{state.message}</p>
      )}
    </form>
  );
}
