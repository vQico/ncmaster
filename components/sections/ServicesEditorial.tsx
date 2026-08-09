"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  image: string;
  specs: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "ppf",
    number: "01",
    title: "PPF",
    slug: "ppf-kaplama",
    category: "Görünmez Zırh",
    description: "Kendi kendini onaran ultra şeffaf poliüretan koruma filmi. Taş darbeleri ve çiziklere karşı nihai boya koruması.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1600&auto=format&fit=crop",
    specs: ["10 Yıl Garanti", "Self-Healing Teknolojisi", "Hidrofobik Yüzey"],
  },
  {
    id: "arac-kaplama",
    number: "02",
    title: "ARAÇ KAPLAMA",
    slug: "arac-kaplama",
    category: "Renk & Dokusal Değişim",
    description: "Premium mat, satin veya parlak folyo uygulamalarıyla aracınızın görsel karakterini yeniden tanımlayın.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop",
    specs: ["Cast Premium Vinyl", "Boyaya Zarar Vermez", "Sınırsız Renk Skalası"],
  },
  {
    id: "seramik",
    number: "03",
    title: "SERAMİK",
    slug: "seramik-kaplama",
    category: "Kristal Parlaklık",
    description: "Nano kristal SiO2 katmanı ile derin ayna efekti parlaklık ve kimyasallara karşı yüksek dayanım.",
    image: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600&auto=format&fit=crop",
    specs: ["9H Sertlik Derecesi", "Derin Parlaklık", "Kolay Temizlenebilirlik"],
  },
  {
    id: "pasta-cila",
    number: "04",
    title: "PASTA & CİLA",
    slug: "pasta-cila",
    category: "Kusursuz Restorasyon",
    description: "Çok aşamalı polisaj tekniği ile dairesel kılcal çiziklerin ve boya kusurlarının tamamen giderilmesi.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1600&auto=format&fit=crop",
    specs: ["Mikron Seviyesinde Hassasiyet", "Hare Bırakmayan polisaj", "Ayna Efekti"],
  },
  {
    id: "boya-koruma",
    number: "05",
    title: "BOYA KORUMA",
    slug: "boya-koruma",
    category: "Yüzey Restorasyonu",
    description: "Yüzey dekontaminasyonu, demir tozu temizliği ve boya besleyici koruyucu polimer sealant uygulamaları.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1600&auto=format&fit=crop",
    specs: ["UV Engelleme", "Oksidasyon Koruması", "Pürüzsüz Dokunuş"],
  },
  {
    id: "cam-filmi",
    number: "06",
    title: "CAM FİLMİ",
    slug: "cam-filmi",
    category: "Termal Konfor",
    description: "Üstün kızılötesi ısı reddi sağlayan yüksek performanslı nano-seramik cam filmleri.",
    image: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1600&auto=format&fit=crop",
    specs: ["%99 UV Engelleme", "%85 Isı Reddi", "Parlama Önleme"],
  },
  {
    id: "cam-seramigi",
    number: "07",
    title: "CAM SERAMİĞİ",
    slug: "cam-seramigi",
    category: "Yağmur Kaydırıcı",
    description: "Sürüş görüşünü artıran yüksek hidrofobik cam kaplaması. Silecek kullanım ihtiyacını azaltır.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop",
    specs: ["60 km/s Hızda Su İticilik", "Buz ve Kireç Dayanımı", "Maksimum Görünürlük"],
  },
  {
    id: "jant-seramigi",
    number: "08",
    title: "JANT SERAMİĞİ",
    slug: "jant-seramigi",
    category: "Yüksek Isı Dayanımı",
    description: "Fren balata tozunun ve ziftin janta yapışmasını engelleyen 800°C ısıya dayanıklı kaplama.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1600&auto=format&fit=crop",
    specs: ["Extreme Termal Direnç", "Balata Tozu İticilik", "Basınçlı Su ile Temizlik"],
  },
  {
    id: "motor-koruma",
    number: "09",
    title: "MOTOR KORUMA",
    slug: "motor-koruma",
    category: "Mekanik Temizlik",
    description: "Susuz buharlı detaylı motor temizliği, nem önleyici ve plastik besleyici koruyucu kaplama.",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=1600&auto=format&fit=crop",
    specs: ["Di-Elektrik Güvenlik", "Kauçuk Koruma", "Yağ ve Kir İticilik"],
  },
  {
    id: "ic-detailing",
    number: "10",
    title: "İÇ DETAILING",
    slug: "ic-detailing",
    category: "Kabin Hijyeni",
    description: "Koltuklar, taban halısı, tavan ve tüm girintilerin mikron düzeyinde buharlı sterilizasyonu.",
    image: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=1600&auto=format&fit=crop",
    specs: ["Bakteri Ve Mite Temizliği", "pH Nötr Şampuanlar", "Sıfır Nem Kalıntısı"],
  },
  {
    id: "deri-bakimi",
    number: "11",
    title: "DERİ BAKIMI",
    slug: "deri-bakimi",
    category: "Deri Preservasyonu",
    description: "Hassas deri yüzeylerin beslenmesi, esnekliğinin korunması ve kot boyası transferine karşı mat seramik shield.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1600&auto=format&fit=crop",
    specs: ["Mat Orijinal Doku", "Çatlama Önleme", "Sıvı İticilik"],
  },
  {
    id: "ozon-dezenfeksiyonu",
    number: "12",
    title: "OZON DEZENFEKSİYONU",
    slug: "ozon-dezenfeksiyonu",
    category: "Hava Kalitesi",
    description: "Ozon jeneratörü ile klima kanallarındaki ve kabin içerisindeki tüm kötü kokuların yok edilmesi.",
    image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&w=1600&auto=format&fit=crop",
    specs: ["Koku Molekülü İmhası", "Klima Kanal Temizliği", "100% Medikal Sterilizasyon"],
  },
  {
    id: "far-temizleme",
    number: "13",
    title: "FAR TEMİZLEME",
    slug: "far-temizleme",
    category: "Optik Berraklık",
    description: "Sararmış ve matlaşmış polikarbonat far camlarının buharlı klorofom ile ilk günkü şeffaflığına getirilmesi.",
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=1600&auto=format&fit=crop",
    specs: ["Buharlı Polikarbon Restorasyonu", "UV Koruyucu Vernik", "Gece Görüş Artışı"],
  },
  {
    id: "plastik-trim",
    number: "14",
    title: "PLASTİK TRIM",
    slug: "plastik-trim",
    category: "Dış Aksam Yenileme",
    description: "Güneşte solmuş dış plastik ve bakalit parçaların derinlemesine rengini geri kazandıran seramik restoratör.",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1600&auto=format&fit=crop",
    specs: ["Derin Siyah Doku", "Solma Karşıtı UV Kalkanı", "Su İtici Yapı"],
  },
  {
    id: "ppf-bakim-onarim",
    number: "15",
    title: "PPF BAKIM & ONARIM",
    slug: "ppf-bakim-onarim",
    category: "Film Koruma Restorasyonu",
    description: "Mevcut PPF kaplamaların özel hidrofobik cilalarla bakımı, kenar atması düzeltmeleri ve kısmi yenileme.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1600&auto=format&fit=crop",
    specs: ["PPF Şeffaflık Canlandırma", "Kenar Onarımı", "Hidrofobik Katman Yenileme"],
  },
];

