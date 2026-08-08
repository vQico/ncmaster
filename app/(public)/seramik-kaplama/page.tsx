"use client";

import { Sparkles, Droplets, ShieldCheck, Sun, Check, Phone, Zap } from "lucide-react";
import Image from "next/image";

export default function SeramikKaplamaPage() {
  const ceramicBenefits = [
    {
      title: "Derin Cam Parlaklığı",
      desc: "Yüzeyde ayna etkisi oluşturan kristalize sıvı kuvars katmanı sayesinde derin renk doygunluğu.",
      icon: Sparkles,
    },
    {
      title: "Süper Hidrofobik Etki",
      desc: "Su tanecikleri yüzeye tutunamaz, 90 dereceye yakın temas açısıyla kayıp gider.",
      icon: Droplets,
    },
    {
      title: "Kimyasal Mukavemet",
      desc: "Kuş pislikleri, ağaç reçineleri ve pH dengesiz yıkanma kimyasallarına karşı yüksek tampon koruma.",
      icon: ShieldCheck,
    },
    {
      title: "Zahmetsiz Temizlik",
      desc: "Kir ve çamur kaportaya yapışamaz; tazyikli su ile zahmetsizce temizlenir.",
      icon: Zap,
    },
    {
      title: "UV Solma Kalkanı",
      desc: "Güneşin kavurucu ışınlarına karşı boyadaki pigment kırılmalarını ve solmayı kesin olarak engeller.",
      icon: Sun,
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#050505] text-white">
      {/* Ceramic Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1800&auto=format&fit=crop"
            alt="Ceramic Coating Hydrophobic Gloss"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-3">
            Nano Teknolojik Yüzey Restorasyonu
          </span>
          <h1 className="font-playfair text-4xl sm:text-6xl font-extrabold text-white mb-6 max-w-4xl mx-auto leading-tight">
            Derin Parlaklık ve{" "}
            <span className="pink-gradient-text">Üstün Yüzey Koruması</span>
          </h1>
          <p className="text-gray-300 font-light text-base sm:text-xl max-w-2xl mx-auto mb-8">
            Nano-seramik moleküler katmanlar ile boyanızın derin kristal ışıltısını ortaya çıkarın ve su iticilik kazandırın.
          </p>

          <a
            href="tel:+905520900698"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-brand-pink to-brand-goldPrimary text-white font-bold text-sm uppercase tracking-wider hover:scale-105 transition-transform shadow-[0_0_30px_rgba(233,79,175,0.4)]"
          >
            <Phone size={18} />
            <span>Seramik Kaplama Teklifi Al: +90 552 090 06 98</span>
          </a>
        </div>
      </section>

      {/* Ceramic Explanation */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-2">
                Seramik Kaplama Nedir?
              </span>
              <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-white mb-6">
                Nano-Seramik Koruma Teknolojisi
              </h2>
              <p className="text-gray-300 font-light text-base leading-relaxed mb-6">
                Seramik kaplama, boyanın gözeneklerine nüfuz ederek sıvı formdan sertleşip aşınmaz bir cam katmanına dönüşen 9H sertlikteki nanoteknolojik bir koruyucudur.
              </p>
              <p className="text-gray-400 font-light text-sm leading-relaxed mb-8">
                NC Master stüdyosunda polisaj ile kılcal çiziklerinden arındırılmış boya yüzeyi infrared ısıtıcılar altında kürleştirilir. Bu sayede kaporta su itici, leke tutmaz ve göz alıcı bir derinliğe sahip olur.
              </p>

              <div className="space-y-3">
                {[
                  "Çok Katmanlı (Multi-layer) 9H Nano Seramik",
                  "Jant ve Fren Kaliperleri İçi Yüksek Isıya Dayanıklı Seramik",
                  "Camlar ve Dikiz Aynaları İçin Hidrofobik Yağmur İtici",
                  "Koltuk ve Deri Aksamlar İçin Sıvı İtici Seramik Emprenye",
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
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
                alt="Ceramic Water Beading Effect"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#151515] border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-2">
              Seramik Ayrıcalığı
            </span>
            <h2 className="font-playfair text-3xl sm:text-5xl font-bold text-white mb-4">
              Seramik Kaplamanın Avantajları
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-brand-pink to-brand-goldPrimary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ceramicBenefits.map((b, i) => {
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
    </div>
  );
}
