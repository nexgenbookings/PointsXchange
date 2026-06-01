import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { isAdminAuthenticated } from "@/lib/auth";

export default async function SettingsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  return (
    <AdminShell>
      <h2 className="font-serif text-3xl font-semibold">Quote Calculator Settings</h2>
      <div className="mt-6 rounded-lg border bg-white p-5 leading-7 text-neutral-700">
        <p>Calculator estimates use admin-managed program buy rates, sell rates, spreads, minimum point thresholds, and active status.</p>
        <p className="mt-3">The quote engine enforces a minimum estimated transaction profit of $50 before showing a normal result.</p>
        <p className="mt-3">Email delivery uses <code>RESEND_API_KEY</code> and sends to <code>LEAD_TO_EMAIL</code>, defaulting to Info@pointsxchange.cc.</p>
      </div>
    </AdminShell>
  );
}
