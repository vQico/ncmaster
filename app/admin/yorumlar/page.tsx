"use client";

import { useState } from "react";
import { Star, Plus, Trash2, Check } from "lucide-react";

export default function AdminYorumlarPage() {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Murat Yıldırım", car: "Porsche 911 Carrera S", comment: "Porsche aracımın tüm kaportasını şeffaf PPF kaplattım. İşçilik muazzam.", rating: 5, status: "Onaylı" },
    { id: 2, name: "Ahmet Kaan Erdem", car: "Mercedes-AMG G63", comment: "Seramik kaplama sonrası su iticilik harika.", rating: 5, status: "Onaylı" },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-extrabold text-white">
            Müşteri Yorumları Yönetimi
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Müşteri değerlendirmelerini inceleyin ve ana sayfada sergileyin.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-pink text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform">
          <Plus size={16} />
          <span>Yeni Yorum Ekle</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((r) => (
          <div key={r.id} className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-white text-base">{r.name}</h4>
                <div className="flex text-brand-goldPrimary">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-goldPrimary" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-brand-pink font-semibold block mb-3">{r.car}</span>
              <p className="text-xs text-gray-300 font-light italic leading-relaxed mb-4">
                &ldquo;{r.comment}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold">
                {r.status}
              </span>
              <button
                onClick={() => setReviews(reviews.filter((x) => x.id !== r.id))}
                className="p-1.5 rounded-md bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
