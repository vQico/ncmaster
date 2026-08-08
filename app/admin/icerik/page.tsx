"use client";

import { useState } from "react";
import { Save, Check, Layers, Image as ImageIcon, Type, Sparkles } from "lucide-react";

export default function AdminIcerikPage() {
  const [heroTitle, setHeroTitle] = useState("Aracınız İçin Üstün Koruma, Kusursuz İşçilik ve Teknoloji");
  const [heroSub, setHeroSub] = useState("Şeffaf PPF Boya Koruma Filmi, Nano Seramik Kaplama ve Profesyonel Otomotiv Yüzey Restorasyonu Hizmetleri.");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-extrabold text-white">
            İçerik Yönetimi (CMS)
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Ana sayfa ve kurumsal metinleri canlı olarak güncelleyin.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-goldPrimary text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
        >
          {saved ? <Check size={16} /> : <Save size={16} />}
          <span>{saved ? "Değişiklikler Kaydedildi" : "Değişiklikleri Kaydet"}</span>
        </button>
      </div>

      {/* Editor Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass p-8 rounded-3xl border border-white/10 space-y-6">
          <h3 className="font-playfair text-xl font-bold text-white flex items-center gap-2">
            <Type className="text-brand-pink" />
            Ana Sayfa Hero Metinleri
          </h3>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
              Hero Ana Başlık (Turkish Headline)
            </label>
            <textarea
              rows={3}
              value={heroTitle}
              onChange={(e) => setHeroTitle(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-playfair font-bold text-lg focus:outline-none focus:border-brand-pink/50"
            />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
              Hero Alt Açıklama Metni
            </label>
            <textarea
              rows={3}
              value={heroSub}
              onChange={(e) => setHeroSub(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-pink/50"
            />
          </div>
        </div>

        {/* Live Preview Panel */}
        <div className="glass p-8 rounded-3xl border border-brand-pink/30 space-y-4">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-pink block">
            Canlı Önizleme Mode
          </span>
          <div className="p-6 rounded-2xl bg-[#050505] border border-white/10 space-y-4">
            <h2 className="font-playfair text-2xl font-bold text-white leading-tight">
              {heroTitle}
            </h2>
            <p className="text-xs text-gray-300 font-light leading-relaxed">
              {heroSub}
            </p>
            <div className="pt-2">
              <span className="px-4 py-2 rounded-full bg-brand-pink text-white font-bold text-[10px] uppercase">
                Hemen Ara Button Active
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
