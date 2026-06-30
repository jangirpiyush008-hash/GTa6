import type { MetadataRoute } from 'next';
import { games } from '@/lib/games';
import { categories } from '@/lib/categories';
import { posts } from '@/lib/blog';
import { SITE_URL } from '@/lib/jsonld';

/**
 * Dynamic sitemap.xml at /sitemap.xml.
 *
 * Covers:
 *   /                                  (homepage — GTA VI hub)
 *   /games                             (catalog index)
 *   /games/{slug}                      (×30 game hubs)
 *   /games/{slug}/{category}           (only for enabled categories — gated by categoriesEnabled)
 *   /fifa/worldcup                     (live tournament tracker)
 *   /news                              (news aggregator)
 *   /blog + /blog/{slug}               (×10 blog posts)
 *   /studio + /studio/{id}             (IG card studio)
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const lastModFresh = now.toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: lastModFresh, changeFrequency: 'daily',  priority: 1.0 },
    { url: `${SITE_URL}/games`,         lastModified: lastModFresh, changeFrequency: 'daily',  priority: 0.95 },
    { url: `${SITE_URL}/fifa/worldcup`, lastModified: lastModFresh, changeFrequency: 'hourly', priority: 0.95 },
    { url: `${SITE_URL}/news`,          lastModified: lastModFresh, changeFrequency: 'daily',  priority: 0.85 },
    { url: `${SITE_URL}/blog`,          lastModified: lastModFresh, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE_URL}/studio`,        lastModified: lastModFresh, changeFrequency: 'weekly', priority: 0.5 },
  ];

  const gamePages: MetadataRoute.Sitemap = games.map((g) => ({
    url: `${SITE_URL}/games/${g.id}`,
    lastModified: lastModFresh,
    changeFrequency: g.isUpcoming ? 'weekly' : 'monthly',
    priority: g.id === 'gta-vi' || g.id === 'fifa' ? 0.95 : g.tier === 'primary' ? 0.85 : 0.7,
  }));

  const categoryPages: MetadataRoute.Sitemap = games.flatMap((g) =>
    categories
      .filter((c) => g.categoriesEnabled.includes(c.id))
      .map((c) => ({
        url: `${SITE_URL}/games/${g.id}/${c.id}`,
        lastModified: lastModFresh,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })),
  );

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...gamePages, ...categoryPages, ...blogPages];
}
