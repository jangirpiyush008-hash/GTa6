import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/jsonld';

/**
 * /robots.txt config.
 *
 * - Allow every major bot — including the AI crawlers that source content
 *   for ChatGPT / Perplexity / Claude / Gemini answers (GEO).
 * - Point them at the dynamic sitemap.
 * - Block the internal /studio image-export endpoints — those are author tools.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/studio/api/'],
      },
      // Named allow for AI crawlers — keeps consent explicit even if user-agent: * already covers them
      { userAgent: 'GPTBot',          allow: '/' },
      { userAgent: 'OAI-SearchBot',   allow: '/' },
      { userAgent: 'ChatGPT-User',    allow: '/' },
      { userAgent: 'PerplexityBot',   allow: '/' },
      { userAgent: 'Perplexity-User', allow: '/' },
      { userAgent: 'ClaudeBot',       allow: '/' },
      { userAgent: 'Claude-Web',      allow: '/' },
      { userAgent: 'anthropic-ai',    allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot',           allow: '/' },
      { userAgent: 'Applebot',        allow: '/' },
      { userAgent: 'Applebot-Extended', allow: '/' },
      { userAgent: 'Bytespider',      allow: '/' },
      { userAgent: 'Meta-ExternalAgent', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
