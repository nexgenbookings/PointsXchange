import { redirect } from "next/navigation";
import { AdminShell } from "@/components/admin/admin-shell";
import { TestimonialForm } from "@/components/admin/forms";
import { isAdminAuthenticated } from "@/lib/auth";
import { getTestimonials } from "@/lib/data";

export default async function AdminTestimonialsPage() {
  if (!(await isAdminAuthenticated())) redirect("/admin");
  const rows = await getTestimonials();
  return (
    <AdminShell>
      <h2 className="font-serif text-3xl font-semibold">Testimonials Management</h2>
      <div className="mt-6"><TestimonialForm /></div>
      <div className="mt-8 grid gap-5">
        {rows.map((testimonial) => <TestimonialForm key={testimonial.id} testimonial={testimonial} />)}
      </div>
    </AdminShell>
  );
}
