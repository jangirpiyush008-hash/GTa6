import type { IGCard } from '@/lib/ig-cards';
import IGFrame from '../IGFrame';
import IGBrandMark from '../IGBrandMark';

/**
 * Static countdown sticker rendered at build time.
 * Computes days remaining from now to Nov 19 2026 — for IG exports we
 * resolve once and bake the number into the image.
 */
function daysUntilLaunch(): number {
  const launch = new Date('2026-11-19T15:00:00Z').getTime();
  const ms = Math.max(0, launch - Date.now());
  return Math.floor(ms / 86_400_000);
}

export default function CountdownCard({ card }: { card: IGCard }) {
  const days = daysUntilLaunch();
  return (
    <IGFrame size={card.size} className="bg-[#050308]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 50%, rgba(255,0,110,0.45), transparent 60%), radial-gradient(70% 70% at 50% 100%, rgba(157,78,221,0.4), transparent 60%), #050308',
        }}
      />
      <div
        className="absolute inset-0 opacity-25 mix-blend-overlay"
        style={{
          background:
            'repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 4px)',
        }}
      />

      <IGBrandMark position="top" />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-12">
        <div className="text-[28px] tracking-[0.4em] font-bold text-[#FF006E]">
          {card.kicker}
        </div>
        <div
          className="mt-6 text-white tabular-nums"
          style={{
            fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
            fontSize: '380px',
            lineHeight: 0.85,
            textShadow:
              '0 0 36px rgba(255,0,110,0.7), 0 0 90px rgba(255,0,110,0.4)',
          }}
        >
          {days}
        </div>
        <div
          className="mt-2 text-white/95"
          style={{
            fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
            fontSize: '64px',
            letterSpacing: '0.15em',
          }}
        >
          DAYS
        </div>
        <div className="mt-10 text-[32px] text-white/85">{card.title}</div>
        <div className="mt-2 text-[26px] text-white/55">{card.subtitle}</div>
      </div>
    </IGFrame>
  );
}
