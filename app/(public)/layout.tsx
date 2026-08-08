import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import CookieConsent from "@/components/ui/CookieConsent";
import ContentProtection from "@/components/ui/ContentProtection";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#050505] text-[#F5F5F5] selection:bg-none select-none">
      <ContentProtection />
      <CustomCursor />
      <Header />
      <main className="flex-grow">{children}</main>
      <CookieConsent />
      <Footer />
    </div>
  );
}
