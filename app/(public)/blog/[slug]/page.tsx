"use client";

export const dynamic = "force-dynamic";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Phone, Shield, Share2, HelpCircle } from "lucide-react";

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  return (
    <div className="pt-28 pb-20 bg-[#050505] text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-brand-pink transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          <span>Tüm Makalelere Dön</span>
        </Link>

        {/* Title & Metadata */}
        <div className="mb-8">
          <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-3">
            PPF Kaplama Rehberi
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            PPF Kaplama Nedir? Lüks Araçlar İçin Neden Hayati Öneme Sahiptir?
          </h1>

          <div className="flex items-center gap-6 text-xs text-gray-400 pb-6 border-b border-white/10">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} className="text-brand-pink" />
              05 Ağustos 2026
            </span>
            <span className="flex items-center gap-1.5">
              <User size={14} className="text-brand-pink" />
              NC Master Stüdyo Ekibi
            </span>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative h-[360px] sm:h-[480px] rounded-3xl overflow-hidden glass border border-white/10 mb-12 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
          <Image
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop"
            alt="PPF Application Article"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Rich Body Content */}
        <div className="prose prose-invert max-w-none font-light leading-relaxed text-gray-300 space-y-6 text-base sm:text-lg">
          <p>
            Seyir halindeki otomobillerin boyası, öndeki araçların fırlattığı taş sekmeleri, mıcır darbeleri, kuş pisliği asidi ve ultraviyole güneş ışınları nedeniyle günden güne yıpranır. Özellikle luxury ve egzotik segment araçlarda orijinal boyanın hasar görmesi, aracın ikinci el piyasasındaki değerini önemli ölçüde düşürür.
          </p>

          <h2 className="font-playfair text-2xl font-bold text-white mt-10 mb-4">
            Poliüretan Kaplama Teknolojisi Nasıl Çalışır?
          </h2>
          <p>
            PPF (Paint Protection Film), darbe emici elastik özelliğe sahip çok katmanlı bir şeffaf poliüretan folyodur. Yüzeye uygulandığında boya ile ayrılmaz bir bütün oluşturur. Dışarıdan bakıldığında varlığı fark edilmez, ancak fiziki darbelere karşı zırh görevi görür.
          </p>

          <blockquote className="p-6 rounded-2xl glass border-l-4 border-brand-pink text-white italic text-base my-8">
            &ldquo;NC Master olarak kullandığımız şeffaf PPF kaplama filmleri, ısıyla kendini iyileştiren (Self-Healing) özel nano üst katmana sahiptir. Küçük çizikler güneş ışığında kendiliğinden yok olur.&rdquo;
          </blockquote>

          <h2 className="font-playfair text-2xl font-bold text-white mt-10 mb-4">
            PPF Kaplamanın 5 Temel Avantajı
          </h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-300">
            <li><strong>Fiziksel Darbe Kalkanı:</strong> Mıcır ve taş sekmelerinde boyanın çatlamasını kesinlikle engeller.</li>
            <li><strong>Sararma Yapmaz:</strong> UV stabilitiesi yüksek hammaddeler sayesinde güneş altında sararmaz.</li>
            <li><strong>Orijinal Renk Canlılığı:</strong> Optik şeffaflığı ile metalik boyanın derinliğini artırır.</li>
            <li><strong>Kolay Temizlik:</strong> Kir itici pürüzsüz üst yüzey sayesinde su tutmaz.</li>
            <li><strong>Yüksek İkinci El Değeri:</strong> Söküldüğünde aracın boyası fabrika çıkış kondisyonunu korur.</li>
          </ul>

          {/* FAQ Section */}
          <div className="mt-16 pt-10 border-t border-white/10">
            <h3 className="font-playfair text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <HelpCircle className="text-brand-pink" />
              Sıkça Sorulan Sorular (SSS)
            </h3>

            <div className="space-y-4">
              <div className="glass p-6 rounded-2xl">
                <h4 className="font-semibold text-white mb-2">PPF söküldüğünde araç boyasına zarar verir mi?</h4>
                <p className="text-sm text-gray-400">Hayır. Kaliteli PPF filmler akrilik özel yapıştırıcı kullanır. Profesyonelce söküldüğünde boyaya veya verniğe hiç zarar vermez, iz bırakmaz.</p>
              </div>
              <div className="glass p-6 rounded-2xl">
                <h4 className="font-semibold text-white mb-2">PPF üzerine seramik kaplama yapılabilir mi?</h4>
                <p className="text-sm text-gray-400">Evet. PPF film üzerine uygulanan özel seramik kaplama, hidrofobik su iticiliği maksimuma çıkarır ve filmin ömrünü uzatır.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Contact Footer */}
        <div className="mt-16 p-8 rounded-3xl glass border border-brand-pink/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-playfair text-xl font-bold text-white mb-1">
              Aracınızı Koruma Altına Almak İster misiniz?
            </h4>
            <p className="text-xs text-gray-400 font-light">
              Stüdyomuzu arayarak PPF kaplama süreçlerimiz ve randevu durumumuz hakkında bilgi alabilirsiniz.
            </p>
          </div>
          <a
            href="tel:+905520900698"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-goldPrimary text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform shrink-0 flex items-center gap-2"
          >
            <Phone size={14} />
            +90 552 090 06 98
          </a>
        </div>
      </div>
    </div>
  );
}
