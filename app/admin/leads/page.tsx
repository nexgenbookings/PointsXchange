import { redirect } from "next/navigation";
import { LeadStatusForm } from "@/components/admin/forms";
import { AdminShell } from "@/components/admin/admin-shell";
import { isAdminAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function LeadsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });
  return (
    <AdminShell>
      <div className="overflow-x-auto rounded-lg border bg-white">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="bg-neutral-50"><tr>{["Lead", "Program", "Points", "Estimate", "Status", "Created"].map((h) => <th key={h} className="p-3">{h}</th>)}</tr></thead>
          <tbody className="divide-y">
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td className="p-3"><p className="font-semibold">{lead.name}</p><p>{lead.email}</p><p>{lead.phone}</p></td>
                <td className="p-3">{lead.programName}</td>
                <td className="p-3">{lead.pointsAmount.toLocaleString()}</td>
                <td className="p-3">${Number(lead.estimatedLow || 0).toFixed(0)} - ${Number(lead.estimatedHigh || 0).toFixed(0)}</td>
                <td className="p-3"><LeadStatusForm id={lead.id} status={lead.status} /></td>
                <td className="p-3">{lead.createdAt.toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
