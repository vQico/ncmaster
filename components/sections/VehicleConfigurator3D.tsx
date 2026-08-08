"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, Sparkles, Sun, Disc } from "lucide-react";

export default function VehicleConfigurator3D() {
  const [ppfFinish, setPpfFinish] = useState<"gloss" | "matte">("gloss");
  const [tintLevel, setTintLevel] = useState<number>(35);
  const [ceramicActive, setCeramicActive] = useState<boolean>(true);
  const [wheelFinish, setWheelFinish] = useState<"darkTitanium" | "glossBlack">("darkTitanium");

  return (
    <section className="py-28 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
              04 / İNTERAKTİF KONFİGÜRATÖR
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-2 tracking-tight">
              Aracınızı Tasarlayın.
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-400 tracking-wider max-[#300px] uppercase">
            [ PPF Yüzey Sonucu, Cam Filmi Koyu Düzeyi Ve Seramik Katmanını Canlı İnceleyin ]
          </p>
        </div>

        {/* 12-Column Configurator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visualizer Canvas Area (8 Cols) */}
          <div className="lg:col-span-8 relative w-full h-[400px] sm:h-[550px] bg-[#0A0A0A] border border-white/10 overflow-hidden flex items-center justify-center p-6 rounded-sm">
            {/* Visual Vehicle Image with Material Filters */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000&auto=format&fit=crop"
                alt="Automotive Customization Configurator"
                className={`w-full h-full object-cover transition-all duration-700 ${
                  ppfFinish === "matte"
                    ? "contrast-90 brightness-90 saturate-50 blur-[0.3px]"
                    : "contrast-125 brightness-105 saturate-100"
                }`}
              />

              {/* Ceramic Water Bead Hydrophobic Overlay Effect */}
              {ceramicActive && (
                <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-60 bg-[radial-gradient(circle_at_center,_rgba(255,212,0,0.15)_0%,_transparent_70%)] animate-pulse" />
              )}

              {/* Tint Overlay Simulation */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-500"
                style={{
                  backgroundColor: "rgba(5,5,5,0.4)",
                  opacity: tintLevel / 100,
                }}
              />
            </div>

            {/* Active Specs HUD Badges */}
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <div className="glass px-3 py-1.5 text-[10px] font-mono tracking-widest text-white uppercase border-l-2 border-l-[#FFD400]">
                PPF: <span className="text-[#FFD400]">{ppfFinish === "gloss" ? "PARLAK (GLOSS)" : "MAT (SATIN MATTE)"}</span>
              </div>
              <div className="glass px-3 py-1.5 text-[10px] font-mono tracking-widest text-white uppercase border-l-2 border-l-[#FFD400]">
                SERAMİK: <span className="text-[#FFD400]">{ceramicActive ? "AKTİF (HYDROPHOBIC 9H)" : "KAPALISIZ"}</span>
              </div>
              <div className="glass px-3 py-1.5 text-[10px] font-mono tracking-widest text-white uppercase border-l-2 border-l-[#FFD400]">
                CAM FİLMİ: <span className="text-[#FFD400]">% {tintLevel} TONLAMA</span>
              </div>
            </div>
          </div>

          {/* Right Customization Controls Sidebar (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Control 1: PPF Finish */}
            <div className="glass p-6 flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white uppercase">
                <Shield size={16} className="text-[#FFD400]" />
                <span>1. PPF KAPLAMA TİPİ</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPpfFinish("gloss")}
                  className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border transition-all ${
                    ppfFinish === "gloss"
                      ? "bg-[#FFD400] text-[#050505] border-[#FFD400]"
                      : "border-white/10 text-gray-300 hover:border-white/30"
                  }`}
                >
                  PARLAK GLOSS
                </button>
                <button
                  onClick={() => setPpfFinish("matte")}
                  className={`py-3 px-4 text-xs font-bold uppercase tracking-wider border transition-all ${
                    ppfFinish === "matte"
                      ? "bg-[#FFD400] text-[#050505] border-[#FFD400]"
                      : "border-white/10 text-gray-300 hover:border-white/30"
                  }`}
                >
                  SATIN MATTE
                </button>
              </div>
            </div>

            {/* Control 2: Ceramic Hydrophobic Coating Toggle */}
            <div className="glass p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white uppercase">
                  <Sparkles size={16} className="text-[#FFD400]" />
                  <span>2. 9H NANO SERAMİK KATMANI</span>
                </div>
                <button
                  onClick={() => setCeramicActive(!ceramicActive)}
                  className={`w-6 h-6 rounded flex items-center justify-center border transition-all ${
                    ceramicActive ? "bg-[#FFD400] border-[#FFD400] text-[#050505]" : "border-white/20 text-transparent"
                  }`}
                >
                  <Check size={14} />
                </button>
              </div>
              <p className="text-xs text-gray-400 font-light">
                Hidrofobik su kaydırıcılık ve derin ayna yansıması.
              </p>
            </div>

            {/* Control 3: Window Tint Slider */}
            <div className="glass p-6 flex flex-col gap-4">
              <div className="flex items-center justify-between text-xs font-mono font-bold tracking-widest text-white uppercase">
                <div className="flex items-center gap-2">
                  <Sun size={16} className="text-[#FFD400]" />
                  <span>3. CAM FİLMİ TONU</span>
                </div>
                <span className="text-[#FFD400]">% {tintLevel}</span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                step="5"
                value={tintLevel}
                onChange={(e) => setTintLevel(Number(e.target.value))}
                className="w-full accent-[#FFD400] cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
