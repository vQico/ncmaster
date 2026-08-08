"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeImage = "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=2000&auto=format&fit=crop",
  afterImage = "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=2000&auto=format&fit=crop",
  beforeLabel = "KORUMASIZ / YÜZEY HASARI",
  afterLabel = "PPF ZIRHI / KUSURSUZ ŞEFFAFLIK",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="py-28 bg-[#050505] border-b border-white/10 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
            03 / PPF IMZA DENEYİMİ
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-3 leading-tight tracking-tight">
            Boyayı değiştirmeden, <br />
            <span className="text-gray-400 font-light italic">karakterini koruyun.</span>
          </h2>
          <p className="text-sm font-light text-gray-300 mt-4 leading-relaxed">
            Hassas poliüretan koruma filmi sayesinde aracınızın fabrika boyasını dış etkenlerden tamamen izole edin.
          </p>
        </div>

        {/* Technical Visual Annotations Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-8">
          {[
            { tag: "ÇİZİK KORUMASI", desc: "Isı ile kendi kendini onarır" },
            { tag: "TAŞ DARBESİ", desc: "Darbe emici yüksek elastikiyet" },
            { tag: "UV KORUMASI", desc: "Sararmaya ve solmaya son" },
            { tag: "YÜZEY KORUMASI", desc: "Hidrofobik leke tutmaz yapı" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="glass p-4 border-l-2 border-l-[#FFD400] flex flex-col justify-between"
            >
              <span className="text-[11px] font-mono font-bold tracking-wider text-white uppercase">
                {item.tag}
              </span>
              <span className="text-[10px] text-gray-400 font-light mt-1">
                {item.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Comparison Slider Container */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
          data-cursor="KAYDIR"
          className="relative w-full h-[400px] sm:h-[600px] max-w-6xl mx-auto overflow-hidden select-none cursor-ew-resize border border-white/10 rounded-sm"
        >
          {/* AFTER Image (Full Canvas Base) */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={afterImage}
              alt="PPF Koruma Sonrası"
              className="w-full h-full object-cover filter brightness-105 contrast-110"
            />
            <div className="absolute bottom-6 right-6 bg-[#050505]/80 backdrop-blur border border-[#FFD400]/40 px-4 py-2 text-xs font-mono tracking-widest text-[#FFD400] uppercase">
              {afterLabel}
            </div>
          </div>

          {/* BEFORE Image (Clipped Overlay) */}
          <div
            className="absolute inset-0 h-full overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={beforeImage}
              alt="PPF Koruma Öncesi"
              className="w-full h-full object-cover filter brightness-75 contrast-125 max-w-none"
              style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : "100%" }}
            />
            <div className="absolute bottom-6 left-6 bg-[#050505]/80 backdrop-blur border border-white/20 px-4 py-2 text-xs font-mono tracking-widest text-gray-300 uppercase">
              {beforeLabel}
            </div>
          </div>

          {/* Thin Yellow Handle & Dividing Line */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-[#FFD400] shadow-[0_0_15px_#FFD400] z-20 pointer-events-none"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#050505] border-2 border-[#FFD400] shadow-[0_0_20px_#FFD400] flex items-center justify-center text-[#FFD400]">
              <span className="text-xs font-mono font-black">‹ ›</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
