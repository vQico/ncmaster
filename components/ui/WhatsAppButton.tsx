"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  const phone = "905520900698";
  const message = "Merhaba NC MASTER, aracım için PPF ve seramik kaplama hizmetleri hakkında detaylı bilgi almak istiyorum.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp İletişim Hattı"
      className="fixed bottom-6 left-6 z-[9980] glass p-3.5 rounded-full text-white hover:text-[#FFD400] hover:border-[#FFD400] transition-all hover:scale-110 shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center gap-2 group"
    >
      <div className="w-8 h-8 rounded-full bg-[#FFD400] text-[#050505] flex items-center justify-center font-bold">
        <MessageSquare size={18} />
      </div>
      <span className="text-xs font-mono font-bold tracking-wider uppercase text-white pr-2 hidden sm:inline group-hover:text-[#FFD400] transition-colors">
        WHATSAPP BİLGİ HATTI
      </span>
    </a>
  );
}
