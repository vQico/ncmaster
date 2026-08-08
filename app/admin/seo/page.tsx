"use client";

import { useState } from "react";
import { Search, Save, Check, Globe } from "lucide-react";

export default function AdminSEOPage() {
  const [metaTitle, setMetaTitle] = useState("NC Master | Mersin PPF Boya Koruma Filmi & Seramik Kaplama Stüdyosu");
  const [metaDesc, setMetaDesc] = useState("Mersin'de luxury ve egzotik araçlar için 1. sınıf PPF şeffaf boya koruma filmi, nano seramik kaplama ve restorasyon stüdyosu. İletişim: +90 552 090 06 98");
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
            SEO & Arama Motoru Ayarları
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Meta başlıklar, açıklamalar ve canonical URL yapılandırması.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-goldPrimary text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
        >
          {saved ? <Check size={16} /> : <Save size={16} />}
          <span>{saved ? "Kaydedildi" : "SEO Ayarlarını Kaydet"}</span>
        </button>
      </div>

      <div className="glass p-8 rounded-3xl border border-white/10 space-y-6 max-w-3xl">
        <div>
          <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
            Ana Meta Title (Arama Motoru Başlığı)
          </label>
          <input
            type="text"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-pink/50 font-semibold"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
            Ana Meta Description (Arama Motoru Özeti)
          </label>
          <textarea
            rows={3}
            value={metaDesc}
            onChange={(e) => setMetaDesc(e.target.value)}
            className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-pink/50"
          />
        </div>

        {/* Google Snippet Live Preview */}
        <div className="p-6 rounded-2xl bg-[#050505] border border-white/10 space-y-1">
          <span className="text-[10px] text-gray-500 font-mono block mb-1">Google Arama Önizlemesi</span>
          <h4 className="text-blue-400 font-medium text-base hover:underline cursor-pointer">
            {metaTitle}
          </h4>
          <span className="text-xs text-emerald-400 block font-mono">https://ncmaster.com</span>
          <p className="text-xs text-gray-400 leading-relaxed font-light pt-1">
            {metaDesc}
          </p>
        </div>
      </div>
    </div>
  );
}
