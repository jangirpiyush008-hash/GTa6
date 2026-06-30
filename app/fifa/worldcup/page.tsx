import type { Metadata } from 'next';
import Link from 'next/link';
import MegaNav from '@/components/MegaNav';
import Footer from '@/components/Footer';
import { getWorldCupData } from '@/lib/worldcup';
import { Trophy, Radio, ArrowLeft, Calendar, Info } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FIFA World Cup 2026 — Live Scores, Groups & Standings · GTAVI.GUIDE',
  description:
    'Live 2026 FIFA World Cup scores, group standings, and match schedule for the 48-team tournament across USA, Canada, and Mexico (June 11 – July 19, 2026).',
  alternates: { canonical: '/fifa/worldcup' },
  keywords: [
    'FIFA World Cup 2026', 'World Cup 2026 live', 'World Cup 2026 standings',
    'FIFA WC USA Canada Mexico', 'World Cup groups', 'World Cup schedule',
    '48 team World Cup', 'FIFA 26 World Cup mode',
  ],
};

export const revalidate = 300; // re-fetch the live API every 5 minutes

export default async function WorldCupPage() {
  const data = await getWorldCupData();

  return (
    <main>
      <MegaNav />

      {/* Hero */}
      <section
        className="relative pt-12 pb-10 overflow-hidden"
        style={{
          background:
            'radial-gradient(70% 60% at 20% 0%, rgba(22,163,74,0.18), transparent 60%), radial-gradient(70% 60% at 80% 100%, rgba(0,245,255,0.12), transparent 60%), #050308',
        }}
      >
        <div className="container-x px-5">
          <Link
            href="/games/fifa"
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition"
          >
            <ArrowLeft className="h-4 w-4" />
            FIFA / EA Sports FC hub
          </Link>
          <div className="mt-5 flex items-center gap-3">
            <div
              className="p-2.5 rounded-lg border"
              style={{ background: 'rgba(22,163,74,0.15)', borderColor: '#16a34a' }}
            >
              <Trophy className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="text-xs uppercase tracking-[0.35em] text-emerald-300">
              FIFA Tournament Tracker
            </div>
          </div>
          <h1
            className="display text-4xl sm:text-6xl text-white mt-4"
            style={{ textShadow: '0 0 32px rgba(22,163,74,0.35)' }}
          >
            FIFA World Cup 2026
          </h1>
          <p className="mt-4 text-white/75 max-w-2xl leading-relaxed">
            The first 48-team World Cup · hosted across USA, Canada, and Mexico ·
            June 11 – July 19, 2026 · 104 matches. The final is at MetLife Stadium,
            East Rutherford, NJ.
          </p>

          {/* Source banner */}
          {data.source === 'static' && (
            <div className="mt-6 glass rounded-xl p-4 border border-emerald-500/30 max-w-3xl">
              <div className="flex items-start gap-2">
                <Info className="h-4 w-4 text-emerald-300 mt-0.5 shrink-0" />
                <div className="text-sm text-white/80">
                  <div className="font-semibold">Live data not connected.</div>
                  <p className="mt-1 text-white/65 leading-snug">
                    {data.setupHint}
                  </p>
                  <p className="mt-1 text-white/45 text-xs">
                    The page below shows the 12-group structure; real teams and
                    scores populate automatically once your API key is in place.
                  </p>
                </div>
              </div>
            </div>
          )}
          {data.source === 'live' && (
            <div className="mt-6 flex items-center gap-2 text-sm text-emerald-300">
              <Radio className="h-3.5 w-3.5 animate-pulse" />
              Live data · fetched {new Date(data.fetchedAt).toLocaleTimeString()} · auto-refreshes every 5 min
            </div>
          )}
        </div>
      </section>

      {/* Today's matches */}
      {data.todaysMatches.length > 0 && (
        <section className="px-5 py-10">
          <div className="container-x">
            <h2 className="display text-2xl text-white mb-5 flex items-center gap-2">
              <Calendar className="h-5 w-5 text-emerald-400" />
              Today’s matches
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {data.todaysMatches.map((m) => {
                const live = m.status === 'LIVE' || m.status === 'IN_PLAY';
                const done = m.status === 'FINISHED';
                return (
                  <div
                    key={m.id}
                    className="glass rounded-lg p-4 border"
                    style={{
                      borderColor: live ? '#FF006E66' : done ? '#16a34a55' : '#ffffff1f',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2 text-xs">
                      <span className="text-white/55">
                        {m.group ? `Group ${m.group.replace('GROUP_', '')}` : m.stage}
                      </span>
                      <span
                        className={`font-bold ${
                          live ? 'text-neon-pink' : done ? 'text-emerald-400' : 'text-white/55'
                        }`}
                      >
                        {live ? `${m.minute ?? 'LIVE'}′` : done ? 'FT' : new Date(m.utcDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-white/45 w-9">
                          {m.homeTeam.code ?? '—'}
                        </span>
                        <span className="flex-1 text-sm text-white truncate">
                          {m.homeTeam.name}
                        </span>
                        <span className={`text-lg font-bold tabular-nums ${live ? 'text-neon-pink' : 'text-white'}`}>
                          {m.score?.home ?? '–'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono text-white/45 w-9">
                          {m.awayTeam.code ?? '—'}
                        </span>
                        <span className="flex-1 text-sm text-white truncate">
                          {m.awayTeam.name}
                        </span>
                        <span className={`text-lg font-bold tabular-nums ${live ? 'text-neon-pink' : 'text-white'}`}>
                          {m.score?.away ?? '–'}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Groups */}
      <section className="px-5 py-12">
        <div className="container-x">
          <h2 className="display text-2xl text-white mb-5">All 12 groups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.groups.map((g) => (
              <div
                key={g.letter}
                className="glass rounded-xl p-4 border border-white/10"
              >
                <div className="display text-xl text-emerald-300 mb-3 flex items-center gap-2">
                  <span className="rounded px-2 py-0.5 bg-emerald-500/20 text-sm">{g.letter}</span>
                  <span className="text-white/70 text-sm">Group {g.letter}</span>
                </div>
                {g.standings.length === 0 ? (
                  <div className="text-xs text-white/45 leading-snug py-3">
                    Standings populate when live data is connected.
                  </div>
                ) : (
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-[10px] uppercase tracking-widest text-white/40">
                        <th className="text-left font-normal pb-1.5">#</th>
                        <th className="text-left font-normal pb-1.5">Team</th>
                        <th className="text-right font-normal pb-1.5">P</th>
                        <th className="text-right font-normal pb-1.5">GD</th>
                        <th className="text-right font-normal pb-1.5">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {g.standings.map((s) => (
                        <tr
                          key={s.team.name}
                          className={`text-sm ${
                            s.position <= 2 ? 'text-white' : 'text-white/65'
                          }`}
                        >
                          <td className="py-1 pr-2">{s.position}</td>
                          <td className="py-1 pr-2 truncate">
                            <span className="font-mono text-[10px] text-white/40 mr-1.5">
                              {s.team.code ?? ''}
                            </span>
                            {s.team.name}
                          </td>
                          <td className="py-1 pr-2 text-right tabular-nums">{s.played}</td>
                          <td className="py-1 pr-2 text-right tabular-nums">
                            {(s.gf - s.ga > 0 ? '+' : '') + (s.gf - s.ga)}
                          </td>
                          <td className="py-1 text-right tabular-nums font-bold">{s.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup instructions */}
      {data.source === 'static' && (
        <section className="px-5 pb-24">
          <div className="container-x max-w-3xl">
            <div className="glass rounded-xl p-6 border border-white/10">
              <h3 className="display text-xl text-white mb-3">Connect live data in 60 seconds</h3>
              <ol className="space-y-2 text-sm text-white/75">
                <li>
                  1. Sign up for a free key at{' '}
                  <a href="https://www.football-data.org/client/register" target="_blank" rel="noopener noreferrer" className="text-emerald-300 underline">
                    football-data.org/client/register
                  </a>
                </li>
                <li>
                  2. Create <code className="text-emerald-300 font-mono">.env.local</code> in the project root
                </li>
                <li>
                  3. Add:{' '}
                  <code className="text-emerald-300 font-mono bg-black/40 px-2 py-0.5 rounded">FOOTBALL_DATA_API_KEY=your_key_here</code>
                </li>
                <li>
                  4. Restart the dev server. The page revalidates every 5 minutes.
                </li>
              </ol>
              <div className="mt-4 text-xs text-white/45">
                Free tier covers the World Cup competition (code "WC") at 10
                requests per minute — well within our 5-minute revalidate window.
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
