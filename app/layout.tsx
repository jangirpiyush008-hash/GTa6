import type { Metadata } from 'next';
import { Bebas_Neue, Inter } from 'next/font/google';
import './globals.css';
import WorldCupWidget from '@/components/WorldCupWidget';
import WelcomePopup from '@/components/WelcomePopup';
import LiveScoreTicker from '@/components/LiveScoreTicker';
import { getWorldCupData } from '@/lib/worldcup';
import { organizationLd, websiteLd, jsonLdScript } from '@/lib/jsonld';

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
  title: {
    default:
      'GTA VI Pre-Order 2026 + FIFA World Cup Live + 30-Game Catalog · GTAVI.GUIDE',
    template: '%s · GTAVI.GUIDE',
  },
  description:
    'GTA VI release date November 19, 2026 · Standard $79.99 / Ultimate $99.99 · Vintage Vice City Pack details · live FIFA World Cup 2026 standings + scores · cheat libraries for GTA V & RDR2 · 30-game catalog with system requirements + PC builds.',
  keywords: [
    'GTA 6 pre-order', 'GTA VI release date', 'GTA 6 November 19 2026',
    'GTA 6 editions', 'GTA 6 Ultimate Edition', 'GTA 6 price',
    'Vintage Vice City Pack', 'Leonida map', 'Jason and Lucia',
    'GTA V cheats', 'GTA V cheats PS5', 'GTA V cheats Xbox', 'GTA V cheats PC',
    'RDR2 cheats', 'Red Dead 2 cheat codes',
    'EA Sports FC 26', 'FC 26 release date', 'FIFA 26',
    'FIFA World Cup 2026', 'World Cup 2026 live scores', 'World Cup 2026 standings',
    '48 team World Cup', 'World Cup USA Canada Mexico',
    'Elden Ring guide', 'Cyberpunk 2077 Phantom Liberty',
    'Baldur\'s Gate 3 classes', 'Spider-Man 2 suits',
    'Black Myth Wukong walkthrough', 'Helldivers 2 stratagems',
    'Resident Evil 4 Remake', 'Diablo IV builds',
  ],
  metadataBase: new URL('https://gtavi.guide'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'GTA VI Pre-Order + FIFA World Cup 2026 Live · GTAVI.GUIDE',
    description:
      'Pre-order GTA VI + watch the 2026 World Cup live + 30-game catalog with cheats, requirements, and PC builds.',
    url: 'https://gtavi.guide',
    siteName: 'GTAVI.GUIDE',
    locale: 'en_US',
    images: [{ url: '/images/gta/screenshot-1.jpg', width: 1600, height: 900 }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GTA VI Pre-Order + FIFA World Cup 2026 Live',
    description:
      'Standard vs Ultimate, Vintage Vice City Pack, Leonida map, live World Cup standings.',
    images: ['/images/gta/screenshot-1.jpg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 },
  },
  category: 'gaming',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const wcData = await getWorldCupData();
  return (
    <html lang="en" className={`${bebas.variable} ${inter.variable}`}>
      <head>
        {/* Global Organization + WebSite JSON-LD — sitelinks search box + author entity */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(organizationLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(websiteLd()) }}
        />
      </head>
      <body className="min-h-screen font-body antialiased">
        <LiveScoreTicker data={wcData} />
        {children}
        <WorldCupWidget data={wcData} />
        <WelcomePopup />
      </body>
    </html>
  );
}
