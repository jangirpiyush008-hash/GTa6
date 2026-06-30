/**
 * Deep content for Black Myth: Wukong (Game Science, 2024).
 * Factual public data + original commentary.
 *
 * Skipped categories: vehicles, animals, properties, activities, cheats —
 * Game Science's debut AAA is a focused linear-soulslike with no open
 * world or cheat system.
 */

import type { GameContent } from './types';

const content: GameContent = {
  overview: {
    intro:
      'Black Myth: Wukong is Chinese studio Game Science\'s debut AAA action-RPG, launched August 20, 2024 on PS5 and PC (Xbox version still pending due to memory-budget issues with Series S as of early 2026). It sold ~20M copies inside two weeks and won The Game Award for Best Game Direction. The game adapts the Tang-dynasty novel "Journey to the West" through a souls-adjacent combat system with a deep transformation mechanic.',
  },

  editions: {
    intro:
      'Two SKUs at launch · Standard and Deluxe. A "Master\'s Edition" physical bundle is sold by Game Science\'s store only.',
    tiers: [
      {
        name: 'Standard Edition',
        priceUSD: 59.99,
        bullets: [
          'Full 6-chapter campaign · ~40 hours',
          'All 81 boss encounters (the canonical 81 tribulations)',
          'PS5 + PC (Steam · Epic · WeGame) cross-buy is per-store',
          'Discounted to $39.99 in Lunar New Year + Summer Steam sales',
        ],
      },
      {
        name: 'Deluxe Edition',
        priceUSD: 69.99,
        recommended: true,
        bullets: [
          'Standard + Bronze "Cloud Patterned" Stick (cosmetic staff skin)',
          'Folded Armor of Storms (cosmetic armour set)',
          'Wind Resting Bell (utility accessory · auto-pickup radius)',
          'Original Soundtrack (digital · 56 tracks)',
          'Digital art book (PDF · 100+ pages)',
        ],
      },
      {
        name: "Master's / Collector's Edition (China-only)",
        priceUSD: 269,
        bullets: [
          'Deluxe digital content',
          '36cm Destined One statue · resin · hand-painted',
          'Hardcover physical art book',
          'Steelbook + bronze coin',
          'Reseller-flipped to $500+ in Western markets',
        ],
      },
    ],
    notes: [
      'No DLC announced as of early 2026 · Game Science is rumored to be working on a Black Myth: Zhong Kui follow-up.',
      'PS5 Pro patch added Sept 2024 · 60fps + RT-aware reflections.',
      'Available on Xbox Game Pass as of Aug 2025 (rumored · not confirmed).',
    ],
  },

  characters: {
    intro:
      'The cast spans the canonical Journey to the West pantheon — Sun Wukong\'s rivals, allies and divine adversaries — plus original "Yaoguai" boss creations from Game Science. Below is the central roster.',
    roster: [
      { name: 'The Destined One',  role: 'Protagonist · a Monkey King successor on a pilgrimage to reassemble Sun Wukong\'s six relics.' },
      { name: 'Sun Wukong',        role: 'The Monkey King · legendary forerunner · cutscene-only canon presence · died/sealed in the prologue.' },
      { name: 'Erlang Shen',       role: 'Three-eyed celestial warrior · prologue boss · classic Wukong rival from the novel.' },
      { name: 'The Keeper',        role: 'Shrine-side NPC merchant · sells gourds, drinks, and minor upgrades.' },
      { name: 'Yellow Wind Sage',  role: 'Chapter 1 final boss · wind-spell tiger demon · gatekeeper of the Sandgate Village.' },
      { name: 'Black Bear Guai',   role: 'Chapter 1 mid-boss · greedy bear that stole the Crisp Buddha\'s Cassock.' },
      { name: 'Yellow Robed Squire', role: 'Chapter 2 boss · scholar yaoguai · multi-phase swordplay.' },
      { name: 'Lingjixu',          role: 'Mythic Bodhisattva · cutscene cameo · grants the gourd progression.' },
      { name: 'Yellowbrow',        role: 'Chapter 3 boss · false-Buddha imposter from the original novel · 3 boss phases.' },
      { name: 'Macaque',           role: 'The Six-Eared Macaque · imposter Monkey King · multi-phase mirror fight in Chapter 5.' },
      { name: 'Hundred-Eyed Daoist', role: 'Late-game boss · multi-arm centipede master · poison-stage projectile fight.' },
      { name: 'Sha Wujing',        role: 'Sandy from the novel · alluded to as a former pilgrim · NPC cameo.' },
      { name: 'Zhu Bajie',         role: 'Pigsy · joins as companion in Chapter 4 · co-op AI in select set-pieces.' },
    ],
  },

  weapons: {
    intro:
      'The Destined One wields one weapon — the Ruyi Jingu Bang (Compliant Golden-Hooped Rod). What changes is the Staff Stance you fight with and the 72 Transformations you unlock to temporarily become a different creature. Below is the loadout structure.',
    groups: [
      {
        name: 'Staff Stances',
        items: [
          'Smash Stance — overhead crushing arc (high damage, low speed)',
          'Pillar Stance — vertical pole spin (charge to pole-vault into the air)',
          'Thrust Stance — long-range spear poke (added range + counter window)',
        ],
      },
      {
        name: 'Spells (4-slot)',
        items: [
          'Immobilize (freeze enemy for combo window)',
          'Cloud Step (dash-clone strikes)',
          'Pluck of Many (multiply yourself · summons hair-clones)',
          'Rock Solid (stone-skin parry counter)',
          'Wind Tamer (deflect wind projectiles)',
          'Ring of Fire (AoE pulse)',
        ],
      },
      {
        name: 'Transformations (72 system · examples)',
        items: [
          'Wandering Wight (zombie warrior · default unlock)',
          'Stone Vanguard (rock troll · tank form · Chapter 1 unlock)',
          'Azure Dust Centipede (Chapter 6 · venom rapid-attacker)',
          'Inferno Tartar (fire elemental · Chapter 3 unlock)',
          'Frozen Horn (ice-wolf form · Chapter 5)',
          'Macaque (post-game · transforms into Six-Eared Macaque clone)',
        ],
      },
      {
        name: 'Vessels (consumable companions)',
        items: [
          'Plantain Fan (anti-fire vessel · Princess Iron Fan storyline)',
          'Loong Scales (anti-wind vessel)',
          'Iron Plates (defence buff)',
          'Gourd of Sobriety (cleanse poison/debuff)',
        ],
      },
      {
        name: 'Curios (passive accessories)',
        items: [
          'Wind-Resting Bell (auto-collect radius)',
          'Cloud Bracelet (faster dodge i-frame)',
          'Lingering Jade (HP regen on perfect-dodge)',
          'Iron-Brow Bandage (poise increase)',
        ],
      },
    ],
  },

  map: {
    intro:
      'Black Myth Wukong is structured as six chapters · each a semi-open zone with hidden shrines (the game\'s bonfires) and Yaoguai mini-bosses scattered around the path to the chapter\'s final boss.',
    regions: [
      { name: 'Chapter 1 — Black Wind Mountain', desc: 'Forested mountain · Black Bear Guai\'s den · Yellow Wind Sage finale.' },
      { name: 'Chapter 2 — Yellow Wind Ridge',    desc: 'Sand-blown wasteland · Sandgate Village · Yellow-Robed Squire boss.' },
      { name: 'Chapter 3 — New Thunderclap Temple', desc: 'Mountain monastery · Yellowbrow false-Buddha · 3-phase finale.' },
      { name: 'Chapter 4 — Webbed Hollow',         desc: 'Spider-yaoguai forest · Pigsy joins as companion · Spider Lady boss.' },
      { name: 'Chapter 5 — Flaming Mountain',      desc: 'Volcano region · Princess Iron Fan questline · Red Boy boss.' },
      { name: 'Chapter 6 — Mount Flower Fruit',    desc: 'Wukong\'s ancestral home · Macaque final showdown · true-ending unlock.' },
      { name: 'Hidden — New Thunderclap Sky Realm', desc: 'Post-game zone unlocked by clearing all secret bosses · final true-end fight.' },
    ],
  },

  news: {
    intro:
      'Release · update · award milestones since the August 2024 launch.',
    entries: [
      { date: '2020-08-20', title: 'First 13-minute gameplay reveal',        desc: 'Trailer goes viral · 100M+ YouTube views in a week.' },
      { date: '2023-08-20', title: 'Pre-order release date confirmation',     desc: 'August 20, 2024 set as the launch window.' },
      { date: '2024-06-08', title: 'IGN-confirmed Steam Deck-Verified',       desc: 'Native Steam Deck verified status announced at Summer Game Fest.' },
      { date: '2024-08-20', title: 'Game launches worldwide',                  desc: 'Day-one PS5 + PC · 2.4M concurrent Steam players in 48 hours.' },
      { date: '2024-09-12', title: 'Steam peak: 3M concurrent players',        desc: 'Becomes the all-time #2 Steam launch by concurrents.' },
      { date: '2024-09-30', title: 'PS5 Pro Enhanced patch',                   desc: '60fps + ray-traced reflections via PSSR upscaling.' },
      { date: '2024-11-28', title: 'TGA 2024 GOTY nominee announcement',       desc: 'Nominated for GOTY · won Best Game Direction.' },
      { date: '2024-12-12', title: 'TGA 2024 Best Game Direction win',         desc: 'First Chinese AAA to win in any TGA major category.' },
      { date: '2025-04-15', title: 'Xbox Series X port — delayed',             desc: 'Series S memory budget cited · delayed indefinitely.' },
      { date: '2025-08-20', title: '1-year anniversary patch',                 desc: 'NG+ rebalanced · new transmog system · 25 fixes.' },
    ],
  },

  features: {
    intro:
      'What sets it apart from other soulslikes.',
    entries: [
      { title: 'Staff Stance system',     desc: 'Three combat stances · swap mid-combo for spacing + damage tradeoffs.' },
      { title: '72 Transformations',      desc: 'Temporarily become a different yaoguai mid-fight · separate moveset + health bar.' },
      { title: '81 Tribulations',         desc: 'The canonical Buddhist 81-trial structure · 81 boss / mini-boss encounters across the game.' },
      { title: 'Shrines as bonfires',     desc: 'Save / fast-travel / level-up · rest restores all health + respawns enemies.' },
      { title: 'Linear pacing',           desc: 'Not open-world · semi-corridor chapters with explorable side caves.' },
      { title: 'No companion party',      desc: 'Solo only · Pigsy follows in scripted moments · no permanent ally.' },
      { title: 'Spell-blocking parries',  desc: 'Rock Solid spell substitutes for a traditional shield · stamina-cost-gated.' },
      { title: 'Spirit-companion summons', desc: 'Defeat Yaoguai → claim their Spirit · summon during fights as a 1-attack helper.' },
      { title: 'Chinese-language native', desc: 'First-party Mandarin VO (English/JP/KR localised) · authentic dialect choices.' },
      { title: 'New Game+ post-1.0',      desc: 'NG+ raises all enemy HP/damage · transforms carry over · alternate ending unlock.' },
    ],
  },

  missions: {
    intro:
      'Six chapters that loosely mirror the Journey to the West. Each ends with a 3-phase boss · most have 1-3 mid-chapter setpiece bosses.',
    chapters: [
      {
        name: 'Chapter 1 — Black Wind Mountain',
        setting: 'Forested mountain · the Destined One\'s pilgrimage begins.',
        missions: [
          { name: 'Prologue — Erlang Shen vs Sun Wukong' },
          { name: 'Black Wind Mountain entrance' },
          { name: 'Bullbutcher mini-boss' },
          { name: 'Wandering Wight boss · first transformation unlock' },
          { name: 'Black Bear Guai · mid-chapter showdown' },
          { name: 'Yellow Wind Sage · chapter boss' },
        ],
      },
      {
        name: 'Chapter 2 — Yellow Wind Ridge',
        setting: 'Sandgate Village + the Yellow Wind Ridge desert sequence.',
        missions: [
          { name: 'Sandgate Village arrival' },
          { name: 'Lingxuzi the Tiger boss' },
          { name: 'Kang-Jin Loong dragon mini-boss' },
          { name: 'Stone Vanguard transformation unlock' },
          { name: 'Yellow-Robed Squire · chapter boss' },
        ],
      },
      {
        name: 'Chapter 3 — New Thunderclap Temple',
        setting: 'Snow-capped mountain monastery · false-Buddha cult.',
        missions: [
          { name: 'Snowy peaks ascent' },
          { name: 'Non-Une Monk · spellcasting boss' },
          { name: 'Frigid wolf horde gauntlet' },
          { name: 'Inferno Tartar transformation' },
          { name: 'Yellowbrow · 3-phase chapter boss' },
        ],
      },
      {
        name: 'Chapter 4 — Webbed Hollow',
        setting: 'Spider-yaoguai forest · Pigsy joins · romantic side story.',
        missions: [
          { name: 'Pigsy reunion' },
          { name: 'Snake Eye boss · poison projectiles' },
          { name: 'Hundred-Eyed Daoist · centipede master boss' },
          { name: 'Spider Lady · chapter boss · 2 phases' },
        ],
      },
      {
        name: 'Chapter 5 — Flaming Mountain',
        setting: 'Volcanic crater · Princess Iron Fan + Red Boy questline.',
        missions: [
          { name: 'Volcano arrival · molten ridge gauntlet' },
          { name: 'Red Boy · fire-spitting child boss' },
          { name: 'Princess Iron Fan boss · Plantain Fan acquisition' },
          { name: 'Bull King mini-boss' },
          { name: 'Macaque mirror duel · chapter finale' },
        ],
      },
      {
        name: 'Chapter 6 — Mount Flower Fruit',
        setting: 'Wukong\'s ancestral home · the destined showdown.',
        missions: [
          { name: 'Mount Flower Fruit ascent' },
          { name: 'Erlang Shen rematch' },
          { name: 'Stone Monkey Awakening' },
          { name: 'True Sun Wukong · final boss · true-ending unlock' },
        ],
      },
    ],
  },

  artworks: {
    intro:
      'Real captures from Game Science\'s PR campaign — published on the official Black Myth Steam page through 2024.',
    entries: [
      { title: 'Mount Flower Fruit', desc: 'Opening cutscene vista · Sun Wukong\'s ancestral home.', image: '/images/games/black-myth-wukong/shot-1.jpg' },
      { title: 'Staff combat showcase', desc: 'Smash stance overhead arc against a Yaoguai.', image: '/images/games/black-myth-wukong/shot-2.jpg' },
      { title: 'Yellow Wind Sage arena', desc: 'Wind-tornado boss in the desert chapter.', image: '/images/games/black-myth-wukong/shot-3.jpg' },
      { title: 'Snowy Thunderclap path', desc: 'Chapter 3 establishing shot · snow-capped temple peaks.', image: '/images/games/black-myth-wukong/shot-4.jpg' },
      { title: 'Transformation in action', desc: 'Mid-fight transformation into a Wandering Wight.', image: '/images/games/black-myth-wukong/shot-5.jpg' },
      { title: 'Yellowbrow false-Buddha', desc: 'Chapter 3 boss · giant Buddha statue silhouette.', image: '/images/games/black-myth-wukong/shot-6.jpg' },
    ],
  },

  videos: {
    intro:
      'Major trailers in chronological order from the official Game Science channels.',
    entries: [
      { title: '13-Minute Gameplay Reveal', date: '2020-08-20', href: 'https://www.youtube.com/results?search_query=black+myth+wukong+13+minute+gameplay' },
      { title: 'Build Showcase Tech Demo', date: '2021-08-19', href: 'https://www.youtube.com/results?search_query=black+myth+wukong+2021+tech+demo' },
      { title: 'Date Reveal Trailer',     date: '2023-08-20', href: 'https://www.youtube.com/results?search_query=black+myth+wukong+release+date+trailer' },
      { title: 'Boss Showcase Trailer',   date: '2024-05-08', href: 'https://www.youtube.com/results?search_query=black+myth+wukong+boss+trailer' },
      { title: 'Launch Trailer',          date: '2024-08-15', href: 'https://www.youtube.com/results?search_query=black+myth+wukong+launch+trailer' },
      { title: 'PS5 Pro Enhanced Trailer', date: '2024-09-23', href: 'https://www.youtube.com/results?search_query=black+myth+wukong+ps5+pro' },
      { title: 'TGA 2024 Best Direction Acceptance', date: '2024-12-12', href: 'https://www.youtube.com/results?search_query=black+myth+wukong+tga+2024' },
    ],
  },

  soundtrack: {
    searchTitle: 'Black Myth Wukong',
    intro:
      'The score was composed by 8082 Audio (a Beijing-based studio) with vocal performances by Xianjun Yang and traditional Chinese instrumentation throughout. The Deluxe Edition includes the full 56-track digital OST. Many tracks blend orchestral strings with the erhu, pipa and Buddhist chanting.',
    groups: [
      {
        name: 'Main themes',
        tracks: [
          { title: 'The Destined One',          artist: '8082 Audio' },
          { title: 'Mount Flower Fruit',        artist: '8082 Audio' },
          { title: 'Pilgrimage Begins',         artist: '8082 Audio' },
        ],
      },
      {
        name: 'Combat & boss',
        tracks: [
          { title: 'Yellow Wind Sage',          artist: '8082 Audio' },
          { title: 'Yellowbrow False Buddha',   artist: '8082 Audio' },
          { title: 'Hundred-Eyed Daoist',       artist: '8082 Audio' },
          { title: 'Spider Lady\'s Lullaby',     artist: '8082 Audio · Xianjun Yang' },
          { title: 'Macaque\'s Mirror',          artist: '8082 Audio' },
          { title: 'Erlang Shen Rematch',       artist: '8082 Audio' },
        ],
      },
      {
        name: 'Cultural / vocal pieces',
        tracks: [
          { title: 'Heart Sutra (Buddhist chant)', artist: 'Xianjun Yang · vocal' },
          { title: 'Cloud Mountain Wind',           artist: '8082 Audio · erhu solo' },
          { title: 'Flaming Mountain Lament',       artist: '8082 Audio · pipa' },
          { title: 'Ending Theme — The Sealed One', artist: '8082 Audio · full ensemble' },
        ],
      },
    ],
  },

  requirements: {
    intro:
      'Built on Unreal Engine 5 with heavy use of Lumen + Nanite — visually one of 2024\'s most demanding titles. Below: console SKUs, PC min vs recommended, and three USD-priced build tiers.',
    consoles: [
      {
        console: 'PlayStation',
        versions: 'PS5 only · no PS4',
        best: 'PS5 Pro: 4K 60 fps + RT (PSSR upscaling enabled · Sept 2024 patch)',
        storage: '130 GB',
        notes: ['PS5 base · Performance mode 1440p 60 fps; Quality mode 4K 30 fps with RT.'],
      },
      {
        console: 'Xbox',
        versions: 'Not released as of early 2026 — Series S memory budget delay',
        best: 'TBD pending port',
        storage: 'TBD',
      },
    ],
    pcMin: {
      os: 'Windows 10 64-bit',
      cpu: 'Intel Core i5-8400 / AMD Ryzen 5 1600',
      gpu: 'NVIDIA GTX 1060 (6 GB) / AMD RX 580 (8 GB)',
      ram: '16 GB',
      storage: '130 GB SSD',
      expectedFps: '1080p · 30 fps · Low preset · TSR Performance',
    },
    pcRecommended: {
      os: 'Windows 10 / 11 64-bit',
      cpu: 'Intel Core i7-9700 / AMD Ryzen 5 5500',
      gpu: 'NVIDIA RTX 2060 / AMD RX 5700 XT',
      ram: '16 GB',
      vram: '8 GB VRAM minimum',
      storage: '130 GB NVMe SSD',
      expectedFps: '1080p · 60 fps · High preset · DLSS / FSR Quality',
      notes: 'Lumen Global Illumination is the FPS killer — drop it one notch for a 15-20% gain.',
    },
    builds: [
      {
        tier: 'Budget · 1080p 60 fps',
        totalUSD: 850,
        targets: '1080p · 60 fps medium preset · DLSS Performance',
        parts: [
          { label: 'CPU',     part: 'Ryzen 5 7600 (6c/12t · Zen 4)',                              priceUSD: 200 },
          { label: 'GPU',     part: 'RTX 4060 (8 GB · DLSS 3 support)',                          priceUSD: 290 },
          { label: 'RAM',     part: '32 GB DDR5-5200 (2x16 GB)',                                  priceUSD: 100 },
          { label: 'Storage', part: '1 TB NVMe Gen4 SSD',                                         priceUSD:  80 },
          { label: 'Motherboard', part: 'B650 · ATX',                                             priceUSD: 130 },
          { label: 'PSU',     part: '650W 80+ Gold',                                              priceUSD:  90 },
          { label: 'Case',    part: 'Mid-tower mesh',                                             priceUSD:  60 },
        ],
        notes: 'DLSS 3 + frame generation makes the RTX 4060 punch well above its raster tier.',
      },
      {
        tier: 'Recommended · 1440p 60 fps RT',
        totalUSD: 1700,
        targets: '1440p · 60 fps high preset · RT Reflections · DLSS Quality',
        parts: [
          { label: 'CPU',     part: 'Ryzen 7 7700X (8c/16t · Zen 4)',                            priceUSD: 280 },
          { label: 'GPU',     part: 'RTX 4070 SUPER (12 GB)',                                    priceUSD: 600 },
          { label: 'RAM',     part: '32 GB DDR5-6000',                                            priceUSD: 130 },
          { label: 'Storage', part: '2 TB NVMe Gen4 SSD',                                         priceUSD: 160 },
          { label: 'Motherboard', part: 'B650E · ATX',                                            priceUSD: 180 },
          { label: 'PSU',     part: '850W 80+ Gold',                                              priceUSD: 130 },
          { label: 'Case',    part: 'Premium mesh',                                               priceUSD: 110 },
          { label: 'Cooler',  part: '240mm AIO',                                                  priceUSD:  90 },
        ],
        notes: 'Sweet-spot for 1440p UE5 titles · holds up through 2026 releases.',
      },
      {
        tier: '4K · ray tracing · all maxed',
        totalUSD: 2900,
        targets: '4K · 60 fps · Cinematic preset · Path Tracing enabled · DLSS Performance',
        parts: [
          { label: 'CPU',     part: 'Ryzen 7 7800X3D',                                            priceUSD: 380 },
          { label: 'GPU',     part: 'GeForce RTX 4090 (24 GB)',                                   priceUSD:1700 },
          { label: 'RAM',     part: '32 GB DDR5-6400',                                            priceUSD: 150 },
          { label: 'Storage', part: '2 TB NVMe Gen4 SSD',                                         priceUSD: 160 },
          { label: 'Motherboard', part: 'X670E · ATX',                                            priceUSD: 280 },
          { label: 'PSU',     part: '1000W 80+ Platinum',                                         priceUSD: 200 },
          { label: 'Case',    part: 'Premium mesh · 6x fan',                                      priceUSD: 140 },
          { label: 'Cooler',  part: '360mm AIO',                                                  priceUSD: 130 },
        ],
        notes: 'Path-Traced Lumen at 4K · the most demanding UE5 setting in any 2024 title.',
      },
    ],
    completion: {
      mainStory: '35 hours',
      mainAndExtras: '50-60 hours',
      completionist: '80+ hours (all 81 tribulation bosses + true ending)',
      notes: [
        'New Game+ unlocks after first true ending · enemies +50% HP · transforms carry.',
        'Six secret bosses (one per chapter) gate the true ending — easy to miss.',
        'No fast travel between chapters · once you leave a chapter, return via shrine teleport.',
      ],
    },
  },
};

export default content;
