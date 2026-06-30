/**
 * Instagram content cards for @gtavi.guide
 *
 * Each card is 1080×1080 (square) or 1080×1350 (portrait).
 * Cards can be grouped into carousels via `carouselId`.
 */

export type CardSize = 'square' | 'portrait';

export type CardType =
  | 'headline'      // image bg + bold headline
  | 'comparison'    // two columns / vs
  | 'list'          // numbered list
  | 'quote'         // big quote
  | 'countdown'     // countdown sticker
  | 'cta'           // pre-order CTA
  | 'cover';        // carousel cover slide

export type Tone = 'pink' | 'cyan' | 'gold';

export type IGCard = {
  id: string;
  type: CardType;
  size: CardSize;
  tone: Tone;
  /** Background image from /images/gta/ — omit for solid-color cards */
  bg?: string;
  /** kicker shown above the title, small caps */
  kicker?: string;
  /** main headline text (uppercase rendered) */
  title?: string;
  /** subtitle / supporting text */
  subtitle?: string;
  /** for lists */
  items?: string[];
  /** for comparison cards */
  left?: { title: string; price?: string; bullets: string[] };
  right?: { title: string; price?: string; bullets: string[]; badge?: string };
  /** for quote cards */
  quote?: string;
  attribution?: string;
  /** carousel grouping — cards with the same id render as one deck on the gallery */
  carouselId?: string;
  carouselIndex?: number;
};

/* ────────────────────────────────────────────────────────────────── */
/* Stand-alone single posts (square)                                  */
/* ────────────────────────────────────────────────────────────────── */
const singles: IGCard[] = [
  {
    id: 'release-date-hard-locked',
    type: 'headline',
    size: 'square',
    tone: 'pink',
    bg: '/images/gta/screenshot-1.jpg',
    kicker: 'CONFIRMED',
    title: 'GTA VI launches November 19, 2026',
    subtitle: 'PS5 + Xbox Series X|S. No PC at launch.',
  },
  {
    id: 'vintage-pack-vanishes',
    type: 'headline',
    size: 'square',
    tone: 'pink',
    bg: '/images/gta/screenshot-6.jpg',
    kicker: 'PRE-ORDER ALERT',
    title: 'The Vintage Vice City Pack disappears on Nov 19',
    subtitle: 'Pre-order Standard or Ultimate before launch or lose it forever.',
  },
  {
    id: 'price-jump',
    type: 'headline',
    size: 'square',
    tone: 'gold',
    bg: '/images/gta/screenshot-2.jpg',
    kicker: 'PRICE WATCH',
    title: '$79.99 Standard. $99.99 Ultimate.',
    subtitle: 'First $80 GTA in series history. Here is what changes.',
  },
  {
    id: 'ps5-vs-xbox',
    type: 'comparison',
    size: 'square',
    tone: 'cyan',
    kicker: 'WHICH CONSOLE',
    title: 'PS5 vs Xbox Series X',
    left:  { title: 'PS5', bullets: ['Custom SSD edge on fast travel', 'Activity Cards in-game', 'PS+ ecosystem'] },
    right: { title: 'XBOX SERIES X', bullets: ['Higher raw GPU teraflops', 'Quick Resume', 'Game Pass ecosystem'], badge: 'TIE' },
  },
  {
    id: 'standard-vs-ultimate',
    type: 'comparison',
    size: 'square',
    tone: 'pink',
    kicker: 'EDITION CHECK',
    title: 'Standard vs Ultimate',
    left:  { title: 'STANDARD', price: '$79.99', bullets: ['Full campaign', 'Vintage Vice City Pack', '1 month GTA+'] },
    right: { title: 'ULTIMATE', price: '$99.99', bullets: ['Everything in Standard', '6 exclusive vehicles', '4 exclusive weapons', 'Exclusive side mission'], badge: 'RECOMMENDED' },
  },
  {
    id: 'leonida-regions',
    type: 'list',
    size: 'square',
    tone: 'cyan',
    bg: '/images/gta/screenshot-4.jpg',
    kicker: 'STATE OF LEONIDA',
    title: '6 regions, 1 massive map',
    items: ['Vice City', 'Vice-Dale County', 'Leonida Keys', 'Port Gellhorn', 'Grassrivers', 'Mount Kalaga'],
  },
  {
    id: 'jason-lucia-dual',
    type: 'headline',
    size: 'square',
    tone: 'pink',
    bg: '/images/gta/screenshot-2.jpg',
    kicker: 'PROTAGONISTS',
    title: 'Jason and Lucia. The first playable couple in GTA history.',
    subtitle: 'Switch between them mid-mission. Two skill trees, two stories.',
  },
  {
    id: 'pc-release-window',
    type: 'headline',
    size: 'square',
    tone: 'cyan',
    bg: '/images/gta/screenshot-5.jpg',
    kicker: 'PC PLAYERS',
    title: 'Expect GTA VI on PC between late 2027 and mid 2028',
    subtitle: 'Based on the GTA IV → V → RDR2 pattern. Not confirmed.',
  },
  {
    id: 'ultimate-worth-it',
    type: 'quote',
    size: 'square',
    tone: 'gold',
    kicker: 'OUR TAKE',
    quote: 'If you played 200 hours of GTA V, Ultimate pays for itself in shop content alone.',
    attribution: 'GTAVI.GUIDE editorial',
  },
  {
    id: 'physical-is-a-code',
    type: 'headline',
    size: 'square',
    tone: 'pink',
    bg: '/images/gta/screenshot-3.jpg',
    kicker: 'HEADS UP',
    title: 'The "physical" edition is a download code in a box',
    subtitle: 'No disc. Plan for the 150 GB install.',
  },
  {
    id: 'countdown-sticker',
    type: 'countdown',
    size: 'square',
    tone: 'pink',
    kicker: 'COUNTDOWN',
    title: 'Until GTA VI launches',
    subtitle: 'November 19, 2026',
  },
  {
    id: 'pre-order-cta',
    type: 'cta',
    size: 'square',
    tone: 'gold',
    kicker: 'LINK IN BIO',
    title: 'Pre-order GTA VI today',
    subtitle: 'Lock the Vintage Vice City Pack before it disappears.',
  },
];

