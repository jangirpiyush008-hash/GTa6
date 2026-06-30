/**
 * Aggregates news entries from every game that has a `news` content block.
 * Used by /news (full page) and components/NewsTicker (running banner).
 */

import { content as allContent } from './games-content';
import { gamesById, type Game } from './games';
import type { NewsEntry } from './games-content/types';

export type FeedItem = NewsEntry & {
  gameId: string;
  game: Game;
};

export function getAllNews(): FeedItem[] {
  const items: FeedItem[] = [];
  for (const [slug, c] of Object.entries(allContent)) {
    if (!c?.news) continue;
    const game = gamesById[slug];
    if (!game) continue;
    for (const entry of c.news.entries) {
      items.push({ ...entry, gameId: slug, game });
    }
  }
  // Newest first
  return items.sort((a, b) => b.date.localeCompare(a.date));
}

/** GTA VI launch countdown in days (whole-day floor). */
export function daysUntilGTAVI(): number {
  // Bake to a fixed-but-derived value at build time, no runtime drift.
  const launch = new Date('2026-11-19T15:00:00Z').getTime();
  const now = new Date('2026-06-29T00:00:00Z').getTime();
  return Math.max(0, Math.floor((launch - now) / 86_400_000));
}
