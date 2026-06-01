import { AdminShell } from "@/components/admin/admin-shell";
import { LoginForm } from "@/components/admin/login-form";
import { isAdminAuthenticated } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function AdminPage() {
  const authed = await isAdminAuthenticated();
  if (!authed) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h1 className="font-serif text-4xl font-semibold text-white sm:text-5xl">Admin Sign In</h1>
        <p className="mt-4 text-[#A0A0A0]">Protected management area for Points Xchange.</p>
        <LoginForm />
      </section>
    );
  }

  let counts = { leads: 0, programs: 0, posts: 0, contacts: 0 };
  try {
    const [leads, programs, posts, contacts] = await Promise.all([
      prisma.lead.count(),
      prisma.program.count(),
      prisma.blogPost.count(),
      prisma.contactRequest.count()
    ]);
    counts = { leads, programs, posts, contacts };
  } catch {}

  return (
    <AdminShell>
      <div className="grid gap-4 md:grid-cols-4">
        {Object.entries(counts).map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-white/8 bg-[#111] p-5">
            <p className="text-sm font-semibold capitalize text-[#A0A0A0]">{label}</p>
            <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
          </div>
        ))}
      </div>
    </AdminShell>
  );
}
