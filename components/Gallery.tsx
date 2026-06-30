'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const shots = [
  { src: '/images/gta/screenshot-1.jpg', alt: 'Vice City coastline' },
  { src: '/images/gta/screenshot-2.jpg', alt: 'Neon downtown' },
  { src: '/images/gta/screenshot-3.jpg', alt: 'Convertible cruising' },
  { src: '/images/gta/screenshot-4.jpg', alt: 'Palms at sunset' },
  { src: '/images/gta/screenshot-5.jpg', alt: 'Skyline by night' },
  { src: '/images/gta/screenshot-6.jpg', alt: 'Vintage classic car' },
];

export default function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="gallery" className="section">
      <div className="container-x">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="display text-4xl sm:text-6xl text-center text-white"
        >
          Vice City <span className="text-gradient-pink">in Action</span>
        </motion.h2>
        <p className="mt-4 text-center text-white/60 max-w-2xl mx-auto">
          A first look at the world of GTA VI — click any shot for full screen.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {shots.map((s, i) => (
            <motion.button
              key={s.src}
              type="button"
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-[16/10] overflow-hidden rounded-xl glass hover:glass-pink transition-shadow"
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white/90 text-xs uppercase tracking-widest">
                <span>{s.alt}</span>
                <span className="opacity-0 group-hover:opacity-100 transition">View ↗</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10"
          >
            <button
              className="absolute top-5 right-5 text-white/80 hover:text-white rounded-full bg-white/10 p-2"
              onClick={() => setOpen(null)}
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-6xl aspect-[16/9]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={shots[open].src}
                alt={shots[open].alt}
                fill
                sizes="100vw"
                className="object-contain rounded-xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
