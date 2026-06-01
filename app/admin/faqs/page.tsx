import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { FAQForm } from "@/components/admin/forms";
import { isAdminAuthenticated } from "@/lib/auth";
import { getFaqs } from "@/lib/data";

export default async function AdminFaqsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  const rows = await getFaqs();
  return (
    <AdminShell>
      <h2 className="font-serif text-3xl font-semibold">FAQ Management</h2>
      <div className="mt-6"><FAQForm /></div>
      <div className="mt-8 grid gap-5">
        {rows.map((faq) => <FAQForm key={faq.id} faq={faq} />)}
      </div>
    </AdminShell>
  );
}
