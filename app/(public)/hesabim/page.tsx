"use client";

import React, { useState } from "react";
import { User, Car, Calendar, ShieldCheck, Lock, LogOut } from "lucide-react";

export default function CustomerAccountPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased">
      <section className="pt-36 pb-24 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-5xl">
          {!isLoggedIn ? (
            /* Login Form */
            <div className="max-w-md mx-auto glass p-8 sm:p-10 border-t-2 border-t-[#FFD400]">
              <div className="text-center mb-8">
                <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
                  MÜŞTERİ KOKPİTİ
                </span>
                <h1 className="font-display font-extrabold text-2xl text-white mt-2">
                  Hesabınıza Giriş Yapın
                </h1>
                <p className="text-xs font-light text-gray-400 mt-1">
                  Aracınızın koruma durumunu ve randevularınızı takip edin.
                </p>
              </div>

              <form onSubmit={handleLogin} className="flex flex-col gap-5">
                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-2">E-POSTA VEYA TELEFON</label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@domain.com"
                    className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-gray-400 block mb-2">ŞİFRE</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full p-3 bg-white/5 border border-white/10 text-white focus:border-[#FFD400] outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors mt-2"
                >
                  Giriş Yap
                </button>
              </form>
            </div>
          ) : (
            /* Customer Dashboard */
            <div className="flex flex-col gap-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
                <div>
                  <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
                    MÜŞTERİ PROFİLİ
                  </span>
                  <h1 className="font-display font-extrabold text-3xl text-white mt-1">
                    Hoş Geldiniz, Beyza Hanım
                  </h1>
                </div>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="px-4 py-2 border border-white/20 text-gray-300 text-xs font-mono uppercase tracking-wider flex items-center gap-2 hover:border-[#FFD400] hover:text-[#FFD400]"
                >
                  <LogOut size={14} /> Çıkış Yap
                </button>
              </div>

              {/* Registered Vehicles Cockpit */}
              <div className="glass p-8 border-t-2 border-t-[#FFD400]">
                <div className="flex items-center gap-3 mb-6">
                  <Car className="text-[#FFD400]" />
                  <h2 className="font-display font-bold text-xl text-white">Kayıtlı Araçlarınız</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-black text-xl text-white">PORSCHE 911 GT3</h3>
                      <span className="px-2 py-1 bg-[#FFD400]/10 text-[#FFD400] text-[10px] font-mono font-bold border border-[#FFD400]/30">
                        GARANTİLİ
                      </span>
                    </div>

                    <div className="space-y-2 text-xs font-mono text-gray-300 mb-4">
                      <p>• UYGULAMA: FULL BODY CLEAR PPF</p>
                      <p>• SON BAKIM: 12.06.2026</p>
                      <p>• KONTROL PERİYODU: 6 AYDA BİR</p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs">
                      <span className="text-gray-400 font-mono">DURUM: AKTİF</span>
                      <span className="text-[#FFD400] font-mono">GARANTİ: 2034&apos;E KADAR</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
