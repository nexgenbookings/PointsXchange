import Link from "next/link";
import { contactEmail, displayWhatsappNumber } from "@/lib/content";
import { Logo } from "@/components/site-header";

export function SiteFooter() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[1.5fr_1fr_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-md text-sm leading-6 text-neutral-300">
            Premium points brokerage for customers selling hotel points, airline miles, and credit card rewards for cash.
          </p>
        </div>
        <div className="grid gap-2 text-sm text-neutral-300">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="text-sm text-neutral-300">
          <p>{contactEmail}</p>
          <p className="mt-2">{displayWhatsappNumber}</p>
          <p className="mt-4 text-primary">We Beat Any Offer</p>
        </div>
      </div>
    </footer>
  );
}
