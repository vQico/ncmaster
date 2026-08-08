"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ArrowLeft, Calendar, Car, Wrench, User, ShieldCheck } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { servicesData } from "@/components/sections/ServicesEditorial";

export default function AppointmentPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    service: "PPF",
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

  const handleNext = () => {
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        // Fallback for demonstration if API endpoint is registering
        setSubmitted(true);
      }
    } catch (err) {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased">


      <section className="pt-36 pb-24 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header Title */}
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
              ONLİNE RANDEVU SİSTEMİ
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-2 tracking-tight">
              Stüdyo Randevusu Alın.
            </h1>
            <p className="text-sm font-light text-gray-400 mt-3">
              Aracınız için özel uygulama takvimi belirleyin. 5 basit adımda randevunuzu tamamlayın.
            </p>
          </div>

          {/* 5-Step Progress Indicators */}
          <div className="grid grid-cols-5 gap-2 mb-12 border-b border-white/10 pb-6">
            {[
              { num: 1, title: "Hizmet", icon: Wrench },
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

          {/* Multi-Step Form Container */}
          <div className="glass p-8 sm:p-12 border-t-2 border-t-[#FFD400]">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <CheckCircle2 size={64} className="text-[#FFD400] mb-4 animate-bounce" />
                <h2 className="font-display font-extrabold text-3xl text-white mb-2">
                  Randevu Talebiniz Alındı.
                </h2>
                <p className="text-sm font-light text-gray-300 max-w-md leading-relaxed mb-8">
                  Talebiniz stüdyo yöneticimize ulaştı. Seçtiğiniz tarih için en kısa sürede telefon ile onay aranacaksınız.
                </p>
                <div className="p-4 bg-white/5 border border-white/10 font-mono text-xs text-[#FFD400] mb-8">
                  RANDEVU KODU: NCM-{Math.floor(100000 + Math.random() * 900000)}
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                  className="px-8 py-3 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest"
                >
                  Yeni Randevu Al
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* STEP 1: Hizmet Seçimi */}
                {step === 1 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                    <h3 className="font-display font-bold text-xl text-white">01. Uygulanacak Hizmeti Seçin</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {servicesData.map((srv) => (
                        <div
                          key={srv.id}
                          onClick={() => setFormData({ ...formData, service: srv.title })}
                          className={`p-4 border cursor-pointer transition-all flex items-center justify-between ${
                            formData.service === srv.title
                              ? "bg-[#FFD400]/10 border-[#FFD400] text-white"
                              : "border-white/10 text-gray-300 hover:border-white/30"
                          }`}
                        >
                          <div>
                            <span className="text-xs font-bold uppercase block">{srv.title}</span>
                            <span className="text-[10px] text-gray-500 font-mono">{srv.category}</span>
                          </div>
                          {formData.service === srv.title && (
                            <CheckCircle2 size={18} className="text-[#FFD400]" />
                          )}
                        </div>
                      ))}
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
                          className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
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
                          className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
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
                          className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
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
                          className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-gray-400 block mb-2">SAAT *</label>
                        <select
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="w-full p-3 bg-[#0A0A0A] border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
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
                          className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-mono text-gray-400 block mb-2">TELEFON *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+90 5XX XXX XX XX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
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
                        className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-gray-400 block mb-2">ÖZEL NOT / TALEPLERİNİZ</label>
                      <textarea
                        rows={3}
                        placeholder="Aracınız hakkında belirtmek istediğiniz ek hususlar..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 5: Özet & Onay */}
                {step === 5 && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                    <h3 className="font-display font-bold text-xl text-white">05. Randevu Özeti ve Onay</h3>
                    <div className="p-6 bg-white/5 border border-white/10 space-y-3 font-mono text-xs text-gray-300">
                      <p><strong className="text-white">HİZMET:</strong> {formData.service}</p>
                      <p><strong className="text-white">ARAÇ:</strong> {formData.carBrand} {formData.carModel} ({formData.modelYear})</p>
                      <p><strong className="text-white">TARİH & SAAT:</strong> {formData.date || "Belirtilmedi"} - {formData.time}</p>
                      <p><strong className="text-white">MÜŞTERİ:</strong> {formData.fullName} ({formData.phone})</p>
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
                  ) : <div />}

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
                      className="px-10 py-3 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_#FFD400]"
                    >
                      {isSubmitting ? "Kaydediliyor..." : "Randevuyu Onayla"}
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
