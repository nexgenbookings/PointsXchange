import Link from "next/link";
import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { contactEmail, displayWhatsappNumber, whatsappNumber } from "@/lib/content";
import { Logo } from "@/components/site-header";

const links = [
  { label: "Instant Quote", href: "/instant-quote" },
  { label: "Sell Points", href: "/sell-points" },
  { label: "Supported Programs", href: "/supported-programs" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function SiteFooter() {
  return (
    <footer className="border-t bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.8fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-neutral-400">
              A private desk for turning hotel points, airline miles, and credit card rewards into cash — fast, discreet, competitive.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              We Beat Any Offer
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">Navigate</p>
            <ul className="grid gap-2.5">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="group flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    <ArrowRight className="size-3 opacity-0 -translate-x-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-x-0" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">Legal</p>
            <ul className="grid gap-2.5">
              {legal.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-neutral-400 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">Get in touch</p>
            <div className="grid gap-3">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5">
                  <Mail className="size-3.5" />
                </span>
                {contactEmail}
              </a>
              <a
                href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
                className="flex items-center gap-2.5 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-md border border-white/10 bg-white/5">
                  <MessageCircle className="size-3.5" />
                </span>
                {displayWhatsappNumber}
              </a>
            </div>
            <Link
              href="/instant-quote"
              className="mt-5 inline-flex h-10 items-center gap-2 rounded-full bg-primary px-5 text-xs font-semibold text-black transition-all hover:bg-accent active:scale-[0.97]"
            >
              Get a quote <ArrowRight className="size-3" />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-600">© {new Date().getFullYear()} Points Xchange. All rights reserved.</p>
          <p className="text-xs text-neutral-600">Private points brokerage · Not affiliated with any loyalty program</p>
        </div>
      </div>
    </footer>
  );
}
