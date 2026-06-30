import type { IGCard } from '@/lib/ig-cards';
import IGFrame from '../IGFrame';
import IGBrandMark from '../IGBrandMark';

const accents: Record<string, string> = {
  pink: '#FF006E',
  cyan: '#00F5FF',
  gold: '#FFD700',
};

export default function QuoteCard({ card }: { card: IGCard }) {
  const accent = accents[card.tone];
  return (
    <IGFrame size={card.size} className="bg-[#050308]">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(70% 60% at 50% 30%, ${accent}33, transparent 65%), radial-gradient(60% 50% at 50% 100%, rgba(157,78,221,0.25), transparent 60%), #050308`,
        }}
      />
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          background:
            'repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 4px)',
        }}
      />

      <IGBrandMark position="top" />

      <div className="absolute inset-0 z-10 px-24 flex flex-col items-start justify-center">
        <div
          style={{
            fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
            fontSize: '200px',
            lineHeight: 0.7,
            color: accent,
            opacity: 0.4,
            textShadow: `0 0 24px ${accent}66`,
          }}
        >
          “
        </div>
        <p
          className="text-white -mt-6"
          style={{
            fontSize: '54px',
            lineHeight: 1.15,
            fontWeight: 500,
            maxWidth: '900px',
          }}
        >
          {card.quote}
        </p>
        {card.attribution && (
          <div
            className="mt-10 text-[24px] tracking-[0.3em] uppercase"
            style={{ color: accent }}
          >
            — {card.attribution}
          </div>
        )}
      </div>
    </IGFrame>
  );
}