export default function ServicesEditorial() {
  const [activeService, setActiveService] = useState<ServiceItem>(servicesData[0]);

  return (
    <section id="hizmetler-index" className="py-14 sm:py-28 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
              02 / UYGULAMA İNDEKSİ
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-2 tracking-tight">
              Uzmanlık Alanlarımız.
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 tracking-wider max-w-sm uppercase">
            [ Listedeki her hizmet, aracın mevcut durumuna ve yüzey dinamiklerine göre özel reçeteyle uygulanır. ]
          </p>
        </div>

        {/* 12-Column Editorial Interactive Index */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Large Interactive Typography List (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {servicesData.map((item) => {
              const isActive = activeService.id === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveService(item)}
                  onClick={() => setActiveService(item)}
                  className="group py-5 cursor-pointer transition-all duration-300 flex items-center justify-between"
                  data-cursor="İNCELE"
                >
                  <div className="flex items-center gap-6">
                    <span
                      className={`text-xs font-mono transition-colors ${
                        isActive ? "text-[#FFD400] font-bold" : "text-gray-600 group-hover:text-gray-400"
                      }`}
                    >
                      {item.number}
                    </span>

                    <h3
                      className={`font-display font-black tracking-tight transition-all duration-300 ${
                        isActive
                          ? "text-2xl sm:text-4xl text-white translate-x-3"
                          : "text-lg sm:text-2xl text-gray-400 group-hover:text-white group-hover:translate-x-1"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-4">
                    {isActive && (
                      <motion.div
                        layoutId="activeYellowLine"
                        className="hidden sm:block h-[2px] w-16 bg-[#FFD400] shadow-[0_0_10px_#FFD400]"
                      />
                    )}
                    <Link
                      href={`/hizmetler/${item.slug}`}
                      aria-label={`${item.title} Detayına Git`}
                      className={`p-2 rounded-full border transition-all ${
                        isActive
                          ? "border-[#FFD400] text-[#FFD400] bg-[#FFD400]/10 scale-110"
                          : "border-white/10 text-gray-500 group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Floating Dynamic Preview Panel (5 Cols - Sticky) */}
          <div className="lg:col-span-5 sticky top-32 hidden lg:block">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="glass p-8 border-t-2 border-t-[#FFD400] flex flex-col gap-6"
              >
                {/* Image Preview Container */}
                <div className="relative w-full h-64 overflow-hidden border border-white/10 rounded-sm">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-full object-cover filter contrast-110 brightness-90 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[#050505]/80 backdrop-blur px-3 py-1 text-[10px] font-mono tracking-widest text-[#FFD400] uppercase border border-[#FFD400]/30">
                    {activeService.category}
                  </div>
                </div>

                {/* Description & Technical Specs */}
                <div>
                  <h4 className="font-display font-extrabold text-2xl text-white mb-2">
                    {activeService.title}
                  </h4>
                  <p className="text-sm font-light text-gray-300 leading-relaxed mb-6">
                    {activeService.description}
                  </p>

                  <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
                      Teknik Özellikler:
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {activeService.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium text-gray-200 bg-white/5 border border-white/10 px-3 py-1 rounded-sm"
                        >
                          ✓ {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <Link
                  href={`/hizmetler/${activeService.slug}`}
                  className="w-full py-3 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest text-center flex items-center justify-center gap-2 hover:bg-white transition-colors"
                >
                  <span>{activeService.title} İncele</span>
                  <ArrowUpRight size={14} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
