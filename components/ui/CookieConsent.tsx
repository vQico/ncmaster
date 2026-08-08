"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    const consent = localStorage.getItem("nc_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("nc_cookie_consent", JSON.stringify({ mandatory: true, analytics: true, marketing: true }));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleAcceptEssential = () => {
    localStorage.setItem("nc_cookie_consent", JSON.stringify({ mandatory: true, analytics: false, marketing: false }));
    setShowBanner(false);
    setShowModal(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem("nc_cookie_consent", JSON.stringify({ mandatory: true, analytics, marketing }));
    setShowBanner(false);
    setShowModal(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Bottom Sticky Cookie Banner */}
      <AnimatePresence>
        {showBanner && !showModal && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-[9990] glass p-6 border-t-2 border-t-[#FFD400] shadow-[0_10px_30px_rgba(0,0,0,0.9)] flex flex-col gap-4"
          >
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
              KVKK & ÇEREZ POLİTİKASI
            </span>
            <p className="text-xs font-light text-gray-300 leading-relaxed">
              NC MASTER, web sitesi deneyiminizi iyileştirmek ve anonim analitik ölçümler yapmak için çerezler kullanmaktadır.
            </p>

            <div className="flex flex-col gap-2">
              <button
                onClick={handleAcceptAll}
                className="w-full py-2.5 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors"
              >
                Tümünü Kabul Et
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleAcceptEssential}
                  className="py-2 border border-white/20 text-gray-300 font-semibold text-[11px] uppercase tracking-wider hover:border-white"
                >
                  Sadece Zorunlu
                </button>
                <button
                  onClick={() => setShowModal(true)}
                  className="py-2 border border-white/20 text-[#FFD400] font-semibold text-[11px] uppercase tracking-wider hover:border-[#FFD400]"
                >
                  Tercihleri Yönet
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Management Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-[#050505]/90 backdrop-blur-md flex items-center justify-center p-6"
          >
            <div className="glass max-w-lg w-full p-8 border-t-2 border-t-[#FFD400] flex flex-col gap-6">
              <div>
                <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
                  ÇEREZ TERCİHLERİ
                </span>
                <h3 className="font-display font-extrabold text-2xl text-white mt-1">
                  Gizlilik ve Çerez Ayarları
                </h3>
              </div>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-4 bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block">ZORUNLU ÇEREZLER</span>
                    <span className="text-[10px] text-gray-400">Güvenlik ve temel site fonksiyonları için zorunludur.</span>
                  </div>
                  <span className="text-[#FFD400] text-[10px] font-bold">SABİT</span>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block">ANALİTİK ÇEREZLER</span>
                    <span className="text-[10px] text-gray-400">Site performansını anonim ölçümlememize yarar.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                    className="accent-[#FFD400] w-4 h-4 cursor-pointer"
                  />
                </div>

                <div className="p-4 bg-white/5 border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-white font-bold block">PAZARLAMA ÇEREZLERİ</span>
                    <span className="text-[10px] text-gray-400">Kişiselleştirilmiş deneyim ve teklif sunumu.</span>
                  </div>
                  <input
                    type="checkbox"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                    className="accent-[#FFD400] w-4 h-4 cursor-pointer"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleSaveCustom}
                  className="flex-1 py-3 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white"
                >
                  Tercihleri Kaydet
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border border-white/20 text-gray-300 font-bold text-xs uppercase tracking-wider"
                >
                  Kapat
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
