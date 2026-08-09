"use client";

import React, { useState, useEffect } from "react";
import {
  MessageSquare,
  Phone,
  Filter,
  CheckCircle2,
  Clock,
  Car,
  Calendar,
  Eye,
  Check,
  XCircle,
  AlertCircle,
  Copy,
  Search,
  X as CloseIcon,
} from "lucide-react";

interface AppointmentItem {
  id: string;
  trackingCode?: string;
  service: string;
  carBrand: string;
  carModel: string;
  modelYear: string;
  date: string;
  time: string;
  fullName: string;
  phone: string;
  email?: string;
  notes?: string;
  status: string; // PENDING, CONFIRMED, IN_PROGRESS, COMPLETED, CANCELLED
  createdAt: string;
}

export default function AdminTaleplerPage() {
  const [appointments, setAppointments] = useState<AppointmentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("TÜMÜ");
  const [searchTerm, setSearchTerm] = useState("");

  // Modal State for Viewing Full Details
  const [selectedItem, setSelectedItem] = useState<AppointmentItem | null>(null);
  const [copiedCode, setCopiedCode] = useState(false);
  const [statusUpdating, setStatusUpdating] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/appointments");
      if (res.ok) {
        const data = await res.json();
        setAppointments(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    setStatusUpdating(true);
    try {
      const res = await fetch("/api/appointments", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });

      if (res.ok) {
        setAppointments(appointments.map((a) => (a.id === id ? { ...a, status: newStatus } : a)));
        if (selectedItem && selectedItem.id === id) {
          setSelectedItem({ ...selectedItem, status: newStatus });
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setStatusUpdating(false);
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // Status Badge Formatting Helper
  const getStatusBadge = (status: string) => {
    switch (status.toUpperCase()) {
      case "CONFIRMED":
      case "ONAYLANDI":
        return {
          label: "ONAYLANDI",
          bg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
        };
      case "IN_PROGRESS":
      case "İŞLEMDE":
        return {
          label: "İŞLEMDE (STÜDYODA)",
          bg: "bg-[#FFD400]/10 text-[#FFD400] border-[#FFD400]/40",
        };
      case "COMPLETED":
      case "TAMAMLANDI":
        return {
          label: "TAMAMLANDI & TESLİM EDİLDİ",
          bg: "bg-blue-500/10 text-blue-400 border-blue-500/30",
        };
      case "CANCELLED":
      case "İPTAL EDİLDİ":
        return {
          label: "İPTAL EDİLDİ",
          bg: "bg-red-500/10 text-red-400 border-red-500/30",
        };
      case "PENDING":
      case "BEKLEMEDE":
      default:
        return {
          label: "BEKLEMEDE (İNCELENİYOR)",
          bg: "bg-amber-500/10 text-amber-400 border-amber-500/30",
        };
    }
  };

  // Filter & Search Logic
  const filteredAppointments = appointments.filter((app) => {
    const matchesStatus =
      filterStatus === "TÜMÜ" ||
      (filterStatus === "BEKLEMEDE" && app.status.toUpperCase() === "PENDING") ||
      (filterStatus === "ONAYLANDI" && app.status.toUpperCase() === "CONFIRMED") ||
      (filterStatus === "İŞLEMDE" && app.status.toUpperCase() === "IN_PROGRESS") ||
      (filterStatus === "TAMAMLANDI" && app.status.toUpperCase() === "COMPLETED") ||
      (filterStatus === "İPTAL" && app.status.toUpperCase() === "CANCELLED");

    const searchLower = searchTerm.toLowerCase();
    const matchesSearch =
      !searchTerm ||
      app.fullName.toLowerCase().includes(searchLower) ||
      app.phone.includes(searchTerm) ||
      (app.trackingCode && app.trackingCode.toLowerCase().includes(searchLower)) ||
      app.carBrand.toLowerCase().includes(searchLower) ||
      app.carModel.toLowerCase().includes(searchLower) ||
      app.service.toLowerCase().includes(searchLower);

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-8 max-w-6xl font-sans">
      {/* Top Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
            MÜŞTERİ RANDEVU VE TEKLİF YÖNETİMİ
          </span>
          <h1 className="font-display font-extrabold text-3xl text-white mt-1">
            Gelen Randevu & Hizmet Talepleri
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-mono">
            Müşterilerin oluşturduğu randevuları inceleyin, detaylarına bakın ve stüdyo işlem durumunu güncelleyin.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Takip No, İsim, Telefon..."
            className="w-full pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-[#FFD400]"
          />
          <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-2">
        {["TÜMÜ", "BEKLEMEDE", "ONAYLANDI", "İŞLEMDE", "TAMAMLANDI", "İPTAL"].map((st) => (
          <button
            key={st}
            onClick={() => setFilterStatus(st)}
            className={`px-4 py-2 text-xs font-mono font-bold uppercase border transition-colors ${
              filterStatus === st
                ? "bg-[#FFD400] text-[#050505] border-[#FFD400]"
                : "bg-white/5 text-gray-400 border-white/10 hover:text-white"
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      {/* Main List Table / Cards */}
      {loading ? (
        <div className="p-12 text-center text-xs font-mono text-gray-500 glass">Talepler yükleniyor...</div>
      ) : filteredAppointments.length === 0 ? (
        <div className="p-12 text-center text-xs font-mono text-gray-500 glass border border-white/5">
          Filtreye uygun randevu talebi bulunamadı.
        </div>
      ) : (
        <div className="space-y-4">
          {filteredAppointments.map((item) => {
            const badge = getStatusBadge(item.status);
            return (
              <div
                key={item.id}
                className="glass p-6 border-t-2 border-t-[#FFD400] flex flex-col lg:flex-row lg:items-center justify-between gap-6 group hover:border-white/30 transition-colors"
              >
                {/* Left Request Specs */}
                <div className="space-y-3 min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="px-2.5 py-1 bg-[#FFD400]/20 border border-[#FFD400]/40 text-[#FFD400] font-mono font-bold text-xs">
                      {item.trackingCode || "NC-DEMO"}
                    </span>
                    <h3 className="font-display font-extrabold text-lg text-white truncate">{item.fullName}</h3>
                    <span className={`px-2.5 py-0.5 text-[10px] font-mono font-bold border ${badge.bg}`}>
                      {badge.label}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono text-gray-300">
                    <div className="flex items-center gap-2">
                      <Car size={14} className="text-[#FFD400] shrink-0" />
                      <span className="truncate">
                        {item.carBrand} {item.carModel} ({item.modelYear})
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#FFD400] shrink-0" />
                      <span>
                        {item.date} @ {item.time}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone size={14} className="text-[#FFD400] shrink-0" />
                      <a href={`tel:${item.phone.replace(/\s+/g, "")}`} className="hover:underline text-[#FFD400]">
                        {item.phone}
                      </a>
                    </div>
                  </div>

                  <div className="text-xs text-gray-400 font-mono">
                    Hizmet: <strong className="text-white">{item.service}</strong>
                    {item.notes && <span className="ml-3 text-gray-500 italic truncate">&ldquo;{item.notes}&rdquo;</span>}
                  </div>
                </div>

                {/* Right Actions: View Details & Quick Status Updates */}
                <div className="flex flex-wrap items-center gap-2 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase flex items-center gap-1.5 transition-colors"
                  >
                    <Eye size={14} />
                    <span>Detay Gör</span>
                  </button>

                  <select
                    value={item.status.toUpperCase()}
                    onChange={(e) => handleUpdateStatus(item.id, e.target.value)}
                    className="p-2 bg-[#101010] border border-white/20 text-white font-mono text-xs font-bold uppercase focus:outline-none focus:border-[#FFD400]"
                  >
                    <option value="PENDING">BEKLEMEDE</option>
                    <option value="CONFIRMED">ONAYLANDI</option>
                    <option value="IN_PROGRESS">İŞLEMDE</option>
                    <option value="COMPLETED">TAMAMLANDI</option>
                    <option value="CANCELLED">İPTAL EDİLDİ</option>
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Full Request Details Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 select-none font-sans">
          <div className="w-full max-w-2xl glass p-8 border-t-2 border-t-[#FFD400] space-y-6 relative shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-[#FFD400] text-[#050505] font-mono font-extrabold text-sm">
                  {selectedItem.trackingCode || "NC-DEMO"}
                </span>
                <h3 className="font-display font-bold text-xl text-white">Talep & Randevu Detayları</h3>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <CloseIcon size={22} />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs font-mono">
              <div className="space-y-1 p-4 bg-white/5 border border-white/10">
                <span className="text-gray-400 uppercase font-bold block">MÜŞTERİ BİLGİLERİ</span>
                <p className="text-sm font-bold text-white pt-1">{selectedItem.fullName}</p>
                <p className="text-gray-300">Tel: {selectedItem.phone}</p>
                {selectedItem.email && <p className="text-gray-300">E-Posta: {selectedItem.email}</p>}
              </div>

              <div className="space-y-1 p-4 bg-white/5 border border-white/10">
                <span className="text-gray-400 uppercase font-bold block">ARAÇ & HİZMET</span>
                <p className="text-sm font-bold text-[#FFD400] pt-1">{selectedItem.service}</p>
                <p className="text-white font-bold">
                  {selectedItem.carBrand} {selectedItem.carModel} ({selectedItem.modelYear})
                </p>
                <p className="text-gray-300">
                  Tarih: {selectedItem.date} @ {selectedItem.time}
                </p>
              </div>
            </div>

            {selectedItem.notes && (
              <div className="p-4 bg-white/5 border border-white/10 text-xs font-mono">
                <span className="text-gray-400 uppercase font-bold block mb-1">MÜŞTERİ NOTU / MESAJI</span>
                <p className="text-gray-200 leading-relaxed italic">&ldquo;{selectedItem.notes}&rdquo;</p>
              </div>
            )}

            {/* Change Status Controls inside Modal */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-400 font-bold block">
                İŞLEM DURUMUNU GÜNCELLE
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  { code: "PENDING", label: "BEKLEMEDE" },
                  { code: "CONFIRMED", label: "ONAYLANDI" },
                  { code: "IN_PROGRESS", label: "İŞLEMDE (STÜDYODA)" },
                  { code: "COMPLETED", label: "TAMAMLANDI" },
                  { code: "CANCELLED", label: "İPTAL EDİLDİ" },
                ].map((st) => (
                  <button
                    key={st.code}
                    disabled={statusUpdating}
                    onClick={() => handleUpdateStatus(selectedItem.id, st.code)}
                    className={`px-4 py-2 text-xs font-mono font-bold uppercase border transition-colors ${
                      selectedItem.status.toUpperCase() === st.code
                        ? "bg-[#FFD400] text-[#050505] border-[#FFD400]"
                        : "bg-white/5 text-gray-300 border-white/10 hover:border-white hover:text-white"
                    }`}
                  >
                    {st.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10 text-[11px] font-mono text-gray-400">
              <button
                onClick={() => handleCopyCode(selectedItem.trackingCode || "")}
                className="inline-flex items-center gap-1.5 text-[#FFD400] hover:underline font-bold"
              >
                <Copy size={12} />
                <span>{copiedCode ? "Takip Kodu Kopyalandı!" : "Takip Kodunu Kopyala"}</span>
              </button>

              <button
                onClick={() => setSelectedItem(null)}
                className="px-5 py-2 bg-white/10 text-white uppercase font-bold hover:bg-white hover:text-[#050505] transition-colors"
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
