"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles, MessageSquare, ChevronRight, Droplets, Zap, ShieldAlert } from "lucide-react";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";

export default function DetailingPage() {
  const detailingServices = [
    {
      title: "Çok Aşamalı Boya Düzeltme & Polisaj",
      desc: "Mikron hassasiyetinde kalınlık ölçümü ile dairesel kılcal çiziklerin, harelerin ve oksidasyonun %95+ oranında tamamen yok edilmesi.",
      icon: Sparkles,
      specs: ["3 Aşama Dual-Action Polisaj", "Hologram ve Hare Önleyici", "Ayna Efekti Derinlik"],
    },
    {
      title: "Vip Buharlı İç Detaylı Temizlik & Sterilizasyon",
      desc: "180°C kuru buhar teknolojisi ile deri, kumaş, tavan, taban ve klima kanallarında %99.9 bakteri ve koku dezenfeksiyonu.",
      icon: Droplets,
      specs: ["pH Nötr Biyo-Şampuanlar", "Sıfır Nem Kalıntısı", "Deri Besleyici Krem Katmanı"],
    },
    {
      title: "Motor Detaylı Temizlik & Koruma",
      desc: "Mekanik aksama ve elektrik soketlerine zarar vermeyen susuz buharlı motor temizliği ve sıcaklığa dayanıklı plastik koruyucu kalkan.",
      icon: Zap,
      specs: ["Di-Elektrik Güvenlik", "Kauçuk ve Hortum Koruma", "Yağ & Kir Tutmaz Yüzey"],
    },
    {
      title: "Profesyonel Far Restorasyonu",
      desc: "Sararmış, çizilmiş ve matlaşmış polikarbonat farların buharlı klorofom ve UV vernik uygulaması ile sıfır berraklığına kavuşturulması.",
      icon: ShieldCheck,
      specs: ["Optik Işık Artışı", "UV Klorofom Kalkanı", "Gece Sürüş Güvenliği"],
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#050505] text-[#F5F5F5] min-h-screen font-sans">
      {/* Header Breadcrumb */}
      <section className="pb-12 border-b border-white/10 relative">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-3 text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-white">NC MASTER</Link>
            <ChevronRight size={12} className="text-[#FFD400]" />
            <Link href="/hizmetler" className="hover:text-white">HİZMETLER</Link>
            <ChevronRight size={12} className="text-[#FFD400]" />
            <span className="text-[#FFD400]">EXECUTIVE DETAILING</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold px-3 py-1 border border-[#FFD400]/30 rounded">
              04 / PROFESYONEL ARAÇ BAKIMI & RESTORASYON
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-4 leading-tight tracking-tight">
              Executive Detailing & Kusursuz Yüzey Restorasyonu
            </h1>
            <p className="text-base sm:text-xl font-light text-gray-300 mt-6 leading-relaxed">
              NC MASTER stüdyomuzda detailing bir yıkama işlemi değil; aracınızın vernik ve kabin dokusuna mikron seviyesinde uygulanan zanaat düzeyinde restorasyon disiplinidir.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Link
                href="/randevu?service=Detailing"
                className="px-8 py-4 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors inline-flex items-center gap-2"
              >
                <span>Detailing Randevusu Al</span>
                <ArrowUpRight size={16} />
              </Link>
              <a
                href="https://wa.me/905520900698?text=Merhaba%20NC%20MASTER,%20Executive%20Detailing%20hizmeti%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 border border-white/20 text-white font-semibold text-xs uppercase tracking-widest hover:border-[#FFD400] hover:text-[#FFD400] transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare size={16} />
                <span>WhatsApp Danışma</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Detailing Core Services Grid */}
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="mb-14">
            <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
              UYGULAMA DİSİPLİNLERİ
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mt-2">
              Detailing Hizmet Paketlerimiz
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {detailingServices.map((srv, idx) => {
              const IconComp = srv.icon;
              return (
                <div key={idx} className="glass p-8 border-t-2 border-t-[#FFD400] space-y-5">
                  <div className="w-12 h-12 rounded-sm bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400]">
                    <IconComp size={24} />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white">{srv.title}</h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">{srv.desc}</p>
                  <div className="space-y-2 pt-3 border-t border-white/10">
                    {srv.specs.map((sp, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono text-gray-400">
                        <CheckCircle2 size={14} className="text-[#FFD400]" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <BeforeAfterSlider />
    </div>
  );
}
