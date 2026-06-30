/**
 * Deep content for Resident Evil 4 Remake (Capcom, 2023).
 * Factual public data + original commentary.
 *
 * Skipped categories (don't apply): vehicles, animals, properties,
 * activities, cheats — modern Capcom RE games ship without cheat codes.
 */

import type { GameContent } from './types';

const content: GameContent = {
  overview: {
    intro:
      'Resident Evil 4 Remake is Capcom\'s 2023 ground-up rebuild of the 2005 GameCube classic. Built on RE Engine — the same tech behind RE2 / RE3 / RE7 / Village — it preserves the cult arcs of the original while modernising aiming, parry mechanics, and crafting. The Separate Ways DLC (Ada Wong\'s parallel campaign) was bundled into the Gold Edition in February 2024.',
  },

  editions: {
    intro:
      'RE4 Remake currently ships in two SKUs — the base Standard Edition and the Gold Edition that bundles every paid post-launch addition. There is no Ultimate / Collector\'s Edition still in print.',
    tiers: [
      {
        name: 'Standard Edition',
        priceUSD: 39.99,
        bullets: [
          'Main campaign · 16 chapters (~16 hours)',
          'The Mercenaries free post-launch mode',
          'Costume packs (free + paid bundles)',
          'PS5 · PS4 · Xbox Series · PC (Steam · MS Store · iOS / iPadOS / Mac)',
          'Has discounted to as low as $19.99 in major Steam sales',
        ],
      },
      {
        name: 'Deluxe Edition',
        priceUSD: 59.99,
        bullets: [
          'Base game + 4 cosmetic packs',
          'Treasure Maps expansion (additional spinel locations)',
          'Original Soundtrack Swap (toggle between RE Engine score and the 2005 OST)',
          'Deluxe Weapon Tickets (early Sentinel Nine + Skull Shaker)',
        ],
      },
      {
        name: 'Gold Edition',
        priceUSD: 49.99,
        recommended: true,
        bullets: [
          'Base game + Separate Ways DLC (Ada Wong campaign · ~6 hrs)',
          'All Deluxe Edition cosmetic / weapon content',
          'Best-value SKU on every platform · introduced Feb 2024',
          'Frequently $29.99 in storefront sales',
        ],
      },
      {
        name: 'Separate Ways DLC (standalone)',
        priceUSD: 9.99,
        bullets: [
          'Standalone purchase for Standard / Deluxe owners',
          'Ada Wong\'s parallel campaign · 7 chapters · grappling-hook traversal',
          'New monster encounters absent from the main story',
        ],
      },
    ],
    notes: [
      'RE4 Remake DOES NOT come to Switch — too demanding for the current hardware.',
      'iOS / iPadOS / Mac native versions shipped Dec 2023 — first AAA Capcom title on Apple Silicon.',
      'No microtransactions in-mission · cosmetics + weapon tickets are the only optional spend.',
    ],
  },

  characters: {
    intro:
      'A tight cast of around a dozen named characters — far smaller than recent Capcom open-world fare. Below is Leon\'s on-screen ensemble plus the cult command structure he ends up dismantling.',
    roster: [
      { name: 'Leon S. Kennedy',  role: 'Protagonist · former Raccoon City rookie cop turned US federal agent · sent to rescue the President\'s daughter.' },
      { name: 'Ashley Graham',    role: 'The President\'s daughter · escort target for the back half of the campaign · escapes alongside Leon.' },
      { name: 'Ada Wong',         role: 'Mysterious mercenary / spy · runs a parallel mission in the Separate Ways DLC · trades flirty exposition with Leon.' },
      { name: 'Luis Sera',        role: 'Former Umbrella researcher · provides exposition on Las Plagas · gifts Leon the TMP and helps with the Salazar sample.' },
      { name: 'The Merchant',     role: 'Cult outcast in a long coat · sells weapons, upgrades, attaches treasures and crafting recipes across the map.' },
      { name: 'Hunnigan',         role: 'Leon\'s federal handler · radio voice for mission objectives.' },
      { name: 'Bitores Mendez',   role: 'Village chief and first major boss · giant towering Plagas host · "El Gigante" cutscene encounter.' },
      { name: 'Ramon Salazar',    role: 'Castellan of Salazar Castle · diminutive Plagas zealot · second-act boss.' },
      { name: 'Osmund Saddler',   role: 'Cult leader of Los Iluminados · final story antagonist · injected Ashley with the Plaga.' },
      { name: 'Jack Krauser',     role: 'Former US Special Forces · knife-fight QTE setpiece in the island act.' },
      { name: 'Albert Wesker',    role: 'Behind-the-scenes orchestrator · contacts Ada to extract a Plaga sample · canon-bridging cameo.' },
    ],
  },

  weapons: {
    intro:
      'A deep arsenal across handguns, shotguns, rifles, SMGs and magnums — each with its own perfect upgrade path through the Merchant. Knife durability and parry mechanics are new vs the 2005 original.',
    groups: [
      {
        name: 'Handguns',
        items: [
          'SG-09 R (starter handgun)',
          'Punisher (penetrates multiple enemies)',
          'Red9 (highest damage handgun · stock attachment available)',
          'Blacktail (fastest reload + accurate)',
          'Matilda (3-round burst · unlock via Standard A clear)',
          'Sentinel Nine (Deluxe ticket weapon · highest fire rate)',
        ],
      },
      {
        name: 'Shotguns',
        items: [
          'W-870 (starter pump shotgun)',
          'Riot Gun (semi-auto · fastest fire rate)',
          'Striker (tube magazine extension)',
          'Skull Shaker (Deluxe ticket weapon · screen-shake on hit)',
        ],
      },
      {
        name: 'SMGs',
        items: [
          'TMP (full-auto sidearm · 30 round mag)',
          'LE 5 (laser-sighted SMG · Krauser arena unlock)',
        ],
      },
      {
        name: 'Rifles',
        items: [
          'Stingray (semi-auto sniper · default scope)',
          'CQBR Assault Rifle (3-round burst rifle · Mercenaries-style spray)',
        ],
      },
      {
        name: 'Magnums',
        items: [
          'Broken Butterfly (slow, hard-hitting revolver)',
          'Killer7 (fastest magnum · semi-auto)',
          'Handcannon (max-stats unlock · Mercenaries S rank reward)',
        ],
      },
      {
        name: 'Special / Melee',
        items: [
          'Combat Knife (parry, stealth kill, durable when upgraded)',
          'Krauser\'s Knife (infinite durability post-fight)',
          'Primal Knife (Mercenaries unlock · infinite durability)',
          'Bolt Thrower (recover bolts · stealth attachment)',
          'Mine Thrower (Separate Ways · Ada\'s signature)',
          'Rocket Launcher (one-shot boss-killer · single use unless Infinite RPG unlock)',
        ],
      },
    ],
  },

  map: {
    intro:
      'Three big setpieces — village, castle, island — each with sub-areas you revisit for treasure hunts and Yellow Herb buffs.',
    regions: [
      { name: 'Valdelobos Village',  desc: 'Opening rural setpiece · chainsaw siege at the church · introduces Plagas mechanics.' },
      { name: 'Quarry & Mountain Cabin', desc: 'Mid-game shootout with Luis · features the cabin defense set-piece.' },
      { name: 'Lake (El Lago)',      desc: 'Boat segment vs the Del Lago lake monster · open-water harpoon fight.' },
      { name: 'Castle Salazar',      desc: 'Gothic castle interior · Salazar\'s domain · lava room + clock-tower bosses.' },
      { name: 'The Island',          desc: 'Final act military base · Krauser knife duel · Saddler finale.' },
      { name: 'Separate Ways routes', desc: 'Ada\'s DLC retraces all 3 zones with new boss arenas + the grappling hook.' },
    ],
  },

  news: {
    intro:
      'Major release / DLC / patch milestones since the June 2022 reveal.',
    entries: [
      { date: '2022-06-02', title: 'Official Reveal — PlayStation State of Play', desc: 'First trailer confirms the remake using RE Engine. 2023 release window.' },
      { date: '2023-03-09', title: 'Chainsaw Demo released', desc: 'Free demo on PS5 / PS4 / Xbox Series / PC · single playthrough then unlock continues post-launch.' },
      { date: '2023-03-24', title: 'Game launches worldwide', desc: 'Day-one PS5 / PS4 / Xbox Series / Steam · 90+ Metacritic across platforms.' },
      { date: '2023-04-07', title: 'The Mercenaries free DLC', desc: 'Score-attack arcade mode patched in 2 weeks post-launch.' },
      { date: '2023-09-21', title: 'Separate Ways DLC ($9.99)', desc: 'Ada Wong\'s parallel campaign · 7 chapters · grapple hook traversal.' },
      { date: '2023-12-20', title: 'Mac · iOS · iPadOS native launch', desc: 'First AAA Capcom title on Apple Silicon — Metal API native rendering.' },
      { date: '2024-02-22', title: 'Gold Edition launches', desc: 'Bundled SKU — base + Separate Ways + Deluxe content for $49.99.' },
      { date: '2024-09-30', title: 'PS5 Pro patch (60 fps + RT)', desc: 'Enhanced visual mode with stable 60 fps + boosted ray-traced reflections.' },
    ],
  },

  features: {
    intro:
      'What changed vs the 2005 original — and what carried over verbatim.',
    entries: [
      { title: 'RE Engine visuals',  desc: 'Same engine as RE2 Remake · physical-based skin, hair, fluids, lighting.' },
      { title: 'Parry system',       desc: 'Knife-parry any melee strike — including chainsaws if your knife durability holds.' },
      { title: 'Crafting',           desc: 'Pistol, rifle, shotgun, magnum and resource ammo all craftable at Typewriters.' },
      { title: 'Stealth & sneak attacks', desc: 'Crouch behind cover · backstab unaware Ganados for one-shot kills.' },
      { title: 'Ashley as companion',desc: 'No more health bar / second QTEs — she follows, ducks, or waits on command.' },
      { title: 'Treasures & spinels',desc: 'Re-imagined economy · combine gems on treasures for higher Merchant resale.' },
      { title: 'Charm system',       desc: 'Mercenaries gacha · charms equip to attaché case for stat boosts.' },
      { title: 'Side requests',      desc: 'Optional Merchant blue notes — rat-shooting, gem-hunting, sniping side quests.' },
      { title: 'Separate Ways grapple', desc: 'Ada uses a grapple hook for traversal + combo-knife finishers.' },
      { title: 'Costume packs',      desc: 'Leon RPD outfit, casual Ada, Sci-Fi armor · most are unlockable in-game.' },
    ],
  },

  missions: {
    intro:
      'Main campaign runs 16 chapters · most chapters have one mandatory boss or set-piece. Separate Ways adds 7 chapters of Ada\'s parallel timeline.',
    chapters: [
      {
        name: 'Act 1 — Village',
        setting: 'Rural Valdelobos · Leon arrives looking for Ashley · cult is dug in deep.',
        missions: [
          { name: 'Chapter 1 — Arrival & the Cabin' },
          { name: 'Chapter 2 — Pueblo Plaza ambush' },
          { name: 'Chapter 3 — Church bell tolls / Mendez fight' },
          { name: 'Chapter 4 — Lake monster (El Lago)' },
          { name: 'Chapter 5 — Quarry & cabin defense (with Luis)' },
          { name: 'Chapter 6 — Mendez 2nd phase boss' },
        ],
      },
      {
        name: 'Act 2 — Castle',
        setting: 'Castle Salazar · gothic interiors · Ramon Salazar\'s gauntlet.',
        missions: [
          { name: 'Chapter 7 — Cathedral arrival' },
          { name: 'Chapter 8 — Garrador armoured-cult enemy debut' },
          { name: 'Chapter 9 — Verdugo elevator boss' },
          { name: 'Chapter 10 — Mining cart chase' },
          { name: 'Chapter 11 — Salazar boss fight' },
        ],
      },
      {
        name: 'Act 3 — Island',
        setting: 'Military island base · cult\'s research outpost · Saddler\'s final stand.',
        missions: [
          { name: 'Chapter 12 — Island arrival' },
          { name: 'Chapter 13 — Krauser knife duel' },
          { name: 'Chapter 14 — Regenerator labs' },
          { name: 'Chapter 15 — Saddler 1st phase' },
          { name: 'Chapter 16 — Saddler finale + helicopter escape' },
        ],
      },
      {
        name: 'Separate Ways',
        setting: 'Ada Wong\'s parallel campaign · 7 chapters · grapple-hook traversal.',
        missions: [
          { name: 'Chapter 1 — Wesker contact + village infiltration' },
          { name: 'Chapter 2 — Plaga sample first contact' },
          { name: 'Chapter 3 — Castle infiltration' },
          { name: 'Chapter 4 — Salazar betrayal' },
          { name: 'Chapter 5 — Island return' },
          { name: 'Chapter 6 — Pesanta boss arena' },
          { name: 'Chapter 7 — Sample extraction finale' },
        ],
      },
    ],
  },

  artworks: {
    intro:
      'Promotional screenshots and key art Capcom released throughout the 2022-2023 marketing cycle. Below are real captures from the PC RE Engine build.',
    entries: [
      { title: 'Valdelobos arrival', desc: 'Opening scene · Leon walks the rural road into the village.', image: '/images/games/re4-remake/shot-1.jpg' },
      { title: 'Pueblo siege',       desc: 'The Plaza ambush · multiple Ganados converging at sundown.', image: '/images/games/re4-remake/shot-2.jpg' },
      { title: 'Ashley escort',      desc: 'Re-engineered escort gameplay · she follows or waits on command.', image: '/images/games/re4-remake/shot-3.jpg' },
      { title: 'Castle Salazar interior', desc: 'Gothic baroque interior lit by candles and stained glass.', image: '/images/games/re4-remake/shot-4.jpg' },
      { title: 'Krauser knife duel', desc: 'The mid-island boss arena · knife-only parry encounter.', image: '/images/games/re4-remake/shot-5.jpg' },
      { title: 'Regenerator labs',   desc: 'Late-game Regenerator showdown · thermal scope required.', image: '/images/games/re4-remake/shot-6.jpg' },
      { title: 'The Merchant returns', desc: 'Coat-clad weapons merchant · upgrades, treasure cashing, side requests.', image: '/images/games/re4-remake/shot-7.jpg' },
      { title: 'Island finale',      desc: 'Saddler\'s arena · Plaga-mutated final form silhouette.', image: '/images/games/re4-remake/shot-8.jpg' },
    ],
  },

  videos: {
    intro:
      'Every official Capcom trailer for the remake, in chronological order.',
    entries: [
      { title: 'Reveal Trailer (State of Play)', date: '2022-06-02', href: 'https://www.youtube.com/results?search_query=resident+evil+4+remake+reveal+trailer' },
      { title: 'Gameplay Trailer (TGS)',          date: '2022-09-15', href: 'https://www.youtube.com/results?search_query=resident+evil+4+remake+tgs+2022' },
      { title: 'Story Trailer',                   date: '2023-02-13', href: 'https://www.youtube.com/results?search_query=resident+evil+4+remake+story+trailer' },
      { title: 'Final Trailer',                   date: '2023-03-09', href: 'https://www.youtube.com/results?search_query=resident+evil+4+remake+final+trailer' },
      { title: 'Launch Trailer',                  date: '2023-03-22', href: 'https://www.youtube.com/results?search_query=resident+evil+4+remake+launch+trailer' },
      { title: 'Separate Ways Trailer',           date: '2023-09-09', href: 'https://www.youtube.com/results?search_query=re4+remake+separate+ways+trailer' },
      { title: 'PS5 Pro Enhanced Trailer',        date: '2024-09-23', href: 'https://www.youtube.com/results?search_query=re4+remake+ps5+pro+trailer' },
    ],
  },

  soundtrack: {
    searchTitle: 'Resident Evil 4 Remake',
    intro:
      'The score was composed by Yoshiya Terayama, Shusaku Uchiyama and Kota Suzuki — Capcom sound team veterans across the modern RE Engine releases. The Deluxe Edition includes an OST swap that lets you toggle the entire mix back to the 2005 original.',
    groups: [
      {
        name: 'Main themes',
        tracks: [
          { title: 'Resident Evil 4 Main Theme',  artist: 'Yoshiya Terayama' },
          { title: 'Serenity (Save Room theme)',  artist: 'Yoshiya Terayama' },
          { title: 'The Merchant Stranger Theme', artist: 'Shusaku Uchiyama' },
        ],
      },
      {
        name: 'Combat & set-piece cues',
        tracks: [
          { title: 'Chainsaw Pursuit',        artist: 'Kota Suzuki' },
          { title: 'Pueblo Siege',            artist: 'Yoshiya Terayama' },
          { title: 'Del Lago Surfaces',       artist: 'Shusaku Uchiyama' },
          { title: 'Verdugo Elevator',        artist: 'Kota Suzuki' },
          { title: 'Krauser Knife Duel',      artist: 'Yoshiya Terayama' },
        ],
      },
      {
        name: 'Boss & finale',
        tracks: [
          { title: 'Mendez 2nd Phase',        artist: 'Kota Suzuki' },
          { title: 'Ramon Salazar Confrontation', artist: 'Shusaku Uchiyama' },
          { title: 'Saddler\'s Awakening',     artist: 'Yoshiya Terayama' },
          { title: 'Helicopter Escape (Ending Theme)', artist: 'Yoshiya Terayama' },
        ],
      },
    ],
  },

  requirements: {
    intro:
      'A surprisingly accessible game for an RE Engine title — it ran on Apple Silicon natively in 2023. Below: console SKUs, PC min vs recommended, and three USD-priced build tiers tuned for it.',
    consoles: [
      {
        console: 'PlayStation',
        versions: 'PS5 + PS4 / PS4 Pro',
        best: 'PS5 Pro: 4K 60 fps + ray-traced reflections (Sep 2024 patch)',
        storage: '67 GB',
        notes: ['PS4 caps at 1080p 30 fps · noticeable streaming pop-in on the Pro vs Slim.'],
      },
      {
        console: 'Xbox',
        versions: 'Xbox Series X|S only (no Xbox One)',
        best: 'Series X: 4K 60 fps in Performance mode',
        storage: '67 GB',
        notes: ['Series S runs at 1080p 60 fps with reduced effects.'],
      },
    ],
    pcMin: {
      os: 'Windows 10 64-bit',
      cpu: 'AMD Ryzen 3 1200 / Intel Core i5-7500',
      gpu: 'AMD RX 560 (4 GB) / NVIDIA GTX 1050 Ti (4 GB)',
      ram: '8 GB',
      storage: '67 GB SSD',
      expectedFps: '1080p · 45 fps · Prioritise Performance preset',
    },
    pcRecommended: {
      os: 'Windows 10 / 11 64-bit',
      cpu: 'AMD Ryzen 5 3600 / Intel Core i7-8700',
      gpu: 'AMD RX 5700 / NVIDIA GTX 1070 (8 GB)',
      ram: '16 GB',
      storage: '67 GB SSD',
      expectedFps: '1080p · 60 fps · Standard preset with FidelityFX',
      notes: 'Disable hair physics for a 5-10 fps gain in cutscenes.',
    },
    builds: [
      {
        tier: 'Budget · 1080p 60 fps',
        totalUSD: 720,
        targets: '1080p 60 fps medium preset',
        parts: [
          { label: 'CPU',     part: 'Ryzen 5 5600 (6c/12t · 3.5 GHz)',                          priceUSD: 130 },
          { label: 'GPU',     part: 'RX 6600 (8 GB · 1080p sweet spot)',                        priceUSD: 200 },
          { label: 'RAM',     part: '16 GB DDR4-3200 (2x8 GB)',                                  priceUSD:  40 },
          { label: 'Storage', part: '1 TB NVMe SSD (e.g. Crucial P3)',                           priceUSD:  60 },
          { label: 'Motherboard', part: 'B550 · ATX',                                            priceUSD:  90 },
          { label: 'PSU',     part: '550W 80+ Bronze',                                           priceUSD:  60 },
          { label: 'Case',    part: 'Mid-tower · 2x intake fan',                                 priceUSD:  60 },
          { label: 'Cooler',  part: 'Wraith Stealth stock',                                      priceUSD:   0 },
          { label: 'OS',      part: 'Windows 11 Home OEM',                                       priceUSD:  80 },
        ],
        notes: 'Hits the recommended spec with cooler thermals headroom.',
      },
      {
        tier: 'Recommended · 1440p 60 fps',
        totalUSD: 1100,
        targets: '1440p · 60 fps high preset · FidelityFX Quality',
        parts: [
          { label: 'CPU',     part: 'Ryzen 5 7600X (6c/12t · Zen 4)',                            priceUSD: 200 },
          { label: 'GPU',     part: 'RX 7700 XT (12 GB · 1440p)',                                priceUSD: 420 },
          { label: 'RAM',     part: '32 GB DDR5-5600 (2x16 GB)',                                  priceUSD: 110 },
          { label: 'Storage', part: '1 TB NVMe Gen4 SSD',                                         priceUSD:  80 },
          { label: 'Motherboard', part: 'B650 · ATX',                                             priceUSD: 130 },
          { label: 'PSU',     part: '750W 80+ Gold',                                              priceUSD: 100 },
          { label: 'Case',    part: 'Mid-tower mesh',                                             priceUSD:  70 },
          { label: 'Cooler',  part: '240mm AIO',                                                  priceUSD:  90 },
        ],
        notes: 'Comfortable 1440p 60 with headroom for next-gen RE Engine titles.',
      },
      {
        tier: '4K · ray tracing',
        totalUSD: 2350,
        targets: '4K · 60 fps · ray-traced reflections + hair physics',
        parts: [
          { label: 'CPU',     part: 'Ryzen 7 7800X3D (8c/16t · 3D V-cache)',                     priceUSD: 380 },
          { label: 'GPU',     part: 'GeForce RTX 4080 SUPER (16 GB)',                             priceUSD:1000 },
          { label: 'RAM',     part: '32 GB DDR5-6000',                                            priceUSD: 130 },
          { label: 'Storage', part: '2 TB NVMe Gen4 SSD',                                         priceUSD: 160 },
          { label: 'Motherboard', part: 'X670E · ATX',                                             priceUSD: 280 },
          { label: 'PSU',     part: '850W 80+ Platinum',                                          priceUSD: 160 },
          { label: 'Case',    part: 'Premium mesh · 6x fan',                                      priceUSD: 140 },
          { label: 'Cooler',  part: '360mm AIO',                                                  priceUSD: 130 },
        ],
        notes: '4K 60 with RT comfortably; expect 80-100 fps with RT off + DLSS Quality.',
      },
    ],
    completion: {
      mainStory: '14 hours',
      mainAndExtras: '20 hours',
      completionist: '40 hours',
      notes: [
        'New Game+ unlocks at any difficulty completion · transfers weapons, treasures, charms.',
        'Professional difficulty + S+ rank unlock the Infinite Rocket Launcher and Handcannon.',
        'Mercenaries (separate score-attack mode) adds ~10-20 hrs of replay.',
      ],
    },
  },
};

export default content;
