"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  BookOpen,
  Star,
  MessageSquare,
  Search,
  Settings,
  Share2,
  LogOut,
  ShieldCheck,
  Menu,
  X,
} from "lucide-react";
import NCMonogram from "@/components/ui/NCMonogram";
import ContentProtection from "@/components/ui/ContentProtection";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileAdminMenuOpen, setMobileAdminMenuOpen] = useState(false);

  // If on login page, render without sidebar
  if (pathname === "/admin/login") {
    return (
      <>
        <ContentProtection />
        {children}
      </>
    );
  }

  const menuItems = [
    { label: "Yönetim Paneli", icon: LayoutDashboard, href: "/admin" },
    { label: "Sosyal Medya", icon: Share2, href: "/admin/sosyal-medya" },
    { label: "İçerik Yönetimi", icon: FileText, href: "/admin/icerik" },
    { label: "Galeri & Medya", icon: ImageIcon, href: "/admin/galeri" },
    { label: "Blog Yönetimi", icon: BookOpen, href: "/admin/blog" },
    { label: "Müşteri Yorumları", icon: Star, href: "/admin/yorumlar" },
    { label: "İletişim Talepleri", icon: MessageSquare, href: "/admin/talepler" },
    { label: "SEO & Meta", icon: Search, href: "/admin/seo" },
    { label: "Genel Ayarlar", icon: Settings, href: "/admin/ayarlar" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex flex-col md:flex-row font-sans antialiased">
      <ContentProtection />

      {/* Desktop Admin Sidebar */}
      <aside className="w-64 bg-[#0A0A0A] border-r border-white/10 flex-col justify-between p-6 shrink-0 hidden md:flex min-h-screen">
        <div>
          {/* Logo Header */}
          <div className="pb-6 border-b border-white/10 mb-6">
            <Link href="/" className="flex items-center">
              <NCMonogram size={36} showText={true} />
            </Link>
            <span className="mt-3 block text-[9px] font-mono uppercase font-bold tracking-[0.25em] text-[#FFD400]">
              ENTERPRİSE ADMİN PANEL
            </span>
          </div>

          {/* Nav Menu */}
          <nav className="space-y-1.5 font-mono text-xs uppercase tracking-wider font-semibold">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-sm transition-colors ${
                    isActive
                      ? "bg-[#FFD400] text-[#050505] font-extrabold shadow-[0_0_15px_rgba(255,212,0,0.3)]"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* User Footer */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#FFD400]/20 border border-[#FFD400]/40 flex items-center justify-center text-[#FFD400] font-bold">
              A
            </div>
            <div>
              <p className="font-bold text-white leading-none">NC Admin</p>
              <span className="text-[10px] text-gray-500">Super Admin</span>
            </div>
          </div>

          <button
            onClick={() => {
              document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
              window.location.href = "/admin/login";
            }}
            className="p-2 hover:bg-white/5 text-gray-400 hover:text-[#FFD400] transition-colors"
            title="Çıkış Yap"
          >
            <LogOut size={16} />
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Navbar with Mobile Drawer Toggle */}
        <header className="h-16 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 px-4 sm:px-6 flex items-center justify-between font-mono sticky top-0 z-40">
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileAdminMenuOpen(!mobileAdminMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-[#FFD400] border border-white/10 rounded-sm"
              aria-label="Admin Menü"
            >
              {mobileAdminMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <div className="flex items-center gap-2 text-xs text-gray-400">
              <ShieldCheck size={16} className="text-[#FFD400] shrink-0" />
              <span className="hidden sm:inline">Sistem Durumu: <strong className="text-[#FFD400] font-semibold">Aktif & Güvenli</strong></span>
              <span className="sm:hidden text-white font-bold">Admin Panel</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <Link
              href="/"
              target="_blank"
              className="px-3 sm:px-4 py-1.5 border border-white/10 hover:border-[#FFD400] text-gray-300 hover:text-[#FFD400] transition-colors text-[11px] font-bold"
            >
              Siteyi Gör &rarr;
            </Link>
          </div>
        </header>

        {/* Mobile Admin Navigation Drawer */}
        {mobileAdminMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-50 bg-[#0A0A0A] p-6 overflow-y-auto border-b border-white/10 flex flex-col justify-between font-mono text-xs uppercase tracking-wider">
            <nav className="space-y-2">
              <span className="text-[10px] text-[#FFD400] font-bold tracking-[0.2em] block mb-4">
                ADMİN NAVİGASYON MENÜSÜ
              </span>
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileAdminMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-sm transition-colors ${
                      isActive
                        ? "bg-[#FFD400] text-[#050505] font-extrabold shadow-[0_0_15px_rgba(255,212,0,0.3)]"
                        : "text-gray-300 hover:text-white bg-white/5"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#FFD400]/20 border border-[#FFD400]/40 flex items-center justify-center text-[#FFD400] font-bold">
                  A
                </div>
                <div>
                  <p className="font-bold text-white leading-none">NC Admin</p>
                  <span className="text-[10px] text-gray-500">Super Admin</span>
                </div>
              </div>

              <button
                onClick={() => {
                  document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
                  window.location.href = "/admin/login";
                }}
                className="px-4 py-2 bg-red-500/10 text-red-400 border border-red-500/20 font-bold"
              >
                Çıkış Yap
              </button>
            </div>
          </div>
        )}

        <main className="p-4 sm:p-8 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
