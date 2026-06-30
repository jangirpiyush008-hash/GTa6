'use client';

import { motion } from 'framer-motion';

type Item = {
  date: string;
  title: string;
  status: 'done' | 'upcoming' | 'launch' | 'warning' | 'future';
};

const items: Item[] = [
  { date: 'June 25, 2026', title: 'Pre-orders LIVE ✅', status: 'done' },
  { date: 'November 12, 2026', title: 'Digital preload begins', status: 'upcoming' },
  { date: 'November 19, 2026', title: 'LAUNCH DAY 🎮', status: 'launch' },
  { date: 'November 20, 2026', title: 'Vintage Vice City Pack EXPIRES ⚠️', status: 'warning' },
  { date: '2027–2028 (est.)', title: 'PC release', status: 'future' },
];

const styles: Record<Item['status'], { dot: string; ring: string; title: string }> = {
  done:     { dot: 'bg-neon-cyan',  ring: 'ring-neon-cyan/40',  title: 'text-neon-cyan' },
  upcoming: { dot: 'bg-white/70',   ring: 'ring-white/20',      title: 'text-white' },
  launch:   { dot: 'bg-neon-gold animate-pulse', ring: 'ring-neon-gold/50', title: 'text-neon-gold' },
  warning:  { dot: 'bg-neon-pink',  ring: 'ring-neon-pink/40',  title: 'text-neon-pink' },
  future:   { dot: 'bg-white/30',   ring: 'ring-white/10',      title: 'text-white/70' },
};

export default function Timeline() {
  return (
    <section className="section">
      <div className="container-x max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="display text-4xl sm:text-6xl text-center text-white"
        >
          Mark Your <span className="text-gradient-pink">Calendar</span>
        </motion.h2>

        <div className="relative mt-14 pl-8 sm:pl-10">
          <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-neon-cyan/60 via-neon-pink/60 to-neon-gold/60" />
          {items.map((it, i) => {
            const s = styles[it.status];
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <div
                  className={`absolute -left-[26px] sm:-left-[30px] top-2 h-4 w-4 rounded-full ring-4 ${s.dot} ${s.ring}`}
                />
                <div className="glass rounded-xl px-5 py-4">
                  <div className="text-xs uppercase tracking-[0.25em] text-white/55">
                    {it.date}
                  </div>
                  <div className={`display text-2xl mt-1 ${s.title}`}>{it.title}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
