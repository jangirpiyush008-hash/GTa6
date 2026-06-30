import Image from 'next/image';
import Link from 'next/link';
import { Trophy, Radio, Flame, ArrowUpRight, Calendar, Image as ImageIcon } from 'lucide-react';
import { getWorldCupData } from '@/lib/worldcup';

/**
 * FIFA-specific extras rendered on /games/fifa.
 * - Live World Cup section pulling from football-data.org
 * - 4 real FC 25 gameplay screenshots from Steam's public CDN
 * - Heavy keyword promotion for SEO
 *
 * Server component — fetches live data once per 5 minutes (revalidate-cache).
 */

const SHOTS = [
  { src: '/images/games/fifa/shot-1.jpg', alt: 'EA Sports FC 25 match action — close-up' },
  { src: '/images/games/fifa/shot-2.jpg', alt: 'EA Sports FC 25 stadium wide shot under lights' },
  { src: '/images/games/fifa/shot-3.jpg', alt: 'EA Sports FC 25 celebration sequence' },
  { src: '/images/games/fifa/shot-4.jpg', alt: 'EA Sports FC 25 tactical formation screen' },
];

export default async function FIFAExtras() {
  const wc = await getWorldCupData();
  const featuredGroup = wc.groups.find((g) => g.standings.length > 0) ?? wc.groups[0];
  const next = wc.liveOrNext;
  const isLive = next?.status === 'LIVE' || next?.status === 'IN_PLAY';
  const liveData = wc.source === 'live';

  return (
    <>
      {/* ───── World Cup live section ───── */}
      <section
        className="section relative overflow-hidden"
        id="worldcup"
        style={{
          background:
            'radial-gradient(70% 60% at 20% 0%, rgba(22,163,74,0.20), transparent 60%), radial-gradient(70% 60% at 80% 100%, rgba(0,245,255,0.12), transparent 60%), #050308',
        }}
      >
        <div className="container-x px-5">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="p-2.5 rounded-lg border"
              style={{ background: 'rgba(22,163,74,0.15)', borderColor: '#16a34a' }}
            >
              <Trophy className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="text-xs uppercase tracking-[0.35em] text-emerald-300">
              FIFA Tournament · Live Tracker
            </div>
            {isLive && (
              <span className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold text-neon-pink">
                <Radio className="h-3.5 w-3.5 animate-pulse" />
                MATCH LIVE
              </span>
            )}
          </div>
          <h2 className="display text-3xl sm:text-5xl text-white leading-tight">
            FIFA World Cup 2026 · Live Standings
          </h2>
          <p className="mt-3 text-white/75 max-w-3xl leading-relaxed">
            The first <strong>48-team FIFA World Cup</strong>, hosted across the{' '}
            <strong>USA, Canada, and Mexico</strong> (June 11 – July 19, 2026).
            104 matches · 16 venues · final at MetLife Stadium, New Jersey. Live
            standings + score widget on every page, plus the full group
            breakdown at the link below.
          </p>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
            {/* Featured group standings */}
            <div className="glass rounded-xl p-5 border border-emerald-500/30">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="display text-xl text-white">
                  Group {featuredGroup?.letter ?? 'A'} · sample standings
                </h3>
                <Link
                  href="/fifa/worldcup"
                  className="text-xs text-emerald-300 hover:text-emerald-200 inline-flex items-center gap-1"
                >
                  All 12 groups <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
              {featuredGroup?.standings.length ? (
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[10px] uppercase tracking-widest text-white/40 border-b border-white/10">
                      <th className="text-left font-normal pb-2">#</th>
                      <th className="text-left font-normal pb-2">Team</th>
                      <th className="text-right font-normal pb-2">P</th>
                      <th className="text-right font-normal pb-2">W</th>
                      <th className="text-right font-normal pb-2">D</th>
                      <th className="text-right font-normal pb-2">L</th>
                      <th className="text-right font-normal pb-2">GD</th>
                      <th className="text-right font-normal pb-2">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {featuredGroup.standings.map((s) => (
                      <tr
                        key={s.team.name}
                        className={`border-b border-white/5 last:border-0 ${
                          s.position <= 2 ? 'text-white' : 'text-white/65'
                        }`}
                      >
                        <td className="py-2 pr-2">{s.position}</td>
                        <td className="py-2 pr-2">
                          <span className="font-mono text-[10px] text-white/40 mr-1.5">
                            {s.team.code ?? ''}
                          </span>
                          {s.team.name}
                        </td>
                        <td className="py-2 pr-2 text-right tabular-nums">{s.played}</td>
                        <td className="py-2 pr-2 text-right tabular-nums">{s.won}</td>
                        <td className="py-2 pr-2 text-right tabular-nums">{s.draw}</td>
                        <td className="py-2 pr-2 text-right tabular-nums">{s.lost}</td>
                        <td className="py-2 pr-2 text-right tabular-nums">
                          {(s.gf - s.ga > 0 ? '+' : '') + (s.gf - s.ga)}
                        </td>
                        <td className="py-2 text-right tabular-nums font-bold">{s.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p className="text-sm text-white/55 py-4">
                  Group standings populate as matches finish. The 12-group structure is
                  shown on the full tracker page.
                </p>
              )}
            </div>

            {/* Next/live match panel */}
            <div className="glass rounded-xl p-5 border border-emerald-500/30">
              <div className="text-[10px] uppercase tracking-widest text-emerald-300 mb-2">
                {isLive ? 'Match in progress' : next?.status === 'FINISHED' ? 'Latest result' : 'Up next'}
              </div>
              {next && next.status !== 'PLACEHOLDER' ? (
                <div className="space-y-2">
                  {[
                    { name: next.homeTeam.name, code: next.homeTeam.code, score: next.score?.home ?? null },
                    { name: next.awayTeam.name, code: next.awayTeam.code, score: next.score?.away ?? null },
                  ].map((t) => (
                    <div key={t.name} className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-white/45 w-9">{t.code ?? '—'}</span>
                      <span className="flex-1 text-sm text-white truncate">{t.name}</span>
                      <span className={`text-xl font-bold tabular-nums ${isLive ? 'text-neon-pink' : 'text-white'}`}>
                        {t.score ?? '–'}
                      </span>
                    </div>
                  ))}
                  <div className="pt-2 mt-2 border-t border-white/10 text-xs text-white/55 flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {new Date(next.utcDate).toLocaleString([], {
                      weekday: 'short',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </div>
                </div>
              ) : (
                <p className="text-sm text-white/55">
                  Live match info appears here when a fixture goes IN_PLAY. Otherwise the
                  next scheduled fixture is shown.
                </p>
              )}
              <Link
                href="/fifa/worldcup"
                className="mt-4 btn w-full justify-center text-sm py-2.5"
                style={{ background: '#16a34a', color: '#fff' }}
              >
                <Trophy className="h-4 w-4" /> Full World Cup Tracker
              </Link>
            </div>
          </div>

          {!liveData && (
            <div className="mt-5 text-xs text-white/45">
              Live data requires the FOOTBALL_DATA_API_KEY env var · see /fifa/worldcup for setup.
            </div>
          )}
        </div>
      </section>

      {/* ───── Real gameplay screenshots from EA Sports FC 25 ───── */}
      <section className="section" id="screenshots">
        <div className="container-x px-5">
          <div className="flex items-center gap-2 mb-4">
            <ImageIcon className="h-5 w-5 text-emerald-400" />
            <h2 className="display text-2xl text-white">
              EA Sports FC in action · gameplay screenshots
            </h2>
          </div>
          <p className="text-sm text-white/65 mb-6 max-w-2xl">
            Real captures from EA Sports FC 25 — the current shipping cycle ahead of
            FC 26 in September 2026. Stadium fidelity, HyperMotion V animation, and
            broadcast-style camera work all pictured.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SHOTS.map((s) => (
              <div
                key={s.src}
                className="relative aspect-video rounded-xl overflow-hidden border border-emerald-500/20"
              >
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(max-width:768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───── SEO promo: FIFA → FC + World Cup tie-in ───── */}
      <section className="section pt-8">
        <div className="container-x px-5">
          <div
            className="glass rounded-2xl p-7 sm:p-10 border"
            style={{ borderColor: '#16a34a55', background: 'radial-gradient(80% 60% at 100% 0%, rgba(22,163,74,0.18), transparent 60%)' }}
          >
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-emerald-300">
              <Flame className="h-3.5 w-3.5" />
              Trending · FIFA 26 + FC 26 + World Cup 2026
            </div>
            <h2 className="display text-3xl sm:text-4xl text-white mt-3">
              The biggest football year in a decade — both on the pitch and on console.
            </h2>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5 text-sm text-white/80 leading-relaxed">
              <div>
                <h3 className="text-emerald-300 text-sm uppercase tracking-widest mb-2">
                  Why this hub matters in 2026
                </h3>
                <p>
                  EA Sports FC 26 launches September 26, 2026 — the second post-FIFA-rebrand release
                  and the first to ship with an official World Cup 2026 mode on day one. With the
                  real <strong>FIFA World Cup 2026</strong> mid-tournament (June 11 – July 19),
                  this hub aggregates: <strong>FC 26 release date</strong>, edition pricing, cover stars,
                  the full <strong>EA Sports FC vs FIFA</strong> historical timeline, plus live group
                  standings as the tournament unfolds.
                </p>
              </div>
              <div>
                <h3 className="text-emerald-300 text-sm uppercase tracking-widest mb-2">
                  What you can do here
                </h3>
                <ul className="space-y-1.5 list-disc list-inside marker:text-emerald-400/60">
                  <li>Track <strong>FIFA World Cup 2026 live scores</strong> in the bottom-left widget on every page.</li>
                  <li>Compare <strong>FC 26 vs FC 25</strong> features, Career Mode + Ultimate Team changes.</li>
                  <li>See <strong>FC 26 PS5 / Xbox Series / PC / Switch 2</strong> platform requirements.</li>
                  <li>Pre-order Ultimate Edition for 7-day early access + 4600 FC Points.</li>
                </ul>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/fifa/worldcup" className="btn text-sm py-2.5 px-5" style={{ background: '#16a34a', color: '#fff' }}>
                <Trophy className="h-4 w-4" /> World Cup tracker
              </Link>
              <Link href="/games/fifa/editions" className="btn btn-ghost text-sm py-2.5 px-5">
                FC 26 editions + price
              </Link>
              <Link href="/games/fifa/requirements" className="btn btn-ghost text-sm py-2.5 px-5">
                System requirements
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
