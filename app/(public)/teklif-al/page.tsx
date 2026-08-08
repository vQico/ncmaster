"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowUpRight, Upload } from "lucide-react";

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased">
      <section className="pt-36 pb-24 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-12">
            <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
              KİŞİSELLEŞTİRİLMİŞ TEKLİF
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-2 tracking-tight">
              Aracınız İçin Teklif Alın.
            </h1>
            <p className="text-sm font-light text-gray-400 mt-3 leading-relaxed">
              Aracınızın detaylarını ve taleplerinizi iletin, stüdyo uzmanlarımız en uygun koruma reçetesini ve fiyatlandırmayı hazırlasın.
            </p>
          </div>

          <div className="glass p-8 sm:p-12 border-t-2 border-t-[#FFD400]">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <CheckCircle2 size={64} className="text-[#FFD400] mb-4 animate-bounce" />
                <h2 className="font-display font-extrabold text-3xl text-white mb-2">
                  Teklif Talebiniz Hazırlanıyor.
                </h2>
                <p className="text-sm font-light text-gray-300 max-w-md leading-relaxed mb-8">
                  Uzmanlarımız aracınızın detaylarını inceleyip en kısa sürede WhatsApp veya telefon aracılığıyla size özel teklifi sunacaktır.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest"
                >
                  Yeni Teklif İstenebilir
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-400 block mb-2">AD SOYAD *</label>
                    <input
                      type="text"
                      required
                      placeholder="Adınız ve Soyadınız"
                      className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-gray-400 block mb-2">TELEFON *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+90 5XX XXX XX XX"
                      className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-mono text-gray-400 block mb-2">MARKA *</label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: BMW"
                      className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-gray-400 block mb-2">MODEL *</label>
                    <input
                      type="text"
                      required
                      placeholder="Örn: M3 Competition"
                      className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-gray-400 block mb-2">MODEL YILI</label>
                    <input
                      type="text"
                      placeholder="2024"
                      className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-[#FFD400] block mb-2">TALEP EDİLEN HİZMETLER</label>
                  <select className="w-full p-3 bg-[#0A0A0A] border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm">
                    <option>Tam Gövde PPF Kaplama (Full Body)</option>
                    <option>Ön Bölge Koruma PPF (Front Package)</option>
                    <option>9H Nano Seramik Kaplama</option>
                    <option>Araç Renk Kaplama (Vinyl Wrap)</option>
                    <option>Kapsamlı İç & Dış Detailing</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-2">ARAÇ FOTOĞRAFI YÜKLE (OPSİYONEL)</label>
                  <div className="border border-dashed border-white/20 p-6 text-center rounded-sm hover:border-[#FFD400] transition-colors cursor-pointer flex flex-col items-center">
                    <Upload size={24} className="text-[#FFD400] mb-2" />
                    <span className="text-xs font-mono text-gray-300">Fotoğraf Yüklemek İçin Tıklayın</span>
                    <span className="text-[10px] text-gray-500 mt-1">PNG, JPG veya WEBP (Maks 10MB)</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-2">AÇIKLAMA / NOTLAR</label>
                  <textarea
                    rows={4}
                    placeholder="Aracınızın mevcut durumu, boya rengi veya özel isteklerinizi buraya yazabilirsiniz..."
                    className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2"
                >
                  <span>Teklif Talebini Gönder</span>
                  <ArrowUpRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
