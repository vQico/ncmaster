"use client";

import React from "react";

interface HWKDigitalLogoProps {
  className?: string;
}

export default function HWKDigitalLogo({ className = "" }: HWKDigitalLogoProps) {
  return (
    <a
      href="https://hwkdigital.com"
      target="_blank"
      rel="noreferrer"
      title="Dev. H-WK Digital."
      aria-label="Dev. H-WK Digital."
      className={`inline-flex items-center text-xs font-mono tracking-wider transition-colors group ${className}`}
    >
      <span className="text-gray-400">
        Dev. <strong className="text-white group-hover:text-[#FFD400] font-bold tracking-widest transition-colors">H-WK Digital.</strong>
      </span>
    </a>
  );
}
