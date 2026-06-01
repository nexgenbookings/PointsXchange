"use client";

import { MessageCircle } from "lucide-react";
import { whatsappNumber } from "@/lib/content";

export function WhatsappFab() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber.replace("+", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-black/40 transition-all duration-200 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30 active:scale-95"
    >
      <MessageCircle className="size-6 text-white" />
    </a>
  );
}
