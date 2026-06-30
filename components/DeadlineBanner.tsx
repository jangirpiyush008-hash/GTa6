'use client';

import { AlertTriangle } from 'lucide-react';
import { LINKS } from '@/lib/links';

export default function DeadlineBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative py-7 sm:py-8 px-6 text-center"
        style={{
          background:
            'linear-gradient(90deg, #b8004f 0%, #ff006e 50%, #b8004f 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,.18) 0 12px, transparent 12px 24px)",
          }}
        />
        <div className="relative container-x flex flex-col md:flex-row items-center justify-center gap-4 md:gap-7">
          <div className="flex items-center gap-3 text-white font-semibold text-base sm:text-lg">
            <AlertTriangle className="h-6 w-6 shrink-0" />
            <span>
              <span className="display tracking-wider text-xl sm:text-2xl mr-2">
                PRE-ORDER DEADLINE:
              </span>
              NOVEMBER 19, 2026 — After this date, the Vintage Vice City Pack is{' '}
              <span className="underline decoration-white/70">GONE FOREVER</span>
            </span>
          </div>
          <a
            href={LINKS.standard}
            className="btn bg-black/85 text-white border border-white/30 hover:bg-black hover:border-white whitespace-nowrap"
          >
            Pre-order Before It&apos;s Too Late →
          </a>
        </div>
      </div>
    </section>
  );
}
