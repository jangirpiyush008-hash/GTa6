import type { IGCard } from '@/lib/ig-cards';
import IGFrame from '../IGFrame';
import IGBrandMark from '../IGBrandMark';

const tones: Record<string, { left: string; right: string; rightBg: string }> = {
  pink: {
    left:    'border-white/15',
    right:   'border-[#FF006E]',
    rightBg: 'radial-gradient(60% 80% at 50% 50%, rgba(255,0,110,0.2), transparent 70%)',
  },
  cyan: {
    left:    'border-[#00F5FF]/70',
    right:   'border-white/15',
    rightBg: 'radial-gradient(60% 80% at 50% 50%, rgba(0,245,255,0.18), transparent 70%)',
  },
  gold: {
    left:    'border-white/15',
    right:   'border-[#FFD700]',
    rightBg: 'radial-gradient(60% 80% at 50% 50%, rgba(255,215,0,0.18), transparent 70%)',
  },
};

export default function ComparisonCard({ card }: { card: IGCard }) {
  if (!card.left || !card.right) return null;
  const t = tones[card.tone];

  return (
    <IGFrame size={card.size} className="bg-[#050308]">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, rgba(255,0,110,0.18), transparent 60%), radial-gradient(60% 50% at 50% 100%, rgba(0,245,255,0.15), transparent 60%), #050308',
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

      <div className="absolute inset-0 z-10 px-16 pt-44 pb-44 flex flex-col">
        <div className="text-center">
          <div className="text-[26px] tracking-[0.35em] font-bold text-[#FF006E]">
            {card.kicker}
          </div>
          <h1
            className="mt-3 text-white"
            style={{
              fontFamily: 'var(--font-display), Bebas Neue, Impact, sans-serif',
              fontSize: '92px',
              lineHeight: 0.95,
              textTransform: 'uppercase',
            }}
          >
            {card.title}
          </h1>
        </div>

        <div className="mt-12 flex-1 grid grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* LEFT */}
          <div className={`rounded-2xl border ${t.left} p-8 bg-white/[0.025] backdrop-blur-sm flex flex-col`}>
            <div className="text-[22px] tracking-[0.3em] text-white/70">{card.left.title}</div>
            {card.left.price && (
              <div
                className="mt-1 text-white"
                style={{
                  fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
                  fontSize: '64px',
                  lineHeight: 1,
                }}
              >
                {card.left.price}
              </div>
            )}
            <ul className="mt-6 space-y-3">
              {card.left.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[24px] text-white/85 leading-snug">
                  <span className="text-[#00F5FF]">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* VS */}
          <div className="flex items-center justify-center">
            <div
              className="text-[#FF006E]"
              style={{
                fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
                fontSize: '88px',
                textShadow: '0 0 28px rgba(255,0,110,0.8)',
              }}
            >
              VS
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`relative rounded-2xl border-2 ${t.right} p-8 flex flex-col`}
            style={{ background: t.rightBg }}
          >
            {card.right.badge && (
              <div
                className="absolute -top-4 right-6 px-3 py-1 rounded-full text-[14px] font-bold tracking-widest text-black"
                style={{
                  background: card.tone === 'gold' ? '#FFD700' : '#FF006E',
                  boxShadow:
                    card.tone === 'gold'
                      ? '0 0 18px rgba(255,215,0,0.7)'
                      : '0 0 18px rgba(255,0,110,0.7)',
                  color: card.tone === 'gold' ? '#1a0f00' : '#fff',
                }}
              >
                ★ {card.right.badge}
              </div>
            )}
            <div className="text-[22px] tracking-[0.3em] text-white">{card.right.title}</div>
            {card.right.price && (
              <div
                className="mt-1"
                style={{
                  fontFamily: 'var(--font-display), Bebas Neue, sans-serif',
                  fontSize: '64px',
                  lineHeight: 1,
                  color: card.tone === 'gold' ? '#FFD700' : '#FF006E',
                  textShadow:
                    card.tone === 'gold'
                      ? '0 0 20px rgba(255,215,0,0.5)'
                      : '0 0 20px rgba(255,0,110,0.5)',
                }}
              >
                {card.right.price}
              </div>
            )}
            <ul className="mt-6 space-y-3">
              {card.right.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[24px] text-white leading-snug">
                  <span className="text-[#FF006E]">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </IGFrame>
  );
}
