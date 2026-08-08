"use client";

import { Shield, Sparkles, Flame, Zap, Droplets, Layers, Check, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HizmetlerPage() {
  const serviceList = [
    {
      id: "ppf",
      title: "PPF Şeffaf Boya Koruma Filmi",
      badge: "En Popüler",
      desc: "Taş sekmeleri, mikro çizikler, kuş pisliği ve aşındırıcı dış etkenlere karşı kendini ısı ile yenileyen poliüretan koruma filmi.",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
      link: "/ppf-kaplama",
      benefits: [
        "Kendini yenileyen (Self-healing) poliüretan teknoloji",
        "Taş darbesi ve mikro çiziklere karşı koruma kalkanı",
        "Orijinal boyanın rengini ve parlaklığını %100 koruma",
        "Sararma yapmayan uzun yıllar garantili materyal",
      ],
    },
    {
      id: "seramik",
      title: "Nano Seramik Kaplama",
      badge: "Derin Parlaklık",
      desc: "Moleküler düzeyde boya yüzeyine tutunan, yüksek hidrofobik su iticilik ve ayna parlaklığı sunan koruyucu katman.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
      link: "/seramik-kaplama",
      benefits: [
        "Süper hidrofobik su ve çamur itici yüzey etkisi",
        "Kimyasal deterjan ve kuş pisliği direncine sahip katman",
        "Ayna gibi derin kristal parlaklık",
        "Kolay yıkama ve bakım kolaylığı",
      ],
    },
    {
      id: "boya-koruma",
      title: "Boya Koruma & Restorasyon",
      badge: "Restorasyon",
      desc: "Zaman içerisinde güneş ve dış etkenlerle matlaşmış kaporta boyasının fabrika parlaklığına döndürülmesi.",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1000&auto=format&fit=crop",
      link: "/arac-koruma",
      benefits: [
        "Mikron ölçümlü güvenli polisaj aşamaları",
        "Dairesel harelerin ve derin çiziklerin giderilmesi",
        "Oksitlenmiş boya katmanının arındırılması",
        "Uzun süreli koruyucu wax ve sızdırmazlık",
      ],
    },
    {
      id: "pasta-cila",
      title: "Profesyonel Pasta Cila",
      badge: "Hassas İşçilik",
      desc: "Boya mikron kalınlığı ölçülerek yapılan hassas 3 aşamalı çizik giderme ve parlatma prosedürü.",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop",
      link: "/hizmetler",
      benefits: [
        "Heavy cut, medium ve finish polish uygulaması",
        "Kılcal yıkama çiziklerinin temizlenmesi",
        "Yüksek optik parlaklık sağlayan ped kombinasyonu",
      ],
    },
    {
      id: "detayli-temizlik",
      title: "Detaylı İç & Dış Temizlik",
      badge: "Hijyenik Koruma",
      desc: "Koltuklar, tavan, torpido ve halıların buharlı sistemlerle mikroplardan arındırılması ve deri bakımı.",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1000&auto=format&fit=crop",
      link: "/hizmetler",
      benefits: [
        "Hipoalerjenik antibakteriyel buharlı temizlik",
        "Deri aksam koruyucu besleyici kremler",
        "Klima kanalları ozon dezenfeksiyonu",
      ],
    },
    {
      id: "far-yenileme",
      title: "Far Yenileme & Optik Restorasyon",
      badge: "Optik Berraklık",
      desc: "Matlaşmış, sararmış ve görüşü zayıflatan polikarbon far camlarının optik netliğe kavuşturulması.",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1000&auto=format&fit=crop",
      link: "/hizmetler",
      benefits: [
        "Katmanlı zımparalama ve optik polisaj",
        "UV koruyucu akrilik vernik veya PPF kaplama",
        "Gece sürüş güvenliğinde maksimum artış",
      ],
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#050505] text-white">
      {/* Page Header */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 text-center">
          <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-3">
            Hizmet Kataloğu
          </span>
          <h1 className="font-playfair text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Lüks Araç Koruma Hizmetlerimiz
          </h1>
          <p className="text-gray-300 font-light text-base sm:text-lg max-w-2xl mx-auto">
            NC Master stüdyosunda uygulanan tüm otomotiv koruma ve bakım çözümleri.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {serviceList.map((srv) => (
              <div
                key={srv.id}
                className="glass rounded-3xl overflow-hidden group hover:border-brand-pink/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={srv.image}
                    alt={srv.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
                  <span className="absolute top-4 right-4 bg-brand-pink text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg">
                    {srv.badge}
                  </span>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-playfair text-2xl font-bold text-white mb-3 group-hover:text-brand-pink transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                      {srv.desc}
                    </p>

                    <div className="space-y-2 mb-8">
                      {srv.benefits.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                          <Check size={14} className="text-brand-pink shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href={srv.link}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white hover:text-brand-pink transition-colors"
                    >
                      <span>Sayfaya Git</span>
                      <ArrowRight size={14} />
                    </Link>

                    <a
                      href="tel:+905520900698"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-goldPrimary text-white font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform shadow-md"
                    >
                      <Phone size={12} />
                      <span>Bilgi Al</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
