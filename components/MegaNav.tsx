'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import {
  releasedGames,
  upcomingGames,
  gamesById,
  type Game,
} from '@/lib/games';
import { categories, type CategoryId } from '@/lib/categories';
import { getCover } from '@/lib/game-covers';
import { ChevronDown, Sparkles, Search } from 'lucide-react';

/**
 * Simplified sticky nav.
 *  - Logo + brand
 *  - 3 featured games as text links (hover → 18-category dropdown)
 *  - ONE "All Games" dropdown that combines upcoming + released
 *  - Blog link
 *  - Pre-order CTA
 * No cover thumbnails in the main bar — they were the source of clutter.
 */

const FEATURED_SLUGS = ['gta-vi', 'gta-v', 'rdr-2', 'fifa'];

/* ───────── per-game 18-category panel ───────── */
function CategoryPanel({ game }: { game: Game }) {
  const enabled = new Set<CategoryId>(game.categoriesEnabled);
  const col1 = categories.filter((c) => c.column === 1);
  const col2 = categories.filter((c) => c.column === 2);
  return (
    <div
      className="absolute left-0 top-full mt-1 w-[620px] rounded-xl p-5 border border-white/10 z-50"
      style={{
        background: 'linear-gradient(180deg, rgba(15,12,28,0.98), rgba(10,10,10,0.98))',
        boxShadow: `0 24px 60px -12px ${game.accent}33, 0 0 0 1px ${game.accent}1a`,
      }}
    >
      <div className="grid grid-cols-[180px_1fr_1fr] gap-5">
        <Link
          href={`/games/${game.id}`}
          className="block rounded-lg overflow-hidden border transition hover:scale-[1.02] relative aspect-[4/5]"
          style={{ borderColor: `${game.accent}66` }}
        >
          {getCover(game.id) ? (
            <Image src={getCover(game.id) as string} alt={game.title} fill sizes="180px" className="object-cover" />
          ) : (
            <div
              className="absolute inset-0 flex items-center justify-center display text-5xl"
              style={{
                background: `linear-gradient(135deg, ${game.accent}33, transparent 70%), rgba(0,0,0,0.5)`,
                color: game.accent,
              }}
            >
              {game.shortLabel}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-2.5">
            <div className="text-[10px] uppercase tracking-[0.3em]" style={{ color: game.accent }}>
              {game.isUpcoming ? `Out ${game.releaseDate}` : game.year}
            </div>
            <div className="mt-0.5 text-xs font-semibold text-white leading-tight line-clamp-2">{game.title}</div>
          </div>
        </Link>
        {[col1, col2].map((col, ci) => (
          <ul key={ci} className="space-y-0.5">
            {col.map((c) => {
              const on = enabled.has(c.id);
              const inner = (
                <span
                  className={`flex items-center gap-2 px-2 py-1 rounded text-[13px] transition ${
                    on
                      ? 'text-white/85 hover:text-white hover:bg-white/[0.04]'
                      : 'text-white/30 cursor-not-allowed'
                  }`}
                >
                  <c.icon className="h-3.5 w-3.5 shrink-0" />
                  <span>{c.label}</span>
                  {!on && <span className="ml-auto text-[9px] uppercase tracking-widest text-white/30">Soon</span>}
                </span>
              );
              return (
                <li key={c.id}>
                  {on ? <Link href={`/games/${game.id}/${c.id}`}>{inner}</Link> : <div>{inner}</div>}
                </li>
              );
            })}
          </ul>
        ))}
      </div>
    </div>
  );
}

function GameTextLink({ game }: { game: Game }) {
  const [open, setOpen] = useState(false);
  const cover = getCover(game.id);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Link
        href={`/games/${game.id}`}
        className="display tracking-wider text-sm pl-2 pr-3 py-1.5 rounded-md transition relative inline-flex items-center gap-2"
        style={{
          color: open ? game.accent : 'rgba(255,255,255,0.9)',
          textShadow: open ? `0 0 14px ${game.accent}88` : undefined,
          background: open ? `${game.accent}14` : 'transparent',
        }}
      >
        {cover ? (
          <span
            className="relative shrink-0 overflow-hidden rounded ring-1"
            style={{
              width: 26,
              height: 26,
              borderColor: `${game.accent}88`,
              boxShadow: open ? `0 0 12px ${game.accent}88` : `0 0 6px ${game.accent}55`,
            }}
          >
            <Image src={cover} alt="" fill sizes="26px" className="object-cover" />
          </span>
        ) : (
          <span
            className="shrink-0 rounded text-[10px] flex items-center justify-center display"
            style={{
              width: 26,
              height: 26,
              background: `${game.accent}33`,
              border: `1px solid ${game.accent}66`,
              color: game.accent,
            }}
          >
            {game.shortLabel.length > 2 ? game.shortLabel.slice(0, 2) : game.shortLabel}
          </span>
        )}
        {game.shortLabel}
        {open && (
          <span
            className="absolute inset-x-2 -bottom-px h-[2px] rounded-t"
            style={{ background: game.accent, boxShadow: `0 0 10px ${game.accent}` }}
          />
        )}
      </Link>
      {open && <CategoryPanel game={game} />}
    </div>
  );
}

/* ───────── ALL GAMES dropdown — replaces UPCOMING + MORE ───────── */
function AllGamesDropdown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button className="display tracking-wider text-sm px-3 py-2 rounded-md text-white/85 hover:text-white transition inline-flex items-center gap-1.5">
        ALL GAMES
        <ChevronDown className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          className="absolute right-0 top-full mt-1 w-[780px] rounded-xl p-5 border border-white/10 z-50"
          style={{
            background: 'linear-gradient(180deg, rgba(15,12,28,0.98), rgba(10,10,10,0.98))',
            boxShadow: '0 24px 60px -12px rgba(255,0,110,0.2)',
          }}
        >
          <div className="grid grid-cols-2 gap-6">
            <section>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="h-3.5 w-3.5 text-neon-pink" />
                <h4 className="text-[11px] uppercase tracking-[0.3em] text-neon-pink">
                  Upcoming · {upcomingGames.length}
                </h4>
              </div>
              <div className="space-y-1">
                {upcomingGames.map((g) => <GameRow key={g.id} game={g} />)}
              </div>
            </section>
            <section>
              <div className="flex items-center gap-2 mb-3">
                <h4 className="text-[11px] uppercase tracking-[0.3em] text-neon-cyan">
                  Released · {releasedGames.length}
                </h4>
              </div>
              <div className="space-y-1 max-h-[480px] overflow-y-auto pr-1">
                {releasedGames.map((g) => <GameRow key={g.id} game={g} />)}
              </div>
            </section>
          </div>
          <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
            <Link href="/games" className="text-white/55 hover:text-white transition inline-flex items-center gap-1.5">
              <Search className="h-3 w-3" /> Browse the full catalog
            </Link>
            <span className="text-white/30">{releasedGames.length + upcomingGames.length} games</span>
          </div>
        </div>
      )}
    </div>
  );
}

