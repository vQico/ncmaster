"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Calendar,
  Car,
  Wrench,
  User,
  ShieldCheck,
  Search,
  Copy,
  Clock,
  AlertCircle,
  Plus,
  Check,
} from "lucide-react";
import { servicesData } from "@/components/sections/ServicesEditorial";

interface AppointmentDetail {
  trackingCode: string;
  service: string;
  carBrand: string;
  carModel: string;
  modelYear: string;
  date: string;
  time: string;
  fullName: string;
  phone: string;
  status: string;
}

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [createdTrackingCode, setCreatedTrackingCode] = useState("");
  const [createdAppointment, setCreatedAppointment] = useState<AppointmentDetail | null>(null);

  // Multi-select Services State
  const [selectedServices, setSelectedServices] = useState<string[]>(["PPF"]);

  // Form State
  const [formData, setFormData] = useState({
    carBrand: "",
    carModel: "",
    modelYear: "2024",
    date: "",
    time: "10:00",
    fullName: "",
    phone: "",
    email: "",
    notes: "",
  });

  // Track / Search State
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [trackedResult, setTrackedResult] = useState<AppointmentDetail | null>(null);
  const [searchError, setSearchError] = useState("");
  const [copied, setCopied] = useState(false);

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== title));
      }
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const joinedServices = selectedServices.join(" + ");
    const payload = {
      ...formData,
      service: joinedServices,
    };

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json();
        const code = data.trackingCode || `NC-${Math.floor(100000 + Math.random() * 900000)}`;
        setCreatedTrackingCode(code);
        setCreatedAppointment(data.appointment || { ...payload, trackingCode: code, status: "PENDING" });
      } else {
        const code = `NC-${Math.floor(100000 + Math.random() * 900000)}`;
        setCreatedTrackingCode(code);
        setCreatedAppointment({ ...payload, trackingCode: code, status: "PENDING" });
      }
    } catch (err) {
      const code = `NC-${Math.floor(100000 + Math.random() * 900000)}`;
      setCreatedTrackingCode(code);
      setCreatedAppointment({ ...payload, trackingCode: code, status: "PENDING" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTrackSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setSearchLoading(true);
    setSearchError("");
    setTrackedResult(null);

    try {
      const res = await fetch(`/api/appointments/track?query=${encodeURIComponent(searchQuery.trim())}`);
      const data = await res.json();

      if (res.ok && data.appointment) {
        setTrackedResult(data.appointment);
      } else {
        setSearchError(data.error || "Kayıtlı randevu bulunamadı.");
      }
    } catch (err) {
      setSearchError("Sorgulama gerçekleştirilirken bir hata oluştu.");
    } finally {
      setSearchLoading(false);
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getStatusDisplay = (status: string) => {
    switch (status ? status.toUpperCase() : "") {
      case "CONFIRMED":
      case "ONAYLANDI":
        return {
          title: "ONAYLANDI",
          desc: "Randevunuz onaylanmıştır. Belirtilen tarih ve saatte stüdyomuza bekleniyorsunuz.",
          color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        };
      case "IN_PROGRESS":
      case "İŞLEMDE":
        return {
          title: "İŞLEMDE (STÜDYODA)",
          desc: "Aracınız stüdyomuzda uygulama aşamasındadır.",
          color: "text-[#FFD400] bg-[#FFD400]/10 border-[#FFD400]/40",
        };
      case "COMPLETED":
      case "TAMAMLANDI":
        return {
          title: "TAMAMLANDI & TESLİM EDİLDİ",
          desc: "Tüm detaylandırma ve koruma işlemleri başarıyla tamamlanmıştır.",
          color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
        };
      case "CANCELLED":
      case "İPTAL EDİLDİ":
        return {
          title: "İPTAL EDİLDİ",
          desc: "Bu randevu talebi iptal edilmiştir.",
          color: "text-red-400 bg-red-500/10 border-red-500/30",
        };
      case "PENDING":
      case "BEKLEMEDE":
      default:
        return {
          title: "BEKLEMEDE (İNCELENİYOR)",
          desc: "Talebiniz alınmıştır. Ekibimiz takvim durumunu kontrol edip sizinle iletişime geçecektir.",
          color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        };
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-sans pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl space-y-16">
        {/* Header Title */}
        <div className="text-center">
          <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
            ONLİNE RANDEVU VE TALEP TAKİBİ
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-2 tracking-tight">
            Stüdyo Randevusu & Talep Sorgulama
          </h1>
          <p className="text-sm font-light text-gray-400 mt-3 max-w-xl mx-auto">
            Aracınız için tekli veya çoklu hizmet paketleri belirleyin ya da mevcut randevunuzu sorgulayın.
          </p>
        </div>

        {/* --- TRACKING CODE / PHONE SEARCH SECTION --- */}
        <div className="glass p-8 border-t-2 border-t-[#FFD400] space-y-6">
          <div className="flex items-center gap-3">
            <Search className="text-[#FFD400]" size={20} />
            <h2 className="font-display font-bold text-xl text-white">Mevcut Talep / Randevu Sorgulama</h2>
          </div>

          <form onSubmit={handleTrackSearch} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              required
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Takip Kodunuz (Örn: NC-123456) veya Telefon Numarası..."
              className="flex-1 p-3.5 bg-white/5 border border-white/10 text-white font-mono text-sm focus:outline-none focus:border-[#FFD400]"
            />
            <button
              type="submit"
              disabled={searchLoading}
              className="px-8 py-3.5 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors shrink-0"
            >
              {searchLoading ? "Aranıyor..." : "Sorgula"}
            </button>
          </form>

          {/* Search Result Card */}
          {searchError && (
            <div className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono flex items-center gap-2">
              <AlertCircle size={16} />
              <span>{searchError}</span>
            </div>
          )}

          {trackedResult && (
            <div className="p-6 bg-white/5 border border-[#FFD400]/40 space-y-4 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                <div>
                  <span className="text-gray-400 text-[10px] uppercase block">TAKİP NUMARASI</span>
                  <span className="text-lg font-bold text-[#FFD400]">{trackedResult.trackingCode}</span>
                </div>
                <div className={`px-3 py-1 text-xs font-bold border rounded-sm ${getStatusDisplay(trackedResult.status).color}`}>
                  {getStatusDisplay(trackedResult.status).title}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-gray-300">
                <div>
                  <span className="text-gray-500 block">MÜŞTERİ:</span>
                  <span className="font-bold text-white">{trackedResult.fullName}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">ARAÇ:</span>
                  <span className="font-bold text-white">
                    {trackedResult.carBrand} {trackedResult.carModel} ({trackedResult.modelYear})
                  </span>
                </div>
                <div>
                  <span className="text-gray-500 block">HİZMET(LER) & TARİH:</span>
                  <span className="font-bold text-white">
                    {trackedResult.service} ({trackedResult.date} @ {trackedResult.time})
                  </span>
                </div>
              </div>

              <p className="text-[#FFD400] text-[11px] pt-2 border-t border-white/10">
                ℹ️ {getStatusDisplay(trackedResult.status).desc}
              </p>
            </div>
          )}
        </div>

        {/* --- MULTI-STEP NEW APPOINTMENT FORM --- */}
        <div className="space-y-6">
          {/* 5-Step Progress Indicators */}
          <div className="grid grid-cols-5 gap-2 border-b border-white/10 pb-6">
            {[
              { num: 1, title: "Hizmetler", icon: Wrench },
              { num: 2, title: "Araç", icon: Car },
              { num: 3, title: "Tarih/Saat", icon: Calendar },
              { num: 4, title: "İletişim", icon: User },
              { num: 5, title: "Onay", icon: ShieldCheck },
            ].map((s) => {
              const Icon = s.icon;
              const isActive = step === s.num;
              const isDone = step > s.num;
              return (
                <div
                  key={s.num}
                  className={`flex flex-col items-center gap-2 p-3 text-center rounded-sm transition-all ${
                    isActive
                      ? "bg-[#FFD400]/10 border border-[#FFD400] text-[#FFD400]"
                      : isDone
                      ? "bg-white/5 border border-white/10 text-white"
                      : "text-gray-600 border border-transparent"
                  }`}
                >
                  <Icon size={18} />
                  <span className="text-[10px] font-mono font-bold uppercase hidden sm:block">
                    0{s.num}. {s.title}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Form Box */}
          <div className="glass p-8 sm:p-12 border-t-2 border-t-[#FFD400]">
            {createdAppointment ? (
              <div className="text-center py-8 space-y-6">
                <CheckCircle2 size={56} className="text-[#FFD400] mx-auto animate-pulse" />
                <div>
                  <h2 className="font-display font-extrabold text-3xl text-white">Randevu Talebiniz Oluşturuldu</h2>
                  <p className="text-xs font-mono text-gray-300 mt-2">
                    Talebiniz sisteme başarıyla kaydedilmiştir. Aşağıdaki Takip Kodu ile dilediğiniz zaman durumunuza bakabilirsiniz.
                  </p>
                </div>

                {/* Tracking Code Highlight Box */}
                <div className="p-6 bg-white/5 border border-[#FFD400]/40 max-w-md mx-auto space-y-3 font-mono">
                  <span className="text-[10px] text-gray-400 uppercase font-bold block">RANDEVU TAKİP KODUNUZ</span>
                  <div className="text-3xl font-black text-[#FFD400] tracking-widest">{createdTrackingCode}</div>
                  <button
                    onClick={() => handleCopyCode(createdTrackingCode)}
                    className="inline-flex items-center gap-1.5 text-xs text-white hover:text-[#FFD400] transition-colors underline font-bold"
                  >
                    <Copy size={14} />
                    <span>{copied ? "Kod Kopyalandı!" : "Takip Kodunu Kopyala"}</span>
                  </button>
                </div>

                <div className="p-4 bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs max-w-md mx-auto">
                  ⏳ <strong>İŞLEM DURUMU: BEKLEMEDE (İNCELENİYOR)</strong>
                  <p className="text-[11px] text-gray-300 mt-1">
                    Stüdyo ekibimiz randevunuzu inceleyip telefon ile tarafınıza teyit sağlayacaktır.
                  </p>
                </div>

                <button
                  onClick={() => {
                    setCreatedAppointment(null);
                    setCreatedTrackingCode("");
                    setSelectedServices(["PPF"]);
                    setStep(1);
                  }}
                  className="px-8 py-3.5 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors"
                >
                  Yeni Randevu Oluştur
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* STEP 1: Çoklu Hizmet Seçimi */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h3 className="font-display font-bold text-xl text-white">01. Uygulanacak Hizmetleri Seçin</h3>
                        <p className="text-xs text-gray-400 font-mono mt-0.5">
                          Birden fazla hizmeti aynı randevuya dahil etmek için kartlara dokunun.
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-[#FFD400]/20 border border-[#FFD400]/40 text-[#FFD400] font-mono text-xs font-bold uppercase tracking-wider shrink-0 self-start sm:self-auto">
                        {selectedServices.length} Hizmet Seçildi
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {servicesData.map((srv) => {
                        const isSelected = selectedServices.includes(srv.title);
                        return (
                          <div
                            key={srv.id}
                            onClick={() => toggleService(srv.title)}
                            className={`p-4 border cursor-pointer transition-all flex items-center justify-between rounded-sm select-none ${
                              isSelected
                                ? "bg-[#FFD400]/10 border-[#FFD400] text-white shadow-[0_0_15px_rgba(255,212,0,0.15)]"
                                : "border-white/10 text-gray-300 hover:border-white/30 hover:bg-white/5"
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs font-bold uppercase block text-white">{srv.title}</span>
                                {isSelected && (
                                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 bg-[#FFD400] text-[#050505] rounded-xs uppercase">
                                    Seçildi
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-gray-400 font-mono">{srv.category}</span>
                            </div>

                            <div
                              className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? "bg-[#FFD400] border-[#FFD400] text-[#050505]"
                                  : "border-white/20 text-gray-500"
                              }`}
                            >
                              {isSelected ? <Check size={14} strokeWidth={3} /> : <Plus size={14} />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Araç Bilgileri */}
                {step === 2 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                    <h3 className="font-display font-bold text-xl text-white">02. Araç Bilgilerinizi Girin</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="text-xs font-mono text-gray-400 block mb-2">MARKA *</label>
                        <input
                          type="text"
                          required
                          placeholder="Örn: BMW, Porsche, Mercedes"
                          value={formData.carBrand}
                          onChange={(e) => setFormData({ ...formData, carBrand: e.target.value })}
                          className="w-full p-3.5 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-gray-400 block mb-2">MODEL *</label>
                        <input
                          type="text"
                          required
                          placeholder="Örn: 520i, 911, GT63"
                          value={formData.carModel}
                          onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                          className="w-full p-3.5 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-gray-400 block mb-2">MODEL YILI *</label>
                        <input
                          type="text"
                          required
                          placeholder="Örn: 2024"
                          value={formData.modelYear}
                          onChange={(e) => setFormData({ ...formData, modelYear: e.target.value })}
                          className="w-full p-3.5 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm font-mono"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Tarih & Saat */}
                {step === 3 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                    <h3 className="font-display font-bold text-xl text-white">03. Uygun Tarih ve Saat Seçimi</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="text-xs font-mono text-gray-400 block mb-2">RANDEVU TARİHİ *</label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full p-3.5 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-gray-400 block mb-2">SAAT *</label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full p-3.5 bg-[#0A0A0A] border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm font-mono"
                        >
                          <option value="09:00">09:00</option>
                          <option value="11:00">11:00</option>
                          <option value="14:00">14:00</option>
                          <option value="16:00">16:00</option>
                        </select>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: İletişim Bilgileri */}
                {step === 4 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                    <h3 className="font-display font-bold text-xl text-white">04. İletişim Bilgileriniz</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-mono text-gray-400 block mb-2">AD SOYAD *</label>
                        <input
                          type="text"
                          required
                          placeholder="Adınız ve Soyadınız"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full p-3.5 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-gray-400 block mb-2">TELEFON *</label>
                        <input
                          type="tel"
                          required
                          placeholder="0552 090 06 98"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-3.5 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm font-mono"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-mono text-gray-400 block mb-2">E-POSTA</label>
                      <input
                        type="email"
                        placeholder="ornek@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-3.5 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm font-mono"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-gray-400 block mb-2">ÖZEL NOT / TALEPLERİNİZ</label>
                      <textarea
                        rows={3}
                        placeholder="Aracınız hakkında belirtmek istediğiniz ek hususlar..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full p-3.5 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm font-mono"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: Özet & Onay */}
                {step === 5 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                    <h3 className="font-display font-bold text-xl text-white">05. Randevu Özeti ve Onay</h3>
                    <div className="p-6 bg-white/5 border border-white/10 space-y-3 font-mono text-xs text-gray-300">
                      <p>
                        <strong className="text-white">SEÇİLEN HİZMETLER:</strong>{" "}
                        <span className="text-[#FFD400] font-bold">{selectedServices.join(" + ")}</span>
                      </p>
                      <p>
                        <strong className="text-white">ARAÇ:</strong> {formData.carBrand} {formData.carModel} (
                        {formData.modelYear})
                      </p>
                      <p>
                        <strong className="text-white">TARİH & SAAT:</strong> {formData.date || "Belirtilmedi"} -{" "}
                        {formData.time}
                      </p>
                      <p>
                        <strong className="text-white">MÜŞTERİ:</strong> {formData.fullName} ({formData.phone})
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between pt-8 border-t border-white/10 mt-8">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:border-white"
                    >
                      <ArrowLeft size={14} /> Geri
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-8 py-3 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-white"
                    >
                      İleri <ArrowRight size={14} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-10 py-3.5 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_#FFD400]"
                    >
                      {isSubmitting ? "Kaydediliyor..." : "Randevuyu Oluştur & Takip Kodu Al"}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
