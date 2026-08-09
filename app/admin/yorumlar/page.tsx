"use client";

import React, { useState, useEffect } from "react";
import { Star, Plus, Trash2, Check, Edit2, Eye, EyeOff, X as CloseIcon, Save } from "lucide-react";

interface ReviewItem {
  id?: string;
  author: string;
  carModel: string;
  content: string;
  rating: number;
  isApproved: boolean;
  createdAt?: string;
}

export default function AdminYorumlarPage() {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [editingReview, setEditingReview] = useState<ReviewItem>({
    author: "",
    carModel: "BMW / Porsche / Mercedes",
    content: "",
    rating: 5,
    isApproved: true,
  });

  const [saving, setSaving] = useState(false);
  const [notification, setNotification] = useState("");

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/reviews");
      if (res.ok) {
        const data = await res.json();
        setReviews(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleOpenNew = () => {
    setEditingReview({
      author: "",
      carModel: "",
      content: "",
      rating: 5,
      isApproved: true,
    });
    setShowModal(true);
  };

  const handleOpenEdit = (item: ReviewItem) => {
    setEditingReview(item);
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingReview.author || !editingReview.content) return;

    setSaving(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingReview),
      });

      if (res.ok) {
        setShowModal(false);
        setNotification(editingReview.id ? "Yorum başarıyla güncellendi!" : "Yeni müşteri yorumu eklendi!");
        setTimeout(() => setNotification(""), 3000);
        fetchReviews();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu yorumu silmek istediğinize emin misiniz?")) return;

    try {
      const res = await fetch(`/api/reviews?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setNotification("Yorum silindi.");
        setTimeout(() => setNotification(""), 3000);
        fetchReviews();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleToggleApproval = async (item: ReviewItem) => {
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...item, isApproved: !item.isApproved }),
      });

      if (res.ok) {
        fetchReviews();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-8 max-w-6xl font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
            MÜŞTERİ MEMNUNİYETİ
          </span>
          <h1 className="font-display font-extrabold text-3xl text-white mt-1">
            Müşteri Yorumları Yönetimi
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            Müşteri değerlendirmelerini ekleyin, düzenleyin ve sitede sergileyin.
          </p>
        </div>

        <button
          onClick={handleOpenNew}
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors"
        >
          <Plus size={16} />
          <span>Yeni Yorum Ekle</span>
        </button>
      </div>

      {/* Notification Banner */}
      {notification && (
        <div className="p-4 bg-[#FFD400]/10 border border-[#FFD400]/40 text-[#FFD400] text-xs font-mono font-bold flex items-center gap-2">
          <Check size={16} />
          <span>{notification}</span>
        </div>
      )}

      {/* Reviews Cards List */}
      {loading ? (
        <div className="p-12 text-center text-xs font-mono text-gray-500 glass">Yorumlar yükleniyor...</div>
      ) : reviews.length === 0 ? (
        <div className="p-12 text-center text-xs font-mono text-gray-500 glass border border-white/5 space-y-3">
          <p>Henüz kayıtlı yorum bulunmamaktadır.</p>
          <button
            onClick={handleOpenNew}
            className="px-4 py-2 bg-[#FFD400] text-[#050505] font-bold text-xs uppercase"
          >
            İlk Yorumu Ekle
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="glass p-6 border-t-2 border-t-[#FFD400] flex flex-col justify-between space-y-4 group hover:border-white/30 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-extrabold text-lg text-white">{r.author}</h3>
                  <div className="flex items-center text-[#FFD400] gap-1">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-[#FFD400]" />
                    ))}
                  </div>
                </div>

                <span className="text-xs font-mono text-[#FFD400] block mb-3">{r.carModel}</span>

                <p className="text-xs text-gray-300 font-light italic leading-relaxed">
                  &ldquo;{r.content}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <button
                  type="button"
                  onClick={() => handleToggleApproval(r)}
                  className={`px-3 py-1 text-[10px] font-bold border transition-colors flex items-center gap-1.5 ${
                    r.isApproved
                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                      : "bg-gray-500/10 text-gray-400 border-gray-500/30"
                  }`}
                >
                  {r.isApproved ? <Eye size={12} /> : <EyeOff size={12} />}
                  <span>{r.isApproved ? "SİTEDE YAYINDA" : "GİZLİ (PASİF)"}</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOpenEdit(r)}
                    className="p-2 text-gray-400 hover:text-[#FFD400] transition-colors"
                    title="Düzenle"
                  >
                    <Edit2 size={16} />
                  </button>

                  <button
                    onClick={() => r.id && handleDelete(r.id)}
                    className="p-2 text-gray-400 hover:text-red-400 transition-colors"
                    title="Sil"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add / Edit Review Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 select-none font-sans">
          <div className="w-full max-w-lg glass p-8 border-t-2 border-t-[#FFD400] space-y-6 relative shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <h3 className="font-display font-bold text-xl text-white">
                {editingReview.id ? "Müşteri Yorumunu Düzenle" : "Yeni Müşteri Yorumu Ekle"}
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
                <label className="block text-gray-400 uppercase font-bold mb-1">MÜŞTERİ AD SOYAD *</label>
                <input
                  type="text"
                  required
                  value={editingReview.author}
                  onChange={(e) => setEditingReview({ ...editingReview, author: e.target.value })}
                  placeholder="Örn: Murat Yıldırım"
                  className="w-full p-3.5 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD400]"
                />
              </div>

              <div>
                <label className="block text-gray-400 uppercase font-bold mb-1">ARAÇ MODELİ / BİLGİSİ *</label>
                <input
                  type="text"
                  required
                  value={editingReview.carModel}
                  onChange={(e) => setEditingReview({ ...editingReview, carModel: e.target.value })}
                  placeholder="Örn: Porsche 911 Carrera S"
                  className="w-full p-3.5 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD400]"
                />
              </div>

              <div>
                <label className="block text-gray-400 uppercase font-bold mb-1">DEĞERLENDİRME / YORUM İÇERİĞİ *</label>
                <textarea
                  rows={4}
                  required
                  value={editingReview.content}
                  onChange={(e) => setEditingReview({ ...editingReview, content: e.target.value })}
                  placeholder="Müşterinin deneyimi ve yorum metni..."
                  className="w-full p-3.5 bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#FFD400]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 uppercase font-bold mb-1">PUAN (1 - 5 YILDIZ)</label>
                  <select
                    value={editingReview.rating}
                    onChange={(e) => setEditingReview({ ...editingReview, rating: Number(e.target.value) })}
                    className="w-full p-3.5 bg-[#101010] border border-white/10 text-white focus:outline-none focus:border-[#FFD400]"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5 Yıldız)</option>
                    <option value={4}>⭐⭐⭐⭐ (4 Yıldız)</option>
                    <option value={3}>⭐⭐⭐ (3 Yıldız)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-400 uppercase font-bold mb-1">YAYIN DURUMU</label>
                  <button
                    type="button"
                    onClick={() => setEditingReview({ ...editingReview, isApproved: !editingReview.isApproved })}
                    className={`w-full py-3.5 text-xs font-bold uppercase border transition-colors ${
                      editingReview.isApproved
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : "bg-gray-500/10 text-gray-400 border-gray-500/30"
                    }`}
                  >
                    {editingReview.isApproved ? "SİTEDE YAYINDA" : "GİZLİ (PASİF)"}
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
                      <span>Kaydet</span>
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
