import type { Metadata } from "next";
import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { contactEmail, displayWhatsappNumber, whatsappNumber } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Points Xchange by email, WhatsApp, or contact form."
};

export default function ContactPage() {
  return (
    <div className="bg-[#0A0A0A]">
      <div className="relative overflow-hidden border-b border-white/8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
          <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-[80px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-14 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Contact</p>
          <h1 className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">Speak with the desk.</h1>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 md:grid-cols-[1fr_1.4fr] md:items-start lg:px-8">
        <div>
          <p className="text-[#A0A0A0]">Reach us directly via WhatsApp or email, or use the form and we&apos;ll respond within one business day.</p>

          <div className="mt-8 space-y-3">
            <a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#111] px-5 py-4 transition-all hover:border-primary/20"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-primary/10">
                <Mail className="size-4 text-primary" />
              </span>
              <div>
                <p className="text-xs text-[#A0A0A0]">Email</p>
                <p className="font-semibold text-white">{contactEmail}</p>
              </div>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
              className="flex items-center gap-3 rounded-2xl border border-white/8 bg-[#111] px-5 py-4 transition-all hover:border-primary/20"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-primary/10">
                <MessageCircle className="size-4 text-primary" />
              </span>
              <div>
                <p className="text-xs text-[#A0A0A0]">WhatsApp</p>
                <p className="font-semibold text-white">{displayWhatsappNumber}</p>
              </div>
            </a>
          </div>

          <a
            href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
            className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-black transition-all hover:bg-accent active:scale-[0.97]"
          >
            <MessageCircle className="size-4" /> Chat on WhatsApp
          </a>
        </div>

        <div className="rounded-2xl border border-white/8 bg-[#111] p-6 sm:p-8">
          <p className="font-semibold text-white">Send a message</p>
          <p className="mt-1 text-sm text-[#A0A0A0]">We respond within one business day.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
