import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { isAdminAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function ContactRequestsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  const rows = await prisma.contactRequest.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <AdminShell>
      <h2 className="font-serif text-3xl font-semibold">Contact Requests</h2>
      <div className="mt-6 grid gap-4">
        {rows.map((row) => (
          <div key={row.id} className="rounded-lg border bg-white p-5">
            <p className="font-semibold">{row.name} · {row.email}</p>
            <p className="text-sm text-neutral-600">{row.phone}</p>
            <p className="mt-3 text-neutral-800">{row.message}</p>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
