/**
 * Deep content for Elden Ring (base game + Shadow of the Erdtree).
 * Factual public data + original commentary.
 *
 * Skipped categories (don't apply to a FromSoftware game):
 *   vehicles  — only Torrent the spectral horse
 *   animals   — covered by enemy / boss data instead
 *   properties — no real-estate system
 *   cheats    — From has no official cheat-code system
 */

import type { GameContent } from './types';

const content: GameContent = {
  editions: {
    intro:
      'Elden Ring shipped in four physical SKUs at launch (Feb 2022). The Shadow of the Erdtree DLC (June 2024) is treated by most reviewers as a full sequel — large enough to justify a separate purchase.',
    tiers: [
      {
        name: 'Standard Edition',
        priceUSD: 59.99,
        bullets: [
          'Base game · all six core regions',
          'Available on PS5 / PS4 / Xbox Series / Xbox One / PC',
          'Online multiplayer (co-op + invasions) included',
        ],
      },
      {
        name: 'Deluxe Edition',
        priceUSD: 79.99,
        bullets: [
          'Everything in Standard',
          'Digital art book',
          'Digital soundtrack',
          'No physical merchandise',
        ],
      },
      {
        name: 'Shadow of the Erdtree (DLC)',
        priceUSD: 39.99,
        recommended: true,
        bullets: [
          'Requires base game · reach Mohgwyn Palace first',
          'Land of Shadow — region the size of Limgrave + Liurnia combined',
          'New Scadutree fragment level system, 8 boss arenas',
          'Roughly 40–60 hours of new content',
        ],
      },
      {
        name: 'Collector\'s Edition',
        priceUSD: 189.99,
        bullets: [
          'Standard game (physical disc / digital code)',
          'Statue of Malenia, Blade of Miquella (~9 inches)',
          'Hardcover art book',
          'Steelbook case',
        ],
      },
    ],
    notes: [
      'A Premium Collector\'s Edition shipped only in limited regions — added a helmet replica for ~$259.99.',
      'No native PS5/Xbox-Series-X upgrade fee; disc auto-upgrades.',
      'Shadow of the Erdtree requires reaching Mohgwyn Palace and defeating Starscourge Radahn first.',
    ],
  },

  characters: {
    intro:
      'Elden Ring tells its story through environmental detail and brief NPC encounters. Below are the major recurring NPCs you\'ll meet across the Lands Between and the Roundtable Hold.',
    roster: [
      { name: 'Melina',                   role: 'Maiden who guides the Tarnished · grants Torrent.' },
      { name: 'Ranni the Witch',          role: 'Carian princess offering an alternative ending path.' },
      { name: 'Roderika',                 role: 'Spirit ash crafter at the Roundtable Hold.' },
      { name: 'Blaidd',                   role: 'Half-wolf shadow of Ranni · loyal to a fault.' },
      { name: 'Iron Fist Alexander',      role: 'Living iron jar warrior in pursuit of glory.' },
      { name: 'Patches',                  role: 'Returning treacherous merchant · hides in caves.' },
      { name: 'Boc the Seamster',         role: 'Tarnished demi-human · alters armour cosmetics.' },
      { name: 'Hyetta',                   role: 'Blind maiden with a path tied to the Frenzied Flame.' },
      { name: 'Brother Corhyn',           role: 'Roundtable Hold incantation merchant.' },
      { name: 'Goldmask',                 role: 'Silent reformer of the Golden Order.' },
      { name: 'Fia',                      role: 'Deathbed companion at the Roundtable Hold.' },
      { name: 'Dung Eater',               role: 'Imprisoned cursed Tarnished · grim alternate quest.' },
      { name: 'Sorceress Sellen',         role: 'Renowned sorcery teacher imprisoned at Waypoint Ruins.' },
      { name: 'Diallos',                  role: 'Houseclair noble searching for his missing servant.' },
      { name: 'Nepheli Loux',             role: 'Tarnished warrior · Hoarah Loux\'s daughter.' },
      { name: 'Kenneth Haight',           role: 'Steward of Limgrave\'s Forts.' },
      { name: 'Tanith',                   role: 'Leader of the Volcano Manor in Mt. Gelmir.' },
      { name: 'Latenna',                  role: 'Quiet archer with a pet wolf · seeks the Apostates.' },
      { name: 'Millicent',                role: 'Adopted daughter of Malenia · slow Rot redemption arc.' },
      { name: 'Hewg',                     role: 'Imprisoned smith at the Roundtable Hold.' },
    ],
  },

  weapons: {
    intro:
      'Elden Ring ships with 300+ unique weapons across 30 categories. Below are the weapon classes — pick one as your starting style and the game adapts to it.',
    groups: [
      { name: 'Swords', items: ['Daggers', 'Straight Swords', 'Greatswords', 'Colossal Swords', 'Thrusting Swords', 'Heavy Thrusting Swords', 'Curved Swords', 'Curved Greatswords', 'Katanas', 'Twinblades'] },
      { name: 'Blunt & Axes', items: ['Axes', 'Greataxes', 'Hammers', 'Great Hammers', 'Flails', 'Colossal Weapons'] },
      { name: 'Polearms', items: ['Spears', 'Great Spears', 'Halberds', 'Reapers'] },
      { name: 'Fists, Whips, Claws', items: ['Fists', 'Claws', 'Whips'] },
      { name: 'Ranged', items: ['Light Bows', 'Bows', 'Greatbows', 'Crossbows', 'Ballistas'] },
      { name: 'Catalysts', items: ['Glintstone Staffs (Sorcery)', 'Sacred Seals (Incantations)'] },
      { name: 'Shields & Torches', items: ['Small Shields', 'Medium Shields', 'Greatshields', 'Torches'] },
    ],
  },

  map: {
    intro:
      'The Lands Between is divided into six surface regions and three underground sister regions, plus the Shadow of the Erdtree zone. Each is roughly the size of a Dark Souls full game.',
    regions: [
      { name: 'Limgrave',                   desc: 'Starting region · Stormveil Castle and the first Erdtree.' },
      { name: 'Weeping Peninsula',          desc: 'Southern offshoot of Limgrave · Castle Morne.' },
      { name: 'Liurnia of the Lakes',       desc: 'Sorcery academy and a flooded basin · Caelid sits east.' },
      { name: 'Caelid',                     desc: 'Rot-blasted wasteland · Radahn\'s arena.' },
      { name: 'Altus Plateau',              desc: 'Golden plains · Leyndell, the capital, sits here.' },
      { name: 'Mt. Gelmir',                 desc: 'Volcanic peak west of Altus · Volcano Manor.' },
      { name: 'Mountaintops of the Giants', desc: 'Snowy north · Fire Giant boss and Forge of the Giants.' },
      { name: 'Consecrated Snowfield',      desc: 'Hidden ice region · path to the Haligtree.' },
      { name: 'Siofra River',               desc: 'Subterranean stargazer cavern.' },
      { name: 'Ainsel River',               desc: 'Underground waterway connected to Ranni\'s questline.' },
      { name: 'Deeproot Depths',            desc: 'Roots beneath Leyndell · late-game underground.' },
      { name: 'Crumbling Farum Azula',      desc: 'Endgame floating ruin · Maliketh boss arena.' },
      { name: 'Land of Shadow',             desc: 'Shadow of the Erdtree DLC · Messmer the Impaler\'s domain.' },
    ],
  },

  news: {
    intro:
      'The major dated milestones for Elden Ring since its February 2022 launch, including the Shadow of the Erdtree expansion and post-launch patches.',
    entries: [
      { date: '2022-02-25', title: 'Launch on PS5/PS4/Xbox/PC',
        desc: 'Day-one reviews hit 96 Metacritic · sells 13.4M in its first month.' },
      { date: '2022-03-17', title: 'Patch 1.03 — first balance pass',
        desc: 'Fixes infinite-rune farms; first round of NPC quest fixes.' },
      { date: '2022-09-22', title: 'Patch 1.07 — Colosseum update',
        desc: 'Free PvP arena DLC opens three Colosseums (Limgrave, Caelid, Leyndell).' },
      { date: '2023-12-07', title: 'The Game Awards — DLC announced',
        desc: 'Shadow of the Erdtree first trailer · release window confirmed for 2024.' },
      { date: '2024-06-20', title: 'Shadow of the Erdtree releases',
        desc: 'Sells 5M copies in 3 days · the year\'s best-reviewed expansion.' },
      { date: '2024-07-26', title: 'DLC balance patch 1.13',
        desc: 'Tones down Scadutree scaling difficulty after community feedback.' },
      { date: '2024-09-04', title: 'PS5 Pro patch',
        desc: 'Adds dedicated Pro mode at higher resolution + improved frame pacing.' },
      { date: '2025-08-15', title: 'Nightreign spin-off launches',
        desc: 'Cooperative survival spin-off from From; not a direct sequel to base ER.' },
    ],
  },

  features: {
    intro:
      'The systems that define Elden Ring as a generational From release — the open world, summoning, and the Spirit Ash + crafting layer that made it accessible without softening the boss design.',
    entries: [
      { title: 'Open World',           desc: 'The Lands Between is the first true open-world FromSoft game.' },
      { title: 'Torrent (spectral horse)', desc: 'Double-jump horse with combat moves · unlocked after the first Erdtree.' },
      { title: 'Spirit Ashes',         desc: 'Summon AI allies in solo play · 60+ unlockable spirits.' },
      { title: 'Stake of Marika',      desc: 'Boss-arena rest stops · sidestep the run-back-to-fog problem.' },
      { title: 'Map + Fast Travel',    desc: 'Modern open-world map with grace-site teleport from anywhere.' },
      { title: 'Crafting',             desc: 'Crafting kit unlocks recipes for grease, throwables, and consumables.' },
      { title: 'Online Co-op',         desc: 'Summon two cooperators per area · invasions and red-summon PvP.' },
      { title: 'Ash of War',           desc: 'Weapon skills slot into compatible weapons · drastically deepens build variety.' },
      { title: 'Memory Stones',        desc: 'Increase spell-slot count · scattered across the map.' },
      { title: 'Photo Mode',           desc: 'Added in a post-launch patch · standard filters and depth-of-field.' },
      { title: 'Scadutree Fragments (DLC)', desc: 'DLC-exclusive scaling system that powers up the player in the Land of Shadow.' },
    ],
  },

  missions: {
    intro:
      'Elden Ring does not have linear "missions" — it has Great Runes (legendary bosses) and Remembrance bosses gating story progression. Below are the major boss waypoints by region, in roughly the intended order.',
    chapters: [
      {
        name: 'Limgrave',
        setting: 'Starting region · Stormveil Castle and the early Erdtree.',
        missions: [
          { name: 'Soldier of Godrick (tutorial)' },
          { name: 'Margit, the Fell Omen' },
          { name: 'Godrick the Grafted (Great Rune)' },
          { name: 'Tree Sentinel (optional gatekeeper)' },
        ],
      },
      {
        name: 'Liurnia of the Lakes',
        setting: 'Academy of Raya Lucaria and the Carian moon questline.',
        missions: [
          { name: 'Red Wolf of Radagon (Academy)' },
          { name: 'Rennala, Queen of the Full Moon (Great Rune)' },
          { name: 'Royal Knight Loretta (Caria Manor)' },
        ],
      },
      {
        name: 'Caelid',
        setting: 'Scarlet Rot wasteland · home to Starscourge Radahn.' ,
        missions: [
          { name: 'Starscourge Radahn (Festival · Great Rune)' },
          { name: 'Decaying Ekzykes (dragon)' },
        ],
      },
      {
        name: 'Altus Plateau & Mt. Gelmir',
        setting: 'Mid-game golden plains · Leyndell, the Royal Capital.',
        missions: [
          { name: 'Magma Wyrm Makar' },
          { name: 'Godfrey, First Elden Lord (golden shade)' },
          { name: 'Rykard, Lord of Blasphemy (Great Rune)' },
          { name: 'Morgott, the Omen King (Great Rune)' },
        ],
      },
      {
        name: 'Mountaintops of the Giants',
        setting: 'Snowy peaks · Fire Giant and Forge of the Giants.',
        missions: [
          { name: 'Fire Giant' },
          { name: 'Borealis the Freezing Fog (dragon)' },
        ],
      },
      {
        name: 'Crumbling Farum Azula',
        setting: 'Endgame floating ruin · ancient dragons and Maliketh.',
        missions: [
          { name: 'Godskin Duo' },
          { name: 'Maliketh, the Black Blade' },
          { name: 'Dragonlord Placidusax (optional · Remembrance)' },
        ],
      },
      {
        name: 'Optional Endgame',
        setting: 'Hidden routes for Ranni\'s ending and the Haligtree.',
        missions: [
          { name: 'Astel, Naturalborn of the Void (Ranni questline)' },
          { name: 'Loretta, Knight of the Haligtree' },
          { name: 'Malenia, Blade of Miquella (optional · Remembrance)' },
        ],
      },
      {
        name: 'Leyndell Endgame',
        setting: 'Erdtree itself · the final approach.',
        missions: [
          { name: 'Sir Gideon Ofnir, the All-Knowing' },
          { name: 'Hoarah Loux, Warrior (Godfrey reveal)' },
          { name: 'Radagon of the Golden Order' },
          { name: 'Elden Beast (final boss)' },
        ],
      },
      {
        name: 'Shadow of the Erdtree (DLC)',
        setting: 'Land of Shadow · 10 Remembrance bosses gated by the Scadutree system.',
        missions: [
          { name: 'Divine Beast Dancing Lion' },
          { name: 'Rellana, Twin Moon Knight' },
          { name: 'Messmer the Impaler' },
          { name: 'Romina, Saint of the Bud' },
          { name: 'Bayle the Dread (ancient dragon)' },
          { name: 'Promised Consort Radahn (final DLC boss)' },
        ],
      },
    ],
  },

  activities: {
    intro:
      'Beyond the main story, Elden Ring\'s activity loop centers on co-op summoning, invasion PvP, and the dense NPC questline web. Below is the headline list.',
    entries: [
      { name: 'Co-op Summoning',         desc: 'Lay down a Furled Finger sign to be summoned · or call ally summons into your world.' },
      { name: 'Red Invasions',           desc: 'Use a Bloody Finger to invade other players\' worlds · solo or alongside Recusants.' },
      { name: 'Colosseum PvP',           desc: 'Free arena DLC · duels, team battles, free-for-all across three sites.' },
      { name: 'Dungeon Crawling',        desc: '100+ catacombs, caves, ruins, and Evergaols scattered across the world.' },
      { name: 'NPC Quests',              desc: '~40 named NPC questlines · most are missable, most have multiple endings.' },
      { name: 'Talisman Hunting',        desc: '100+ passive-effect talismans · most are in chests or boss rewards.' },
      { name: 'Spirit Ash Collection',   desc: '60+ summonable AI allies · upgrade with grave glovewort.' },
      { name: 'Weapon Build Crafting',   desc: 'Ash of War + scaling + infusions = thousands of viable combos.' },
      { name: 'Crafting',                desc: 'Cookbooks unlock recipes · gather materials and craft on the fly.' },
      { name: 'Dragon Hunting',          desc: 'Killing dragons grants Dragon Hearts · spend at altars for incantations.' },
      { name: 'Larval Tear Collection',  desc: '18 tears across the map enable respec at Rennala after defeating her.' },
      { name: 'Site of Grace Hunting',   desc: '350+ checkpoints · finding them all is a 100% completion goal.' },
    ],
  },

  artworks: {
    intro:
      'FromSoftware released a slow drip of stylized concept art through 2021–2022 setting the tone for the Lands Between. The pieces below are the most circulated key art plates.',
    entries: [
      { title: 'Reveal Key Art',          desc: 'June 2021 — sigil of the Elden Ring on a parchment background.' },
      { title: 'Tarnished on Torrent',    desc: 'Wide horizontal piece used in the launch marketing push.' },
      { title: 'Malenia, Blade of Miquella', desc: 'Iconic post-launch art used on collector statues + community remixes.' },
      { title: 'Erdtree Silhouette',      desc: 'The world tree against the gold sky — used on the box.' },
      { title: 'Stormveil Castle',        desc: 'Castle exterior used in the gameplay reveal video stills.' },
      { title: 'Radahn vs Tarnished',     desc: 'Action piece for the Festival of Radahn battle.' },
      { title: 'Land of Shadow Reveal',   desc: 'TGA 2023 DLC teaser plate · Messmer\'s silhouette.' },
      { title: 'Shadow of the Erdtree Cover', desc: 'Promised Consort Radahn vs Miquella · DLC box art.' },
      { title: 'Bayle the Dread',         desc: 'DLC dragon-fight promotional piece.' },
      { title: 'Concept · The Roundtable Hold', desc: 'Interior concept piece for the hub area.' },
    ],
  },

  videos: {
    intro:
      'Every major Elden Ring trailer from announcement through Shadow of the Erdtree. Links go to the official Bandai Namco / FromSoftware YouTube channels.',
    entries: [
      { title: 'E3 2019 Announcement',       date: '2019-06-09', href: 'https://www.youtube.com/watch?v=Eala3SmDS_4' },
      { title: 'Summer Game Fest Trailer',   date: '2021-06-10', href: 'https://www.youtube.com/watch?v=AKXiKBnzpBQ' },
      { title: 'Gameplay Reveal',            date: '2021-11-04', href: 'https://www.youtube.com/watch?v=E3Huy2cdih0' },
      { title: 'Story Trailer',              date: '2022-01-17', href: 'https://www.youtube.com/watch?v=oqaqfSpjs4Y' },
      { title: 'Launch Trailer',             date: '2022-02-23', href: 'https://www.youtube.com/watch?v=2yPyaQXdYZQ' },
      { title: 'TGA 2023 — DLC Tease',       date: '2023-12-07', href: 'https://www.youtube.com/watch?v=PMnokXyvwOA' },
      { title: 'Shadow of the Erdtree Story Trailer', date: '2024-05-21', href: 'https://www.youtube.com/watch?v=cMZ-fpiECBs' },
      { title: 'SOTE Launch Trailer',        date: '2024-06-19', href: 'https://www.youtube.com/watch?v=Yk9k_pBVAaQ' },
    ],
  },

  soundtrack: {
    searchTitle: 'Elden Ring',
    intro:
      'The Elden Ring score is a four-composer collaboration — Yuka Kitamura, Tsukasa Saitoh, Shoi Miyazawa, and Tai Tomisawa — leaning on choral, orchestral, and Latin liturgical motifs. Tracks below are the most-discussed cues from the base game + DLC.',
    groups: [
      {
        name: 'Main Themes',
        tracks: [
          { title: 'The Final Battle (Radagon)',          artist: 'Yuka Kitamura' },
          { title: 'The Final Battle (Elden Beast)',       artist: 'Yuka Kitamura' },
          { title: 'Main Menu Theme',                       artist: 'Tsukasa Saitoh' },
        ],
      },
      {
        name: 'Boss Cues — Base Game',
        tracks: [
          { title: 'Malenia, Blade of Miquella',            artist: 'Shoi Miyazawa' },
          { title: 'Starscourge Radahn',                    artist: 'Tai Tomisawa' },
          { title: 'Godrick the Grafted',                   artist: 'Tsukasa Saitoh' },
          { title: 'Rennala, Queen of the Full Moon',       artist: 'Yuka Kitamura' },
          { title: 'Maliketh, the Black Blade',             artist: 'Tai Tomisawa' },
          { title: 'Morgott, the Omen King',                artist: 'Tsukasa Saitoh' },
          { title: 'Godfrey, First Elden Lord',             artist: 'Tai Tomisawa' },
        ],
      },
      {
        name: 'Boss Cues — Shadow of the Erdtree',
        tracks: [
          { title: 'Promised Consort Radahn',               artist: 'Shoi Miyazawa' },
          { title: 'Messmer the Impaler',                   artist: 'Tai Tomisawa' },
          { title: 'Bayle the Dread',                       artist: 'Tsukasa Saitoh' },
          { title: 'Romina, Saint of the Bud',              artist: 'Yuka Kitamura' },
          { title: 'Divine Beast Dancing Lion',             artist: 'Shoi Miyazawa' },
        ],
      },
      {
        name: 'Atmosphere & Areas',
        tracks: [
          { title: 'Castle Stormveil',                      artist: 'Tsukasa Saitoh' },
          { title: 'Academy of Raya Lucaria',               artist: 'Tai Tomisawa' },
          { title: 'Crumbling Farum Azula',                 artist: 'Yuka Kitamura' },
          { title: 'Mountaintops of the Giants',            artist: 'Shoi Miyazawa' },
        ],
      },
    ],
  },

  /* ───────── REQUIREMENTS (consoles + PC builds + completion time) ───────── */
  requirements: {
    intro:
      'Elden Ring is famously tightly optimised — the 60 fps cap on console plus FromSoft\'s engine choices keep hardware demands low. The Shadow of the Erdtree DLC raised the VRAM bar slightly but didn\'t move the floor.',
    consoles: [
      {
        console: 'PlayStation',
        versions: 'PS4 · PS4 Pro · PS5 (native upgrade · free for owners)',
        best: 'PS5: 1440p upscaled to 4K · capped 60 fps · ray tracing off',
        storage: '60 GB',
        notes: [
          'PS5 Pro patch added April 2025 · enables stable 60 fps + RT mode.',
          'No native cap-removal · 60 fps locked even on Pro hardware.',
        ],
      },
      {
        console: 'Xbox',
        versions: 'Xbox One · Xbox Series X|S (native)',
        best: 'Xbox Series X: 4K 60 fps with HDR · ray tracing toggle in DLC',
        storage: '60 GB',
        notes: [
          'Series S: 1440p 60 fps · matches base PS5 fidelity.',
          'No VRR support on Xbox One / Series — locked 60.',
        ],
      },
    ],
    pcMin: {
      os: 'Windows 10 64-bit',
      cpu: 'Intel Core i5-8400 · AMD Ryzen 3 3300X',
      gpu: 'NVIDIA GTX 1060 3 GB · AMD RX 580 4 GB',
      ram: '12 GB',
      vram: '3 GB',
      storage: '60 GB SSD',
      expectedFps: '1080p 30 fps low (without DLC)',
    },
    pcRecommended: {
      os: 'Windows 10 / 11 64-bit',
      cpu: 'Intel Core i7-8700K · AMD Ryzen 5 3600X',
      gpu: 'NVIDIA GTX 1070 8 GB · AMD RX Vega 56 8 GB',
      ram: '16 GB',
      vram: '8 GB',
      storage: '60 GB SSD',
      expectedFps: '1440p 60 fps high · capped engine 60',
    },
    builds: [
      {
        tier: 'Budget',
        totalUSD: 780,
        targets: 'Locked 60 fps at 1440p ultra · uncapped via mod = 100+ fps',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 5 7600',                priceUSD: 180 },
          { label: 'Mobo', part: 'ASRock B650M-HDV',                priceUSD: 110 },
          { label: 'RAM',  part: '16 GB DDR5-5200 (2×8)',           priceUSD: 60 },
          { label: 'GPU',  part: 'AMD RX 7600 8 GB',                priceUSD: 230 },
          { label: 'SSD',  part: '1 TB Crucial P3 Plus NVMe',       priceUSD: 70 },
          { label: 'PSU',  part: 'Corsair CV650 (650W Bronze)',     priceUSD: 70 },
          { label: 'Case', part: 'Cooler Master MasterBox Q300L',   priceUSD: 50 },
        ],
        notes: 'Even an RX 6600 (~$200) hits 60 fps · this is over-spec for the base game.',
      },
      {
        tier: 'Recommended',
        totalUSD: 1180,
        targets: '1440p 60 fps ultra · Shadow of the Erdtree at max settings',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 5 9600X',                priceUSD: 280 },
          { label: 'Mobo', part: 'MSI B650 Tomahawk',                priceUSD: 170 },
          { label: 'RAM',  part: '32 GB DDR5-6000 (2×16)',           priceUSD: 120 },
          { label: 'GPU',  part: 'AMD RX 7700 XT 12 GB',             priceUSD: 420 },
          { label: 'SSD',  part: '1 TB WD SN850X NVMe',              priceUSD: 90 },
          { label: 'PSU',  part: 'Corsair RM650e (650W Gold)',       priceUSD: 80 },
          { label: 'Case', part: 'Fractal Pop Air',                  priceUSD: 75 },
          { label: 'Fan',  part: 'Stock cooler',                     priceUSD: 0 },
        ],
        notes: 'Plays SOTE\'s Scadu region at 60 fps even in Bonny Village (worst frame-pacing area).',
      },
      {
        tier: 'High-end',
        totalUSD: 2050,
        targets: '4K 120 fps via uncapped mod · RT on + DLAA · all-future-DLC ready',
        parts: [
          { label: 'CPU',  part: 'AMD Ryzen 7 9700X',                priceUSD: 380 },
          { label: 'Mobo', part: 'ASUS ROG Strix X870-A',            priceUSD: 290 },
          { label: 'RAM',  part: '32 GB DDR5-6400 CL30',             priceUSD: 140 },
          { label: 'GPU',  part: 'NVIDIA RTX 5070 Ti 16 GB',         priceUSD: 750 },
          { label: 'SSD',  part: '2 TB Samsung 990 Pro NVMe',        priceUSD: 165 },
          { label: 'PSU',  part: 'Corsair RM750e (750W Gold)',       priceUSD: 95 },
          { label: 'Case', part: 'Lian Li Lancool 207',              priceUSD: 100 },
          { label: 'Fan',  part: 'Arctic Liquid Freezer III 280',    priceUSD: 110 },
        ],
        notes: 'Overkill — the engine caps at 60 fps natively · only the unlock mod justifies this.',
      },
    ],
    completion: {
      mainStory: '60h',
      mainAndExtras: '97h',
      completionist: '130h',
      notes: [
        'Shadow of the Erdtree DLC adds ~40h main / 60h completionist on top.',
        'New Game+ cycles add no time per run but Achievements need 3 NG+ for all endings.',
      ],
    },
  },
};

export default content;
