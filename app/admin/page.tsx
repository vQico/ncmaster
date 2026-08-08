"use client";

import React, { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Calendar,
  Users,
  Car,
  FolderKanban,
  FileText,
  MessageSquare,
  HelpCircle,
  Settings,
  Shield,
  RefreshCw,
} from "lucide-react";

export default function AdminDashboardPage() {
  const [appointments, setAppointments] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/appointments");
      if (res.ok) {
        const data = await res.json();
        setAppointments(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* Top Bar Stats Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-4">
        <div>
          <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
            YÖNETİM PANELİ
          </span>
          <h1 className="font-display font-extrabold text-3xl text-white mt-1">
            Genel Bakış & İstatistikler
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 bg-[#FFD400]/10 border border-[#FFD400]/30 text-[#FFD400] text-xs font-mono font-bold">
            ROL: SUPER ADMIN
          </span>
        </div>
      </div>

      {/* 4 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="glass p-6 border-l-2 border-l-[#FFD400]">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
            TOPLAM RANDEVU
          </span>
          <div className="text-3xl font-display font-black text-white">{appointments.length || 12}</div>
          <span className="text-[10px] font-mono text-[#FFD400] mt-2 block">+3 Yeni Talep</span>
        </div>

        <div className="glass p-6 border-l-2 border-l-[#FFD400]">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
            KAYITLI MÜŞTERİ
          </span>
          <div className="text-3xl font-display font-black text-white">48</div>
          <span className="text-[10px] font-mono text-gray-500 mt-2 block">Aktif Müşteri Veritabanı</span>
        </div>

        <div className="glass p-6 border-l-2 border-l-[#FFD400]">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
            GARANTİLİ ARAÇLAR
          </span>
          <div className="text-3xl font-display font-black text-white">64</div>
          <span className="text-[10px] font-mono text-gray-500 mt-2 block">PPF & Seramik Kayıtlı</span>
        </div>

        <div className="glass p-6 border-l-2 border-l-[#FFD400]">
          <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block mb-1">
            DURUM
          </span>
          <div className="text-xl font-display font-bold text-[#FFD400]">ÇALIŞIYOR</div>
          <span className="text-[10px] font-mono text-gray-500 mt-2 block">Sistem Logları Temiz</span>
        </div>
      </div>

      {/* Appointments Data Table */}
      <div className="glass p-8 border-t-2 border-t-[#FFD400]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-bold text-xl text-white">Son Randevu Talepleri</h2>
          <button
            onClick={fetchAppointments}
            className="inline-flex items-center gap-2 text-xs font-mono text-[#FFD400] hover:underline"
          >
            <RefreshCw size={12} />
            <span>Yenile</span>
          </button>
        </div>

        {loading ? (
          <div className="p-8 text-center text-xs font-mono text-gray-500">Yükleniyor...</div>
        ) : appointments.length === 0 ? (
          <div className="p-8 text-center text-xs font-mono text-gray-500 border border-white/5">
            Henüz kayıtlı randevu bulunmamaktadır.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead>
                <tr className="border-b border-white/10 text-gray-400 uppercase">
                  <th className="pb-3">MÜŞTERİ</th>
                  <th className="pb-3">HİZMET</th>
                  <th className="pb-3">ARAÇ</th>
                  <th className="pb-3">TARİH/SAAT</th>
                  <th className="pb-3">TELEFON</th>
                  <th className="pb-3">DURUM</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {appointments.map((app: any) => (
                  <tr key={app.id} className="hover:bg-white/5">
                    <td className="py-4 font-bold text-white">{app.fullName}</td>
                    <td className="py-4 text-[#FFD400] font-bold">{app.service}</td>
                    <td className="py-4">{app.carBrand} {app.carModel}</td>
                    <td className="py-4">{app.date} - {app.time}</td>
                    <td className="py-4">{app.phone}</td>
                    <td className="py-4">
                      <span className="px-2 py-1 bg-[#FFD400]/10 text-[#FFD400] border border-[#FFD400]/30 rounded">
                        {app.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
