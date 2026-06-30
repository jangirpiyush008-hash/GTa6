import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import MegaNav from '@/components/MegaNav';
import Footer from '@/components/Footer';
import BlogBody from '@/components/BlogBody';
import { allSlugs, getPost, relatedPosts } from '@/lib/blog';
import { ArrowLeft, Clock, ExternalLink, Calendar } from 'lucide-react';
import { LINKS } from '@/lib/links';

export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return { title: 'Post not found — GTAVI.GUIDE' };
  return {
    title: `${post.title} | GTAVI.GUIDE`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
      images: [{ url: post.hero, width: 1600, height: 900 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.hero],
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = relatedPosts(slug);

  return (
    <main>
      <MegaNav />

      {/* Hero */}
      <section className="relative pt-10 pb-12 sm:pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={post.hero}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050308]/40 via-[#050308]/80 to-[#050308]" />
        </div>
        <div className="container-x max-w-3xl px-5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-neon-cyan transition"
          >
            <ArrowLeft className="h-4 w-4" />
            All articles
          </Link>
          <div className="mt-6 text-xs uppercase tracking-[0.3em] text-neon-pink">
            {post.category}
          </div>
          <h1 className="display text-4xl sm:text-6xl text-white mt-3 leading-[1.05]">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-white/75 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="mt-6 flex items-center gap-5 text-sm text-white/55">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              {post.readMin} min read
            </span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-5 mb-12">
        <div className="container-x max-w-4xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden glass glass-pink">
            <Image
              src={post.hero}
              alt={post.title}
              fill
              sizes="(max-width:1024px) 100vw, 900px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Body */}
      <article className="px-5 pb-16">
        <div className="container-x max-w-3xl">
          <BlogBody body={post.body} />

          {/* Inline CTA */}
          <div className="mt-12 glass glass-gold rounded-2xl p-6 sm:p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-neon-gold">
              Pre-order GTA VI
            </div>
            <h3 className="display text-2xl sm:text-3xl text-white mt-2">
              Get the Vintage Vice City Pack before it disappears.
            </h3>
            <p className="mt-3 text-white/70 text-sm">
              Available with both Standard and Ultimate editions, but only if
              you pre-order before November 19, 2026.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={LINKS.standard} className="btn btn-pink">
                Standard — $79.99
              </a>
              <a href={LINKS.ultimate} className="btn btn-gold">
                Ultimate — $99.99
              </a>
            </div>
          </div>

          {/* Backlinks / sources */}
          {post.backlinks.length > 0 && (
            <section className="mt-12">
              <h3 className="display text-2xl text-white mb-4">
                Sources &amp; further reading
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {post.backlinks.map((b) => (
                  <a
                    key={b.href}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="glass rounded-xl p-4 hover:border-neon-cyan/50 transition group"
                  >
                    <div className="text-[10px] uppercase tracking-[0.3em] text-neon-cyan">
                      {b.source}
                    </div>
                    <div className="mt-1 flex items-start gap-2 text-white group-hover:text-neon-cyan transition">
                      <span className="font-medium leading-snug">{b.label}</span>
                      <ExternalLink className="h-3.5 w-3.5 mt-1 shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="px-5 pb-24">
          <div className="container-x max-w-4xl">
            <div className="neon-divider mb-10" />
            <h3 className="display text-2xl text-white mb-6">
              Related reading
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="glass rounded-xl p-5 hover:border-neon-pink/50 transition group"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-neon-pink">
                    {r.category}
                  </div>
                  <h4 className="display text-xl text-white mt-2 group-hover:text-neon-pink transition">
                    {r.title}
                  </h4>
                  <p className="mt-2 text-sm text-white/65 line-clamp-2">
                    {r.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
