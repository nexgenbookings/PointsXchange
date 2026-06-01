import Link from "next/link";
import { logoutAdmin } from "@/lib/actions";

const items = [
  ["Dashboard", "/admin"],
  ["Leads", "/admin/leads"],
  ["Rates", "/admin/rates"],
  ["Programs", "/admin/programs"],
  ["Blog", "/admin/blog"],
  ["FAQs", "/admin/faqs"],
  ["Testimonials", "/admin/testimonials"],
  ["Contact Requests", "/admin/contact-requests"],
  ["Settings", "/admin/settings"]
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="flex flex-col gap-4 border-b pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Admin</p>
          <h1 className="font-serif text-3xl font-semibold sm:text-4xl">Points Xchange Dashboard</h1>
        </div>
        <form action={logoutAdmin}><button className="rounded-md border px-4 py-2 text-sm font-semibold">Log out</button></form>
      </div>
      <nav className="mt-6 flex flex-wrap gap-2">
        {items.map(([label, href]) => <Link key={href} href={href} className="rounded-md border bg-white px-3 py-2 text-sm font-medium hover:bg-primary/10">{label}</Link>)}
      </nav>
      <div className="mt-8">{children}</div>
    </section>
  );
}
