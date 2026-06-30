import type { Metadata } from 'next';
import Link from 'next/link';
import { cards, carousels, carouselMeta } from '@/lib/ig-cards';
import IGCard from '@/components/ig/IGCard';
import MegaNav from '@/components/MegaNav';
import { Download, ExternalLink, ImageIcon, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IG Studio · GTAVI.GUIDE',
  description: 'Instagram-ready carousel slides and single posts for @gtavi.guide',
  robots: { index: false, follow: false },
};

const singles = cards.filter((c) => !c.carouselId);
const carouselIds = Object.keys(carousels);

function Thumb({ id, badge }: { id: string; badge?: string }) {
  const card = cards.find((c) => c.id === id)!;
  return (
    <Link
      href={`/studio/${id}`}
      className="group relative block rounded-xl overflow-hidden glass hover:shadow-neon-pink transition"
    >
      <div
        className="relative w-full bg-black overflow-hidden"
        style={{ aspectRatio: card.size === 'portrait' ? '4/5' : '1/1' }}
      >
        {/* shrink the 1080-px stage down to thumbnail width */}
        <div
          className="absolute inset-0 origin-top-left pointer-events-none"
          style={{ transform: 'scale(0.32)', transformOrigin: 'top left' }}
        >
          <IGCard card={card} />
        </div>
      </div>
      {badge && (
        <div className="absolute top-3 left-3 px-2 py-1 rounded bg-black/70 backdrop-blur text-[10px] tracking-widest text-neon-pink uppercase">
          {badge}
        </div>
      )}
      <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-black/70 backdrop-blur text-[10px] tracking-widest text-white/70 uppercase opacity-0 group-hover:opacity-100 transition">
        Open ↗
      </div>
    </Link>
  );
}

export default function StudioPage() {
  return (
    <main>
      <MegaNav />

      <section className="section pb-10">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.35em] text-neon-cyan">
            GTAVI.GUIDE / IG Studio
          </div>
          <h1 className="display text-5xl sm:text-7xl text-white mt-3">
            Instagram <span className="text-gradient-pink">Studio</span>
          </h1>
          <p className="mt-4 text-white/65 max-w-2xl">
            All {cards.length} content cards designed for{' '}
            <span className="text-white">@gtavi.guide</span> — singles plus{' '}
            {carouselIds.length} multi-slide carousels. Click any card to open it
            at full 1080×1080, then download as PNG.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="glass rounded-full px-4 py-1.5 text-white/75 inline-flex items-center gap-2">
              <ImageIcon className="h-3.5 w-3.5 text-neon-cyan" />
              {singles.length} singles
            </span>
            <span className="glass rounded-full px-4 py-1.5 text-white/75 inline-flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-neon-pink" />
              {carouselIds.length} carousels
            </span>
            <span className="glass rounded-full px-4 py-1.5 text-white/75 inline-flex items-center gap-2">
              <Download className="h-3.5 w-3.5 text-neon-gold" />
              <code className="text-xs">npm run export-ig</code> for bulk PNGs
            </span>
            <Link
              href="/IG-STRATEGY.md"
              target="_blank"
              className="glass rounded-full px-4 py-1.5 text-white/75 inline-flex items-center gap-2 hover:text-white"
            >
              <ExternalLink className="h-3.5 w-3.5 text-neon-pink" />
              IG-STRATEGY.md
            </Link>
          </div>
        </div>
      </section>

      {/* Carousels */}
      <section className="pb-16 px-5">
        <div className="container-x">
          <h2 className="display text-3xl text-white mb-6">Carousels</h2>
          <div className="space-y-12">
            {carouselIds.map((cid) => {
              const meta = carouselMeta[cid];
              const slides = carousels[cid];
              return (
                <div key={cid}>
                  <div className="flex items-baseline justify-between mb-4">
                    <h3
                      className={`display text-2xl ${
                        meta.tone === 'pink'
                          ? 'text-neon-pink'
                          : meta.tone === 'cyan'
                          ? 'text-neon-cyan'
                          : 'neon-gold'
                      }`}
                    >
                      {meta.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest text-white/40">
                      {slides.length} slides
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {slides.map((s, i) => (
                      <Thumb key={s.id} id={s.id} badge={`${i + 1}/${slides.length}`} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Singles */}
      <section className="pb-24 px-5">
        <div className="container-x">
          <h2 className="display text-3xl text-white mb-6">Single posts</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {singles.map((c) => (
              <Thumb key={c.id} id={c.id} badge={c.type} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
