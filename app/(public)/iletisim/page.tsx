"use client";

import { useState } from "react";
import { Phone, MapPin, Instagram, Clock, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="pt-28 pb-20 bg-[#050505] text-white min-h-screen">
      {/* Header */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6 text-center">
          <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-3">
            Doğrudan İletişim
          </span>
          <h1 className="font-playfair text-4xl sm:text-6xl font-extrabold text-white mb-6">
            Bizimle İletişime Geçin
          </h1>
          <p className="text-gray-300 font-light text-base sm:text-lg max-w-2xl mx-auto">
            Aracınız için en doğru koruma paketini belirlemek veya stüdyomuzu ziyaret etmek için bize ulaşın.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left: Contact Info Cards */}
            <div className="flex flex-col gap-6">
              {/* Phone Card */}
              <a
                href="tel:+905520900698"
                className="glass p-8 rounded-3xl group hover:border-brand-pink/50 transition-all flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-pink/10 border border-brand-pink/20 flex items-center justify-center text-brand-pink group-hover:scale-110 group-hover:bg-brand-pink group-hover:text-white transition-all">
                  <Phone size={28} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-pink font-bold block mb-1">
                    Telefon & Çağrı Merkezi
                  </span>
                  <h3 className="font-playfair text-2xl font-bold text-white group-hover:text-brand-pink transition-colors">
                    +90 552 090 06 98
                  </h3>
                  <p className="text-xs text-gray-400 font-light mt-1">
                    Doğrudan arama veya bilgi almak için dokunun.
                  </p>
                </div>
              </a>

              {/* Location Card */}
              <div className="glass p-8 rounded-3xl flex items-start gap-6 border border-white/10">
                <div className="w-16 h-16 rounded-2xl bg-brand-goldPrimary/10 border border-brand-goldPrimary/20 flex items-center justify-center text-brand-goldPrimary shrink-0 mt-1">
                  <MapPin size={28} />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-brand-goldPrimary font-bold block mb-1">
                    NC Master Stüdyo Adresi
                  </span>
                  <h3 className="font-playfair text-xl font-bold text-white mb-2">
                    Cumhuriyet Mahallesi
                  </h3>
                  <p className="text-sm text-gray-300 font-light leading-relaxed">
                    Gazi Mustafa Kemal Bulvarı, No:248/A<br />
                    Mersin / Türkiye
                  </p>
                </div>
              </div>

              {/* Instagram & Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <a
                  href="https://instagram.com/nc_master33"
                  target="_blank"
                  rel="noreferrer"
                  className="glass p-6 rounded-2xl flex items-center gap-4 hover:border-brand-pink/40 transition-colors"
                >
                  <Instagram size={24} className="text-brand-pink" />
                  <div>
                    <span className="text-[10px] uppercase text-gray-400 font-bold block">Resmi Instagram</span>
                    <span className="font-bold text-sm text-white">@nc_master33</span>
                  </div>
                </a>

                <div className="glass p-6 rounded-2xl flex items-center gap-4">
                  <Clock size={24} className="text-brand-goldPrimary" />
                  <div>
                    <span className="text-[10px] uppercase text-gray-400 font-bold block">Çalışma Saatleri</span>
                    <span className="font-bold text-xs text-white">Pzt - Cmt: 08:30 - 19:00</span>
                  </div>
                </div>
              </div>

              {/* Embedded Dark Map Frame */}
              <div className="glass rounded-3xl overflow-hidden border border-white/10 h-[240px] relative">
                <iframe
                  title="NC Master Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12788.583091176214!2d34.6050!3d36.8000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzYsNDgnMDAuMCJOIDM0wrAzNicwMC4wIkU!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(120%)" }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>

            {/* Right: Validated Contact Form */}
            <div className="glass p-8 sm:p-10 rounded-3xl border border-white/10 relative">
              <span className="text-brand-pink font-semibold text-xs uppercase tracking-[0.3em] block mb-2">
                Hızlı Form
              </span>
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">
                İletişim Talebi Gönderin
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl glass-pink text-center flex flex-col items-center">
                  <CheckCircle2 size={48} className="text-brand-pink mb-4" />
                  <h4 className="font-playfair text-2xl font-bold text-white mb-2">Talebiniz Alındı</h4>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    İletişim talebiniz NC Master stüdyomuza iletilmiştir. Ekibimiz kısa süre içinde sizinle iletişime geçecektir.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-xs text-brand-pink font-bold uppercase tracking-wider underline"
                  >
                    Yeni Mesaj Gönder
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">
                      Ad Soyad *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Örn: Ahmet Yılmaz"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-pink/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">
                      Telefon Numarası *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Örn: 0552 000 00 00"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-pink/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">
                      E-Mail Adresi
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Örn: ahmet@example.com"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-pink/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-gray-400 font-medium mb-2">
                      Mesajınız veya Araç Detayı
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Aracınızın markası ve talep ettiğiniz koruma işlemi..."
                      className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-brand-pink/50"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-pink to-brand-goldPrimary text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <span>Gönderiliyor...</span>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Talebi Gönder</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
