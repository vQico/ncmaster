"use client";

export const dynamic = "force-dynamic";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Calendar, User, ChevronRight, BookOpen } from "lucide-react";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tümü");

  const categories = ["Tümü", "PPF Kaplama", "Seramik Kaplama", "Boya Koruma", "Araç Bakımı"];

  const articles = [
    {
      slug: "ppf-kaplama-nedir-neden-yaptirilmalidir",
      title: "PPF Kaplama Nedir? Lüks Araçlar İçin Neden Hayati Öneme Sahiptir?",
      category: "PPF Kaplama",
      date: "05 Ağustos 2026",
      author: "NC Master Uzman Ekip",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Poliüretan şeffaf boya koruma filminin çalışma prensibi, kendini iyileştirme teknolojisi ve aracın orijinal değerine katkıları.",
    },
    {
      slug: "seramik-kaplama-avantajlari-ve-bakim-rehberi",
      title: "Nano Seramik Kaplama Avantajları ve Şehir İçi Kullanımda Boya Dayanımı",
      category: "Seramik Kaplama",
      date: "28 Temmuz 2026",
      author: "NC Master Stüdyo",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Süper hidrofobik su iticilik ve 9H sertliğindeki nanoteknolojik cam katmanın boyaya kazandırdığı kristal parlaklığın detayları.",
    },
    {
      slug: "ppf-ve-seramik-kaplama-arasindaki-farklar",
      title: "PPF Kaplama mı Seramik Kaplama mı? İki Koruma Arasındaki Temel Farklar",
      category: "Boya Koruma",
      date: "15 Temmuz 2026",
      author: "NC Master Mühendislik",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Fiziksel zırh ile moleküler hidrofobik katman arasındaki performans karşılaştırması ve hibrit paket çözümleri.",
    },
    {
      slug: "arac-boyasi-nasil-korunur-mersin-rehberi",
      title: "Mersin Sıcaklarında Araç Boyası Nasıl Korunur? Güneş & UV Rehberi",
      category: "Araç Bakımı",
      date: "02 Temmuz 2026",
      author: "NC Master Editör",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1000&auto=format&fit=crop",
      excerpt: "Akdeniz ikliminin kavurucu güneşi, tuzlu deniz nemi ve UV ışınlarına karşı boya pigmentlerini canlı tutma yöntemleri.",
    },
  ];

  const filteredArticles = articles.filter(
    (art) =>
      (selectedCategory === "Tümü" || art.category === selectedCategory) &&
      (art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="pt-28 pb-20 bg-[#050505] text-white min-h-screen">
      {/* Header */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 text-center">
          <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-3">
            Otomotiv Koruma Bilgi Merkezi
          </span>
          <h1 className="font-playfair text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Blog & Koruma Rehberi
          </h1>
          <p className="text-gray-300 font-light text-base sm:text-lg max-w-2xl mx-auto mb-10">
            PPF kaplama, seramik kaplama ve otomotiv yüzey koruma teknolojileri hakkında uzman makalelerimiz.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto relative mb-8">
            <input
              type="text"
              placeholder="Makale veya konu ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full glass border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-pink/50 text-sm"
            />
            <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                  selectedCategory === cat
                    ? "bg-brand-pink text-white"
                    : "glass text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Article Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredArticles.map((art) => (
              <article
                key={art.slug}
                className="glass rounded-3xl overflow-hidden group hover:border-brand-pink/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-brand-pink text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {art.category}
                  </span>
                </div>

                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} className="text-brand-pink" />
                        {art.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={13} className="text-brand-pink" />
                        {art.author}
                      </span>
                    </div>

                    <h2 className="font-playfair text-2xl font-bold text-white mb-4 group-hover:text-brand-pink transition-colors leading-snug">
                      {art.title}
                    </h2>

                    <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
                      {art.excerpt}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${art.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white group-hover:text-brand-pink transition-colors pt-4 border-t border-white/10"
                  >
                    <span>Makaleyi Oku</span>
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
