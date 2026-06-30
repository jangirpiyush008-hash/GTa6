import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import MegaNav from '@/components/MegaNav';
import Footer from '@/components/Footer';
import GameContentView from '@/components/games/GameContent';
import { games, gamesById } from '@/lib/games';
import { categories, categoriesById, type CategoryId } from '@/lib/categories';
import { getGameContent } from '@/lib/games-content';
import type { GameContent } from '@/lib/games-content/types';
import { ArrowLeft, Bell, Lock, Calendar } from 'lucide-react';

export function generateStaticParams() {
  const out: Array<{ slug: string; category: string }> = [];
  for (const game of games) {
    for (const cat of categories) {
      out.push({ slug: game.id, category: cat.id });
    }
  }
  return out;
}

export const dynamicParams = false;

export async function generateMetadata(props: {
  params: Promise<{ slug: string; category: string }>;
}): Promise<Metadata> {
  const { slug, category } = await props.params;
  const game = gamesById[slug];
  const cat = categoriesById[category as CategoryId];
  if (!game || !cat) return { title: 'Not found · GTAVI.GUIDE' };
  return {
    title: `${cat.label} · ${game.title} · GTAVI.GUIDE`,
    description: `${game.title} ${cat.label.toLowerCase()} guide — ${game.tagline}`,
    alternates: { canonical: `/games/${game.id}/${cat.id}` },
  };
}

/**
 * Maps GTA VI sub-categories that ALREADY exist on the homepage to their
 * homepage anchors, so users get sent to the deep experience there.
 */
const GTA_VI_ANCHORS: Partial<Record<CategoryId, string>> = {
  overview: '/',
  editions: '/#editions',
  features: '/#editions',
  screenshots: '/#gallery',
  map: '/#map',
  characters: '/#characters',
  news: '/blog',
};

export default async function CategoryStubPage(props: {
  params: Promise<{ slug: string; category: string }>;
}) {
  const { slug, category } = await props.params;
  const game = gamesById[slug];
  const cat = categoriesById[category as CategoryId];
  if (!game || !cat) notFound();

  // For GTA VI categories that exist on the homepage, redirect there.
  if (game.id === 'gta-vi' && GTA_VI_ANCHORS[cat.id]) {
    redirect(GTA_VI_ANCHORS[cat.id] as string);
  }

  const isEnabled = game.categoriesEnabled.includes(cat.id);
  const deepContent = getGameContent(game.id);
  // Any category whose data exists on the game's content object renders deep.
  const renderedContent =
    deepContent && (deepContent as Record<string, unknown>)[cat.id];

  return (
    <main>
      <MegaNav />

      <section
        className="relative overflow-hidden pt-12 pb-10"
        style={{
          background: `radial-gradient(70% 60% at 30% 0%, ${game.accent}26, transparent 60%), #050308`,
        }}
      >
        <div className="container-x px-5">
          <Link
            href={`/games/${game.id}`}
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to {game.title}
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <div
              className="p-2.5 rounded-lg border"
              style={{
                background: `${game.accent}22`,
                borderColor: `${game.accent}66`,
              }}
            >
              <cat.icon className="h-5 w-5" style={{ color: game.accent }} />
            </div>
            <div className="text-xs uppercase tracking-[0.35em] text-white/55">
              {game.title}
            </div>
          </div>
          <h1
            className="display text-4xl sm:text-6xl text-white mt-4"
            style={{ textShadow: `0 0 32px ${game.accent}55` }}
          >
            {cat.label}
          </h1>
        </div>
      </section>

      {renderedContent && deepContent ? (
        <section className="px-5 py-12 sm:py-16">
          <div className="container-x max-w-4xl">
            <GameContentView game={game} category={cat.id} content={deepContent} />
          </div>
        </section>
      ) : (
      <section className="px-5 py-16">
        <div className="container-x max-w-3xl">
          <div
            className="glass rounded-2xl p-8 sm:p-10 border"
            style={{ borderColor: `${game.accent}33` }}
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest" style={{ color: game.accent }}>
              {isEnabled ? (
                <>
                  <Calendar className="h-3.5 w-3.5" /> In development
                </>
              ) : (
                <>
                  <Lock className="h-3.5 w-3.5" /> Coming soon
                </>
              )}
            </div>
            <h2 className="display text-3xl sm:text-4xl text-white mt-3">
              {cat.label} for {game.title} is on the way.
            </h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              We&apos;re building this section out across all {games.length}{' '}
              games. The {cat.label.toLowerCase()} page for {game.title} will
              include everything you&apos;d expect — searchable data, comparison
              tables, and downloadable references.
            </p>
            {game.isUpcoming && (
              <p className="mt-3 text-white/55 text-sm">
                Most of this content can only be confirmed at or after launch
                ({game.releaseDate}). We&apos;ll fill it in as Rockstar and the
                community release info.
              </p>
            )}

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={`/games/${game.id}`}
                className="btn btn-ghost text-sm py-2.5 px-4"
              >
                <ArrowLeft className="h-4 w-4" /> {game.title} hub
              </Link>
              <a
                href="#"
                className="btn text-sm py-2.5 px-4 text-white"
                style={{
                  background: game.accent,
                  boxShadow: `0 0 18px ${game.accent}88`,
                }}
              >
                <Bell className="h-4 w-4" /> Notify me when live
              </a>
            </div>
          </div>

          {/* Other available categories for this game */}
          <div className="mt-10">
            <div className="text-xs uppercase tracking-[0.3em] text-white/45 mb-4">
              While you wait — explore {game.title}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {categories
                .filter((c) => c.id !== cat.id)
                .slice(0, 9)
                .map((c) => {
                  const on = game.categoriesEnabled.includes(c.id);
                  const inner = (
                    <div
                      className={`rounded-lg p-3 border text-sm flex items-center gap-2 transition ${
                        on
                          ? 'glass hover:scale-[1.02]'
                          : 'border-white/5 bg-white/[0.01] opacity-50'
                      }`}
                      style={on ? { borderColor: `${game.accent}30` } : undefined}
                    >
                      <c.icon
                        className="h-4 w-4 shrink-0"
                        style={{ color: on ? game.accent : 'rgba(255,255,255,0.3)' }}
                      />
                      <span className={on ? 'text-white' : 'text-white/50'}>{c.label}</span>
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
        </div>
      </section>
      )}

      <Footer />
    </main>
  );
}
