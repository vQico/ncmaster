"use client";

export const dynamic = "force-dynamic";

import React from "react";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowUpRight, Phone, MessageSquare, CheckCircle2, ChevronRight } from "lucide-react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { servicesData } from "@/components/sections/ServicesEditorial";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const service = servicesData.find((s) => s.slug === slug || s.id === slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
        <h1 className="font-display text-4xl font-extrabold mb-4">Hizmet Bulunamadı</h1>
        <p className="text-gray-400 mb-8">Aradığınız hizmet mevcut değil veya kaldırılmış olabilir.</p>
        <Link href="/hizmetler" className="px-6 py-3 bg-[#FFD400] text-[#050505] font-bold text-xs uppercase tracking-widest">
          Tüm Hizmetlere Dön
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased">


      {/* Hero Section */}
      <section className="relative pt-36 pb-20 border-b border-white/10 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-20 filter contrast-125"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/90" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">
            <Link href="/" className="hover:text-white">NC MASTER</Link>
            <ChevronRight size={12} className="text-[#FFD400]" />
            <Link href="/hizmetler" className="hover:text-white">HİZMETLER</Link>
            <ChevronRight size={12} className="text-[#FFD400]" />
            <span className="text-[#FFD400]">{service.title}</span>
          </div>

          <div className="max-w-4xl">
            <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold px-3 py-1 border border-[#FFD400]/30 rounded">
              0{service.number} / {service.category}
            </span>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-4 leading-tight tracking-tight">
              {service.title} Uzmanlığı
            </h1>
            <p className="text-base sm:text-xl font-light text-gray-300 mt-6 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-10">
              <Link
                href={`/randevu?service=${encodeURIComponent(service.title)}`}
                className="px-8 py-4 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors inline-flex items-center gap-2"
              >
                <span>Randevu Oluştur</span>
                <ArrowUpRight size={16} />
              </Link>
              <a
                href={`https://wa.me/905520900698?text=${encodeURIComponent(`Merhaba NC MASTER, ${service.title} hizmeti hakkında bilgi almak istiyorum.`)}`}
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

      {/* Specs & Benefits Grid */}
      <section className="py-24 border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
                AVANTAJLAR & ÖZELLİKLER
              </span>
              <h2 className="font-display font-extrabold text-3xl text-white mt-2 mb-6">
                Neden NC MASTER {service.title}?
              </h2>
              <div className="flex flex-col gap-4">
                {service.specs.map((spec, i) => (
                  <div key={i} className="glass p-5 flex items-start gap-4 border-l-2 border-l-[#FFD400]">
                    <CheckCircle2 size={20} className="text-[#FFD400] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-white text-sm uppercase font-mono">{spec}</h3>
                      <p className="text-xs font-light text-gray-400 mt-1">
                        Stüdyo standartlarında premium malzeme ve uzman sertifikalı işçilik.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 glass p-8 border-t-2 border-t-[#FFD400]">
              <span className="text-xs font-mono tracking-[0.3em] text-gray-400 uppercase">
                UYGULAMA KAPSAMI
              </span>
              <h3 className="font-display font-bold text-2xl text-white mt-2 mb-4">
                Kullanım Senaryoları & Araç Uyumluluğu
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed font-light mb-6">
                NC MASTER'da her işlem araca özel hazırlanan yüzey reçeteleriyle gerçekleştirilir. Şehir içi kullanım yoğunluğu, boya tipi ve iklim koşulları dikkate alınır.
              </p>
              <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                <span className="text-[11px] font-mono text-[#FFD400] uppercase block mb-1">
                  ✓ TAVSİYE EDİLEN UYGULAMA
                </span>
                <p className="text-xs text-gray-400">
                  Sıfır km veya restore edilmiş tüm binek, SUV ve egzotik lüks otomobiller.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After Section */}
      <BeforeAfterSlider />
    </div>
  );
}
