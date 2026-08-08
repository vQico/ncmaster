import React from "react";

export default function KvkkPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] antialiased">
      <section className="pt-36 pb-24 border-b border-white/10">
        <div className="container mx-auto px-6 max-w-4xl">
          <span className="text-xs font-mono tracking-[0.3em] text-[#FFD400] uppercase font-bold">
            HUKUKİ BİLGİLENDİRME
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white mt-2 mb-8 tracking-tight">
            KVKK Aydınlatma Metni
          </h1>

          <div className="glass p-8 sm:p-12 border-t-2 border-t-[#FFD400] space-y-6 text-sm font-light text-gray-300 leading-relaxed">
            <p>
              NC MASTER olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, veri sorumlusu sıfatıyla, kişisel verilerinizin güvenliğine ve gizliliğine azami önem vermekteyiz.
            </p>

            <h2 className="font-display font-bold text-lg text-white">1. Kişisel Verilerin İşlenme Amacı</h2>
            <p>
              Toplanan kişisel verileriniz (ad, soyad, telefon numarası, e-posta adresi, araç plaka ve model bilgisi), araç koruma ve detailing hizmetlerimizin yürütülmesi, randevu takviminin oluşturulması ve müşteri ilişkileri yönetimi amacıyla işlenmektedir.
            </p>

            <h2 className="font-display font-bold text-lg text-white">2. Kişisel Verilerin Aktarılması</h2>
            <p>
              Kişisel verileriniz, kanunen yetkili kamu kurum ve kuruluşları dışında üçüncü şahıslarla ticari amaçla paylaşılmamaktadır.
            </p>

            <h2 className="font-display font-bold text-lg text-white">3. Haklarınız</h2>
            <p>
              KVKK&apos;nın 11. maddesi uyarınca, kişisel verilerinizin işlenip işlenmediğini öğrenme, silinmesini veya düzeltilmesini talep etme hakkına sahipsiniz. Başvurularınızı info@ncmastergarage.com adresine iletebilirsiniz.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
