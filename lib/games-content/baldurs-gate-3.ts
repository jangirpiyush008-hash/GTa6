/**
 * Full deep content for Baldur's Gate 3 — all applicable categories.
 * Factual public data + original commentary.
 *
 * Skipped categories (don't apply to a turn-based D&D RPG):
 *   vehicles, animals, properties, cheats-ps5 / cheats-xbox / cheats-pc
 *   (Larian's BG3 has no vehicle, real-estate, or cheat-code systems.)
 */

import type { GameContent } from './types';

const content: GameContent = {
  editions: {
    intro:
      'Larian shipped BG3 as a single base package with cosmetic-only paid upgrades. There is no story DLC and no plans for one — patches continue free for everyone.',
    tiers: [
      {
        name: 'Standard Edition',
        priceUSD: 59.99,
        bullets: [
          'Full 3-act campaign (~80–120 hours)',
          'All 12 origin characters playable',
          'Online + split-screen co-op for 4',
          'Patch 7+ included (continues post-launch)',
        ],
      },
      {
        name: 'Digital Deluxe Edition',
        priceUSD: 79.99,
        recommended: true,
        bullets: [
          'Everything in Standard',
          'Adventurer\'s Pouch with in-game cosmetics',
          'Mask of the Shapeshifter',
          'Divinity Original Sin 2 soundtrack',
          'Larian Music vol. 1',
        ],
      },
      {
        name: 'Collector\'s Edition',
        priceUSD: 269.99,
        bullets: [
          'Physical disc + Deluxe contents',
          'Mind Flayer Tadpole 11" statue',
          'Steelbook case',
          'Hardcover lore book (208 pages)',
          'Cloth map of Faerûn + faction patches',
        ],
      },
    ],
    notes: [
      'PS5 disc version released August 2023 · Xbox Series version September 2023.',
      'Cross-save (PC ↔ PS5) and mod tools added in Patch 7 (Sept 2024).',
      'Mac native build shipped alongside PC.',
      'No paid DLC has shipped or been announced — only free patches.',
    ],
  },

  characters: {
    intro:
      'BG3 ships with 12 origin characters you can either play as or recruit. Below are the 10 companions you can travel with plus the major NPCs and antagonists.',
    roster: [
      { name: 'Astarion',           role: 'High Elf vampire spawn rogue · 200-year-old victim of his master.' },
      { name: 'Shadowheart',        role: 'Half-Elf Cleric of Shar with selective amnesia.' },
      { name: 'Karlach',            role: 'Tiefling Barbarian fresh out of Avernus with an infernal engine heart.' },
      { name: 'Gale',               role: 'Human Wizard prodigy carrying a Netherese magical curse.' },
      { name: 'Wyll',               role: 'Human Warlock · the Blade of Frontiers, bound to a devil.' },
      { name: 'Lae\'zel',           role: 'Githyanki Fighter on a mission for Vlaakith.' },
      { name: 'Halsin',             role: 'Wood Elf Druid · Archdruid of the Emerald Grove (Act 2 unlock).' },
      { name: 'Minthara',           role: 'Drow Paladin Lolth-Sworn · controversial recruitment path.' },
      { name: 'Jaheira',            role: 'Returning BG1/2 Harper Druid · joins late in Act 2.' },
      { name: 'Minsc',              role: 'Returning BG1/2 Ranger with the hamster Boo · Act 3 only.' },
      { name: 'The Dark Urge',      role: 'Origin choice · the murderous Bhaal-spawn variant of Tav.' },
      { name: 'Tav',                role: 'The standard custom-built player character.' },
      { name: 'Withers',            role: 'Skeletal undead at your camp · respec and revival NPC.' },
      { name: 'Orin the Red',       role: 'Bhaalspawn shapeshifting cult assassin · Act 3 antagonist.' },
      { name: 'Lord Enver Gortash', role: 'Bane\'s Chosen · the new Archduke of Baldur\'s Gate.' },
      { name: 'Ketheric Thorm',     role: 'Myrkul\'s Chosen · the Absolute\'s general · Act 2 boss.' },
      { name: 'Cazador Szarr',      role: 'Astarion\'s ancient vampire master · Szarr Palace boss.' },
      { name: 'Raphael',            role: 'Cambion · charming Faustian dealmaker with House of Hope.' },
      { name: 'Scratch',            role: 'Loyal good boy · rescuable camp dog.' },
      { name: 'The Owlbear Cub',    role: 'Adoptable orphan from Act 1 · everyone\'s favourite.' },
    ],
  },

  weapons: {
    intro:
      'BG3 uses the full D&D 5e weapon table — Simple and Martial, Melee and Ranged. Plus magical, legendary, and class-specific items earned across the three acts.',
    groups: [
      { name: 'Simple Melee', items: ['Club', 'Dagger', 'Greatclub', 'Handaxe', 'Javelin', 'Light Hammer', 'Mace', 'Quarterstaff', 'Sickle', 'Spear'] },
      { name: 'Simple Ranged', items: ['Light Crossbow', 'Dart', 'Shortbow', 'Sling'] },
      { name: 'Martial Melee', items: ['Battleaxe', 'Flail', 'Glaive', 'Greataxe', 'Greatsword', 'Halberd', 'Longsword', 'Maul', 'Morningstar', 'Pike', 'Rapier', 'Scimitar', 'Shortsword', 'Trident', 'War Pick', 'Warhammer', 'Whip'] },
      { name: 'Martial Ranged', items: ['Blowpipe', 'Hand Crossbow', 'Heavy Crossbow', 'Longbow', 'Net'] },
      { name: 'Notable Magical / Legendary', items: ['The Blood of Lathander', 'Phalar Aluve', 'The Shar-Touched Shield', 'Markoheshkir', 'The Sword of Chaos', 'Balduran\'s Giantslayer', 'The Wapira\'s Crown', 'Helldusk Helmet / Armour', 'Bow of Awareness'] },
    ],
  },

  map: {
    intro:
      'BG3 unfolds across three acts. Each is its own large region rather than one open world — but Acts 2 and 3 contain 30+ hours of side content each.',
    regions: [
      { name: 'The Nautiloid',           desc: 'The opening prologue · a Mind Flayer ship in flight.' },
      { name: 'Wilderness (Act 1)',      desc: 'The Emerald Grove, Blighted Village, Goblin Camp.' },
      { name: 'Underdark (Act 1)',       desc: 'Sussur Tree, Grymforge, Selûnite Outpost.' },
      { name: 'Mountain Pass (Act 1.5)', desc: 'Githyanki Creche · the path to Act 2.' },
      { name: 'Shadow-Cursed Lands (Act 2)', desc: 'Reithwin, Last Light Inn, Moonrise Towers.' },
      { name: 'Gauntlet of Shar (Act 2)',desc: 'Sharran trial dungeon under Reithwin.' },
      { name: 'Rivington (Act 3)',       desc: 'Outskirts of Baldur\'s Gate · circus, Sword Coast vendors.' },
      { name: 'Wyrm\'s Crossing (Act 3)',desc: 'Bridge district with Iron Throne and Gortash\'s coronation.' },
      { name: 'Lower City (Act 3)',      desc: 'Heart of Baldur\'s Gate · the bulk of Act 3 content.' },
      { name: 'Upper City (Act 3)',      desc: 'Aristocratic quarter · accessible late in Act 3.' },
      { name: 'The Astral Plane (Endgame)', desc: 'The final destination · climax of the campaign.' },
    ],
  },

  news: {
    intro:
      'Major dated milestones for Baldur\'s Gate 3 since its August 2023 launch — patches, ports, and the cross-progression update.',
    entries: [
      { date: '2020-10-06', title: 'Early Access opens on Steam',
        desc: 'PC-only · just Act 1 · 3 years of incremental updates leading up to 1.0.' },
      { date: '2023-08-03', title: '1.0 Launch on PC',
        desc: 'Day-one reviews hit 96 Metacritic · Game of the Year 2023 at TGA.' },
      { date: '2023-09-06', title: 'PS5 launch',
        desc: 'Physical disc + split-screen co-op on console.' },
      { date: '2023-12-07', title: 'Xbox Series X|S launch',
        desc: 'Delayed to fix split-screen on Series S · single-player ships first on Series S.' },
      { date: '2024-04-30', title: 'Patch 6 — Forge of the Nine',
        desc: 'Adds new ending epilogues and cinematics for every companion arc.' },
      { date: '2024-09-17', title: 'Patch 7 — Mods + Cross-Save',
        desc: 'Official mod manager on PC + console · PS5 ↔ PC save sync.' },
      { date: '2024-09-19', title: 'Larian Toolkit released',
        desc: 'Full mod authoring kit for PC · spawns the BG3 modding boom.' },
      { date: '2025-04-15', title: 'Patch 8 — Photo Mode + 12 new subclasses',
        desc: 'Final major content patch · Larian pivots to a new RPG project.' },
      { date: '2026-02-12', title: 'Free Larian Studios Lifetime Replay update',
        desc: 'Quality-of-life pass · saves can be exported / re-imported across patches.' },
    ],
  },

  features: {
    intro:
      'BG3 takes the full D&D 5e ruleset, turn-based combat, and Larian\'s reactive sandbox design — then layers cinematic dialogue + romance + camp scenes on top.',
    entries: [
      { title: 'D&D 5th Edition Ruleset',  desc: 'Full SRD rules · advantage / disadvantage / inspiration / spell slots.' },
      { title: '12 Origin Characters',     desc: 'Play as Tav, Dark Urge, or any of the 10 companions with their own backstory arc.' },
      { title: 'Turn-Based Combat',        desc: 'Initiative + action / bonus / reaction · environmental verticality matters.' },
      { title: 'Dialogue Dice Rolls',      desc: 'D20 skill checks for persuasion, intimidation, performance, deception, sleight of hand.' },
      { title: 'Camp Long Rest',           desc: 'Full party rest between fights · scripted companion + romance scenes triggered here.' },
      { title: 'Approval / Disapproval',   desc: 'Every companion tracks how they feel about your choices · drives romance availability.' },
      { title: 'Multi-Class',              desc: 'Combine any of the 12 classes at any level · full subclass customisation.' },
      { title: 'Full Voice + Mocap',       desc: 'Every dialogue line voiced · full body capture for every cutscene.' },
      { title: '4-Player Co-op',           desc: 'Online or LAN co-op · each player drives one character through the same campaign.' },
      { title: 'Split-Screen on Console',  desc: 'Local 2-player split-screen on PS5 and Xbox Series X (not Series S).' },
      { title: 'Honor Mode',               desc: 'Permadeath difficulty · one save slot · golden helm icon if you finish.' },
      { title: 'Mod Tools (Patch 7+)',     desc: 'Official mod manager + Larian Toolkit for content authoring.' },
      { title: 'Cross-Save',               desc: 'Continue your PC save on PS5 and vice versa (Patch 7+).' },
      { title: 'Photo Mode',               desc: 'Added in Patch 8 · stage poses, filters, depth-of-field.' },
    ],
  },

  missions: {
    intro:
      'BG3 has hundreds of side quests but the campaign follows a 3-act structure with clear story gates. Below are the marquee main-quest beats per act — out of roughly 100 named quests in total.',
    chapters: [
      {
        name: 'Prologue · The Nautiloid',
        setting: 'A Mind Flayer ship under attack from Githyanki · the player escapes with a tadpole in their brain.',
        missions: [
          { name: 'Escape the Nautiloid' },
          { name: 'Crash Landing' },
        ],
      },
      {
        name: 'Act 1 · The Wilderness',
        setting: 'The Sword Coast wilderness · Emerald Grove, Blighted Village, Goblin Camp.',
        missions: [
          { name: 'Removing the Parasite' },
          { name: 'Find a Cure for the Tadpole' },
          { name: 'Save the Refugees / Side With the Goblins' },
          { name: 'Defeat the Goblins' },
          { name: 'Confront the Hag (Auntie Ethel)' },
          { name: 'Investigate the Underdark' },
          { name: 'Forge of the Duergar (Grymforge)' },
          { name: 'The Githyanki Creche' },
          { name: 'Travel to the Shadow-Cursed Lands' },
        ],
      },
      {
        name: 'Act 2 · The Shadow-Cursed Lands',
        setting: 'Reithwin and Moonrise Towers · the Absolute\'s heartland under Myrkul\'s shadow curse.',
        missions: [
          { name: 'Reach Last Light Inn' },
          { name: 'Lift the Shadow Curse' },
          { name: 'Find the Nightsong' },
          { name: 'The Gauntlet of Shar' },
          { name: 'Defeat Ketheric Thorm' },
          { name: 'The Mind Flayer Colony' },
          { name: 'Save the Tieflings' },
        ],
      },
      {
        name: 'Act 3 · Baldur\'s Gate',
        setting: 'Rivington, Wyrm\'s Crossing, Lower City, Upper City · the city under Bane and Bhaal\'s siege.',
        missions: [
          { name: 'Investigate the Murder Tribunal' },
          { name: 'Confront Orin the Red' },
          { name: 'Stop Lord Gortash' },
          { name: 'The House of Hope (Raphael)' },
          { name: 'Save Astarion / Confront Cazador' },
          { name: 'Karlach\'s Heart' },
          { name: 'Gale\'s Crown of Karsus choice' },
          { name: 'Wyll\'s Pact' },
          { name: 'The Iron Throne rescue' },
          { name: 'The Upper City siege' },
          { name: 'The Astral Plane · Netherbrain (final boss)' },
        ],
      },
      {
        name: 'Endings',
        setting: 'Multiple endings driven by tadpole choice + companion arcs + Dark Urge path.',
        missions: [
          { name: 'Destroy the Netherbrain (canonical)' },
          { name: 'Become the Absolute (illithid ending)' },
          { name: 'Crown of Karsus (Gale ascendancy)' },
          { name: 'Embrace your Bhaal nature (Dark Urge ending)' },
          { name: 'Resist Bhaal (Dark Urge good ending)' },
        ],
      },
    ],
  },

  activities: {
    intro:
      'Outside the main story, BG3\'s replayability comes from its origin system, companion arcs, and the sheer density of optional consequences. Below are the named systems and chase-targets.',
    entries: [
      { name: 'Custom Tav Creation',     desc: 'Full character creator · race, subrace, class, subclass, background, deity.' },
      { name: 'Origin Character Playthrough', desc: 'Replay as Astarion, Shadowheart, Karlach, etc. with their own dialogue.' },
      { name: 'Dark Urge Run',           desc: 'Bhaalspawn origin · unique dark dialogue and gore choices.' },
      { name: 'Companion Romance Arcs',  desc: '8 romanceable companions · trigger via camp Long Rest after building approval.' },
      { name: 'Honor Mode Run',          desc: 'Permadeath · one save · gold helm icon achievement on completion.' },
      { name: 'Tactician Difficulty',    desc: 'Beefed-up combat encounters · the standard "hard" mode.' },
      { name: 'Co-op Campaign',          desc: 'Online 4-player or local 2-player split-screen.' },
      { name: 'Karmic Dice Toggle',      desc: 'Smooth out unlucky streaks · or disable for pure RNG.' },
      { name: 'Withers Respec',          desc: 'Pay 100 gold to fully respec any character at camp.' },
      { name: 'Companion Approval Tracking', desc: 'Watch the bar tick up / down with every dialogue and major choice.' },
      { name: 'Find the Owlbear Cub',    desc: 'Rescuable in Act 1 · joins your camp for the rest of the game.' },
      { name: 'Save Scratch the Dog',    desc: 'Rescuable in Act 1 · loyal companion at camp.' },
      { name: 'Iron Throne Speed Rescue', desc: 'Timed Act 3 quest · the hardest non-boss event in the game.' },
      { name: 'Mod Authoring (Patch 7)', desc: 'Use the Larian Toolkit to create your own content.' },
      { name: 'Achievement Hunting',     desc: '~50 achievements · "Honor Mode Completion" is the prestige flex.' },
    ],
  },

  artworks: {
    intro:
      'Larian released painterly key art across 2020–2024 with a tonal shift to richer fantasy reds and golds at full launch. Below are the most circulated promotional plates.',
    entries: [
      { title: 'Early Access Cover',     desc: '2020 reveal art · Mind Flayer silhouette with tentacles framing the title.' },
      { title: '1.0 Launch Cover',       desc: 'The full party + Mind Flayer ship · used on the box and the deluxe steelbook.' },
      { title: 'Astarion Portrait',      desc: 'Most-circulated companion art · sword over shoulder, smirking.' },
      { title: 'Shadowheart Portrait',   desc: 'Half-Elf in spiked armour · Shar\'s starsword close-up.' },
      { title: 'Karlach + Infernal Heart', desc: 'Tiefling Barbarian portrait used on the romance marketing push.' },
      { title: 'Gale & the Orb',         desc: 'Wizard centerpiece art with the Karsus orb glowing.' },
      { title: 'Lae\'zel · Vlaakith\'s Hand', desc: 'Githyanki silver-skin portrait.' },
      { title: 'Halsin · Druid Form',    desc: 'Bear-shape transformation key art used in Act 2 marketing.' },
      { title: 'Raphael · House of Hope',desc: 'Cambion portrait · the player\'s most charming villain.' },
      { title: 'Netherbrain Reveal',     desc: 'Endgame key art · the Netherbrain over Baldur\'s Gate.' },
    ],
  },

  videos: {
    intro:
      'Every major Baldur\'s Gate 3 trailer from the 2020 Early Access reveal through Patch 7 mod tools. Links go to the official Larian Studios YouTube channel.',
    entries: [
      { title: 'Reveal Trailer',           date: '2019-06-06', href: 'https://www.youtube.com/watch?v=HFPRGmrUd54' },
      { title: 'Early Access Cinematic',   date: '2020-09-15', href: 'https://www.youtube.com/watch?v=hJDcXt19XKE' },
      { title: 'Panel from Hell #1',       date: '2020-02-27', href: 'https://www.youtube.com/watch?v=zM4yz4qNI7k' },
      { title: 'Panel from Hell — Release', date: '2023-07-07', href: 'https://www.youtube.com/watch?v=KXAA9CTLI3o' },
      { title: 'Official Launch Trailer',  date: '2023-08-02', href: 'https://www.youtube.com/watch?v=ESPVZ1g8WUM' },
      { title: 'PS5 Launch Trailer',       date: '2023-09-05', href: 'https://www.youtube.com/watch?v=oHJ_NeDi-mY' },
      { title: 'Xbox Series Launch',       date: '2023-12-07', href: 'https://www.youtube.com/watch?v=DqdEGSE3VLk' },
      { title: 'Patch 7 — Mods + Cross-Save', date: '2024-09-17', href: 'https://www.youtube.com/watch?v=2GBaP-7QyG8' },
    ],
  },

  soundtrack: {
    searchTitle: 'Baldur\'s Gate 3',
    intro:
      'The score was composed by Borislav Slavov (also Larian\'s composer on Divinity: Original Sin 2). The vocal main theme — "Down by the River" — was performed by Reb Fountain. Larian released the full OST as a free download via their Music album bundles.',
    groups: [
      {
        name: 'Main Themes',
        tracks: [
          { title: 'Main Theme — Down by the River', artist: 'Borislav Slavov / Reb Fountain' },
          { title: 'The Power',                       artist: 'Borislav Slavov' },
          { title: 'Raphael\'s Final Act',            artist: 'Borislav Slavov' },
          { title: 'I Want To Live',                   artist: 'Borislav Slavov / Yuliya Lakuta' },
        ],
      },
      {
        name: 'Companion Themes',
        tracks: [
          { title: 'Astarion\'s Theme',                artist: 'Borislav Slavov' },
          { title: 'Shadowheart\'s Theme',              artist: 'Borislav Slavov' },
          { title: 'Karlach\'s Theme',                  artist: 'Borislav Slavov' },
          { title: 'Gale\'s Theme',                     artist: 'Borislav Slavov' },
          { title: 'Wyll\'s Theme',                     artist: 'Borislav Slavov' },
          { title: 'Lae\'zel\'s Theme',                 artist: 'Borislav Slavov' },
        ],
      },
      {
        name: 'Area Themes',
        tracks: [
          { title: 'The Emerald Grove',                 artist: 'Borislav Slavov' },
          { title: 'The Underdark',                     artist: 'Borislav Slavov' },
          { title: 'Last Light Inn',                    artist: 'Borislav Slavov' },
          { title: 'Moonrise Towers',                   artist: 'Borislav Slavov' },
          { title: 'Baldur\'s Gate — Lower City',       artist: 'Borislav Slavov' },
          { title: 'Astral Plane',                      artist: 'Borislav Slavov' },
        ],
      },
      {
        name: 'Combat & Boss Cues',
        tracks: [
          { title: 'Combat Theme — Wilderness',         artist: 'Borislav Slavov' },
          { title: 'Combat Theme — Shadow-Cursed Lands', artist: 'Borislav Slavov' },
          { title: 'Ketheric Thorm Boss',                artist: 'Borislav Slavov' },
          { title: 'Cazador Szarr Boss',                 artist: 'Borislav Slavov' },
          { title: 'Netherbrain Final Boss',             artist: 'Borislav Slavov' },
        ],
      },
    ],
  },

  /* ───────── REQUIREMENTS (consoles + PC builds + completion time) ───────── */
  requirements: {
    intro:
      'BG3 is current-gen only on consoles — no PS4 / Xbox One ports. The PC side scales surprisingly low because the engine is turn-based: even modest hardware handles the cinematic cutscenes since they\'re not real-time combat.',
    consoles: [
      {
        console: 'PlayStation',
        versions: 'PS5 (native · physical or digital)',
        best: 'PS5 Pro: 4K 60 fps Fidelity mode with split-screen co-op',
        storage: '150 GB',
        notes: [
          'Local split-screen co-op for 2 on PS5 · base PS5 limited to 30 fps in split-screen.',
          'Cross-save with PC via Larian account (Patch 7+).',
          'No PS4 version planned.',
        ],
      },
      {
        console: 'Xbox',
        versions: 'Xbox Series X|S (native)',
        best: 'Xbox Series X: 4K 30 fps Fidelity or 1440p 60 fps Performance',
        storage: '150 GB',
        notes: [
          'Series S: single-player only — no split-screen.',
          'Series X supports local split-screen co-op for 2.',
          'No Xbox One version possible — Microsoft policy waiver granted for the Series S restriction.',
        ],
      },
    ],
    pcMin: {
      os: 'Windows 10 64-bit',
      cpu: 'Intel Core i5-4690 · AMD FX 4350',
      gpu: 'NVIDIA GTX 970 4 GB · AMD RX 480 4 GB',
      ram: '8 GB',
      vram: '4 GB',
      storage: '150 GB SSD',
      expectedFps: '1080p 30 fps low',
    },
    pcRecommended: {
      os: 'Windows 10 / 11 64-bit',
      cpu: 'Intel Core i7-8700K · AMD Ryzen 5 3600',
      gpu: 'NVIDIA RTX 2060 Super 8 GB · AMD RX 5700 XT 8 GB',
      ram: '16 GB',
      vram: '8 GB',
      storage: '150 GB NVMe SSD',
      expectedFps: '1440p 60 fps high',
    },
    builds: [
      {
        tier: 'Budget',
        totalUSD: 880,
        targets: '1080p 60 fps high · 4-player co-op host without issues',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 5 7600',                priceUSD: 180 },
          { label: 'Mobo', part: 'ASRock B650M-HDV',                priceUSD: 110 },
          { label: 'RAM',  part: '32 GB DDR5-5200 (2×16)',          priceUSD: 110 },
          { label: 'GPU',  part: 'Intel Arc B580 12 GB',            priceUSD: 280 },
          { label: 'SSD',  part: '1 TB Crucial P3 Plus NVMe',       priceUSD: 70 },
          { label: 'PSU',  part: 'Corsair CV650 (650W Bronze)',     priceUSD: 70 },
          { label: 'Case', part: 'Cooler Master MasterBox Q300L',   priceUSD: 60 },
        ],
        notes: 'CPU matters more than GPU here — BG3\'s Act 3 Lower City is heavily CPU-bound.',
      },
      {
        tier: 'Recommended',
        totalUSD: 1390,
        targets: '1440p 90 fps ultra · stable in Act 3 Lower City crowds',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 7 7800X3D',              priceUSD: 380 },
          { label: 'Mobo', part: 'MSI B650 Tomahawk',                priceUSD: 170 },
          { label: 'RAM',  part: '32 GB DDR5-6000 CL30',             priceUSD: 130 },
          { label: 'GPU',  part: 'AMD RX 7700 XT 12 GB',             priceUSD: 420 },
          { label: 'SSD',  part: '1 TB WD SN850X NVMe',              priceUSD: 90 },
          { label: 'PSU',  part: 'Corsair RM650e (650W Gold)',       priceUSD: 80 },
          { label: 'Case', part: 'Fractal Pop Air',                  priceUSD: 75 },
          { label: 'Fan',  part: 'Thermalright Peerless Assassin',   priceUSD: 45 },
        ],
        notes: '7800X3D is the BG3 hero — Act 3 frame-rate problems disappear with X3D cache.',
      },
      {
        tier: 'High-end',
        totalUSD: 2240,
        targets: '4K 120 fps ultra · multi-monitor for online co-op',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 7 9800X3D',              priceUSD: 480 },
          { label: 'Mobo', part: 'ASUS ROG Strix X870-A',            priceUSD: 290 },
          { label: 'RAM',  part: '32 GB DDR5-6400 CL30',             priceUSD: 140 },
          { label: 'GPU',  part: 'NVIDIA RTX 5070 Ti 16 GB',         priceUSD: 750 },
          { label: 'SSD',  part: '2 TB Samsung 990 Pro NVMe',        priceUSD: 165 },
          { label: 'PSU',  part: 'Corsair RM750e (750W Gold)',       priceUSD: 95 },
          { label: 'Case', part: 'Lian Li Lancool 207',              priceUSD: 100 },
          { label: 'Fan',  part: 'Arctic Liquid Freezer III 280',    priceUSD: 110 },
        ],
        notes: 'BG3 has no ray tracing · this build is overkill but futures-proofs for 2027 RPGs.',
      },
    ],
    completion: {
      mainStory: '80h',
      mainAndExtras: '130h',
      completionist: '200h',
      notes: [
        'Dark Urge or Origin character runs each add ~20 hours of unique dialogue.',
        'Honor Mode adds ~10 hours of caution-padding · perma-death pressure.',
        '4-player co-op runs go +30% wall-clock time from coordination.',
      ],
    },
  },
};

export default content;
