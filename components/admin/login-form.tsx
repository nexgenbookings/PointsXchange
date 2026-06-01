"use client";

import { useActionState } from "react";
import { loginAdmin } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAdmin, null);
  return (
    <form action={action} className="mx-auto mt-8 grid max-w-sm gap-4 rounded-2xl border border-white/8 bg-[#111] p-6">
      <Input type="password" name="password" placeholder="Admin password" required />
      <Button disabled={pending}>{pending ? "Signing in..." : "Sign In"}</Button>
      {state?.message && <p className="text-sm text-red-400">{state.message}</p>}
    </form>
  );
}
