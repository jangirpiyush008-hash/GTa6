'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { LINKS } from '@/lib/links';

const standard = [
  'Full single-player campaign (Jason & Lucia)',
  'Vintage Vice City Pack (pre-order bonus):',
  "'55 Vapid Stanier classic sedan + Ocean Beach garage",
  "Jason's vintage linen suit + 80s hairstyle",
  "Lucia's red sequin dress + curly hairstyle",
  'Tropical weapon pattern (Uzi skin)',
  '1 month GTA+ free (digital only)',
  'Available: Digital + Physical (code in box)',
];

const ultimate = [
  "'95 Grotti Cheetah sports car",
  'Dinka Enduro motorcycle',
  "'67 Vapid Dominator Buggy + exclusive garage",
  'Shitzu Squalo boat',
  'Crest Kayak',
  'Hawk & Little Morgan Morgan Revolvers (Jason & Lucia)',
  'Custom Girardi ES9 pistol',
  'Custom Klose K17 pistol',
  'PTT Youngin$ Illegal Goods Store side mission (EXCLUSIVE)',
  'Classic Car Collection commission mission',
  'Rideout Customs mod shop (exclusive)',
  "Sara's Unisex Salon (exclusive hairstyles/makeup)",
  'Stock 305 clothing store (exclusive)',
  'Electric Fang Tattoo shop (50+ exclusive FAILE tattoos)',
  "One-Eyed Willie's shop (exclusive)",
  'Macca the Gator themed apparel pack',
  'Digital only',
];

export default function EditionsComparison() {
  return (
    <section id="editions" className="section">
      <div className="container-x">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="display text-4xl sm:text-6xl text-center text-white"
        >
          Standard <span className="text-white/40">vs</span>{' '}
          <span className="text-gradient-pink">Ultimate</span> — Which One?
        </motion.h2>
        <p className="mt-4 text-center text-white/60 max-w-2xl mx-auto">
          A side-by-side breakdown. Picking right today saves you $20 — or
          regret in November.
        </p>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* STANDARD */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="glass glass-cyan rounded-2xl p-7 sm:p-9 relative"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-neon-cyan">
              Standard Edition
            </div>
            <div className="display text-5xl sm:text-6xl mt-2 text-white">
              $79.99
            </div>
            <div className="text-sm text-white/50 mt-1">
              The complete game + Vintage Vice City Pack
            </div>

            <ul className="mt-6 space-y-3">
              {standard.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/85 text-sm sm:text-base">
                  <Check className="h-5 w-5 text-neon-cyan shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={LINKS.standard}
              className="btn btn-ghost w-full mt-8 justify-center"
            >
              Pre-order Standard →
            </a>
          </motion.div>

          {/* ULTIMATE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass glass-pink rounded-2xl p-7 sm:p-9 relative"
          >
            <div className="absolute -top-3 right-5 inline-flex items-center gap-1.5 rounded-full bg-neon-gold text-black px-3 py-1 text-[11px] font-bold tracking-wider uppercase shadow-neon-gold">
              <Star className="h-3 w-3 fill-black" /> Recommended
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-neon-pink">
              Ultimate Edition
            </div>
            <div className="display text-5xl sm:text-6xl mt-2 text-gradient-pink">
              $99.99
            </div>
            <div className="text-sm text-white/60 mt-1">
              Everything in Standard, plus:
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2.5">
              {ultimate.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-white/85 text-sm">
                  <Check className="h-4 w-4 text-neon-pink shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={LINKS.ultimate}
              className="btn btn-pink w-full mt-8 justify-center"
            >
              Pre-order Ultimate →
            </a>
          </motion.div>
        </div>

        <div className="mt-8 text-center text-sm text-white/60">
          💡 Standard Edition owners can upgrade to Ultimate at any time after
          launch — no need to decide now.
        </div>
      </div>
    </section>
  );
}
