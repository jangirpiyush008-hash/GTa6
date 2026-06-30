import { notFound } from 'next/navigation';
import Link from 'next/link';
import { allCardIds, getCard, cards } from '@/lib/ig-cards';
import IGCard from '@/components/ig/IGCard';
import MegaNav from '@/components/MegaNav';
import { ArrowLeft, Download } from 'lucide-react';

export function generateStaticParams() {
  return allCardIds.map((id) => ({ id }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ bare?: string }>;
}) {
  const { id } = await props.params;
  return {
    title: `${id} · IG Studio`,
    robots: { index: false, follow: false },
  };
}

export default async function StudioCardPage(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ bare?: string }>;
}) {
  const { id } = await props.params;
  const { bare } = await props.searchParams;
  const card = getCard(id);
  if (!card) notFound();

  // BARE mode = no nav, no chrome — Puppeteer screenshots this.
  if (bare === '1') {
    return (
      <div
        className="bg-[#050308]"
        style={{
          width: card.size === 'portrait' ? '1080px' : '1080px',
          height: card.size === 'portrait' ? '1350px' : '1080px',
        }}
      >
        <IGCard card={card} />
      </div>
    );
  }

  const idx = cards.findIndex((c) => c.id === id);
  const prev = idx > 0 ? cards[idx - 1] : null;
  const next = idx < cards.length - 1 ? cards[idx + 1] : null;

  return (
    <main>
      <MegaNav />

      <section className="px-5 pt-10 pb-6">
        <div className="container-x max-w-5xl flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/studio"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-neon-cyan transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to studio
          </Link>
          <div className="flex items-center gap-3">
            <a
              href={`/studio/${id}?bare=1`}
              target="_blank"
              rel="noopener"
              className="btn btn-ghost text-sm py-2.5 px-4"
            >
              Open bare render ↗
            </a>
            <Link
              href={`/studio/${id}?bare=1`}
              target="_blank"
              className="btn btn-pink text-sm py-2.5 px-4"
            >
              <Download className="h-4 w-4" />
              Screenshot this
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16">
        <div className="container-x max-w-4xl">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-neon-pink">
            {card.type} · {card.size === 'portrait' ? '1080 × 1350' : '1080 × 1080'}
            {card.carouselId && ` · slide ${card.carouselIndex} in ${card.carouselId}`}
          </div>

          {/* Scaled-down preview that maintains the exact card design */}
          <div
            className="relative mx-auto rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            style={{
              width: '100%',
              maxWidth: '780px',
              aspectRatio: card.size === 'portrait' ? '4/5' : '1/1',
              background: '#050308',
            }}
          >
            <div
              className="absolute inset-0 origin-top-left pointer-events-none"
              style={{ transform: 'scale(0.7222)', transformOrigin: 'top left' }}
            >
              <IGCard card={card} />
            </div>
          </div>

          <div className="mt-4 text-center text-xs text-white/40">
            Preview scaled to ~72%. Final exported PNG is full 1080×{card.size === 'portrait' ? '1350' : '1080'}.
          </div>

          <div className="mt-10 glass rounded-xl p-5 text-sm text-white/75 space-y-2">
            <div><span className="text-white/45 text-xs uppercase tracking-widest">ID:</span> <code>{card.id}</code></div>
            {card.kicker && <div><span className="text-white/45 text-xs uppercase tracking-widest">Kicker:</span> {card.kicker}</div>}
            {card.title && <div><span className="text-white/45 text-xs uppercase tracking-widest">Title:</span> {card.title}</div>}
            {card.subtitle && <div><span className="text-white/45 text-xs uppercase tracking-widest">Subtitle:</span> {card.subtitle}</div>}
            {card.bg && <div><span className="text-white/45 text-xs uppercase tracking-widest">BG:</span> <code className="text-xs">{card.bg}</code></div>}
          </div>

          <div className="mt-10 flex justify-between text-sm">
            {prev ? (
              <Link href={`/studio/${prev.id}`} className="text-white/60 hover:text-white transition">
                ← {prev.id}
              </Link>
            ) : <span />}
            {next ? (
              <Link href={`/studio/${next.id}`} className="text-white/60 hover:text-white transition">
                {next.id} →
              </Link>
            ) : <span />}
          </div>
        </div>
      </section>
    </main>
  );
}
