/**
 * JSON-LD schema generators.
 *
 * Goals: maximise Google rich results AND give AI search engines (ChatGPT,
 * Perplexity, Claude, Gemini) clean structured facts to surface.
 *
 * Every generator returns a plain JS object — wrap with
 * <script type="application/ld+json">{JSON.stringify(...)}</script> in pages.
 */

import { games, gamesById } from './games';

export const SITE_URL = 'https://gtavi.guide';
export const SITE_NAME = 'GTAVI.GUIDE';

/* ─────────────── Organization (publisher entity) ─────────────── */
export function organizationLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/gta/screenshot-1.jpg`,
    description:
      'Pre-order guide, cheat code library, and live World Cup tracker covering GTA VI, GTA V, RDR 2, FIFA / EA Sports FC, Elden Ring, and 25+ other releases.',
    sameAs: [
      'https://github.com/jangirpiyush008-hash/GTa6',
    ],
  };
}

/* ─────────────── WebSite (sitelinks search box) ─────────────── */
export function websiteLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/games?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/* ─────────────── VideoGame (per-game hub) ─────────────── */
export function videoGameLd(slug: string) {
  const g = gamesById[slug];
  if (!g) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoGame',
    name: g.title,
    alternateName: g.shortLabel,
    url: `${SITE_URL}/games/${g.id}`,
    description: `${g.tagline} ${g.blurb}`,
    image: `${SITE_URL}${coverPathFor(g.id) ?? '/images/games/gta-vi-cover.png'}`,
    gamePlatform: g.platforms,
    genre: g.genre,
    publisher: { '@type': 'Organization', name: g.publisher },
    author: { '@type': 'Organization', name: g.developer },
    datePublished: g.releaseDate,
    inLanguage: 'en',
  };
}

/** Quickly resolve a cover path without circular-importing game-covers. */
function coverPathFor(slug: string): string | undefined {
  // Public folder paths follow the pattern we use in lib/game-covers.ts.
  // Most games are .jpg; GTA VI / ghost-of-yotei / metroid use .png.
  if (slug === 'gta-vi') return '/images/games/gta-vi-cover.png';
  if (slug === 'ghost-of-yotei') return '/images/games/ghost-of-yotei-cover.png';
  if (slug === 'metroid-prime-4') return '/images/games/metroid-prime-4-cover.png';
  return `/images/games/${slug}-cover.jpg`;
}

/* ─────────────── FAQPage (rich snippets + AI Q&A) ─────────────── */
export type FAQ = { q: string; a: string };

export function faqLd(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/* ─────────────── BreadcrumbList ─────────────── */
export type Crumb = { name: string; href: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href}`,
    })),
  };
}

/* ─────────────── Article (blog posts) ─────────────── */
export function articleLd(opts: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  authorName?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}/blog/${opts.slug}`,
    image: opts.image ? `${SITE_URL}${opts.image}` : `${SITE_URL}/images/gta/screenshot-1.jpg`,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    author: { '@type': 'Organization', name: opts.authorName ?? SITE_NAME },
    publisher: organizationLd(),
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${opts.slug}` },
  };
}

/* ─────────────── Event (2026 FIFA World Cup) ─────────────── */
export function worldCupEventLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: '2026 FIFA World Cup',
    description:
      'The 23rd FIFA World Cup — the first 48-team tournament, co-hosted across the United States, Canada and Mexico. June 11 – July 19, 2026.',
    startDate: '2026-06-11',
    endDate: '2026-07-19',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/MixedEventAttendanceMode',
    url: `${SITE_URL}/fifa/worldcup`,
    location: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'Canada' },
      { '@type': 'Country', name: 'Mexico' },
    ],
    organizer: { '@type': 'Organization', name: 'FIFA', url: 'https://www.fifa.com' },
  };
}

/* ─────────────── ItemList (games catalog index) ─────────────── */
export function gamesItemListLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Game catalog — GTAVI.GUIDE',
    numberOfItems: games.length,
    itemListElement: games.map((g, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE_URL}/games/${g.id}`,
      name: g.title,
    })),
  };
}

/* ─────────────── Helper — inline script tag ─────────────── */
export function jsonLdScript(obj: unknown): string {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}
