"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Cpu, ArrowUpRight, Lock } from "lucide-react";
import Link from "next/link";

export default function VehicleCareCockpit() {
  return (
    <section className="py-28 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text & Pitch (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
              07 / DİJİTAL KOKPİT
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-3 leading-tight tracking-tight">
              NC MASTER <br />
              VEHICLE CARE
            </h2>
            <p className="font-display text-xl text-gray-300 font-light italic mt-4">
              "Aracınızın geçmişi, gelecekteki bakımının anahtarıdır."
            </p>
            <p className="text-sm font-light text-gray-400 mt-6 leading-relaxed">
              Stüdyomuzda işlem gören tüm araçlar şasi numarası ve plakası ile dijital garanti sistemimize kaydedilir. Uygulanan katmanlar, son bakım tarihleri ve periyodik kontrol takvimi müşterilerimize özel sistemimiz üzerinden takip edilir.
            </p>
          </div>

          {/* Right Automotive Digital Cockpit Card (7 Cols) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass p-8 sm:p-10 border-t-2 border-t-[#FFD400] relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)]"
            >
              {/* Cockpit Header Status */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Cpu size={20} className="text-[#FFD400]" />
                  <span className="font-mono text-xs font-bold tracking-widest text-white uppercase">
                    DİJİTAL SİSTEM KOKPİTİ
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-ping" />
                  <span className="text-[10px] font-mono text-[#FFD400] uppercase tracking-wider">
                    SİSTEM AKTİF
                  </span>
                </div>
              </div>

              {/* Active Vehicle Info */}
              <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wide">
                    BMW 5 SERİSİ
                  </h3>
                  <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">
                    MODEL YILI: 2024 | ŞASİ NO: WBA513000...
                  </span>
                </div>
                <div className="px-4 py-2 border border-[#FFD400]/40 bg-[#FFD400]/10 text-[#FFD400] text-xs font-mono font-bold tracking-widest rounded-sm">
                  GARANTİ KAPSAMINDA
                </div>
              </div>

              {/* Protection Modules Status Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-y border-white/10">
                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">PPF KORUMA</span>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#FFD400]" />
                    <span className="text-xs font-extrabold text-white uppercase">FULL BODY ACTIVE</span>
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">NANO SERAMİK</span>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#FFD400]" />
                    <span className="text-xs font-extrabold text-white uppercase">9H MATRIX ACTIVE</span>
                  </div>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-sm">
                  <span className="text-[10px] font-mono text-gray-400 block mb-1">CAM FİLMİ</span>
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[#FFD400]" />
                    <span className="text-xs font-extrabold text-white uppercase">IR NANO ACTIVE</span>
                  </div>
                </div>
              </div>

              {/* Maintenance Schedule Timeline */}
              <div className="pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar size={16} className="text-[#FFD400]" />
                  <span>SON HİZMET: <strong className="text-white">08.08.2026</strong></span>
                </div>
                <div className="flex items-center gap-2 text-[#FFD400]">
                  <Lock size={14} />
                  <span>SONRAKİ BAKIM: PREMİUM YILLIK KONTROL</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
