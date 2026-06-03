import { redirect } from "next/navigation";
import { Download } from "lucide-react";
import { LeadStatusForm, DeleteLeadForm } from "@/components/admin/forms";
import { LeadsFilters } from "@/components/admin/leads-filters";
import { AdminShell } from "@/components/admin/admin-shell";
import { isAdminAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";

export default async function LeadsPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; status?: string }>;
}) {
  if (!(await isAdminAuthenticated())) redirect("/admin");

  const { search, status } = await searchParams;

  const leads = await prisma.lead.findMany({
    where: {
      status: (status as "NEW" | "CONTACTED" | "IN_NEGOTIATION" | "CLOSED" | "LOST" | undefined) || undefined,
      OR: search
        ? [
            { name: { contains: search, mode: "insensitive" } },
            { email: { contains: search, mode: "insensitive" } },
            { programName: { contains: search, mode: "insensitive" } },
          ]
        : undefined,
    },
    orderBy: { createdAt: "desc" },
  });

  return (
    <AdminShell>
      {/* Header row */}
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-semibold text-white">Leads</h2>
          <p className="mt-0.5 text-sm text-[#A0A0A0]">{leads.length} result{leads.length !== 1 ? "s" : ""}</p>
        </div>
        <a
          href="/admin/leads/export"
          download
          className="inline-flex h-9 items-center gap-2 rounded-xl border border-white/8 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          <Download className="size-4" /> Export CSV
        </a>
      </div>

      {/* Filters */}
      <div className="mb-4">
        <Suspense fallback={null}>
          <LeadsFilters />
        </Suspense>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-white/8">
        <table className="w-full min-w-[960px] text-left text-sm">
          <thead className="bg-white/5 text-[#A0A0A0]">
            <tr>
              {["Lead", "Program", "Points", "Estimate", "Status", "Created", "Actions"].map((h) => (
                <th key={h} className="p-3 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/8">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-8 text-center text-[#A0A0A0]">No leads found.</td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/5">
                  <td className="p-3">
                    <p className="font-semibold text-white">{lead.name}</p>
                    <p className="text-[#A0A0A0]">{lead.email}</p>
                    <p className="text-[#A0A0A0]">{lead.phone}</p>
                  </td>
                  <td className="p-3 text-[#A0A0A0]">{lead.programName}</td>
                  <td className="p-3 text-[#A0A0A0]">{lead.pointsAmount.toLocaleString()}</td>
                  <td className="p-3 text-[#A0A0A0]">
                    ${Number(lead.estimatedLow || 0).toFixed(0)} – ${Number(lead.estimatedHigh || 0).toFixed(0)}
                  </td>
                  <td className="p-3"><LeadStatusForm id={lead.id} status={lead.status} /></td>
                  <td className="p-3 text-[#A0A0A0]">{lead.createdAt.toLocaleDateString()}</td>
                  <td className="p-3"><DeleteLeadForm id={lead.id} /></td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
