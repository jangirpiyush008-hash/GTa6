/**
 * Registry of deep per-game content.
 *
 * Add a new game by:
 *   1. Creating lib/games-content/<slug>.ts that default-exports GameContent
 *   2. Registering it here in `content`
 *   3. Marking the relevant categories enabled in lib/games.ts
 */

import type { GameContent } from './types';
import rdr2 from './rdr-2';
import gtaV from './gta-v';
import eldenRing from './elden-ring';
import cyberpunk2077 from './cyberpunk-2077';
import bg3 from './baldurs-gate-3';
import hogwartsLegacy from './hogwarts-legacy';
import spiderMan2 from './spider-man-2';
import diabloIv from './diablo-iv';
import fifa from './fifa';

export const content: Record<string, GameContent | undefined> = {
  'rdr-2':           rdr2,
  'gta-v':           gtaV,
  'elden-ring':      eldenRing,
  'cyberpunk-2077':  cyberpunk2077,
  'baldurs-gate-3':  bg3,
  'hogwarts-legacy': hogwartsLegacy,
  'spider-man-2':    spiderMan2,
  'diablo-iv':       diabloIv,
  'fifa':            fifa,
};

export function getGameContent(slug: string): GameContent | undefined {
  return content[slug];
}

export function hasCategoryContent(
  slug: string,
  category: keyof GameContent,
): boolean {
  return !!content[slug]?.[category];
}
