/**
 * Slug → public path of the cover art.
 *
 * v3 sources covers from Steam's library art CDN (the same portrait box-art
 * Steam shows in your library) for the 22 games on Steam, with Wikipedia
 * pageimages as fallback for non-Steam titles.
 *
 * Missing entries (Alan Wake 2, Fable, Elder Scrolls VI, RE Requiem,
 * Project 007) render as the procedural gradient + shortLabel tile.
 *
 * Regenerated from public/images/games/_manifest.json after each
 * `node scripts/download-game-covers-v3.js` run.
 */
export const covers: Record<string, string | undefined> = {
  // ── Released — Steam library art (publicly-hosted Steam CDN) ──
  'gta-v':           '/images/games/gta-v-cover.jpg',
  'rdr-2':           '/images/games/rdr-2-cover.jpg',
  'elden-ring':      '/images/games/elden-ring-cover.jpg',
  'baldurs-gate-3':  '/images/games/baldurs-gate-3-cover.jpg',
  'cyberpunk-2077':  '/images/games/cyberpunk-2077-cover.jpg',
  'hogwarts-legacy': '/images/games/hogwarts-legacy-cover.jpg',
  're4-remake':      '/images/games/re4-remake-cover.jpg',
  'diablo-iv':       '/images/games/diablo-iv-cover.jpg',
  'helldivers-2':    '/images/games/helldivers-2-cover.jpg',
  'black-myth-wukong':'/images/games/black-myth-wukong-cover.jpg',
  'ff7-rebirth':     '/images/games/ff7-rebirth-cover.jpg',
  'cod-bo6':         '/images/games/cod-bo6-cover.jpg',
  'tlou-2-remaster': '/images/games/tlou-2-remaster-cover.jpg',
  // 'alan-wake-2'    — Steam URLs 404 (Epic exclusive at launch). Gradient fallback.
  'mk1':             '/images/games/mk1-cover.jpg',
  'dragons-dogma-2': '/images/games/dragons-dogma-2-cover.jpg',
  'tekken-8':        '/images/games/tekken-8-cover.jpg',
  'ac-shadows':      '/images/games/ac-shadows-cover.jpg',
  'spider-man-2':    '/images/games/spider-man-2-cover.jpg',
  'stellar-blade':   '/images/games/stellar-blade-cover.jpg',
  'fifa':            '/images/games/fifa-cover.jpg',

  // ── Upcoming — Steam pre-purchase art where available ──
  'silksong':        '/images/games/silksong-cover.jpg',
  'subnautica-2':    '/images/games/subnautica-2-cover.jpg',

  // ── Upcoming — Wikipedia (no Steam page yet) ──
  'gta-vi':          '/images/games/gta-vi-cover.png',
  'wolverine':       '/images/games/wolverine-cover.jpg',
  'ghost-of-yotei':  '/images/games/ghost-of-yotei-cover.png',
  'metroid-prime-4': '/images/games/metroid-prime-4-cover.png',
  // 'fable'           — no Wikipedia pageimage yet
  // 'resident-evil-9' — no Wikipedia pageimage yet
  // 'elder-scrolls-vi'— no Wikipedia pageimage yet
  // 'project-007'     — no Wikipedia pageimage yet
};

export function getCover(slug: string): string | undefined {
  return covers[slug];
}
