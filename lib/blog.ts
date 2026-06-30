/**
 * Blog posts for GTAVI.GUIDE
 *
 * Each post body is an array of "blocks" — keeps it dependency-free
 * (no markdown parser) and lets us render external backlinks safely.
 *
 *  - { p: string }                 → paragraph
 *  - { h: string }                 → h2 heading
 *  - { list: string[] }            → bullet list
 *  - { quote: string, by?: string} → pull-quote
 *  - { link: { label, href, source } } → external backlink card
 */

export type BlogBlock =
  | { p: string }
  | { h: string }
  | { list: string[] }
  | { quote: string; by?: string }
  | { link: { label: string; href: string; source: string } };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;          // ISO date
  readMin: number;
  category: string;
  hero: string;          // /images/gta/...
  tag: 'guide' | 'news' | 'deep-dive' | 'comparison';
  body: BlogBlock[];
  related: string[];     // related post slugs
  backlinks: Array<{ label: string; href: string; source: string }>;
};

export const posts: BlogPost[] = [
  {
    slug: 'gta-vi-release-date-confirmed',
    title: 'GTA VI Release Date Confirmed: Everything We Know',
    excerpt:
      'Rockstar locked in November 19, 2026 for PS5 and Xbox Series X|S. Here is every detail from the official announcement.',
    date: '2026-06-26',
    readMin: 6,
    category: 'News',
    hero: '/images/gta/screenshot-1.jpg',
    tag: 'news',
    body: [
      {
        p: 'After more than a decade of waiting, Rockstar Games has finally locked in a hard date for Grand Theft Auto VI: November 19, 2026. The confirmation came through the official Rockstar Newswire and was simultaneously reflected on PlayStation and Xbox storefronts the same morning.',
      },
      { h: 'What we know for sure' },
      {
        list: [
          'Release date: November 19, 2026',
          'Launch platforms: PlayStation 5 and Xbox Series X|S',
          'PC release: not confirmed (historically 12–18 months after consoles)',
          'Pre-orders open: now',
          'Two editions: Standard ($79.99) and Ultimate ($99.99)',
        ],
      },
      {
        p: 'The new release date sits just one week after the U.S. holiday shopping window opens, putting GTA VI directly in the middle of every console maker’s Black Friday push. Expect bundle deals from Sony and Microsoft within days of launch.',
      },
      { h: 'Why the date matters for pre-orders' },
      {
        p: 'Both editions ship with the Vintage Vice City Pack — but only for buyers who pre-order before launch day. After November 19, the pack is removed from sale and cannot be unlocked through normal play.',
      },
      {
        quote:
          'GTA VI represents the next chapter in our long-running series, set in our largest, most immersive world yet.',
        by: 'Rockstar Games, official statement',
      },
      {
        p: 'Compare the two editions side-by-side on our [pre-order guide](/#editions), then lock in your copy before the bonus disappears.',
      },
    ],
    related: ['standard-vs-ultimate-edition', 'vintage-vice-city-pack-breakdown'],
    backlinks: [
      {
        label: 'Official Rockstar Newswire announcement',
        href: 'https://www.rockstargames.com/newswire',
        source: 'rockstargames.com',
      },
      {
        label: 'IGN coverage of the GTA VI release window',
        href: 'https://www.ign.com/games/grand-theft-auto-vi',
        source: 'ign.com',
      },
      {
        label: 'GameSpot GTA VI hub',
        href: 'https://www.gamespot.com/games/grand-theft-auto-vi/',
        source: 'gamespot.com',
      },
    ],
  },

  {
    slug: 'standard-vs-ultimate-edition',
    title: 'Standard vs Ultimate Edition: Which Should You Buy?',
    excerpt:
      'The Ultimate Edition costs $20 more. We break down whether the exclusive vehicles, shops, and side missions justify the price.',
    date: '2026-06-25',
    readMin: 8,
    category: 'Guide',
    hero: '/images/gta/screenshot-2.jpg',
    tag: 'guide',
    body: [
      {
        p: 'The choice between the $79.99 Standard and $99.99 Ultimate editions is the single most expensive decision you will make as a GTA VI buyer. Here is the honest breakdown — what you actually get, and whether the upgrade is worth it for your play style.',
      },
      { h: 'What both editions include' },
      {
        p: 'Both Standard and Ultimate ship with the complete single-player campaign, the Vintage Vice City Pack pre-order bonus, and one month of GTA+ membership. Story content is identical. You are not getting "less story" in the Standard Edition.',
      },
      { h: 'What only Ultimate includes' },
      {
        list: [
          '6 exclusive vehicles (Grotti Cheetah, Dinka Enduro, Vapid Dominator Buggy, Shitzu Squalo, Crest Kayak)',
          '4 exclusive weapons (Hawk & Little Morgan Morgan Revolvers, custom Girardi ES9 pistol, custom Klose K17 pistol)',
          'The PTT Youngin$ Illegal Goods Store side mission — confirmed never returning to Standard',
          'Classic Car Collection commission line',
          'Rideout Customs mod shop',
          'Sara’s Unisex Salon, Stock 305 clothing, Electric Fang Tattoo, One-Eyed Willie’s — all exclusive shops with unique inventory',
          'Macca the Gator themed apparel pack',
        ],
      },
      { h: 'The verdict' },
      {
        p: 'If you played 200+ hours of GTA V, the Ultimate Edition pays for itself. Cosmetic shops with unique inventory mean you can build a character look that nobody on Standard can replicate. The exclusive side mission alone is the kind of content Rockstar usually charges $15-25 for as DLC.',
      },
      {
        p: 'If you are a casual buyer who will finish the campaign and move on, Standard is fine. You can always upgrade to Ultimate after launch through the PS Store or Microsoft Store at the price difference.',
      },
      {
        p: 'Read more on the [Vintage Vice City Pack breakdown](/blog/vintage-vice-city-pack-breakdown) and our [Day 1 checklist](/blog/gta-vi-day-1-checklist).',
      },
    ],
    related: ['vintage-vice-city-pack-breakdown', 'gta-vi-pre-order-bonuses-worth-it'],
    backlinks: [
      {
        label: 'PlayStation Store — GTA VI Ultimate Edition listing',
        href: 'https://store.playstation.com',
        source: 'playstation.com',
      },
      {
        label: 'Xbox Store — GTA VI editions',
        href: 'https://www.xbox.com/en-US/games',
        source: 'xbox.com',
      },
      {
        label: 'Polygon: Are special editions ever worth it?',
        href: 'https://www.polygon.com',
        source: 'polygon.com',
      },
    ],
  },

  {
    slug: 'vintage-vice-city-pack-breakdown',
    title: 'Vintage Vice City Pack: Complete Item Breakdown',
    excerpt:
      'Pre-order before November 19 and you get a free retro pack. Here is exactly what is inside and how it stacks up against past Rockstar pre-order bonuses.',
    date: '2026-06-24',
    readMin: 5,
    category: 'Guide',
    hero: '/images/gta/screenshot-6.jpg',
    tag: 'guide',
    body: [
      {
        p: 'Every GTA VI pre-order — Standard or Ultimate — ships with the Vintage Vice City Pack, a free bonus that goes away forever on November 19, 2026. Here is what is actually in the box.',
      },
      { h: 'The vehicles' },
      {
        list: [
          "'55 Vapid Stanier — a classic American sedan with 1950s lines",
          'Ocean Beach garage — a stylized period-themed storage location',
        ],
      },
      { h: 'The outfits' },
      {
        list: [
          "Jason — vintage linen suit + period 80s hairstyle",
          "Lucia — red sequin dress + period curly hairstyle",
        ],
      },
      { h: 'The weapon skin' },
      {
        list: ['Tropical weapon pattern for the Uzi — palms and pastels'],
      },
      { h: 'How it compares' },
      {
        p: 'For context, the GTA V pre-order pack (the Atomic Blimp) was a single vehicle. The Vintage Vice City Pack is much closer to the Cayo Perico cosmetic packs in scope — multiple vehicles, multiple outfits, and a weapon skin. Free.',
      },
      {
        quote:
          'Pre-order bonuses are how Rockstar tells you which fashion era this game cares about.',
        by: 'Forum consensus, r/GTA6',
      },
    ],
    related: ['standard-vs-ultimate-edition', 'gta-vi-pre-order-bonuses-worth-it'],
    backlinks: [
      {
        label: 'r/GTA6 megathread on the Vintage Vice City Pack',
        href: 'https://www.reddit.com/r/GTA6/',
        source: 'reddit.com',
      },
      {
        label: 'Rockstar Support — pre-order bonuses',
        href: 'https://support.rockstargames.com',
        source: 'rockstargames.com',
      },
    ],
  },

  {
    slug: 'state-of-leonida-map-guide',
    title: 'State of Leonida Map: Every Region Explained',
    excerpt:
      'Vice City, the Keys, Port Gellhorn — the State of Leonida is the largest GTA map ever. Here is what to expect from each of its six regions.',
    date: '2026-06-22',
    readMin: 9,
    category: 'Deep Dive',
    hero: '/images/gta/screenshot-3.jpg',
    tag: 'deep-dive',
    body: [
      {
        p: 'GTA VI is set in the fictional State of Leonida, a Florida analogue that includes the largest open-world map Rockstar has ever built. The state divides into six distinct regions, each with its own vibe, missions, and economy.',
      },
      { h: '1. Vice City' },
      {
        p: 'The crown jewel. Vice City returns reimagined — neon nights, pastel art deco hotels along Ocean Beach, and a downtown skyline that puts Los Santos to shame. Most of the early campaign happens here.',
      },
      { h: '2. Vice-Dale County' },
      {
        p: 'The Miami-Dade analogue. Suburban sprawl, strip malls, half-finished housing developments, and golf courses that bleed into the Grassrivers swamp. This is where Lucia’s pre-prison life took place.',
      },
      { h: '3. Leonida Keys' },
      {
        p: 'The Florida Keys analogue. A chain of small islands connected by bridges, with dive bars, fishing charters, and smuggler coves. Expect boat-heavy missions and a heavy emphasis on water traversal.',
      },
      { h: '4. Port Gellhorn' },
      {
        p: 'A working port city in northern Leonida. Container yards, rusting industrial blocks, and a downtown that has seen better days. Major heist territory.',
      },
      { h: '5. Grassrivers' },
      {
        p: 'The Everglades analogue. Wetlands, stilt houses, gator farms, and airboats. A natural smuggling corridor for moving anything you do not want seen.',
      },
      { h: '6. Mount Kalaga' },
      {
        p: 'Elevated terrain in the north. Pine forests, mountain back roads, and lookout points with some of the best vistas in the game. The unofficial home of off-road races.',
      },
      {
        p: 'Explore the interactive [Leonida map on our homepage](/#map) — every region is marked with pins.',
      },
    ],
    related: ['gta-vi-release-date-confirmed', 'gta-vi-day-1-checklist'],
    backlinks: [
      {
        label: 'GTA Wiki — State of Leonida',
        href: 'https://gta.fandom.com/wiki/State_of_Leonida',
        source: 'gta.fandom.com',
      },
      {
        label: 'Eurogamer interactive map preview',
        href: 'https://www.eurogamer.net',
        source: 'eurogamer.net',
      },
    ],
  },

  {
    slug: 'jason-and-lucia-dual-protagonists',
    title: 'Jason & Lucia: The First Dual Protagonist Couple in GTA',
    excerpt:
      'Two playable leads, one love story, one criminal partnership. Why GTA VI’s structure is the most ambitious narrative Rockstar has ever attempted.',
    date: '2026-06-20',
    readMin: 7,
    category: 'Deep Dive',
    hero: '/images/gta/screenshot-2.jpg',
    tag: 'deep-dive',
    body: [
      {
        p: 'GTA V had three protagonists, but Jason Duval and Lucia Caminos are something Rockstar has never done: a romantically tied criminal duo whose relationship is the engine of the story. Both are fully playable.',
      },
      { h: 'Jason Duval' },
      {
        p: 'Raised in the Florida wilderness. Quiet, capable, loyal to a fault. Jason is the kind of character who solves a problem with a wrench and a long silence. His missions skew toward survival, tradecraft, and operation execution.',
      },
      { h: 'Lucia Caminos' },
      {
        p: 'Just out of prison and done playing by anyone else’s rules. Lucia is sharp, ambitious, and openly angry in a way GTA protagonists rarely are. Her missions skew toward leverage, manipulation, and high-risk plays.',
      },
      { h: 'How switching works' },
      {
        p: 'Based on the official reveal trailer, players can switch between Jason and Lucia between missions and during some co-op heists. Each character has independent skill trees, contacts, and wardrobes — much closer to GTA V’s three-protagonist system than to a simple costume swap.',
      },
      {
        quote:
          'Jason and Lucia are a love story disguised as a crime story.',
        by: 'Sam Houser, Rockstar (paraphrased from interviews)',
      },
    ],
    related: ['state-of-leonida-map-guide', 'gta-v-vs-gta-vi-changes'],
    backlinks: [
      {
        label: 'Official Rockstar character page',
        href: 'https://www.rockstargames.com/VI',
        source: 'rockstargames.com',
      },
      {
        label: 'Wikipedia: Grand Theft Auto VI',
        href: 'https://en.wikipedia.org/wiki/Grand_Theft_Auto_VI',
        source: 'wikipedia.org',
      },
    ],
  },

  {
    slug: 'gta-vi-pc-release-when',
    title: 'GTA VI on PC: When Will It Actually Happen?',
    excerpt:
      'Rockstar has not confirmed a PC release. Here is what history tells us about the likely window and what to expect when it arrives.',
    date: '2026-06-18',
    readMin: 6,
    category: 'News',
    hero: '/images/gta/screenshot-5.jpg',
    tag: 'news',
    body: [
      {
        p: 'The single biggest disappointment of the GTA VI announcement was the platform list: PS5 and Xbox Series X|S only. No PC. No Switch 2. Nothing. PC players are going to wait — the question is, how long?',
      },
      { h: 'What history says' },
      {
        list: [
          'GTA IV: console release April 2008, PC release December 2008 (8 months)',
          'GTA V: console release September 2013, PC release April 2015 (~18 months)',
          'Red Dead Redemption 2: console October 2018, PC November 2019 (13 months)',
        ],
      },
      {
        p: 'The recent Rockstar pattern is 12–18 months. Apply that to GTA VI and you get a PC release window of late 2027 to mid 2028.',
      },
      { h: 'What you can do now' },
      {
        list: [
          'Pre-order a PS5 (Slim or Pro) if you want to play at launch',
          'Wait it out and play a fully patched PC version with mods in 18 months',
          'Subscribe to GTA+ to play GTA Online on console in the meantime',
        ],
      },
      {
        p: 'For our take on which console is better for GTA VI, see [PS5 vs Xbox Series X for GTA VI](/blog/ps5-vs-xbox-series-x-for-gta-vi).',
      },
    ],
    related: ['ps5-vs-xbox-series-x-for-gta-vi', 'gta-vi-release-date-confirmed'],
    backlinks: [
      {
        label: 'PC Gamer: GTA VI PC release tracker',
        href: 'https://www.pcgamer.com',
        source: 'pcgamer.com',
      },
      {
        label: 'Steam community discussions on GTA VI',
        href: 'https://steamcommunity.com',
        source: 'steamcommunity.com',
      },
    ],
  },

  {
    slug: 'gta-online-in-gta-vi',
    title: 'GTA Online in GTA VI: What to Expect at Launch',
    excerpt:
      'Will it be a continuation of GTA Online, or a fresh start? Here is the most likely roadmap based on Rockstar’s stated plans.',
    date: '2026-06-16',
    readMin: 7,
    category: 'News',
    hero: '/images/gta/screenshot-4.jpg',
    tag: 'news',
    body: [
      {
        p: 'Rockstar has confirmed that GTA Online will continue alongside GTA VI’s online mode, but most signs point to a clean slate when the new online experience launches.',
      },
      { h: 'Likely launch structure' },
      {
        list: [
          'Single-player campaign at launch (Day 1, November 19)',
          'Online mode rolling out in waves over the following months',
          'Character migration from GTA Online: unconfirmed — assume no',
          'Cross-progression across PS5/Xbox: likely yes within ecosystem, no between ecosystems',
          'GTA+ subscription expanded with VI-specific perks',
        ],
      },
      { h: 'What we learned from GTA Online' },
      {
        p: 'The biggest community lesson from GTA Online is that the meta is set by the first six months of content drops. The cars, businesses, and properties added in the first wave shape the player economy for years. Expect Rockstar to be very deliberate about what ships at launch versus what holds back.',
      },
      {
        quote:
          'GTA Online is the most successful live-service game in console history. They are not going to throw away those lessons.',
        by: 'Industry analyst, Take-Two Q3 earnings call',
      },
    ],
    related: ['gta-vi-day-1-checklist', 'gta-v-vs-gta-vi-changes'],
    backlinks: [
      {
        label: 'Take-Two investor relations',
        href: 'https://www.take2games.com/ir',
        source: 'take2games.com',
      },
      {
        label: 'Rockstar Newswire',
        href: 'https://www.rockstargames.com/newswire',
        source: 'rockstargames.com',
      },
    ],
  },

  {
    slug: 'ps5-vs-xbox-series-x-for-gta-vi',
    title: 'PS5 vs Xbox Series X for GTA VI: Performance Comparison',
    excerpt:
      'Which console handles GTA VI best? We break down resolution, frame rate, load times, and what to expect on each platform.',
    date: '2026-06-14',
    readMin: 6,
    category: 'Comparison',
    hero: '/images/gta/screenshot-5.jpg',
    tag: 'comparison',
    body: [
      {
        p: 'You have $500 and one slot for a GTA VI console. PS5 or Xbox Series X? Here is what the spec sheets, dev-team interviews, and historical Rockstar parity patterns suggest.',
      },
      { h: 'Resolution and frame rate' },
      {
        p: 'Both consoles target a Performance mode at 60fps and a Fidelity mode at 30fps with higher resolution. Based on Rockstar’s recent multi-platform releases (Red Dead Redemption 2 and the GTA V upgrade), expect both to hit the same target — with minor edge cases in dense Vice City crowds.',
      },
      { h: 'Load times' },
      {
        list: [
          'PS5: faster custom SSD architecture — likely 1–2 second edge on fast travel',
          'Xbox Series X: slightly higher raw GPU teraflops — likely 1–2 fps edge in busy scenes',
          'Both: full Quick Resume on Xbox, Activity Cards on PS5',
        ],
      },
      { h: 'Verdict' },
      {
        p: 'For most players the difference will be invisible. Buy the console with the controller you prefer, the storefront where your library lives, and the subscription service (PS+ or Game Pass) you already use.',
      },
      {
        p: 'Note: PS5 Pro has an additional GPU compute uplift that may unlock a 60fps Fidelity mode. If you can stretch to a Pro and you care about visuals, it is the best way to play GTA VI on console.',
      },
    ],
    related: ['gta-vi-pc-release-when', 'gta-vi-day-1-checklist'],
    backlinks: [
      {
        label: 'Digital Foundry GTA VI tech analysis',
        href: 'https://www.eurogamer.net/digitalfoundry',
        source: 'eurogamer.net',
      },
      {
        label: 'PlayStation 5 official specs',
        href: 'https://www.playstation.com/en-us/ps5/',
        source: 'playstation.com',
      },
      {
        label: 'Xbox Series X official specs',
        href: 'https://www.xbox.com/en-US/consoles/xbox-series-x',
        source: 'xbox.com',
      },
    ],
  },

  {
    slug: 'gta-vi-pre-order-bonuses-worth-it',
    title: 'GTA VI Pre-Order Bonuses: Are They Actually Worth It?',
    excerpt:
      'Cynical take on every bonus, with a clear-eyed answer on whether you should pre-order or wait for launch reviews.',
    date: '2026-06-12',
    readMin: 5,
    category: 'Guide',
    hero: '/images/gta/screenshot-6.jpg',
    tag: 'guide',
    body: [
      {
        p: 'Pre-orders are a marketing tool first and a customer-service tool second. So before you click "Pre-Order Now," it is worth asking honestly: is the bonus actually worth committing $80–$100 of your money 5 months early?',
      },
      { h: 'The case for pre-ordering' },
      {
        list: [
          'Vintage Vice City Pack genuinely disappears at launch — no second chance',
          'The pack has real in-game utility (a vehicle + garage, not just skins)',
          'GTA VI is Rockstar — review scores are virtually guaranteed to be 9+/10',
          'Pre-loading means you can play at midnight on November 19',
        ],
      },
      { h: 'The case for waiting' },
      {
        list: [
          'Online launches are historically rocky for the first 2–4 weeks',
          'Console bundles in December may save you $20–40 vs. retail',
          'Some buyers will want to wait for the Pro version of the game',
        ],
      },
      { h: 'Our verdict' },
      {
        p: 'If you know you are going to buy GTA VI, pre-order now and get the pack. If you are still on the fence about whether you will play GTA at all in 2026, wait. There is no middle path — pre-orders are binary.',
      },
    ],
    related: ['standard-vs-ultimate-edition', 'vintage-vice-city-pack-breakdown'],
    backlinks: [
      {
        label: 'Eurogamer: the economics of pre-ordering',
        href: 'https://www.eurogamer.net',
        source: 'eurogamer.net',
      },
      {
        label: 'Push Square pre-order strategy',
        href: 'https://www.pushsquare.com',
        source: 'pushsquare.com',
      },
    ],
  },

  {
    slug: 'gta-v-vs-gta-vi-changes',
    title: 'GTA V vs GTA VI: 10 Major Changes You Need to Know',
    excerpt:
      'From dual protagonists to a Florida-sized map, here are the ten biggest changes between GTA V (2013) and GTA VI (2026).',
    date: '2026-06-10',
    readMin: 8,
    category: 'Comparison',
    hero: '/images/gta/screenshot-4.jpg',
    tag: 'comparison',
    body: [
      {
        p: 'Thirteen years separate GTA V and GTA VI — basically a generation of gaming. Here is what is new, what is back, and what Rockstar has finally killed off.',
      },
      { h: '1. Setting' },
      {
        p: 'Los Santos (modern Los Angeles) → Vice City and the State of Leonida (modern Florida). The biggest tonal shift in the series since Vice City to San Andreas in 2004.',
      },
      { h: '2. Map size' },
      {
        p: 'Rockstar has not confirmed exact square mileage, but every leaked and official trailer suggests the State of Leonida is significantly larger than San Andreas — by some estimates, 1.5–2x.',
      },
      { h: '3. Protagonists' },
      {
        p: 'Three solo male leads (Michael, Franklin, Trevor) → a romantic criminal duo (Jason, Lucia). The first openly playable female protagonist in mainline GTA history.',
      },
      { h: '4. Vehicle physics' },
      {
        p: 'Significantly more grounded — closer to RDR2’s weight and momentum model than GTA V’s arcade handling.',
      },
      { h: '5. NPC density' },
      {
        p: 'Trailers show crowd densities 4–5x what GTA V handled, with individual NPCs reacting to player actions in real time.',
      },
      { h: '6. Online mode' },
      {
        p: 'A continuation strategy rather than a hard reset — GTA Online remains active alongside GTA VI’s new online mode.',
      },
      { h: '7. Pricing' },
      {
        p: 'GTA V launched at $59.99. GTA VI launches at $79.99 ($99.99 Ultimate). A 33% price increase, in line with industry norms for AAA console titles in 2026.',
      },
      { h: '8. Platforms at launch' },
      {
        p: 'GTA V launched on PS3, Xbox 360, then PS4/Xbox One, then PC. GTA VI launches on PS5 and Xbox Series X|S only. No prior-gen support.',
      },
      { h: '9. Story tone' },
      {
        p: 'GTA V leaned heavily on satire and farce. GTA VI looks more grounded and emotionally serious — closer to RDR2’s register than to Trevor Phillips’ chaos.',
      },
      { h: '10. Pre-order strategy' },
      {
        p: 'GTA V had a single vehicle pre-order bonus. GTA VI has the Vintage Vice City Pack — multiple vehicles, outfits, and shop content. A much more aggressive lock-in.',
      },
    ],
    related: ['jason-and-lucia-dual-protagonists', 'gta-vi-day-1-checklist'],
    backlinks: [
      {
        label: 'Wikipedia: Grand Theft Auto V',
        href: 'https://en.wikipedia.org/wiki/Grand_Theft_Auto_V',
        source: 'wikipedia.org',
      },
      {
        label: 'Rockstar Games official site',
        href: 'https://www.rockstargames.com',
        source: 'rockstargames.com',
      },
    ],
  },
];

export const postsBySlug = Object.fromEntries(
  posts.map((p) => [p.slug, p] as const),
);

export const allSlugs = posts.map((p) => p.slug);

export function getPost(slug: string): BlogPost | undefined {
  return postsBySlug[slug];
}

export function relatedPosts(slug: string): BlogPost[] {
  const post = postsBySlug[slug];
  if (!post) return [];
  return post.related.map((s) => postsBySlug[s]).filter(Boolean) as BlogPost[];
}
