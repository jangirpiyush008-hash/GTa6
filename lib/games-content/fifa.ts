/**
 * Deep content for the EA Sports FC / FIFA franchise.
 * One umbrella entry covering both the historical FIFA series (1993–2022)
 * and the EA Sports FC rebrand (2023+).
 *
 * Factual public data (release years, version names, team modes, soundtrack
 * curation credits) + original commentary in my own wording.
 */

import type { GameContent } from './types';

const content: GameContent = {
  editions: {
    intro:
      'The franchise releases annually every September. EA Sports FC is the post-2023 rebrand after EA lost the FIFA name license to FIFA itself. Below are the current entries on sale plus historical milestones.',
    tiers: [
      {
        name: 'EA Sports FC 26 — Standard Edition (Upcoming)',
        priceUSD: 69.99,
        recommended: true,
        bullets: [
          'Releases September 26, 2026 (3 months after the World Cup)',
          'PS5 / Xbox Series X|S / PC / Switch 2',
          'Includes refreshed FC IQ tactics + Career Mode overhauls',
          'World Cup 2026 free update bundled at launch',
        ],
      },
      {
        name: 'EA Sports FC 26 — Ultimate Edition',
        priceUSD: 99.99,
        bullets: [
          'Everything in Standard',
          '7 days early access (Sep 19)',
          '4600 FC Points to spend in Ultimate Team',
          'Untradeable Hero Player Item',
          'Cover Star Loan',
        ],
      },
      {
        name: 'EA Sports FC 25 — Standard',
        priceUSD: 39.99,
        bullets: [
          'Last cycle\'s release · still patched as of June 2026',
          'Now permanently discounted across all storefronts',
          'Includes Rush 5v5 mode + Women\'s Champions League',
        ],
      },
      {
        name: 'EA Sports FC Mobile',
        priceUSD: 0,
        bullets: [
          'Free-to-play on iOS + Android',
          'Cross-progression with EA account',
          'World Cup 2026 event content live',
        ],
      },
    ],
    notes: [
      'EA + FIFA split in May 2022 — EA rebranded to EA Sports FC starting with FC 24 (Sep 2023).',
      'FIFA itself has licensed the name to 2K · their FIFA-branded game is in development with no firm release date.',
      'EA still holds licenses for every major league (Premier League, La Liga, Bundesliga, Serie A, Ligue 1, MLS, Saudi Pro League, etc.) plus UEFA + CONMEBOL.',
    ],
  },

  characters: {
    intro:
      'Cover star tradition — every annual release names one or two flagship players. Below are the FC 26 cover athletes plus the historical cover lineage from FIFA 13 onward.',
    roster: [
      /* FC 26 covers */
      { name: 'Jude Bellingham',          role: 'EA Sports FC 26 — Standard cover star (Real Madrid, England).' },
      { name: 'Lamine Yamal',             role: 'EA Sports FC 26 — Ultimate cover athlete (Barcelona, Spain).' },
      { name: 'Aitana Bonmatí',           role: 'EA Sports FC 26 — Women\'s cover athlete (Barcelona Femení, Spain).' },
      /* FC 25 covers */
      { name: 'Jude Bellingham (FC 25)',  role: 'EA Sports FC 25 — Standard cover star.' },
      { name: 'David Beckham (FC 25)',    role: 'EA Sports FC 25 — Ultimate cover legend.' },
      { name: 'Zinedine Zidane (FC 25)',  role: 'EA Sports FC 25 — Ultimate cover legend.' },
      /* FC 24 covers */
      { name: 'Erling Haaland (FC 24)',   role: 'EA Sports FC 24 — Standard + Ultimate cover (Manchester City, Norway).' },
      /* FIFA-era covers (historic) */
      { name: 'Kylian Mbappé (FIFA 23)',  role: 'FIFA 23 cover · last FIFA-branded release.' },
      { name: 'Kylian Mbappé (FIFA 22)',  role: 'FIFA 22 cover · 4th consecutive cover.' },
      { name: 'Kylian Mbappé (FIFA 21)',  role: 'FIFA 21 cover.' },
      { name: 'Eden Hazard + Virgil van Dijk (FIFA 20)', role: 'FIFA 20 dual cover.' },
      { name: 'Cristiano Ronaldo (FIFA 19)', role: 'FIFA 19 cover.' },
      { name: 'Cristiano Ronaldo (FIFA 18)', role: 'FIFA 18 cover.' },
      { name: 'Marco Reus (FIFA 17)',     role: 'FIFA 17 cover · the Frostbite engine launch.' },
      { name: 'Lionel Messi (FIFA 16)',   role: 'FIFA 16 cover · women\'s national teams added.' },
      { name: 'Lionel Messi (FIFA 13–15)', role: 'Cover star for 3 consecutive cycles.' },
      /* Iconic in-game legends */
      { name: 'Pelé',                     role: 'Recurring Icon in Ultimate Team · multiple card tiers.' },
      { name: 'Diego Maradona',           role: 'Icon in FIFA 21 + earlier; removed in later cycles over rights dispute.' },
      { name: 'Johan Cruyff',             role: 'Icon · the Cruyff Turn skill move named after him.' },
      { name: 'Ronaldinho',               role: 'Icon · one of the most popular Ultimate Team cards ever printed.' },
    ],
  },

  map: {
    intro:
      'No traditional "map" — instead, leagues + stadiums + regional licenses. Below is the official competition coverage as of EA Sports FC 26.',
    regions: [
      { name: 'English Premier League',  desc: '20 clubs · official broadcast graphics + stadium scans.' },
      { name: 'Spanish La Liga',          desc: '20 clubs · LaLiga EA Sports official partner.' },
      { name: 'German Bundesliga',        desc: '18 clubs · Bundesliga EA Sports official partner.' },
      { name: 'Italian Serie A',          desc: '20 clubs · official Serie A partnership.' },
      { name: 'French Ligue 1',           desc: '18 clubs · Ligue 1 McDonald\'s partnership.' },
      { name: 'MLS (USA / Canada)',       desc: '29 clubs · expanded with the 2026 World Cup tie-in.' },
      { name: 'Saudi Pro League',         desc: '18 clubs · Roshn Saudi League partnership added in FC 24.' },
      { name: 'Liga MX (Mexico)',         desc: '18 clubs · Apertura + Clausura calendar.' },
      { name: 'UEFA Champions League',    desc: 'Official UEFA partnership · Group + Knockout authentic graphics.' },
      { name: 'UEFA Europa League',       desc: 'Full Europa + Conference League licenses.' },
      { name: 'CONMEBOL Libertadores',    desc: 'Added in EA Sports FC 24 · South American club competition.' },
      { name: 'FIFA Women\'s Champions League', desc: 'Added in FC 25 alongside expanded women\'s rosters.' },
    ],
  },

  news: {
    intro:
      'Major dated milestones for the FIFA → EA Sports FC franchise across the past three years, including the rebrand and the 2026 World Cup tie-in.',
    entries: [
      { date: '2022-09-30', title: 'FIFA 23 launches — last FIFA-branded game',
        desc: 'Cross-play, women\'s club football, World Cup mode added later as a free update.' },
      { date: '2023-05-10', title: 'EA × FIFA partnership ends',
        desc: 'Both parties confirm separation. EA renames the series. FIFA licenses the name elsewhere.' },
      { date: '2023-09-29', title: 'EA Sports FC 24 launches',
        desc: 'First post-rebrand game · introduces PlayStyles + Ultimate Team Evolutions.' },
      { date: '2024-09-27', title: 'EA Sports FC 25 launches',
        desc: 'Rush 5v5 mode replaces Volta · Women\'s Champions League added.' },
      { date: '2025-12-05', title: 'World Cup 2026 draw announced',
        desc: 'FIFA draws 12 groups for the first 48-team tournament.' },
      { date: '2026-06-11', title: 'FIFA World Cup 2026 kicks off',
        desc: 'Hosted across USA, Canada, Mexico · 48 teams · 104 matches through July 19.' },
      { date: '2026-06-15', title: 'EA Sports FC 26 first reveal trailer',
        desc: 'Bellingham announced as cover · World Cup 2026 free update confirmed for launch day.' },
      { date: '2026-09-26', title: 'EA Sports FC 26 release date',
        desc: 'Three months after the World Cup final · ships with the official World Cup 2026 tournament mode.' },
    ],
  },

  features: {
    intro:
      'The FIFA / EA Sports FC formula is built on annual feature drops: tactics overhauls, new modes, expanded license coverage. Below are the current pillars in FC 25 (still patched) and the confirmed additions for FC 26.',
    entries: [
      { title: 'Ultimate Team (FUT)',     desc: 'The franchise\'s flagship mode · build a squad from card packs + transfer market.' },
      { title: 'Career Mode',              desc: 'Solo manager or player career · multi-season RPG-style progression.' },
      { title: 'Pro Clubs',                desc: 'Online 11v11 with friends · each player controls one outfielder + custom keepers.' },
      { title: 'Rush 5v5 (FC 25+)',        desc: 'Fast-paced street-football mode replacing Volta.' },
      { title: 'PlayStyles',               desc: 'Per-player trait system added in FC 24 · gives elite players distinct on-pitch identities.' },
      { title: 'FC IQ Tactics',            desc: 'Tactical overhaul in FC 25 · positional roles + smart-runs system.' },
      { title: 'Women\'s Football',        desc: 'Full club + international rosters · Women\'s Champions League added in FC 25.' },
      { title: 'Cross-Play',                desc: 'PS5 ↔ Xbox Series ↔ PC cross-play in Online Friendlies, Ultimate Team, and Rush.' },
      { title: 'HyperMotion V (Frostbite)', desc: 'Full-team mocap animation system · pulled from 11v11 capture rather than 1v1.' },
      { title: 'Stadium Customisation',    desc: 'FUT Stadium · custom tifos, anthems, board ads.' },
      { title: 'World Cup 2026 (FC 26)',   desc: 'Free update on launch day · official 48-team WC2026 tournament mode.' },
      { title: 'Cross-Save Career',        desc: 'New in FC 26 · carry your Career Mode club between PS / Xbox / PC.' },
    ],
  },

  activities: {
    intro:
      'Outside the core kick-about, the franchise has a dozen meta-modes and live-service hooks. Ultimate Team alone has 12+ sub-activities running on weekly rotation.',
    entries: [
      { name: 'Ultimate Team — Squad Building',  desc: 'Build a chemistry-bound squad from cards earned in packs or bought on the transfer market.' },
      { name: 'Ultimate Team — Division Rivals',  desc: 'Weekly competitive ladder · rewards based on Skill Rating + games won.' },
      { name: 'Ultimate Team — FUT Champions',    desc: 'Weekend Champs Finals · top-tier rewards for the FUT meta crowd.' },
      { name: 'Ultimate Team — Squad Battles',    desc: 'Solo offline mode that rewards FUT currency without PvP pressure.' },
      { name: 'Ultimate Team — Evolutions',        desc: 'Upgrade specific cards through objective-based "training" — added in FC 24.' },
      { name: 'Ultimate Team — Friendlies',        desc: 'House-rules online matches (no rules, weak feet only, etc.).' },
      { name: 'Career Mode — Manager',             desc: 'Take any club from any league · player development, transfers, contract talks.' },
      { name: 'Career Mode — Player',              desc: 'Create your pro · 20-year career arc with international call-ups.' },
      { name: 'Pro Clubs (Clubs)',                 desc: 'Online 11v11 club with your friends · seasonal divisions.' },
      { name: 'Rush 5v5 — Online',                  desc: 'Drop-in online matches in the street-football mode.' },
      { name: 'Rush 5v5 — UT Rush',                 desc: 'Use your Ultimate Team players in Rush · standalone progression.' },
      { name: 'Online Seasons',                     desc: 'Classic 1v1 ladder · 10 divisions.' },
      { name: 'Tournament Mode',                    desc: 'Custom knockout tournaments · friend or solo, any teams.' },
      { name: 'Kick Off',                           desc: 'Drop-in offline match · the original "just play a game" entry point.' },
      { name: 'Skill Games',                        desc: 'Tutorial-style mini-games · earn XP for FUT.' },
    ],
  },

  artworks: {
    intro:
      'EA releases stylised cover art for each annual cycle, then updates the cover periodically through the year for Ultimate Team event art. Below are the most circulated covers of the modern era.',
    entries: [
      { title: 'EA Sports FC 26 — Bellingham Cover', desc: 'Real Madrid kit · neon overlay · the post-rebrand visual identity solidified.' },
      { title: 'EA Sports FC 26 — Ultimate Cover',   desc: 'Yamal in Barcelona kit · paired with Bonmatí for the women\'s version.' },
      { title: 'EA Sports FC 25 — Bellingham',       desc: 'First solo Bellingham cover · post-Real Madrid transfer.' },
      { title: 'EA Sports FC 24 — Haaland',          desc: 'First post-rebrand cover · the Man City Treble kit.' },
      { title: 'FIFA 23 — Kylian Mbappé',            desc: 'Final FIFA-branded cover · PSG kit.' },
      { title: 'FIFA 22 — Mbappé Hypermotion',       desc: 'First Hypermotion-era cover art.' },
      { title: 'FIFA 18 — Cristiano Ronaldo',         desc: 'Real Madrid era · final pre-Juventus FIFA cover for Ronaldo.' },
      { title: 'FIFA 16 — Lionel Messi + Alex Morgan', desc: 'First cover to feature a women\'s player (regional variants).' },
      { title: 'World Cup 2026 Mode Cover',           desc: 'Free update art added in FC 26 · 48-team tournament branding.' },
      { title: 'TOTY Card Art Series',                 desc: 'Annual Team of the Year card art used across promo materials.' },
    ],
  },

  videos: {
    intro:
      'Every major reveal trailer for the EA Sports FC era plus the most-watched FIFA-era trailers. Links go to the official EA Sports FC YouTube channel.',
    entries: [
      { title: 'EA Sports FC 26 — Reveal Trailer',  date: '2026-06-15', href: 'https://www.youtube.com/c/EASportsFC' },
      { title: 'EA Sports FC 25 — Gameplay Deep Dive', date: '2024-08-21', href: 'https://www.youtube.com/c/EASportsFC' },
      { title: 'EA Sports FC 25 — Launch Trailer',  date: '2024-09-26', href: 'https://www.youtube.com/c/EASportsFC' },
      { title: 'EA Sports FC 24 — Reveal',          date: '2023-07-13', href: 'https://www.youtube.com/c/EASportsFC' },
      { title: 'EA Sports FC 24 — Launch Trailer',  date: '2023-09-28', href: 'https://www.youtube.com/c/EASportsFC' },
      { title: 'FIFA 23 — Launch Trailer',          date: '2022-09-29', href: 'https://www.youtube.com/c/EASportsFC' },
      { title: 'FIFA 23 — World Cup Mode',          date: '2022-11-09', href: 'https://www.youtube.com/c/EASportsFC' },
      { title: 'FIFA 22 — HyperMotion Reveal',      date: '2021-07-11', href: 'https://www.youtube.com/c/EASportsFC' },
    ],
  },

  soundtrack: {
    searchTitle: 'EA Sports FC',
    intro:
      'The FIFA / FC soundtrack is one of the most-cited launchpads in modern indie / alt-rock music — over 25 years of annual curation has broken acts from Avicii to Lewis Capaldi to FKA Twigs. Below are the most-circulated cycles plus the FC 26 list.',
    groups: [
      {
        name: 'EA Sports FC 26 — Highlight Tracks',
        tracks: [
          { title: 'Track listing curated by EA Trax',  artist: 'Various · global indie/alt/electronic mix' },
          { title: 'Annual cover-star theme',            artist: 'Bespoke commission' },
        ],
      },
      {
        name: 'FIFA-Era · Iconic Soundtrack Picks',
        tracks: [
          { title: 'Song 2',                             artist: 'Blur · FIFA 98 menu theme' },
          { title: 'Believer',                            artist: 'Imagine Dragons · FIFA 18' },
          { title: 'Pumped Up Kicks',                     artist: 'Foster the People · FIFA 12' },
          { title: 'Wake Me Up',                          artist: 'Avicii · FIFA 14' },
          { title: 'Someone You Loved',                   artist: 'Lewis Capaldi · FIFA 20' },
          { title: 'Two Weeks',                           artist: 'FKA Twigs · FIFA 15' },
          { title: 'Wonderwall',                          artist: 'Oasis · FIFA 1997' },
        ],
      },
      {
        name: 'EA Sports FC Era · Notable Picks',
        tracks: [
          { title: 'Annual curated playlist',            artist: 'EA Trax · 100+ tracks per cycle' },
          { title: 'Ratatat — Loud Pipes',               artist: 'EA Sports FC 24' },
          { title: 'Sampa the Great — Final Form',       artist: 'EA Sports FC 25' },
        ],
      },
      {
        name: 'In-Stadium · Crowd / Broadcast',
        tracks: [
          { title: 'Official League Broadcast Themes',   artist: 'Per-league authentic broadcast music' },
          { title: 'Premier League "Power" theme',        artist: 'Sky Sports licensed broadcast cue' },
          { title: 'Champions League Anthem',             artist: 'UEFA · officially licensed' },
        ],
      },
    ],
  },
};

export default content;
