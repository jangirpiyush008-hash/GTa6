/**
 * Catalog of 30 games — 20 released + 10 upcoming.
 *
 * All taglines and descriptions are original fan-site commentary, written
 * for this site. Factual fields (year, platforms, developer, publisher)
 * are public-record information.
 */

import type { CategoryId } from './categories';

export type Platform =
  | 'PS5' | 'PS4' | 'PS3'
  | 'Xbox Series' | 'Xbox One' | 'Xbox 360'
  | 'PC' | 'Switch' | 'Switch 2'
  | 'iOS' | 'Android';

export type Game = {
  id: string;            // url slug
  shortLabel: string;    // mega-nav abbreviation, e.g. "VI", "RDR II"
  title: string;
  year: number;
  releaseDate?: string;  // ISO if known, otherwise a year/window string
  platforms: Platform[];
  developer: string;
  publisher: string;
  genre: string;
  /** Original 1-line fan-site summary (my own words). */
  tagline: string;
  /** Two-sentence overview (my own words). */
  blurb: string;
  /** CSS hex color used for accents on that game's pages. */
  accent: string;
  isUpcoming: boolean;
  /** 'primary' shows in the main nav bar, 'secondary' lives in the MORE dropdown. */
  tier: 'primary' | 'secondary';
  /** Which of the 18 sub-pages have real content (vs. "Coming soon"). */
  categoriesEnabled: CategoryId[];
};

const OVERVIEW_ONLY: CategoryId[] = ['overview', 'screenshots'];
const OVERVIEW_EDITIONS: CategoryId[] = ['overview', 'editions', 'screenshots'];
const DEEP_ALL: CategoryId[] = [
  'overview', 'news', 'features', 'editions', 'screenshots', 'requirements',
  'map', 'vehicles', 'weapons', 'characters', 'animals',
  'missions', 'activities', 'properties',
  'cheats-ps5', 'cheats-xbox', 'cheats-pc',
  'artworks', 'videos', 'soundtrack',
];

