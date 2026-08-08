"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, BookOpen, Eye } from "lucide-react";
import Link from "next/link";

export default function AdminBlogPage() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "PPF Kaplama Nedir? Lüks Araçlar İçin Neden Hayati Öneme Sahiptir?", cat: "PPF Kaplama", date: "05 Ağu 2026", status: "Yayında" },
    { id: 2, title: "Nano Seramik Kaplama Avantajları ve Şehir İçi Kullanımda Boya Dayanımı", cat: "Seramik Kaplama", date: "28 Tem 2026", status: "Yayında" },
    { id: 3, title: "PPF Kaplama mı Seramik Kaplama mı? İki Koruma Arasındaki Temel Farklar", cat: "Boya Koruma", date: "15 Tem 2026", status: "Taslak" },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-extrabold text-white">
            Blog & İçerik CMS
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            SEO odaklı blog yazılarını düzenleyin, ekleyin ve yayımlayın.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-pink text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform">
          <Plus size={16} />
          <span>Yeni Yazı Oluştur</span>
        </button>
      </div>

      <div className="glass rounded-3xl p-6 border border-white/10 overflow-x-auto">
        <table className="w-full text-left text-xs text-gray-300">
          <thead className="text-[10px] uppercase tracking-wider text-gray-500 border-b border-white/10">
            <tr>
              <th className="pb-3">Başlık</th>
              <th className="pb-3">Kategori</th>
              <th className="pb-3">Tarih</th>
              <th className="pb-3">Durum</th>
              <th className="pb-3 text-right">İşlemler</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {blogs.map((b) => (
              <tr key={b.id} className="hover:bg-white/5 transition-colors">
                <td className="py-4 font-bold text-white max-w-md">{b.title}</td>
                <td className="py-4 text-brand-pink font-medium">{b.cat}</td>
                <td className="py-4 text-gray-400">{b.date}</td>
                <td className="py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                    b.status === "Yayında" ? "bg-emerald-500/20 text-emerald-400" : "bg-yellow-500/20 text-yellow-400"
                  }`}>
                    {b.status}
                  </span>
                </td>
                <td className="py-4 text-right space-x-2">
                  <button className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white">
                    <Edit2 size={14} />
                  </button>
                  <button className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white">
                    <Trash2 size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
