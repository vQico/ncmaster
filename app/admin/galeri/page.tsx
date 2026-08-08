"use client";

import { useState } from "react";
import { Upload, Plus, Trash2, Tag, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function AdminGaleriPage() {
  const [items, setItems] = useState([
    { id: 1, title: "Porsche 911 GT3 - Stealth PPF", cat: "PPF Kaplama", img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=600&auto=format&fit=crop" },
    { id: 2, title: "Mercedes-AMG G63 - Nano Seramik", cat: "Seramik Kaplama", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop" },
    { id: 3, title: "BMW M8 Competition - Gloss Film", cat: "PPF Kaplama", img: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=600&auto=format&fit=crop" },
  ]);

  const handleDelete = (id: number) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-playfair text-3xl font-extrabold text-white">
            Galeri & Medya Yönetimi
          </h1>
          <p className="text-xs text-gray-400 mt-1">
            Araç fotoğrafları ve stüdyo uygulama portfolyosunu yönetin.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-pink text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform">
          <Upload size={16} />
          <span>Yeni Görsel Yükle</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="glass rounded-2xl overflow-hidden border border-white/10 relative group">
            <div className="relative h-48 w-full">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
            </div>

            <div className="p-5 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-brand-pink tracking-wider block">
                  {item.cat}
                </span>
                <h4 className="font-bold text-sm text-white">{item.title}</h4>
              </div>

              <button
                onClick={() => handleDelete(item.id)}
                className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
