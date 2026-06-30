import Link from 'next/link';
import Image from 'next/image';
import type { Game } from '@/lib/games';
import { getCover } from '@/lib/game-covers';
import { ArrowUpRight, Sparkles } from 'lucide-react';

/**
 * Game card with the real cover as background and a color-tinted overlay.
 * Falls back to a procedural gradient + shortLabel when no cover is mapped.
 */
export default function GameCard({ game }: { game: Game }) {
  const cover = getCover(game.id);

  return (
    <Link
      href={`/games/${game.id}`}
      className="group relative rounded-xl overflow-hidden border transition hover:scale-[1.015] block"
      style={{
        borderColor: `${game.accent}55`,
        boxShadow: `0 14px 32px -16px ${game.accent}66`,
      }}
    >
      <div className="aspect-[4/5] relative">
        {cover ? (
          <Image
            src={cover}
            alt={game.title}
            fill
            sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `linear-gradient(135deg, ${game.accent}40 0%, ${game.accent}10 50%, rgba(0,0,0,0.6) 100%)`,
            }}
          >
            <div
              className="display text-8xl"
              style={{
                color: game.accent,
                textShadow: `0 0 30px ${game.accent}aa`,
              }}
            >
              {game.shortLabel}
            </div>
          </div>
        )}

        {/* dark gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/20" />

        {/* color tint */}
        <div
          className="absolute inset-0 mix-blend-overlay opacity-60"
          style={{
            background: `linear-gradient(160deg, ${game.accent}33 0%, transparent 50%)`,
          }}
        />

        {/* upcoming badge */}
        {game.isUpcoming && (
          <span
            className="absolute top-3 left-3 inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] uppercase tracking-widest font-bold backdrop-blur-sm"
            style={{
              background: `${game.accent}aa`,
              color: '#fff',
            }}
          >
            <Sparkles className="h-2.5 w-2.5" />
            Upcoming
          </span>
        )}

        <ArrowUpRight
          className="absolute top-3 right-3 h-4 w-4 opacity-0 group-hover:opacity-100 transition"
          style={{ color: game.accent }}
        />

        {/* meta block */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/65">
            {game.isUpcoming ? game.releaseDate : `${game.year} · ${game.genre}`}
          </div>
          <h3
            className="display text-xl sm:text-2xl text-white leading-tight mt-1 line-clamp-2"
            style={{ textShadow: `0 2px 16px rgba(0,0,0,0.85)` }}
          >
            {game.title}
          </h3>
          <p className="mt-1.5 text-xs text-white/65 leading-snug line-clamp-2">
            {game.tagline}
          </p>
        </div>
      </div>

      {/* edge glow on hover */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition rounded-xl"
        style={{
          boxShadow: `inset 0 0 60px ${game.accent}44, 0 0 40px ${game.accent}44`,
        }}
      />
    </Link>
  );
}
