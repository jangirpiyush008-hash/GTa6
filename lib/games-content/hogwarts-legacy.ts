/**
 * Full deep content for Hogwarts Legacy.
 * Factual public game data + original commentary.
 *
 * Skipped categories (don't apply): vehicles, properties,
 * cheats-ps5 / cheats-xbox / cheats-pc (no official cheats in this game).
 */

import type { GameContent } from './types';

const content: GameContent = {
  editions: {
    intro:
      'Avalanche shipped three editions at launch (Feb 2023) plus a Switch port later that year. The Deluxe Edition is the only one that adds in-game content — the Collector\'s is mostly merchandise.',
    tiers: [
      {
        name: 'Standard Edition',
        priceUSD: 59.99,
        bullets: [
          'Full main story · all four houses playable',
          'Available on PS5, PS4, Xbox Series, Xbox One, PC, Switch',
          'Native PS5 / Xbox Series version on disc or download',
        ],
      },
      {
        name: 'Digital Deluxe Edition',
        priceUSD: 69.99,
        recommended: true,
        bullets: [
          'Everything in Standard',
          'Thestral mount',
          'Onyx Hippogriff mount',
          'Dark Arts cosmetic set + Dark Arts Garrison hat',
          'Dark Arts Battle Arena (exclusive combat arena)',
          '72-hour early access (no longer relevant in 2026)',
        ],
      },
      {
        name: 'Collector\'s Edition',
        priceUSD: 289.99,
        bullets: [
          'Physical Deluxe Edition contents',
          'Levitating ancient magic wand replica (16")',
          'Steelbook case',
          'Premium magnetic packaging',
          'Note: did not include the game disc — code-in-box',
        ],
      },
    ],
    notes: [
      'PS4 / Xbox One versions had delayed releases and reduced fidelity.',
      'PSVR 2 / Quest support not available.',
      'No paid DLC has shipped or been announced as of 2026 — only free patches.',
    ],
  },

  characters: {
    intro:
      'Hogwarts Legacy is set in the 1890s — over 100 years before the books. Below are the major companions, professors, and antagonists you\'ll meet as the new 5th-year student.',
    roster: [
      { name: 'Professor Eleazar Fig',     role: 'Your magical theory mentor · ushers you into the main quest.' },
      { name: 'Sebastian Sallow',          role: 'Slytherin companion · the Dark Arts questline anchor.' },
      { name: 'Ominis Gaunt',              role: 'Blind Slytherin · descendant of Salazar · Parseltongue.' },
      { name: 'Natsai "Natty" Onai',       role: 'Gryffindor companion · journalist instincts, transferred from Uagadou.' },
      { name: 'Poppy Sweeting',            role: 'Hufflepuff companion · animal welfare and Beasts arc.' },
      { name: 'Amit Thakkar',              role: 'Ravenclaw companion · astronomy and constellations arc.' },
      { name: 'Imelda Reyes',              role: 'Slytherin rival · the resident broom-flying ace.' },
      { name: 'Leander Prewett',           role: 'Gryffindor classmate · braggart energy.' },
      { name: 'Gareth Weasley',            role: 'Hufflepuff potions enthusiast · Professor Garlick\'s assistant.' },
      { name: 'Professor Phineas Nigellus Black', role: 'Headmaster · stern Slytherin · familiar surname.' },
      { name: 'Professor Matilda Weasley', role: 'Deputy Headmistress · Transfiguration · greets the player.' },
      { name: 'Professor Aesop Sharp',     role: 'Potions Master · former Auror · ill from a curse.' },
      { name: 'Professor Mirabel Garlick', role: 'Herbology Mistress · gentle and curious.' },
      { name: 'Professor Mudiwa Onai',     role: 'Divination · Natty\'s mother · respected oracle.' },
      { name: 'Professor Dinah Hecat',     role: 'Defence Against the Dark Arts · former duellist.' },
      { name: 'Professor Cuthbert Binns',  role: 'History of Magic · the ghost lecturer in canon.' },
      { name: 'Professor Abraham Ronen',   role: 'Astronomy Tower · sky-watcher.' },
      { name: 'Ranrok',                    role: 'Goblin rebellion leader · primary antagonist.' },
      { name: 'Victor Rookwood',           role: 'Dark wizard ally to Ranrok · secondary antagonist.' },
      { name: 'Solomon Sallow',            role: 'Sebastian\'s strict uncle · former Auror.' },
    ],
  },

  weapons: {
    intro:
      'Magic IS your weapon at Hogwarts. The combat system unlocks 25+ spells across damage, control, force, and the three Unforgivable Curses — plus combat plants and ancient magic abilities.',
    groups: [
      {
        name: 'Damage Spells',
        items: ['Confringo', 'Incendio', 'Bombarda', 'Diffindo', 'Expelliarmus', 'Stupefy', 'Petrificus Totalus', 'Glacius'],
      },
      {
        name: 'Force / Control Spells',
        items: ['Accio', 'Depulso', 'Flipendo', 'Levioso', 'Arresto Momentum', 'Descendo', 'Transformation'],
      },
      {
        name: 'Unforgivable Curses',
        items: ['Avada Kedavra (Killing Curse)', 'Crucio (Cruciatus)', 'Imperio (Imperius)'],
      },
      {
        name: 'Utility & Stealth',
        items: ['Lumos', 'Revelio', 'Reparo', 'Alohomora', 'Disillusionment', 'Wingardium Leviosa', 'Protego (parry)', 'Petrificus Totalus stealth take-down'],
      },
      {
        name: 'Combat Plants & Tools',
        items: ['Mandrake', 'Venomous Tentacula', 'Chinese Chomping Cabbage', 'Fanged Tentacula', 'Edurus Potion', 'Maxima Potion', 'Wiggenweld Potion'],
      },
      {
        name: 'Ancient Magic Abilities',
        items: ['Ancient Magic Throw', 'Ancient Magic Detection', 'Ancient Magic Bursts', 'Talents (active + passive upgrades)'],
      },
    ],
  },

  map: {
    intro:
      'The game is set across Hogwarts Castle, the surrounding Scottish Highlands, Hogsmeade Village, and ~12 outlying hamlets. Below is the world map by region.',
    regions: [
      { name: 'Hogwarts Castle',     desc: 'The school itself · common rooms, classrooms, Room of Requirement.' },
      { name: 'Hogwarts Grounds',    desc: 'Greenhouses, Quidditch Pitch, Black Lake shore.' },
      { name: 'Hogsmeade Village',   desc: 'Three Broomsticks, Honeydukes, Tomes and Scrolls, Spintwitches.' },
      { name: 'Forbidden Forest',    desc: 'Centaur tribes, acromantulas, and Dark Wizard hideouts.' },
      { name: 'Highlands (open world)', desc: 'Rolling moor connecting every outlying region.' },
      { name: 'North Ford Bog',      desc: 'Marshland north of the castle · early-game roaming.' },
      { name: 'Coastal Cavern',      desc: 'Sea-cliff cave network for one of the goblin missions.' },
      { name: 'Cragcroft',           desc: 'Small lakeside hamlet · brooms and curiosities.' },
      { name: 'Feldcroft',           desc: 'Sebastian and Ominis\'s hometown · the Gaunt shack nearby.' },
      { name: 'Marunweem Lake',      desc: 'Waterfront hamlet to the south.' },
      { name: 'Manor Cape',          desc: 'Coastal manor zone · poacher hideouts.' },
      { name: 'South Sea Bog',       desc: 'Southern marshland · troll territory.' },
      { name: 'Pitt-Upon-Ford',      desc: 'River-fork settlement · merchants and crafters.' },
      { name: 'Ranrok\'s Lair',      desc: 'Subterranean goblin stronghold · the endgame dungeon.' },
    ],
  },

  news: {
    intro:
      'Major dated milestones for Hogwarts Legacy since its February 2023 launch — ports, patches, and the post-launch content drops.',
    entries: [
      { date: '2023-02-10', title: 'Hogwarts Legacy launches on PS5 / Xbox Series / PC',
        desc: 'Best-selling game of 2023 · 24M copies in the first year.' },
      { date: '2023-04-04', title: 'PS4 / Xbox One launch',
        desc: 'Delayed last-gen versions ship with reduced fidelity.' },
      { date: '2023-06-06', title: 'PlayStation-exclusive content sunset',
        desc: 'The "Haunted Hogsmeade Shop" quest released for all platforms.' },
      { date: '2023-11-14', title: 'Nintendo Switch launch',
        desc: 'Avalanche\'s port with reduced fidelity and modified beast catalogue.' },
      { date: '2024-09-05', title: 'PS5 Pro patch',
        desc: 'Adds dedicated Pro mode at higher resolution and ray tracing.' },
      { date: '2025-01-22', title: 'Photo Mode + free cosmetic pack',
        desc: 'Free Patch 1.10 adds photo mode and an Owl Post cosmetic set.' },
      { date: '2026-03-14', title: 'Hogwarts Legacy 2 announced',
        desc: 'Avalanche confirms sequel · targeting late 2027.' },
    ],
  },

  features: {
    intro:
      'Hogwarts Legacy gives the player a full RPG sandbox built on 1890s Hogwarts — house selection, spell combat, broom flying, the Room of Requirement, and a Dark Arts moral branch.',
    entries: [
      { title: 'Sorting Hat + Wand Customisation', desc: 'Choose your house and shape your wand at Ollivanders.' },
      { title: '4 House Common Rooms',         desc: 'Gryffindor, Slytherin, Hufflepuff, Ravenclaw · each fully explorable.' },
      { title: 'Class Lessons',                desc: 'Charms, Potions, Herbology, DADA, Astronomy, Beasts — gated story progression.' },
      { title: 'Combat System',                desc: 'Spell-tier system + spell-set hotbar · combos, parries, and Ancient Magic finishers.' },
      { title: 'Talent Trees',                 desc: 'Five branches — Spells, Stealth, Dark Arts, Core, Room of Requirement.' },
      { title: 'Broom Flying',                 desc: 'Customisable brooms with speed upgrades from Spintwitches.' },
      { title: 'Mounts',                       desc: 'Thestral / Hippogriff / Graphorn flying mounts unlocked through quests.' },
      { title: 'Room of Requirement',          desc: 'Personalised workspace · potions station, conjuration spellcraft, beast vivariums.' },
      { title: 'Beasts & Vivariums',           desc: 'Capture 12 magical beast species and breed them for materials.' },
      { title: 'Ancient Magic Power',          desc: 'Story-driven super-power · finishes enemies and triggers environmental kills.' },
      { title: 'Sebastian\'s Relationship Path', desc: 'Three Unforgivable Curses unlocked through his side questline.' },
      { title: 'Hogsmeade Shopping',           desc: 'Buy potions, gear, spell upgrades, broom mods, and cosmetics.' },
      { title: 'Photo Mode (1.10+)',           desc: 'Filters, frames, and pose options · added post-launch.' },
      { title: 'No Quidditch',                 desc: 'Quidditch was cut from launch · still no plans to add it back.' },
    ],
  },

  missions: {
    intro:
      'The main story runs roughly 35 quests across four trial chapters. Below are the marquee main quests in story order — plus the major relationship side quests with Sebastian, Natty, and Poppy.',
    chapters: [
      {
        name: 'Prologue',
        setting: 'A magical attack on a coach delivers the player to Hogwarts as a 5th-year transfer.',
        missions: [
          { name: 'The Path to Hogwarts' },
          { name: 'Welcome to Hogwarts' },
          { name: 'The Sorting Ceremony' },
        ],
      },
      {
        name: 'Early Year — First Lessons',
        setting: 'Class instruction unlocks the core spells while Professor Fig sets up the larger quest.',
        missions: [
          { name: 'Charms Class' },
          { name: 'Defence Against the Dark Arts Class' },
          { name: 'Welcome to Hogsmeade' },
          { name: 'The Locket' },
          { name: 'Map Chamber' },
        ],
      },
      {
        name: 'The Four Trials',
        setting: 'The Keepers — Percival, Charles, Niamh, San Bakar — each gate the central mystery behind a trial.',
        missions: [
          { name: 'Percival Rackham\'s Trial' },
          { name: 'Charles Rookwood\'s Trial' },
          { name: 'Niamh Fitzgerald\'s Trial' },
          { name: 'San Bakar\'s Trial' },
        ],
      },
      {
        name: 'Sebastian\'s Side Path',
        setting: 'Slytherin-only optional questline · ends with the Unforgivable Curses.',
        missions: [
          { name: 'In the Shadow of the Bloodline' },
          { name: 'In the Shadow of the Study' },
          { name: 'In the Shadow of the Estate' },
          { name: 'In the Shadow of the Mountain' },
          { name: 'In the Shadow of the Relic' },
          { name: 'In the Shadow of Time' },
          { name: 'In the Shadow of Fate (finale choice)' },
        ],
      },
      {
        name: 'Natty Onai\'s Side Path',
        setting: 'Investigative journalism arc · uncovers a poacher network.',
        missions: [
          { name: 'Welcome to Hogsmeade (with Natty)' },
          { name: 'Prisoner of Love' },
          { name: 'Poacher\'s Moon' },
          { name: 'The High Keep' },
          { name: 'Rescuing Rococo' },
        ],
      },
      {
        name: 'Poppy Sweeting\'s Side Path',
        setting: 'Magical beasts arc · poacher takedown.',
        missions: [
          { name: 'The Plight of the House-Elf' },
          { name: 'The Lost Astrolabes' },
          { name: 'Poacher Camp Investigation' },
          { name: 'San Bakar\'s Trial (linked)' },
        ],
      },
      {
        name: 'Endgame',
        setting: 'Ranrok\'s rebellion threatens to weaponise Ancient Magic · the final confrontation.',
        missions: [
          { name: 'The Polyjuice Plot' },
          { name: 'The Final Repository' },
          { name: 'The Battle in the Clock Tower' },
          { name: 'Restoring the Floo Network (post-game)' },
        ],
      },
    ],
  },

  animals: {
    intro:
      'Hogwarts Legacy has a deep magical beast roster — 12 capturable species with breeding for materials, plus 10+ hostile creatures and 5+ named bosses across the Highlands.',
    groups: [
      {
        name: 'Friendly · Capturable Beasts',
        items: ['Hippogriff', 'Thestral', 'Mooncalf', 'Niffler', 'Fwooper', 'Diricawl', 'Graphorn', 'Phoenix', 'Unicorn', 'Jobberknoll', 'Puffskein', 'Kneazle'],
      },
      {
        name: 'Hostile · Roaming Threats',
        items: ['Mountain Troll', 'Forest Troll', 'River Troll', 'Acromantula (giant spider)', 'Dugbog', 'Erkling', 'Inferi', 'Werewolf', 'Centaur (some hostile)', 'Dark Wizard'],
      },
      {
        name: 'Boss Beasts',
        items: ['Spider Matriarch', 'Mountain Troll Boss', 'Dragon (single fight)', 'Pensieve Guardian', 'Ashwinder Boss'],
      },
      {
        name: 'Beast Materials (Vivarium Yields)',
        items: ['Hippogriff Feathers', 'Thestral Hair', 'Niffler Fur', 'Mooncalf Fur', 'Diricawl Feathers', 'Graphorn Horn (rare)', 'Phoenix Feathers (rarest)', 'Unicorn Horn'],
      },
    ],
  },

  activities: {
    intro:
      'Outside the main story, the world fills with 100+ side quests, dozens of collectible chains, and the deep Room of Requirement crafting loop. Below are the named activity systems.',
    entries: [
      { name: 'Side Quests',           desc: '~80 named quests from NPCs across Hogwarts, Hogsmeade, and the Highlands.' },
      { name: 'Field Guide Pages',     desc: '~150 pages collected by waving Revelio across the castle and grounds.' },
      { name: 'Merlin Trials',         desc: '95 environmental puzzles across the Highlands · unlock more gear slots.' },
      { name: 'Demiguise Statues',     desc: '28 hidden statues · turn in to upgrade Alohomora to Level 3.' },
      { name: 'Treasure Vaults',       desc: '30+ caves and crypts across the world · contain gear and lore.' },
      { name: 'Ancient Magic Hotspots',desc: 'World-stat trackers · activate at named landmarks for buffs.' },
      { name: 'Daedalian Keys',        desc: '16 flying keys to chase across Hogwarts · reward unique House cosmetics.' },
      { name: 'Beast Capture & Breeding', desc: '12 species to catch (Nab-Sack) and breed in Room of Requirement vivariums.' },
      { name: 'Mallowsweet Leaves',    desc: 'Required to activate astronomy tables across the world.' },
      { name: 'Astronomy Tables',      desc: '15 tables to find · unlock Floo Flames after constellation puzzles.' },
      { name: 'Floo Flames (Fast Travel)',desc: '180+ fast-travel points unlocked by exploration.' },
      { name: 'Room of Requirement Crafting', desc: 'Potion brewing, plant cultivation, conjuration, and beast vivariums.' },
      { name: 'Combat Challenges',     desc: 'Tiered Crucible arenas for combat completionists.' },
      { name: 'Exploration Challenges',desc: 'Tiered progression for visiting locations and clearing camps.' },
      { name: 'Room of Requirement Challenges', desc: 'Conjuration / cosmetic challenges in your personal workspace.' },
      { name: 'Side Quest Challenges', desc: 'Tiered for completing named side quests.' },
    ],
  },

  artworks: {
    intro:
      'Avalanche and Portkey released a steady wave of stylised key art across 2020–2023. Below are the most circulated promotional plates from the launch campaign.',
    entries: [
      { title: 'Reveal Key Art',                 desc: '2020 State of Play · castle silhouette under aurora-lit skies.' },
      { title: 'Standard Edition Cover',         desc: 'Student in front of Hogwarts holding a glowing wand.' },
      { title: 'House Lineup — Gryffindor',      desc: 'Promotional plate showing the Gryffindor common room.' },
      { title: 'House Lineup — Slytherin',       desc: 'Slytherin underground common room art.' },
      { title: 'House Lineup — Hufflepuff',      desc: 'Hufflepuff barrel-entrance common room art.' },
      { title: 'House Lineup — Ravenclaw',       desc: 'Ravenclaw tower common room art.' },
      { title: 'Sebastian Sallow Portrait',      desc: 'Most-used companion plate.' },
      { title: 'Ranrok Reveal',                  desc: 'Goblin rebellion antagonist art used in the launch trailer.' },
      { title: 'Hogsmeade in Snow',              desc: 'Wide horizontal piece used in pre-launch marketing.' },
      { title: 'Hippogriff Flight',              desc: 'Promotional art for the Highland exploration.' },
    ],
  },

  videos: {
    intro:
      'Every major Hogwarts Legacy trailer from the 2020 State of Play reveal through post-launch updates. Links go to the official Hogwarts Legacy YouTube channel.',
    entries: [
      { title: 'Official Reveal Trailer',  date: '2020-09-16', href: 'https://www.youtube.com/watch?v=1O6Qstncpnc' },
      { title: 'State of Play Gameplay',   date: '2022-03-17', href: 'https://www.youtube.com/watch?v=1OGS41dr_4o' },
      { title: 'Showcase Presentation',    date: '2022-12-14', href: 'https://www.youtube.com/watch?v=z4XfjvB1xWo' },
      { title: 'Official Launch Trailer',  date: '2023-02-03', href: 'https://www.youtube.com/watch?v=1O6Qstncpnc' },
      { title: 'Cinematic Trailer',        date: '2023-01-27', href: 'https://www.youtube.com/watch?v=t-MDsBO3-Mc' },
      { title: 'PS4 / Xbox One Launch',    date: '2023-04-03', href: 'https://www.youtube.com/watch?v=ymdvvKBoQfg' },
      { title: 'Switch Launch Trailer',    date: '2023-11-10', href: 'https://www.youtube.com/watch?v=p9OcdrqlAKE' },
    ],
  },

  soundtrack: {
    searchTitle: 'Hogwarts Legacy',
    intro:
      'The Hogwarts Legacy score is composed by Chuck Myers, J Scott Rakozy, and Peter Murray. The official soundtrack (released alongside launch in February 2023) clocks 60+ tracks across Hogwarts, Hogsmeade, the Highlands, and the four house common rooms.',
    groups: [
      {
        name: 'Main Themes',
        tracks: [
          { title: 'Hogwarts Legacy Overture',         artist: 'Chuck Myers' },
          { title: 'Arrival at Hogwarts',              artist: 'Chuck Myers' },
          { title: 'The Sorting Ceremony',              artist: 'Peter Murray' },
          { title: 'Final Battle in the Clock Tower',   artist: 'Chuck Myers' },
        ],
      },
      {
        name: 'House Common Rooms',
        tracks: [
          { title: 'Gryffindor Common Room',            artist: 'J Scott Rakozy' },
          { title: 'Slytherin Common Room',             artist: 'J Scott Rakozy' },
          { title: 'Hufflepuff Common Room',            artist: 'J Scott Rakozy' },
          { title: 'Ravenclaw Common Room',             artist: 'J Scott Rakozy' },
        ],
      },
      {
        name: 'Area Themes',
        tracks: [
          { title: 'Hogwarts Castle',                   artist: 'Chuck Myers' },
          { title: 'Hogsmeade in Winter',                artist: 'Peter Murray' },
          { title: 'The Highlands',                     artist: 'J Scott Rakozy' },
          { title: 'Forbidden Forest',                  artist: 'Peter Murray' },
          { title: 'Room of Requirement',               artist: 'Chuck Myers' },
        ],
      },
      {
        name: 'Combat & Boss Cues',
        tracks: [
          { title: 'Battle for the Highlands',          artist: 'Chuck Myers' },
          { title: 'Dark Wizards Approach',              artist: 'Peter Murray' },
          { title: 'Ranrok Rises',                       artist: 'Chuck Myers' },
          { title: 'The Final Repository',               artist: 'Chuck Myers' },
          { title: 'Pensieve Guardian',                  artist: 'J Scott Rakozy' },
        ],
      },
    ],
  },
};

export default content;
