"use client";

import React, { useState, useEffect } from "react";
import {
  Share2,
  Plus,
  Trash2,
  Edit2,
  Check,
  Globe,
  ExternalLink,
  Save,
  X as CloseIcon,
} from "lucide-react";
import SocialBrandIcon from "@/components/ui/SocialBrandIcon";

interface SocialLink {
  id?: string;
  platform: string;
  title: string;
  url: string;
  iconName: string;
  isActive: boolean;
  order: number;
}

export default function AdminSosyalMedyaPage() {
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<SocialLink>({
    platform: "Instagram",
    title: "",
    url: "https://",
    iconName: "instagram",
    isActive: true,
    order: 1,
  });

  const [saving, setSaving] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    fetchSocialLinks();
  }, []);

  const fetchSocialLinks = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/social-links");
      if (res.ok) {
        const data = await res.json();
        setSocialLinks(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenNewModal = () => {
    setEditingItem({
      platform: "Instagram",
      title: "",
      url: "https://",
      iconName: "instagram",
      isActive: true,
      order: socialLinks.length + 1,
    });
    setShowModal(true);
  };

  const handleOpenEditModal = (item: SocialLink) => {
    setEditingItem(item);
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const res = await fetch("/api/social-links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingItem),
      });

      if (res.ok) {
        setShowModal(false);
        setSuccessMsg(editingItem.id ? "Sosyal medya hesabı güncellendi!" : "Yeni sosyal medya hesabı eklendi!");
        setTimeout(() => setSuccessMsg(""), 3000);
        fetchSocialLinks();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu sosyal medya hesabını silmek istediğinize emin misiniz?")) return;

    try {
      const res = await fetch(`/api/social-links?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setSuccessMsg("Sosyal medya hesabı silindi.");
        setTimeout(() => setSuccessMsg(""), 3000);
        fetchSocialLinks();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleActive = async (item: SocialLink) => {
    try {
      const res = await fetch("/api/social-links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...item, isActive: !item.isActive }),
      });

      if (res.ok) {
        fetchSocialLinks();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl font-sans">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
            ANA SİTE ENTEGRASYONU
          </span>
          <h1 className="font-display font-extrabold text-3xl text-white mt-1">
            Sosyal Medya Hesapları Yönetimi
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            Burada eklediğiniz sosyal medya hesapları orijinal renkli ikonları ile ana sitenin Header, Footer ve İletişim sayfasında anında yayınlanır.
          </p>
        </div>

        <button
          onClick={handleOpenNewModal}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors"
        >
          <Plus size={16} />
          <span>Yeni Sosyal Medya Hesabı Ekle</span>
        </button>
      </div>

      {/* Success Notification Banner */}
      {successMsg && (
        <div className="p-4 bg-[#FFD400]/10 border border-[#FFD400]/40 text-[#FFD400] text-xs font-mono font-bold flex items-center gap-2">
          <Check size={16} />
          <span>{successMsg}</span>
        </div>
      )}

      {/* Accounts List Container */}
      <div className="glass p-8 border-t-2 border-t-[#FFD400] space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <h2 className="font-display font-bold text-xl text-white flex items-center gap-3">
            <Share2 size={20} className="text-[#FFD400]" />
            <span>Kayıtlı Sosyal Medya Hesapları ({socialLinks.length})</span>
          </h2>
        </div>

        {loading ? (
          <div className="p-12 text-center text-xs font-mono text-gray-500">Yükleniyor...</div>
        ) : socialLinks.length === 0 ? (
          <div className="p-12 text-center text-xs font-mono text-gray-500 border border-white/5 space-y-3">
            <p>Henüz hiçbir sosyal medya hesabı eklenmedi.</p>
            <button
              onClick={handleOpenNewModal}
              className="px-4 py-2 bg-[#FFD400] text-[#050505] font-bold uppercase text-[11px]"
            >
              İlk Hesabı Ekle
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {socialLinks.map((link) => (
              <div
                key={link.id}
                className="p-5 bg-white/5 border border-white/10 flex items-center justify-between gap-4 group hover:border-[#FFD400]/50 transition-colors"
              >
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-10 h-10 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                    <SocialBrandIcon platform={link.platform} size={24} />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-display font-bold text-base text-white truncate">{link.platform}</h3>
                      <button
                        type="button"
                        onClick={() => handleToggleActive(link)}
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 border ${
                          link.isActive
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                            : "bg-gray-500/10 text-gray-400 border-gray-500/30"
                        }`}
                      >
                        {link.isActive ? "AKTİF" : "PASİF"}
                      </button>
                    </div>

                    {link.title && (
                      <p className="text-xs text-gray-300 font-mono truncate mt-0.5">{link.title}</p>
                    )}

                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-[#FFD400] font-mono hover:underline flex items-center gap-1 mt-1 truncate"
                    >
                      <span className="truncate">{link.url}</span>
                      <ExternalLink size={10} className="shrink-0" />
                    </a>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 shrink-0 border-l border-white/10 pl-3">
                  <button
                    onClick={() => handleOpenEditModal(link)}
                    className="p-2 text-gray-400 hover:text-[#FFD400] transition-colors"
                    title="Düzenle"
                  >
                    <Edit2 size={16} />
                  </button>
                  <button
                    onClick={() => link.id && handleDelete(link.id)}
                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                    title="Sil"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Add / Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 select-none">
          <div className="w-full max-w-lg glass p-8 border-t-2 border-t-[#FFD400] space-y-6 relative shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-display font-bold text-xl text-white">
                {editingItem.id ? "Sosyal Medya Hesabını Düzenle" : "Yeni Sosyal Medya Hesabı Ekle"}
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <CloseIcon size={20} />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-gray-400 uppercase font-bold mb-1">PLATFORM SEÇİN *</label>
                <select
                  value={editingItem.platform}
                  onChange={(e) => setEditingItem({ ...editingItem, platform: e.target.value })}
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
                  <option value="Telegram">Telegram</option>
                  <option value="Spotify">Spotify</option>
                  <option value="Diğer">Diğer Özel Bağlantı</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-400 uppercase font-bold mb-1">
                  HESAP / SAYFA ETİKETİ (BAŞLIK)
                </label>
                <input
                  type="text"
                  value={editingItem.title}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  placeholder="Örn: Official Instagram @ncmaster33"
                  className="w-full p-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD400]"
                />
              </div>

              <div>
                <label className="block text-gray-400 uppercase font-bold mb-1">
                  TAM BAGLANTI ADRESİ (URL) *
                </label>
                <input
                  type="text"
                  required
                  value={editingItem.url}
                  onChange={(e) => setEditingItem({ ...editingItem, url: e.target.value })}
                  placeholder="https://instagram.com/ncmaster33"
                  className="w-full p-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD400]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 uppercase font-bold mb-1">GÖRÜNÜM SIRASI</label>
                  <input
                    type="number"
                    value={editingItem.order}
                    onChange={(e) => setEditingItem({ ...editingItem, order: parseInt(e.target.value) || 1 })}
                    className="w-full p-3 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD400]"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 uppercase font-bold mb-1">YAYIN DURUMU</label>
                  <button
                    type="button"
                    onClick={() => setEditingItem({ ...editingItem, isActive: !editingItem.isActive })}
                    className={`w-full py-3 text-xs font-bold uppercase border transition-colors ${
                      editingItem.isActive
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : "bg-gray-500/10 text-gray-400 border-gray-500/30"
                    }`}
                  >
                    {editingItem.isActive ? "YAYINDA (AKTİF)" : "GİZLİ (PASİF)"}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-5 py-2.5 border border-white/20 text-gray-300 font-bold uppercase hover:border-white hover:text-white"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 bg-[#FFD400] text-[#050505] font-extrabold uppercase hover:bg-white transition-colors flex items-center gap-2"
                >
                  {saving ? (
                    <span>Kaydediliyor...</span>
                  ) : (
                    <>
                      <Save size={14} />
                      <span>Kaydet & Ana Sitede Yayınla</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
