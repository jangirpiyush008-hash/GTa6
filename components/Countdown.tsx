'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { LAUNCH_DATE } from '@/lib/links';

type Parts = { d: number; h: number; m: number; s: number };

function diff(target: Date): Parts {
  const ms = Math.max(0, target.getTime() - Date.now());
  const d = Math.floor(ms / 86_400_000);
  const h = Math.floor((ms % 86_400_000) / 3_600_000);
  const m = Math.floor((ms % 3_600_000) / 60_000);
  const s = Math.floor((ms % 60_000) / 1000);
  return { d, h, m, s };
}

const target = new Date(LAUNCH_DATE);

export default function Countdown() {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff(target));
    const id = setInterval(() => setParts(diff(target)), 1000);
    return () => clearInterval(id);
  }, []);

  const cells: Array<{ label: string; value: number }> = parts
    ? [
        { label: 'Days', value: parts.d },
        { label: 'Hours', value: parts.h },
        { label: 'Minutes', value: parts.m },
        { label: 'Seconds', value: parts.s },
      ]
    : [
        { label: 'Days', value: 0 },
        { label: 'Hours', value: 0 },
        { label: 'Minutes', value: 0 },
        { label: 'Seconds', value: 0 },
      ];

  return (
    <div className="flex flex-wrap items-stretch justify-center gap-3 sm:gap-5">
      {cells.map((c) => (
        <div
          key={c.label}
          className="glass glass-pink rounded-lg px-4 py-3 sm:px-6 sm:py-4 min-w-[78px] sm:min-w-[110px]"
        >
          <motion.div
            key={`${c.label}-${c.value}`}
            initial={{ opacity: 0.5, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="display text-4xl sm:text-6xl neon-pink leading-none text-center tabular-nums"
          >
            {String(c.value).padStart(2, '0')}
          </motion.div>
          <div className="mt-2 text-[10px] sm:text-xs tracking-[0.25em] text-white/60 uppercase text-center">
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}
