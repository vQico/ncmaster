"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Mail, ArrowRight } from "lucide-react";
import NCMonogram from "@/components/ui/NCMonogram";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      // Set admin session cookie
      document.cookie = "admin_session=true; path=/; max-age=86400";
      router.push("/admin");
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#FFD400]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="w-full max-w-md glass p-8 sm:p-10 border-t-2 border-t-[#FFD400] relative z-10 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
        <div className="flex flex-col items-center text-center mb-8">
          <NCMonogram size={48} showText={true} />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-[#FFD400] mt-4">
            YÖNETİM PANELİ GİRİŞİ
          </span>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-medium mb-2">
              E-POSTA ADRESİ
            </label>
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ncmastergarage.com"
                className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#FFD400]"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 size-4" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 font-medium mb-2">
              ŞİFRE
            </label>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3.5 bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-[#FFD400]"
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 size-4" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-[#FFD400] text-[#050505] font-extrabold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 mt-4"
          >
            {loading ? (
              <span>Giriş Yapılıyor...</span>
            ) : (
              <>
                <span>Yönetim Paneline Giriş Yap</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
