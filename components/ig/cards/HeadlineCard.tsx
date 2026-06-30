import Image from 'next/image';
import type { IGCard } from '@/lib/ig-cards';
import IGFrame from '../IGFrame';
import IGBrandMark from '../IGBrandMark';

const toneClass: Record<string, { kicker: string; title: string; bar: string }> = {
  pink: {
    kicker: 'text-[#FF006E]',
    title: 'text-white',
    bar: 'from-[#FF006E] to-[#9D4EDD]',
  },
  cyan: {
    kicker: 'text-[#00F5FF]',
    title: 'text-white',
    bar: 'from-[#00F5FF] to-[#FF006E]',
  },
  gold: {
    kicker: 'text-[#FFD700]',
    title: 'text-white',
    bar: 'from-[#FFD700] to-[#FF006E]',
  },
};

export default function HeadlineCard({ card }: { card: IGCard }) {
  const t = toneClass[card.tone];
  return (
    <IGFrame size={card.size} className="bg-black">
      {/* Background */}
      {card.bg && (
        <div className="absolute inset-0">
          <Image
            src={card.bg}
            alt=""
            fill
            sizes="1080px"
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
          <div
            className="absolute inset-0 mix-blend-screen opacity-50"
            style={{
              background:
                card.tone === 'cyan'
                  ? 'radial-gradient(70% 60% at 20% 30%, rgba(0,245,255,0.45), transparent 60%)'
                  : card.tone === 'gold'
                  ? 'radial-gradient(70% 60% at 80% 30%, rgba(255,215,0,0.40), transparent 60%)'
                  : 'radial-gradient(70% 60% at 75% 30%, rgba(255,0,110,0.55), transparent 60%)',
            }}
          />
          {/* scanlines */}
          <div
            className="absolute inset-0 opacity-25 mix-blend-overlay"
            style={{
              background:
                'repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 4px)',
            }}
          />
        </div>
      )}
      {!card.bg && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 60% at 30% 30%, rgba(255,0,110,0.4), transparent 60%), radial-gradient(60% 60% at 80% 80%, rgba(0,245,255,0.3), transparent 60%), #050308',
          }}
        />
      )}

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col px-20 py-24">
        <div className="flex-1" />
        <div
          className={`text-[28px] tracking-[0.35em] font-bold ${t.kicker}`}
          style={{ textShadow: '0 0 16px rgba(255,0,110,0.4)' }}
        >
          {card.kicker}
        </div>
        <h1
          className={`mt-4 ${t.title}`}
          style={{
            fontFamily: 'var(--font-display), Bebas Neue, Impact, sans-serif',
            fontSize: card.title && card.title.length > 60 ? '78px' : '110px',
            lineHeight: 0.95,
            letterSpacing: '-0.005em',
            textShadow: '0 4px 32px rgba(0,0,0,0.7)',
            textTransform: 'uppercase',
          }}
        >
          {card.title}
        </h1>
        {card.subtitle && (
          <p className="mt-6 text-[28px] text-white/80 leading-snug max-w-[920px]">
            {card.subtitle}
          </p>
        )}
        <div
          className={`mt-10 h-2 w-40 rounded-full bg-gradient-to-r ${t.bar}`}
          style={{ boxShadow: '0 0 22px rgba(255,0,110,0.7)' }}
        />
      </div>

      <IGBrandMark position="top" />
    </IGFrame>
  );
}
