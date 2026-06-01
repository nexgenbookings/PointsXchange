import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Card } from "@/components/ui/card";
import { contactEmail, displayWhatsappNumber, whatsappNumber } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Points Xchange by email, WhatsApp, or contact form."
};

export default function ContactPage() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-[0.85fr_1.15fr] lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</p>
        <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">Speak with the Points Xchange desk.</h1>
        <div className="mt-8 grid gap-3 text-neutral-700">
          <p>Email: <a className="font-semibold text-black" href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
          <p>WhatsApp: <a className="font-semibold text-black" href={`https://wa.me/${whatsappNumber.replace("+", "")}`}>{displayWhatsappNumber}</a></p>
        </div>
        <a href={`https://wa.me/${whatsappNumber.replace("+", "")}`} className="mt-6 inline-flex h-11 items-center gap-2 rounded-md bg-black px-5 text-sm font-semibold text-white">
          <MessageCircle className="size-4" /> Chat on WhatsApp
        </a>
      </div>
      <Card><ContactForm /></Card>
    </section>
  );
}
