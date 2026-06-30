import type { IGCard } from '@/lib/ig-cards';
import IGFrame from '../IGFrame';
import IGBrandMark from '../IGBrandMark';

export default function CtaCard({ card }: { card: IGCard }) {
  return (
    <IGFrame size={card.size} className="bg-[#050308]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 60% at 50% 30%, rgba(255,215,0,0.3), transparent 60%), radial-gradient(60% 60% at 50% 100%, rgba(255,0,110,0.35), transparent 60%), #050308',
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

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-20 text-center">
        <div className="text-[28px] tracking-[0.4em] font-bold text-[#FFD700]">
          {card.kicker}
        </div>
        <h1
          className="mt-5 text-white"
          style={{
            fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
            fontSize: '120px',
            lineHeight: 0.95,
            letterSpacing: '-0.005em',
            textTransform: 'uppercase',
            textShadow: '0 4px 32px rgba(0,0,0,0.7)',
          }}
        >
          {card.title}
        </h1>
        {card.subtitle && (
          <p className="mt-6 text-[30px] text-white/80 max-w-[820px] leading-snug">
            {card.subtitle}
          </p>
        )}

        <div className="mt-14 flex flex-col items-center gap-5">
          <div
            className="px-16 py-7 rounded-full"
            style={{
              background:
                'linear-gradient(180deg, #ffe968 0%, #ffd700 60%, #b88a00 100%)',
              color: '#1a0f00',
              boxShadow:
                '0 0 28px rgba(255,215,0,0.7), 0 0 64px rgba(255,215,0,0.35)',
              fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
              fontSize: '54px',
              letterSpacing: '0.15em',
            }}
          >
            PRE-ORDER NOW →
          </div>
          <div className="flex items-center gap-6 text-[22px] text-white/65">
            <span>STANDARD · $79.99</span>
            <span className="text-white/30">|</span>
            <span>ULTIMATE · $99.99</span>
          </div>
        </div>
      </div>
    </IGFrame>
  );
}
