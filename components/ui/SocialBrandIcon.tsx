"use client";

import React from "react";
import { Instagram, Phone, Mail, Globe } from "lucide-react";

interface SocialBrandIconProps {
  platform: string;
  size?: number;
  className?: string;
}

export default function SocialBrandIcon({ platform, size = 20, className = "" }: SocialBrandIconProps) {
  const normPlatform = platform ? platform.toLowerCase().trim() : "";

  if (normPlatform.includes("instagram")) {
    return <Instagram size={size} className={className || "text-white group-hover:text-[#FFD400] transition-colors"} />;
  }

  if (normPlatform.includes("whatsapp")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="12" cy="12" r="10" fill="#25D366" />
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (normPlatform.includes("facebook")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="12" cy="12" r="10" fill="#1877F2" />
        <path
          d="M14 9.5h-1.5c-.8 0-1 .4-1 1v1.5H14l-.5 2h-2V19h-2.5v-5H7.5v-2h1.5v-1.8C9 8.4 10.2 7 12.3 7h1.7v2.5z"
          fill="#ffffff"
        />
      </svg>
    );
  }

  if (normPlatform.includes("youtube")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <rect x="2" y="4" width="20" height="16" rx="4" fill="#FF0000" />
        <polygon points="10,8 16,12 10,16" fill="#ffffff" />
      </svg>
    );
  }

  if (normPlatform.includes("tiktok")) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <circle cx="12" cy="12" r="10" fill="#000000" stroke="#25F4EE" strokeWidth="1" />
        <path
          d="M12.5 6v7.5a2.5 2.5 0 11-2.5-2.5c.2 0 .4.02.6.06V9.1A4.5 4.5 0 1014.5 13.5V9.2a6 6 0 003.5 1.1V8.4a4 4 0 01-3-1.2V6h-2.5z"
          fill="#FE2C55"
        />
      </svg>
    );
  }

  if (normPlatform.includes("telefon") || normPlatform.includes("phone")) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-[#FFD400] text-[#050505] flex items-center justify-center shrink-0 shadow"
      >
        <Phone size={Math.round(size * 0.6)} />
      </div>
    );
  }

  if (normPlatform.includes("eposta") || normPlatform.includes("e-posta") || normPlatform.includes("mail")) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-cyan-500 text-white flex items-center justify-center shrink-0 shadow"
      >
        <Mail size={Math.round(size * 0.6)} />
      </div>
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full bg-white/10 text-[#FFD400] flex items-center justify-center shrink-0 border border-white/20"
    >
      <Globe size={Math.round(size * 0.6)} />
    </div>
  );
}
