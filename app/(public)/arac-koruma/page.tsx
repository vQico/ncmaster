"use client";

import { Shield, Sparkles, Check, Phone, Layers, Sun, Car } from "lucide-react";
import Image from "next/image";

export default function AracKorumaPage() {
  return (
    <div className="pt-28 pb-20 bg-[#050505] text-white">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1800&auto=format&fit=crop"
            alt="Automotive Protection Solutions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-3">
            Bütünsel Otomotiv Restorasyonu
          </span>
          <h1 className="font-playfair text-4xl sm:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Komple Araç Koruma &{" "}
            <span className="pink-gradient-text">Yüzey Bakım Paketleri</span>
          </h1>
          <p className="text-gray-300 font-light text-base sm:text-xl max-w-2xl mx-auto mb-8">
            Dış kaporta, boya, jantlar, iç deri döşeme ve camlar için 360 derece bütünsel otomotiv koruma stratejileri.
          </p>

          <a
            href="tel:+905520900698"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-pink to-brand-goldPrimary text-white font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_0_30px_rgba(233,79,175,0.4)]"
          >
            <Phone size={18} />
            <span>Hemen Arayın: +90 552 090 06 98</span>
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                title: "Dış Yüzey Restorasyon & Koruma",
                desc: "Hare giderme, mikron düzeyi boya düzeltme, PPF hibrit kaplama ve seramik mühürleme.",
                image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
              },
              {
                title: "İç Mekan & Deri Bakım Kalkanı",
                desc: "Lüks deri döşemelerin çatlamasını önleyen neme doyuran koruyucular ve kumaş emprenye.",
                image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop",
              },
              {
                title: "Jant & Motor Haznesi Detaylandırma",
                desc: "Yüksek sıcaklığa dayanıklı jant seramik kaplaması ve motor haznesi antistatik koruma.",
                image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
              },
              {
                title: "Uzun Süreli Periyodik Koruma",
                desc: "6 ayda bir yapılan kontrol ve canlılığını koruyan özel hidrofobik tazeleme bakımları.",
                image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000&auto=format&fit=crop",
              },
            ].map((card, idx) => (
              <div key={idx} className="glass rounded-3xl overflow-hidden group hover:border-brand-pink/50 transition-colors">
                <div className="relative h-64 w-full">
                  <Image src={card.image} alt={card.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-white mb-3 group-hover:text-brand-pink transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                    {card.desc}
                  </p>
                  <a href="tel:+905520900698" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-pink">
                    <span>Detaylı Bilgi Al</span> &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
