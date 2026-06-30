/**
 * Deep content for Cyberpunk 2077 (and Phantom Liberty).
 * Factual public data + original commentary.
 *
 * Skipped categories: animals (no wildlife), cheats-ps5 / cheats-xbox
 * (CP77 has PC dev-console commands only — no official console cheats).
 */

import type { GameContent } from './types';

const content: GameContent = {
  editions: {
    intro:
      'After the 2020 launch fallout and three years of patches culminating in the 2.0 overhaul and Phantom Liberty expansion, Cyberpunk 2077 settled into a 3-SKU lineup. The Ultimate Edition is the only bundle that includes the DLC.',
    tiers: [
      {
        name: 'Standard Edition',
        priceUSD: 39.99,
        bullets: [
          'Base game · all 6 Night City districts',
          'Includes the 2.0 / 2.1+ overhaul',
          'Available on PS5 / Xbox Series X|S / PC',
          'PS4 / Xbox One versions still sold separately',
        ],
      },
      {
        name: 'Phantom Liberty (DLC)',
        priceUSD: 29.99,
        bullets: [
          'Requires the base game · current-gen consoles + PC only',
          'Dogtown district + new main storyline starring Idris Elba',
          'New ending path for V',
          'Adds the Relic skill tree',
        ],
      },
      {
        name: 'Ultimate Edition',
        priceUSD: 69.99,
        recommended: true,
        bullets: [
          'Base game + Phantom Liberty bundled',
          'Saves ~$10 vs. buying them separately',
          'Best entry point if you have not played at all yet',
          'Digital only',
        ],
      },
    ],
    notes: [
      'PS4 / Xbox One versions do NOT support Phantom Liberty — you need PS5, Xbox Series, or PC.',
      'Save data carries across console generations within the same family.',
    ],
  },

  characters: {
    intro:
      'Night City\'s cast is dense — main story, the four life-path origins, the romanceable companions, and Phantom Liberty\'s new spy thriller crew. Below are the principal roles you\'ll spend the most time with.',
    roster: [
      { name: 'V',                       role: 'The player-customized mercenary · protagonist.' },
      { name: 'Johnny Silverhand',       role: 'Rocker terrorist living in V\'s head · played by Keanu Reeves.' },
      { name: 'Jackie Welles',           role: 'V\'s best friend and partner-in-crime in the prologue.' },
      { name: 'Panam Palmer',            role: 'Aldecaldo Nomad clan member · romanceable.' },
      { name: 'Judy Alvarez',            role: 'Mox braindance editor · romanceable.' },
      { name: 'River Ward',              role: 'NCPD detective working alongside V · romanceable.' },
      { name: 'Kerry Eurodyne',          role: 'Johnny\'s old bandmate · romanceable.' },
      { name: 'Goro Takemura',           role: 'Arasaka bodyguard turned wanted fugitive.' },
      { name: 'Dexter DeShawn',          role: 'The fixer who sets the main story in motion.' },
      { name: 'Evelyn Parker',           role: 'Braindance entertainer with a dangerous side gig.' },
      { name: 'Misty Olszewski',         role: 'Esoteric merchant and Jackie\'s girlfriend.' },
      { name: 'Viktor Vector',           role: 'Back-alley ripperdoc · installs V\'s cyberware.' },
      { name: 'Rogue Amendiares',        role: 'Legendary fixer at the Afterlife · linked to Johnny\'s past.' },
      { name: 'Hanako Arasaka',          role: 'Heir to Arasaka with stakes in the corporate succession.' },
      { name: 'Yorinobu Arasaka',        role: 'Rebellious son of Saburo · drives the main plot.' },
      { name: 'Adam Smasher',            role: 'Cybered-out Arasaka enforcer · final boss territory.' },
      { name: 'Solomon Reed',            role: 'Phantom Liberty · FIA agent played by Idris Elba.' },
      { name: 'Songbird',                role: 'Phantom Liberty · NUSA netrunner who pulls V into Dogtown.' },
      { name: 'Alex',                    role: 'Phantom Liberty · FIA contact in Dogtown.' },
      { name: 'Kurt Hansen',             role: 'Phantom Liberty · Barghest leader and Dogtown\'s warlord.' },
    ],
  },

  weapons: {
    intro:
      'Three weapon technologies define combat: Power (conventional firearms), Tech (charge-and-pierce-cover), and Smart (auto-tracking). Plus cyberware and melee make up the full loadout.',
    groups: [
      { name: 'Pistols & Revolvers', items: ['Lexington (Power)', 'Unity (Power)', 'Liberty (Power)', 'Overture Revolver (Power)', 'Kenshin (Smart)', 'Pulsar (Smart)', 'Achilles (Tech)', 'Genjiroh (Tech)'] },
      { name: 'SMGs', items: ['Saratoga (Power)', 'Pulsar (Smart)', 'Yukimura (Smart)', 'M251s Ajax (Tech)', 'Shingen Mark V (Smart)'] },
      { name: 'Assault Rifles', items: ['Copperhead (Power)', 'Ajax (Power)', 'Kyubi (Tech)', 'Yukimura (Smart)', 'D5 Sidewinder (Smart)', 'M179E Achilles (Tech)'] },
      { name: 'Shotguns', items: ['Carnage (Power)', 'Igla (Power)', 'DB-2 Satara (Power)', 'Tactician Headhunter (Tech)'] },
      { name: 'Sniper & Precision', items: ['Nekomata (Tech)', 'SPT32 Grad (Power)', 'Overwatch (Power)', 'Breakthrough (Tech)'] },
      { name: 'Melee', items: ['Katana', 'Mantis Blades (cyberware)', 'Gorilla Arms (cyberware)', 'Monowire (cyberware)', 'Projectile Launch System (cyberware)', 'Tanto', 'Baseball Bat', 'Knife', 'Crowbar'] },
    ],
  },

  vehicles: {
    intro:
      'Night City has a deep car catalog. Post-2.0, you can race, customize, and even chase down stolen vehicles for El Capitan\'s "Auto Fixer" gig chain. Below is a curated sample of the most iconic vehicles in each class.',
    groups: [
      { name: 'Hypercars', items: ['Rayfield Caliburn', 'Rayfield Aerondight S9 "Guinevere"', 'Herrera Outlaw GTS', 'Quadra Sport R-7 "Vigilante"'] },
      { name: 'Sports', items: ['Quadra Type-66 "Avenger"', 'Quadra Type-66 "Javelina"', 'Mizutani Shion "Targa"', 'Quadra V-Tech', 'Porsche 911 II (930) Turbo · Johnny Silverhand\'s iconic ride'] },
      { name: 'Executive', items: ['Villefort Cortes V5000 "Valor"', 'Mahir MT28 "Coach"', 'Mahir Supron FS3', 'Rayfield Quartz "EM2"'] },
      { name: 'Heavy Duty', items: ['Thorton Galena', 'Chevillon Emperor 620 Ragnar', 'Archer Hella EC-D I360', 'Mahir Supron', 'Militech Beast'] },
      { name: 'Off-Road & Trucks', items: ['Thorton Mackinaw "Larimore"', 'Thorton Colby "CSTM"', 'Quadra Vigilante', 'Chevillon Thrax 388 Jefferson'] },
      { name: 'Motorcycles', items: ['Yaiba Kusanagi CT-3X', 'Arch Nazaré', 'Arch Nazaré "Itsumade"', 'Brennan Apollo "Scorpion"', 'Yaiba Kusanagi "Mizuchi"'] },
      { name: 'Phantom Liberty', items: ['Hayabusa S5 "Cosmonaut" (DLC)', 'Kaukaz Mark III "Bratsk" (DLC)', 'Hayabusa S2 "Pegassi"', 'Kaukaz Twintone (DLC)'] },
    ],
  },

  map: {
    intro:
      'Night City sits on the West Coast of the Free State of Northern California, year 2077. Six core districts plus the surrounding Badlands and Dogtown (from Phantom Liberty).',
    regions: [
      { name: 'Watson',         desc: 'V\'s starting district · Kabuki, Little China, Northside Industrial.' },
      { name: 'Westbrook',      desc: 'Japantown, Charter Hill, North Oak · upscale and corporate.' },
      { name: 'City Center',    desc: 'Downtown and Corpo Plaza · the megabuilding skyline.' },
      { name: 'Heywood',        desc: 'V\'s home district · Wellsprings, Vista del Rey, Glen.' },
      { name: 'Pacifica',       desc: 'Half-finished resort zone overrun by the Voodoo Boys.' },
      { name: 'Santo Domingo',  desc: 'Industrial east side · Rancho Coronado, Arroyo.' },
      { name: 'Badlands',       desc: 'Desert surrounding Night City · Aldecaldo Nomad territory.' },
      { name: 'Dogtown',        desc: 'Phantom Liberty · Pacifica\'s walled-off black-market combat zone.' },
    ],
  },

  news: {
    intro:
      'The journey from a disastrous Dec 2020 launch to Game Awards 2024 nominations — major dated milestones for Cyberpunk 2077 and Phantom Liberty.',
    entries: [
      { date: '2020-12-10', title: 'Launch on PS4/Xbox One/PS5/Xbox Series/PC',
        desc: 'Plagued by bugs · pulled from PlayStation Store within a week.' },
      { date: '2021-06-21', title: 'Returns to PlayStation Store',
        desc: 'Sony reinstates after Patch 1.21.' },
      { date: '2022-02-15', title: 'Patch 1.5 — Next-Gen Update',
        desc: 'Native PS5 / Xbox Series build · transit system, apartment customization.' },
      { date: '2023-09-21', title: 'Patch 2.0 — Combat & Skill Overhaul',
        desc: 'Free system overhaul · new perk trees, vehicle combat, NCPD chases.' },
      { date: '2023-09-26', title: 'Phantom Liberty expansion releases',
        desc: 'Dogtown · Idris Elba · new spy thriller arc · Game of the Year nominee.' },
      { date: '2023-12-05', title: 'Patch 2.1 — Free QoL Update',
        desc: 'Adds metro system, radioport, replayable car races, repairable Caliburn.' },
      { date: '2024-09-10', title: 'PS5 Pro patch',
        desc: 'Adds Pro-exclusive performance + fidelity modes.' },
      { date: '2026-01-15', title: 'Project Orion announced',
        desc: 'CDPR confirms Cyberpunk sequel is in pre-production at Boston studio.' },
    ],
  },

  features: {
    intro:
      'Cyberpunk 2077 is built around four pillars — lifepaths, cyberware, deep RPG progression, and a dense first-person open world. Below are the systems that define how Night City plays today.',
    entries: [
      { title: 'Lifepaths',              desc: 'Choose Nomad, Streetkid, or Corpo at character creation · unlocks unique dialog throughout.' },
      { title: 'Cyberware',              desc: 'Implants from ripperdocs · Mantis Blades, Sandevistan, Gorilla Arms, Kerenzikov, etc.' },
      { title: 'Skill Trees (2.0)',      desc: 'Five attribute trees · Body, Reflexes, Tech, Intelligence, Cool · plus the Relic tree from PL.' },
      { title: 'Braindances',            desc: 'Investigative VR sequences · scrub, scan, switch layers to find clues.' },
      { title: 'Hacking',                desc: 'Quickhack daemons · ICEpicks, breach protocols · Intelligence build core mechanic.' },
      { title: 'Stealth or Loud',        desc: 'Every job has multiple approaches · pacifist runs are viable.' },
      { title: 'Vehicle Combat (2.0)',   desc: 'Drive-by, motorcycle melee, side-window combat · added in the 2.0 patch.' },
      { title: 'NCPD Chases (2.0)',      desc: 'Wanted-level system added · MaxTac responds at higher star ratings.' },
      { title: 'Photo Mode',             desc: 'Stage filters, character poses, depth-of-field for Night City portraiture.' },
      { title: 'Multiple Endings',       desc: 'At least 5 main endings + 2 added by Phantom Liberty.' },
      { title: 'Dogtown (PL)',           desc: 'Self-contained walled district · combat sandbox + the Phantom Liberty story.' },
      { title: 'Relic Tree (PL)',        desc: 'New skill tree powered by completing PL\'s story · synergizes with Sandevistan + Mantis Blades.' },
    ],
  },

  missions: {
    intro:
      'The campaign branches early and stays branched. Below are the major mission acts — the base game plus Phantom Liberty\'s self-contained arc that opens new endings.',
    chapters: [
      {
        name: 'Prologue — One of Each Lifepath',
        setting: 'V starts as Nomad, Streetkid, or Corpo before the paths converge.',
        missions: [
          { name: 'The Streetkid / The Nomad / The Corpo' },
          { name: 'The Rescue' },
          { name: 'The Ripperdoc' },
          { name: 'The Ride' },
        ],
      },
      {
        name: 'Act 1 — The Heist',
        setting: 'V and Jackie pull the Konpeki Plaza job for Dexter DeShawn.',
        missions: [
          { name: 'The Information' },
          { name: 'The Pickup' },
          { name: 'The Heist' },
          { name: 'Love Like Fire' },
        ],
      },
      {
        name: 'Act 2 — Finding Hanako',
        setting: 'Open hub · pursue Hanako Arasaka via four parallel routes.',
        missions: [
          { name: 'Playing for Time' },
          { name: 'Automatic Love' },
          { name: 'The Hunt (Judy / River)' },
          { name: 'Disasterpiece' },
          { name: 'Ghost Town' },
          { name: 'Life During Wartime' },
          { name: 'Tapeworm' },
          { name: 'Search and Destroy' },
        ],
      },
      {
        name: 'Act 3 — Nocturne Op55N1',
        setting: 'V\'s final 24 hours · multiple ending paths with different allies.',
        missions: [
          { name: 'Nocturne Op55N1 — the point of no return' },
          { name: 'Ending: All Along the Watchtower (Aldecaldos with Panam)' },
          { name: 'Ending: New Dawn Fades (storm Arasaka with Rogue)' },
          { name: 'Ending: The Sun (Mr. Blue Eyes / become a legend solo)' },
          { name: 'Ending: Path of Glory (let Johnny take the body)' },
          { name: 'Ending: (Don\'t Fear) The Reaper (suicide ending)' },
        ],
      },
      {
        name: 'Phantom Liberty — Act 1',
        setting: 'Songbird pulls V into Dogtown for Operation Black Sapphire.',
        missions: [
          { name: 'Dog Eat Dog' },
          { name: 'Hole in the Sky' },
          { name: 'Spider and the Fly' },
          { name: 'Lucretia My Reflection' },
          { name: 'Run This Town' },
        ],
      },
      {
        name: 'Phantom Liberty — Act 2',
        setting: 'V navigates Kurt Hansen, Reed, and Songbird\'s competing agendas.',
        missions: [
          { name: 'I\'ve Seen That Face Before' },
          { name: 'Get It Together' },
          { name: 'You Know My Name' },
          { name: 'Firestarter' },
          { name: 'Birds with Broken Wings' },
        ],
      },
      {
        name: 'Phantom Liberty — Endings',
        setting: 'A final binary choice that unlocks a new base-game ending.',
        missions: [
          { name: 'Somewhat Damaged (Reed path)' },
          { name: 'The Killing Moon (Songbird path)' },
          { name: 'Tower Ending (unlocks new base-game ending via either path)' },
        ],
      },
    ],
  },

  activities: {
    intro:
      'Night City has more side-content per square block than any other modern open world. Below are the named systems — NCPD scanner work, Cyberpsycho sightings, Gigs, and the Tarot-card chase are the headliners.',
    entries: [
      { name: 'Gigs',                    desc: 'Fixer-given side jobs · 80+ across the city, often with multiple resolution paths.' },
      { name: 'NCPD Scanner Hustles',    desc: 'Police-scanner crimes scattered across all districts · loot + XP.' },
      { name: 'Cyberpsycho Sightings',   desc: '17 unique cybered-up enemies · take down without killing for legendary loot.' },
      { name: 'Side Jobs',               desc: '~50 named NPC side stories · romance arcs, Johnny\'s past, fixer trust building.' },
      { name: 'Tarot Card Hunt',         desc: '23 Tarot graffiti pieces tied to Misty\'s storyline.' },
      { name: 'Vehicle Contracts (2.0)', desc: 'El Capitan\'s "Auto Fixer" missions · steal and customize unique vehicles.' },
      { name: 'Street Races (2.1)',      desc: 'Replayable courses across NC · added in the 2.1 patch.' },
      { name: 'Boxing (Beat on the Brat)', desc: '5 fighting-circuit duels across NC · ends in Watson Coliseum.' },
      { name: 'Braindances',             desc: 'Special investigations scattered across the city.' },
      { name: 'Hidden Gem Shops',        desc: 'Iconic weapon vendors hidden across districts · legendary loot.' },
      { name: 'Apartment Customization', desc: 'Multiple apartments to buy + furniture / lighting customization.' },
    ],
  },

  properties: {
    intro:
      'The 2.0 update added a real real-estate system to Cyberpunk 2077. V can buy multiple apartments across NC and customize each with furniture sets, lighting, and decor.',
    entries: [
      { name: 'Megabuilding H10, Watson', desc: 'V\'s default starting apartment · the iconic Kabuki shoebox.' },
      { name: 'Northside, Watson',         desc: 'Industrial high-rise · cheapest purchase tier.' },
      { name: 'Japantown, Westbrook',      desc: 'Mid-tier neon-lit apartment in the Mox-affiliated district.' },
      { name: 'The Glen, Heywood',         desc: 'Family-neighborhood penthouse · quieter aesthetic.' },
      { name: 'Corpo Plaza, City Center',  desc: 'Top-floor luxury apartment · sky views over downtown.' },
      { name: 'V\'s Sunset Motel',         desc: 'Phantom Liberty Dogtown safehouse · El Capitan-affiliated.' },
      { name: 'Vehicle Stash',             desc: 'Unlimited free parking across NC · summon any owned vehicle.' },
      { name: 'Stash Crate',               desc: 'Shared cross-apartment storage for loot, weapons, items.' },
      { name: 'Apartment Mods (2.0+)',     desc: 'Sleep for buffs, shower for romance boost, free crafting.' },
    ],
  },

  artworks: {
    intro:
      'CD Projekt Red released stylized chrome-and-neon promotional art across 2018–2020 and a second wave for Phantom Liberty in 2023. Below are the most circulated key art plates.',
    entries: [
      { title: 'Original Reveal Key Art',  desc: 'June 2018 Microsoft conference · neon NC skyline with V silhouette.' },
      { title: 'V & Johnny Silverhand',    desc: 'Two-character lockup used on the standard box and most marketing.' },
      { title: 'Female V Portrait',        desc: 'Iconic close-up of female V · used in the deluxe edition steelbook.' },
      { title: 'Male V Portrait',          desc: 'Male V counterpart for the gendered marketing campaign.' },
      { title: 'Night City Skyline',       desc: 'Wide horizontal piece used in the 2.0 marketing push.' },
      { title: 'Adam Smasher',             desc: 'Final-boss villain portrait used in pre-release media.' },
      { title: 'Phantom Liberty Cover',    desc: 'V + Solomon Reed + Songbird · the DLC box art.' },
      { title: 'Kurt Hansen Portrait',     desc: 'Phantom Liberty antagonist art.' },
      { title: 'Mantis Blades V',          desc: 'Iconic combat-pose art used on multiple covers.' },
      { title: 'Concept · Dogtown Skyline', desc: 'Walled district concept piece used in PL marketing.' },
    ],
  },

  videos: {
    intro:
      'Every major Cyberpunk 2077 trailer from the original 2013 teaser through Phantom Liberty. Links go to the official CD Projekt Red YouTube channel.',
    entries: [
      { title: 'Original Teaser',           date: '2013-01-10', href: 'https://www.youtube.com/watch?v=P99qJGrPNLs' },
      { title: 'E3 2018 Reveal',             date: '2018-06-10', href: 'https://www.youtube.com/watch?v=8X2kIfS6fb8' },
      { title: 'Official Gameplay Reveal',  date: '2018-08-27', href: 'https://www.youtube.com/watch?v=vjF9GgrY9c0' },
      { title: 'Keanu Reeves Reveal',       date: '2019-06-09', href: 'https://www.youtube.com/watch?v=qIcTM8WXFjk' },
      { title: 'Launch Trailer',             date: '2020-12-09', href: 'https://www.youtube.com/watch?v=FknHjl7eQ6o' },
      { title: 'Patch 2.0 Trailer',          date: '2023-09-12', href: 'https://www.youtube.com/watch?v=mzgWomzFvFI' },
      { title: 'Phantom Liberty Launch',    date: '2023-09-21', href: 'https://www.youtube.com/watch?v=eqzlBYE0_pY' },
      { title: 'Update 2.1 Showcase',        date: '2023-12-04', href: 'https://www.youtube.com/watch?v=GoNqobYjsAU' },
    ],
  },

  soundtrack: {
    searchTitle: 'Cyberpunk 2077',
    intro:
      'The score is led by Marcin Przybyłowicz, P.T. Adamczyk, and Paul Leonard-Morgan, with licensed tracks across 11 radio stations and the iconic Samurai band performed by Refused. Phantom Liberty added a second album led by Idris Elba with synthwave additions by Run the Jewels.',
    groups: [
      {
        name: 'Score · Base Game',
        tracks: [
          { title: 'I Really Want to Stay at Your House', artist: 'Rosa Walton & Hallie Coggins' },
          { title: 'Phantom Liberty Anthem',              artist: 'Marcin Przybyłowicz' },
          { title: 'V',                                     artist: 'P.T. Adamczyk' },
          { title: 'Hyper – Mxxn',                          artist: 'P.T. Adamczyk' },
          { title: 'The Rebel Path',                        artist: 'Marcin Przybyłowicz' },
        ],
      },
      {
        name: 'Samurai · the in-game band (Refused)',
        tracks: [
          { title: 'Chippin\' In',          artist: 'Samurai (Refused)' },
          { title: 'Never Fade Away',        artist: 'Samurai (Refused)' },
          { title: 'A Like Supreme',         artist: 'Samurai (Refused)' },
          { title: 'The Ballad of Buck Ravers', artist: 'Samurai (Refused)' },
        ],
      },
      {
        name: 'Radio Station Highlights',
        tracks: [
          { title: 'Radio 89.7 — Growl FM',         artist: 'Industrial / Aggrotech curation' },
          { title: 'Radio 88.9 — The Dirge',        artist: 'Synthwave + darkwave' },
          { title: 'Radio 96.1 — RARE FM',           artist: 'Curated Latin trap' },
          { title: 'Radio 91.9 — Royal Blue Radio', artist: 'Chillwave + lounge' },
          { title: 'Radio 98.7 — Body Heat Radio',  artist: 'Dance / pop' },
          { title: 'Radio 99.9 — 7 Nation FM',       artist: 'Synth-rock' },
          { title: 'Radio 100.5 — KGCR',             artist: 'Country-meets-Americana future' },
          { title: 'Radio 107.3 — Morro Rock',       artist: 'Soft rock' },
          { title: 'Radio 105.9 — Pacific Dreams',  artist: 'Synthwave classics' },
          { title: 'Radio 89.7 — Vexelstrom',        artist: 'Electronic experimental' },
        ],
      },
      {
        name: 'Phantom Liberty · Idris Elba Mix Tape',
        tracks: [
          { title: 'They Won\'t Go When I Go',       artist: 'Idris Elba (mixtape curation)' },
          { title: 'Bandolier',                      artist: 'Run the Jewels' },
          { title: 'No Save Point',                  artist: 'Run the Jewels' },
        ],
      },
    ],
  },
};

export default content;
