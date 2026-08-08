"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowUpRight, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import NCMonogram from "@/components/ui/NCMonogram";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Hizmetler", href: "/hizmetler" },
    { name: "PPF", href: "/ppf-kaplama" },
    { name: "Araç Kaplama", href: "/hizmetler/arac-kaplama" },
    { name: "Detailing", href: "/hizmetler/detailing" },
    { name: "Galeri", href: "/galeri" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "SSS", href: "/#sss" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.9)]"
            : "bg-transparent py-6 border-b border-white/5"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo with Custom NC Monogram */}
          <Link href="/" className="flex items-center group">
            <NCMonogram size={38} showText={true} />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-semibold uppercase tracking-[0.18em] transition-colors relative py-1 ${
                    isActive ? "text-[#FFD400]" : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFD400] rounded-full shadow-[0_0_8px_#FFD400]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: Randevu Al */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/randevu"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            >
              <span>Randevu Al</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden text-white p-2.5 rounded-xl border border-white/10 hover:border-[#FFD400]/40 transition-colors z-50"
            aria-label="Menüyü Aç/Kapat"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#050505] flex flex-col justify-between p-8 pt-28 border-b border-white/10"
          >
            <div className="flex flex-col gap-5">
              <span className="text-[10px] tracking-[0.4em] uppercase text-[#FFD400] font-semibold mb-2">
                Gezinti
              </span>
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center justify-between text-2xl font-bold tracking-tight text-white hover:text-[#FFD400] transition-colors py-2 border-b border-white/5"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-5 h-5 text-gray-600" />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
              <Link
                href="/randevu"
                className="w-full py-4 rounded-xl bg-[#FFD400] text-[#050505] font-extrabold text-center text-sm tracking-widest uppercase shadow-lg flex items-center justify-center gap-2"
              >
                <span>Randevu Al</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
