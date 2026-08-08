"use client";

import { useState } from "react";
import { MessageSquare, Phone, Filter, CheckCircle, Clock, Archive } from "lucide-react";

export default function AdminTaleplerPage() {
  const [filter, setFilter] = useState("Tümü");

  const [requests, setRequests] = useState([
    { id: 1, name: "Ahmet Yılmaz", phone: "+90 532 111 22 33", email: "ahmet@example.com", message: "Porsche 911 GT3 aracıma full PPF fiyat bilgisi alabilir miyim?", date: "07 Ağu 2026 10:45", status: "Yeni" },
    { id: 2, name: "Mehmet Kaya", phone: "+90 533 222 33 44", email: "mehmet@example.com", message: "Mercedes G63 için seramik kaplama randevusu oluşturmak istiyorum.", date: "07 Ağu 2026 09:15", status: "Görüşüldü" },
    { id: 3, name: "Caner Demir", phone: "+90 555 333 44 55", email: "caner@example.com", message: "BMW M5 aracım için çizik giderme ve seramik kaplama talebi.", date: "06 Ağu 2026 16:30", status: "Tamamlandı" },
    { id: 4, name: "Selin Aksoy", phone: "+90 542 444 55 66", email: "selin@example.com", message: "Far yenileme ve iç detaylı temizlik kaç gün sürer?", date: "05 Ağu 2026 14:20", status: "Arşivlendi" },
  ]);

  const updateStatus = (id: number, newStatus: string) => {
    setRequests(requests.map((r) => (r.id === id ? { ...r, status: newStatus } : r)));
  };

  const filteredRequests = filter === "Tümü" ? requests : requests.filter((r) => r.status === filter);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-extrabold text-white">
            İletişim Talepleri & Müşteri Adayları
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Gelen telefon ve iletişim form başvurularını yönetin.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {["Tümü", "Yeni", "Görüşüldü", "Tamamlandı", "Arşivlendi"].map((st) => (
            <button
              key={st}
              onClick={() => setFilter(st)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                filter === st ? "bg-brand-pink text-white" : "glass text-gray-400 hover:text-white"
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {filteredRequests.map((req) => (
          <div key={req.id} className="glass p-6 rounded-2xl border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h3 className="font-playfair text-lg font-bold text-white">{req.name}</h3>
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                  req.status === "Yeni" ? "bg-brand-pink text-white" : req.status === "Görüşüldü" ? "bg-amber-500/20 text-amber-400" : req.status === "Tamamlandı" ? "bg-emerald-500/20 text-emerald-400" : "bg-gray-500/20 text-gray-400"
                }`}>
                  {req.status}
                </span>
              </div>
              <p className="text-xs text-gray-300 font-mono flex items-center gap-4">
                <a href={`tel:${req.phone}`} className="text-brand-pink hover:underline flex items-center gap-1">
                  <Phone size={12} /> {req.phone}
                </a>
                <span>&bull; {req.email}</span>
                <span className="text-gray-500">&bull; {req.date}</span>
              </p>
              <p className="text-xs text-gray-300 font-light pt-1 italic">
                &ldquo;{req.message}&rdquo;
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 border-t md:border-t-0 pt-4 md:pt-0 border-white/5">
              <button
                onClick={() => updateStatus(req.id, "Görüşüldü")}
                className="px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-400 hover:bg-amber-500 hover:text-white text-xs font-semibold"
              >
                Görüşüldü İşaretle
              </button>
              <button
                onClick={() => updateStatus(req.id, "Tamamlandı")}
                className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white text-xs font-semibold"
              >
                Tamamlandı
              </button>
              <button
                onClick={() => updateStatus(req.id, "Arşivlendi")}
                className="px-3 py-1.5 rounded-lg bg-white/5 text-gray-400 hover:text-white text-xs"
              >
                Arşivle
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
