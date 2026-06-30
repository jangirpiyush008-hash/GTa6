'use client';

import { motion } from 'framer-motion';
import { Check, Download, FileCheck2 } from 'lucide-react';
import { LINKS } from '@/lib/links';

const inside = [
  'Standard vs Ultimate Edition — full breakdown with verdict',
  'Every pre-order bonus explained (what’s actually worth it)',
  'Vintage Vice City Pack — complete item list & how to unlock',
  'Leonida map guide — all 6 counties, confirmed locations',
  'Jason & Lucia complete character profiles',
  'GTA Online what to expect — based on GTA V patterns',
  'Best gaming setup recommendations for GTA VI (PS5 vs Xbox)',
  'Day 1 checklist — what to do first when you boot up',
  'Ultimate Edition exclusive content — is the $20 upgrade worth it?',
  'GTA VI vs GTA V — what’s changed, what’s new',
];

export default function GuideProduct() {
  return (
    <section id="guide" className="section relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(600px 400px at 80% 30%, rgba(255,215,0,0.15), transparent 60%), radial-gradient(700px 500px at 10% 70%, rgba(255,0,110,0.18), transparent 60%)',
        }}
      />
      <div className="container-x relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="display text-4xl sm:text-6xl text-center text-white"
        >
          The Complete <span className="neon-gold">GTA VI</span> Pre-Launch Guide
        </motion.h2>
        <p className="mt-4 text-center text-white/65 max-w-2xl mx-auto">
          Everything a serious player needs to know before Day 1 — in one
          downloadable PDF.
        </p>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-10 items-start">
          {/* PDF mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto w-full max-w-[360px]"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-neon-gold border border-neon-gold/30">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(160deg, #1a0033 0%, #0a0a0a 50%, #1a0a14 100%)',
                }}
              />
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background:
                    'radial-gradient(circle at 30% 20%, rgba(255,0,110,0.5), transparent 50%), radial-gradient(circle at 70% 80%, rgba(0,245,255,0.4), transparent 50%)',
                }}
              />
              <div className="absolute inset-0 p-7 flex flex-col">
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/60">
                  GTAVI.GUIDE Presents
                </div>
                <div className="display text-5xl sm:text-6xl mt-3 text-gradient-pink leading-[0.9]">
                  THE<br />ULTIMATE<br />GTA VI<br />GUIDE
                </div>
                <div className="mt-auto">
                  <div className="inline-block px-3 py-1 rounded-full bg-neon-gold text-black text-[10px] font-bold tracking-widest mb-3">
                    2026 EDITION
                  </div>
                  <div className="text-white/70 text-xs">
                    Pre-launch • Editions • Map • Day 1 checklist
                  </div>
                </div>
                <div className="absolute right-5 top-5 text-[10px] uppercase tracking-widest text-neon-cyan">
                  v1.0
                </div>
              </div>
              {/* scan lines */}
              <div
                className="absolute inset-0 pointer-events-none opacity-30 mix-blend-overlay"
                style={{
                  background:
                    'repeating-linear-gradient(to bottom, rgba(255,255,255,0.06) 0 1px, transparent 1px 3px)',
                }}
              />
            </div>
            {/* shadow ground */}
            <div className="mt-3 mx-auto h-3 w-3/4 rounded-full bg-neon-gold/20 blur-xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-xs uppercase tracking-[0.3em] text-neon-gold">
              The Digital Guide
            </div>
            <h3 className="display text-3xl sm:text-4xl mt-2 text-white">
              42 pages. 0 fluff. Everything you need.
            </h3>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
              {inside.map((line, i) => (
                <li key={i} className="flex items-start gap-2.5 text-white/85 text-sm">
                  <Check className="h-4 w-4 text-neon-gold shrink-0 mt-0.5" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-white/40 line-through text-2xl">$9.99</span>
              <span className="display text-5xl sm:text-6xl neon-gold">$4.99</span>
              <span className="text-xs uppercase tracking-widest text-white/55">
                launch price
              </span>
            </div>

            <div className="mt-3 text-sm text-neon-pink">
              🔥 142 copies sold this week
            </div>

            <a
              href={LINKS.guide}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold w-full sm:w-auto mt-6 animate-pulse-glow"
            >
              <Download className="h-5 w-5" />
              Get Instant Access — $4.99 →
            </a>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/60">
              <span className="flex items-center gap-1.5">
                <Download className="h-3.5 w-3.5" /> Instant PDF download
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck2 className="h-3.5 w-3.5" /> No login required
              </span>
              <span className="flex items-center gap-1.5">
                ✓ 30-day refund
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
