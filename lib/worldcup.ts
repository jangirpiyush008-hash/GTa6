/**
 * 2026 FIFA World Cup data layer.
 *
 * Tries football-data.org (free tier — needs FOOTBALL_DATA_API_KEY in .env
 * and the WC2026 competition is on the free plan as of writing). Falls back
 * to a structural placeholder when no key is configured.
 *
 * Server-side only — call from RSC routes (page.tsx, layout.tsx).
 */

const COMPETITION = 'WC';                // football-data.org code for World Cup
const TTL_SECONDS = 300;                 // 5-minute cache

export type WCMatch = {
  id: string | number;
  utcDate: string;
  status: 'SCHEDULED' | 'LIVE' | 'IN_PLAY' | 'PAUSED' | 'FINISHED' | 'PLACEHOLDER';
  homeTeam: { name: string; code?: string; crest?: string };
  awayTeam: { name: string; code?: string; crest?: string };
  score?: { home: number | null; away: number | null };
  stage?: string;
  group?: string;
  minute?: number | null;
};

export type WCStanding = {
  position: number;
  team: { name: string; code?: string; crest?: string };
  played: number;
  won: number;
  draw: number;
  lost: number;
  gf: number;
  ga: number;
  points: number;
};

export type WCData = {
  source: 'live' | 'static';
  fetchedAt: string;
  liveOrNext: WCMatch | null;
  todaysMatches: WCMatch[];
  groups: { letter: string; standings: WCStanding[] }[];
  /** Set when source === 'static' to explain how to enable live data. */
  setupHint?: string;
};

/* ─────────── factual public bones ─────────── */

const GROUPS_2026 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

function staticFallback(): WCData {
  return {
    source: 'static',
    fetchedAt: new Date().toISOString(),
    liveOrNext: {
      id: 'placeholder',
      utcDate: '2026-06-30T19:00:00Z',
      status: 'PLACEHOLDER',
      homeTeam: { name: 'TBD' },
      awayTeam: { name: 'TBD' },
      stage: 'GROUP_STAGE',
    },
    todaysMatches: [],
    groups: GROUPS_2026.map((letter) => ({
      letter,
      standings: [],
    })),
    setupHint:
      'Add FOOTBALL_DATA_API_KEY to .env.local to enable live World Cup data. Free key at https://www.football-data.org/client/register',
  };
}

async function footballDataFetch<T>(path: string): Promise<T | null> {
  const key = process.env.FOOTBALL_DATA_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(`https://api.football-data.org/v4${path}`, {
      headers: { 'X-Auth-Token': key },
      next: { revalidate: TTL_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

type FDMatch = {
  id: number;
  utcDate: string;
  status: string;
  stage: string;
  group?: string;
  homeTeam: { name: string; tla?: string; crest?: string };
  awayTeam: { name: string; tla?: string; crest?: string };
  score?: { fullTime?: { home: number | null; away: number | null } };
  minute?: number | null;
};

type FDStandings = {
  standings: Array<{
    group?: string;
    stage: string;
    type: string;
    table: Array<{
      position: number;
      team: { name: string; tla?: string; crest?: string };
      playedGames: number;
      won: number;
      draw: number;
      lost: number;
      goalsFor: number;
      goalsAgainst: number;
      points: number;
    }>;
  }>;
};

function normalizeMatch(m: FDMatch): WCMatch {
  return {
    id: m.id,
    utcDate: m.utcDate,
    status: (m.status as WCMatch['status']) ?? 'SCHEDULED',
    homeTeam: { name: m.homeTeam.name, code: m.homeTeam.tla, crest: m.homeTeam.crest },
    awayTeam: { name: m.awayTeam.name, code: m.awayTeam.tla, crest: m.awayTeam.crest },
    score: m.score?.fullTime
      ? { home: m.score.fullTime.home, away: m.score.fullTime.away }
      : undefined,
    stage: m.stage,
    group: m.group,
    minute: m.minute,
  };
}

/** Match a standings group key to one of A..L, tolerating either
 *  the new API format ("GROUP_A") or the older one ("Group A" / "A"). */
function matchesGroupLetter(apiGroup: string | undefined, letter: string): boolean {
  if (!apiGroup) return false;
  const norm = apiGroup.toUpperCase().replace(/[^A-Z]/g, '');
  // GROUP_A → GROUPA, "Group A" → GROUPA, "A" → A
  return norm === `GROUP${letter}` || norm === letter;
}

function isToday(iso: string, today = new Date()): boolean {
  const d = new Date(iso);
  return (
    d.getUTCFullYear() === today.getUTCFullYear() &&
    d.getUTCMonth() === today.getUTCMonth() &&
    d.getUTCDate() === today.getUTCDate()
  );
}

export async function getWorldCupData(): Promise<WCData> {
  // Skip the fetch entirely when no key is configured — keeps the homepage fast
  if (!process.env.FOOTBALL_DATA_API_KEY) return staticFallback();

  const [matchesPayload, standingsPayload] = await Promise.all([
    footballDataFetch<{ matches: FDMatch[] }>(`/competitions/${COMPETITION}/matches`),
    footballDataFetch<FDStandings>(`/competitions/${COMPETITION}/standings`),
  ]);

  if (!matchesPayload && !standingsPayload) return staticFallback();

  const matches = (matchesPayload?.matches ?? []).map(normalizeMatch);
  const todaysMatches = matches.filter((m) => isToday(m.utcDate));

  // Pick the most relevant "now" match: prefer LIVE/IN_PLAY, else next SCHEDULED
  const live = matches.find((m) => m.status === 'LIVE' || m.status === 'IN_PLAY');
  const nextScheduled = matches
    .filter((m) => m.status === 'SCHEDULED' && new Date(m.utcDate).getTime() > Date.now())
    .sort((a, b) => new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime())[0];

  const groups = GROUPS_2026.map((letter) => {
    const table =
      standingsPayload?.standings.find(
        (s) =>
          matchesGroupLetter(s.group, letter) &&
          (s.type === 'TOTAL' || s.type === 'ALL' || s.type === 'OVERALL'),
      )?.table ?? [];
    return {
      letter,
      standings: table.map((row) => ({
        position: row.position,
        team: { name: row.team.name, code: row.team.tla, crest: row.team.crest },
        played: row.playedGames,
        won: row.won,
        draw: row.draw,
        lost: row.lost,
        gf: row.goalsFor,
        ga: row.goalsAgainst,
        points: row.points,
      })),
    };
  });

  return {
    source: 'live',
    fetchedAt: new Date().toISOString(),
    liveOrNext: live ?? nextScheduled ?? null,
    todaysMatches,
    groups,
  };
}
