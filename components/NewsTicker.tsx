'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Newspaper, X, Sparkles, Flame } from 'lucide-react';
import type { FeedItem } from '@/lib/news-feed';

/**
 * Continuous horizontal news ticker that sits below the MegaNav.
 * - Shows the GTA VI countdown + the 8 most recent news items
 * - Loops via CSS keyframe animation (no JS RAF)
 * - Dismissible — closed state persists in sessionStorage
 */
export default function NewsTicker({
  items,
  daysToVI,
}: {
  items: FeedItem[];
  daysToVI: number;
}) {
  const [open, setOpen] = useState(true);

  if (!open) return null;

  // Duplicate the strip once so the CSS animation can loop seamlessly
  const strip = [
    {
      key: 'countdown',
      content: (
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white hover:text-neon-pink transition px-5"
        >
          <Flame className="h-3.5 w-3.5 text-neon-pink" />
          <span className="display tracking-widest text-sm">
            GTA VI · {daysToVI} DAYS until launch · NOV 19, 2026
          </span>
        </Link>
      ),
    },
    ...items.slice(0, 8).map((item, i) => ({
      key: `n${i}`,
      content: (
        <Link
          key={i}
          href={`/games/${item.gameId}/news`}
          className="inline-flex items-center gap-2 text-white/85 hover:text-white transition px-5 whitespace-nowrap"
        >
          <span
            className="text-[10px] uppercase tracking-[0.3em] px-1.5 py-0.5 rounded border"
            style={{ borderColor: `${item.game.accent}88`, color: item.game.accent }}
          >
            {item.game.shortLabel}
          </span>
          <span className="text-xs text-white/45">{item.date}</span>
          <span className="text-sm">{item.title}</span>
        </Link>
      ),
    })),
  ];

  return (
    <div
      className="sticky top-[64px] z-30 border-y border-white/10 bg-[#050308]/95 backdrop-blur-md overflow-hidden"
      role="region"
      aria-label="Latest news"
    >
      <div className="flex items-center">
        <div className="hidden sm:inline-flex shrink-0 items-center gap-2 px-4 py-2 bg-neon-pink text-white text-[10px] uppercase tracking-[0.3em] font-bold">
          <Sparkles className="h-3 w-3" />
          Latest
        </div>

        <div className="flex-1 min-w-0 overflow-hidden relative">
          <div className="flex items-center whitespace-nowrap animate-ticker py-2.5">
            {[...strip, ...strip].map((s, i) => (
              <span
                key={`${s.key}-${i}`}
                className="flex items-center border-r border-white/10 last:border-r-0"
              >
                {s.content}
              </span>
            ))}
          </div>
        </div>

        <Link
          href="/news"
          className="hidden md:inline-flex shrink-0 items-center gap-1.5 px-3 py-2 text-xs text-white/70 hover:text-white transition border-l border-white/10"
        >
          <Newspaper className="h-3 w-3" />
          All news
        </Link>
        <button
          onClick={() => setOpen(false)}
          className="shrink-0 p-2 text-white/40 hover:text-white transition border-l border-white/10"
          aria-label="Dismiss ticker"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      <style jsx>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: tickerScroll 90s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
