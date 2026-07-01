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
  ["About", "/about"],
  ["Contact", "/contact"]
];

export function Logo() {
  return (
    <Link href="/" className="group flex min-w-0 items-center gap-3" aria-label="Points Xchange home">
      <div className="relative shrink-0">
        <div className="absolute -inset-1 rounded-xl bg-primary/20 blur-md transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
        <Image
          src="/points-xchange-logo.png"
          alt="Points Xchange"
          width={44}
          height={44}
          priority
          className="relative size-9 shrink-0 rounded-xl object-cover ring-1 ring-white/10 sm:size-10"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-serif text-base font-semibold tracking-tight text-white sm:text-lg">
          Points <span className="gold-text">Xchange</span>
        </span>
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.18em] text-white/60">Points Brokerage</span>
      </div>
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
          ? "border-white/8 bg-[#080C18]/95 shadow-lg shadow-black/40 backdrop-blur-md"
          : "border-white/5 bg-[#080C18]/80 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8 lg:py-3.5">
        <Logo />

        <nav className="hidden items-center lg:flex">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="group relative px-3 py-2 text-sm font-medium text-white/60 transition-colors duration-150 hover:text-white"
            >
              {label}
              <span className="absolute inset-x-3 bottom-1 h-[1.5px] origin-left scale-x-0 rounded-full bg-primary transition-transform duration-200 ease-spring group-hover:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-black px-4 text-sm font-semibold text-white transition-all duration-150 hover:bg-neutral-800 hover:shadow-md active:scale-[0.97]"
          >
            <MessageCircle className="size-3.5" />
            <span className="hidden sm:inline text-xs">{displayWhatsappNumber}</span>
            <span className="sm:hidden text-xs">WhatsApp</span>
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid size-10 place-items-center rounded-lg text-white/60 transition-colors hover:bg-white/8 active:bg-white/12 lg:hidden"
            aria-label="Toggle menu"
          >
            <span className="transition-transform duration-200" style={{ transform: open ? "rotate(90deg)" : "rotate(0)" }}>
              {open ? <X className="size-4.5" /> : <Menu className="size-4.5" />}
            </span>
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-white/5 transition-all duration-300 ease-spring lg:hidden ${
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-[#080C18] px-4 pb-3 pt-1">
          {nav.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 border-b border-white/5 px-2 py-3 text-sm font-medium text-white/60 last:border-0 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