/* ────────────── UPCOMING (10) ────────────── */
const upcoming: Game[] = [
  {
    id: 'gta-vi',
    shortLabel: 'VI',
    title: 'Grand Theft Auto VI',
    year: 2026,
    releaseDate: '2026-11-19',
    platforms: ['PS5', 'Xbox Series'],
    developer: 'Rockstar Games',
    publisher: 'Take-Two Interactive',
    genre: 'Open-world action',
    tagline: 'Vice City returns under modern Rockstar neon. Pre-orders live now.',
    blurb:
      'The biggest GTA in series history, set across the State of Leonida — a Florida analogue with six distinct regions. For the first time, two playable protagonists (Jason and Lucia) share the story.',
    accent: '#FF006E',
    isUpcoming: true,
    tier: 'primary',
    categoriesEnabled: DEEP_ALL,
  },
  {
    id: 'wolverine',
    shortLabel: 'WLV',
    title: "Marvel's Wolverine",
    year: 2026,
    releaseDate: '2026',
    platforms: ['PS5'],
    developer: 'Insomniac Games',
    publisher: 'Sony Interactive Entertainment',
    genre: 'Action-adventure',
    tagline: 'Insomniac takes on Logan after Spider-Man 2.',
    blurb:
      'A standalone Wolverine story from the studio behind Spider-Man and Ratchet. Expect a more brutal, R-rated tone than recent Insomniac superhero outings.',
    accent: '#fbbf24',
    isUpcoming: true,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'ghost-of-yotei',
    shortLabel: 'GoY',
    title: 'Ghost of Yotei',
    year: 2026,
    releaseDate: 'Holiday 2026',
    platforms: ['PS5'],
    developer: 'Sucker Punch Productions',
    publisher: 'Sony Interactive Entertainment',
    genre: 'Open-world action',
    tagline: 'A new ronin, a new era — Ghost of Tsushima follow-up.',
    blurb:
      'Sucker Punch returns to feudal Japan with a fresh protagonist and a new region. Same focused-katana combat philosophy that defined Tsushima.',
    accent: '#dc2626',
    isUpcoming: true,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'silksong',
    shortLabel: 'HKS',
    title: 'Hollow Knight: Silksong',
    year: 2026,
    releaseDate: '2026 (rumored)',
    platforms: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC', 'Switch'],
    developer: 'Team Cherry',
    publisher: 'Team Cherry',
    genre: 'Metroidvania',
    tagline: 'The Hornet-led sequel fans have been waiting on for half a decade.',
    blurb:
      'Hornet is the new playable protagonist exploring the kingdom of Pharloom. Day-one Game Pass confirmed; firm release date still elusive.',
    accent: '#be123c',
    isUpcoming: true,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'metroid-prime-4',
    shortLabel: 'MP4',
    title: 'Metroid Prime 4: Beyond',
    year: 2026,
    releaseDate: '2026',
    platforms: ['Switch 2'],
    developer: 'Retro Studios',
    publisher: 'Nintendo',
    genre: 'First-person action-adventure',
    tagline: 'Samus returns for the Switch 2 launch window.',
    blurb:
      'Retro Studios picks up the Prime sub-series after a long development restart. Confirmed to launch on Switch 2 in the system’s first major release wave.',
    accent: '#ea580c',
    isUpcoming: true,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'fable',
    shortLabel: 'FBL',
    title: 'Fable',
    year: 2026,
    releaseDate: '2026/2027',
    platforms: ['Xbox Series', 'PC'],
    developer: 'Playground Games',
    publisher: 'Xbox Game Studios',
    genre: 'Action RPG',
    tagline: 'Playground Games reboots the cult Lionhead franchise.',
    blurb:
      'The Forza Horizon studio takes on a wholly different kind of open world. Tone is more grounded than the original, with comedy baked in.',
    accent: '#15803d',
    isUpcoming: true,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'resident-evil-9',
    shortLabel: 'RE9',
    title: 'Resident Evil 9 / Requiem',
    year: 2027,
    releaseDate: '2027 (rumored)',
    platforms: ['PS5', 'Xbox Series', 'PC'],
    developer: 'Capcom',
    publisher: 'Capcom',
    genre: 'Survival horror',
    tagline: 'The next mainline RE after Village. Direction still under wraps.',
    blurb:
      'Capcom continues the modern RE Engine era. Expect a tonal pivot from Village’s gothic to something closer to RE7’s claustrophobic dread.',
    accent: '#7f1d1d',
    isUpcoming: true,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'elder-scrolls-vi',
    shortLabel: 'TES6',
    title: 'The Elder Scrolls VI',
    year: 2027,
    releaseDate: '2027+ (TBD)',
    platforms: ['Xbox Series', 'PC'],
    developer: 'Bethesda Game Studios',
    publisher: 'Xbox Game Studios',
    genre: 'Open-world RPG',
    tagline: 'The follow-up to Skyrim — finally creeping out of "TBD" territory.',
    blurb:
      'Confirmed in pre-production since 2018. After Starfield, the entire Bethesda team is back on TES6 — no firm date yet, but pre-launch buzz building.',
    accent: '#d97706',
    isUpcoming: true,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'subnautica-2',
    shortLabel: 'SN2',
    title: 'Subnautica 2',
    year: 2026,
    releaseDate: '2026 early access',
    platforms: ['PC', 'Xbox Series'],
    developer: 'Unknown Worlds',
    publisher: 'Krafton',
    genre: 'Survival',
    tagline: 'Return to alien oceans — this time with optional co-op.',
    blurb:
      'A new alien planet, new biomes, and the franchise’s first co-op mode. Early access on PC and Xbox first; full release later.',
    accent: '#0e7490',
    isUpcoming: true,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'project-007',
    shortLabel: '007',
    title: 'Project 007',
    year: 2027,
    releaseDate: '2027',
    platforms: ['PS5', 'Xbox Series', 'PC'],
    developer: 'IO Interactive',
    publisher: 'IO Interactive',
    genre: 'Action-adventure',
    tagline: 'A new James Bond origin story from the Hitman studio.',
    blurb:
      'IO Interactive builds an original Bond — not adapted from any film. Expect Hitman-style sandbox missions wrapped in a serialized spy story.',
    accent: '#052e16',
    isUpcoming: true,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
];

/* ────────────── RELEASED (20) ────────────── */
const released: Game[] = [
  {
    id: 'gta-v',
    shortLabel: 'V',
    title: 'Grand Theft Auto V',
    year: 2013,
    releaseDate: '2013-09-17',
    platforms: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC'],
    developer: 'Rockstar North',
    publisher: 'Rockstar Games',
    genre: 'Open-world action',
    tagline: 'Three protagonists, one Los Santos — still the best-selling game ever.',
    blurb:
      'Michael, Franklin, and Trevor reshape what a GTA campaign can do. GTA Online keeps the player base alive 12+ years on.',
    accent: '#22c55e',
    isUpcoming: false,
    tier: 'primary',
    categoriesEnabled: DEEP_ALL,
  },
  {
    id: 'rdr-2',
    shortLabel: 'RDR II',
    title: 'Red Dead Redemption 2',
    year: 2018,
    releaseDate: '2018-10-26',
    platforms: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC'],
    developer: 'Rockstar Studios',
    publisher: 'Rockstar Games',
    genre: 'Open-world western',
    tagline: 'Arthur Morgan, the Van der Linde gang, and the slow death of the Old West.',
    blurb:
      'The prequel that became Rockstar’s most cinematic project. RDR Online closed for new updates but the campaign endures as one of the medium’s great character studies.',
    accent: '#b45309',
    isUpcoming: false,
    tier: 'primary',
    categoriesEnabled: DEEP_ALL,
  },
  {
    id: 'elden-ring',
    shortLabel: 'ELDEN',
    title: 'Elden Ring',
    year: 2022,
    releaseDate: '2022-02-25',
    platforms: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC'],
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    genre: 'Action RPG',
    tagline: 'FromSoftware’s open-world Souls game with a Martin-built foundation.',
    blurb:
      'The Lands Between took GOTY 2022. The Shadow of the Erdtree expansion (2024) is treated as a full sequel by most reviewers.',
    accent: '#d4a017',
    isUpcoming: false,
    tier: 'primary',
    categoriesEnabled: [
      'overview', 'editions', 'screenshots', 'requirements', 'characters',
      'weapons', 'map', 'news', 'features', 'missions',
      'activities', 'artworks', 'videos', 'soundtrack',
    ],
  },
  {
    id: 'baldurs-gate-3',
    shortLabel: 'BG3',
    title: "Baldur's Gate 3",
    year: 2023,
    releaseDate: '2023-08-03',
    platforms: ['PS5', 'Xbox Series', 'PC'],
    developer: 'Larian Studios',
    publisher: 'Larian Studios',
    genre: 'Turn-based RPG',
    tagline: 'Larian’s 100-hour D&D 5e adventure. Game of the Year 2023.',
    blurb:
      'A turn-based RPG with movie-grade writing and zero compromises on player choice. Patch 7+ continues to add content years after launch.',
    accent: '#6b46c1',
    isUpcoming: false,
    tier: 'primary',
    categoriesEnabled: [
      'overview', 'editions', 'screenshots', 'requirements', 'characters',
      'weapons', 'map', 'news', 'features', 'missions',
      'activities', 'artworks', 'videos', 'soundtrack',
    ],
  },
  {
    id: 'cyberpunk-2077',
    shortLabel: 'CP77',
    title: 'Cyberpunk 2077',
    year: 2020,
    releaseDate: '2020-12-10',
    platforms: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC'],
    developer: 'CD Projekt Red',
    publisher: 'CD Projekt',
    genre: 'Open-world RPG',
    tagline: 'The redemption arc nobody saw coming. Phantom Liberty finished the job.',
    blurb:
      'A disastrous 2020 launch followed by years of patches culminating in the Phantom Liberty expansion. Now considered an all-time RPG.',
    accent: '#facc15',
    isUpcoming: false,
    tier: 'primary',
    categoriesEnabled: [
      'overview', 'editions', 'screenshots', 'requirements', 'characters',
      'weapons', 'vehicles', 'map', 'news', 'features',
      'missions', 'activities', 'properties', 'artworks', 'videos', 'soundtrack',
    ],
  },
  {
    id: 'hogwarts-legacy',
    shortLabel: 'HGW',
    title: 'Hogwarts Legacy',
    year: 2023,
    releaseDate: '2023-02-10',
    platforms: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC', 'Switch'],
    developer: 'Avalanche Software',
    publisher: 'Warner Bros. Games',
    genre: 'Open-world action RPG',
    tagline: 'An open-world Hogwarts in the 1890s — the wish-list game finally shipped.',
    blurb:
      'The best-selling game of 2023 by a wide margin. Built a 1800s-set Hogwarts as a fully explorable open world.',
    accent: '#7c3aed',
    isUpcoming: false,
    tier: 'primary',
    categoriesEnabled: [
      'overview', 'editions', 'screenshots', 'requirements', 'characters',
      'weapons', 'map', 'news', 'features', 'animals',
      'missions', 'activities', 'artworks', 'videos', 'soundtrack',
    ],
  },
  {
    id: 'spider-man-2',
    shortLabel: 'SPM2',
    title: "Marvel's Spider-Man 2",
    year: 2023,
    releaseDate: '2023-10-20',
    platforms: ['PS5'],
    developer: 'Insomniac Games',
    publisher: 'Sony Interactive Entertainment',
    genre: 'Action-adventure',
    tagline: 'Peter and Miles share the city. Symbiote suit included.',
    blurb:
      'Insomniac’s third Spider-Man brings the symbiote arc and dual-protagonist swing-switching. Tightest open-world traversal in the medium.',
    accent: '#dc2626',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: [
      'overview', 'editions', 'screenshots', 'requirements', 'characters',
      'weapons', 'map', 'news', 'features', 'missions',
      'activities', 'artworks', 'videos', 'soundtrack',
    ],
  },
  {
    id: 're4-remake',
    shortLabel: 'RE4',
    title: 'Resident Evil 4 Remake',
    year: 2023,
    releaseDate: '2023-03-24',
    platforms: ['PS5', 'PS4', 'Xbox Series', 'PC'],
    developer: 'Capcom',
    publisher: 'Capcom',
    genre: 'Survival horror',
    tagline: 'The remake of the 2005 classic that actually improved on perfection.',
    blurb:
      'A full ground-up rebuild with RE Engine visuals, restructured pacing, and the Separate Ways DLC bundled in for newer editions.',
    accent: '#991b1b',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'fifa',
    shortLabel: 'FC / FIFA',
    title: 'EA Sports FC / FIFA',
    year: 1993,
    releaseDate: 'Annual · FC 26 launches Sep 26, 2026',
    platforms: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC', 'Switch'],
    developer: 'EA Vancouver / EA Romania',
    publisher: 'EA Sports',
    genre: 'Football simulation',
    tagline: 'The annual football giant — FIFA → EA Sports FC, plus the 2026 World Cup tracker.',
    blurb:
      'EA Sports FC (formerly FIFA) is the world\'s best-selling sports franchise. With the 2026 FIFA World Cup mid-tournament, this hub tracks both the games + the live tournament standings.',
    accent: '#16a34a',
    isUpcoming: false,
    tier: 'primary',
    categoriesEnabled: [
      'overview', 'editions', 'screenshots', 'requirements', 'characters',
      'map', 'news', 'features', 'activities',
      'artworks', 'videos', 'soundtrack',
    ],
  },
  {
    id: 'diablo-iv',
    shortLabel: 'D4',
    title: 'Diablo IV',
    year: 2023,
    releaseDate: '2023-06-06',
    platforms: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC'],
    developer: 'Blizzard',
    publisher: 'Blizzard',
    genre: 'Action RPG',
    tagline: 'Hell is open-world. Sanctuary, served seasonally.',
    blurb:
      'Blizzard’s return-to-darkness ARPG. Vessel of Hatred expansion (Oct 2024) added the Spiritborn class and new region.',
    accent: '#7c2d12',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: [
      'overview', 'editions', 'screenshots', 'requirements', 'characters',
      'weapons', 'map', 'news', 'features', 'missions',
      'activities', 'artworks', 'videos', 'soundtrack',
    ],
  },
  {
    id: 'helldivers-2',
    shortLabel: 'HD2',
    title: 'Helldivers 2',
    year: 2024,
    releaseDate: '2024-02-08',
    platforms: ['PS5', 'PC'],
    developer: 'Arrowhead Game Studios',
    publisher: 'Sony Interactive Entertainment',
    genre: 'Co-op shooter',
    tagline: 'Spreading managed democracy — one orbital strike at a time.',
    blurb:
      'A live-service co-op shooter that broke containment in early 2024. Major Order war updates kept the player base hooked all year.',
    accent: '#ea580c',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'black-myth-wukong',
    shortLabel: 'BMW',
    title: 'Black Myth: Wukong',
    year: 2024,
    releaseDate: '2024-08-20',
    platforms: ['PS5', 'PC'],
    developer: 'Game Science',
    publisher: 'Game Science',
    genre: 'Action RPG',
    tagline: 'Journey to the West, soulslike-style. The 2024 sleeper monster.',
    blurb:
      'A Chinese studio’s debut AAA effort that sold 20M copies in weeks. Souls-adjacent combat with a folklore-deep narrative.',
    accent: '#c2410c',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'ff7-rebirth',
    shortLabel: 'FF7R',
    title: 'Final Fantasy VII Rebirth',
    year: 2024,
    releaseDate: '2024-02-29',
    platforms: ['PS5', 'PC'],
    developer: 'Square Enix',
    publisher: 'Square Enix',
    genre: 'Action RPG',
    tagline: 'Part 2 of the FF7 remake trilogy. The open-world middle act.',
    blurb:
      'The follow-up to FF7 Remake (2020) expands the world far beyond Midgar. Now on PC too as of early 2025.',
    accent: '#1e40af',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'cod-bo6',
    shortLabel: 'BO6',
    title: 'Call of Duty: Black Ops 6',
    year: 2024,
    releaseDate: '2024-10-25',
    platforms: ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'PC'],
    developer: 'Treyarch / Raven',
    publisher: 'Activision',
    genre: 'First-person shooter',
    tagline: 'The 1990s Cold War CoD. Day-one on Game Pass.',
    blurb:
      'A return to the Black Ops sub-series with omnidirectional movement and a 90s Iraq-era campaign. Day-one Xbox Game Pass title.',
    accent: '#166534',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_EDITIONS,
  },
  {
    id: 'tlou-2-remaster',
    shortLabel: 'TLOU2',
    title: 'The Last of Us Part II Remastered',
    year: 2024,
    releaseDate: '2024-01-19',
    platforms: ['PS5', 'PC'],
    developer: 'Naughty Dog',
    publisher: 'Sony Interactive Entertainment',
    genre: 'Action-adventure',
    tagline: 'Ellie and Abby, remastered — with the No Return roguelike on top.',
    blurb:
      'The 2020 PS4 hit re-released for PS5 with the new No Return mode and director commentary. PC port followed in 2025.',
    accent: '#14532d',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'alan-wake-2',
    shortLabel: 'AW2',
    title: 'Alan Wake 2',
    year: 2023,
    releaseDate: '2023-10-27',
    platforms: ['PS5', 'Xbox Series', 'PC'],
    developer: 'Remedy',
    publisher: 'Epic Games Publishing',
    genre: 'Survival horror',
    tagline: 'Remedy’s 13-year cult sequel. Best art direction of 2023.',
    blurb:
      'Two playable protagonists, dual-realm investigation, and the most stylish horror direction in years. Lake House DLC closed out the story.',
    accent: '#0891b2',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'mk1',
    shortLabel: 'MK1',
    title: 'Mortal Kombat 1',
    year: 2023,
    releaseDate: '2023-09-19',
    platforms: ['PS5', 'Xbox Series', 'PC', 'Switch'],
    developer: 'NetherRealm Studios',
    publisher: 'Warner Bros. Games',
    genre: 'Fighting',
    tagline: 'A timeline reboot with the new Kameo tag-team system.',
    blurb:
      'Liu Kang’s reset of the MK universe brings back classic characters with new origins. Khaos Reigns expansion (2024) added Conan and Ghostface as guest fighters.',
    accent: '#ca8a04',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'stellar-blade',
    shortLabel: 'STB',
    title: 'Stellar Blade',
    year: 2024,
    releaseDate: '2024-04-26',
    platforms: ['PS5', 'PC'],
    developer: 'Shift Up',
    publisher: 'Sony Interactive Entertainment',
    genre: 'Action',
    tagline: 'Korean-developed PS5 exclusive with NieR-influenced combat.',
    blurb:
      'A surprise critical hit for Sony in 2024. Combat blends parries, perfect-dodges, and beam attacks across a post-apocalyptic Earth.',
    accent: '#ec4899',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'dragons-dogma-2',
    shortLabel: 'DD2',
    title: "Dragon's Dogma 2",
    year: 2024,
    releaseDate: '2024-03-22',
    platforms: ['PS5', 'Xbox Series', 'PC'],
    developer: 'Capcom',
    publisher: 'Capcom',
    genre: 'Action RPG',
    tagline: 'Itsuno’s cult sequel — the pawn system returns.',
    blurb:
      'A direct sequel to the 2012 original. Open-world traversal, the Pawn AI companion system, and the vocation classes all carry forward.',
    accent: '#b91c1c',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'tekken-8',
    shortLabel: 'TK8',
    title: 'Tekken 8',
    year: 2024,
    releaseDate: '2024-01-26',
    platforms: ['PS5', 'Xbox Series', 'PC'],
    developer: 'Bandai Namco',
    publisher: 'Bandai Namco',
    genre: 'Fighting',
    tagline: 'The Mishima saga reaches its endgame with Heat mechanics.',
    blurb:
      'Kazuya and Jin’s feud headlines the new chapter. Heat system replaces Rage Arts as the defining 8th-gen mechanic.',
    accent: '#7e22ce',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_ONLY,
  },
  {
    id: 'ac-shadows',
    shortLabel: 'AC:S',
    title: "Assassin's Creed Shadows",
    year: 2025,
    releaseDate: '2025-03-20',
    platforms: ['PS5', 'Xbox Series', 'PC'],
    developer: 'Ubisoft Quebec',
    publisher: 'Ubisoft',
    genre: 'Open-world action',
    tagline: 'Feudal Japan, finally — with dual protagonists Naoe and Yasuke.',
    blurb:
      'Two playable leads with totally different combat styles: shinobi stealth (Naoe) and samurai melee (Yasuke). Largest AC map in years.',
    accent: '#7f1d1d',
    isUpcoming: false,
    tier: 'secondary',
    categoriesEnabled: OVERVIEW_EDITIONS,
  },
];

export const games: Game[] = [...upcoming, ...released];

export const gamesById = Object.fromEntries(
  games.map((g) => [g.id, g]),
) as Record<string, Game>;

export const primaryGames = games.filter((g) => g.tier === 'primary');
export const secondaryGames = games.filter((g) => g.tier === 'secondary');

export const upcomingGames = games.filter((g) => g.isUpcoming);
export const releasedGames = games.filter((g) => !g.isUpcoming);
