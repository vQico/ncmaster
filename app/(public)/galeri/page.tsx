"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Shield, Maximize2 } from "lucide-react";
import LightboxModal from "@/components/sections/LightboxModal";

export default function GaleriPage() {
  const [activeTab, setActiveTab] = useState("Tümü");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const tabs = ["Tümü", "PPF Kaplama", "Seramik Kaplama", "Detaylı Temizlik", "Lüks Araçlar"];

  const allProjects = [
    {
      id: 1,
      title: "Porsche 911 GT3 - Full Stealth PPF",
      category: "PPF Kaplama",
      vehicle: "Porsche 911 GT3",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Mercedes-AMG G63 - Nano Seramik 9H",
      category: "Seramik Kaplama",
      vehicle: "Mercedes-AMG G63",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "BMW M8 Competition - Shiny Gloss Film",
      category: "PPF Kaplama",
      vehicle: "BMW M8",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Audi RS6 Avant - Yüzey Restorasyonu",
      category: "Detaylı Temizlik",
      vehicle: "Audi RS6",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "Range Rover Autobiography - Karoseri Koruma",
      category: "Lüks Araçlar",
      vehicle: "Range Rover",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Ferrari F8 Tributo - Stüdyo Kürleşmesi",
      category: "Seramik Kaplama",
      vehicle: "Ferrari F8",
      image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const filteredProjects =
    activeTab === "Tümü"
      ? allProjects
      : allProjects.filter((p) => p.category === activeTab || (activeTab === "Lüks Araçlar" && (p.vehicle.includes("Porsche") || p.vehicle.includes("Ferrari") || p.vehicle.includes("Mercedes"))));

  return (
    <div className="pt-28 pb-20 bg-[#050505] text-white min-h-screen">
      {/* Header */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 text-center">
          <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-3">
            Görsel Kanıt
          </span>
          <h1 className="font-playfair text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Uygulama Portfolyomuz
          </h1>
          <p className="text-gray-300 font-light text-base sm:text-lg max-w-2xl mx-auto mb-10">
            NC Master stüdyosunda özenle tamamlanan lüks ve performans araçlarının yüksek çözünürlüklü görselleri.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-brand-pink text-white shadow-[0_0_20px_rgba(233,79,175,0.4)]"
                    : "glass text-gray-400 hover:text-white hover:border-brand-pink/40"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
                onClick={() => {
                  setCurrentIdx(idx);
                  setLightboxOpen(true);
                }}
                className="aspect-[4/3] rounded-3xl overflow-hidden glass relative group cursor-pointer border border-white/10"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Overlay details */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-xs">
                  <div className="flex justify-between items-center">
                    <span className="bg-brand-pink/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-white">
                      <Maximize2 size={16} />
                    </div>
                  </div>

                  <div>
                    <h3 className="font-playfair text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-300 font-light">
                      Araç Model: {project.vehicle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredProjects}
        currentIndex={currentIdx}
        onNavigate={(newIdx) => setCurrentIdx(newIdx)}
      />
    </div>
  );
}
