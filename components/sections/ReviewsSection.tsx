"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Quote } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      id: 1,
      name: "Murat Yıldırım",
      vehicle: "Porsche 911 Carrera S",
      comment: "Porsche aracımın tüm kaportasını şeffaf PPF kaplattım. İşçilik muazzam, film ek yerleri kesinlikle görünmüyor. Mersin'de tek adres.",
      rating: 5,
    },
    {
      id: 2,
      name: "Ahmet Kaan Erdem",
      vehicle: "Mercedes-AMG G63",
      comment: "Seramik kaplama sonrası aracın su iticiliği ve parlaklığı inanılmaz bir seviyeye ulaştı. NC Master ekibinin profesyonelliği için teşekkür ederim.",
      rating: 5,
    },
    {
      id: 3,
      name: "Serdar Altınok",
      vehicle: "BMW M5 Competition",
      comment: "Lüks aracınızı tereddütsüz teslim edebileceğiniz ender stüdyolardan biri. Kullanılan ürün kalitesi ve teslimat süresi kusursuzdu.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#151515] relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-2">
            Müşteri Deneyimleri
          </span>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4">
            Güven ve Memnuniyet
          </h2>
          <p className="text-gray-400 font-light max-w-xl mx-auto text-sm md:text-base">
            NC Master ayrıcalığıyla araçlarını koruma altına aldığımız değerli otomobil tutkunlarının yorumları.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-brand-pink to-brand-goldPrimary mx-auto rounded-full mt-6" />
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.12 }}
              className="glass p-8 rounded-3xl relative group hover:border-brand-pink/40 hover:shadow-[0_0_30px_rgba(233,79,175,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-10 h-10 text-brand-pink/20 mb-6 group-hover:text-brand-pink/40 transition-colors" />

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-brand-goldPrimary fill-brand-goldPrimary" />
                  ))}
                </div>

                <p className="text-gray-300 font-light text-sm leading-relaxed mb-6 italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="font-playfair font-bold text-white text-base">
                    {rev.name}
                  </h4>
                  <span className="text-xs text-brand-pink font-medium flex items-center gap-1 mt-0.5">
                    <ShieldCheck size={12} />
                    {rev.vehicle}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-playfair font-bold text-white text-sm">
                  {rev.name.charAt(0)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
