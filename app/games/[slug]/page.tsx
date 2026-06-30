import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import MegaNav from '@/components/MegaNav';
import GameCard from '@/components/GameCard';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { games, gamesById, releasedGames, upcomingGames } from '@/lib/games';
import { categories } from '@/lib/categories';
import { getCover } from '@/lib/game-covers';
import { ArrowRight, Calendar, Cpu, Tag, Lock } from 'lucide-react';

export function generateStaticParams() {
  return games.map((g) => ({ slug: g.id }));
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const game = gamesById[slug];
  if (!game) return { title: 'Game not found · GTAVI.GUIDE' };
  return {
    title: `${game.title} · GTAVI.GUIDE`,
    description: `${game.tagline} ${game.blurb}`,
    alternates: { canonical: `/games/${game.id}` },
  };
}

export default async function GameHubPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const game = gamesById[slug];
  if (!game) notFound();

  // GTA VI lives on the homepage — bounce to the deep experience there
  if (game.id === 'gta-vi') redirect('/');

  const enabled = new Set(game.categoriesEnabled);
  const related = (game.isUpcoming ? upcomingGames : releasedGames)
    .filter((g) => g.id !== game.id)
    .slice(0, 4);

  return (
    <main>
      <MegaNav />

      {/* HERO */}
      <section
        className="relative overflow-hidden"
        style={{
          background: `radial-gradient(80% 70% at 30% 0%, ${game.accent}33, transparent 65%), radial-gradient(80% 70% at 80% 100%, ${game.accent}1c, transparent 65%), #050308`,
        }}
      >
        <div
          className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none"
          style={{
            background:
              'repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0 1px, transparent 1px 4px)',
          }}
        />
        <div className="container-x relative px-5 py-16 sm:py-24 grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12 items-center">
          {/* Real cover art (falls back to color tile when missing) */}
          <div
            className="relative rounded-xl overflow-hidden border aspect-[4/5]"
            style={{
              borderColor: `${game.accent}66`,
              boxShadow: `0 24px 60px -12px ${game.accent}66`,
            }}
          >
            {getCover(game.id) ? (
              <Image
                src={getCover(game.id) as string}
                alt={game.title}
                fill
                sizes="(max-width:1024px) 80vw, 280px"
                priority
                className="object-cover"
              />
            ) : (
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${game.accent}40, transparent 70%), rgba(0,0,0,0.6)`,
                }}
              >
                <div
                  className="display text-center"
                  style={{
                    fontSize: 'clamp(5rem, 14vw, 9rem)',
                    color: game.accent,
                    lineHeight: 1,
                    textShadow: `0 0 40px ${game.accent}aa, 0 0 100px ${game.accent}55`,
                  }}
                >
                  {game.shortLabel}
                </div>
              </div>
            )}
            <div
              className="absolute inset-0 mix-blend-overlay opacity-25"
              style={{
                background: `linear-gradient(180deg, transparent 40%, ${game.accent}55)`,
              }}
            />
            <div className="absolute inset-x-0 top-0 p-3 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] bg-gradient-to-b from-black/70 to-transparent">
              <span style={{ color: game.accent }}>
                {game.isUpcoming ? '⚡ Upcoming' : `Released ${game.year}`}
              </span>
              <span className="text-white/70">{game.shortLabel}</span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-3 text-center text-[10px] uppercase tracking-[0.3em] text-white/65 bg-gradient-to-t from-black/85 to-transparent">
              {game.developer}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.35em]" style={{ color: game.accent }}>
              {game.genre}
            </div>
            <h1 className="display text-4xl sm:text-6xl text-white mt-3 leading-[0.95]">
              {game.title}
            </h1>
            <p className="mt-5 text-lg sm:text-xl text-white/80 leading-snug max-w-2xl">
              {game.tagline}
            </p>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <div className="glass rounded-lg p-3">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/45">
                  <Calendar className="h-3 w-3" />
                  {game.isUpcoming ? 'Releases' : 'Released'}
                </div>
                <div className="mt-1 text-sm text-white">
                  {game.releaseDate ?? game.year}
                </div>
              </div>
              <div className="glass rounded-lg p-3">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/45">
                  <Tag className="h-3 w-3" />
                  Publisher
                </div>
                <div className="mt-1 text-sm text-white truncate">{game.publisher}</div>
              </div>
              <div className="glass rounded-lg p-3 sm:col-span-2">
                <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/45">
                  <Cpu className="h-3 w-3" />
                  Platforms
                </div>
                <div className="mt-1 text-sm text-white">
                  {game.platforms.join(' · ')}
                </div>
              </div>
            </div>

            <p className="mt-7 text-white/70 leading-relaxed max-w-2xl">
              {game.blurb}
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section">
        <div className="container-x">
          <h2 className="display text-3xl text-white mb-2">Explore {game.title}</h2>
          <p className="text-white/55 text-sm mb-8">
            {enabled.size} pages live · {18 - enabled.size} more coming as the community fills in.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {categories.map((c) => {
              const on = enabled.has(c.id);
              const inner = (
                <div
                  className={`group rounded-xl p-4 border transition h-full ${
                    on
                      ? 'glass hover:scale-[1.03]'
                      : 'border-white/5 bg-white/[0.015] opacity-50 cursor-not-allowed'
                  }`}
                  style={
                    on
                      ? { borderColor: `${game.accent}40` }
                      : undefined
                  }
                >
                  <c.icon
                    className="h-5 w-5 mb-3"
                    style={{ color: on ? game.accent : 'rgba(255,255,255,0.3)' }}
                  />
                  <div className={`text-sm font-semibold ${on ? 'text-white' : 'text-white/50'}`}>
                    {c.label}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[10px] uppercase tracking-widest">
                    {on ? (
                      <span style={{ color: game.accent }}>Open →</span>
                    ) : (
                      <span className="flex items-center gap-1 text-white/35">
                        <Lock className="h-2.5 w-2.5" /> Coming soon
                      </span>
                    )}
                  </div>
                </div>
              );
              return on ? (
                <Link key={c.id} href={`/games/${game.id}/${c.id}`}>
                  {inner}
                </Link>
              ) : (
                <div key={c.id}>{inner}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CROSS-SELL: pre-order CTA back to GTA VI */}
      <section className="px-5 pb-16">
        <div className="container-x">
          <div
            className="glass glass-pink rounded-2xl p-7 sm:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
            style={{ background: 'radial-gradient(60% 80% at 90% 50%, rgba(255,0,110,0.18), transparent 60%)' }}
          >
            <div>
              <div className="text-xs uppercase tracking-[0.35em] text-neon-pink">
                The big one is almost here
              </div>
              <h3 className="display text-2xl sm:text-4xl text-white mt-2">
                Pre-order GTA VI before the Vintage Vice City Pack disappears.
              </h3>
              <p className="mt-2 text-white/65 text-sm max-w-xl">
                November 19, 2026. The pack is gone forever after that. Full
                breakdown on the homepage.
              </p>
            </div>
            <Link href="/" className="btn btn-pink shrink-0">
              GTA VI Guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="px-5 pb-24">
          <div className="container-x">
            <h3 className="display text-2xl text-white mb-6">
              More {game.isUpcoming ? 'upcoming' : 'trending'} games
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
              {related.map((g) => (
                <GameCard key={g.id} game={g} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
