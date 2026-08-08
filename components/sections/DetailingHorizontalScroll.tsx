"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface MacroItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const detailingMacroItems: MacroItem[] = [
  {
    id: "ic-mekan",
    title: "İÇ MEKAN",
    subtitle: "Mikron Düzeyinde Sterilizasyon",
    description: "Kabin içi düğme detayları, dikiş aralıkları ve tavan döşemelerinde nem ve leke kalıntısız buharlı sterilizasyon.",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "deri",
    title: "DERİ BAKIMI",
    subtitle: "Dokusal Preservasyon & Matlık",
    description: "Nappa ve Verasca hakiki derilerin pH korumalı temizliği ve parlamayan doğal orijinal matlık preservasyonu.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "motor",
    title: "MOTOR RESTORASYONU",
    subtitle: "Susuz Buharlı Dielektrik Bakım",
    description: "Elektronik soketlere zarar vermeyen özel buharlı motor yıkama, plastik koruma ve hortum esnetme uygulaması.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "jant",
    title: "JANT & FREN BALATASI",
    subtitle: "Aşırı Isı Koruyucu Seramik",
    description: "800°C termal dirence sahip jant seramiği ile balata tozunun ve zift kalıntılarının yapışmasının engellenmesi.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "far",
    title: "FAR OPTİK YENİLEME",
    subtitle: "Buharlı Klorofom Berraklığı",
    description: "Sararmış polikarbonat far merceklerinin mikron düzeyinde zımparalanıp buhar teknolojisi ile ilk günkü netliğine çıkarılması.",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1600&auto=format&fit=crop",
  },
  {
    id: "plastik-trim",
    title: "PLASTİK TRIM & BAKALİT",
    subtitle: "Derin Siyah UV Kalkanı",
    description: "Dış aksam plastik parçaların UV ışınlarından kaynaklı grileşmesini önleyen restoratif moleküler kaplama.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1600&auto=format&fit=crop",
  },
];

export default function DetailingHorizontalScroll() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -450 : 450;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-28 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
              05 / MAKRO İŞÇİLİK DETAILING
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-2 tracking-tight">
              Her Santimetrede Zanaat.
            </h2>
          </div>

          {/* Navigation Scroll Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll("left")}
              aria-label="Sola Kaydır"
              className="w-12 h-12 rounded-full border border-white/10 glass flex items-center justify-center text-white hover:border-[#FFD400] hover:text-[#FFD400] transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Sağa Kaydır"
              className="w-12 h-12 rounded-full border border-white/10 glass flex items-center justify-center text-white hover:border-[#FFD400] hover:text-[#FFD400] transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none pb-8 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {detailingMacroItems.map((item, idx) => (
            <div
              key={item.id}
              className="snap-start shrink-0 w-[300px] sm:w-[420px] glass p-6 border-t-2 border-t-[#FFD400] flex flex-col justify-between group"
              data-cursor="İNCELE"
            >
              <div>
                <div className="relative w-full h-[260px] overflow-hidden rounded-sm mb-6 border border-white/10">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover filter brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 bg-[#050505]/80 backdrop-blur px-3 py-1 text-[10px] font-mono tracking-widest text-[#FFD400] uppercase border border-[#FFD400]/30">
                    0{idx + 1} / {item.title}
                  </div>
                </div>

                <h3 className="font-display font-extrabold text-xl text-white mb-1">
                  {item.title}
                </h3>
                <span className="text-[11px] font-mono text-[#FFD400] uppercase tracking-wider block mb-3">
                  {item.subtitle}
                </span>
                <p className="text-xs font-light text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
