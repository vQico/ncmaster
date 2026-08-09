"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import NCMonogram from "@/components/ui/NCMonogram";
import SocialBrandIcon from "@/components/ui/SocialBrandIcon";

interface SettingsData {
  address: string;
  fullAddress: string;
  phone: string;
  email: string;
  workingHours: string;
}

interface SocialLink {
  id: string;
  platform: string;
  title: string;
  url: string;
  iconName: string;
  isActive: boolean;
}

export default function Footer() {
  const [settings, setSettings] = useState<SettingsData>({
    address: "Yenişehir, Mersin",
    fullAddress: "Limonluk Mahallesi, 18. Cadde, No: 76/A, 33011 Yenişehir / Mersin",
    phone: "+90 552 090 06 98",
    email: "info@ncmastergarage.com",
    workingHours: "Pzt – Cmt: 09:00 – 19:00 | Pazar: Randevu ile",
  });

  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/settings");
      if (res.ok) {
        const data = await res.json();
        if (data.settings) setSettings(data.settings);
        if (data.socialLinks) {
          setSocialLinks(data.socialLinks.filter((s: SocialLink) => s.isActive));
        }
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <footer className="bg-[#050505] text-[#F5F5F5] pt-14 sm:pt-28 pb-8 sm:pb-12 border-t border-white/10 relative overflow-hidden font-sans">
      {/* Ambient Background Yellow Glow Accent */}
      <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#FFD400]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-5 sm:px-6 relative z-10">
        {/* Large Editorial Headline */}
        <div className="mb-10 sm:mb-20 pb-8 sm:pb-16 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div>
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
              SON SÖZ & DAVET
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-6xl text-white mt-1.5 leading-tight tracking-tight">
              Aracınız için <br />
              <span className="text-gray-400 font-light italic">daha fazlası.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/randevu"
              className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 text-center"
            >
              <span>Randevu Oluştur</span>
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* 4-Column Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-20">
          {/* Col 1: Brand Info & Dynamic Official Social Icons */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <NCMonogram size={38} showText={true} />
            <p className="text-xs font-light text-gray-400 leading-relaxed">
              Mersin&apos;in premier Paint Protection Film (PPF), Araç Kaplama ve Seramik Kaplama uzmanı. Aracınız için üstün koruma, mühendislik yaklaşımı ve rafine zanaat.
            </p>

            {/* Official Brand SVG Social Accounts Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              {socialLinks.length > 0 ? (
                socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    title={link.title || link.platform}
                    aria-label={link.title || link.platform}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 glass flex items-center justify-center hover:scale-110 hover:border-[#FFD400] transition-all"
                  >
                    <SocialBrandIcon platform={link.platform} size={18} />
                  </a>
                ))
              ) : (
                <>
                  <a
                    href="https://instagram.com/ncmaster33"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 glass flex items-center justify-center hover:scale-110 hover:border-[#FFD400] transition-all"
                  >
                    <SocialBrandIcon platform="Instagram" size={18} />
                  </a>
                  <a
                    href={`tel:${settings.phone.replace(/\s+/g, "")}`}
                    aria-label="Telefon"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 glass flex items-center justify-center hover:scale-110 hover:border-[#FFD400] transition-all"
                  >
                    <SocialBrandIcon platform="Telefon" size={18} />
                  </a>
                  <a
                    href={`mailto:${settings.email}`}
                    aria-label="E-posta"
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/10 glass flex items-center justify-center hover:scale-110 hover:border-[#FFD400] transition-all"
                  >
                    <SocialBrandIcon platform="E-Posta" size={18} />
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-mono text-xs font-bold text-[#FFD400] uppercase tracking-widest mb-1 sm:mb-2">
              HİZMETLER
            </h3>
            <ul className="flex flex-col gap-2 text-xs font-light text-gray-400">
              <li><Link href="/ppf-kaplama" className="hover:text-white transition-colors">PPF Boya Koruma Filmi</Link></li>
              <li><Link href="/hizmetler/arac-kaplama" className="hover:text-white transition-colors">Araç Renk Kaplama</Link></li>
              <li><Link href="/seramik-kaplama" className="hover:text-white transition-colors">9H Nano Seramik Kaplama</Link></li>
              <li><Link href="/hizmetler/detailing" className="hover:text-white transition-colors">Executive Detailing & Restorasyon</Link></li>
              <li><Link href="/hizmetler/cam-filmi" className="hover:text-white transition-colors">Nano-Seramik Cam Filmi</Link></li>
              <li><Link href="/hizmetler/deri-bakimi" className="hover:text-white transition-colors">Deri Bakımı & Restorasyon</Link></li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-mono text-xs font-bold text-[#FFD400] uppercase tracking-widest mb-1 sm:mb-2">
              KURUMSAL & GEZİNTİ
            </h3>
            <ul className="flex flex-col gap-2 text-xs font-light text-gray-400">
              <li><Link href="/hakkimizda" className="hover:text-white transition-colors">Hakkımızda & Felsefe</Link></li>
              <li><Link href="/galeri" className="hover:text-white transition-colors">Portfolyo & Galeri</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">NC MASTER Journal</Link></li>
              <li><Link href="/iletisim" className="hover:text-white transition-colors">İletişim & Konum</Link></li>
            </ul>
          </div>

          {/* Col 4: Dynamic Studio Contact & Working Hours */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-mono text-xs font-bold text-[#FFD400] uppercase tracking-widest mb-1 sm:mb-2">
              STÜDYO İLETİŞİM
            </h3>
            <div className="flex items-start gap-2.5 text-xs text-gray-300 font-light leading-relaxed">
              <MapPin size={15} className="text-[#FFD400] shrink-0 mt-0.5" />
              <span>{settings.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-300 font-light">
              <Phone size={15} className="text-[#FFD400] shrink-0" />
              <a href={`tel:${settings.phone.replace(/\s+/g, "")}`} className="hover:text-[#FFD400] font-mono transition-colors">
                {settings.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-gray-300 font-light">
              <Mail size={15} className="text-[#FFD400] shrink-0" />
              <a href={`mailto:${settings.email}`} className="hover:text-[#FFD400] font-mono transition-colors">
                {settings.email}
              </a>
            </div>
            <div className="pt-2 text-[11px] font-mono text-gray-500 border-t border-white/10">
              {settings.workingHours}
            </div>
          </div>
        </div>

        {/* Bottom Legal & Digital Signature (Clean & Organized on Mobile) */}
        <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col lg:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-500">
          <p className="text-[11px] sm:text-xs text-center lg:text-left">
            &copy; {new Date().getFullYear()} NC MASTER. Tüm hakları saklıdır.
          </p>

          {/* Legal Links (Grid on mobile for perfect spacing) */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center gap-[#888] gap-x-4 gap-y-2 text-[10px] sm:text-[11px] text-center">
            <Link href="/kvkk" className="hover:text-white transition-colors">KVKK Aydınlatma Metni</Link>
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="/cerez-politikasi" className="hover:text-white transition-colors">Çerez Politikası</Link>
            <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
          </div>

          <p className="font-medium text-gray-400 text-[11px] sm:text-xs text-center lg:text-right">
            <span className="text-white font-bold tracking-wider">H-WK Digital.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
