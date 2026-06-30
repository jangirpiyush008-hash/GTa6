'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trophy, X, ExternalLink, Radio } from 'lucide-react';
import type { WCData } from '@/lib/worldcup';

const HIDE_KEY = 'gtavi_wc_hidden';

/**
 * Fixed bottom-left widget showing the current / next World Cup match plus
 * a click-through to the full standings page. Dismissible (sessionStorage).
 *
 * Renders nothing if the data layer didn't return anything usable.
 */
export default function WorldCupWidget({ data }: { data: WCData }) {
  const [hidden, setHidden] = useState(true); // start hidden — show after mount check
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(HIDE_KEY) === '1';
    setHidden(dismissed);
  }, []);

  if (hidden) return null;
  if (!data.liveOrNext) return null;

  const m = data.liveOrNext;
  const isLive = m.status === 'LIVE' || m.status === 'IN_PLAY';
  const isFinished = m.status === 'FINISHED';
  const isPlaceholder = m.status === 'PLACEHOLDER' || data.source === 'static';

  const close = () => {
    sessionStorage.setItem(HIDE_KEY, '1');
    setHidden(true);
  };

  return (
    <div
      className="fixed bottom-4 left-4 z-50 w-[280px] sm:w-[320px] rounded-xl border border-white/10 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(15,12,28,0.97), rgba(10,10,10,0.97))',
        boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,0,110,0.15)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-neon-pink/15 to-transparent border-b border-white/5">
        <Trophy className="h-3.5 w-3.5 text-neon-pink" />
        <div className="flex-1 text-[10px] uppercase tracking-[0.25em] text-white/85 font-semibold">
          FIFA World Cup 2026
        </div>
        {isLive && (
          <span className="flex items-center gap-1 text-[10px] text-neon-pink font-bold">
            <Radio className="h-3 w-3 animate-pulse" />
            LIVE
          </span>
        )}
        <button
          onClick={close}
          className="text-white/40 hover:text-white transition"
          aria-label="Dismiss"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Body */}
      <div className="p-3">
        {isPlaceholder ? (
          <div>
            <div className="text-sm text-white/85 leading-snug">
              The 2026 World Cup is underway · live data wiring is ready.
            </div>
            <div className="mt-2 text-[11px] text-white/55 leading-snug">
              Add <code className="text-neon-pink font-mono">FOOTBALL_DATA_API_KEY</code> in <code className="text-white/70">.env.local</code> to enable real standings + scores.
            </div>
          </div>
        ) : (
          <>
            <div className="text-[10px] uppercase tracking-widest text-white/45 mb-1">
              {isLive ? 'Now playing' : isFinished ? 'Latest result' : 'Up next'}
              {m.group && <span className="ml-1">· Group {m.group.replace('GROUP_', '')}</span>}
            </div>
            <div className="space-y-1.5">
              {[
                { name: m.homeTeam.name, code: m.homeTeam.code, score: m.score?.home ?? null, side: 'home' },
                { name: m.awayTeam.name, code: m.awayTeam.code, score: m.score?.away ?? null, side: 'away' },
              ].map((t) => (
                <div key={t.side} className="flex items-center gap-2.5">
                  {t.code && (
                    <span className="text-[10px] font-mono text-white/45 w-9">
                      {t.code}
                    </span>
                  )}
                  <span className="flex-1 text-sm text-white truncate">{t.name}</span>
                  <span
                    className={`text-base font-bold tabular-nums ${
                      isLive ? 'text-neon-pink' : 'text-white'
                    }`}
                  >
                    {t.score ?? '–'}
                  </span>
                </div>
              ))}
            </div>
            {!isLive && !isFinished && (
              <div className="mt-2 text-[11px] text-white/55">
                {new Date(m.utcDate).toLocaleString([], {
                  weekday: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
            )}
            {isLive && m.minute != null && (
              <div className="mt-2 text-[11px] text-neon-pink font-bold">
                {m.minute}&prime;
              </div>
            )}
          </>
        )}
      </div>

      {/* Footer */}
      <Link
        href="/fifa/worldcup"
        className="flex items-center justify-between gap-2 px-3 py-2 text-[11px] text-white/70 hover:text-white transition border-t border-white/5 bg-white/[0.02]"
      >
        <span className="inline-flex items-center gap-1.5">
          <Trophy className="h-3 w-3" />
          All groups + standings
        </span>
        <ExternalLink className="h-3 w-3" />
      </Link>
    </div>
  );
}
