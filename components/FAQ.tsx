'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'When does GTA VI release?',
    a: 'November 19, 2026 on PlayStation 5 and Xbox Series X|S. A PC release is expected later (likely 2027–2028) but has not been officially confirmed by Rockstar.',
  },
  {
    q: 'How much does GTA VI cost?',
    a: 'Standard Edition is $79.99 (digital & physical) and the Ultimate Edition is $99.99 (digital only). Both are available to pre-order now.',
  },
  {
    q: 'What is the pre-order deadline for the bonus?',
    a: 'You must pre-order before November 19, 2026 to receive the Vintage Vice City Pack. After launch, the pack is no longer available for new buyers.',
  },
  {
    q: 'Is the Ultimate Edition worth the extra $20?',
    a: 'For most players, yes. You get six exclusive vehicles, two unique weapons, multiple exclusive shops in Vice City, and the PTT Youngin$ side mission — content that can never be unlocked through normal play. At $20 the per-item value is significantly better than buying these as DLC later.',
  },
  {
    q: 'Will GTA VI come to PC?',
    a: 'Not at launch. Rockstar has only confirmed PS5 and Xbox Series X|S for November 19, 2026. Based on the historical pattern (GTA V launched on PC ~18 months after consoles), expect PC sometime in 2027 or 2028.',
  },
  {
    q: 'Can I upgrade from Standard to Ultimate later?',
    a: 'Yes. You can upgrade from Standard to Ultimate Edition at any time after launch through the PS Store or Microsoft Store — you only pay the price difference.',
  },
  {
    q: 'Is the physical edition a disc?',
    a: 'No. The physical Standard Edition ships as a code in a box — there is no game disc. The download size is expected to be ~150 GB.',
  },
  {
    q: 'What is the Vintage Vice City Pack?',
    a: 'A free pre-order bonus included with both editions. It contains: the ’55 Vapid Stanier classic sedan + Ocean Beach garage, Jason’s vintage linen suit + 80s hairstyle, Lucia’s red sequin dress + curly hairstyle, and a Tropical weapon pattern (Uzi skin). Only available to those who pre-order before November 19, 2026.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section">
      <div className="container-x max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="display text-4xl sm:text-6xl text-center text-white"
        >
          Frequently <span className="text-gradient-cyan">Asked</span>
        </motion.h2>

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-xl glass overflow-hidden transition-colors ${
                  isOpen ? 'border-neon-pink/50' : ''
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4"
                >
                  <span className="text-white font-medium text-base sm:text-lg">
                    {f.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-white/60 transition-transform shrink-0 ${
                      isOpen ? 'rotate-180 text-neon-pink' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 text-white/75 leading-relaxed text-sm sm:text-base">
                        {f.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
