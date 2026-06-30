import type { Metadata } from 'next';
import Link from 'next/link';
import MegaNav from '@/components/MegaNav';
import NewsTicker from '@/components/NewsTicker';
import Footer from '@/components/Footer';
import { getAllNews, daysUntilGTAVI } from '@/lib/news-feed';
import { Calendar, ArrowUpRight, Newspaper, Flame } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Latest Game News — GTA VI, RDR 2, Elden Ring, Cyberpunk · GTAVI.GUIDE',
  description:
    'The latest news, patches, expansions, and release dates across every top game on PS5, Xbox Series, and PC. GTA VI countdown, RDR 2, Elden Ring, Cyberpunk 2077, Diablo IV, Hogwarts Legacy and more.',
  alternates: { canonical: '/news' },
  keywords: [
    'latest game news', 'GTA VI news', 'GTA 6 pre-order',
    'Red Dead Redemption 2 news', 'Elden Ring DLC',
    'Cyberpunk 2077 update', 'Diablo IV season',
    'Hogwarts Legacy update', 'PS5 release dates',
    'Xbox Series X games', 'Steam new releases 2026',
  ],
};

export default function NewsIndexPage() {
  const items = getAllNews();
  const featured = items[0];
  const rest = items.slice(1);
  const days = daysUntilGTAVI();

  // Group remaining items by year for the timeline
  const byYear = new Map<string, typeof rest>();
  for (const item of rest) {
    const year = item.date.slice(0, 4);
    const list = byYear.get(year) ?? [];
    list.push(item);
    byYear.set(year, list);
  }

  return (
    <main>
      <MegaNav />
      <NewsTicker items={items} daysToVI={days} />

      <section className="section pb-8">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.35em] text-neon-cyan">
            GTAVI.GUIDE / Latest News
          </div>
          <h1 className="display text-5xl sm:text-7xl text-white mt-3">
            Latest <span className="text-gradient-pink">game news</span>.
          </h1>
          <p className="mt-4 text-white/65 max-w-2xl">
            Every dated milestone from across the catalog — pre-order updates,
            patches, DLC drops, and platform changes. Aggregated from every
            game with a populated news feed.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass glass-pink">
            <Flame className="h-3.5 w-3.5 text-neon-pink" />
            <span className="text-sm text-white">
              GTA VI launches in <span className="display tracking-widest neon-pink">{days} days</span> · Nov 19, 2026
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      {featured && (
        <section className="px-5 pb-12">
          <div className="container-x">
            <Link
              href={`/games/${featured.gameId}/news`}
              className="block glass rounded-2xl overflow-hidden p-7 sm:p-10 hover:scale-[1.005] transition group"
              style={{
                borderColor: `${featured.game.accent}66`,
                background: `radial-gradient(80% 60% at 90% 10%, ${featured.game.accent}22, transparent 60%)`,
              }}
            >
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em]">
                <span
                  className="px-2 py-1 rounded border"
                  style={{ borderColor: featured.game.accent, color: featured.game.accent }}
                >
                  {featured.game.shortLabel} · {featured.game.title}
                </span>
                <span className="text-white/45 inline-flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {featured.date}
                </span>
              </div>
              <h2 className="display text-3xl sm:text-5xl text-white mt-4 leading-tight">
                {featured.title}
              </h2>
              {featured.desc && (
                <p className="mt-4 text-white/70 leading-relaxed max-w-3xl">
                  {featured.desc}
                </p>
              )}
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium" style={{ color: featured.game.accent }}>
                Read more on the {featured.game.title} news page
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* TIMELINE */}
      <section className="px-5 pb-24">
        <div className="container-x">
          <div className="flex items-center gap-3 mb-6">
            <Newspaper className="h-5 w-5 text-neon-cyan" />
            <h3 className="display text-2xl sm:text-3xl text-white">All news, newest first</h3>
            <span className="ml-auto text-xs uppercase tracking-widest text-white/40">
              {items.length} entries
            </span>
          </div>

          <div className="space-y-10">
            {[...byYear.entries()].map(([year, entries]) => (
              <div key={year}>
                <div className="display text-lg text-white/40 mb-4 tracking-widest">
                  · {year} ·
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {entries.map((item, i) => (
                    <Link
                      key={`${year}-${i}`}
                      href={`/games/${item.gameId}/news`}
                      className="glass rounded-lg p-4 hover:scale-[1.01] transition group border"
                      style={{ borderColor: `${item.game.accent}26` }}
                    >
                      <div className="flex items-center gap-2 text-xs">
                        <span
                          className="px-1.5 py-0.5 rounded border text-[10px] uppercase tracking-widest"
                          style={{
                            borderColor: `${item.game.accent}88`,
                            color: item.game.accent,
                          }}
                        >
                          {item.game.shortLabel}
                        </span>
                        <span className="text-white/45">{item.date}</span>
                        <ArrowUpRight className="h-3 w-3 ml-auto text-white/30 group-hover:text-white" />
                      </div>
                      <div className="mt-2 text-white font-semibold leading-snug">
                        {item.title}
                      </div>
                      {item.desc && (
                        <p className="mt-1.5 text-sm text-white/65 leading-snug line-clamp-2">
                          {item.desc}
                        </p>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