/* ────────────────────────────────────────────────────────────────── */
/* Carousel: "5 things you must know before pre-ordering"             */
/* ────────────────────────────────────────────────────────────────── */
const c1id = 'preorder-5-things';
const preorderCarousel: IGCard[] = [
  {
    id: `${c1id}-1`, carouselId: c1id, carouselIndex: 1,
    type: 'cover', size: 'square', tone: 'pink',
    bg: '/images/gta/screenshot-1.jpg',
    kicker: 'SWIPE →',
    title: '5 things you MUST know before pre-ordering GTA VI',
    subtitle: 'Save this post.',
  },
  {
    id: `${c1id}-2`, carouselId: c1id, carouselIndex: 2,
    type: 'headline', size: 'square', tone: 'pink',
    kicker: '1 OF 5',
    title: 'The Vintage Vice City Pack is time-limited',
    subtitle: 'Pre-order before Nov 19, 2026 or lose it permanently.',
  },
  {
    id: `${c1id}-3`, carouselId: c1id, carouselIndex: 3,
    type: 'headline', size: 'square', tone: 'cyan',
    kicker: '2 OF 5',
    title: 'You can upgrade Standard → Ultimate later',
    subtitle: 'Pay only the price difference, no penalty.',
  },
  {
    id: `${c1id}-4`, carouselId: c1id, carouselIndex: 4,
    type: 'headline', size: 'square', tone: 'gold',
    kicker: '3 OF 5',
    title: 'Ultimate exclusives never come back',
    subtitle: 'The PTT Youngin$ side mission is locked to Ultimate buyers forever.',
  },
  {
    id: `${c1id}-5`, carouselId: c1id, carouselIndex: 5,
    type: 'headline', size: 'square', tone: 'pink',
    kicker: '4 OF 5',
    title: 'Physical edition = a code in a box',
    subtitle: 'No disc shipping. Pre-load opens November 12.',
  },
  {
    id: `${c1id}-6`, carouselId: c1id, carouselIndex: 6,
    type: 'cta', size: 'square', tone: 'gold',
    kicker: '5 OF 5 · LINK IN BIO',
    title: 'Pre-order now',
    subtitle: 'Full breakdown on GTAVI.GUIDE → link in bio.',
  },
];

