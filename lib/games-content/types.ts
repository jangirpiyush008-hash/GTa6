/**
 * Shared types for per-game deep content.
 *
 * Every game *may* export an object matching `GameContent`. Categories left
 * out fall back to the universal "Coming soon" stub on /games/[slug]/[category].
 */

/* ── EDITIONS ── */
export type EditionTier = {
  name: string;
  priceUSD: number;
  recommended?: boolean;
  bullets: string[];
};
export type Editions = { intro: string; tiers: EditionTier[]; notes?: string[] };

/* ── CHARACTERS ── */
export type CharacterEntry = { name: string; role: string };
export type Characters = { intro: string; roster: CharacterEntry[] };

/* ── WEAPONS / VEHICLES / ANIMALS (grouped-list shape) ── */
export type GroupedList = {
  intro: string;
  groups: { name: string; items: string[] }[];
};
export type Weapons = GroupedList;
export type Vehicles = GroupedList;
export type Animals = GroupedList;

/* ── MAP ── */
export type MapRegion = { name: string; desc: string };
export type MapContent = { intro: string; regions: MapRegion[] };

/* ── NEWS ── */
export type NewsEntry = { date: string; title: string; desc?: string };
export type News = { intro: string; entries: NewsEntry[] };

/* ── FEATURES ── */
export type FeatureEntry = { title: string; desc: string };
export type Features = { intro: string; entries: FeatureEntry[] };

/* ── MISSIONS ── */
export type MissionEntry = { name: string; note?: string };
export type MissionChapter = {
  name: string;
  setting: string;
  missions: MissionEntry[];
};
export type Missions = { intro: string; chapters: MissionChapter[] };

/* ── ACTIVITIES / PROPERTIES ── */
export type LabeledEntry = { name: string; desc: string };
export type Activities = { intro: string; entries: LabeledEntry[] };
export type Properties = { intro: string; entries: LabeledEntry[] };

/* ── CHEATS ── */
export type CheatEntry = { code: string; effect: string; unlock?: string };
export type Cheats = {
  intro: string;
  notes?: string[];
  entries: CheatEntry[];
};

/* ── ARTWORKS ── */
export type ArtworkEntry = { title: string; desc: string; href?: string };
export type Artworks = { intro: string; entries: ArtworkEntry[] };

/* ── VIDEOS ── */
export type VideoEntry = { title: string; date: string; href: string };
export type Videos = { intro: string; entries: VideoEntry[] };

/* ── SOUNDTRACK ── */
export type Track = {
  title: string;
  artist?: string;
  /** YouTube video ID for an inline play widget (e.g. "dQw4w9WgXcQ"). */
  youtubeId?: string;
};
export type SoundtrackGroup = { name: string; tracks: Track[] };
export type Soundtrack = {
  intro: string;
  groups: SoundtrackGroup[];
  /** Optional title used in the "Listen on Spotify / Apple Music" search links. */
  searchTitle?: string;
};

/* ── ROLLUP ── */
export type GameContent = {
  overview?: { intro: string };
  editions?: Editions;
  characters?: Characters;
  weapons?: Weapons;
  vehicles?: Vehicles;
  animals?: Animals;
  map?: MapContent;
  news?: News;
  features?: Features;
  missions?: Missions;
  activities?: Activities;
  properties?: Properties;
  'cheats-ps5'?: Cheats;
  'cheats-xbox'?: Cheats;
  'cheats-pc'?: Cheats;
  artworks?: Artworks;
  videos?: Videos;
  soundtrack?: Soundtrack;
};
