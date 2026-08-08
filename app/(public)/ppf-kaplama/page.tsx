"use client";

import { Shield, Sparkles, Check, Phone, Layers, Sun, ShieldAlert, Cpu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TimelineProcess from "@/components/sections/TimelineProcess";

export default function PPFKaplamaPage() {
  const benefits = [
    {
      title: "Görünmez Şeffaf Koruma",
      desc: "Aracınızın orijinal renk ve hatlarını hiçbir bozulmaya uğratmadan görünmez bir kalkan ile sarar.",
      icon: Shield,
    },
    {
      title: "Self-Healing (Isı ile İyileşme)",
      desc: "Yüzeyde oluşan mikro kılcal çizikler, güneş ışığı veya sıcak su teması ile kendiliğinden yok olur.",
      icon: Sparkles,
    },
    {
      title: "Taş ve Çizik Direnci",
      desc: "Seyir halindeki taş sekmeleri, çalı sürtmeleri ve anahtar çiziklerine karşı yüksek darbe emici poliüretan yapı.",
      icon: ShieldAlert,
    },
    {
      title: "UV & Kimyasal Kalkanı",
      desc: "Güneşin ultraviyole ışınlarından kaynaklı renk solmasını, kuş pisliği ve asit yağmuru tahribatını önler.",
      icon: Sun,
    },
    {
      title: "Orijinal Değer Muhafazası",
      desc: "Aracınızın fabrika boyasını ilk günkü gibi muhafaza ederek ikinci el satış değerini maksimum seviyede tutar.",
      icon: Cpu,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#050505] text-white">
      {/* PPF Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1800&auto=format&fit=crop"
            alt="PPF Application Studio"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-3">
            Poliüretan Şeffaf Koruma
          </span>
          <h1 className="font-playfair text-4xl sm:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Boyanızı Geleceğe Taşıyan{" "}
            <span className="pink-gradient-text">Koruma Teknolojisi</span>
          </h1>
          <p className="text-gray-300 font-light text-base sm:text-xl max-w-2xl mx-auto mb-8">
            NC Master stüdyosunda milimetrik lazer kesim şeffaf PPF kaplama ile aracınızın kaportası ilk günkü tazeliğinde kalır.
          </p>

          <a
            href="tel:+905520900698"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-pink to-brand-goldPrimary text-white font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_0_30px_rgba(233,79,175,0.4)]"
          >
            <Phone size={18} />
            <span>PPF Teklifi Al: +90 552 090 06 98</span>
          </a>
        </div>
      </section>

      {/* Detailed Explanation Section */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-2">
                PPF Nedir?
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
                Şeffaf Boya Koruma Filmi (Paint Protection Film)
              </h2>
              <p className="text-gray-300 font-light text-base leading-relaxed mb-6">
                PPF (Paint Protection Film), aracınızın dış yüzeyine kaplanan, darbe emici elastik özelliğe sahip ultra şeffaf poliüretan katmandır. Seyir halindeyken öndeki araçlardan fırlayan taşlar, mıcırlar veya otopark sürtmelerine karşı fiziksel bir zırh oluşturur.
              </p>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                NC Master stüdyosunda uyguladığımız premium sınıf PPF filmler, sararma yapmayan özel nanoteknolojik üst katmana sahiptir. Küçük çizikler güneş sıcaklığında kendiliğinden düzelir.
              </p>

              <div className="space-y-3">
                {[
                  "Tam Vücut (Full Body) PPF Kaplama",
                  "Ön Bölge (Kaput, Çamurluk, Tampon, Aynalar) Koruma",
                  "Tavan ve Parlak Siyah Aksamlara Özel Parlak PPF",
                  "Mat Araçlar İçin Özel Stealth Mat PPF Filmler",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-gray-200">
                    <div className="w-6 h-6 rounded-full bg-brand-pink/20 flex items-center justify-center text-brand-pink shrink-0">
                      <Check size={14} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
              <Image
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1200&auto=format&fit=crop"
                alt="PPF Precision Cut Application"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-[#151515] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-2">
              Üstün Özellikler
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-white mb-4">
              NC Master PPF Avantajları
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-pink to-brand-goldPrimary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={i} className="glass p-8 rounded-3xl hover:border-brand-pink/40 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-brand-pink/10 flex items-center justify-center text-brand-pink mb-6">
                    <Icon size={24} />
                  </div>
                  <h4 className="font-playfair text-xl font-bold text-white mb-3">
                    {b.title}
                  </h4>
                  <p className="text-gray-400 font-light text-sm leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Process */}
      <TimelineProcess />
    </div>
  );
}
