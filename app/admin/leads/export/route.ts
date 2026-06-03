import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const leads = await prisma.lead.findMany({ orderBy: { createdAt: "desc" } });

  const headers = ["Name", "Email", "Phone", "Program", "Points", "Est. Low", "Est. High", "Status", "Created"];

  const escape = (val: string) => `"${String(val).replace(/"/g, '""')}"`;

  const rows = leads.map((l) => [
    escape(l.name),
    escape(l.email),
    escape(l.phone),
    escape(l.programName),
    l.pointsAmount,
    Number(l.estimatedLow || 0).toFixed(0),
    Number(l.estimatedHigh || 0).toFixed(0),
    escape(l.status),
    escape(l.createdAt.toLocaleDateString()),
  ].join(","));

  const csv = [headers.join(","), ...rows].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": `attachment; filename="leads-${new Date().toISOString().slice(0, 10)}.csv"`,
    },
  });
}
