'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { X, Trophy, Sparkles, ArrowRight, Flame } from 'lucide-react';

const SESSION_KEY = 'gtavi_welcome_v2_shown';

/**
 * First-visit modal promoting the FIFA World Cup 2026 tracker + the GTA VI
 * pre-order angle. Renders client-side after a 600ms delay so it doesn't
 * fight the initial paint. Dismissible — won't show again in the same session.
 */
export default function WelcomePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (sessionStorage.getItem(SESSION_KEY) === '1') return;
    const t = setTimeout(() => setOpen(true), 700);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    sessionStorage.setItem(SESSION_KEY, '1');
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 animate-[fadeIn_220ms_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="welcome-title"
    >
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md"
        onClick={close}
      />

      <div
        className="relative w-full max-w-xl rounded-2xl border overflow-hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(15,12,28,0.98), rgba(10,10,10,0.99))',
          borderColor: 'rgba(22,163,74,0.45)',
          boxShadow: '0 30px 80px -20px rgba(22,163,74,0.4), 0 0 0 1px rgba(22,163,74,0.2)',
        }}
      >
        {/* Header band with WC accent */}
        <div
          className="relative px-6 py-4 border-b border-emerald-500/20"
          style={{ background: 'linear-gradient(90deg, rgba(22,163,74,0.3), rgba(0,245,255,0.08))' }}
        >
          <div className="flex items-center gap-2">
            <Trophy className="h-4 w-4 text-emerald-300" />
            <div className="text-[10px] uppercase tracking-[0.35em] text-emerald-200 font-bold">
              FIFA World Cup 2026 · Tournament Live
            </div>
            <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold text-neon-pink">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-pink animate-pulse" />
              LIVE NOW
            </span>
          </div>
          <button
            onClick={close}
            className="absolute top-3 right-3 p-1.5 rounded text-white/40 hover:text-white hover:bg-white/10 transition"
            aria-label="Close welcome"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-7">
          <h2
            id="welcome-title"
            className="display text-3xl sm:text-4xl text-white leading-tight"
            style={{ textShadow: '0 0 28px rgba(22,163,74,0.45)' }}
          >
            Welcome to <span className="text-gradient-pink">GTAVI.GUIDE</span>
          </h2>

          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            The 2026 FIFA World Cup is mid-tournament — 48 teams across USA, Canada
            and Mexico through July 19. We're tracking it live alongside every major
            release across PS5, Xbox Series X|S, and PC. Pre-order links are
            affiliate; the cheat-codes are free.
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
            <div className="glass rounded-lg p-3 border border-emerald-500/20">
              <div className="flex items-center gap-1.5 text-emerald-300 mb-1">
                <Trophy className="h-3 w-3" />
                <span className="uppercase tracking-[0.25em] font-bold">World Cup</span>
              </div>
              <div className="text-white/85">All 12 groups · live scores · today's matches</div>
            </div>
            <div className="glass rounded-lg p-3 border border-neon-pink/30">
              <div className="flex items-center gap-1.5 text-neon-pink mb-1">
                <Flame className="h-3 w-3" />
                <span className="uppercase tracking-[0.25em] font-bold">GTA VI</span>
              </div>
              <div className="text-white/85">Pre-orders live · Nov 19, 2026 launch · countdown active</div>
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-2.5">
            <Link
              href="/fifa/worldcup"
              onClick={close}
              className="btn text-sm py-2.5 flex-1 justify-center"
              style={{ background: '#16a34a', color: '#fff' }}
            >
              <Trophy className="h-4 w-4" />
              World Cup tracker
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/#editions"
              onClick={close}
              className="btn btn-pink text-sm py-2.5 flex-1 justify-center"
            >
              <Sparkles className="h-4 w-4" />
              Pre-order GTA VI
            </Link>
          </div>

          <button
            onClick={close}
            className="mt-3 text-[11px] text-white/40 hover:text-white/70 transition mx-auto block"
          >
            No thanks, just browsing
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
