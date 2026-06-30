/**
 * Deep content for Helldivers 2 (Arrowhead / Sony, 2024).
 * Factual public data + original commentary.
 *
 * Skipped categories: animals, properties, vehicles (the FRV + Patriot mech
 * are stratagems · included under weapons instead), cheats — Helldivers is
 * a competitive co-op live-service and ships without cheat codes.
 */

import type { GameContent } from './types';

const content: GameContent = {
  overview: {
    intro:
      'Helldivers 2 is Arrowhead Game Studios\' top-down co-op shooter from 2015, reborn as a 3rd-person squad shooter on PS5 and PC. It launched February 8 2024, peaked at ~458k concurrent Steam players that month, and turned into the year\'s defining live-service surprise. The shared Galactic War lets players liberate or lose entire planets to Terminid, Automaton, and (since Dec 2024) Illuminate factions.',
  },

  editions: {
    intro:
      'Two SKUs only — Standard and the Super Citizen Edition. No paid season pass; the Warbond Battle Passes never expire.',
    tiers: [
      {
        name: 'Standard Edition',
        priceUSD: 39.99,
        bullets: [
          'Full game · all factions · the Galactic War story',
          'Helldivers Mobilize Warbond (the free-tier premium pass)',
          '1,000 Super Credits to spend on cosmetics or buying premium Warbonds',
          'PS5 + PC (Steam) · cross-play between both',
        ],
      },
      {
        name: 'Super Citizen Edition',
        priceUSD: 59.99,
        recommended: true,
        bullets: [
          'Everything in Standard',
          '+ Steeled Veterans premium Warbond (unlocked immediately · ~1000 credits value)',
          '+ DP-53 Savior of the Free armor + cape',
          '+ MP-98 Knight SMG (Super Citizen exclusive weapon)',
          '+ Title: Super Citizen · displayed beside player tag',
          '+ Stratagem Hero arcade machine in the Ship\'s lounge',
        ],
      },
    ],
    notes: [
      'Warbond Battle Passes (~$10 each) never expire — buy whenever, work at your own pace.',
      'Super Credits are earnable in-mission (small drops on every map).',
      'No microtransaction beyond Warbonds + cosmetic packs — pure cosmetic gating.',
      'Cross-progression between PS5 and PC arrived June 2024 via PSN-link.',
    ],
  },

  characters: {
    intro:
      'Helldivers 2 is faction-driven, not character-driven. Your player is the named character — Super Earth\'s disposable democracy-spreader. The "roster" below covers the named NPCs you hear over comms plus the three antagonist factions you fight.',
    roster: [
      { name: 'The Helldiver (you)', role: 'Customisable disposable trooper · 20-second deployment turn-around when you die in orbit.' },
      { name: 'Democracy Officer',   role: 'Ship-side NPC · reminds you to obey Super Earth · sells warbonds and Stratagems.' },
      { name: 'Master at Arms',      role: 'Ship-side NPC · armoury merchant for weapons and grenades.' },
      { name: 'Bridge Officer',      role: 'Manages the SES Destroyer\'s Stratagem orbital strikes.' },
      { name: 'Ship\'s Voice',       role: 'Onboard AI · sarcastic patriotic narrator throughout missions.' },
      { name: 'Joel (community in-joke)', role: 'The Arrowhead Game Master · live-tunes Major Order outcomes · adopted name from Arrowhead\'s dev.' },
      /* Factions */
      { name: 'Terminids',           role: 'Faction · giant bug-swarm enemies · farm them for E-710 fuel · spawns: Warriors, Hunters, Stalkers, Chargers, Bile Titans, Impalers.' },
      { name: 'Automatons',          role: 'Faction · authoritarian robot uprising · ranged-heavy gauntlets, jetpack troops, tanks, Hulks, Factory Striders.' },
      { name: 'Illuminate',          role: 'Faction · psionic squid aliens · returned Dec 12 2024 · Voteless zombie units, Overseers, Harvesters tripods.' },
      { name: 'Super Earth',         role: 'Faction · your "side" · post-WW3 democratic federation · narrated as utopia, played as fascism satire.' },
    ],
  },

  weapons: {
    intro:
      'Weapons divide into Primaries (mid-range), Secondaries (sidearms), Throwables, and Stratagems (the call-down orbital + support arsenal that defines the game). Below is the current loadout structure across all post-launch Warbonds through early 2026.',
    groups: [
      {
        name: 'Primary — Assault Rifles',
        items: [
          'AR-23 Liberator (starter rifle)',
          'AR-23P Liberator Penetrator (armour-piercing variant)',
          'AR-23C Liberator Concussive (knockback shots)',
          'BR-14 Adjudicator (battle rifle · DMR feel)',
          'AR-61 Tenderizer (high-fire-rate Hellfire Warbond)',
        ],
      },
      {
        name: 'Primary — Energy / Plasma',
        items: [
          'SG-8S Slugger (heavy slug shotgun)',
          'LAS-5 Scythe (continuous laser beam)',
          'LAS-16 Sickle (laser with heat-sink mag)',
          'PLAS-1 Scorcher (plasma assault rifle)',
          'PLAS-101 Purifier (charged plasma · Cutting Edge Warbond)',
          'ARC-12 Blitzer (lightning shotgun · Cutting Edge)',
        ],
      },
      {
        name: 'Primary — Shotguns & Specials',
        items: [
          'SG-225 Breaker (legendary pre-nerf shotgun)',
          'SG-225IE Breaker Incendiary',
          'SG-225SP Breaker Spray and Pray',
          'CB-9 Exploding Crossbow',
          'R-36 Eruptor (explosive bolt-action rifle · Democratic Detonation)',
          'JAR-5 Dominator (jet-propelled boltgun)',
          'CONSTITUTION (long rifle · Polar Patriots)',
        ],
      },
      {
        name: 'Secondary Sidearms',
        items: [
          'P-2 Peacemaker (starter pistol)',
          'P-19 Redeemer (full-auto SMG-pistol)',
          'P-4 Senator (revolver · armour-piercing rounds)',
          'GP-31 Grenade Pistol (single-shot launcher · Democratic Detonation)',
          'CQC-7 One True Flag (knife sidearm · Killzone collab)',
          'SG-22 Bushwhacker (sawn-off triple-barrel)',
        ],
      },
      {
        name: 'Grenades & Throwables',
        items: [
          'G-12 High Explosive',
          'G-16 Impact (instant-detonate)',
          'G-23 Stun (crowd control)',
          'G-3 Smoke',
          'G-10 Incendiary',
          'G-50 Seeker (lock-on Killzone collab)',
        ],
      },
      {
        name: 'Stratagems — Eagle Airstrikes',
        items: [
          'Eagle Airstrike (4-charge bombing run)',
          'Eagle Cluster Bomb',
          'Eagle 110mm Rocket Pods',
          'Eagle 500kg Bomb (the kraken-killer)',
          'Eagle Strafing Run',
          'Eagle Smoke Strike',
          'Eagle Napalm Airstrike',
        ],
      },
      {
        name: 'Stratagems — Orbital Strikes',
        items: [
          'Orbital Precision Strike',
          'Orbital Railcannon Strike (kills any single unit · long CD)',
          'Orbital Gas Strike',
          'Orbital EMS Strike',
          'Orbital Laser (4-uses per mission)',
          'Orbital Walking Barrage',
          'Orbital 380mm HE Barrage',
          'Orbital Napalm Barrage',
        ],
      },
      {
        name: 'Stratagems — Support Weapons',
        items: [
          'Stalwart (light MG)',
          'MG-43 Machine Gun (mid-tier MG)',
          'HMG (heavy machine gun)',
          'Anti-Materiel Rifle (sniper)',
          'Recoilless Rifle (anti-armour reload-required)',
          'EAT-17 (Expendable Anti-Tank · single use)',
          'Spear (lock-on anti-tank)',
          'Quasar Cannon (charge-up energy rifle)',
          'Flamethrower',
          'Autocannon (legendary all-rounder)',
          'Arc Thrower (chain-lightning)',
          'Grenade Launcher',
          'Laser Cannon',
        ],
      },
      {
        name: 'Stratagems — Vehicles & Mechs',
        items: [
          'FRV (Fast Recon Vehicle · 4-seat buggy · added Q4 2024)',
          'EXO-45 Patriot Exosuit (gatling + rocket mech)',
          'EXO-49 Emancipator Exosuit (twin autocannon mech)',
        ],
      },
    ],
  },

  map: {
    intro:
      'The Galactic Map is a persistent shared front — millions of players simultaneously contribute liberation percentages to each contested planet. Major Orders direct the community focus. Below are the key sectors that defined the war\'s first two years.',
    regions: [
      { name: 'Super Earth (home base)', desc: 'Sol system · safe zone · launch your missions from this hub.' },
      { name: 'Severin Sector',          desc: 'Terminid front · early-war farming sector · birthplace of E-710 fuel.' },
      { name: 'Umlaut Sector',           desc: 'Automaton front · industrial fortress worlds.' },
      { name: 'Cygnus Sector',           desc: 'Mid-war contested sector · seesaw control across factions.' },
      { name: 'Meridian Singularity',    desc: 'The infamous black-hole event of March 2024 that nearly wiped a sector.' },
      { name: 'Malevelon Creek',         desc: 'Player-defined "Vietnam in space" Automaton jungle planet · iconic battle theatre.' },
      { name: 'Tien Kwan',               desc: 'Industrial planet that produced the Exosuits during the spring 2024 push.' },
      { name: 'Calypso',                 desc: 'Heart of the Illuminate counter-offensive · returned Dec 2024.' },
      { name: 'Choohe',                  desc: 'Auto-banner planet · staging area for the Major Order push north.' },
      { name: 'Estanu',                  desc: 'Late-2024 Terminid bio-research world · spawned the Impaler variant.' },
    ],
  },

  news: {
    intro:
      'Live-service milestones since the Feb 2024 launch · Major Orders, Warbonds, balance patches, and faction returns.',
    entries: [
      { date: '2024-02-08', title: 'Helldivers 2 launches', desc: 'Day-one PS5 + PC release · servers overloaded in week 1.' },
      { date: '2024-02-19', title: 'Steam concurrent peak', desc: '458k concurrent players · 6th-highest in Steam history at the time.' },
      { date: '2024-02-29', title: 'Steeled Veterans Warbond (first premium)', desc: 'First paid Battle Pass · Senator revolver + Breaker Incendiary.' },
      { date: '2024-03-08', title: 'Malevelon Creek lost to Automatons', desc: 'Community-rallying loss · meme-fied as the "Vietnam of Helldivers".' },
      { date: '2024-04-09', title: 'Democratic Detonation Warbond', desc: 'Eruptor + GP-31 Grenade Pistol + Crossbow added.' },
      { date: '2024-05-02', title: 'PSN account controversy / reversal', desc: 'Sony forced PSN linkage on PC · backlash drove a reversal in 4 days.' },
      { date: '2024-05-09', title: 'Polar Patriots Warbond', desc: 'Constitution rifle + Tenderizer added · "freedom on ice" cosmetics.' },
      { date: '2024-06-13', title: 'Viper Commandos Warbond', desc: 'Jungle-themed cosmetics + the Bushwhacker triple-barrel.' },
      { date: '2024-09-17', title: 'Escalation of Freedom mega-update', desc: 'New Difficulty 10 + Impaler enemy + Emancipator Exosuit.' },
      { date: '2024-11-21', title: 'Truth Enforcers Warbond', desc: 'Tactical Air Support · BR-14 Adjudicator battle rifle.' },
      { date: '2024-12-12', title: 'Illuminate return — Omens of Tyranny', desc: 'Third faction returns from Helldivers 1 · Voteless + Overseers + Harvesters.' },
      { date: '2025-04-10', title: 'Killzone crossover Warbond', desc: 'Helghast-themed armour + STA-52 rifle as the One True Flag SMG.' },
      { date: '2025-08-14', title: 'Year of War retrospective', desc: 'Anniversary patch · permanent FRV vehicle · Stratagem rebalance.' },
    ],
  },

  features: {
    intro:
      'What makes the game tick beyond the obvious bug-blasting.',
    entries: [
      { title: 'The Galactic War',  desc: 'Real-time persistent front · all players contribute to planet liberation %.' },
      { title: 'Major Orders',      desc: 'Server-wide objectives from Joel (the Game Master) · community wins / loses together.' },
      { title: 'Friendly fire ON',  desc: 'Always-on friendly fire · core to comedy and tension · no opt-out.' },
      { title: 'Stratagem code-in', desc: 'Call-down arrows D-pad/key combo · adrenaline-spiking under enemy pressure.' },
      { title: 'Warbond Battle Pass', desc: 'Pay once, never expires · grind at your own pace · stays current.' },
      { title: 'Cross-play / cross-progression', desc: 'PS5 ↔ PC matchmaking · PSN-link saves carry between platforms.' },
      { title: 'Mission modifiers', desc: 'Cold weather, gravity wells, Stratagem jammers · per-planet wrinkles.' },
      { title: 'No microtransactions in-mission', desc: 'Super Credits drop from POIs · everything earnable.' },
      { title: 'Live narrator + propaganda',     desc: 'In-mission ship announcer · pre-mission News broadcasts.' },
      { title: 'Difficulty 10 — Super Helldive', desc: 'Top-tier modifier · 3-Bile Titan spawns + Heavy patrols.' },
    ],
  },

  missions: {
    intro:
      'Missions group into Operations (3 missions per drop). Each Operation contributes liberation % to the parent planet. Below are the canonical mission types you\'ll see across difficulty tiers.',
    chapters: [
      {
        name: 'Major Operations',
        setting: 'Primary 40-minute story-aligned missions.',
        missions: [
          { name: 'Terminate Illegal Broadcast (destroy comms tower)' },
          { name: 'Eradicate Forces (kill X enemies in Y minutes)' },
          { name: 'Defend Generators (escort objective)' },
          { name: 'Launch ICBM (multi-stage launch sequence)' },
          { name: 'Reactor Sabotage (plant + extract under fire)' },
          { name: 'Geological Survey (drill + defend)' },
          { name: 'Spread Democracy (massive defence + liberation)' },
        ],
      },
      {
        name: 'Secondary Missions',
        setting: '15-minute side ops that boost Operation rewards.',
        missions: [
          { name: 'Retrieve Valuable Data' },
          { name: 'Destroy Anti-Air Emplacements' },
          { name: 'Conduct Geological Survey' },
          { name: 'Sabotage Air Base' },
          { name: 'Spread Democracy (mini-defense)' },
        ],
      },
      {
        name: 'Illuminate-exclusive (post Dec 2024)',
        setting: 'Mission types added with the Omens of Tyranny patch.',
        missions: [
          { name: 'Liberate Major City' },
          { name: 'Investigate Crash Site (Harvester tripod)' },
          { name: 'Disrupt Calypso Signal' },
        ],
      },
      {
        name: 'Live Major Orders (examples)',
        setting: 'Community-wide objectives narrated by High Command.',
        missions: [
          { name: 'Liberate Malevelon Creek (failed · iconic loss · March 2024)' },
          { name: 'Defend Tien Kwan (succeeded · unlocked Exosuit · April 2024)' },
          { name: 'Defeat the Meridia Black Hole (mixed outcome · April 2024)' },
          { name: 'Establish Quarantine on Estanu (succeeded · Sep 2024)' },
          { name: 'Repel Illuminate Vanguard (ongoing · Dec 2024)' },
        ],
      },
    ],
  },

  artworks: {
    intro:
      'Promotional captures from the Super Earth Ministry of Truth · real PC screenshots showing the four main mission types.',
    entries: [
      { title: 'Drop pod insertion',  desc: 'Hellpod streaks across the upper atmosphere — the iconic opening shot.', image: '/images/games/helldivers-2/shot-1.jpg' },
      { title: 'Terminid swarm',      desc: 'Mid-mission bug swarm rolls over a ridge · classic Difficulty 7+ encounter.', image: '/images/games/helldivers-2/shot-2.jpg' },
      { title: 'Automaton tank push', desc: 'Hulks and tanks bracketed in a kill-box · Recoilless time.', image: '/images/games/helldivers-2/shot-3.jpg' },
      { title: 'Eagle airstrike',     desc: '500kg bomb descending · the kraken-killer of all stratagems.', image: '/images/games/helldivers-2/shot-4.jpg' },
      { title: 'Extraction',          desc: 'Pelican touches down · 90 seconds to extract · expect overrun.', image: '/images/games/helldivers-2/shot-5.jpg' },
      { title: 'Polar planet',        desc: 'Ice biome · Polar Patriots Warbond setting.', image: '/images/games/helldivers-2/shot-6.jpg' },
      { title: 'Illuminate vanguard', desc: 'Voteless horde + Overseer overlooking a contested city · Dec 2024.', image: '/images/games/helldivers-2/shot-7.jpg' },
      { title: 'Exosuit deployment',  desc: 'Patriot Exo drops in mid-fight · 2 minute mech window.', image: '/images/games/helldivers-2/shot-8.jpg' },
    ],
  },

  videos: {
    intro:
      'Major trailers and Warbond reveal videos · official PlayStation / Arrowhead YouTube channels.',
    entries: [
      { title: 'Cinematic Reveal Trailer',     date: '2023-05-24', href: 'https://www.youtube.com/results?search_query=helldivers+2+reveal+trailer' },
      { title: 'Pre-launch State of Play',     date: '2024-01-31', href: 'https://www.youtube.com/results?search_query=helldivers+2+state+of+play' },
      { title: 'Launch Trailer',               date: '2024-02-08', href: 'https://www.youtube.com/results?search_query=helldivers+2+launch+trailer' },
      { title: 'Steeled Veterans Warbond',     date: '2024-02-26', href: 'https://www.youtube.com/results?search_query=helldivers+2+steeled+veterans' },
      { title: 'Escalation of Freedom update', date: '2024-08-06', href: 'https://www.youtube.com/results?search_query=helldivers+2+escalation+of+freedom' },
      { title: 'Omens of Tyranny — Illuminate return', date: '2024-12-12', href: 'https://www.youtube.com/results?search_query=helldivers+2+omens+of+tyranny' },
      { title: 'Killzone Collaboration Trailer', date: '2025-04-10', href: 'https://www.youtube.com/results?search_query=helldivers+2+killzone+collab' },
    ],
  },

  requirements: {
    intro:
      'Live-service shooter with a relatively forgiving spec floor — the engine scales well from Steam Deck to 4K. Below: console SKUs, PC min vs recommended, and three USD-priced build tiers.',
    consoles: [
      {
        console: 'PlayStation',
        versions: 'PS5 only · no PS4 support',
        best: 'PS5 Pro: 4K 60 fps via Resolution Mode boost patch (Q4 2024)',
        storage: '110 GB',
        notes: ['DualSense haptics on stratagem call-in · adaptive triggers vary per weapon.'],
      },
    ],
    pcMin: {
      os: 'Windows 10 64-bit',
      cpu: 'Intel Core i7-4790K / AMD Ryzen 5 1500X',
      gpu: 'NVIDIA GTX 1050 Ti / AMD Radeon RX 470',
      ram: '8 GB',
      storage: '110 GB SSD (HDD playable but laggy)',
      expectedFps: '1080p · 30-45 fps · Low preset',
    },
    pcRecommended: {
      os: 'Windows 10 / 11 64-bit',
      cpu: 'Intel Core i7-9700K / AMD Ryzen 7 3700X',
      gpu: 'NVIDIA RTX 2060 / AMD RX 6600',
      ram: '16 GB',
      storage: '110 GB NVMe SSD',
      expectedFps: '1440p · 60 fps · High preset with DLSS / FSR Quality',
      notes: 'Disable particle quality one notch in heavy bug swarms for FPS stability.',
    },
    builds: [
      {
        tier: 'Budget · Steam Deck OLED',
        totalUSD: 549,
        targets: '720p · 40-50 fps · Medium preset · verified by Valve',
        parts: [
          { label: 'Device', part: 'Steam Deck OLED (512 GB)', priceUSD: 549 },
        ],
        notes: 'Officially verified · best fit for the price · ships in March 2024 patch for stratagem touch controls.',
      },
      {
        tier: 'Recommended · 1440p 60 fps',
        totalUSD: 1150,
        targets: '1440p · 60 fps high preset · stable in Difficulty 9+',
        parts: [
          { label: 'CPU',     part: 'Ryzen 7 5800X3D (8c/16t · 3D V-cache)',                     priceUSD: 280 },
          { label: 'GPU',     part: 'RX 7700 XT (12 GB · 1440p sweet)',                          priceUSD: 420 },
          { label: 'RAM',     part: '32 GB DDR4-3600 (2x16 GB)',                                  priceUSD:  90 },
          { label: 'Storage', part: '2 TB NVMe Gen4 SSD',                                         priceUSD: 130 },
          { label: 'Motherboard', part: 'B550 · ATX',                                             priceUSD: 100 },
          { label: 'PSU',     part: '750W 80+ Gold',                                              priceUSD: 100 },
          { label: 'Case',    part: 'Mid-tower mesh',                                             priceUSD:  70 },
          { label: 'Cooler',  part: 'Wraith Prism + 2 case fans',                                  priceUSD:  40 },
          { label: 'OS',      part: 'Windows 11 Home OEM',                                        priceUSD:  80 },
        ],
        notes: 'X3D CPU keeps frame pacing stable when 30+ bugs are on screen.',
      },
      {
        tier: '4K + Ultrawide',
        totalUSD: 2400,
        targets: '4K · 60-100 fps · 3440x1440 ultrawide at native 144',
        parts: [
          { label: 'CPU',     part: 'Ryzen 7 7800X3D',                                            priceUSD: 380 },
          { label: 'GPU',     part: 'GeForce RTX 4080 SUPER (16 GB)',                             priceUSD:1000 },
          { label: 'RAM',     part: '32 GB DDR5-6000',                                            priceUSD: 130 },
          { label: 'Storage', part: '2 TB NVMe Gen4 SSD',                                         priceUSD: 160 },
          { label: 'Motherboard', part: 'X670 · ATX',                                             priceUSD: 250 },
          { label: 'PSU',     part: '850W 80+ Platinum',                                          priceUSD: 160 },
          { label: 'Case',    part: 'Premium mesh',                                               priceUSD: 130 },
          { label: 'Cooler',  part: '360mm AIO',                                                  priceUSD: 130 },
          { label: 'Display', part: '34" 3440x1440 175Hz ultrawide (optional)',                   priceUSD: 600 },
        ],
        notes: 'Cap at 144 in Nvidia Control Panel for thermals — bug swarms make GPUs sweat.',
      },
    ],
    completion: {
      mainStory: '0h (live service · no fixed campaign)',
      mainAndExtras: '30-50 hours to clear all current factions on Hard',
      completionist: '300+ hours for max ship modules + every Warbond progression',
      notes: [
        'The Galactic War never "ends" · ongoing community story.',
        'Casual rotation = 5-10 hours/week sustainable.',
        'Stratagem unlocks taper around Level 15 · post that, it\'s cosmetic + Warbond chase.',
      ],
    },
  },
};

export default content;
