import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter_Tight } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
})

const interTight = Inter_Tight({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter-tight',
})

export const metadata: Metadata = {
  title: 'NC MASTER — Precision. Protection. Craftsmanship. Technology. Presence.',
  description: 'Mersin profesyonel PPF şeffaf boya koruma filmi, araç kaplama, seramik kaplama ve otomotiv estetik stüdyosu. Koruma, yalnızca görünmez bir katman değildir.',
  keywords: ['Mersin PPF', 'Mersin araç kaplama', 'Mersin seramik kaplama', 'Mersin detailing', 'NC MASTER', 'Boya koruma Mersin'],
  authors: [{ name: 'H-WK Digital.' }],
  openGraph: {
    title: 'NC MASTER — Luxury Automotive Protection & Customization Studio',
    description: 'Her araç farklıdır. Koruma, yalnızca görünmez bir katman değildir. Bir yaklaşım biçimidir.',
    url: 'https://ncmastergarage.com',
    siteName: 'NC MASTER',
    locale: 'tr_TR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="dark bg-[#050505] scroll-smooth">
      <body className={`${jakarta.variable} ${interTight.variable} font-sans bg-[#050505] text-[#F5F5F5] selection:bg-[#FFD400]/30 selection:text-[#FFD400] antialiased`}>
        {children}
      </body>
    </html>
  )
}

