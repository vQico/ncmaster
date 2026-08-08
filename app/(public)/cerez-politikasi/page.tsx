export default function CerezPolitikasiPage() {
  return (
    <div className="pt-28 pb-20 bg-[#050505] text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-playfair text-3xl sm:text-5xl font-extrabold text-white mb-6">
          Çerez Politikası
        </h1>
        <p className="text-xs text-gray-500 mb-8">Son Güncelleme: 05 Ağustos 2026</p>

        <div className="prose prose-invert max-w-none text-gray-300 font-light space-y-6 text-sm leading-relaxed glass p-8 sm:p-12 rounded-3xl border border-white/10">
          <p>
            NC Master web sitesinde kullanıcı deneyimini iyileştirmek, site performansını analiz etmek amacıyla zorunlu ve analitik çerezler kullanılmaktadır.
          </p>

          <h3 className="font-playfair text-xl font-bold text-white mt-6 mb-2">Çerez Nedir?</h3>
          <p>
            Çerezler, bir web sitesini ziyaret ettiğinizde cihazınıza kaydedilen küçük metin dosyalarıdır. Çerezlerin kullanımını tarayıcı ayarlarınız üzerinden dilediğiniz zaman engelleyebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  );
}
