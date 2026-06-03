"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
      <div className="flex flex-col gap-4 border-b border-white/8 pb-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Admin</p>
          <h1 className="mt-1 font-serif text-3xl font-semibold text-white sm:text-4xl">Points Xchange Dashboard</h1>
        </div>
        <form action={logoutAdmin}>
          <button className="rounded-xl border border-white/8 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10">
            Log out
          </button>
        </form>
      </div>
      <nav className="mt-6 flex flex-wrap gap-2">
        {items.map(([label, href]) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`rounded-xl border px-3 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-primary/50 bg-primary/10 text-primary"
                  : "border-white/8 bg-white/5 text-[#A0A0A0] hover:bg-primary/10 hover:text-white"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-8">{children}</div>
    </section>
  );
}
