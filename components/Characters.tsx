'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const cast = [
  {
    name: 'Jason Duval',
    tag: 'The Wilderness Soldier',
    desc: 'Raised in the Florida wilderness. Hardened, loyal, and resourceful. A man of few words and direct action.',
    color: 'glass-cyan',
    accent: 'text-neon-cyan',
    img: '/images/gta/screenshot-3.jpg',
  },
  {
    name: 'Lucia Caminos',
    tag: 'The Ex-Con',
    desc: 'Just out of prison with nothing to lose. Sharp, ambitious, and done playing by anyone else’s rules.',
    color: 'glass-pink',
    accent: 'text-neon-pink',
    img: '/images/gta/screenshot-2.jpg',
  },
];

export default function Characters() {
  return (
    <section id="characters" className="section">
      <div className="container-x">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="display text-4xl sm:text-6xl text-center text-white"
        >
          Meet <span className="text-gradient-pink">Jason</span> &{' '}
          <span className="text-gradient-cyan">Lucia</span>
        </motion.h2>
        <p className="mt-4 text-center text-white/60 max-w-2xl mx-auto">
          For the first time in series history, you control a dual-protagonist
          duo bound by love, crime, and circumstance.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {cast.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`glass ${c.color} rounded-2xl overflow-hidden`}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050308] via-[#050308]/30 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <div className="text-xs uppercase tracking-[0.3em] text-white/70">
                    {c.tag}
                  </div>
                  <div className={`display text-4xl sm:text-5xl mt-1 ${c.accent}`}>
                    {c.name}
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-white/80 leading-relaxed">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
