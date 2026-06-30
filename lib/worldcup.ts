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

/* ─────────────── ESPN public API (no key required) ─────────────── */

type ESPNEvent = {
  id: string;
  date: string;
  name: string;
  status: { type: { name: string; description: string; state: string; completed?: boolean }; displayClock?: string };
  competitions: Array<{
    competitors: Array<{
      homeAway: 'home' | 'away';
      score?: string;
      team: { displayName: string; abbreviation?: string; logo?: string };
    }>;
  }>;
};
type ESPNScoreboard = { events?: ESPNEvent[] };

type ESPNStanding = {
  team: { displayName: string; abbreviation?: string; logo?: string };
  stats: Array<{ name: string; value?: number; displayValue?: string }>;
  note?: { rank?: number };
};
type ESPNStandingsResp = {
  children?: Array<{
    name: string;
    standings?: { entries?: ESPNStanding[] };
  }>;
};

const ESPN_BASE = 'https://site.api.espn.com';
const ESPN_BASE_V2 = 'https://site.api.espn.com/apis/v2';

async function espnFetch<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, { next: { revalidate: TTL_SECONDS } });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

function espnStatusToWC(name: string): WCMatch['status'] {
  switch (name) {
    case 'STATUS_IN_PROGRESS':
    case 'STATUS_FIRST_HALF':
    case 'STATUS_SECOND_HALF':
      return 'IN_PLAY';
    case 'STATUS_HALFTIME':
      return 'PAUSED';
    case 'STATUS_FULL_TIME':
    case 'STATUS_FINAL':
      return 'FINISHED';
    default:
      return 'SCHEDULED';
  }
}

function normalizeESPNEvent(e: ESPNEvent): WCMatch {
  const comp = e.competitions[0];
  const home = comp.competitors.find((c) => c.homeAway === 'home') ?? comp.competitors[0];
  const away = comp.competitors.find((c) => c.homeAway === 'away') ?? comp.competitors[1];
  const status = espnStatusToWC(e.status.type.name);
  const scoreH = home.score != null ? Number(home.score) : null;
  const scoreA = away.score != null ? Number(away.score) : null;
  return {
    id: e.id,
    utcDate: e.date,
    status,
    homeTeam: { name: home.team.displayName, code: home.team.abbreviation, crest: home.team.logo },
    awayTeam: { name: away.team.displayName, code: away.team.abbreviation, crest: away.team.logo },
    score: status !== 'SCHEDULED' && (scoreH !== null || scoreA !== null)
      ? { home: scoreH, away: scoreA }
      : undefined,
    minute: e.status.displayClock ? parseInt(e.status.displayClock) || null : null,
  };
}

function readESPNStat(s: ESPNStanding, name: string): number {
  const stat = s.stats.find((x) => x.name === name);
  if (!stat) return 0;
  if (typeof stat.value === 'number') return stat.value;
  if (stat.displayValue) return Number(stat.displayValue) || 0;
  return 0;
}

async function getESPNWorldCupData(): Promise<WCData | null> {
  const [scoreboard, standings] = await Promise.all([
    espnFetch<ESPNScoreboard>(`${ESPN_BASE}/apis/site/v2/sports/soccer/fifa.world/scoreboard`),
    espnFetch<ESPNStandingsResp>(`${ESPN_BASE_V2}/sports/soccer/fifa.world/standings`),
  ]);
  if (!scoreboard && !standings) return null;

  const matches = (scoreboard?.events ?? []).map(normalizeESPNEvent);
  const todaysMatches = matches.filter((m) => isToday(m.utcDate));
  const live = matches.find((m) => m.status === 'IN_PLAY' || m.status === 'PAUSED');
  const nextScheduled = matches
    .filter((m) => m.status === 'SCHEDULED' && new Date(m.utcDate).getTime() > Date.now())
    .sort((a, b) => new Date(a.utcDate).getTime() - new Date(b.utcDate).getTime())[0];

  const groups = GROUPS_2026.map((letter) => {
    const groupName = `Group ${letter}`;
    const entries =
      standings?.children?.find((c) => c.name === groupName)?.standings?.entries ?? [];
    return {
      letter,
      standings: entries.map((e, i) => ({
        position: Math.round(readESPNStat(e, 'rank')) || i + 1,
        team: {
          name: e.team.displayName,
          code: e.team.abbreviation,
          crest: e.team.logo,
        },
        played: Math.round(readESPNStat(e, 'gamesPlayed')),
        won: Math.round(readESPNStat(e, 'wins')),
        draw: Math.round(readESPNStat(e, 'ties')),
        lost: Math.round(readESPNStat(e, 'losses')),
        gf: Math.round(readESPNStat(e, 'pointsFor')),
        ga: Math.round(readESPNStat(e, 'pointsAgainst')),
        points: Math.round(readESPNStat(e, 'points')),
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

/* ─────────────── Public entry — ESPN primary, football-data fallback ─────────────── */
export async function getWorldCupData(): Promise<WCData> {
  // Try ESPN first — no key required, public CDN
  const espn = await getESPNWorldCupData();
  if (espn) return espn;

  // Fallback: football-data.org (paid / authenticated)
  if (!process.env.FOOTBALL_DATA_API_KEY) return staticFallback();

  const [matchesPayload, standingsPayload] = await Promise.all([
    footballDataFetch<{ matches: FDMatch[] }>(`/competitions/${COMPETITION}/matches`),
    footballDataFetch<FDStandings>(`/competitions/${COMPETITION}/standings`),
  ]);

  if (!matchesPayload && !standingsPayload) return staticFallback();

  const matches = (matchesPayload?.matches ?? []).map(normalizeMatch);
  const todaysMatches = matches.filter((m) => isToday(m.utcDate));
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
