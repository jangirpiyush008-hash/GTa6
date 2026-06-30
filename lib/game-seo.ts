/**
 * Per-game SEO data: rich keyword arrays + high-intent FAQ Q&A.
 *
 * Two audiences:
 *   1. Google / Bing — the keywords[] feed `<meta name="keywords">` + appear
 *      in long-tail copy. FAQs trigger rich-result Q&A snippets.
 *   2. AI search engines (ChatGPT, Perplexity, Claude, Gemini) — the FAQ
 *      content is plain factual prose they can quote directly.
 *
 * Keywords are real high-volume queries pulled from Google Suggest patterns,
 * Steam search trends, and franchise wiki search referrers.
 */

import type { FAQ } from './jsonld';

export type GameSEO = {
  /** Override <title> — defaults to "{title} · GTAVI.GUIDE" when omitted. */
  title?: string;
  /** Override <meta description> — defaults to "{tagline} {blurb}" when omitted. */
  description?: string;
  /** keywords[] meta — 15-30 high-intent queries per game */
  keywords: string[];
  /** FAQs render in the hub page + emit FAQPage JSON-LD */
  faqs: FAQ[];
};

export const gameSEO: Record<string, GameSEO> = {
  /* ───────────── GTA VI (homepage hub) ───────────── */
  'gta-vi': {
    title:
      'GTA VI Pre-Order 2026 — Release Date, Editions, Vintage Vice City Pack · GTAVI.GUIDE',
    description:
      'GTA VI release date November 19, 2026. Pre-order Standard $79.99 or Ultimate $99.99. Vintage Vice City Pack bonus details, Leonida map preview, Jason and Lucia dual protagonists, PS5 / Xbox Series X|S confirmed, PC release window.',
    keywords: [
      'GTA 6 pre-order', 'GTA VI pre-order', 'GTA 6 release date',
      'GTA VI release date', 'GTA 6 November 19 2026', 'GTA 6 editions',
      'GTA 6 ultimate edition', 'GTA 6 price', 'GTA 6 Standard vs Ultimate',
      'Vintage Vice City Pack', 'GTA 6 bonuses', 'GTA 6 cover art',
      'Leonida map', 'Vice City 2026', 'GTA 6 Jason and Lucia',
      'GTA 6 dual protagonists', 'GTA 6 PS5', 'GTA 6 Xbox Series X',
      'GTA 6 PC release', 'GTA 6 PC release date', 'GTA Online in GTA 6',
      'GTA 6 trailer', 'GTA 6 countdown', 'GTA 6 cheats',
      'GTA 6 pre-order bonuses', 'GTA V vs GTA VI', 'Rockstar Games GTA 6',
    ],
    faqs: [
      { q: 'When does GTA 6 release?',
        a: 'GTA VI is releasing November 19, 2026 on PlayStation 5 and Xbox Series X|S. Rockstar has not announced a PC release date — based on GTA V history (PC came 1.5 years after console), expect PC in early-to-mid 2028.' },
      { q: 'How much does GTA 6 cost?',
        a: 'The Standard Edition is $79.99 USD. The Ultimate Edition is $99.99 USD and includes the Vintage Vice City Pack plus extra in-game content. A Collector\'s Edition with physical merchandise is rumoured to be $149.99 but not yet confirmed by Rockstar.' },
      { q: 'What is the Vintage Vice City Pack?',
        a: 'The Vintage Vice City Pack is a pre-order bonus exclusive to the Ultimate Edition. It includes a 1980s-styled outfit set, a classic Hermes muscle car painted in Vice City pastel colours, and access to a vintage radio station throwing back to the original Vice City era.' },
      { q: 'Who are Jason and Lucia in GTA 6?',
        a: 'Jason and Lucia are the dual protagonists of GTA VI — a Bonnie-and-Clyde-style criminal duo at the centre of the campaign. Their story arc spans the fictional state of Leonida, including a modern Vice City. You can switch between them during free-roam and certain missions.' },
      { q: 'Is GTA 6 coming to PC?',
        a: 'Yes, eventually — but not on launch day. Rockstar has stated PS5 and Xbox Series X|S are the day-one platforms (November 19, 2026). A PC release will follow, historically 1-2 years after console launch based on GTA V\'s timeline.' },
      { q: 'Will my GTA 5 / GTA Online progress carry over?',
        a: 'No. GTA VI is a fresh map, fresh characters, and a fresh online ecosystem. GTA Online will get one final major update before player counts naturally migrate to GTA VI\'s online mode.' },
    ],
  },

  /* ───────────── GTA V ───────────── */
  'gta-v': {
    title:
      'GTA V Cheats, Editions, Vehicles · Full PS5 / Xbox / PC Guide · GTAVI.GUIDE',
    description:
      'Complete GTA V cheat list across PS5, Xbox Series X|S, and PC. Story Mode and GTA Online editions, vehicles, weapons, characters, missions, map regions, and Rockstar Editor tips for the 2013 modern classic.',
    keywords: [
      'GTA 5 cheats', 'GTA V cheats', 'GTA 5 cheats PS5', 'GTA 5 cheats Xbox',
      'GTA 5 cheats PC', 'GTA 5 phone cheats', 'GTA V money cheat',
      'GTA 5 invincibility', 'GTA V wanted level cheat',
      'GTA 5 vehicle spawn cheats', 'GTA V weapons cheat',
      'GTA Online cheats', 'GTA 5 cars list', 'GTA V characters',
      'Trevor Phillips', 'Michael De Santa', 'Franklin Clinton',
      'GTA V map', 'Los Santos map', 'GTA 5 missions list',
      'GTA V Story Mode', 'GTA 5 PS5 enhanced edition', 'GTA 5 free PS Plus',
      'GTA 5 PC system requirements', 'GTA Online heists',
      'GTA 5 best cars', 'GTA V cheat codes 2026',
    ],
    faqs: [
      { q: 'What is the money cheat in GTA 5?',
        a: 'There is no money cheat in GTA V Story Mode — Rockstar deliberately excluded one. To get money fast, complete the Stock Market assassination missions with Lester (especially "The Hotel Assassination") and invest the maximum in the predicted stock between the briefing and execution.' },
      { q: 'How do you enter cheats on GTA 5 PS5?',
        a: 'Press the D-pad combination quickly during gameplay (e.g. RIGHT, X, RIGHT, LEFT, RIGHT, R1, RIGHT, LEFT, X, TRIANGLE for full health). Cheats can also be entered via the in-game phone by dialling specific 7-digit numbers (e.g. 1-999-887-853 for full ammo).' },
      { q: 'Do GTA 5 cheats work in Online?',
        a: 'No. All cheat codes are Story Mode only. Using mods or scripts in GTA Online results in account bans, money wipes, and the dreaded "cheater pool" matchmaking quarantine.' },
      { q: 'Does using cheats disable GTA 5 trophies?',
        a: 'Yes. Trophies and achievements are disabled the moment you enter a cheat in your save file. The cheat status is per-save — load an earlier save to re-enable trophies.' },
      { q: 'How big is GTA 5 on PS5 and PC?',
        a: 'PS5 Expanded & Enhanced Edition: approximately 86 GB. PC: 95-105 GB depending on language packs. The mandatory GTA Online install is the bulk of the footprint.' },
      { q: 'Is GTA V still worth playing in 2026?',
        a: 'Yes — Story Mode remains one of the best single-player open worlds ever made, and GTA Online still gets monthly content drops. With GTA VI launching November 19, 2026, the GTA V community is on a victory lap rather than declining.' },
    ],
  },

  /* ───────────── RDR 2 ───────────── */
  'rdr-2': {
    title:
      'Red Dead Redemption 2 Cheats, Characters, Map · Full Guide · GTAVI.GUIDE',
    description:
      'Complete RDR2 cheat code list with newspaper unlock requirements. Arthur Morgan, John Marston, Sadie Adler character bios. Horses, weapons, hunting animals, all 6 chapters + epilogue, the full Saint Denis to Tall Trees map.',
    keywords: [
      'Red Dead Redemption 2 cheats', 'RDR2 cheats', 'RDR2 cheat codes',
      'Red Dead 2 cheat codes', 'RDR2 newspaper cheats', 'RDR2 unlimited ammo',
      'RDR2 money cheat', 'Arthur Morgan', 'John Marston',
      'Sadie Adler', 'Dutch van der Linde', 'RDR2 characters',
      'RDR2 horses guide', 'Arabian horse RDR2', 'RDR2 best horse',
      'RDR2 legendary animals', 'Red Dead Redemption 2 map',
      'Saint Denis map', 'RDR2 chapters', 'RDR2 epilogue',
      'RDR2 weapons list', 'RDR2 missions guide', 'Red Dead Online',
      'RDR2 PC system requirements', 'RDR2 PS5', 'RDR2 60 fps',
      'Red Dead 2 honor system',
    ],
    faqs: [
      { q: 'How do you enter cheats in Red Dead Redemption 2?',
        a: 'Open the pause menu and press the cheat input button (Triangle/Y on consoles). Type the cheat phrase exactly (e.g. "Greed is now a virtue" for $500). Most cheats require unlocking a specific newspaper edition first by progressing the story to the relevant chapter.' },
      { q: 'Does RDR2 have a money cheat?',
        a: 'Yes — the cheat phrase is "Greed is now a virtue" which gives you $500. It unlocks after you reach Chapter 2 and purchase the corresponding newspaper. Note that enabling any cheat disables manual saves, autosaves, and trophy progress until you load an earlier file.' },
      { q: 'What is the best horse in RDR2?',
        a: 'The white Arabian found near Lake Isabella in the snowy north has the highest base stats (Speed 7, Stamina 6). For end-game, the Rose Grey Bay Arabian from the Blackwater stable in the epilogue offers the absolute best stats.' },
      { q: 'How long does RDR2 take to beat?',
        a: 'Main story: ~50 hours across Chapters 1-6 plus the Epilogue. Main story plus side content: ~80 hours. 100% completionist run with all challenges, animals, and treasures: 175+ hours.' },
      { q: 'Is RDR2 coming to PS5 / Xbox Series with native 60 fps?',
        a: 'Rockstar has not released a native PS5 / Xbox Series upgrade. The backwards-compatible version of the PS4 edition runs at 30 fps on PS5. A current-gen patch is rumoured to ship alongside or after GTA VI in 2026-2027.' },
      { q: 'Will using cheats disable trophies in RDR2?',
        a: 'Yes. Activating any cheat disables saves, autosaves, and trophy progress for that playthrough. To re-enable, load a save from before you ever enabled cheats.' },
    ],
  },

  /* ───────────── FIFA / EA Sports FC 26 ───────────── */
  'fifa': {
    title:
      'EA Sports FC 26 + FIFA World Cup 2026 — Live Scores, Editions · GTAVI.GUIDE',
    description:
      'EA Sports FC 26 release date Sep 26, 2026. Standard $69.99 / Ultimate $99.99. Cover stars Jude Bellingham + Lamine Yamal. Live 2026 FIFA World Cup standings: 48 teams across USA + Canada + Mexico, June 11 – July 19. Career Mode, Ultimate Team, Rush 5v5, FC IQ tactics.',
    keywords: [
      'EA Sports FC 26', 'FC 26', 'FIFA 26', 'FC 26 release date',
      'FC 26 Ultimate Edition', 'FC 26 cover star', 'Jude Bellingham FC 26',
      'Lamine Yamal FC 26', 'EA Sports FC 26 PS5', 'FC 26 Xbox Series',
      'FC 26 PC requirements', 'FC 26 Switch 2', 'FC 26 price',
      'FIFA World Cup 2026', 'World Cup 2026 live scores',
      'World Cup 2026 standings', 'World Cup 2026 schedule',
      '48 team World Cup', 'World Cup USA Canada Mexico',
      'World Cup MetLife final', 'World Cup 2026 dates',
      'EA Sports FC vs FIFA', 'FC 25 vs FC 26',
      'Career Mode FC 26', 'Ultimate Team FC 26', 'Rush 5v5',
      'FC IQ tactics', 'Pro Clubs FC 26',
    ],
    faqs: [
      { q: 'When does EA Sports FC 26 release?',
        a: 'EA Sports FC 26 releases September 26, 2026 globally on PS5, PS4, Xbox Series X|S, Xbox One, PC, and Nintendo Switch 2. Ultimate Edition buyers get 7 days early access from September 19.' },
      { q: 'How much is EA Sports FC 26?',
        a: 'Standard Edition: $69.99 USD. Ultimate Edition: $99.99 USD (includes 4,600 FC Points, 7-day early access, dual-entitlement for next-gen upgrade, and FUT Heroes player items).' },
      { q: 'Who is on the EA Sports FC 26 cover?',
        a: 'Standard Edition: Jude Bellingham (Real Madrid, England). Ultimate Edition: Jude Bellingham + Lamine Yamal (FC Barcelona, Spain) as the dual-cover.' },
      { q: 'When is the 2026 FIFA World Cup?',
        a: 'The 2026 FIFA World Cup runs June 11 to July 19, 2026 — the first tournament with 48 teams. Hosted across the United States, Canada, and Mexico, with the final played at MetLife Stadium in New Jersey.' },
      { q: 'How many teams are in the 2026 World Cup?',
        a: '48 teams — a 50% increase from the 32-team format used since 1998. They are split into 12 groups of 4. The top two teams from each group plus the eight best third-placed teams advance to a 32-team Round of 32 knockout stage.' },
      { q: 'How can I watch live World Cup 2026 scores on GTAVI.GUIDE?',
        a: 'The bottom-left widget shows live scores on every page, plus a top-of-page ticker bar runs through today\'s matches once you dismiss the welcome popup. Full group standings at /fifa/worldcup — refreshes every 5 minutes from the ESPN public API.' },
    ],
  },

  /* ───────────── Elden Ring ───────────── */
  'elden-ring': {
    title:
      'Elden Ring Guide — Classes, Bosses, Builds, Shadow of Erdtree · GTAVI.GUIDE',
    description:
      'Elden Ring full guide: all 10 starting classes, every legacy dungeon boss, weapon scaling, Shadow of Erdtree DLC walkthrough, Tarnished builds. Open-world FromSoft GOTY 2022 — still essential in 2026.',
    keywords: [
      'Elden Ring guide', 'Elden Ring classes', 'Elden Ring best class',
      'Elden Ring bosses', 'Elden Ring boss list', 'Malenia Elden Ring',
      'Radagon Elden Ring', 'Elden Ring Shadow of Erdtree',
      'Shadow of Erdtree walkthrough', 'Elden Ring DLC',
      'Elden Ring weapons', 'best Elden Ring weapons',
      'Elden Ring builds', 'Elden Ring str build', 'Elden Ring int build',
      'Elden Ring runes farming', 'Elden Ring map',
      'Limgrave', 'Liurnia', 'Caelid', 'Altus Plateau',
      'Elden Ring multiplayer', 'Elden Ring PS5', 'Elden Ring PC',
      'Elden Ring system requirements',
    ],
    faqs: [
      { q: 'What is the best starting class in Elden Ring?',
        a: 'For first-time Souls players: Vagabond (high HP, balanced melee). For mage builds: Astrologer (lowest INT requirement on Glintstone Pebble). For dexterity / quality builds: Samurai (Uchigatana from start, ranged Longbow). The class only affects your first 5-10 hours — by mid-game stat re-spec via Larval Tears lets you build anything.' },
      { q: 'Is Shadow of Erdtree worth buying?',
        a: 'Yes — it\'s a 30-40 hour expansion the size of a full Dark Souls game. New region (the Land of Shadow), 10+ new bosses including Messmer and Promised Consort Radahn, 100+ new weapons, and the Scadutree Fragment power system that gates difficulty.' },
      { q: 'How do I beat Malenia, Blade of Miquella?',
        a: 'Malenia in Elphael is the hardest boss in the base game. Strategy: stay close to bait short combos, use Bloodhound\'s Step or a shield with high stability to evade Waterfowl Dance, summon Mimic Tear or Tiche, level Vigor to at least 50, use Bleed weapons like Rivers of Blood or Uchigatana with Seppuku Ash of War.' },
      { q: 'What are the Elden Ring PC system requirements?',
        a: 'Minimum: Intel i5-8400 / Ryzen 3 3300X, 12 GB RAM, GTX 1060 3GB / RX 580 4GB, 60 GB storage. Recommended: i7-8700K / Ryzen 5 3600X, 16 GB RAM, GTX 1070 8GB / RX Vega 56 8GB. Runs fine on Steam Deck (Verified).' },
      { q: 'How long is Elden Ring?',
        a: 'Main story rush: 55 hours. Main story plus a normal amount of exploration: 100 hours. Completionist with all bosses and legacy dungeons: 130+ hours. Add 30-40 hours for the Shadow of Erdtree DLC.' },
    ],
  },

  /* ───────────── Cyberpunk 2077 ───────────── */
  'cyberpunk-2077': {
    title:
      'Cyberpunk 2077 Guide — Builds, Phantom Liberty, Romances · GTAVI.GUIDE',
    description:
      'Cyberpunk 2077 + Phantom Liberty complete guide. V builds (netrunner, solo, tech), all romance options, Dogtown walkthrough, endings, weapons, vehicles, system requirements. The redemption arc that became 2024 GOTY material.',
    keywords: [
      'Cyberpunk 2077 guide', 'Cyberpunk 2077 builds',
      'Cyberpunk 2077 best build', 'CP2077 netrunner build',
      'Cyberpunk 2077 Phantom Liberty', 'Phantom Liberty walkthrough',
      'Cyberpunk 2077 endings', 'Cyberpunk 2077 secret ending',
      'Cyberpunk 2077 romance', 'Panam romance', 'Judy romance',
      'River Ward romance', 'Kerry Eurodyne romance',
      'Cyberpunk 2077 PC requirements', 'Cyberpunk 2077 path tracing',
      'Cyberpunk 2077 PS5', 'Cyberpunk 2077 Xbox',
      'Cyberpunk 2.0 update', 'Cyberpunk 2077 patch 2.2',
      'Night City map', 'Dogtown Cyberpunk',
      'Johnny Silverhand', 'V Cyberpunk',
    ],
    faqs: [
      { q: 'Is Cyberpunk 2077 good now in 2026?',
        a: 'Yes — the 2.0 update and Phantom Liberty DLC (Sep 2023) completely rebuilt the game\'s perks, AI, police system, and cyberware. It now sits at "Mostly Positive" on Steam recent reviews and is regularly cited as a comeback story alongside No Man\'s Sky and Final Fantasy XIV.' },
      { q: 'What is the best build in Cyberpunk 2077?',
        a: 'Netrunner (Intelligence + Cool) for stealth quickhack one-shots. Solo (Body + Reflexes) for shotgun + Sandevistan time-dilation combat. Tech weapons (Technical Ability) for ricochet revolvers and the Errata pistol. Stealth Katana (Reflexes + Cool) is the strongest dps build post-Phantom Liberty.' },
      { q: 'Is Phantom Liberty worth it?',
        a: 'Yes — Phantom Liberty adds the Dogtown district, the Idris Elba storyline, 20-30 hours of new content, a relic-tree perk system, vehicle missile combat, and a secret 4th ending for the base game. Considered one of the best expansions of the 2020s.' },
      { q: 'What are all the Cyberpunk 2077 endings?',
        a: 'Base game: 5 endings (Arasaka / Nomad / Rogue / The Sun secret / Don\'t Fear the Reaper solo). Phantom Liberty adds a 6th canonical ending via the Songbird arc that fundamentally changes V\'s fate.' },
      { q: 'Cyberpunk 2077 PC ray tracing requirements?',
        a: 'Path Tracing (Overdrive mode) requires RTX 4070 minimum at 1080p with DLSS Performance + Frame Generation. RTX 4090 hits 4K with DLSS Quality + FG. Standard RT Ultra runs comfortably on RTX 3070 at 1440p with DLSS Quality.' },
    ],
  },

  /* ───────────── Baldur's Gate 3 ───────────── */
  'baldurs-gate-3': {
    title:
      'Baldur\'s Gate 3 Guide — Classes, Companions, Romance · GTAVI.GUIDE',
    description:
      'Baldur\'s Gate 3 complete guide: all 12 classes, every origin companion (Shadowheart, Astarion, Lae\'zel, Karlach, Gale, Wyll), full romance walkthroughs, multiplayer co-op, Act 3 endings. Larian\'s 2023 GOTY.',
    keywords: [
      'Baldur\'s Gate 3 guide', 'BG3 classes', 'BG3 best class',
      'BG3 romance', 'Shadowheart romance', 'Astarion romance',
      'Karlach romance', 'BG3 companions', 'BG3 origin characters',
      'BG3 multiplayer', 'BG3 co-op', 'BG3 endings',
      'BG3 Honor Mode', 'BG3 Tactician', 'BG3 builds',
      'BG3 PC requirements', 'BG3 PS5', 'BG3 Xbox Series',
      'BG3 patch 7', 'BG3 Dark Urge',
      'BG3 Act 3 walkthrough', 'BG3 mod support',
    ],
    faqs: [
      { q: 'What is the best class for new players in BG3?',
        a: 'Fighter (especially Eldritch Knight subclass) is the most forgiving — high HP, simple turn-by-turn action economy, and martial weapons cover any fight. For magic-curious players, Sorcerer (Draconic Bloodline) offers powerful spells with minimal decision paralysis.' },
      { q: 'Can you romance everyone in Baldur\'s Gate 3?',
        a: 'You can romance Shadowheart, Astarion, Lae\'zel, Karlach, Gale, Wyll, Halsin, and Minthara. Each romance has approval gates and pivotal Act 2 / Act 3 commitment scenes. Multiple romances at once trigger jealousy in Act 2 — you have to choose.' },
      { q: 'Does BG3 have multiplayer co-op?',
        a: 'Yes — full 4-player drop-in / drop-out co-op across the entire campaign, both online and split-screen on PS5. Each player controls one character; combat is turn-based so latency doesn\'t matter.' },
      { q: 'How long is Baldur\'s Gate 3?',
        a: '75-100 hours for the main story with thorough exploration. Honor Mode (one-life-only difficulty) typically takes experienced players 60-70 hours. Completionist runs with all companion quests and endings: 130+ hours.' },
      { q: 'What are the BG3 PC system requirements?',
        a: 'Minimum: Intel i5-4690 / Ryzen 5 1500X, 8 GB RAM, GTX 970 / RX 480, 150 GB SSD. Recommended: i7-8700K / Ryzen 5 3600, 16 GB RAM, RTX 2060 Super / RX 5700 XT, 150 GB NVMe SSD. Act 3 in Baldur\'s Gate city is the FPS bottleneck.' },
    ],
  },

  /* ───────────── Hogwarts Legacy ───────────── */
  'hogwarts-legacy': {
    title:
      'Hogwarts Legacy Guide — Houses, Spells, Side Quests · GTAVI.GUIDE',
    description:
      'Hogwarts Legacy walkthrough: choose your House (Gryffindor / Slytherin / Ravenclaw / Hufflepuff), all spells and combat combos, Room of Requirement guide, Hogsmeade map, post-launch content. The 2023 wizarding RPG.',
    keywords: [
      'Hogwarts Legacy guide', 'Hogwarts Legacy houses',
      'Hogwarts Legacy spells', 'Hogwarts Legacy walkthrough',
      'best house Hogwarts Legacy', 'Slytherin exclusive quest',
      'Hogwarts Legacy Room of Requirement', 'Hogwarts Legacy PS5',
      'Hogwarts Legacy Xbox', 'Hogwarts Legacy Switch',
      'Hogwarts Legacy PC requirements', 'Hogwarts Legacy length',
      'Hogwarts Legacy endings', 'Hogwarts Legacy character creator',
      'Hogwarts Legacy companion missions', 'Hogwarts Legacy Mac',
      'Hogwarts Legacy 2',
    ],
    faqs: [
      { q: 'What is the best house in Hogwarts Legacy?',
        a: 'Slytherin has a unique exclusive quest with Sebastian Sallow. Hufflepuff has a unique Azkaban quest. Ravenclaw and Gryffindor each have one unique quest but slightly less impactful. Slytherin is generally considered the most content-rich choice for a single playthrough.' },
      { q: 'How long is Hogwarts Legacy?',
        a: 'Main story: 25-30 hours. Main story plus side quests: 45-60 hours. 100% completionist with all collectibles, House quest, and Field Guide pages: 75-90 hours.' },
      { q: 'Are there spells like Avada Kedavra in Hogwarts Legacy?',
        a: 'Yes — the three Unforgivable Curses (Avada Kedavra, Crucio, Imperio) are unlockable via Sebastian Sallow\'s relationship questline. They have no morality penalty in the campaign, despite the dark plot framing.' },
      { q: 'Is Hogwarts Legacy on Switch worth it?',
        a: 'The Switch version is heavily downgraded — 720p docked / 540p handheld with major texture pop-in and reduced draw distance. Playable if Switch is your only platform; not recommended if you have PS5 / Xbox Series / PC alternatives.' },
      { q: 'Is there a Hogwarts Legacy 2?',
        a: 'Avalanche Software has confirmed a sequel is in development, expected 2026-2027. WB Games is positioning it as a tentpole release alongside its Harry Potter HBO TV series in 2026.' },
    ],
  },

  /* ───────────── Spider-Man 2 ───────────── */
  'spider-man-2': {
    title:
      'Marvel\'s Spider-Man 2 — Suits, Symbiote, Venom Boss · GTAVI.GUIDE',
    description:
      'Marvel\'s Spider-Man 2 walkthrough: every suit unlock for Peter and Miles, Symbiote skill tree, Kraven the Hunter boss strategy, Venom finale, New Game Plus, PS5 Pro patch. The 2023 PlayStation exclusive.',
    keywords: [
      'Spider-Man 2 suits', 'Spider-Man 2 walkthrough',
      'Spider-Man 2 Venom', 'Spider-Man 2 ending',
      'Spider-Man 2 Kraven boss', 'Spider-Man 2 Symbiote',
      'Spider-Man 2 New Game Plus', 'Spider-Man 2 PS5 Pro',
      'Spider-Man 2 length', 'Spider-Man 2 PC release',
      'Miles Morales Spider-Man 2', 'Peter Parker Spider-Man 2',
      'Spider-Man 3 release', 'Spider-Man 2 trophy guide',
      'Spider-Man 2 best suit', 'Spider-Man 2 platinum',
    ],
    faqs: [
      { q: 'How long is Spider-Man 2?',
        a: 'Main story: 18-22 hours. Main plus side missions: 30-35 hours. 100% Platinum trophy: 40-45 hours.' },
      { q: 'When is Spider-Man 2 coming to PC?',
        a: 'Marvel\'s Spider-Man 2 launched on PC January 30, 2025 via Steam and Epic Games Store, including DLSS 3.5, ray tracing, and ultrawide support.' },
      { q: 'How do you switch between Peter and Miles?',
        a: 'In free-roam, hold the touchpad / select button to instantly swap. During scripted missions, the game forces the appropriate hero. Both share Symbiote upgrades but have separate suit galleries.' },
      { q: 'Is there a Spider-Man 3?',
        a: 'Insomniac has confirmed Marvel\'s Spider-Man 3 is in development, targeted for 2027-2028. Wolverine (separate Insomniac game) is expected first in late 2026.' },
      { q: 'Spider-Man 2 PS5 Pro enhancements?',
        a: 'PS5 Pro patch (Nov 2024) adds 4K 60 fps in Performance Mode (was 1440p), PSSR upscaling, and full ray-traced reflections at 60 fps (previously 30 fps Quality Mode only).' },
    ],
  },

  /* ───────────── Diablo IV ───────────── */
  'diablo-iv': {
    title:
      'Diablo IV — Classes, Builds, Vessel of Hatred · GTAVI.GUIDE',
    description:
      'Diablo IV complete guide: 6 classes (Barbarian, Druid, Necromancer, Rogue, Sorcerer, Spiritborn), Vessel of Hatred expansion, Helltides, Nightmare Dungeons, Pit endgame, season meta builds.',
    keywords: [
      'Diablo IV', 'Diablo 4 classes', 'Diablo 4 best class',
      'Diablo 4 Spiritborn', 'Diablo 4 Vessel of Hatred',
      'Diablo IV builds', 'Diablo 4 leveling guide',
      'Diablo 4 endgame', 'Pit Diablo 4',
      'Diablo 4 season', 'Diablo 4 PS5', 'Diablo 4 Xbox Game Pass',
      'Diablo IV Necromancer build', 'Diablo IV Sorcerer build',
      'Diablo 4 Lilith', 'Diablo 4 Mephisto',
    ],
    faqs: [
      { q: 'What is the best class in Diablo IV?',
        a: 'Current meta (Season 7): Spiritborn for clear speed and Pit pushing, Sorcerer for variety builds, Barbarian for survivability. Class balance shifts per season — Spiritborn was nerfed twice but remains S-tier through early 2026.' },
      { q: 'Is Diablo IV on Game Pass?',
        a: 'Yes — Diablo IV joined Xbox Game Pass in March 2024 and remains available on PC Game Pass and Console Game Pass Ultimate. The Vessel of Hatred expansion is a separate purchase.' },
      { q: 'Is Vessel of Hatred worth buying?',
        a: 'Yes — VoH adds the Spiritborn class, the Nahantu jungle region, the Dark Citadel cooperative raid, Mercenaries system, and ~40 hours of new campaign. $39.99 standalone or $89.99 bundled with the base game.' },
      { q: 'Diablo IV always online?',
        a: 'Yes — Diablo IV requires a persistent internet connection on all platforms (PS5, Xbox, PC). No offline mode exists. Seasonal content is gated behind the online requirement.' },
    ],
  },

  /* ───────────── RE4 Remake ───────────── */
  're4-remake': {
    title:
      'Resident Evil 4 Remake Guide — Weapons, Mercenaries, Separate Ways · GTAVI.GUIDE',
    description:
      'Resident Evil 4 Remake complete walkthrough: 16 chapters, all weapons + upgrades, Merchant request list, Mercenaries mode, Separate Ways DLC (Ada Wong). PS5 / PS4 / Xbox Series / PC / iOS.',
    keywords: [
      'Resident Evil 4 Remake', 'RE4 Remake walkthrough',
      'RE4 Remake weapons', 'RE4 Remake Mercenaries',
      'RE4 Remake Separate Ways', 'RE4 Ada Wong DLC',
      'RE4 Remake Professional', 'RE4 Remake S+ rank',
      'RE4 Remake handcannon', 'RE4 Remake charms',
      'RE4 Remake Gold Edition', 'RE4 Remake PS5 Pro',
      'RE4 Remake iPhone', 'RE4 Remake Mac',
      'RE4 Remake length', 'RE4 Remake difficulty',
    ],
    faqs: [
      { q: 'How long is Resident Evil 4 Remake?',
        a: 'Main story: 14-17 hours. Main plus Separate Ways DLC: 22-25 hours. Completionist with all charms, treasures, requests, and S+ unlocks: 40+ hours.' },
      { q: 'Is the Separate Ways DLC worth it?',
        a: 'Yes — Ada Wong\'s parallel campaign adds 6-7 hours of content with a grappling hook traversal mechanic, new boss encounters, and a different perspective on the main story. Bundled with the Gold Edition or $9.99 standalone.' },
      { q: 'How do you unlock the Handcannon in RE4 Remake?',
        a: 'Reach S+ rank on Professional difficulty (no New Game+ items, under 5.5 hours). It\'s the hardest unlock in the game and grants an infinite-ammo magnum for future playthroughs.' },
      { q: 'Can you play RE4 Remake on iPhone?',
        a: 'Yes — Resident Evil 4 Remake launched natively on iPhone 15 Pro / 15 Pro Max / iPad with M-series chips and Mac with Apple Silicon in December 2023. First AAA Capcom title on Apple Silicon.' },
    ],
  },

  /* ───────────── Helldivers 2 ───────────── */
  'helldivers-2': {
    title:
      'Helldivers 2 — Stratagems, Warbonds, Major Orders · GTAVI.GUIDE',
    description:
      'Helldivers 2 complete guide: every Stratagem (Eagles, Orbital, Support Weapons), all Warbond Battle Pass weapons, Major Order war timeline, Terminid + Automaton + Illuminate enemy guide. PS5 + PC.',
    keywords: [
      'Helldivers 2', 'Helldivers 2 guide', 'Helldivers 2 Stratagems',
      'Helldivers 2 best weapons', 'Helldivers 2 Warbonds',
      'Helldivers 2 Major Orders', 'Helldivers 2 Illuminate',
      'Helldivers 2 Automatons', 'Helldivers 2 Terminids',
      'Helldivers 2 PS5', 'Helldivers 2 PC', 'Helldivers 2 cross-play',
      'Helldivers 2 difficulty 10', 'Helldivers 2 Quasar Cannon',
      'Helldivers 2 Eagle 500kg', 'Helldivers 2 Killzone collab',
    ],
    faqs: [
      { q: 'What is the best Stratagem loadout in Helldivers 2?',
        a: 'Anti-Bug (Terminid): Quasar Cannon + Eagle 500kg + Orbital Railcannon + 380mm Barrage. Anti-Bot (Automaton): Autocannon + Eagle Airstrike + Orbital Laser + Shield Generator Pack. Anti-Squid (Illuminate): Arc Thrower + Eagle Cluster + Orbital Gas + Stun Grenade.' },
      { q: 'Is Helldivers 2 cross-play?',
        a: 'Yes — PS5 ↔ PC cross-play has been live since launch (Feb 2024). Cross-progression between platforms added June 2024 via PSN account link.' },
      { q: 'When did Illuminate return to Helldivers 2?',
        a: 'The Illuminate (the third faction from Helldivers 1) returned December 12, 2024 in the Omens of Tyranny update. New units: Voteless zombies, Overseers, and Harvester tripods.' },
      { q: 'Do Warbonds expire in Helldivers 2?',
        a: 'No — Warbond Battle Passes never expire. Buy whenever, grind at your own pace. Each costs ~1,000 Super Credits ($10) and stays unlockable forever.' },
    ],
  },

  /* ───────────── Black Myth Wukong ───────────── */
  'black-myth-wukong': {
    title:
      'Black Myth Wukong — Bosses, Transformations, True Ending · GTAVI.GUIDE',
    description:
      'Black Myth Wukong walkthrough: all 6 chapters, every boss in the 81 tribulations, staff stances, 72 Transformations, secret bosses for the true ending, NG+ guide. Game Science\'s 2024 GOTY-direction winner.',
    keywords: [
      'Black Myth Wukong', 'Black Myth Wukong walkthrough',
      'Black Myth Wukong bosses', 'Black Myth Wukong true ending',
      'Black Myth Wukong transformations', 'Black Myth Wukong NG+',
      'Black Myth Wukong staff stances', 'Black Myth Wukong Macaque',
      'Black Myth Wukong Yellowbrow', 'Black Myth Wukong Yellow Wind Sage',
      'Black Myth Wukong PS5 Pro', 'Black Myth Wukong Xbox',
      'Black Myth Wukong PC requirements', 'Black Myth Wukong length',
      'Black Myth Wukong secret bosses', 'Journey to the West game',
    ],
    faqs: [
      { q: 'How do you get the true ending in Black Myth Wukong?',
        a: 'Defeat all six secret bosses (one hidden per chapter) before the final boss. This unlocks the Hidden Chapter — the New Thunderclap Sky Realm — where you face the true final boss instead of the standard ending.' },
      { q: 'How long is Black Myth Wukong?',
        a: 'Main story: 30-35 hours. Main story plus all secret bosses for true ending: 50-60 hours. 100% completionist (all 81 tribulation encounters + NG+): 80+ hours.' },
      { q: 'Is Black Myth Wukong on Xbox?',
        a: 'Not yet as of early 2026. Game Science cited the Series S memory budget as the delay reason. Indefinite delay; no firm release window announced.' },
      { q: 'What are the staff stances in Black Myth Wukong?',
        a: 'Smash (overhead crushing arc, high damage, slow). Pillar (vertical pole spin, charges to pole-vault). Thrust (long-range spear poke with parry counter window). Each stance has unique combos and finishers.' },
    ],
  },
};

export function getGameSEO(slug: string): GameSEO | undefined {
  return gameSEO[slug];
}
