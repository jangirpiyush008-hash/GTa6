'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trophy, X, ExternalLink, Radio, Clock } from 'lucide-react';
import type { WCData } from '@/lib/worldcup';
import { teamBadge } from '@/lib/country-flags';

const HIDE_KEY = 'gtavi_wc_hidden';

/**
 * Fixed bottom-left widget showing the current / next World Cup match plus
 * a click-through to the full standings page. Dismissible (sessionStorage).
 *
 * Live additions:
 *  - Country flag / crest next to each team
 *  - Live countdown timer ticking down to next kickoff (when status === SCHEDULED)
 *  - LIVE pulse with minute counter when match is IN_PLAY
 */
export default function WorldCupWidget({ data }: { data: WCData }) {
  const [hidden, setHidden] = useState(true);
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const dismissed = sessionStorage.getItem(HIDE_KEY) === '1';
    setHidden(dismissed);
    const tick = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(tick);
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

  // Countdown — only when SCHEDULED in the future
  const kickoffMs = new Date(m.utcDate).getTime();
  const deltaMs = Math.max(0, kickoffMs - now);
  const showCountdown = m.status === 'SCHEDULED' && deltaMs > 0;
  const hours = Math.floor(deltaMs / 3_600_000);
  const minutes = Math.floor((deltaMs % 3_600_000) / 60_000);
  const seconds = Math.floor((deltaMs % 60_000) / 1000);

  const teams = [
    { name: m.homeTeam.name, code: m.homeTeam.code, crest: m.homeTeam.crest, score: m.score?.home ?? null },
    { name: m.awayTeam.name, code: m.awayTeam.code, crest: m.awayTeam.crest, score: m.score?.away ?? null },
  ];

  return (
    <div
      className="fixed bottom-4 left-4 z-50 w-[300px] sm:w-[340px] rounded-xl border border-white/10 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, rgba(15,12,28,0.97), rgba(10,10,10,0.97))',
        boxShadow: '0 20px 50px -10px rgba(0,0,0,0.6), 0 0 0 1px rgba(22,163,74,0.25)',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-emerald-500/15 to-transparent border-b border-white/5">
        <Trophy className="h-3.5 w-3.5 text-emerald-300" />
        <div className="flex-1 text-[10px] uppercase tracking-[0.25em] text-white/85 font-semibold">
          FIFA World Cup 2026
        </div>
        {isLive && (
          <span className="flex items-center gap-1 text-[10px] text-neon-pink font-bold">
            <Radio className="h-3 w-3 animate-pulse" />
            LIVE
          </span>
        )}
        <button onClick={close} className="text-white/40 hover:text-white transition" aria-label="Dismiss">
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Body */}
      <div className="p-3">
        {isPlaceholder ? (
          <div>
            <div className="text-sm text-white/85 leading-snug">
              The 2026 World Cup is underway · live wiring ready.
            </div>
            <div className="mt-2 text-[11px] text-white/55 leading-snug">
              Add <code className="text-emerald-300 font-mono">FOOTBALL_DATA_API_KEY</code> in <code className="text-white/70">.env.local</code>.
            </div>
          </div>
        ) : (
          <>
            <div className="text-[10px] uppercase tracking-widest text-white/45 mb-2 flex items-center gap-2">
              <span>
                {isLive ? 'Now playing' : isFinished ? 'Latest result' : 'Up next'}
                {m.group && ` · Group ${m.group.replace('GROUP_', '')}`}
              </span>
            </div>
            <div className="space-y-2">
              {teams.map((t, i) => {
                const badge = teamBadge(t.crest, t.code);
                return (
                  <div key={i} className="flex items-center gap-2.5">
                    {badge ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={badge}
                        alt=""
                        className="h-4 w-6 object-cover rounded-sm shrink-0 ring-1 ring-white/10"
                      />
                    ) : (
                      <span className="h-4 w-6 rounded-sm bg-white/5 shrink-0" />
                    )}
                    {t.code && (
                      <span className="text-[10px] font-mono text-white/45 w-8">{t.code}</span>
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
                );
              })}
            </div>

            {showCountdown && (
              <div className="mt-3 flex items-center gap-2 text-[11px] bg-emerald-500/10 border border-emerald-500/30 rounded-md px-2.5 py-1.5">
                <Clock className="h-3 w-3 text-emerald-300" />
                <span className="text-white/70">Kickoff in</span>
                <span className="ml-auto font-mono font-bold text-emerald-300 tabular-nums">
                  {hours > 0 && `${hours}h `}{String(minutes).padStart(2, '0')}m {String(seconds).padStart(2, '0')}s
                </span>
              </div>
            )}
            {isLive && m.minute != null && (
              <div className="mt-2 text-[11px] text-neon-pink font-bold flex items-center gap-1">
                <Radio className="h-3 w-3 animate-pulse" />
                {m.minute}&prime; in play
              </div>
            )}
            {!isLive && !isFinished && !showCountdown && (
              <div className="mt-2 text-[11px] text-white/55">
                {new Date(m.utcDate).toLocaleString([], {
                  weekday: 'short',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
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
