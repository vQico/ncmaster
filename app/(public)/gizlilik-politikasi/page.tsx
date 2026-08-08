export default function GizlilikPolitikasiPage() {
  return (
    <div className="pt-28 pb-20 bg-[#050505] text-white min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="font-playfair text-3xl sm:text-5xl font-extrabold text-white mb-6">
          Gizlilik Politikası
        </h1>
        <p className="text-xs text-gray-500 mb-8">Son Güncelleme: 05 Ağustos 2026</p>

        <div className="prose prose-invert max-w-none text-gray-300 font-light space-y-6 text-sm leading-relaxed glass p-8 sm:p-12 rounded-3xl border border-white/10">
          <p>
            NC Master olarak ziyaretçilerimizin gizliliğine ve bilgi güvenliğine yüksek hassasiyet gösteriyoruz. Bu Gizlilik Politikası, web sitemizi kullanırken toplanan bilgilerin nasıl kullanıldığını açıklar.
          </p>

          <h3 className="font-playfair text-xl font-bold text-white mt-6 mb-2">Bilgi Toplama ve Kullanım</h3>
          <p>
            Web sitemiz üzerinden iletişim formu doldurduğunuzda verdiğiniz iletişim bilgileri sadece sorularınızı yanıtlamak ve randevu süreçlerinizi yönetmek amacıyla saklanır.
          </p>

          <h3 className="font-playfair text-xl font-bold text-white mt-6 mb-2">Güvenlik</h3>
          <p>
            Tüm verileriniz SSL şifreleme ile korunan sunucularımızda saklanır. Herhangi bir üçüncü parti ile ticari amaçla satılmaz veya kiralanamaz.
          </p>
        </div>
      </div>
    </div>
  );
}
