"use client";

import { useActionState } from "react";
import { submitContact } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, null);
  return (
    <form action={action} className="grid gap-4">
      <Input name="name" placeholder="Name" required />
      <Input name="email" type="email" placeholder="Email" required />
      <Input name="phone" placeholder="Phone" />
      <Textarea name="message" placeholder="Tell us what you want to sell" required />
      <Button type="submit" disabled={pending}>{pending ? "Sending..." : "Submit Contact Request"}</Button>
      {state?.message && <p className={state.ok ? "text-sm text-green-700" : "text-sm text-red-700"}>{state.message}</p>}
    </form>
  );
}