/* ────────────────────────────────────────────────────────────────── */
/* Carousel: "Leonida map — 6 regions"                                */
/* ────────────────────────────────────────────────────────────────── */
const c2id = 'leonida-map-tour';
const mapCarousel: IGCard[] = [
  {
    id: `${c2id}-1`, carouselId: c2id, carouselIndex: 1,
    type: 'cover', size: 'square', tone: 'cyan',
    bg: '/images/gta/screenshot-4.jpg',
    kicker: 'SWIPE →',
    title: 'The State of Leonida in 6 cards',
    subtitle: 'Where you will spend the next 1,000 hours.',
  },
  {
    id: `${c2id}-2`, carouselId: c2id, carouselIndex: 2,
    type: 'headline', size: 'square', tone: 'pink',
    kicker: 'REGION 1 · VC',
    title: 'Vice City',
    subtitle: 'Neon nights, pastel hotels, Ocean Beach. The crown jewel.',
  },
  {
    id: `${c2id}-3`, carouselId: c2id, carouselIndex: 3,
    type: 'headline', size: 'square', tone: 'cyan',
    kicker: 'REGION 2 · VD',
    title: 'Vice-Dale County',
    subtitle: 'Miami-Dade suburbs bleeding into the Grassrivers.',
  },
  {
    id: `${c2id}-4`, carouselId: c2id, carouselIndex: 4,
    type: 'headline', size: 'square', tone: 'pink',
    kicker: 'REGION 3 · LK',
    title: 'Leonida Keys',
    subtitle: 'Bridges, dive bars, smuggler coves. Boats-only territory.',
  },
  {
    id: `${c2id}-5`, carouselId: c2id, carouselIndex: 5,
    type: 'headline', size: 'square', tone: 'cyan',
    kicker: 'REGION 4 · PG',
    title: 'Port Gellhorn',
    subtitle: 'Container yards, rusting industry. Heist country.',
  },
  {
    id: `${c2id}-6`, carouselId: c2id, carouselIndex: 6,
    type: 'headline', size: 'square', tone: 'pink',
    kicker: 'REGION 5 · GR',
    title: 'Grassrivers',
    subtitle: 'Everglades. Airboats. Stilt houses. Gator farms.',
  },
  {
    id: `${c2id}-7`, carouselId: c2id, carouselIndex: 7,
    type: 'headline', size: 'square', tone: 'cyan',
    kicker: 'REGION 6 · MK',
    title: 'Mount Kalaga',
    subtitle: 'Pine forests, mountain back roads, off-road racing.',
  },
];

/* ────────────────────────────────────────────────────────────────── */
/* Carousel: "Standard vs Ultimate — line by line"                    */
/* ────────────────────────────────────────────────────────────────── */
const c3id = 'editions-line-by-line';
const editionsCarousel: IGCard[] = [
  {
    id: `${c3id}-1`, carouselId: c3id, carouselIndex: 1,
    type: 'cover', size: 'square', tone: 'gold',
    bg: '/images/gta/screenshot-2.jpg',
    kicker: 'SWIPE →',
    title: 'Standard vs Ultimate — which one?',
    subtitle: '$20 difference. Breakdown inside.',
  },
  {
    id: `${c3id}-2`, carouselId: c3id, carouselIndex: 2,
    type: 'list', size: 'square', tone: 'cyan',
    kicker: 'STANDARD · $79.99',
    title: 'What you get',
    items: [
      'Full single-player campaign',
      'Vintage Vice City Pack',
      '1 month of GTA+',
      'Digital or physical (code in box)',
    ],
  },
  {
    id: `${c3id}-3`, carouselId: c3id, carouselIndex: 3,
    type: 'list', size: 'square', tone: 'pink',
    kicker: 'ULTIMATE · $99.99',
    title: 'Everything above + ↓',
    items: [
      '6 exclusive vehicles',
      '4 exclusive weapons',
      'PTT Youngin$ side mission',
      '5 exclusive Vice City shops',
    ],
  },
  {
    id: `${c3id}-4`, carouselId: c3id, carouselIndex: 4,
    type: 'quote', size: 'square', tone: 'gold',
    quote: 'For most players the extra $20 is worth it. The exclusive shops alone are content Rockstar usually sells as $15 DLC.',
    attribution: 'GTAVI.GUIDE',
  },
  {
    id: `${c3id}-5`, carouselId: c3id, carouselIndex: 5,
    type: 'cta', size: 'square', tone: 'gold',
    kicker: 'LINK IN BIO',
    title: 'Compare side-by-side',
    subtitle: 'Full breakdown on GTAVI.GUIDE.',
  },
];

export const cards: IGCard[] = [
  ...singles,
  ...preorderCarousel,
  ...mapCarousel,
  ...editionsCarousel,
];

export const carousels: Record<string, IGCard[]> = {
  [c1id]: preorderCarousel,
  [c2id]: mapCarousel,
  [c3id]: editionsCarousel,
};

export const carouselMeta: Record<
  string,
  { title: string; tone: Tone }
> = {
  [c1id]: { title: '5 things you must know before pre-ordering', tone: 'pink' },
  [c2id]: { title: 'Leonida map — 6 regions in 7 slides',         tone: 'cyan' },
  [c3id]: { title: 'Standard vs Ultimate — line by line',          tone: 'gold' },
};

export function getCard(id: string): IGCard | undefined {
  return cards.find((c) => c.id === id);
}

export const allCardIds = cards.map((c) => c.id);
