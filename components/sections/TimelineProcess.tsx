"use client";

import React from "react";
import { motion } from "framer-motion";

interface StepItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
}

const processSteps: StepItem[] = [
  {
    number: "01",
    title: "KEŞİF & ANALİZ",
    subtitle: "Mikron Boya Ölçümü",
    description: "Araç stüdyoya kabul edilir, boya kalınlığı dijital mikrometre ile ölçülür ve yüzey hasar analizi raporlanır.",
    details: ["Boya Mikron Raporu", "Yüzey Işık Kontrolü", "Özel Reçete Seçimi"],
  },
  {
    number: "02",
    title: "HAZIRLIK & STERİLİZASYON",
    subtitle: "Demir Tozu & Kil Dekontaminasyonu",
    description: "Araç yüzeyi pH nötr köpüklerle yıkanır, demir tozu ve zift kalıntıları kille arındırılarak polisaj ortamı hazırlanır.",
    details: ["Susuz Buhar Yıkama", "Sentetik Kil İşlemi", "Bantlama & İzolasyon"],
  },
  {
    number: "03",
    title: "HASSAS UYGULAMA",
    subtitle: "Steril İklimli Stüdyo",
    description: "Sıcaklık ve nem kontrollü özel alanda PPF kaplama, boya düzeltme veya seramik kaplama milimetrik titizlikle uygulanır.",
    details: ["Sıfır Toz Odası", "Özel Plotter Kesim PPF", "Kürlenme Süreci"],
  },
  {
    number: "04",
    title: "TESLİMAT & DESTEK",
    subtitle: "Son Kalite Kontrol Raporu",
    description: "Skanglo özel detay ışıkları altında son incelemeler yapılır, bakım rehberi ve garanti belgesi ile araç teslim edilir.",
    details: ["Işık Altı Kontrol", "Yayınlanan Dijital Profil", "Sonrası Destek"],
  },
];

export default function TimelineProcess() {
  return (
    <section id="yaklasim" className="py-28 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
            06 / PROSES & METODOLOJİ
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-3 leading-tight tracking-tight">
            NC MASTER Deneyimi.
          </h2>
          <p className="text-sm font-light text-gray-300 mt-4 leading-relaxed">
            Aracınızın stüdyomuza girişinden teslim anına kadar olan 4 aşamalı mühendislik yaklaşımımız.
          </p>
        </div>

        {/* 4-Step Process Grid with Connecting Yellow Line */}
        <div className="relative">
          {/* Thin Horizontal Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-[2px] bg-white/10 z-0">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-[#FFD400] shadow-[0_0_12px_#FFD400]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 * idx }}
                className="glass p-8 border-t-2 border-t-[#FFD400] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#FFD400] text-[#050505] font-mono font-black text-sm flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,212,0,0.5)]">
                    {step.number}
                  </div>

                  <h3 className="font-display font-extrabold text-xl text-white mb-1">
                    {step.title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#FFD400] uppercase tracking-wider block mb-4">
                    {step.subtitle}
                  </span>

                  <p className="text-xs font-light text-gray-300 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-1.5">
                  {step.details.map((detail, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[10px] font-mono text-gray-400 flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#FFD400]" />
                      {detail}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
