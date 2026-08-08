"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Shield } from "lucide-react";
import Image from "next/image";

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: { id: number; title: string; category: string; image: string; vehicle: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export default function LightboxModal({
  isOpen,
  onClose,
  items,
  currentIndex,
  onNavigate,
}: LightboxModalProps) {
  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  const handlePrev = () => {
    const nextIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    onNavigate(nextIndex);
  };

  const handleNext = () => {
    const nextIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    onNavigate(nextIndex);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[10000] bg-[#050505]/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-3 rounded-full glass hover:border-brand-pink/50 text-white transition-all hover:scale-110"
          aria-label="Kapat"
        >
          <X size={24} />
        </button>

        {/* Prev / Next Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full glass hover:border-brand-pink/50 text-white transition-all hover:scale-110"
          aria-label="Önceki"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full glass hover:border-brand-pink/50 text-white transition-all hover:scale-110"
          aria-label="Sonraki"
        >
          <ChevronRight size={28} />
        </button>

        {/* Main Display Area */}
        <div className="max-w-5xl w-full flex flex-col items-center">
          <motion.div
            key={currentItem.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-[50vh] sm:h-[65vh] md:h-[72vh] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.9)]"
          >
            <Image
              src={currentItem.image}
              alt={currentItem.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

            {/* Title & Info Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Shield size={16} className="text-brand-pink" />
                  <span className="text-xs uppercase tracking-widest text-brand-pink font-semibold">
                    {currentItem.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-white">
                  {currentItem.title}
                </h3>
                <p className="text-xs text-gray-400 font-light mt-1">
                  Araç: {currentItem.vehicle}
                </p>
              </div>

              <a
                href="tel:+905520900698"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-brand-pink to-brand-goldPrimary text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-transform"
              >
                Bu Uygulama İçin Bilgi Al
              </a>
            </div>
          </motion.div>

          <span className="text-xs text-gray-500 mt-4 tracking-widest">
            {currentIndex + 1} / {items.length}
          </span>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
