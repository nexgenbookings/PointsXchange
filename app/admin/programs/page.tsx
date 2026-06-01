import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { DeleteProgramForm, ProgramForm } from "@/components/admin/forms";
import { isAdminAuthenticated } from "@/lib/auth";
import { getAllProgramsForAdmin } from "@/lib/data";

export default async function ProgramsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  const programs = await getAllProgramsForAdmin();
  return (
    <AdminShell>
      <h2 className="font-serif text-3xl font-semibold">Supported Programs Management</h2>
      <div className="mt-6"><ProgramForm /></div>
      <div className="mt-8 grid gap-3">
        {programs.map((program) => (
          <div key={program.id} className="flex items-center justify-between rounded-lg border bg-white p-4">
            <div><p className="font-semibold">{program.name}</p><p className="text-sm text-neutral-600">{program.category} · {program.active ? "Active" : "Inactive"}</p></div>
            <DeleteProgramForm id={program.id} />
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
