import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { displayWhatsappNumber, whatsappNumber } from "@/lib/content";

const nav = [
  ["Home", "/"],
  ["Instant Quote", "/instant-quote"],
  ["Sell Points", "/sell-points"],
  ["Programs", "/supported-programs"],
  ["Blog", "/blog"],
  ["FAQ", "/faq"],
  ["Contact", "/contact"]
];

export function Logo() {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="Points Xchange home">
      <Image
        src="/points-xchange-logo.png"
        alt="Points Xchange"
        width={56}
        height={56}
        priority
        className="size-10 shrink-0 rounded-md object-cover shadow-sm sm:size-12"
      />
      <span className="truncate font-serif text-lg font-semibold tracking-normal sm:text-xl">Points <span className="gold-text">Xchange</span></span>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 lg:px-8 lg:py-4">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium text-neutral-700 lg:flex">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="hover:text-black">{label}</Link>
          ))}
        </nav>
        <a href={`https://wa.me/${whatsappNumber.replace("+", "")}`} className="inline-flex h-10 shrink-0 items-center gap-2 rounded-md bg-black px-3 text-sm font-semibold text-white transition hover:bg-neutral-800 sm:px-4">
          <MessageCircle className="size-4" />
          <span className="hidden sm:inline">{displayWhatsappNumber}</span>
          <span className="sm:hidden">Chat</span>
        </a>
      </div>
      <nav className="flex gap-2 overflow-x-auto border-t px-4 py-2 text-sm font-medium text-neutral-700 lg:hidden">
        {nav.map(([label, href]) => (
          <Link key={href} href={href} className="shrink-0 rounded-md px-3 py-2 hover:bg-primary/10 hover:text-black">{label}</Link>
        ))}
      </nav>
    </header>
  );
}
