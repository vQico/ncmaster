"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NCMonogram from "./NCMonogram";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fast high-performance progress loader
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 10;
      });
    }, 60);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[10000] bg-[#050505] flex flex-col items-center justify-center p-6 select-none"
        >
          {/* Centered Monogram & Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-6"
          >
            <NCMonogram size={72} showText={false} />

            <div className="flex flex-col items-center">
              <h2 className="font-display font-black text-2xl tracking-[0.3em] text-white">
                NC <span className="text-[#FFD400]">MASTER</span>
              </h2>
              <p className="text-[10px] font-mono tracking-[0.4em] text-gray-400 uppercase mt-1">
                HASSASİYET . KORUMA . ZANAAT
              </p>
            </div>
          </motion.div>

          {/* Thin Signature Yellow Progress Line */}
          <div className="w-48 sm:w-64 h-[2px] bg-white/10 rounded-full overflow-hidden mt-10 relative">
            <motion.div
              className="h-full bg-[#FFD400] shadow-[0_0_12px_#FFD400]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </div>

          <span className="text-[11px] font-mono text-gray-500 mt-3 tracking-widest">
            {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
