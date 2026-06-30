import Image from 'next/image';
import type { IGCard } from '@/lib/ig-cards';
import IGFrame from '../IGFrame';
import IGBrandMark from '../IGBrandMark';

const accents: Record<string, string> = {
  pink: '#FF006E',
  cyan: '#00F5FF',
  gold: '#FFD700',
};

export default function ListCard({ card }: { card: IGCard }) {
  const accent = accents[card.tone];
  return (
    <IGFrame size={card.size} className="bg-[#050308]">
      {card.bg && (
        <div className="absolute inset-0">
          <Image src={card.bg} alt="" fill sizes="1080px" priority className="object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/95" />
        </div>
      )}
      {!card.bg && (
        <div
          className="absolute inset-0"
          style={{
            background:
              `radial-gradient(70% 50% at 30% 10%, ${accent}33, transparent 60%), #050308`,
          }}
        />
      )}

      <IGBrandMark position="top" />

      <div className="absolute inset-0 z-10 px-20 pt-44 pb-44 flex flex-col">
        <div className="text-[26px] tracking-[0.35em] font-bold" style={{ color: accent }}>
          {card.kicker}
        </div>
        <h1
          className="mt-3 text-white"
          style={{
            fontFamily: 'var(--font-display), Bebas Neue, Impact, sans-serif',
            fontSize: '88px',
            lineHeight: 0.95,
            textTransform: 'uppercase',
          }}
        >
          {card.title}
        </h1>

        <ol className="mt-12 space-y-5 flex-1">
          {(card.items ?? []).map((item, i) => (
            <li key={i} className="flex items-center gap-6">
              <div
                className="shrink-0 w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: `${accent}22`,
                  border: `2px solid ${accent}`,
                  boxShadow: `0 0 18px ${accent}66`,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
                    fontSize: '36px',
                    color: accent,
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <span
                className="text-white"
                style={{
                  fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
                  fontSize: '44px',
                  letterSpacing: '0.02em',
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </IGFrame>
  );
}
