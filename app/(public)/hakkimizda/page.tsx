"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Eye, Award, Cpu, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HakkimizdaPage() {
  const values = [
    { title: "Hassasiyet", desc: "Milimetrik lazer kesimler ve sıfır hata prensibi ile kusursuz kaplama." },
    { title: "Teknoloji", desc: "Dünya standartlarında kendini yenileyen film ve nano-seramik formülasyonları." },
    { title: "Kalite", desc: "Laboratuvar testlerinden geçmiş sararma yapmayan yüksek dayanımlı hammaddeler." },
    { title: "Güven", desc: "Şeffaf süreç yönetimi ve teslimat garantili müşteri memnuniyeti politikası." },
    { title: "İşçilik", desc: "Her kıvrımda ve detayda tutku ile uygulanan usta el emeği." },
    { title: "İnovasyon", desc: "Otomotiv yüzey koruma dünyasındaki en güncel global tekniklerin takibi." },
  ];

  const stats = [
    { number: "1000+", label: "Premium Araç Uygulaması" },
    { number: "%100", label: "Orijinal Kaliteli Ürün" },
    { number: "10+", label: "Yıllık Sektör Tecrübesi" },
    { number: "%100", label: "Müşteri Memnuniyeti" },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#050505] text-white">
      {/* Hero Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop"
            alt="NC Master Studio Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-3">
            Hakkımızda
          </span>
          <h1 className="font-playfair text-4xl sm:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Hassasiyet, Teknoloji ve{" "}
            <span className="pink-gradient-text">Kusursuz İşçilik</span>
          </h1>
          <p className="text-gray-300 font-light text-base sm:text-xl max-w-2xl mx-auto">
            Mersin&apos;de luxury ve egzotik araçların koruma, estetik ve prestij adresi.
          </p>
        </div>
      </section>

      {/* Section 01: Biz Kimiz? */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-2">
                Stüdyo Hikayemiz
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
                Biz Kimiz?
              </h2>
              <p className="text-gray-300 font-light text-base leading-relaxed mb-6">
                NC Master, otomotiv koruma sektöründe standartları yeniden tanımlamak amacıyla Mersin Cumhuriyet Mahallesi&apos;nde kurulmuş premium bir otomotiv koruma stüdyosudur.
              </p>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                Otomobillerin yalnızca bir ulaşım aracı değil, aynı zamanda kişisel bir prestij ve tutku objesi olduğu bilinciyle çalışıyoruz. Aracınız stüdyomuza girdiği andan itibaren ışık tünellerinde analiz edilir, en yüksek kalitedeki materyallerle uzman teknisyenlerimizce işlenir.
              </p>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
              <Image
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
                alt="NC Master Craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 & 03: Misyon & Vizyon */}
      <section className="py-20 bg-[#151515] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="glass p-10 rounded-3xl relative overflow-hidden border border-white/10 hover:border-brand-pink/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-6">
                <Target size={28} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                Misyonumuz
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Her bir aracı en gelişmiş PPF şeffaf film ve nano-seramik teknolojileriyle dış etkenlere karşı kusursuz bir koruma kalkanına almak; müşterilerimize uzun yıllar boyu sıfır kondisyonunda bir araç keyfi sunmaktır.
              </p>
            </div>

            <div className="glass p-10 rounded-3xl relative overflow-hidden border border-white/10 hover:border-brand-pink/40 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-brand-goldPrimary/10 flex items-center justify-center text-brand-goldPrimary mb-6">
                <Eye size={28} />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                Vizyonumuz
              </h3>
              <p className="text-gray-400 font-light text-sm leading-relaxed">
                Türkiye&apos;nin en çok güven duyulan ve örnek gösterilen premium otomotiv koruma stüdyoları arasında lider konumumuzu pekiştirmek; işçilik standartlarımız ile lüks segmentin vazgeçilmez markası olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 04: Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-2">
              Bizi Biz Yapan İlkeler
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-white">
              Marka Değerlerimiz
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-pink to-brand-goldPrimary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="glass p-8 rounded-3xl hover:border-brand-pink/40 transition-colors">
                <h4 className="font-playfair text-xl font-bold text-white mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-brand-pink" />
                  {v.title}
                </h4>
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 05: Statistics */}
      <section className="py-20 bg-[#151515] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="glass p-8 rounded-2xl text-center">
                <h3 className="font-playfair text-4xl sm:text-5xl font-extrabold pink-gradient-text mb-2">
                  {s.number}
                </h3>
                <p className="text-xs uppercase tracking-wider text-gray-400 font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
