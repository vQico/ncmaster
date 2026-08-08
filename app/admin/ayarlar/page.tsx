"use client";

import { useState } from "react";
import { Save, Check, Settings, Phone, MapPin, Instagram } from "lucide-react";

export default function AdminAyarlarPage() {
  const [phone, setPhone] = useState("+90 552 090 06 98");
  const [address, setAddress] = useState("Cumhuriyet Mahallesi, Gazi Mustafa Kemal Bulvarı, No:248/A, Mersin Türkiye");
  const [instagram, setInstagram] = useState("nc_master33");
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
            Stüdyo & Firma Ayarları
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            İletişim numaraları, adres bilgileri ve sosyal medya bağlantıları.
          </p>
        </div>

        <button
          onClick={handleSave}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-goldPrimary text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
        >
          {saved ? <Check size={16} /> : <Save size={16} />}
          <span>{saved ? "Ayarlar Kaydedildi" : "Genel Ayarları Kaydet"}</span>
        </button>
      </div>

      <div className="glass p-8 rounded-3xl border border-white/10 space-y-6 max-w-3xl">
        <div>
          <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
            Resmi Stüdyo Telefonu (Hemen Ara Butonları)
          </label>
          <div className="relative">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-pink/50 font-bold"
            />
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-pink size-4" />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
            Fiziksel Stüdyo Adresi
          </label>
          <div className="relative">
            <textarea
              rows={2}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-pink/50"
            />
            <MapPin className="absolute left-4 top-5 text-brand-pink size-4" />
          </div>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2">
            Resmi Instagram Kullanıcı Adı
          </label>
          <div className="relative">
            <input
              type="text"
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-pink/50 font-semibold"
            />
            <Instagram className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-pink size-4" />
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 text-xs text-gray-500 flex justify-between items-center">
          <span>Tasarım ve Altyapı Sağlayıcısı: <strong>H-WK Digital.</strong></span>
          <span>Sürüm 1.0 Enterprise</span>
        </div>
      </div>
    </div>
  );
}
