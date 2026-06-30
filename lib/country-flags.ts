/**
 * Map a football-data.org TLA (3-letter team code, mostly FIFA-style) to an
 * ISO 3166-1 alpha-2 country code for flagcdn.com.
 *
 *   <img src={flagUrl('NED')} />  →  https://flagcdn.com/h40/nl.png
 *
 * Falls back to a transparent 1x1 placeholder when the TLA has no mapping
 * (e.g. odd FIFA-only codes), so the layout never breaks.
 */

const TLA_TO_ISO2: Record<string, string> = {
  // Hosts + favourites
  USA: 'us', CAN: 'ca', MEX: 'mx', ARG: 'ar', BRA: 'br',
  FRA: 'fr', GER: 'de', ESP: 'es', POR: 'pt', ITA: 'it',
  ENG: 'gb-eng', WAL: 'gb-wls', SCO: 'gb-sct', NIR: 'gb-nir',
  NED: 'nl', BEL: 'be', SUI: 'ch', AUT: 'at', SVN: 'si', CRO: 'hr',
  POL: 'pl', UKR: 'ua', SVK: 'sk', SRB: 'rs', BUL: 'bg', ROU: 'ro',
  GRE: 'gr', TUR: 'tr', RUS: 'ru', DEN: 'dk', SWE: 'se', NOR: 'no',
  FIN: 'fi', ISL: 'is', IRL: 'ie', CZE: 'cz', HUN: 'hu', ALB: 'al',
  // Africa
  MAR: 'ma', EGY: 'eg', NGA: 'ng', SEN: 'sn', CIV: 'ci', GHA: 'gh',
  ALG: 'dz', TUN: 'tn', CMR: 'cm', RSA: 'za', MLI: 'ml', BFA: 'bf',
  // Asia / Oceania
  JPN: 'jp', KOR: 'kr', AUS: 'au', IRN: 'ir', KSA: 'sa', QAT: 'qa',
  UAE: 'ae', IRQ: 'iq', JOR: 'jo', UZB: 'uz', CHN: 'cn', IND: 'in',
  NZL: 'nz',
  // Americas
  URU: 'uy', COL: 'co', CHI: 'cl', PAR: 'py', ECU: 'ec', PER: 'pe',
  VEN: 've', BOL: 'bo', CRC: 'cr', PAN: 'pa', HON: 'hn', JAM: 'jm',
  // Misc
  HAI: 'ht',
};

/** Return a flagcdn URL for a 3-letter TLA, or null if unknown. */
export function flagUrl(tla: string | undefined, size: '20' | '40' | '60' | '80' = '40'): string | null {
  if (!tla) return null;
  const iso2 = TLA_TO_ISO2[tla.toUpperCase()];
  if (!iso2) return null;
  return `https://flagcdn.com/h${size}/${iso2}.png`;
}

/** Best-effort badge: prefer the API's crest URL, fall back to country flag, then null. */
export function teamBadge(crest: string | undefined, tla: string | undefined): string | null {
  if (crest) return crest;
  return flagUrl(tla);
}
