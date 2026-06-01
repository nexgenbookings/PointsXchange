"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";
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
    <Link href="/" className="flex min-w-0 items-center gap-2.5" aria-label="Points Xchange home">
      <Image
        src="/points-xchange-logo.png"
        alt="Points Xchange"
        width={44}
        height={44}
        priority
        className="size-9 shrink-0 rounded-lg object-cover sm:size-11"
      />
      <span className="truncate font-serif text-lg font-semibold tracking-tight sm:text-xl">
        Points <span className="gold-text">Xchange</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/96 shadow-sm backdrop-blur-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8 lg:py-3.5">
        <Logo />

        <nav className="hidden items-center lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="group relative px-3 py-2 text-sm font-medium text-neutral-600 transition-colors duration-150 hover:text-black"
            >
              {label}
              <span className="absolute inset-x-3 bottom-1 h-[1.5px] origin-left scale-x-0 rounded-full bg-primary transition-transform duration-200 ease-spring group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
            className="inline-flex h-9 items-center gap-2 rounded-full bg-black px-4 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800 hover:shadow-md active:scale-[0.97]"
          >
            <MessageCircle className="size-3.5" />
            <span className="hidden sm:inline text-xs">{displayWhatsappNumber}</span>
            <span className="sm:hidden text-xs">Chat</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid size-9 place-items-center rounded-lg text-neutral-600 transition-colors hover:bg-neutral-100 active:bg-neutral-200 lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="transition-transform duration-200" style={{ transform: open ? "rotate(90deg)" : "rotate(0)" }}>
              {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t transition-all duration-300 ease-spring lg:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white px-4 pb-3 pt-1">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 border-b border-neutral-100 px-2 py-3 text-sm font-medium text-neutral-700 last:border-0 hover:text-black"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
