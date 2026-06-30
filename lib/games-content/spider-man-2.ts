/**
 * Full deep content for Marvel's Spider-Man 2.
 * Factual public data + original commentary.
 *
 * Skipped categories (don't apply to a web-swinging open-world action game):
 *   vehicles, animals, properties, cheats-ps5 / cheats-xbox / cheats-pc.
 */

import type { GameContent } from './types';

const content: GameContent = {
  editions: {
    intro:
      'Insomniac shipped Spider-Man 2 in three SKUs (Oct 2023, PS5 exclusive). No paid story DLC has launched — only free patches adding New Game+ and accessibility options.',
    tiers: [
      {
        name: 'Standard Edition',
        priceUSD: 69.99,
        bullets: [
          'Full single-player campaign (Peter + Miles)',
          'PS5 exclusive · disc or download',
          'All post-launch free updates included',
          'PS5 Pro enhanced patch supported',
        ],
      },
      {
        name: 'Digital Deluxe Edition',
        priceUSD: 79.99,
        recommended: true,
        bullets: [
          'Everything in Standard',
          '10 unique alternate suits (5 Peter + 5 Miles)',
          'Bonus photo-mode props and stickers',
          '+3 extra skill points',
        ],
      },
      {
        name: 'Collector\'s Edition',
        priceUSD: 229.99,
        bullets: [
          'Physical Standard disc + Digital Deluxe contents',
          '19" Peter + Miles + Venom diorama statue',
          'Steelbook case',
          'Premium magnetic packaging',
        ],
      },
    ],
    notes: [
      'No PS4, PC, or Xbox version has been announced.',
      'Free New Game+ patch shipped in March 2024.',
      'Saves from Spider-Man (2018) and Miles Morales (2020) are not required but provide minor easter eggs.',
    ],
  },

  characters: {
    intro:
      'Spider-Man 2 splits time between Peter and Miles, with Venom as the season-defining antagonist. Below is the principal cast, supporting allies, and the villain roster.',
    roster: [
      { name: 'Peter Parker / Spider-Man', role: 'The senior Spider-Man · symbiote arc takes him dark.' },
      { name: 'Miles Morales / Spider-Man', role: 'The junior Spider-Man · bio-electric powers expanded.' },
      { name: 'Venom (Harry Osborn)',     role: 'Symbiote bonded with Harry · primary antagonist.' },
      { name: 'Mary Jane Watson',         role: 'Daily Bugle journalist · playable in select missions.' },
      { name: 'Norman Osborn',            role: 'Oscorp CEO and NYC mayor · Harry\'s father.' },
      { name: 'Harry Osborn (pre-Venom)', role: 'Peter\'s best friend · dying of a hereditary disease.' },
      { name: 'Kraven the Hunter',        role: 'Sergei Kravinoff · runs the Hunt across NYC.' },
      { name: 'Dr. Curt Connors / Lizard',role: 'Geneticist · transforms into the giant Lizard.' },
      { name: 'Mister Negative (Martin Li)', role: 'Returning villain · brief Act 1 escape arc.' },
      { name: 'Black Cat (Felicia Hardy)',role: 'Cat-burglar ally · standalone mission strand.' },
      { name: 'Wraith (Yuri Watanabe)',   role: 'Former ally turned vigilante · Mary Jane\'s contact.' },
      { name: 'Sandman',                  role: 'Prologue boss · escaped from the Raft.' },
      { name: 'Mysterio',                 role: 'Side-mission antagonist · stage-magic theatrics.' },
      { name: 'Tombstone',                role: 'Crime boss · side-mission arc.' },
      { name: 'Howard',                   role: 'Coney Island pigeon trainer · friendly side quests.' },
      { name: 'Rio Morales',              role: 'Miles\'s mother · Harlem city councilmember.' },
      { name: 'Hailey Cooper',            role: 'Miles\'s love interest · deaf artist with her own arc.' },
      { name: 'Ganke Lee',                role: 'Miles\'s best friend and tech support.' },
      { name: 'J. Jonah Jameson',         role: 'Returning podcast voice · perpetually anti-Spider.' },
      { name: 'The Hunters',              role: 'Kraven\'s elite squad · enemy unit type across the city.' },
    ],
  },

  weapons: {
    intro:
      'Spider-Man uses gadgets, suit powers, and symbiote/venom abilities rather than weapons. Below is the full active loadout — split by character.',
    groups: [
      { name: 'Peter Parker · Gadgets', items: ['Web Shooters', 'Spider-Arms', 'Web Grabber', 'Concussion Strike', 'Thunder Burst', 'Upshot'] },
      { name: 'Peter · Symbiote Powers', items: ['Symbiote Strike', 'Symbiote Slam', 'Symbiote Punch', 'Symbiote Yank', 'Symbiote Surge'] },
      { name: 'Miles Morales · Gadgets', items: ['Web Shooters (modified)', 'Web-Line', 'Lock-On Strike', 'Hologram', 'Thunder Burst', 'Upshot'] },
      { name: 'Miles · Bio-Electric Powers', items: ['Venom Punch', 'Venom Strike', 'Venom Smash', 'Venom Jump', 'Venom Dash', 'Mega Venom Blast'] },
      { name: 'Universal · Suit Tech Mods', items: ['Web Reserve Boost', 'Focus Generator', 'Stealth Boost', 'Health Regen', 'Damage Resistance', 'Air Trick Boost'] },
    ],
  },

  map: {
    intro:
      'Spider-Man 2 nearly doubles the playable area of the 2018 original — adding the boroughs of Brooklyn and Queens to the existing Manhattan map. Total: ~110 square city blocks.',
    regions: [
      { name: 'Financial District',  desc: 'Lower Manhattan · Wall Street, skyscraper swinging.' },
      { name: 'Greenwich Village',   desc: 'Sanctum Sanctorum visible · the Bohemian district.' },
      { name: 'Midtown',             desc: 'Times Square, Daily Bugle HQ, Avengers Tower in skyline.' },
      { name: 'Hell\'s Kitchen',     desc: 'West-side Manhattan · classic vigilante turf.' },
      { name: 'Upper West Side',     desc: 'Central Park\'s west flank.' },
      { name: 'Upper East Side',     desc: 'Museum Mile · Symkarian Embassy.' },
      { name: 'Harlem',              desc: 'Miles\'s home neighbourhood · Rio Morales\'s base.' },
      { name: 'Brooklyn · DUMBO',    desc: 'Brooklyn Bridge approach · industrial waterfront.' },
      { name: 'Brooklyn · Williamsburg', desc: 'Hipster boroughs and graffiti hotspots.' },
      { name: 'Brooklyn Heights',    desc: 'Brownstone neighbourhoods south of the bridge.' },
      { name: 'Coney Island',        desc: 'Howard\'s pigeon coop · boardwalk ferris wheel landmark.' },
      { name: 'Queens · Astoria',    desc: 'Peter and Aunt May\'s home borough.' },
      { name: 'Queens · Long Island City', desc: 'Industrial waterfront across from Midtown.' },
      { name: 'Brooklyn Visions Academy', desc: 'Miles\'s high school · sub-region in Brooklyn.' },
    ],
  },

  news: {
    intro:
      'Major dated milestones for Marvel\'s Spider-Man 2 from the launch through post-release content updates.',
    entries: [
      { date: '2023-10-20', title: 'Launch on PS5',
        desc: 'Sells 2.5M copies in 24 hours · Sony\'s fastest-selling PlayStation Studios title.' },
      { date: '2023-12-12', title: 'Patch 1.001.005 — Performance + bug fixes',
        desc: 'Texture pop-in fix and stability pass after the holiday rush.' },
      { date: '2024-01-30', title: 'Accessibility update + audio descriptions',
        desc: 'Adds full audio description and expanded customization options.' },
      { date: '2024-03-07', title: 'New Game+ patch',
        desc: 'Brings the long-requested NG+ mode, golden suit colour variants, and 4 new suits.' },
      { date: '2024-09-12', title: 'Quality Update — bug pass',
        desc: 'Final quality patch before Insomniac focused on Wolverine and Spider-Man 3.' },
      { date: '2024-11-07', title: 'PS5 Pro enhanced patch',
        desc: 'Pro-only ray-tracing mode + dedicated 60fps Fidelity tier.' },
      { date: '2026-02-22', title: 'Marvel\'s Wolverine release window confirmed',
        desc: 'Insomniac roadmap shows Spider-Man 3 targeting late 2027.' },
    ],
  },

  features: {
    intro:
      'Spider-Man 2 brings dual protagonists, the symbiote suit, and traversal upgrades (web wings) on top of the 2018 game\'s combat foundation. Below are the headline systems.',
    entries: [
      { title: 'Dual Protagonists',     desc: 'Switch between Peter and Miles in the open world · independent skill trees.' },
      { title: 'Symbiote Powers',       desc: 'Peter\'s mid-game arc · tendril-based finishers and powers.' },
      { title: 'Bio-Electric Powers',   desc: 'Miles\'s upgraded venom abilities · more crowd control.' },
      { title: 'Web Wings',             desc: 'Glide between boroughs · the Hudson and East River become viable traversal zones.' },
      { title: 'Web Lines',             desc: 'Permanent zip-line setup for traversal puzzles and stealth flanks.' },
      { title: 'Suit Variants',         desc: '60+ suits with independent colour variants · pair any with any power set.' },
      { title: 'Photo Mode',            desc: 'Stage filters, pose options, depth-of-field for portrait swinging.' },
      { title: 'Accessibility Tools',   desc: 'Slow-motion, auto-complete-QTE, high-contrast, expanded ASL toggles.' },
      { title: 'New Game+',             desc: 'Post-launch patch · carry skills + suits + tech parts into a fresh run.' },
      { title: 'PS5 Pro Enhanced',      desc: 'Ray-tracing in performance mode · dedicated Pro fidelity tier.' },
      { title: 'Combat Combos',         desc: 'Parry · dodge · gadget · suit power · finishers chain across light and heavy attacks.' },
      { title: 'Crime Scanner App',     desc: 'Phone-overlay tool for finding open-world hustles and side content.' },
    ],
  },

  missions: {
    intro:
      'The campaign runs roughly 25 hours across ~35 main story missions. Story beats span Sandman\'s prologue, Kraven\'s Hunt, the Symbiote arc with Harry, and the Venom finale.',
    chapters: [
      {
        name: 'Prologue',
        setting: 'Sandman escapes the Raft · Peter and Miles team up over downtown Manhattan.',
        missions: [
          { name: 'Surface Tension' },
          { name: 'The Big Apple' },
        ],
      },
      {
        name: 'The Hunt Begins',
        setting: 'Kraven and his Hunters arrive in New York · they\'re hunting NYC\'s rogues for sport.',
        missions: [
          { name: 'Friendly Neighborhood' },
          { name: 'Show Me New York' },
          { name: 'Just Like Old Times' },
          { name: 'The Hunters' },
          { name: 'Don\'t Be Scared' },
        ],
      },
      {
        name: 'Harry & The Symbiote',
        setting: 'Peter reconnects with Harry · Oscorp tests the experimental black suit.',
        missions: [
          { name: 'Tour the EMF' },
          { name: 'Amends' },
          { name: 'You Can\'t Stop Yourself' },
          { name: 'Wishful Thinking' },
          { name: 'Symbiotic Relationship' },
        ],
      },
      {
        name: 'Lizard Hunt',
        setting: 'Dr. Curt Connors transforms · Kraven\'s arena pulls in the Lizard.',
        missions: [
          { name: 'How My Stuff Got Here' },
          { name: 'A New Yorker' },
          { name: 'Lights, Camera...' },
          { name: 'Spider-Hunter' },
        ],
      },
      {
        name: 'Symbiote Spiral',
        setting: 'Peter loses control of the black suit · Miles steps up.',
        missions: [
          { name: 'Anything Can Be Broken' },
          { name: 'The Flame' },
          { name: 'Hero Time' },
          { name: 'Just Press Play' },
        ],
      },
      {
        name: 'Venom Rises',
        setting: 'Harry bonds permanently with the symbiote and weaponises the bond.',
        missions: [
          { name: 'A Better Tomorrow' },
          { name: 'Set Things Right' },
          { name: 'Bedside Manner' },
          { name: 'No Escape' },
          { name: 'Two Months Later' },
        ],
      },
      {
        name: 'Endgame',
        setting: 'Venom\'s symbiote invasion of Manhattan · Peter and Miles team for the final stand.',
        missions: [
          { name: 'They Don\'t Know What\'s Coming' },
          { name: 'Spider-Men' },
          { name: 'A Great Responsibility' },
          { name: 'Truths Revealed' },
          { name: 'Climax — finale boss' },
          { name: 'Post-game · The Spider Society' },
        ],
      },
    ],
  },

  activities: {
    intro:
      'Outside the main story, the city fills with FNSM app reports, Hunter Bases, science experiments, and the 42-spot Spider-Bot collectible chase. Photo mode is its own pastime here.',
    entries: [
      { name: 'FNSM App Hustles',       desc: 'Friendly-Neighbourhood-Spider-Man app · open-world hustles called in by NPCs.' },
      { name: 'Hunter Bases',           desc: 'Kraven\'s lieutenant strongholds · clear all 13 across NYC.' },
      { name: 'EMF Experiments',        desc: 'Peter\'s side science · electromagnetic field repair across the city.' },
      { name: 'Symbiote Nests',         desc: 'Late-game · clear infested zones spreading through the city.' },
      { name: 'Mysterio Mind Games',    desc: 'Themed challenge missions hidden in arcades around the city.' },
      { name: 'Sandman Cyclones',       desc: 'Story-driven side hunt for Sandman\'s scattered crystal shards.' },
      { name: 'Marko\'s Memories',      desc: 'Memory fragments collected for the Sandman arc.' },
      { name: 'Spider-Bot Collection',  desc: '42 collectible bots across the city · unlocks the bonus Spider-Bots suit.' },
      { name: 'Photo Ops',              desc: 'Hidden landmarks where Peter can snap stage-perfect photos.' },
      { name: 'Howard\'s Pigeon Hunt',  desc: 'Side questline at Coney Island · catch escaped pigeons.' },
      { name: 'Prowler Stashes',        desc: 'Aaron Davis\'s hidden caches across Brooklyn and Queens.' },
      { name: 'Brooklyn Visions Hangouts', desc: 'Slice-of-life Miles side missions at his high school.' },
      { name: 'Suit Unlocks',           desc: '~60 suits unlocked through story milestones, tech farming, and challenges.' },
      { name: 'Combat Challenges',      desc: 'Skyscraper-top duels with Hunter elites · top time leaderboards.' },
      { name: 'Photo Mode Tours',       desc: 'Stage suits + poses + filters · share to PS5 Activities.' },
    ],
  },

  artworks: {
    intro:
      'Insomniac released stylised painted-style key art across 2021–2023 setting up the dual-protagonist marketing push. Below are the most circulated promotional plates.',
    entries: [
      { title: 'Reveal Key Art',            desc: 'PlayStation Showcase 2021 · Peter and Miles back-to-back with Venom silhouette.' },
      { title: 'Standard Edition Cover',    desc: 'Two Spider-Men side-by-side in front of NYC skyline · the launch box art.' },
      { title: 'Symbiote Suit Reveal',      desc: 'Peter in the black suit with tendrils · centerpiece of the Symbiote arc marketing.' },
      { title: 'Venom Roar',                desc: 'Venom in full-rise mode · used for the Game Awards trailer slate.' },
      { title: 'Kraven Hunting',            desc: 'Sergei Kravinoff with spear · used on the Hunter mission marketing.' },
      { title: 'Miles in Harlem',           desc: 'Standalone Miles plate used for the Harlem-focused marketing.' },
      { title: 'Mary Jane Spotlight',       desc: 'MJ in tactical gear · used for the MJ-playable mission marketing.' },
      { title: 'NYC Web Wings',             desc: 'Wide horizontal piece showing the new traversal mechanic.' },
      { title: 'Spider-Society Endgame',    desc: 'Post-credits-tease key art for the post-launch update.' },
      { title: 'Collector Statue Render',   desc: 'Triple-Spider + Venom diorama used on the Collector\'s Edition page.' },
    ],
  },

  videos: {
    intro:
      'Every major Spider-Man 2 trailer from the September 2021 PlayStation Showcase reveal through the launch and NG+ patches. Links go to the official PlayStation YouTube channel.',
    entries: [
      { title: 'Reveal Trailer (PlayStation Showcase)', date: '2021-09-09', href: 'https://www.youtube.com/watch?v=GZ0eMUkfXxQ' },
      { title: 'Gameplay Reveal',                       date: '2023-05-24', href: 'https://www.youtube.com/watch?v=W3l37Q1KqlA' },
      { title: 'Story Trailer',                          date: '2023-08-23', href: 'https://www.youtube.com/watch?v=ojzpzERaHRo' },
      { title: 'Launch Trailer',                         date: '2023-10-16', href: 'https://www.youtube.com/watch?v=zXG7zrSWFR8' },
      { title: 'Behind the Scenes — Symbiote',           date: '2023-11-13', href: 'https://www.youtube.com/watch?v=PXP6V-OPNFc' },
      { title: 'New Game+ Patch Trailer',                date: '2024-03-07', href: 'https://www.youtube.com/watch?v=YwlfFXXr2vM' },
      { title: 'PS5 Pro Patch Trailer',                  date: '2024-11-07', href: 'https://www.youtube.com/watch?v=yPNTPgSmuI8' },
    ],
  },

  soundtrack: {
    searchTitle: 'Marvel\'s Spider-Man 2',
    intro:
      'The score is composed by John Paesano (the trilogy\'s through-line composer) with additional cues by Pete Scaturro. Sony Classical released the full OST digitally on launch day with vinyl pressings following in 2024.',
    groups: [
      {
        name: 'Main Themes',
        tracks: [
          { title: 'Marvel\'s Spider-Man 2 Main Theme', artist: 'John Paesano' },
          { title: 'Be Greater Together',                artist: 'John Paesano' },
          { title: 'Two Spider-Men',                     artist: 'John Paesano' },
          { title: 'Symbiote Suite',                     artist: 'John Paesano' },
        ],
      },
      {
        name: 'Character Themes',
        tracks: [
          { title: 'Peter\'s Theme',                     artist: 'John Paesano' },
          { title: 'Miles\'s Theme',                     artist: 'John Paesano' },
          { title: 'Mary Jane Watson',                    artist: 'John Paesano' },
          { title: 'Kraven the Hunter',                   artist: 'John Paesano' },
          { title: 'Harry Osborn',                        artist: 'John Paesano' },
        ],
      },
      {
        name: 'Combat & Action Cues',
        tracks: [
          { title: 'The Sandman Roars',                   artist: 'John Paesano' },
          { title: 'Lizard Chase',                         artist: 'John Paesano' },
          { title: 'Symbiote Surge',                       artist: 'John Paesano' },
          { title: 'Hunters in the City',                  artist: 'John Paesano' },
          { title: 'Venom Rises',                          artist: 'John Paesano' },
        ],
      },
      {
        name: 'Endgame & Finale',
        tracks: [
          { title: 'The Final Confrontation',              artist: 'John Paesano' },
          { title: 'A Better Tomorrow',                    artist: 'John Paesano' },
          { title: 'End Credits — Spider-Man 2',           artist: 'John Paesano' },
        ],
      },
    ],
  },
};

export default content;
