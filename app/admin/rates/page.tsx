import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { ProgramForm } from "@/components/admin/forms";
import { isAdminAuthenticated } from "@/lib/auth";
import { getAllProgramsForAdmin } from "@/lib/data";

export default async function RatesPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  const programs = await getAllProgramsForAdmin();
  return (
    <AdminShell>
      <h2 className="font-serif text-3xl font-semibold">Rate Management</h2>
      <div className="mt-6 grid gap-5">
        {programs.map((program) => <ProgramForm key={program.id} program={program} />)}
      </div>
    </AdminShell>
  );
}
