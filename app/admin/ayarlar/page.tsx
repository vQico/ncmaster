"use client";

import React, { useState, useEffect } from "react";
import {
  Save,
  Check,
  Phone,
  MapPin,
  Mail,
  Clock,
  Globe,
  Plus,
  Trash2,
  Edit2,
  Share2,
  Instagram,
  Video,
  Eye,
} from "lucide-react";

interface SiteSettings {
  address: string;
  fullAddress: string;
  phone: string;
  email: string;
  workingHours: string;
  googleMapsEmbedUrl: string;
  googleMapsLink: string;
}

interface SocialLink {
  id?: string;
  platform: string;
  title: string;
  url: string;
  iconName: string;
  isActive: boolean;
  order: number;
}

export default function AdminAyarlarPage() {
  const [settings, setSettings] = useState<SiteSettings>({
    address: "Mersin, Türkiye",
    fullAddress: "Yenişehir Mahallesi, 1. Cadde No:33, Mersin, Türkiye",
    phone: "+90 552 090 06 98",
    email: "info@ncmastergarage.com",
    workingHours: "Pzt – Cmt: 09:00 – 19:00 | Pazar: Randevu ile",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Mersin,Turkey&t=&z=13&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://maps.google.com/?q=Mersin",
  });

  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [savedSettings, setSavedSettings] = useState(false);

  // New/Edit Social Link Modal state
  const [editingSocial, setEditingSocial] = useState<SocialLink | null>(null);
  const [showSocialModal, setShowSocialModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/settings");
      if (res.ok) {
        const data = await res.json();
        if (data.settings) setSettings(data.settings);
        if (data.socialLinks) setSocialLinks(data.socialLinks);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSaveSettings = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });

      if (res.ok) {
        setSavedSettings(true);
        setTimeout(() => setSavedSettings(false), 2500);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveSocialLink = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSocial) return;

    try {
      const res = await fetch("/api/social-links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingSocial),
      });

      if (res.ok) {
        setShowSocialModal(false);
        setEditingSocial(null);
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteSocialLink = async (id: string) => {
    if (!confirm("Bu sosyal medya hesabını silmek istediğinize emin misiniz?")) return;

    try {
      const res = await fetch(`/api/social-links?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-10 max-w-6xl">
      {/* Top Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
            SİSTEM VE SOSYAL MEDYA YÖNETİMİ
          </span>
          <h1 className="font-display font-extrabold text-3xl text-white mt-1">
            Stüdyo Adres, Harita & Sosyal Hesap Ayarları
          </h1>
        </div>

        <button
          onClick={handleSaveSettings}
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors"
        >
          {savedSettings ? <Check size={16} /> : <Save size={16} />}
          <span>{savedSettings ? "Ayarlar Kaydedildi!" : "Tüm Ayarları Kaydet"}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Address, Contact & Google Maps Settings (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          {/* Address & Contact Info Box */}
          <form onSubmit={handleSaveSettings} className="glass p-8 border-t-2 border-t-[#FFD400] space-y-6">
            <h2 className="font-display font-bold text-xl text-white pb-3 border-b border-white/10 flex items-center gap-3">
              <MapPin size={20} className="text-[#FFD400]" />
              <span>Stüdyo Adres ve İletişim Bilgileri</span>
            </h2>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                KISA ŞEHİR / BÖLGE ADRESİ
              </label>
              <input
                type="text"
                value={settings.address}
                onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                className="w-full p-3.5 bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFD400] font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                AÇIK FİZİKSEL ADRES
              </label>
              <textarea
                rows={2}
                value={settings.fullAddress}
                onChange={(e) => setSettings({ ...settings, fullAddress: e.target.value })}
                className="w-full p-3.5 bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFD400] font-mono"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                  TELEFON NUMARASI
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFD400] font-mono"
                  />
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFD400] size-4" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                  E-POSTA ADRESİ
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFD400] font-mono"
                  />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFD400] size-4" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                ÇALIŞMA SAATLERİ
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={settings.workingHours}
                  onChange={(e) => setSettings({ ...settings, workingHours: e.target.value })}
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-[#FFD400] font-mono"
                />
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FFD400] size-4" />
              </div>
            </div>
          </form>

          {/* Google Maps Integration Box */}
          <div className="glass p-8 border-t-2 border-t-[#FFD400] space-y-6">
            <h2 className="font-display font-bold text-xl text-white pb-3 border-b border-white/10 flex items-center gap-3">
              <Globe size={20} className="text-[#FFD400]" />
              <span>Google Maps Harita Entegrasyonu</span>
            </h2>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                GOOGLE MAPS EMBED HARİTA URL&apos;Sİ (IFRAME SRC)
              </label>
              <input
                type="text"
                value={settings.googleMapsEmbedUrl}
                onChange={(e) => setSettings({ ...settings, googleMapsEmbedUrl: e.target.value })}
                placeholder="https://maps.google.com/maps?q=Mersin,Turkey&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full p-3.5 bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FFD400] font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                GOOGLE MAPS YÖNLENDİRME BAĞLANTISI (YOL TARİFİ LINKI)
              </label>
              <input
                type="text"
                value={settings.googleMapsLink}
                onChange={(e) => setSettings({ ...settings, googleMapsLink: e.target.value })}
                placeholder="https://maps.google.com/?q=Mersin"
                className="w-full p-3.5 bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-[#FFD400] font-mono"
              />
            </div>

            {/* Google Maps Live Preview */}
            <div>
              <span className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-bold mb-2">
                HARİTA CANLI ÖNİZLEMESİ
              </span>
              <div className="w-full h-56 rounded-sm overflow-hidden border border-white/10 bg-white/5 relative">
                {settings.googleMapsEmbedUrl ? (
                  <iframe
                    src={settings.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Google Maps Preview"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-xs font-mono text-gray-500">
                    Harita URL&apos;si girilmedi
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Social Media Accounts Management (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass p-8 border-t-2 border-t-[#FFD400] space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h2 className="font-display font-bold text-xl text-white flex items-center gap-3">
                <Share2 size={20} className="text-[#FFD400]" />
                <span>Sosyal Medya Hesapları</span>
              </h2>

              <button
                onClick={() => {
                  setEditingSocial({
                    platform: "Instagram",
                    title: "",
                    url: "https://",
                    iconName: "instagram",
                    isActive: true,
                    order: socialLinks.length + 1,
                  });
                  setShowSocialModal(true);
                }}
                className="px-3 py-1.5 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 hover:bg-white transition-colors"
              >
                <Plus size={14} />
                <span>Yeni Ekle</span>
              </button>
            </div>

            {loading ? (
              <p className="text-xs font-mono text-gray-500 py-4 text-center">Yükleniyor...</p>
            ) : socialLinks.length === 0 ? (
              <p className="text-xs font-mono text-gray-500 py-4 text-center border border-white/5">
                Kayıtlı sosyal medya hesabı bulunmamaktadır.
              </p>
            ) : (
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <div
                    key={link.id}
                    className="p-4 bg-white/5 border border-white/10 flex items-center justify-between gap-3 group hover:border-[#FFD400]/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 rounded-sm bg-[#FFD400]/10 border border-[#FFD400]/30 flex items-center justify-center text-[#FFD400] shrink-0 font-bold text-xs uppercase">
                        {link.platform.substring(0, 2)}
                      </div>
                      <div className="truncate">
                        <h4 className="font-display font-bold text-sm text-white truncate">{link.platform}</h4>
                        <p className="text-[11px] font-mono text-gray-400 truncate">{link.title || link.url}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 border ${
                          link.isActive
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                            : "bg-gray-500/10 text-gray-400 border-gray-500/30"
                        }`}
                      >
                        {link.isActive ? "AKTİF" : "PASİF"}
                      </span>

                      <button
                        onClick={() => {
                          setEditingSocial(link);
                          setShowSocialModal(true);
                        }}
                        className="p-1.5 text-gray-400 hover:text-[#FFD400] transition-colors"
                        title="Düzenle"
                      >
                        <Edit2 size={14} />
                      </button>

                      <button
                        onClick={() => link.id && handleDeleteSocialLink(link.id)}
                        className="p-1.5 text-gray-400 hover:text-red-400 transition-colors"
                        title="Sil"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Social Media Link Modal */}
      {showSocialModal && editingSocial && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 select-none">
          <div className="w-full max-w-md glass p-8 border-t-2 border-t-[#FFD400] space-y-6 relative shadow-2xl">
            <h3 className="font-display font-bold text-xl text-white">
              {editingSocial.id ? "Sosyal Medya Hesabını Düzenle" : "Yeni Sosyal Medya Hesabı Ekle"}
            </h3>

            <form onSubmit={handleSaveSocialLink} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-gray-400 uppercase font-bold mb-1">PLATFORM ADI</label>
                <select
                  value={editingSocial.platform}
                  onChange={(e) => setEditingSocial({ ...editingSocial, platform: e.target.value })}
                  className="w-full p-3 bg-[#101010] border border-white/10 text-white focus:outline-none focus:border-[#FFD400]"
                >
                  <option value="Instagram">Instagram</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Telefon">Telefon / İletişim</option>
                  <option value="E-Posta">E-Posta</option>
                  <option value="Facebook">Facebook</option>
                  <option value="YouTube">YouTube</option>
                  <option value="TikTok">TikTok</option>
                  <option value="X (Twitter)">X (Twitter)</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Diğer">Diğer Platform</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 uppercase font-bold mb-1">HESAP ETİKETİ / BAŞLIĞI</label>
                <input
                  type="text"
                  value={editingSocial.title}
                  onChange={(e) => setEditingSocial({ ...editingSocial, title: e.target.value })}
                  placeholder="Örn: Official Instagram @ncmaster33"
                  className="w-full p-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD400]"
                />
              </div>

              <div>
                <label className="block text-gray-400 uppercase font-bold mb-1">HESAP LİNKİ / BAGLANTI URL</label>
                <input
                  type="text"
                  required
                  value={editingSocial.url}
                  onChange={(e) => setEditingSocial({ ...editingSocial, url: e.target.value })}
                  placeholder="https://instagram.com/ncmaster33"
                  className="w-full p-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD400]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <label className="text-gray-400 uppercase font-bold">DURUM</label>
                <button
                  type="button"
                  onClick={() => setEditingSocial({ ...editingSocial, isActive: !editingSocial.isActive })}
                  className={`px-3 py-1 text-[10px] font-bold uppercase border ${
                    editingSocial.isActive
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      : "bg-gray-500/10 text-gray-400 border-gray-500/30"
                  }`}
                >
                  {editingSocial.isActive ? "AKTİF" : "PASİF"}
                </button>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowSocialModal(false)}
                  className="px-5 py-2.5 border border-white/20 text-gray-300 font-bold uppercase hover:border-white hover:text-white"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-[#FFD400] text-[#050505] font-extrabold uppercase hover:bg-white transition-colors"
                >
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
