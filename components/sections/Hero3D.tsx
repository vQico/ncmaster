"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import NCMonogram3D from "./NCMonogram3D";

export default function Hero3D() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20;
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex items-center pt-28 pb-16 border-b border-white/10">
      {/* Background Dark Cinematic Visual & Parallax Glow */}
      <div
        className="absolute inset-0 z-0 opacity-25 pointer-events-none transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px, 0)`,
          backgroundImage:
            "radial-gradient(circle at 60% 40%, rgba(255,212,0,0.12) 0%, rgba(5,5,5,0) 70%), url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2000&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Editorial Text Column (8 cols on desktop) */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Micro Labels */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-xs font-mono tracking-[0.3em] text-gray-400 uppercase">
              01 / NC MASTER
            </span>
            <span className="h-[1px] w-8 bg-[#FFD400]/40" />
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold px-2 py-0.5 border border-[#FFD400]/30 rounded">
              DETAYDA SAKLI OLAN
            </span>
          </motion.div>

          {/* Oversized Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl text-white leading-[1.05] tracking-tight mb-8"
          >
            Koruma, yalnızca <br className="hidden sm:inline" />
            görünmez bir katman <br className="hidden sm:inline" />
            <span className="relative inline-block text-gray-200">
              değildir.
              <span className="absolute bottom-1 left-0 w-full h-[3px] bg-[#FFD400] rounded-full shadow-[0_0_10px_#FFD400]" />
            </span>
            <br />
            <span className="text-gray-400 font-light italic block mt-2">
              Bir yaklaşım biçimidir.
            </span>
          </motion.h1>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto"
          >
            <Link
              href="#yaklasim"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
            >
              <span>Yaklaşımımızı Keşfedin</span>
              <ArrowUpRight size={16} />
            </Link>

            <Link
              href="/randevu"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:border-[#FFD400] hover:text-[#FFD400]"
            >
              <span>Randevu Al</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Editorial Paragraph (4 cols) */}
        <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass p-6 sm:p-8 max-w-md border-l-2 border-l-[#FFD400]"
          >
            <p className="text-sm font-light leading-relaxed text-gray-300">
              Her araç kendi çizgisine, yüzeyine ve kullanım biçimine sahiptir. NC MASTER'da uygulamayı aracınıza göre tasarlar, sonucu rafine tutarız.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#hizmetler-index"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-gray-500 hover:text-[#FFD400] transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
