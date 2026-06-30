/**
 * Full deep content for Grand Theft Auto V — all 18 applicable categories.
 * Names, prices, codes, dates: factual public data.
 * Descriptions: original commentary in my own wording.
 */

import type { GameContent } from './types';

const content: GameContent = {

  editions: {
    intro:
      'Twelve years on, GTA V is still in active rotation. The current-gen re-release (PS5 / Xbox Series X|S, March 2022) ships in two SKUs at much lower prices than launch. GTA+ subscriptions are sold separately for Online.',
    tiers: [
      {
        name: 'Standard Edition',
        priceUSD: 29.99,
        bullets: [
          'Full single-player campaign — Michael, Franklin, Trevor',
          'GTA Online access',
          'Native PS5 / Xbox Series X|S build (2022 re-release)',
          'Also on PS4, Xbox One, and PC',
        ],
      },
      {
        name: 'Premium Edition',
        priceUSD: 49.99,
        recommended: true,
        bullets: [
          'Everything in Standard',
          'Criminal Enterprise Starter Pack for GTA Online',
          'Pre-loaded properties — Maze Bank West executive office, Paleto Forest bunker, Great Chaparral clubhouse, Coke Lockup',
          '5 bonus vehicles + 4 weapon discounts',
          'GTA$1,000,000 in-game cash',
        ],
      },
    ],
    notes: [
      'GTA+ is a separate $7.99/month membership for Online — not included with any edition.',
      'Story DLC was cancelled in 2014. Everything post-2014 is multiplayer-only.',
      'Heists, Doomsday, and Cayo Perico expansions are included free in the base game.',
    ],
  },

  characters: {
    intro:
      'GTA V was the series\' first three-protagonist game. The trio plus their orbit of supporting characters runs about 30 named roles across the campaign.',
    roster: [
      { name: 'Michael De Santa',  role: 'Retired bank robber in witness protection · protagonist.' },
      { name: 'Franklin Clinton',  role: 'South Los Santos repo man chasing a way up · protagonist.' },
      { name: 'Trevor Philips',    role: 'Volatile meth manufacturer in Sandy Shores · protagonist.' },
      { name: 'Lester Crest',      role: 'The crew\'s hacker and heist planner.' },
      { name: 'Lamar Davis',       role: 'Franklin\'s best friend · gang affiliate.' },
      { name: 'Amanda De Santa',   role: 'Michael\'s wife · former stripper.' },
      { name: 'Jimmy De Santa',    role: 'Michael\'s pothead gamer son.' },
      { name: 'Tracey De Santa',   role: 'Michael\'s daughter · aspiring entertainer.' },
      { name: 'Steve Haines',      role: 'FIB agent blackmailing the crew.' },
      { name: 'Dave Norton',       role: 'FIB agent who covered up Michael\'s death.' },
      { name: 'Devin Weston',      role: 'Billionaire venture capitalist · primary antagonist.' },
      { name: 'Martin Madrazo',    role: 'Cartel boss in the hills above Vinewood.' },
      { name: 'Wei Cheng',         role: 'Triad boss looking to expand into LS.' },
      { name: 'Stretch',           role: 'Recently-paroled gang member squeezing Franklin.' },
      { name: 'Tao Cheng',         role: 'Wei Cheng\'s arrogant heir.' },
      { name: 'Solomon Richards',  role: 'Faded film producer · Michael\'s Vinewood mentor.' },
      { name: 'Ron Jakowski',      role: 'Trevor\'s paranoid right-hand man in Sandy Shores.' },
      { name: 'Wade Hebert',       role: 'Trevor\'s slow-witted hanger-on.' },
      { name: 'Patricia Madrazo',  role: 'Martin Madrazo\'s wife · Trevor\'s brief romance.' },
      { name: 'Dr. Friedlander',   role: 'Michael\'s therapist · running a scam.' },
    ],
  },

  weapons: {
    intro:
      'GTA V launched with one of the deepest weapon lockers in any Rockstar game. The list below covers the campaign\'s base loadout — Online has added another ~50 weapons since 2013.',
    groups: [
      { name: 'Pistols', items: ['Pistol', 'Combat Pistol', 'AP Pistol', 'Pistol .50', 'SNS Pistol', 'Heavy Pistol', 'Vintage Pistol', 'Marksman Pistol', 'Flare Gun'] },
      { name: 'SMGs', items: ['Micro SMG', 'SMG', 'Assault SMG', 'Combat PDW', 'Machine Pistol', 'Mini SMG'] },
      { name: 'Assault Rifles', items: ['Assault Rifle', 'Carbine Rifle', 'Advanced Rifle', 'Special Carbine', 'Bullpup Rifle', 'Compact Rifle'] },
      { name: 'Shotguns', items: ['Pump Shotgun', 'Sawed-Off Shotgun', 'Assault Shotgun', 'Bullpup Shotgun', 'Heavy Shotgun', 'Musket', 'Double Barrel Shotgun'] },
      { name: 'Sniper Rifles', items: ['Sniper Rifle', 'Heavy Sniper', 'Marksman Rifle'] },
      { name: 'Heavy Weapons', items: ['Grenade Launcher', 'RPG', 'Minigun', 'Railgun', 'Homing Launcher', 'Compact Grenade Launcher'] },
      { name: 'Melee', items: ['Knife', 'Nightstick', 'Hammer', 'Bat', 'Crowbar', 'Golf Club', 'Knuckle Duster', 'Switchblade', 'Battle Axe', 'Hatchet', 'Machete'] },
    ],
  },

  vehicles: {
    intro:
      'GTA V is the deepest vehicle game in the series — 200+ in the base game, 700+ counting Online additions. Below is a curated sample of the iconic vehicles in each class.',
    groups: [
      { name: 'Supercars', items: ['Pegassi Adder', 'Grotti Cheetah', 'Overflod Entity XF', 'Pegassi Infernus', 'Pegassi Zentorno', 'Pfister 811', 'Truffade Nero'] },
      { name: 'Sports', items: ['Bravado Banshee', 'Albany Buccaneer', 'Grotti Carbonizzare', 'Pfister Comet', 'Invetero Coquette', 'Benefactor Feltzer', 'Dinka Jester', 'Karin Sultan'] },
      { name: 'Sports Classics', items: ['Pegassi Monroe', 'Grotti Stinger', 'Lampadati Casco', 'Truffade Z-Type', 'Albany Roosevelt', 'Vapid Peyote', 'Albany Manana'] },
      { name: 'Muscle', items: ['Albany Buccaneer', 'Bravado Gauntlet', 'Bravado Buffalo S', 'Vapid Dominator', 'Albany Virgo', 'Imponte Phoenix', 'Cheval Picador', 'Vapid Hotknife'] },
      { name: 'SUVs', items: ['Gallivanter Baller', 'Albany Cavalcade', 'Dundreary Landstalker', 'Bravado Gresley', 'Mammoth Patriot', 'Karin Kuruma'] },
      { name: 'Off-Road', items: ['BF Bifta', 'Nagasaki Blazer', 'BF Injection', 'Canis Bodhi', 'Pegassi Bati', 'Dune Buggy', 'Karin Rebel', 'Vapid Sandking', 'Vapid Trophy Truck'] },
      { name: 'Motorcycles', items: ['Pegassi Bati 801', 'Shitzu Hakuchou', 'Nagasaki Carbon RS', 'Western Daemon', 'Dinka Akuma', 'Pegassi Faggio', 'Nagasaki Sanchez', 'Principe Lectro'] },
      { name: 'Helicopters', items: ['Buckingham Maverick', 'Western Annihilator', 'Western Cargobob', 'Buckingham Swift', 'HVY Skylift', 'Western Frogger', 'Buzzard Attack Chopper'] },
      { name: 'Planes', items: ['Mammoth Hydra', 'Buckingham Luxor', 'Buckingham Vestra', 'Buckingham Shamal', 'JoBuilt P-996 LAZER', 'Western Cuban 800', 'Vapid Dodo Seaplane', 'Buckingham Miljet'] },
      { name: 'Boats', items: ['Shitzu Jetmax', 'Speeder', 'Dinghy', 'Nagasaki Seashark', 'Pegassi Speeder', 'Shitzu Suntrap', 'Submersible'] },
    ],
  },

  animals: {
    intro:
      'GTA V was the first Rockstar title with persistent wildlife in the world. The roster is small compared to RDR 2 but the variety is enough to support hunting side missions and the marine ecosystem.',
    groups: [
      { name: 'Land Mammals', items: ['White-tailed Deer', 'Mountain Lion', 'Coyote', 'Boar', 'Cow', 'Pig', 'Rabbit', 'Rat'] },
      { name: 'Dogs', items: ['Rottweiler', 'Husky', 'Poodle', 'Pug', 'Retriever', 'Shih Tzu', 'West Highland Terrier', 'Chop (Franklin\'s dog)'] },
      { name: 'Cats', items: ['Tabby', 'Maine Coon'] },
      { name: 'Birds', items: ['Crow', 'Cormorant', 'Pigeon', 'Seagull', 'Hen', 'Chicken', 'Hawk'] },
      { name: 'Marine', items: ['Great White Shark', 'Hammerhead Shark', 'Tiger Shark', 'Bottlenose Dolphin', 'Humpback Whale', 'Killer Whale', 'Manta Ray', 'Sea Turtle', 'Stingray', 'Octopus', 'Various Fish'] },
    ],
  },

  map: {
    intro:
      'The state of San Andreas is split into the urban Los Santos sprawl in the south and the rural Blaine County in the north. Below are the key regions you\'ll spend the most time in.',
    regions: [
      { name: 'Downtown Los Santos', desc: 'The dense urban core · skyscrapers, banks, FIB tower.' },
      { name: 'Vinewood',            desc: 'The Hollywood analogue · studios, Walk of Fame, the sign.' },
      { name: 'Vinewood Hills',      desc: 'Michael\'s mansion turf · pools and paparazzi.' },
      { name: 'Rockford Hills',      desc: 'Beverly Hills analogue · Devin Weston\'s territory.' },
      { name: 'Del Perro / Vespucci',desc: 'The beach strip · Lifeguard Tower, Muscle Beach pier.' },
      { name: 'East Los Santos',     desc: 'Working-class east side · Vagos gang territory.' },
      { name: 'South Los Santos',    desc: 'Franklin\'s home turf · Chamberlain Hills, Davis.' },
      { name: 'Sandy Shores',        desc: 'Trevor\'s desert hideout · trailer parks and meth labs.' },
      { name: 'Paleto Bay',          desc: 'Pacific Northwest small town · the Bureau heist setting.' },
      { name: 'Mount Chiliad',       desc: 'The state\'s tallest peak · cable car, UFO conspiracy.' },
      { name: 'Grand Senora Desert', desc: 'Sand-flat racing playground east of Sandy Shores.' },
      { name: 'Alamo Sea',           desc: 'Polluted desert lake · jet ski territory.' },
    ],
  },

  news: {
    intro:
      'Major dated milestones for GTA V and GTA Online since the 2013 launch. The post-Cayo-Perico years pivoted Rockstar\'s focus toward GTA VI development.',
    entries: [
      { date: '2013-09-17', title: 'Original PS3 / Xbox 360 launch',
        desc: 'Sells $800M day one, $1B in 72 hours · breaks every entertainment-release record.' },
      { date: '2014-11-18', title: 'PS4 / Xbox One enhanced version',
        desc: 'First-person mode added · higher draw distance · cross-gen save migration.' },
      { date: '2015-03-10', title: 'Heists update for GTA Online',
        desc: '4-player cooperative heists ship after two years of delays.' },
      { date: '2015-04-14', title: 'PC version + Rockstar Editor',
        desc: 'Higher resolutions, mod support, machinima tool.' },
      { date: '2020-12-15', title: 'Cayo Perico Heist',
        desc: 'First solo-playable heist · biggest Online content drop ever.' },
      { date: '2022-03-15', title: 'PS5 / Xbox Series X|S native version',
        desc: 'Native 4K + 60fps · ray tracing on Pro hardware.' },
      { date: '2023-12-15', title: 'The Chop Shop update',
        desc: 'Yusuf Amir returns · last of the major standalone Online updates.' },
      { date: '2024-12-09', title: 'GTA+ subscription expanded',
        desc: 'Monthly perks · car drops · bonus GTA$ ahead of GTA VI launch ramp.' },
    ],
  },

  features: {
    intro:
      'The systems that defined GTA V on launch and the ones that kept the Online game alive for 12+ years.',
    entries: [
      { title: 'Three Playable Protagonists', desc: 'Switch between Michael, Franklin, and Trevor mid-mission or in the open world.' },
      { title: 'Heists', desc: '3-stage planning + execution for the campaign\'s set-piece jobs and Online co-op heists.' },
      { title: 'First-Person Mode', desc: 'Added in the 2014 re-release · full-game switchable view.' },
      { title: 'Stock Market', desc: 'BAWSAQ + LCN indices · campaign assassinations move specific stocks predictably.' },
      { title: 'Wanted System', desc: '5-star police escalation · helicopter, SWAT, and Merryweather response.' },
      { title: 'Vehicle Modification', desc: 'Los Santos Customs · tunes, paint jobs, performance upgrades, armor plating.' },
      { title: 'Property Ownership', desc: 'Buy garages, businesses, and properties for passive income + base of operations.' },
      { title: 'Radio Stations', desc: '17 in-vehicle stations across genres · plus your own custom station on PC.' },
      { title: 'Rockstar Editor', desc: 'Record gameplay, edit, add filters and music · the machinima toolkit.' },
      { title: 'Director Mode', desc: 'Play as any unlocked NPC or animal · staging tool for the Editor.' },
      { title: 'Strangers and Freaks', desc: '~60 side missions from named NPCs across the map.' },
      { title: 'GTA Online Standalone', desc: 'Sold separately on PS5 / Xbox Series · entry point without the campaign.' },
    ],
  },

  missions: {
    intro:
      'GTA V has 69 main story missions across three protagonists, plus the five major heists that define the campaign\'s structure.',
    chapters: [
      {
        name: 'Prologue',
        setting: 'North Yankton · the 2004 botched bank job that gave Michael his witness-protection identity.',
        missions: [
          { name: 'Prologue' },
        ],
      },
      {
        name: 'Franklin Introduced',
        setting: 'South Los Santos · Franklin\'s repo work for Simeon\'s dealership.',
        missions: [
          { name: 'Franklin and Lamar' },
          { name: 'Repossession' },
          { name: 'Complications' },
          { name: 'Father/Son' },
        ],
      },
      {
        name: 'Michael Returns',
        setting: 'Vinewood Hills · Michael\'s pulled out of retirement after pulling down a mansion.',
        missions: [
          { name: 'Marriage Counseling' },
          { name: 'Daddy\'s Little Girl' },
          { name: 'Friend Request' },
          { name: 'Casing the Jewel Store' },
        ],
      },
      {
        name: 'Heist 1 — Jewel Store Job',
        setting: 'Vangelico · Smart vs Loud approach choice.',
        missions: [
          { name: 'BZ Gas Grenades / Carbine Rifles' },
          { name: 'The Jewel Store Job' },
        ],
      },
      {
        name: 'Trevor Introduced',
        setting: 'Sandy Shores · Trevor\'s feud with the Lost MC.',
        missions: [
          { name: 'Mr. Philips' },
          { name: 'Trevor Philips Industries' },
          { name: 'Nervous Ron' },
          { name: 'Crystal Maze' },
        ],
      },
      {
        name: 'Heist 2 — Merryweather Heist',
        setting: 'Off the coast of Los Santos · offshore retrieval job for Martin Madrazo.',
        missions: [
          { name: 'The Merryweather Heist' },
        ],
      },
      {
        name: 'Heist 3 — Paleto Score',
        setting: 'Paleto Bay · the loud Blaine County small-town bank job.',
        missions: [
          { name: 'Predator' },
          { name: 'Minisub' },
          { name: 'The Paleto Score' },
        ],
      },
      {
        name: 'Heist 4 — Bureau Raid',
        setting: 'FIB Headquarters in downtown LS · Roof or Fire crew approach.',
        missions: [
          { name: 'Three\'s Company' },
          { name: 'The Bureau Raid' },
        ],
      },
      {
        name: 'Heist 5 — The Big Score',
        setting: 'Union Depository in Pacific Bluffs · the campaign\'s climax with three approaches.',
        missions: [
          { name: 'The Big Score (Subtle / Obvious)' },
          { name: 'Lamar Down' },
        ],
      },
      {
        name: 'Final Choice',
        setting: 'Steve Haines and Devin Weston deliver three ending options for Franklin.',
        missions: [
          { name: 'Ending A — Something Sensible (kill Trevor)' },
          { name: 'Ending B — The Time\'s Come (kill Michael)' },
          { name: 'Ending C — The Third Way (kill them all · canonical)' },
        ],
      },
    ],
  },

  activities: {
    intro:
      'Side activities run the full spectrum — from family yoga sessions to multi-stage triathlons, plus 122 unique collectibles across the state.',
    entries: [
      { name: 'Golf',             desc: 'Full 9-hole course at the LS Golf Club · play with friends or solo.' },
      { name: 'Tennis',           desc: 'Singles or doubles · against AI or another protagonist.' },
      { name: 'Yoga',             desc: 'Michael\'s morning routine at home or at Trevor\'s desert ranch.' },
      { name: 'Triathlons',       desc: 'Three escalating run-bike-swim courses ending at Mount Chiliad.' },
      { name: 'Off-road Racing',  desc: 'Series of dirt-track races in Sandy Shores and the desert.' },
      { name: 'Sea Races',        desc: 'Speedboat circuits around the coast and Alamo Sea.' },
      { name: 'Air Races',        desc: 'Plane and helicopter checkpoint races across LS airspace.' },
      { name: 'Stock Market',     desc: 'BAWSAQ + LCN trading · assassinations are the campaign\'s insider plays.' },
      { name: 'Darts',            desc: '301 and Around-the-Clock variants in bars.' },
      { name: 'Shooting Range',   desc: 'Ammu-Nation timed rooms · unlock challenge tiers.' },
      { name: 'Hunting',          desc: 'Cletus\'s introductory questline + free-range hunts.' },
      { name: 'Towing',           desc: 'Tonya\'s 5-job questline · earns the impound property.' },
      { name: 'Cinema',           desc: 'Three Vinewood theaters · short films play in real time.' },
      { name: 'Strangers and Freaks', desc: '~60 side missions from named NPCs across the map.' },
      { name: 'Random Events',    desc: '~57 in-world scripted encounters · armed robberies, hitchhikers, ambushes.' },
      { name: 'Stunt Jumps',      desc: '50 marked ramp jumps · 100% completion target.' },
      { name: 'Letter Scraps',    desc: '50 collectible letters that combine to spell a confession.' },
      { name: 'Spaceship Parts',  desc: '50 parts for Omega\'s alien research questline.' },
      { name: 'Submarine Pieces', desc: '30 nuclear waste containers underwater for Abigail.' },
    ],
  },

  properties: {
    intro:
      'GTA V\'s campaign gives each protagonist a starting home, then opens up the property market for businesses, garages, and entertainment venues that pay weekly income.',
    entries: [
      { name: 'Michael\'s Vinewood Mansion', desc: 'Locked default residence in Rockford Hills · cannot be sold.' },
      { name: 'Franklin\'s Strawberry House', desc: 'Aunt Denise\'s house · Franklin\'s starting residence.' },
      { name: 'Franklin\'s Vinewood Hills House', desc: 'Lester\'s gift after the Bureau Raid · upgraded mansion.' },
      { name: 'Trevor\'s Sandy Shores Trailer', desc: 'Default trailer-park residence.' },
      { name: 'Trevor\'s Vanilla Unicorn', desc: 'Strip club seized in Hang Ten · acts as Trevor\'s LS base.' },
      { name: 'Smoke on the Water Dispensary', desc: 'Franklin can buy the medical marijuana shop · $1.6M.' },
      { name: 'Hookies', desc: 'Beachfront bar near Paleto · weekly income property.' },
      { name: 'Tequi-la-la', desc: 'Vinewood nightclub · expensive but high weekly returns.' },
      { name: 'Tivoli Cinema', desc: 'Vinewood movie theater · pays passive income.' },
      { name: 'Downtown Cab Co.', desc: 'Taxi dispatch · Franklin can buy and run cab missions.' },
      { name: 'McKenzie Field Hangar', desc: 'Trevor\'s plane storage near Sandy Shores · arms-running missions.' },
      { name: 'LS Customs (Hawick / Burton)', desc: 'Two mod shops can be purchased for free upgrades.' },
      { name: 'Sonar Collections Dock', desc: 'Trevor\'s submarine-and-treasure dock · Abigail questline.' },
      { name: 'GTA Online Apartments', desc: 'Multiple unit tiers across LS · the Online progression base.' },
      { name: 'Eclipse Towers / Tinsel Towers', desc: 'High-rise apartment complexes with 10-car garages.' },
    ],
  },

  'cheats-ps5': {
    intro:
      'PS4 / PS5 cheats are entered via on-screen button combinations during gameplay, or by dialing phone numbers from the in-game cellphone (more reliable). Enabling any cheat disables Trophies for the active save.',
    notes: [
      'Phone numbers can be re-dialed at any time to re-enable cheats during the same play session.',
      'Vehicle cheats spawn the vehicle directly in front of the player · clear space first.',
      'Cheats do not save · re-enter after each game load.',
      'GTA Online does NOT support cheats · all entries below are single-player only.',
    ],
    entries: [
      /* Player state */
      { code: '○ L1 △ R2 X □ ○ → □ L1 L1 L1',  effect: 'Restore Health & Armor' },
      { code: '→ X → ← → R1 → ← X △',           effect: 'Invincibility (5 min)' },
      { code: '△ L1 L1 ← ← → ← → □ R1 R2',     effect: 'Give All Weapons & Ammo' },
      { code: '○ ○ L1 ○ ○ ○ L1 L2 R1 △ ○ △',  effect: 'Recharge Special Ability' },
      { code: '△ → ← → △ → ← X ○',             effect: 'Lower Wanted Level' },
      { code: 'R1 R1 ○ R2 ← → ← → ← →',         effect: 'Raise Wanted Level' },
      /* Ammo & combat */
      { code: '→ □ X ← R1 R2 ← → → L1 L1 L1',   effect: 'Explosive Ammo' },
      { code: 'L1 R1 □ R1 ← R2 R1 ← □ → L1 L1', effect: 'Flaming Bullets' },
      { code: '→ ← X △ R1 ○ ○ ○ L2',            effect: 'Explosive Melee Attacks' },
      /* Movement */
      { code: '△ ← → → L2 L1 □',                effect: 'Super Jump' },
      { code: 'Y ← → → LT LB X',                effect: 'Fast Run' },
      { code: '← ← L1 → → R2 ← L2 →',           effect: 'Fast Swim' },
      { code: '← ← L1 R1 L1 → ← L1 ←',          effect: 'Moon Gravity' },
      { code: '△ R1 R1 ← R1 L1 R2 L1',          effect: 'Slidey Cars' },
      { code: '△ ← → → □ R2 R1',                effect: 'Slow Motion' },
      { code: '□ L2 R1 △ ← □ L2 → X',           effect: 'Slow Motion Aim' },
      { code: 'L1 L2 R1 R2 ← → ← → L1 L2 R1 R2 ← → ← →', effect: 'Skyfall' },
      { code: '△ → → ← → □ ○ ←',                 effect: 'Drunk Mode' },
      /* Vehicles */
      { code: '○ → L1 △ R1 X → L1 X X X L1',    effect: 'Spawn Stunt Plane' },
      { code: '○ ○ L1 ○ ○ ○ L1 L2 R1 △ ○ △',   effect: 'Spawn Comet (sports car)' },
      { code: '△ → → ← R1 R2 L2',                effect: 'Spawn PCJ-600 (motorcycle)' },
      { code: '○ → L1 L2 ← R1 L1 L1 ← ← X △',   effect: 'Spawn Sanchez (motorcycle)' },
      { code: '△ R2 ← L1 X → △ ↓ □ L2 L1 L1',   effect: 'Spawn Trashmaster' },
      { code: '△ R1 △ R2 □ L1 L2',               effect: 'Spawn Limo' },
      { code: '→ L2 ↓ L1 ← ← R1 L1 ○ →',        effect: 'Spawn Buzzard (attack helicopter)' },
      { code: '○ → L1 L1 L2 L2 L2 □',            effect: 'Spawn Caddy (golf cart)' },
      { code: '← ← R1 R1 R2 X → L1 L1 X',        effect: 'Spawn BMX' },
      { code: '○ L1 L1 R2 R2 ○ R1 L1 ○',         effect: 'Spawn Duster (crop sprayer)' },
      { code: '→ → L1 L1 L1 → L2 R1 L2 R1',      effect: 'Spawn Kraken (submarine)' },
      { code: '← → L1 L1 R1 L2 L1 → ← → L1',     effect: 'Spawn Parachute' },
      { code: 'L1 L2 R1 R2 ← R2 → L1 □ →',       effect: 'Spawn Rapid GT' },
      /* Weather */
      { code: 'R2 X L1 L1 L2 L2 L2 □',           effect: 'Change Weather (cycle)' },
      /* Phone-number alternative — easier to enter */
      { code: 'PHONE 1-999-887-853',             effect: 'Bang Bang (Explosive Ammo)' },
      { code: 'PHONE 1-999-866-587',             effect: 'TOOLUP — Get Weapons' },
      { code: 'PHONE 1-999-3328-4227',           effect: 'DEADEYE (Slow-Mo Aim)' },
      { code: 'PHONE 1-999-7246-8537',           effect: 'PAINKILLER (Invincibility 5 min)' },
      { code: 'PHONE 1-999-769-3787',            effect: 'POWERUP (Health & Armor)' },
      { code: 'PHONE 1-999-547-861',             effect: 'LIQUOR (Drunk Mode)' },
      { code: 'PHONE 1-999-5299-3787',           effect: 'LAWYERUP (Lower Wanted Level)' },
      { code: 'PHONE 1-999-3844-8483',           effect: 'FUGITIVE (Raise Wanted Level)' },
      { code: 'PHONE 1-999-468-44263',           effect: 'HOTHANDS (Explosive Melee)' },
      { code: 'PHONE 1-999-462-363-4279',        effect: 'INCENDIARY (Flaming Bullets)' },
      { code: 'PHONE 1-999-228-2463',            effect: 'CATCHME (Fast Run)' },
      { code: 'PHONE 1-999-468-44557',           effect: 'GOTGILLS (Fast Swim)' },
      { code: 'PHONE 1-999-7569-3539',           effect: 'SLOWMO (Slow Motion)' },
      { code: 'PHONE 1-999-356-2837',            effect: 'FLOATER (Moon Gravity)' },
      { code: 'PHONE 1-999-625-348-7246',        effect: 'MAKEITRAIN (Change Weather)' },
      { code: 'PHONE 1-999-759-3255',            effect: 'SKYFALL' },
      { code: 'PHONE 1-999-289-9633',            effect: 'BUZZOFF (Spawn Buzzard)' },
      { code: 'PHONE 1-999-2663878',             effect: 'COMET (Spawn Comet)' },
      { code: 'PHONE 1-999-282-2537',            effect: 'BUBBLES (Spawn Kraken Submarine)' },
      { code: 'PHONE 1-999-872-7433',            effect: 'TRASHED (Spawn Trashmaster)' },
      { code: 'PHONE 1-999-2276-78676',          effect: 'BARNSTORM (Spawn Stunt Plane)' },
    ],
  },

  'cheats-xbox': {
    intro:
      'Xbox One / Xbox Series X|S cheats use the same input pattern as PlayStation — D-pad + face buttons + bumpers — entered during gameplay. The phone-number alternative below works identically on every platform.',
    notes: [
      'Achievements are disabled for the active save once any cheat is used.',
      'Same phone numbers work on all platforms · just dial from V\'s cellphone.',
      'Cheats do not save · re-enter after each game load.',
    ],
    entries: [
      /* Player state */
      { code: 'B LB Y RT A X B → X LB LB LB',     effect: 'Restore Health & Armor' },
      { code: '→ A → ← → RB → ← A Y',             effect: 'Invincibility (5 min)' },
      { code: 'Y LB LB ← ← → ← → X RB RT',         effect: 'Give All Weapons & Ammo' },
      { code: 'X X A RB LB X → ← X',                effect: 'Recharge Special Ability' },
      { code: 'Y → ← → Y → ← A B',                 effect: 'Lower Wanted Level' },
      { code: 'RB RB B RT ← → ← → ← →',             effect: 'Raise Wanted Level' },
      /* Ammo & combat */
      { code: '→ X A ← RB RT ← → → LB LB LB',      effect: 'Explosive Ammo' },
      { code: 'LB RB X RB ← RT RB ← X → LB LB',    effect: 'Flaming Bullets' },
      { code: '→ ← A Y RB B B B LT',                effect: 'Explosive Melee Attacks' },
      /* Movement */
      { code: 'Y ← → → LT LB X',                    effect: 'Super Jump' },
      { code: 'Y ← → → LT LB X',                    effect: 'Fast Run' },
      { code: '← ← LB → → RT ← LT →',               effect: 'Fast Swim' },
      { code: '← ← LB RB LB → ← LB ←',              effect: 'Moon Gravity' },
      { code: 'Y RB RB ← RB LB RT LB',               effect: 'Slidey Cars' },
      { code: 'Y ← → → X RT RB',                     effect: 'Slow Motion (third level)' },
      { code: 'X LT RB Y ← X LT → A',                effect: 'Slow Motion Aim' },
      { code: 'LB LT RB RT ← → ← → LB LT RB RT ← → ← →', effect: 'Skyfall' },
      { code: 'Y → → ← → X B ←',                     effect: 'Drunk Mode' },
      /* Vehicles */
      { code: 'B → LB Y RB A → LB A A A LB',         effect: 'Spawn Stunt Plane' },
      { code: 'B B LB B B B LB LT RB Y B Y',         effect: 'Spawn Comet (sports car)' },
      { code: 'Y → → ← RB RT LT',                    effect: 'Spawn PCJ-600 (motorcycle)' },
      { code: 'B → LB LT ← RB LB LB ← ← A Y',        effect: 'Spawn Sanchez (motorcycle)' },
      { code: 'Y RT ← LB A → Y ↓ X LT LB LB',        effect: 'Spawn Trashmaster' },
      { code: 'Y RB Y RT X LB LT',                   effect: 'Spawn Limo' },
      { code: '→ LT ↓ LB ← ← RB LB B →',             effect: 'Spawn Buzzard' },
      { code: 'B → LB LB LT LT LT X',                effect: 'Spawn Caddy (golf cart)' },
      { code: '← ← RB RB RT A → LB LB A',            effect: 'Spawn BMX' },
      { code: 'B LB LB RT RT B RB LB B',             effect: 'Spawn Duster (crop sprayer)' },
      { code: '→ → LB LB LB → LT RB LT RB',          effect: 'Spawn Kraken (submarine)' },
      { code: '← → LB LB RB LT LB → ← → LB',         effect: 'Spawn Parachute' },
      /* Weather */
      { code: 'RT A LB LB LT LT LT X',               effect: 'Change Weather (cycle)' },
      /* Phone numbers (identical to PS5) */
      { code: 'PHONE 1-999-887-853',                 effect: 'Bang Bang (Explosive Ammo)' },
      { code: 'PHONE 1-999-866-587',                 effect: 'TOOLUP — Get Weapons' },
      { code: 'PHONE 1-999-3328-4227',               effect: 'DEADEYE (Slow-Mo Aim)' },
      { code: 'PHONE 1-999-7246-8537',               effect: 'PAINKILLER (Invincibility 5 min)' },
      { code: 'PHONE 1-999-769-3787',                effect: 'POWERUP (Health & Armor)' },
      { code: 'PHONE 1-999-547-861',                 effect: 'LIQUOR (Drunk Mode)' },
      { code: 'PHONE 1-999-5299-3787',               effect: 'LAWYERUP (Lower Wanted Level)' },
      { code: 'PHONE 1-999-3844-8483',               effect: 'FUGITIVE (Raise Wanted Level)' },
      { code: 'PHONE 1-999-468-44263',               effect: 'HOTHANDS (Explosive Melee)' },
      { code: 'PHONE 1-999-462-363-4279',            effect: 'INCENDIARY (Flaming Bullets)' },
      { code: 'PHONE 1-999-228-2463',                effect: 'CATCHME (Fast Run)' },
      { code: 'PHONE 1-999-468-44557',               effect: 'GOTGILLS (Fast Swim)' },
      { code: 'PHONE 1-999-7569-3539',               effect: 'SLOWMO (Slow Motion)' },
      { code: 'PHONE 1-999-625-348-7246',            effect: 'MAKEITRAIN (Change Weather)' },
      { code: 'PHONE 1-999-289-9633',                effect: 'BUZZOFF (Spawn Buzzard)' },
      { code: 'PHONE 1-999-282-2537',                effect: 'BUBBLES (Spawn Kraken Submarine)' },
    ],
  },

  'cheats-pc': {
    intro:
      'PC cheats are typed directly into the chat-style cheat console — press the ` (tilde / backtick) key during gameplay, type the phrase, and hit Enter. Much faster than button combos. All phone numbers from the console pages also work on PC via the in-game cellphone.',
    notes: [
      'Open the cheat console with ` (tilde) — same key as opening Steam chat in many setups.',
      'Cheats disable Rockstar Social Club Achievements for the active save.',
      'Phone numbers (TOOLUP, DEADEYE, etc.) also work — dial from V\'s cellphone.',
      'PC mods (FiveM, ScriptHook) offer many more options beyond these official cheats.',
    ],
    entries: [
      /* Player state */
      { code: 'POWERUP',     effect: 'Restore Health & Armor' },
      { code: 'TURTLE',      effect: 'Restore Health & Armor (alt)' },
      { code: 'POWERFUL',    effect: 'Painkiller — Invincibility (5 min)' },
      { code: 'TOOLUP',      effect: 'Give All Weapons & Ammo' },
      { code: 'RECHARGE',    effect: 'Recharge Special Ability' },
      { code: 'LAWYERUP',    effect: 'Lower Wanted Level' },
      { code: 'FUGITIVE',    effect: 'Raise Wanted Level' },
      /* Combat */
      { code: 'HIGHEX',      effect: 'Explosive Ammo' },
      { code: 'INCENDIARY',  effect: 'Flaming (Incendiary) Bullets' },
      { code: 'HOTHANDS',    effect: 'Explosive Melee Attacks' },
      /* Movement & physics */
      { code: 'HOPTOIT',     effect: 'Super Jump' },
      { code: 'CATCHME',     effect: 'Fast Run' },
      { code: 'GOTGILLS',    effect: 'Fast Swim' },
      { code: 'FLOATER',     effect: 'Moon Gravity' },
      { code: 'SNOWDAY',     effect: 'Slidey Cars' },
      { code: 'SLOWMO',      effect: 'Slow Motion' },
      { code: 'DEADEYE',     effect: 'Slow Motion Aim' },
      { code: 'SKYFALL',     effect: 'Skyfall (spawn falling)' },
      { code: 'LIQUOR',      effect: 'Drunk Mode' },
      /* Vehicles — typed names spawn that vehicle */
      { code: 'COMET',       effect: 'Spawn Comet (sports car)' },
      { code: 'ROCKET',      effect: 'Spawn PCJ-600 (motorcycle)' },
      { code: 'OFFROAD',     effect: 'Spawn Sanchez (dirt bike)' },
      { code: 'BARNSTORM',   effect: 'Spawn Stunt Plane' },
      { code: 'BUZZOFF',     effect: 'Spawn Buzzard (attack helicopter)' },
      { code: 'DUSTOFF',     effect: 'Spawn Cargobob (heavy helicopter)' },
      { code: 'TRASHED',     effect: 'Spawn Trashmaster' },
      { code: 'VINEWOOD',    effect: 'Spawn Stretch Limo' },
      { code: 'BANDIT',      effect: 'Spawn BMX' },
      { code: 'HOLEIN1',     effect: 'Spawn Caddy (golf cart)' },
      { code: 'FLYSPRAY',    effect: 'Spawn Duster (crop-spraying plane)' },
      { code: 'EXTINCT',     effect: 'Spawn Dodo (seaplane)' },
      { code: 'BUBBLES',     effect: 'Spawn Kraken Submarine' },
      { code: 'RAPIDGT',     effect: 'Spawn Rapid GT' },
      { code: 'SKYDIVE',     effect: 'Spawn Parachute' },
      /* Weather */
      { code: 'MAKEITRAIN',  effect: 'Cycle Weather (rain / clear / storm / etc.)' },
    ],
  },

  artworks: {
    intro:
      'Rockstar released a steady stream of stylized key art across 2012–2013 setting the tone for the modern Los Santos. The pieces below are the most circulated promotional plates.',
    entries: [
      { title: 'Three Protagonists Lockup', desc: 'The iconic Michael / Franklin / Trevor portrait split.' },
      { title: 'Original Cover Art', desc: 'Bikini woman on phone in front of pool · the launch box art.' },
      { title: 'Trevor\'s Truck', desc: 'Desert action piece with the Bodhi pickup.' },
      { title: 'Vinewood Skyline', desc: 'Wide horizontal piece used in pre-release marketing.' },
      { title: 'Heist Crew Lineup', desc: 'Promotional art for the Heists update — characters in tactical gear.' },
      { title: 'Beach Scene', desc: 'Vespucci promenade piece used on multiple regional covers.' },
      { title: 'Cayo Perico Key Art', desc: 'The 2020 standalone heist island promotional piece.' },
      { title: 'Doomsday Heist Art', desc: 'Sci-fi tinged silhouette work for the 2017 update.' },
      { title: 'The Contract Key Art', desc: 'Franklin\'s return promotional plate (Dec 2021).' },
      { title: 'Online Race Crew', desc: 'Standalone Online product art post-2021.' },
    ],
  },

  videos: {
    intro:
      'Every major GTA V trailer + the headline Online content reveal videos. Links go to the official Rockstar Games YouTube channel.',
    entries: [
      { title: 'Announcement Trailer',     date: '2011-11-02', href: 'https://www.youtube.com/watch?v=QkkoHAzjnUs' },
      { title: 'Official Trailer #2',      date: '2012-11-14', href: 'https://www.youtube.com/watch?v=Vg__G9zTpJ8' },
      { title: 'Michael / Franklin / Trevor', date: '2013-04-30', href: 'https://www.youtube.com/watch?v=Sl9rVqkpRZc' },
      { title: 'Official Gameplay Video',  date: '2013-07-09', href: 'https://www.youtube.com/watch?v=hvoD7ehZPcM' },
      { title: 'Launch Trailer',           date: '2013-08-29', href: 'https://www.youtube.com/watch?v=L3-cWaCdQfg' },
      { title: 'Online Gameplay Reveal',   date: '2013-08-15', href: 'https://www.youtube.com/watch?v=Gso7ASYWLk0' },
      { title: 'PS4 / Xbox One Launch',    date: '2014-11-13', href: 'https://www.youtube.com/watch?v=N-xHcvug3WI' },
      { title: 'PC Launch Trailer',        date: '2015-04-07', href: 'https://www.youtube.com/watch?v=eqI8gJ-eHL4' },
      { title: 'Cayo Perico Reveal',       date: '2020-11-30', href: 'https://www.youtube.com/watch?v=npV4-c1RXX8' },
      { title: 'PS5 / Xbox Series X|S Launch', date: '2022-03-10', href: 'https://www.youtube.com/watch?v=-d8aKqXuf5o' },
    ],
  },

  soundtrack: {
    searchTitle: 'GTA V',
    intro:
      'GTA V is famous for its 17 in-vehicle radio stations spanning rock, hip-hop, classical, talk radio, and an interactive collaborative station ("The Lab"). The original score was a four-way collaboration between Tangerine Dream, Woody Jackson, The Alchemist, and Oh No.',
    groups: [
      {
        name: 'Original Score',
        tracks: [
          { title: 'Welcome To Los Santos',          artist: 'Tangerine Dream / Woody Jackson / The Alchemist / Oh No' },
          { title: 'Big Score (Mission Track)',      artist: 'Tangerine Dream / Woody Jackson' },
          { title: 'A Legitimate Businessman',       artist: 'Tangerine Dream' },
          { title: 'Welcome To Los Santos (End Credits)', artist: 'Tangerine Dream / Woody Jackson' },
        ],
      },
      {
        name: 'Radio Stations · Rock / Pop',
        tracks: [
          { title: 'Los Santos Rock Radio',          artist: 'DJ Kenny Loggins · classic rock' },
          { title: 'Non-Stop-Pop FM',                artist: 'DJ Cara Delevingne · 2000s pop' },
          { title: 'Channel X',                       artist: 'DJ Keith Morris · classic and modern punk' },
          { title: 'Rebel Radio',                     artist: 'DJ Jesco White · country and rockabilly' },
          { title: 'Vinewood Boulevard Radio',        artist: 'DJ Stephen Pope · garage rock' },
        ],
      },
      {
        name: 'Radio Stations · Hip-Hop & Electronic',
        tracks: [
          { title: 'Radio Los Santos',                artist: 'DJ Big Boy · contemporary hip-hop' },
          { title: 'West Coast Classics',             artist: 'DJ Pooh · west-coast hip-hop' },
          { title: 'The Lab',                          artist: 'Various · the GTA V collaborative album station' },
          { title: 'Soulwax FM',                       artist: '2manydjs · electronic' },
          { title: 'FlyLo FM',                          artist: 'Flying Lotus · experimental electronic' },
          { title: 'WorldWide FM',                      artist: 'Gilles Peterson · global beats' },
        ],
      },
      {
        name: 'Radio Stations · Other',
        tracks: [
          { title: 'East Los FM',                      artist: 'Camilo Lara · Latin alternative' },
          { title: 'Blue Ark',                          artist: 'Lee "Scratch" Perry · reggae' },
          { title: 'Space 103.2',                       artist: 'DJ Bootsy Collins · funk' },
          { title: 'The Lowdown 91.1',                  artist: 'DJ Pam Grier · classic soul' },
          { title: 'WCTR (talk radio)',                 artist: 'Various · West Coast Talk Radio' },
          { title: 'Blaine County Radio',               artist: 'Talk · in-character Sandy Shores commentary' },
          { title: 'Self Radio',                        artist: 'PC only · custom user folder' },
        ],
      },
    ],
  },
};

export default content;
