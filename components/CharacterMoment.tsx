'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type Tone = 'pink' | 'cyan' | 'gold';

type Props = {
  image: string;
  kicker?: string;
  title: string;
  subtitle?: string;
  tone?: Tone;
  /** position the headline block left or right */
  align?: 'left' | 'right' | 'center';
};

const tones: Record<Tone, { kicker: string; bar: string }> = {
  pink: {
    kicker: 'text-neon-pink',
    bar: 'linear-gradient(90deg, #FF006E, #9D4EDD)',
  },
  cyan: {
    kicker: 'text-neon-cyan',
    bar: 'linear-gradient(90deg, #00F5FF, #FF006E)',
  },
  gold: {
    kicker: 'neon-gold',
    bar: 'linear-gradient(90deg, #FFD700, #FF006E)',
  },
};

/**
 * Full-bleed scroll moment with sticky parallax background.
 * The image is fixed inside the section while text scrolls past it,
 * fading in mid-section and out near the bottom.
 */
export default function CharacterMoment({
  image,
  kicker,
  title,
  subtitle,
  tone = 'pink',
  align = 'left',
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Image: parallax (slower than scroll), slight zoom
  const yImage = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const scaleImage = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1.0, 1.12]);

  // Text: enter from bottom mid-section, exit near top
  const yText = useTransform(scrollYProgress, [0, 0.5, 1], [80, 0, -80]);
  const opacityText = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0],
  );

  const t = tones[tone];

  const alignClass =
    align === 'right'
      ? 'items-end text-right'
      : align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left';

  return (
    <section
      ref={ref}
      className="relative w-full h-[90vh] sm:h-[100vh] overflow-hidden"
    >
      {/* PARALLAX BG */}
      <motion.div
        className="absolute inset-0"
        style={{ y: yImage, scale: scaleImage }}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050308]/55 via-[#050308]/35 to-[#050308]" />
        <div
          className="absolute inset-0 mix-blend-screen opacity-50"
          style={{
            background:
              tone === 'cyan'
                ? 'radial-gradient(60% 60% at 20% 30%, rgba(0,245,255,0.35), transparent 65%)'
                : tone === 'gold'
                ? 'radial-gradient(60% 60% at 80% 30%, rgba(255,215,0,0.3), transparent 65%)'
                : 'radial-gradient(60% 60% at 75% 30%, rgba(255,0,110,0.4), transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            background:
              'repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0 1px, transparent 1px 4px)',
          }}
        />
      </motion.div>

      {/* TEXT */}
      <motion.div
        className={`relative z-10 h-full container-x flex flex-col justify-center px-6 sm:px-10 ${alignClass}`}
        style={{ y: yText, opacity: opacityText }}
      >
        <div className={`max-w-2xl ${align === 'right' ? 'ml-auto' : ''}`}>
          {kicker && (
            <div
              className={`text-[11px] sm:text-sm uppercase tracking-[0.4em] font-bold ${t.kicker}`}
            >
              {kicker}
            </div>
          )}
          <h2
            className="display text-white mt-4"
            style={{
              fontSize: 'clamp(2.75rem, 7vw, 6rem)',
              lineHeight: 0.95,
              letterSpacing: '-0.005em',
              textShadow: '0 4px 32px rgba(0,0,0,0.75)',
              textTransform: 'uppercase',
            }}
          >
            {title}
          </h2>
          {subtitle && (
            <p className="mt-5 text-lg sm:text-2xl text-white/85 leading-snug max-w-xl">
              {subtitle}
            </p>
          )}
          <div
            className={`mt-8 h-1.5 w-32 rounded-full ${align === 'right' ? 'ml-auto' : ''}`}
            style={{ background: t.bar, boxShadow: '0 0 18px rgba(255,0,110,0.6)' }}
          />
        </div>
      </motion.div>

      {/* fade-into-next */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#050308] pointer-events-none" />
    </section>
  );
}
