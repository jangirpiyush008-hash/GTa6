'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Countdown from './Countdown';
import { LINKS } from '@/lib/links';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-grain bg-scanlines">
      {/* Parallax background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/gta/screenshot-1.jpg"
          alt="GTA VI Vice City"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-110 opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-[#050308]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/40" />
        {/* magenta vignette */}
        <div
          className="absolute inset-0 opacity-50 mix-blend-screen"
          style={{
            background:
              'radial-gradient(800px 500px at 75% 30%, rgba(255,0,110,0.45), transparent 60%), radial-gradient(700px 500px at 10% 80%, rgba(0,245,255,0.25), transparent 60%)',
          }}
        />
      </div>

      {/* Hero content (top nav is the global MegaNav, rendered above) */}
      <div className="relative z-10 container-x flex flex-col items-center justify-center text-center pt-20 sm:pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 rounded-full glass glass-pink px-4 py-1.5 text-xs sm:text-sm text-white/90 mb-7"
        >
          <span className="h-2 w-2 rounded-full bg-neon-pink animate-pulse" />
          <span>⚡ Pre-orders <span className="neon-pink font-semibold">LIVE NOW</span> • Vintage Vice City Pack included FREE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="display text-5xl sm:text-7xl md:text-8xl text-white max-w-5xl"
        >
          THE ULTIMATE{' '}
          <span className="text-gradient-pink">GTA VI</span>{' '}
          PRE-ORDER GUIDE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-6 max-w-2xl text-base sm:text-xl text-white/75"
        >
          Everything you need to know before{' '}
          <span className="neon-cyan font-medium">November 19, 2026</span>.
          Editions, bonuses, the Leonida map, and the Vintage Vice City Pack
          — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 w-full"
        >
          <Countdown />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a href={LINKS.standard} className="btn btn-pink">
            Pre-order Now — $79.99
          </a>
          <a href="#guide" className="btn btn-gold animate-pulse-glow">
            Get the Full Guide — $4.99
          </a>
        </motion.div>

        <div className="mt-10 text-xs uppercase tracking-[0.3em] text-white/40">
          PS5 ▸ Xbox Series X|S ▸ November 19, 2026
        </div>
      </div>

      {/* fade to next section */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#050308] z-[4]" />
    </section>
  );
}
