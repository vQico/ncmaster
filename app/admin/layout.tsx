"use client";

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
} from "lucide-react";
import NCMonogram from "@/components/ui/NCMonogram";
import ContentProtection from "@/components/ui/ContentProtection";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

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
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex font-sans antialiased">
      <ContentProtection />
      {/* Admin Sidebar */}
      <aside className="w-64 bg-[#0A0A0A] border-r border-white/10 flex flex-col justify-between p-6 shrink-0 hidden md:flex">
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
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="h-16 bg-[#0A0A0A]/80 backdrop-blur-md border-b border-white/10 px-6 flex items-center justify-between font-mono">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <ShieldCheck size={16} className="text-[#FFD400]" />
            <span>Sistem Durumu: <strong className="text-[#FFD400] font-semibold">Aktif & Güvenli</strong></span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <Link href="/" target="_blank" className="px-4 py-2 border border-white/10 hover:border-[#FFD400] text-gray-300 hover:text-[#FFD400] transition-colors">
              Siteyi Görüntüle &rarr;
            </Link>
          </div>
        </header>

        <main className="p-6 sm:p-10 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
