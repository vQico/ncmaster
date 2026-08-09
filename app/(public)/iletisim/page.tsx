"use client";

import { useState, useEffect } from "react";
import { Phone, MapPin, Clock, Send, CheckCircle2, Mail, Globe, Navigation, Share2 } from "lucide-react";
import Link from "next/link";
import SocialBrandIcon from "@/components/ui/SocialBrandIcon";

interface SettingsData {
  address: string;
  fullAddress: string;
  phone: string;
  email: string;
  workingHours: string;
  googleMapsEmbedUrl: string;
  googleMapsLink: string;
}

interface SocialLink {
  id: string;
  platform: string;
  title: string;
  url: string;
  iconName: string;
  isActive: boolean;
}

export default function IletisimPage() {
  const [settings, setSettings] = useState<SettingsData>({
    address: "Yenişehir, Mersin",
    fullAddress: "Limonluk Mahallesi, 18. Cadde, No: 76/A, 33011 Yenişehir / Mersin",
    phone: "+90 552 090 06 98",
    email: "info@ncmastergarage.com",
    workingHours: "Pzt – Cmt: 09:00 – 19:00 | Pazar: Randevu ile",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Limonluk,+18.+Cd.+76+A,+33011+Yeni%C5%9Fehir%2FMersin&t=&z=16&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://maps.google.com/?q=Limonluk,+18.+Cd.+76+A,+33011+Yeni%C5%9Fehir%2FMersin",
  });

  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.name,
          phone: formData.phone,
          message: `${formData.email ? `[E-Posta: ${formData.email}] ` : ""}${formData.message}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#050505] text-white min-h-screen font-sans">
      {/* Header */}
      <section className="pb-12 border-b border-white/10 relative">
        <div className="container mx-auto px-6 text-center">
          <span className="text-[#FFD400] font-mono text-xs font-bold uppercase tracking-[0.3em] block mb-3">
            08 / DOĞRUDAN İLETİŞİM
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-gray-300 font-light text-base sm:text-lg max-w-2xl mx-auto">
            Aracınız için en doğru koruma paketini belirlemek veya stüdyomuzu ziyaret etmek için bize ulaşın.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="pt-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
            {/* Left: Contact Info & Google Maps Embed (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {/* Phone Card */}
              <a
                href={`tel:${settings.phone.replace(/\s+/g, "")}`}
                className="glass p-8 border-t-2 border-t-[#FFD400] group hover:border-white/30 transition-all flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-sm bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] group-hover:scale-105 group-hover:bg-[#FFD400] group-hover:text-[#050505] transition-all shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] font-bold block mb-1">
                    TELEFON & ÇAĞRI MERKEZİ
                  </span>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white group-hover:text-[#FFD400] transition-colors">
                    {settings.phone}
                  </h3>
                  <p className="text-xs text-gray-400 font-light mt-1">
                    Doğrudan arama veya bilgi almak için dokunun.
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="glass p-8 border-t-2 border-t-[#FFD400] flex items-start gap-6">
                <div className="w-16 h-16 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD400] shrink-0 mt-1">
                  <MapPin size={28} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] font-bold block mb-1">
                    NC MASTER STÜDYO ADRESİ
                  </span>
                  <h3 className="font-display font-black text-xl text-white mb-2">
                    {settings.address}
                  </h3>
                  <p className="text-xs font-mono text-gray-300 leading-relaxed mb-4">
                    {settings.fullAddress}
                  </p>
                  {settings.googleMapsLink && (
                    <a
                      href={settings.googleMapsLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 text-white text-xs font-mono font-bold uppercase tracking-wider hover:border-[#FFD400] hover:text-[#FFD400] transition-colors"
                    >
                      <Navigation size={14} />
                      <span>Google Maps Yol Tarifi</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Dynamic Social Accounts Grid with Official Brand Logos */}
              <div className="glass p-6 border-t border-white/10 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#FFD400] font-bold block">
                  SOSYAL MEDYA & İLETİŞİM KANALLARI
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 bg-white/5 border border-white/10 flex items-center gap-4 hover:border-[#FFD400] transition-colors group rounded-sm"
                    >
                      <SocialBrandIcon platform={link.platform} size={28} />
                      <div className="truncate">
                        <span className="font-display font-bold text-sm text-white block group-hover:text-[#FFD400] transition-colors">
                          {link.platform}
                        </span>
                        <span className="text-[11px] font-mono text-gray-400 block truncate">
                          {link.title || link.url}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Interactive Google Maps Embed Section */}
              <div className="glass rounded-sm overflow-hidden border border-white/10 h-[320px] relative">
                <iframe
                  title="NC Master Google Maps Location"
                  src={settings.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(120%)" }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Validated Contact Form (5 cols) */}
            <div className="lg:col-span-5 glass p-8 sm:p-10 border-t-2 border-t-[#FFD400] relative">
              <span className="text-[#FFD400] font-mono text-xs uppercase font-bold tracking-[0.3em] block mb-2">
                HIZLI MESAJ
              </span>
              <h3 className="font-display font-black text-2xl text-white mb-6">
                İletişim Talebi Gönderin
              </h3>

              {submitted ? (
                <div className="p-8 border border-[#FFD400]/30 bg-[#FFD400]/10 text-center flex flex-col items-center">
                  <CheckCircle2 size={48} className="text-[#FFD400] mb-4" />
                  <h4 className="font-display font-bold text-2xl text-white mb-2">Talebiniz Alındı</h4>
                  <p className="text-xs font-mono text-gray-300 leading-relaxed">
                    İletişim talebiniz NC Master stüdyomuza iletilmiştir. Ekibimiz kısa süre içinde sizinle iletişime geçecektir.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-[#FFD400] font-mono font-bold uppercase tracking-wider underline"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                      AD SOYAD *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Örn: Ahmet Yılmaz"
                      className="w-full p-3.5 bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#FFD400]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                      TELEFON NUMARASI *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Örn: 0552 090 06 98"
                      className="w-full p-3.5 bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#FFD400]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                      E-POSTA ADRESİ
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Örn: ahmet@example.com"
                      className="w-full p-3.5 bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#FFD400]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                      MESAJINIZ VEYA ARAÇ DETAYI
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Aracınızın markası ve talep ettiğiniz koruma işlemi..."
                      className="w-full p-3.5 bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#FFD400]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Gönderiliyor...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Talebi Gönder</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
