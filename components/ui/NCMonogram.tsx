"use client";

import React from "react";

interface NCMonogramProps {
  className?: string;
  size?: number;
  showText?: boolean;
  accentColor?: string;
}

export default function NCMonogram({
  className = "",
  size = 40,
  showText = false,
  accentColor = "#E2E8F0",
}: NCMonogramProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          {/* Metallic Silver/Dark Chrome Gradient */}
          <linearGradient id="ncMetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="35%" stopColor="#E2E8F0" />
            <stop offset="70%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#334155" />
          </linearGradient>

          {/* Platinum / Diamond Accent Gradient */}
          <linearGradient id="ncDiamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor={accentColor} />
          </linearGradient>

          <filter id="diamondDropShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#FFFFFF" floodOpacity="0.3" />
          </filter>
        </defs>

        {/* Outer Precision Geometric Hex Frame */}
        <polygon
          points="50,4 90,27 90,73 50,96 10,73 10,27"
          fill="none"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
        />

        {/* Outer Thin Platinum Chrome Edges */}
        <path
          d="M 50,4 L 90,27 M 10,73 L 50,96"
          stroke="url(#ncDiamondGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#diamondDropShadow)"
        />

        {/* Interlocking 'N' and 'C' Precision Monogram Path */}
        {/* Left Vertical of N */}
        <path
          d="M 26 28 L 35 28 L 35 72 L 26 72 Z"
          fill="url(#ncMetalGrad)"
        />
        {/* Diagonal of N */}
        <path
          d="M 35 28 L 47 28 L 65 64 L 65 72 L 53 72 L 35 36 Z"
          fill="url(#ncMetalGrad)"
        />
        {/* Right Vertical of N / Connected to C */}
        <path
          d="M 65 28 L 74 28 L 74 54 L 65 54 Z"
          fill="url(#ncMetalGrad)"
        />

        {/* Outer C Sweep curves surrounding N */}
        <path
          d="M 74 36 C 74 20, 50 18, 38 22 L 35 14 C 52 10, 84 14, 84 36 L 74 36 Z"
          fill="url(#ncMetalGrad)"
        />
        <path
          d="M 74 64 C 74 80, 50 82, 38 78 L 35 86 C 52 90, 84 86, 84 64 L 74 64 Z"
          fill="url(#ncMetalGrad)"
        />
      </svg>

      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-extrabold text-lg tracking-widest text-white leading-none">
            NC <span className="text-[#FFD400]">MASTER</span>
          </span>
        </div>
      )}
    </div>
  );
}