function GameRow({ game }: { game: Game }) {
  return (
    <Link
      href={`/games/${game.id}`}
      className="flex items-center gap-3 rounded-md px-2 py-1.5 hover:bg-white/[0.04] transition group"
    >
      <span
        className="display text-sm tracking-wider w-16 shrink-0"
        style={{ color: game.accent }}
      >
        {game.shortLabel}
      </span>
      <span className="text-sm text-white/85 group-hover:text-white truncate">{game.title}</span>
      <span className="ml-auto text-[10px] text-white/40 shrink-0">
        {game.isUpcoming ? game.releaseDate : game.year}
      </span>
    </Link>
  );
}

export default function MegaNav() {
  const featured = FEATURED_SLUGS
    .map((s) => gamesById[s])
    .filter(Boolean) as Game[];

  return (
    <header className="sticky top-0 z-40 bg-[#050308]/95 backdrop-blur-md border-b border-white/10">
      <div className="container-x flex items-center justify-between px-4 lg:px-6 py-3 gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/images/gta/gta-vi-logo.png"
            alt="GTAVI.GUIDE"
            width={32}
            height={32}
            className="drop-shadow-[0_0_10px_rgba(255,0,110,0.55)]"
          />
          <span className="display text-lg tracking-widest text-gradient-pink hidden sm:inline">
            GTAVI<span className="text-white/70">.GUIDE</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {featured.map((g) => <GameTextLink key={g.id} game={g} />)}
          <div className="mx-2 h-5 w-px bg-white/10" />
          <AllGamesDropdown />
          <Link
            href="/news"
            className="display tracking-wider text-sm px-3 py-2 rounded-md text-white/85 hover:text-neon-pink transition inline-flex items-center gap-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-neon-pink animate-pulse" />
            NEWS
          </Link>
          <Link
            href="/blog"
            className="display tracking-wider text-sm px-3 py-2 rounded-md text-white/85 hover:text-white transition"
          >
            BLOG
          </Link>
        </nav>

        <a
          href="#editions"
          className="display tracking-wider text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-md bg-neon-pink text-white hover:shadow-neon-pink transition whitespace-nowrap shrink-0"
        >
          PRE-ORDER →
        </a>
      </div>
    </header>
  );
}
