import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';
import WorldCupWidget from '@/components/WorldCupWidget';
import { getWorldCupData } from '@/lib/worldcup';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'GTA VI Pre-Order Guide 2026 — Standard vs Ultimate Edition Explained',
  description:
    'Complete GTA VI pre-order guide. Compare Standard ($79.99) vs Ultimate ($99.99) editions, all pre-order bonuses, Vintage Vice City Pack details, and release date countdown. Pre-orders live now.',
  keywords: [
    'gta 6 pre-order',
    'gta vi release date',
    'gta 6 editions',
    'gta vi ultimate edition',
    'gta 6 price',
    'vice city 2026',
  ],
  metadataBase: new URL('https://gtavi.guide'),
  openGraph: {
    title: 'GTA VI Pre-Order Guide 2026 — Standard vs Ultimate',
    description:
      'Everything you need to know before November 19, 2026 — editions, bonuses, Vintage Vice City Pack, Leonida map.',
    url: 'https://gtavi.guide',
    siteName: 'GTAVI.GUIDE',
    images: [
      {
        url: '/images/gta/screenshot-1.jpg',
        width: 1600,
        height: 900,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA VI Pre-Order Guide 2026',
    description:
      'Standard vs Ultimate, Vintage Vice City Pack, Leonida map, countdown.',
    images: ['/images/gta/screenshot-1.jpg'],
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const wcData = await getWorldCupData();
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <body className="min-h-screen font-body antialiased">
        {children}
        <WorldCupWidget data={wcData} />
      </body>
    </html>
  );
}
