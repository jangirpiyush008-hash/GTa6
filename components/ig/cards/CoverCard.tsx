import Image from 'next/image';
import type { IGCard } from '@/lib/ig-cards';
import IGFrame from '../IGFrame';
import IGBrandMark from '../IGBrandMark';

const accents: Record<string, string> = {
  pink: '#FF006E',
  cyan: '#00F5FF',
  gold: '#FFD700',
};

export default function CoverCard({ card }: { card: IGCard }) {
  const accent = accents[card.tone];
  return (
    <IGFrame size={card.size} className="bg-black">
      {card.bg && (
        <div className="absolute inset-0">
          <Image src={card.bg} alt="" fill sizes="1080px" priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/95" />
          <div
            className="absolute inset-0 mix-blend-screen opacity-50"
            style={{
              background: `radial-gradient(60% 60% at 50% 60%, ${accent}66, transparent 65%)`,
            }}
          />
        </div>
      )}

      <IGBrandMark position="top" />

      <div className="absolute inset-0 z-10 px-16 flex flex-col items-center justify-center text-center">
        <div
          className="px-7 py-2 rounded-full text-[24px] tracking-[0.45em] font-bold uppercase"
          style={{
            background: `${accent}22`,
            border: `1.5px solid ${accent}`,
            color: accent,
            boxShadow: `0 0 18px ${accent}55`,
          }}
        >
          {card.kicker}
        </div>
        <h1
          className="mt-10 text-white"
          style={{
            fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
            fontSize: '124px',
            lineHeight: 0.94,
            letterSpacing: '-0.005em',
            textTransform: 'uppercase',
            textShadow: '0 6px 36px rgba(0,0,0,0.75)',
          }}
        >
          {card.title}
        </h1>
        {card.subtitle && (
          <p className="mt-8 text-[32px] text-white/85 max-w-[860px] leading-snug">
            {card.subtitle}
          </p>
        )}

        <div
          className="mt-14 h-2 w-48 rounded-full"
          style={{
            background: `linear-gradient(90deg, ${accent}, #9D4EDD)`,
            boxShadow: `0 0 22px ${accent}aa`,
          }}
        />
      </div>
    </IGFrame>
  );
}
