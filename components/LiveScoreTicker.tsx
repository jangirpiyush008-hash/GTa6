'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trophy, Radio } from 'lucide-react';
import type { WCData } from '@/lib/worldcup';
import { teamBadge } from '@/lib/country-flags';

const WELCOME_KEY = 'gtavi_welcome_v2_shown';
const TICKER_DISMISSED_KEY = 'gtavi_ticker_hidden';

/**
 * Sticky top-of-viewport ticker bar with live World Cup scores.
 *
 * Behavior:
 *  - Hidden until the welcome popup has been dismissed (same sessionStorage flag).
 *  - User can also dismiss the ticker independently — stays hidden for the session.
 *  - When live: scrolls all today's matches + next scheduled match left → right infinitely.
 *  - Flag image + team code + live score for each match.
 */
export default function LiveScoreTicker({ data }: { data: WCData }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const check = () => {
      const welcomeDone = sessionStorage.getItem(WELCOME_KEY) === '1';
      const tickerHidden = sessionStorage.getItem(TICKER_DISMISSED_KEY) === '1';
      setShow(welcomeDone && !tickerHidden);
    };
    check();
    // Re-check every 700ms in case the welcome popup is dismissed mid-session.
    const t = setInterval(check, 700);
    window.addEventListener('storage', check);
    return () => {
      clearInterval(t);
      window.removeEventListener('storage', check);
    };
  }, []);

  if (!show) return null;
  if (!data || data.source === 'static') return null;

  const tickerMatches = [
    ...data.todaysMatches,
    ...(data.liveOrNext && !data.todaysMatches.some((m) => m.id === data.liveOrNext!.id)
      ? [data.liveOrNext]
      : []),
  ].slice(0, 12);

  if (tickerMatches.length === 0) return null;

  const dismiss = () => {
    sessionStorage.setItem(TICKER_DISMISSED_KEY, '1');
    setShow(false);
  };

  return (
    <div
      className="fixed top-0 left-0 right-0 z-40 flex items-stretch border-b border-emerald-500/30 overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, rgba(22,163,74,0.95), rgba(8,12,22,0.92) 35%, rgba(8,12,22,0.92))',
        backdropFilter: 'blur(8px)',
      }}
    >
      {/* Left badge */}
      <Link
        href="/fifa/worldcup"
        className="flex items-center gap-2 px-3 sm:px-4 py-2 text-white shrink-0 border-r border-white/15 hover:bg-white/5 transition"
      >
        <Trophy className="h-3.5 w-3.5 text-emerald-200" />
        <span className="text-[10px] uppercase tracking-[0.2em] font-bold hidden sm:inline">
          WC 2026 · LIVE
        </span>
        <span className="text-[10px] uppercase tracking-[0.15em] font-bold sm:hidden">WC&apos;26</span>
      </Link>

      {/* Scrolling ticker */}
      <div className="flex-1 relative overflow-hidden">
        <div className="flex animate-[tickerScroll_55s_linear_infinite] whitespace-nowrap py-2">
          {[...tickerMatches, ...tickerMatches].map((m, i) => {
            const isLive = m.status === 'IN_PLAY' || m.status === 'LIVE' || m.status === 'PAUSED';
            const isFinished = m.status === 'FINISHED';
            const homeBadge = teamBadge(m.homeTeam.crest, m.homeTeam.code);
            const awayBadge = teamBadge(m.awayTeam.crest, m.awayTeam.code);
            return (
              <span
                key={`${m.id}-${i}`}
                className="inline-flex items-center gap-2 px-5 text-[12px] text-white/90 border-r border-white/10"
              >
                {homeBadge && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={homeBadge} alt="" className="h-3 w-4 object-cover rounded-sm" />
                )}
                <span className="font-mono text-white/55">{m.homeTeam.code ?? ''}</span>
                <span className="text-white font-semibold truncate max-w-[10ch] sm:max-w-none">
                  {m.homeTeam.name}
                </span>
                <span className={`font-bold tabular-nums ${isLive ? 'text-neon-pink' : 'text-white'}`}>
                  {m.score?.home ?? '–'}
                </span>
                <span className="text-white/35">vs</span>
                <span className={`font-bold tabular-nums ${isLive ? 'text-neon-pink' : 'text-white'}`}>
                  {m.score?.away ?? '–'}
                </span>
                <span className="text-white font-semibold truncate max-w-[10ch] sm:max-w-none">
                  {m.awayTeam.name}
                </span>
                <span className="font-mono text-white/55">{m.awayTeam.code ?? ''}</span>
                {awayBadge && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={awayBadge} alt="" className="h-3 w-4 object-cover rounded-sm" />
                )}
                {isLive ? (
                  <span className="ml-1 inline-flex items-center gap-1 text-neon-pink font-bold text-[10px]">
                    <Radio className="h-2.5 w-2.5 animate-pulse" />
                    LIVE{m.minute ? ` ${m.minute}'` : ''}
                  </span>
                ) : isFinished ? (
                  <span className="ml-1 text-[10px] text-white/45 uppercase tracking-widest">FT</span>
                ) : (
                  <span className="ml-1 text-[10px] text-emerald-200/85 uppercase tracking-widest">
                    {new Date(m.utcDate).toLocaleString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                )}
              </span>
            );
          })}
        </div>
      </div>

      <button
        onClick={dismiss}
        className="px-2 sm:px-3 text-white/55 hover:text-white text-base shrink-0 border-l border-white/15 transition"
        aria-label="Dismiss live ticker"
      >
        ×
      </button>

      <style jsx global>{`
        @keyframes tickerScroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>
    </div>
  );
}
