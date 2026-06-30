/**
 * Deep content for Diablo IV (base + Vessel of Hatred expansion).
 * Factual public data + original commentary.
 *
 * Skipped categories (don't apply): vehicles, animals, properties,
 * cheats-ps5 / cheats-xbox / cheats-pc — Blizzard's modern ARPGs ship
 * without an official cheat system.
 */

import type { GameContent } from './types';

const content: GameContent = {
  editions: {
    intro:
      'Diablo IV ships in a tiered model that mirrors Blizzard\'s long-running expansion pattern. The base game launched in June 2023 · the Vessel of Hatred expansion (Oct 2024) added the Spiritborn class and the Nahantu region.',
    tiers: [
      {
        name: 'Standard Edition',
        priceUSD: 39.99,
        bullets: [
          'Base campaign · 5 of 6 classes',
          'Eternal Realm + Seasonal Realm access',
          'PS5 / PS4 / Xbox Series / Xbox One / PC (Battle.net + Steam)',
          'Cross-progression across all platforms',
        ],
      },
      {
        name: 'Vessel of Hatred Expansion',
        priceUSD: 39.99,
        recommended: true,
        bullets: [
          'Requires the base game',
          'Spiritborn — the 6th playable class',
          'Nahantu — fully new jungle region',
          'New endgame system: the Dark Citadel raid',
          'Mercenaries system + new runewords',
        ],
      },
      {
        name: 'Diablo IV: Vessel of Hatred Ultimate',
        priceUSD: 89.99,
        bullets: [
          'Base game + Vessel of Hatred bundled',
          '4-day early access to the expansion',
          'Spectral Hound mount + Spectral Hound Armor',
          'Crypt Hunter cosmetic transmog',
          'Spiritborn Heritage of the Lost Cosmetic',
          'Battle Pass token + Premium pass for first season',
        ],
      },
    ],
    notes: [
      'Always-online · no offline mode on any platform.',
      'Seasons reset character progression every ~3 months · Eternal Realm preserves your characters.',
      'Game Pass deal: Diablo IV is on Xbox Game Pass since March 2024.',
      'PS5 Pro patch shipped in November 2024 · adds dedicated 60fps + 4K mode.',
    ],
  },

  characters: {
    intro:
      'Diablo IV has 6 playable classes — choose one as your protagonist. Below is the class roster plus the major NPCs and antagonists you\'ll meet across the campaign and Vessel of Hatred.',
    roster: [
      /* Classes */
      { name: 'Barbarian',  role: 'Class · weapon-swapping tank with the Arsenal system unique to Diablo IV.' },
      { name: 'Druid',      role: 'Class · shape-shifts between human, werewolf, and werebear with earth & storm magic.' },
      { name: 'Necromancer', role: 'Class · raises skeletons + golems · the Book of the Dead minion customisation.' },
      { name: 'Rogue',      role: 'Class · melee + ranged hybrid · imbuements add shadow / cold / poison damage.' },
      { name: 'Sorcerer',   role: 'Class · classic three-element caster · Enchantment slots make any spell passive.' },
      { name: 'Spiritborn', role: 'Class · Vessel of Hatred · jaguar / eagle / gorilla / centipede spirit guardians.' },
      /* Story NPCs & villains */
      { name: 'Lilith',     role: 'Daughter of Hatred · main antagonist of the base campaign.' },
      { name: 'Inarius',    role: 'Fallen Angel and Lilith\'s former partner · creator of Sanctuary.' },
      { name: 'Mephisto',   role: 'Lord of Hatred · the Vessel of Hatred expansion\'s puppet master.' },
      { name: 'Neyrelle',   role: 'Young Horadric scholar · carries Mephisto\'s soulstone across two campaigns.' },
      { name: 'Donan',      role: 'Senior Horadric mentor · campaign quest-giver and exposition anchor.' },
      { name: 'Lorath Nahr', role: 'Last of the Horadrim · introduces the player to the order.' },
      { name: 'Vigo',       role: 'Mercenary · joins the Iron Wolves campaign in Vessel of Hatred.' },
      { name: 'Aldkin',     role: 'Mercenary · child cursed with demonic powers.' },
      { name: 'Subo',       role: 'Mercenary · scout and tracker from Nahantu.' },
      { name: 'Raheir',     role: 'Mercenary · Spear-wielding Spiritborn tank.' },
      { name: 'Akarat',     role: 'Prophet and folk-religion figure · referenced across the world.' },
      { name: 'Rathma',     role: 'Necromancer order founder · son of Lilith and Inarius.' },
      { name: 'Astaroth',   role: 'Lesser Evil · appears in Hatred Rising endgame quest.' },
      { name: 'Andariel',   role: 'Maiden of Anguish · referenced and seeded for future expansions.' },
    ],
  },

  weapons: {
    intro:
      'Diablo IV uses item-class weapons that scale to your character\'s build. Each class has weapon-type restrictions (the Sorcerer can\'t equip Two-Handed Maces, the Druid can\'t use Swords, etc.). Below is the loadout grouped by weapon type.',
    groups: [
      {
        name: 'One-Handed Melee',
        items: [
          'Sword',
          'Mace',
          'Axe',
          'Dagger',
        ],
      },
      {
        name: 'Two-Handed Melee',
        items: [
          'Two-Handed Sword',
          'Two-Handed Mace',
          'Two-Handed Axe',
          'Polearm (Spiritborn signature)',
          'Quarterstaff (Druid / Necromancer)',
        ],
      },
      {
        name: 'Ranged',
        items: [
          'Bow',
          'Crossbow',
          'Hand Crossbow (Rogue dual-wield)',
          'Throwing Weapons (Barbarian)',
        ],
      },
      {
        name: 'Off-Hand / Focus',
        items: [
          'Shield',
          'Focus (Sorcerer / Necromancer)',
          'Totem (Druid)',
        ],
      },
      {
        name: 'Item Power Tiers',
        items: [
          'Normal (white)',
          'Magic (blue)',
          'Rare (yellow)',
          'Legendary (orange · with Aspect)',
          'Unique (deep orange · class-specific)',
          'Mythic Unique (red · post-launch endgame)',
          'Ancestral (level-cap version)',
        ],
      },
      {
        name: 'Defining Mechanics',
        items: [
          'Aspects (Codex of Power slot system)',
          'Imprinted Legendaries (extract + reapply)',
          'Tempering (DLC affixes added at the Blacksmith)',
          'Masterworking (8 upgrade tiers post-65)',
          'Runewords (Vessel of Hatred Rune + Effect system)',
        ],
      },
    ],
  },

  map: {
    intro:
      'Sanctuary is the largest map in any Diablo game · six fully open zones connected by waypoints. Each region has its own atmosphere, Stronghold roster, and Helltide cycle.',
    regions: [
      { name: 'Fractured Peaks',   desc: 'Snowy mountain starting region · Kyovashad is the campaign hub.' },
      { name: 'Scosglen',           desc: 'Coastal Druid homeland · Túr Dúlra is the regional capital.' },
      { name: 'Dry Steppes',        desc: 'Arid Barbarian homeland · Ked Bardu is the Iron Wolves base.' },
      { name: 'Hawezar',            desc: 'Swamp-and-bog region · Zarbinzet hub · snake cult quests.' },
      { name: 'Kehjistan',          desc: 'Eastern desert civilisation · Gea Kul port + Caldeum.' },
      { name: 'Nahantu (DLC)',      desc: 'Vessel of Hatred jungle expansion · Torajan home of the Spiritborn.' },
      { name: 'The Burning Hells',  desc: 'Endgame zone · The Pit and the Infernal Hordes activity arenas.' },
    ],
  },

  news: {
    intro:
      'Major dated milestones for Diablo IV since its June 2023 launch · seasonal patches, the Vessel of Hatred expansion, and platform updates.',
    entries: [
      { date: '2023-06-06', title: 'Diablo IV launches on all platforms',
        desc: 'Blizzard\'s fastest-selling title ever · $666M in 5 days.' },
      { date: '2023-07-20', title: 'Season 1 — Season of the Malignant',
        desc: 'Malignant Hearts socketable system + new Battle Pass model.' },
      { date: '2024-01-23', title: 'Season 3 — Season of the Construct',
        desc: 'Vault dungeons + Seneschal companion · the first redemption-arc season.' },
      { date: '2024-03-28', title: 'Diablo IV joins Xbox Game Pass',
        desc: 'Microsoft × Blizzard deal · day-one Game Pass for future expansions.' },
      { date: '2024-05-14', title: 'Season 4 — Loot Reborn',
        desc: 'Itemisation overhaul · Tempering + Masterworking systems introduced.' },
      { date: '2024-10-08', title: 'Vessel of Hatred expansion releases',
        desc: 'Spiritborn class · Nahantu region · Dark Citadel raid · Runewords.' },
      { date: '2024-10-08', title: 'Spiritborn class breaks the meta',
        desc: 'Spiritborn dominates leaderboards · subsequent patches dial down the Quill skill scaling.' },
      { date: '2024-11-14', title: 'PS5 Pro patch',
        desc: 'Dedicated Pro performance and visual modes added free for existing owners.' },
      { date: '2025-01-21', title: 'Season 7 — Season of Witchcraft',
        desc: 'Witch Powers · new occult Whispers · adds Headhunts world activity.' },
      { date: '2026-02-25', title: 'Second expansion teaser',
        desc: 'BlizzCon Online · second Diablo IV expansion confirmed for late 2026.' },
    ],
  },

  features: {
    intro:
      'The systems that define Diablo IV as a modern ARPG · open-world Sanctuary, the Paragon Board for endgame, and the seasonal live-service loop that resets every ~3 months.',
    entries: [
      { title: 'Open World Sanctuary', desc: 'Six fully open zones · ride between them seamlessly with World Tiers.' },
      { title: 'World Tier Difficulty', desc: 'Choose between Normal / Hard / Nightmare / Torment · scales drops + difficulty.' },
      { title: 'Paragon Board',         desc: 'Post-50 endgame progression · glyph sockets and rare node clusters per class.' },
      { title: 'Skill Tree',            desc: 'Per-class branching skill tree with active + passive + key passive nodes.' },
      { title: 'Aspect System',         desc: 'Codex of Power · imprint legendary affixes onto rare items at the Occultist.' },
      { title: 'Tempering & Masterworking', desc: 'Season 4 itemisation overhaul · add affixes at smith, upgrade 8 times.' },
      { title: 'Seasonal Realm',        desc: 'Fresh character every ~3 months · season-specific mechanics + 90-tier battle pass.' },
      { title: 'Helltides',             desc: 'Hour-long Hell-corruption events · Cinder currency for Tortured Gifts.' },
      { title: 'Whispers of the Dead',  desc: 'Daily bounty-style world tasks · turn in for Caches at the Tree.' },
      { title: 'Nightmare Dungeons',    desc: 'Endgame difficulty modifiers + Tier scaling · main XP source post-50.' },
      { title: 'The Pit (Season 4+)',   desc: 'Solo timed difficulty ladder · drops Masterworking materials.' },
      { title: 'Infernal Hordes',       desc: 'Wave-based endgame arena with bargain offerings between rounds.' },
      { title: 'Mercenaries (DLC)',     desc: '4 hireable companions · active + reinforcement slots, customisable.' },
      { title: 'Cross-Play + Cross-Progression', desc: 'Single character carries across PS / Xbox / PC.' },
      { title: 'Couch Co-op (Consoles)', desc: 'Local 2-player split-screen on PS5 / Xbox Series.' },
    ],
  },

  missions: {
    intro:
      'The base campaign is six acts plus a prologue · roughly 35 hours on first playthrough. Vessel of Hatred adds a 12-hour standalone storyline that fits between Acts 6 and the post-game.',
    chapters: [
      {
        name: 'Prologue · Wandering',
        setting: 'Snowy passes of Fractured Peaks · the player meets Lorath and learns Lilith has returned.',
        missions: [
          { name: 'A Cold and Iron Faith' },
          { name: 'A Master\'s Touch' },
        ],
      },
      {
        name: 'Act 1 · A Cold and Iron Faith',
        setting: 'Fractured Peaks · Kyovashad as the regional hub · Inarius and the Cathedral of Light.',
        missions: [
          { name: 'The Knight Penitent' },
          { name: 'Light\'s Refuge' },
          { name: 'The Wayward Daughter' },
          { name: 'In Service to the Light' },
          { name: 'The Cost of Knowledge' },
        ],
      },
      {
        name: 'Act 2 · The Knife Twists Again',
        setting: 'Scosglen · Druid homeland · the Druids of Túr Dúlra.',
        missions: [
          { name: 'The Sound of Silence' },
          { name: 'The Knife Twists Again' },
          { name: 'Beneath Twisted Boughs' },
          { name: 'The Light Looks Upon You' },
          { name: 'Apex of Misery' },
        ],
      },
      {
        name: 'Act 3 · The Making of Monsters',
        setting: 'Dry Steppes · the Iron Wolves and Donan\'s sanctum.',
        missions: [
          { name: 'A Bitter Reunion' },
          { name: 'The Pact' },
          { name: 'Donan\'s Favour' },
          { name: 'Khejistan-Bound' },
        ],
      },
      {
        name: 'Act 4 · A Gathering Storm',
        setting: 'Hawezar swamps and the snake cult of Lilith\'s Worshippers.',
        missions: [
          { name: 'A Gathering Storm' },
          { name: 'The Loom' },
          { name: 'In Desolation\'s Wake' },
        ],
      },
      {
        name: 'Act 5 · The Beast in the Ice',
        setting: 'Return to Fractured Peaks for the final Cathedral confrontation.',
        missions: [
          { name: 'The Beast in the Ice' },
          { name: 'Mother\'s Watch' },
        ],
      },
      {
        name: 'Act 6 · A Place of Hope',
        setting: 'Final confrontation with Lilith and the prelude to Vessel of Hatred.',
        missions: [
          { name: 'The Damned' },
          { name: 'Wayward' },
          { name: 'Dance of the Makers' },
          { name: 'Loose Threads · ending sequence' },
        ],
      },
      {
        name: 'Vessel of Hatred (DLC)',
        setting: 'Nahantu jungle · Neyrelle carries Mephisto\'s soulstone south.',
        missions: [
          { name: 'A Heart of Hatred' },
          { name: 'The Last Hope' },
          { name: 'A Veiled Threat' },
          { name: 'A Sliver of Hope' },
          { name: 'Vessel of Hatred · finale' },
        ],
      },
    ],
  },

  activities: {
    intro:
      'Endgame Diablo IV is a buffet of rotating activity loops · pick the system that suits the build you\'re grinding for. Below are the named activities and the loot they target.',
    entries: [
      { name: 'Helltides',             desc: '60-min Hell-corruption events · Cinder currency + Tortured Gifts drop targeted gear.' },
      { name: 'Whispers of the Dead',  desc: 'Daily bounty-board · 10 Whispers → Cache at the Tree of Whispers.' },
      { name: 'Nightmare Dungeons',    desc: 'Sigil-keyed dungeons with stacking modifiers · main glyph XP source.' },
      { name: 'The Pit (Endgame)',     desc: 'Solo timed depth ladder · drops Masterworking materials + Resplendent Sparks.' },
      { name: 'Infernal Hordes',       desc: 'Wave-survival arena · bargain offerings shape your final boss reward.' },
      { name: 'Dark Citadel (DLC)',    desc: 'First Diablo IV raid · 4-player coordinated boss fights.' },
      { name: 'Strongholds',           desc: '15 reclaim-and-clear locations across the world map · permanently unlock waypoints.' },
      { name: 'World Bosses',          desc: 'Rotating open-world bosses (Wandering Death, Avarice, Ashava) · scheduled spawns.' },
      { name: 'Legion Events',         desc: 'Hourly portal-defence events · public coordinated waves.' },
      { name: 'Tree of Whispers',      desc: 'The post-campaign quest board · turns Grim Favors into Caches.' },
      { name: 'Headrooms (S7+)',       desc: 'New Headhunts mechanic · hunt named demons for unique drops.' },
      { name: 'Mercenary Reputation (DLC)', desc: 'Build mercenary relationships · unlocks unique armoury inventories.' },
      { name: 'Altars of Lilith',      desc: '160 permanent Renown-granting statues across Sanctuary.' },
      { name: 'PvP — Fields of Hatred',desc: 'Two flagged-PvP zones (one in Kehjistan, one in Dry Steppes).' },
      { name: 'Seasonal Realm Theme',  desc: 'Each season adds a temporary mechanic · Vampiric Powers, Witch Powers, Construct Companions etc.' },
    ],
  },

  artworks: {
    intro:
      'Blizzard released stylized gothic key art across 2019–2024 with a tonal shift to red-and-gold for the Vessel of Hatred expansion. Below are the major plates published on the official site.',
    entries: [
      { title: 'Lilith Coronation',        desc: 'BlizzCon 2019 reveal · Lilith on the throne of bones · the iconic main art.' },
      { title: 'Daughter of Hatred',       desc: 'Pre-launch close-up portrait of Lilith · used on collector\'s editions.' },
      { title: 'Inarius vs Lilith',        desc: 'Cathedral confrontation art used on Act 5 marketing.' },
      { title: 'Wanderer Silhouette',      desc: 'Classless protagonist key art used in the campaign trailer.' },
      { title: 'Class Lineup',             desc: 'All 5 launch classes posed together · pre-launch hero shot.' },
      { title: 'Spiritborn Reveal',        desc: 'Vessel of Hatred · the Spiritborn with the Quill spear and Jaguar spirit.' },
      { title: 'Mephisto Returns',         desc: 'VoH cover art · Mephisto silhouette with the soulstone.' },
      { title: 'Nahantu Vista',            desc: 'Jungle environment piece used on the expansion press kit.' },
      { title: 'Neyrelle Portrait',        desc: 'Bridge character between the base game and VoH.' },
      { title: 'Iron Wolves Banner',       desc: 'Mercenary faction key art used in the in-game tutorial.' },
    ],
  },

  videos: {
    intro:
      'Every major Diablo IV trailer · base game and Vessel of Hatred. Links go to the official Diablo YouTube channel.',
    entries: [
      { title: 'BlizzCon 2019 Reveal',        date: '2019-11-01', href: 'https://www.youtube.com/watch?v=0gp-zVZNAxs' },
      { title: 'Lilith Cinematic',            date: '2019-11-01', href: 'https://www.youtube.com/watch?v=9bN-3xXgDIQ' },
      { title: 'By Three They Come (Cinematic)', date: '2023-04-25', href: 'https://www.youtube.com/watch?v=jrPjMrh_OnQ' },
      { title: 'Launch Trailer',              date: '2023-06-01', href: 'https://www.youtube.com/watch?v=NCwxgncDOFw' },
      { title: 'Season 4 — Loot Reborn',      date: '2024-04-30', href: 'https://www.youtube.com/watch?v=qV6vgWB7BHs' },
      { title: 'Vessel of Hatred Cinematic',  date: '2024-09-28', href: 'https://www.youtube.com/watch?v=pT8Z6oNlF38' },
      { title: 'Vessel of Hatred Launch',     date: '2024-10-08', href: 'https://www.youtube.com/watch?v=mUEY6BeAcwk' },
      { title: 'Season 7 Witchcraft Reveal',  date: '2025-01-08', href: 'https://www.youtube.com/watch?v=Z5oTNyR-vdY' },
    ],
  },

  soundtrack: {
    searchTitle: 'Diablo IV',
    intro:
      'The Diablo IV score is led by Ted Reedy and Adam Burgess at Blizzard\'s in-house music team, with additional cues by Tipper Pearson and Allison Theus. The Vessel of Hatred expansion brought in a second wave of tribal-influenced cues for the Nahantu jungle.',
    groups: [
      {
        name: 'Main Themes',
        tracks: [
          { title: 'Diablo IV Main Theme',          artist: 'Ted Reedy' },
          { title: 'The Wanderer\'s Theme',          artist: 'Ted Reedy' },
          { title: 'Lilith\'s Theme',                artist: 'Adam Burgess' },
          { title: 'Inarius\'s Theme',               artist: 'Ted Reedy' },
        ],
      },
      {
        name: 'Area Themes — Base Game',
        tracks: [
          { title: 'Fractured Peaks',                artist: 'Ted Reedy' },
          { title: 'Scosglen',                       artist: 'Adam Burgess' },
          { title: 'Dry Steppes',                    artist: 'Tipper Pearson' },
          { title: 'Hawezar',                        artist: 'Allison Theus' },
          { title: 'Kehjistan',                      artist: 'Ted Reedy' },
        ],
      },
      {
        name: 'Boss & Cinematic Cues',
        tracks: [
          { title: 'Astaroth — Lord of Sin',         artist: 'Ted Reedy' },
          { title: 'The Beast in the Ice',           artist: 'Adam Burgess' },
          { title: 'Echo of Lilith (Uber)',          artist: 'Ted Reedy' },
          { title: 'Andariel — Awakening',           artist: 'Adam Burgess' },
          { title: 'Duriel — Lord of Pain',          artist: 'Tipper Pearson' },
        ],
      },
      {
        name: 'Vessel of Hatred · Nahantu',
        tracks: [
          { title: 'Nahantu Jungle Theme',           artist: 'Ted Reedy / Hyrum Lewis' },
          { title: 'Mephisto Rising',                artist: 'Adam Burgess' },
          { title: 'Spiritborn Path',                artist: 'Hyrum Lewis' },
          { title: 'Dark Citadel · Raid Theme',      artist: 'Ted Reedy' },
        ],
      },
    ],
  },

  /* ───────── REQUIREMENTS (consoles + PC builds + completion time) ───────── */
  requirements: {
    intro:
      'Diablo IV is always-online · the spec sheet is mostly about hitting smooth 60 fps in dense Helltides + Pit climbs, not graphical ceiling. The Vessel of Hatred expansion didn\'t move the requirements floor.',
    consoles: [
      {
        console: 'PlayStation',
        versions: 'PS4 · PS4 Pro · PS5 (native) · PS5 Pro (enhanced)',
        best: 'PS5 Pro: 4K 60 fps with PSSR upscaling',
        storage: '90 GB (with VoH expansion)',
        notes: [
          'Cross-progression on by default · use Battle.net to sync.',
          'Couch co-op for 2 supported on all consoles.',
          'Always-online · single-player still needs an internet connection.',
        ],
      },
      {
        console: 'Xbox',
        versions: 'Xbox One · Xbox Series X|S (native)',
        best: 'Xbox Series X: 4K 60 fps · Series S: 1440p 60 fps',
        storage: '90 GB',
        notes: [
          'On Xbox Game Pass since March 2024.',
          'Vessel of Hatred is included with Game Pass Ultimate.',
        ],
      },
    ],
    pcMin: {
      os: 'Windows 10 64-bit',
      cpu: 'Intel Core i5-2500K · AMD FX-8350',
      gpu: 'NVIDIA GTX 660 2 GB · AMD HD 7950 3 GB · Intel Arc A380',
      ram: '8 GB',
      vram: '2 GB',
      storage: '90 GB · SSD strongly recommended',
      expectedFps: '1080p 30 fps low',
    },
    pcRecommended: {
      os: 'Windows 10 / 11 64-bit',
      cpu: 'Intel Core i5-4670K · AMD Ryzen 5 1600',
      gpu: 'NVIDIA GTX 970 4 GB · AMD RX 470 4 GB',
      ram: '16 GB',
      vram: '4 GB',
      storage: '90 GB SSD',
      expectedFps: '1080p 60 fps high',
    },
    builds: [
      {
        tier: 'Budget',
        totalUSD: 730,
        targets: '1080p 60 fps high · couch co-op via Steam Big Picture',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 5 7600',                priceUSD: 180 },
          { label: 'Mobo', part: 'ASRock B650M-HDV',                priceUSD: 110 },
          { label: 'RAM',  part: '16 GB DDR5-5200 (2×8)',           priceUSD: 60 },
          { label: 'GPU',  part: 'AMD RX 7600 8 GB',                priceUSD: 230 },
          { label: 'SSD',  part: '1 TB Crucial P3 Plus NVMe',       priceUSD: 70 },
          { label: 'PSU',  part: 'Corsair CV650 (650W Bronze)',     priceUSD: 70 },
          { label: 'Case', part: 'Cooler Master MasterBox Q300L',   priceUSD: 50 },
        ],
        notes: 'D4 isn\'t demanding · any 2023+ GPU clears 60 fps high.',
      },
      {
        tier: 'Recommended',
        totalUSD: 1280,
        targets: '1440p 120 fps ultra · 8-player Pit runs without stuttering',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 5 9600X',                priceUSD: 280 },
          { label: 'Mobo', part: 'MSI B650 Tomahawk',                priceUSD: 170 },
          { label: 'RAM',  part: '32 GB DDR5-6000 (2×16)',           priceUSD: 120 },
          { label: 'GPU',  part: 'AMD RX 7700 XT 12 GB',             priceUSD: 420 },
          { label: 'SSD',  part: '1 TB WD SN850X NVMe',              priceUSD: 90 },
          { label: 'PSU',  part: 'Corsair RM650e (650W Gold)',       priceUSD: 80 },
          { label: 'Case', part: 'Fractal Pop Air',                  priceUSD: 75 },
          { label: 'Fan',  part: 'Thermalright Peerless Assassin',   priceUSD: 50 },
        ],
        notes: '1440p ultrawide is the optimal D4 viewport · this build hits 90+ fps there.',
      },
      {
        tier: 'High-end',
        totalUSD: 2200,
        targets: '4K 144 fps ultra · maxed shadows for late-game Spiritborn FX',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 7 9700X',                priceUSD: 380 },
          { label: 'Mobo', part: 'ASUS ROG Strix X870-A',            priceUSD: 290 },
          { label: 'RAM',  part: '32 GB DDR5-6400 CL30',             priceUSD: 140 },
          { label: 'GPU',  part: 'NVIDIA RTX 5070 Ti 16 GB',         priceUSD: 750 },
          { label: 'SSD',  part: '2 TB Samsung 990 Pro NVMe',        priceUSD: 165 },
          { label: 'PSU',  part: 'Corsair RM850e (850W Gold)',       priceUSD: 120 },
          { label: 'Case', part: 'Lian Li Lancool 207',              priceUSD: 100 },
          { label: 'Fan',  part: 'Arctic Liquid Freezer III 280',    priceUSD: 110 },
        ],
        notes: 'Diablo IV doesn\'t need this · but futures-proofs you for any 2027 ARPG release.',
      },
    ],
    completion: {
      mainStory: '25h',
      mainAndExtras: '45h',
      completionist: '80h',
      notes: [
        'Numbers are campaign + Vessel of Hatred only · endgame loot grind is effectively infinite.',
        'Each new season adds ~15 hours of seasonal mechanic content.',
      ],
    },
  },
};

export default content;
