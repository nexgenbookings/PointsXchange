"use client";

import { useActionState } from "react";
import { ArrowRight } from "lucide-react";
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
    <form action={action} className="grid gap-3">
      {[
        { name: "name",    type: "text",  placeholder: "Your name"     },
        { name: "email",   type: "email", placeholder: "Email address" },
        { name: "phone",   type: "tel",   placeholder: "Phone (optional)" },
      ].map(({ name, type, placeholder }) => (
        <input
          key={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#A0A0A0]/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
          required={name !== "phone"}
        />
      ))}
      <textarea
        name="message"
        placeholder="Tell us what you want to sell"
        rows={4}
        required
        className="rounded-xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-white placeholder-[#A0A0A0]/50 focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
      />
      <button
        type="submit"
        disabled={pending}
        className="flex items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-black transition-all hover:bg-accent active:scale-[0.97] disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send Message"}
        {!pending && <ArrowRight className="size-4" />}
      </button>
      {state?.message && !state.ok && (
        <p className="text-sm text-red-400">{state.message}</p>
      )}
    </form>
  );
}
