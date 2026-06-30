import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import MegaNav from '@/components/MegaNav';
import Footer from '@/components/Footer';
import { posts } from '@/lib/blog';
import { Clock, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GTA VI Blog — Guides, News & Pre-Launch Coverage | GTAVI.GUIDE',
  description:
    'The latest GTA VI news, edition guides, map breakdowns, and pre-launch deep dives. Updated weekly until November 19, 2026.',
  alternates: { canonical: '/blog' },
};

const tagStyle: Record<string, string> = {
  guide: 'text-neon-gold border-neon-gold/40',
  news: 'text-neon-pink border-neon-pink/40',
  'deep-dive': 'text-neon-cyan border-neon-cyan/40',
  comparison: 'text-white border-white/30',
};

const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

export default function BlogIndexPage() {
  const [featured, ...rest] = sorted;

  return (
    <main>
      <MegaNav />

      <section className="section pb-10">
        <div className="container-x">
          <div className="text-xs uppercase tracking-[0.35em] text-neon-cyan">
            GTAVI.GUIDE / Blog
          </div>
          <h1 className="display text-5xl sm:text-7xl text-white mt-3">
            The GTA VI <span className="text-gradient-pink">Pre-Launch</span> Blog
          </h1>
          <p className="mt-4 text-white/65 max-w-2xl">
            Weekly guides, news, and deep dives. Every post links out to its
            primary sources — no rumours, no AI slop.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="pb-12 px-5">
        <div className="container-x">
          <Link
            href={`/blog/${featured.slug}`}
            className="group block glass glass-pink rounded-2xl overflow-hidden lg:grid lg:grid-cols-2 hover:shadow-neon-pink transition"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto">
              <Image
                src={featured.hero}
                alt={featured.title}
                fill
                sizes="(max-width:1024px) 100vw, 600px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-pink text-white text-[10px] font-bold tracking-widest uppercase">
                ⚡ Featured
              </div>
            </div>
            <div className="p-7 sm:p-10 flex flex-col justify-center">
              <div
                className={`inline-flex w-fit items-center gap-2 px-2.5 py-1 rounded border text-[10px] uppercase tracking-widest ${tagStyle[featured.tag]}`}
              >
                {featured.category}
              </div>
              <h2 className="display text-3xl sm:text-5xl mt-4 text-white group-hover:text-gradient-pink transition">
                {featured.title}
              </h2>
              <p className="mt-3 text-white/70 leading-relaxed">{featured.excerpt}</p>
              <div className="mt-5 flex items-center gap-5 text-sm text-white/55">
                <time>{formatDate(featured.date)}</time>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" /> {featured.readMin} min read
                </span>
              </div>
              <div className="mt-6 flex items-center gap-2 text-neon-pink font-medium">
                Read article <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 px-5">
        <div className="container-x">
          <div className="flex items-baseline justify-between mb-6">
            <h3 className="display text-2xl sm:text-3xl text-white">
              Latest posts
            </h3>
            <span className="text-xs uppercase tracking-widest text-white/40">
              {sorted.length} articles
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group glass rounded-2xl overflow-hidden hover:border-neon-pink/40 transition flex flex-col"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={p.hero}
                    alt={p.title}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded border text-[10px] uppercase tracking-widest bg-black/50 backdrop-blur ${tagStyle[p.tag]}`}
                  >
                    {p.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="display text-xl text-white group-hover:text-neon-pink transition leading-tight">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm text-white/65 leading-relaxed line-clamp-3">
                    {p.excerpt}
                  </p>
                  <div className="mt-auto pt-4 flex items-center justify-between text-xs text-white/50">
                    <time>{formatDate(p.date)}</time>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {p.readMin} min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}
