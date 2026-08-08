import Link from "next/link";
import { Instagram, MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import NCMonogram from "@/components/ui/NCMonogram";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-[#F5F5F5] pt-28 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Ambient Background Yellow Glow Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFD400]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Large Editorial Headline */}
        <div className="mb-20 pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
              SON SÖZ & DAVET
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-white mt-2 leading-none tracking-tight">
              Aracınız için <br />
              <span className="text-gray-400 font-light italic">daha fazlası.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/randevu"
              className="px-8 py-4 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors inline-flex items-center gap-2"
            >
              <span>Randevu Oluştur</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* 4-Column Navigation Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-6">
            <NCMonogram size={42} showText={true} />
            <p className="text-xs font-light text-gray-400 leading-relaxed">
              Mersin&apos;in premier Paint Protection Film (PPF), Araç Kaplama ve Seramik Kaplama uzmanı. Aracınız için üstün koruma, mühendislik yaklaşımı ve rafine zanaat.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com/ncmaster33"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram @ncmaster33"
                className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-white hover:text-[#FFD400] hover:border-[#FFD400] transition-all"
              >
                <Instagram size={18} />
              </a>
              <a
                href="tel:+905520900698"
                aria-label="Telefon İletişim"
                className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-white hover:text-[#FFD400] hover:border-[#FFD400] transition-all"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:info@ncmastergarage.com"
                aria-label="E-posta Gönder"
                className="w-10 h-10 rounded-full border border-white/10 glass flex items-center justify-center text-white hover:text-[#FFD400] hover:border-[#FFD400] transition-all"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs font-bold text-[#FFD400] uppercase tracking-widest mb-2">
              HİZMETLER
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs font-light text-gray-400">
              <li><Link href="/ppf-kaplama" className="hover:text-white transition-colors">PPF Boya Koruma Filmi</Link></li>
              <li><Link href="/hizmetler/arac-kaplama" className="hover:text-white transition-colors">Araç Renk Kaplama</Link></li>
              <li><Link href="/seramik-kaplama" className="hover:text-white transition-colors">9H Nano Seramik Kaplama</Link></li>
              <li><Link href="/hizmetler/detailing" className="hover:text-white transition-colors">Pasta Cila & Detaylı Temizlik</Link></li>
              <li><Link href="/hizmetler/cam-filmi" className="hover:text-white transition-colors">Nano-Seramik Cam Filmi</Link></li>
              <li><Link href="/hizmetler/deri-bakimi" className="hover:text-white transition-colors">Deri Bakımı & Restorasyon</Link></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs font-bold text-[#FFD400] uppercase tracking-widest mb-2">
              KURUMSAL & GEZİNTİ
            </h3>
            <ul className="flex flex-col gap-2.5 text-xs font-light text-gray-400">
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda & Felsefe</Link></li>
              <li><Link href="/galeri" className="hover:text-white transition-colors">Portfolyo & Galeri</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">NC MASTER Journal</Link></li>
              <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim & Konum</Link></li>
            </ul>
          </div>

          {/* Col 4: Studio Contact & Working Hours */}
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs font-bold text-[#FFD400] uppercase tracking-widest mb-2">
              STÜDYO İLETİŞİM
            </h3>
            <div className="flex items-start gap-3 text-xs text-gray-300 font-light leading-relaxed">
              <MapPin size={16} className="text-[#FFD400] shrink-0 mt-0.5" />
              <span>Mersin, Türkiye</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-300 font-light">
              <Phone size={16} className="text-[#FFD400] shrink-0" />
              <a href="tel:+905520900698" className="hover:text-[#FFD400] font-mono transition-colors">+90 552 090 06 98</a>
            </div>
            <div className="flex items-center gap-3 text-xs text-gray-300 font-light">
              <Mail size={16} className="text-[#FFD400] shrink-0" />
              <a href="mailto:info@ncmastergarage.com" className="hover:text-[#FFD400] font-mono transition-colors">info@ncmastergarage.com</a>
            </div>
            <div className="pt-2 text-[11px] font-mono text-gray-500 border-t border-white/10">
              Pzt – Cmt: 09:00 – 19:00 <br />
              Pazar: Randevu ile
            </div>
          </div>
        </div>

        {/* Bottom Legal & Digital Signature */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
          <p>&copy; {new Date().getFullYear()} NC MASTER. Tüm hakları saklıdır.</p>

          <div className="flex flex-wrap gap-6 text-[11px]">
            <Link href="/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="/cerez-politikasi" className="hover:text-white transition-colors">Çerez Politikası</Link>
            <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
          </div>

          <p className="font-medium text-gray-400">
            <span className="text-white font-bold tracking-wider">H-WK Digital.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
