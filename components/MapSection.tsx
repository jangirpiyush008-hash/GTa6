'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const locations = [
  {
    name: 'Vice City',
    desc: 'The sun and fun capital of America. Neon-soaked streets, pastel art deco hotels, Ocean Beach white sands.',
    accent: 'text-neon-pink',
    badge: 'VC',
  },
  {
    name: 'Vice-Dale County',
    desc: 'Miami-Dade inspired region surrounding Vice City. Suburbs, strip malls, and golf courses bleed into wetlands.',
    accent: 'text-neon-cyan',
    badge: 'VD',
  },
  {
    name: 'Leonida Keys',
    desc: 'Florida Keys-inspired island chain. Bridges over turquoise water, dive bars, and smuggler coves.',
    accent: 'text-neon-pink',
    badge: 'LK',
  },
  {
    name: 'Port Gellhorn',
    desc: 'Major port city with industrial waterfront, container yards, and a rusting downtown ripe for trouble.',
    accent: 'text-neon-cyan',
    badge: 'PG',
  },
  {
    name: 'Grassrivers',
    desc: 'Everglades-inspired wetlands region. Airboats, gator farms, and stilt houses deep in the swamp.',
    accent: 'text-neon-pink',
    badge: 'GR',
  },
  {
    name: 'Mount Kalaga',
    desc: 'Elevated terrain region in northern Leonida. Pine forests, lookout points, and back-road races.',
    accent: 'text-neon-cyan',
    badge: 'MK',
  },
];

export default function MapSection() {
  return (
    <section id="map" className="section">
      <div className="container-x">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="display text-4xl sm:text-6xl text-center text-white"
        >
          Explore the State of{' '}
          <span className="text-gradient-cyan">Leonida</span>
        </motion.h2>
        <p className="mt-4 text-center text-white/60 max-w-2xl mx-auto">
          Six distinct regions, one massive open world inspired by modern-day
          Florida. Here&apos;s where you&apos;ll spend the next 1,000 hours.
        </p>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="mt-12 relative rounded-2xl overflow-hidden glass glass-cyan"
        >
          <div className="relative aspect-[1/1] sm:aspect-[16/15] w-full bg-[#050308]">
            <Image
              src="/images/gta/leonida-map.webp"
              alt="Community-built State of Leonida map for GTA VI"
              fill
              sizes="(max-width:1024px) 100vw, 1100px"
              className="object-contain"
              priority={false}
            />
            {/* Neon overlay tint */}
            <div
              className="absolute inset-0 pointer-events-none mix-blend-screen"
              style={{
                background:
                  'radial-gradient(60% 60% at 50% 40%, rgba(255,0,110,0.18), transparent 65%), radial-gradient(60% 60% at 50% 70%, rgba(0,245,255,0.12), transparent 65%)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay"
              style={{
                background:
                  'repeating-linear-gradient(to bottom, rgba(255,255,255,0.05) 0 1px, transparent 1px 4px)',
              }}
            />
            {/* Top label */}
            <div className="absolute top-4 left-5 right-5 flex items-start justify-between pointer-events-none">
              <div>
                <div className="display text-xl sm:text-2xl text-neon-pink tracking-[0.25em]">
                  STATE OF LEONIDA
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/55">
                  Community-built reference · gtabase / r/GTA6
                </div>
              </div>
            </div>
            {/* Bottom gradient + caption */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#050308] to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-[10px] sm:text-xs uppercase tracking-[0.25em] text-white/60 pointer-events-none">
              <span>Fan-made · subject to revision</span>
              <span>v.2026.06</span>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {locations.map((loc, i) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-xl p-6 hover:border-white/25 transition group relative"
            >
              <div
                className={`absolute top-4 right-4 text-[10px] font-mono tracking-widest px-2 py-0.5 rounded border border-white/15 ${loc.accent}`}
              >
                {loc.badge}
              </div>
              <div className="flex items-center gap-2.5 mb-3">
                <MapPin className={`h-5 w-5 ${loc.accent}`} />
                <h3 className={`display tracking-widest text-xl ${loc.accent}`}>
                  {loc.name}
                </h3>
              </div>
              <p className="text-sm text-white/65 leading-relaxed">{loc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
