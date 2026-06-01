"use client";

import { useActionState } from "react";
import { loginAdmin } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAdmin, null);
  return (
    <form action={action} className="mx-auto mt-8 grid max-w-sm gap-4 rounded-lg border bg-white p-6">
      <Input type="password" name="password" placeholder="Admin password" required />
      <Button disabled={pending}>{pending ? "Signing in..." : "Sign In"}</Button>
      {state?.message && <p className="text-sm text-red-700">{state.message}</p>}
    </form>
  );
}
