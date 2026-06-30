import type { Game } from '@/lib/games';
import type { CategoryId } from '@/lib/categories';
import type { GameContent } from '@/lib/games-content/types';
import { Check, Star, Calendar, ExternalLink, PlayCircle, Image as ImageIcon } from 'lucide-react';
import TrackPlayer from './TrackPlayer';

/**
 * Renders deep content for a (game, category) pair when present.
 * Returns null when the requested category has no content — caller falls
 * back to the universal "Coming soon" stub.
 */
export default function GameContentView({
  game,
  category,
  content,
}: {
  game: Game;
  category: CategoryId;
  content: GameContent;
}) {
  switch (category) {
    case 'editions':
      return content.editions ? <EditionsView game={game} data={content.editions} /> : null;
    case 'characters':
      return content.characters ? <CharactersView game={game} data={content.characters} /> : null;
    case 'weapons':
      return content.weapons ? <GroupedListView game={game} data={content.weapons} /> : null;
    case 'vehicles':
      return content.vehicles ? <GroupedListView game={game} data={content.vehicles} /> : null;
    case 'animals':
      return content.animals ? <GroupedListView game={game} data={content.animals} /> : null;
    case 'map':
      return content.map ? <MapView game={game} data={content.map} /> : null;
    case 'news':
      return content.news ? <NewsView game={game} data={content.news} /> : null;
    case 'features':
      return content.features ? <FeaturesView game={game} data={content.features} /> : null;
    case 'missions':
      return content.missions ? <MissionsView game={game} data={content.missions} /> : null;
    case 'activities':
      return content.activities ? <LabeledListView game={game} data={content.activities} /> : null;
    case 'properties':
      return content.properties ? <LabeledListView game={game} data={content.properties} /> : null;
    case 'cheats-ps5':
      return content['cheats-ps5'] ? <CheatsView game={game} data={content['cheats-ps5']} platform="PS5" /> : null;
    case 'cheats-xbox':
      return content['cheats-xbox'] ? <CheatsView game={game} data={content['cheats-xbox']} platform="Xbox" /> : null;
    case 'cheats-pc':
      return content['cheats-pc'] ? <CheatsView game={game} data={content['cheats-pc']} platform="PC" /> : null;
    case 'artworks':
      return content.artworks ? <ArtworksView game={game} data={content.artworks} /> : null;
    case 'videos':
      return content.videos ? <VideosView game={game} data={content.videos} /> : null;
    case 'soundtrack':
      return content.soundtrack ? <SoundtrackView game={game} data={content.soundtrack} /> : null;
    default:
      return null;
  }
}

/* ── shared bits ── */

function Intro({ children }: { children: React.ReactNode }) {
  return <p className="text-white/75 leading-relaxed text-base sm:text-lg">{children}</p>;
}

function GroupHeader({ accent, children }: { accent: string; children: React.ReactNode }) {
  return (
    <h3 className="display text-xl tracking-wider mb-3" style={{ color: accent }}>
      {children}
    </h3>
  );
}

/* ───────────── EDITIONS ───────────── */
function EditionsView({ game, data }: { game: Game; data: NonNullable<GameContent['editions']> }) {
  return (
    <section className="space-y-8">
      <Intro>{data.intro}</Intro>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {data.tiers.map((t) => (
          <div
            key={t.name}
            className="glass rounded-2xl p-6 relative"
            style={
              t.recommended
                ? { borderColor: `${game.accent}80`, boxShadow: `0 0 0 1px ${game.accent}33, 0 18px 36px -10px ${game.accent}55` }
                : undefined
            }
          >
            {t.recommended && (
              <div
                className="absolute -top-3 right-5 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase"
                style={{ background: game.accent, color: '#0a0a0a', boxShadow: `0 0 18px ${game.accent}88` }}
              >
                <Star className="h-3 w-3 fill-current" /> Recommended
              </div>
            )}
            <div className="text-xs uppercase tracking-[0.3em]" style={{ color: game.accent }}>{t.name}</div>
            <div className="display text-5xl text-white mt-2">${t.priceUSD.toFixed(2)}</div>
            <ul className="mt-6 space-y-2.5">
              {t.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2.5 text-white/85 text-sm">
                  <Check className="h-4 w-4 shrink-0 mt-0.5" style={{ color: game.accent }} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {data.notes && (
        <div className="glass rounded-xl p-5 text-sm text-white/70 space-y-2">
          <div className="text-xs uppercase tracking-[0.25em] text-white/45 mb-1">Worth knowing</div>
          {data.notes.map((n, i) => <p key={i}>— {n}</p>)}
        </div>
      )}
    </section>
  );
}

/* ───────────── CHARACTERS ───────────── */
function CharactersView({ game, data }: { game: Game; data: NonNullable<GameContent['characters']> }) {
  return (
    <section className="space-y-8">
      <Intro>{data.intro}</Intro>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {data.roster.map((c) => (
          <div key={c.name} className="glass rounded-lg p-4 border" style={{ borderColor: `${game.accent}26` }}>
            <div className="display text-lg tracking-wider" style={{ color: game.accent }}>{c.name}</div>
            <p className="mt-1 text-sm text-white/70 leading-snug">{c.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── GROUPED LIST (weapons / vehicles / animals) ───────────── */
function GroupedListView({ game, data }: { game: Game; data: { intro: string; groups: { name: string; items: string[] }[] } }) {
  return (
    <section className="space-y-8">
      <Intro>{data.intro}</Intro>
      <div className="space-y-6">
        {data.groups.map((g) => (
          <div key={g.name}>
            <GroupHeader accent={game.accent}>{g.name}</GroupHeader>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {g.items.map((w) => (
                <div key={w} className="glass rounded-md px-3 py-2 text-sm text-white/85">{w}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── MAP ───────────── */
function MapView({ game, data }: { game: Game; data: NonNullable<GameContent['map']> }) {
  return (
    <section className="space-y-8">
      <Intro>{data.intro}</Intro>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.regions.map((r) => (
          <div key={r.name} className="glass rounded-lg p-5 border" style={{ borderColor: `${game.accent}26` }}>
            <div className="display text-xl tracking-wider" style={{ color: game.accent }}>{r.name}</div>
            <p className="mt-1.5 text-sm text-white/70 leading-snug">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── NEWS ───────────── */
function NewsView({ game, data }: { game: Game; data: NonNullable<GameContent['news']> }) {
  return (
    <section className="space-y-8">
      <Intro>{data.intro}</Intro>
      <div className="relative pl-7">
        <div className="absolute left-2 top-1 bottom-1 w-px" style={{ background: `${game.accent}44` }} />
        <div className="space-y-5">
          {data.entries.map((e, i) => (
            <div key={i} className="relative">
              <div
                className="absolute -left-[22px] top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-[#050308]"
                style={{ background: game.accent, boxShadow: `0 0 12px ${game.accent}88` }}
              />
              <div className="glass rounded-lg p-4 border" style={{ borderColor: `${game.accent}26` }}>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em]" style={{ color: game.accent }}>
                  <Calendar className="h-3 w-3" />
                  {e.date}
                </div>
                <div className="mt-1 text-white font-semibold">{e.title}</div>
                {e.desc && <p className="mt-1 text-sm text-white/65 leading-snug">{e.desc}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── FEATURES ───────────── */
function FeaturesView({ game, data }: { game: Game; data: NonNullable<GameContent['features']> }) {
  return (
    <section className="space-y-8">
      <Intro>{data.intro}</Intro>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.entries.map((f) => (
          <div key={f.title} className="glass rounded-lg p-4 border" style={{ borderColor: `${game.accent}26` }}>
            <div className="display text-lg tracking-wider" style={{ color: game.accent }}>{f.title}</div>
            <p className="mt-1 text-sm text-white/70 leading-snug">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── MISSIONS ───────────── */
function MissionsView({ game, data }: { game: Game; data: NonNullable<GameContent['missions']> }) {
  return (
    <section className="space-y-8">
      <Intro>{data.intro}</Intro>
      <div className="space-y-6">
        {data.chapters.map((ch, i) => (
          <div key={i} className="glass rounded-xl p-5 border" style={{ borderColor: `${game.accent}26` }}>
            <div className="display text-xl" style={{ color: game.accent }}>{ch.name}</div>
            <div className="text-sm text-white/55 italic mt-1">{ch.setting}</div>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-1.5">
              {ch.missions.map((m, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-white/85">
                  <span style={{ color: game.accent }}>·</span>
                  <span>
                    {m.name}
                    {m.note && <span className="text-white/40"> — {m.note}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── ACTIVITIES / PROPERTIES (labeled list) ───────────── */
function LabeledListView({ game, data }: { game: Game; data: { intro: string; entries: { name: string; desc: string }[] } }) {
  return (
    <section className="space-y-8">
      <Intro>{data.intro}</Intro>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.entries.map((e) => (
          <div key={e.name} className="glass rounded-lg p-4 border" style={{ borderColor: `${game.accent}26` }}>
            <div className="text-white font-semibold">{e.name}</div>
            <p className="mt-1 text-sm text-white/65 leading-snug">{e.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── CHEATS (PS5 / Xbox) ───────────── */
function CheatsView({
  game,
  data,
  platform,
}: {
  game: Game;
  data: NonNullable<GameContent['cheats-ps5']>;
  platform: 'PS5' | 'Xbox' | 'PC';
}) {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] px-2 py-1 rounded border" style={{ borderColor: game.accent, color: game.accent }}>
          {platform}
        </span>
        <Intro>{data.intro}</Intro>
      </div>
      {data.notes && (
        <div className="glass rounded-lg p-4 text-sm text-white/65 space-y-1.5">
          {data.notes.map((n, i) => <p key={i}>— {n}</p>)}
        </div>
      )}
      <div className="space-y-2">
        {data.entries.map((e, i) => (
          <div
            key={i}
            className="glass rounded-md p-3 sm:p-4 flex flex-col sm:grid sm:grid-cols-[1fr_1fr] gap-2 sm:gap-5 items-start border"
            style={{ borderColor: `${game.accent}1f` }}
          >
            <code
              className="font-mono text-sm text-white px-2.5 py-1.5 rounded bg-black/40 border w-full sm:w-auto"
              style={{ borderColor: `${game.accent}55` }}
            >
              {e.code}
            </code>
            <span className="text-sm text-white/75 leading-snug">{e.effect}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────── ARTWORKS ───────────── */
function ArtworksView({ game, data }: { game: Game; data: NonNullable<GameContent['artworks']> }) {
  return (
    <section className="space-y-8">
      <Intro>{data.intro}</Intro>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.entries.map((a) => {
          const inner = (
            <div className="glass rounded-lg p-4 border h-full" style={{ borderColor: `${game.accent}26` }}>
              <div className="flex items-start gap-3">
                <ImageIcon className="h-4 w-4 mt-1 shrink-0" style={{ color: game.accent }} />
                <div>
                  <div className="text-white font-semibold">{a.title}</div>
                  <p className="mt-1 text-sm text-white/65 leading-snug">{a.desc}</p>
                </div>
              </div>
            </div>
          );
          return a.href ? (
            <a key={a.title} href={a.href} target="_blank" rel="noopener noreferrer nofollow">
              {inner}
            </a>
          ) : (
            <div key={a.title}>{inner}</div>
          );
        })}
      </div>
    </section>
  );
}

/* ───────────── VIDEOS ───────────── */
function VideosView({ game, data }: { game: Game; data: NonNullable<GameContent['videos']> }) {
  return (
    <section className="space-y-8">
      <Intro>{data.intro}</Intro>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {data.entries.map((v) => (
          <a
            key={v.href}
            href={v.href}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="glass rounded-lg p-4 border flex items-start gap-3 hover:scale-[1.01] transition"
            style={{ borderColor: `${game.accent}26` }}
          >
            <PlayCircle className="h-5 w-5 mt-0.5 shrink-0" style={{ color: game.accent }} />
            <div className="flex-1 min-w-0">
              <div className="text-white font-semibold flex items-center gap-1.5">
                <span>{v.title}</span>
                <ExternalLink className="h-3 w-3 text-white/40" />
              </div>
              <div className="mt-0.5 text-xs uppercase tracking-[0.25em] text-white/45">{v.date}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ───────────── SOUNDTRACK ───────────── */
function SoundtrackView({ game, data }: { game: Game; data: NonNullable<GameContent['soundtrack']> }) {
  const searchTerm = encodeURIComponent(`${data.searchTitle ?? game.title} soundtrack`);
  return (
    <section className="space-y-8">
      <Intro>{data.intro}</Intro>

      {/* Top: open the OST on a real music platform */}
      <div className="glass rounded-xl p-5 border" style={{ borderColor: `${game.accent}40` }}>
        <div className="text-xs uppercase tracking-[0.25em] text-white/55 mb-3">
          Listen to the full official soundtrack
        </div>
        <div className="flex flex-wrap gap-2.5">
          <a
            href={`https://open.spotify.com/search/${searchTerm}`}
            target="_blank" rel="noopener noreferrer"
            className="btn text-sm py-2 px-4 text-white"
            style={{ background: '#1DB954' }}
          >
            <PlayCircle className="h-4 w-4" /> Spotify
          </a>
          <a
            href={`https://music.youtube.com/search?q=${searchTerm}`}
            target="_blank" rel="noopener noreferrer"
            className="btn text-sm py-2 px-4 text-white"
            style={{ background: '#FF0033' }}
          >
            <PlayCircle className="h-4 w-4" /> YouTube Music
          </a>
          <a
            href={`https://music.apple.com/us/search?term=${searchTerm}`}
            target="_blank" rel="noopener noreferrer"
            className="btn text-sm py-2 px-4 text-white"
            style={{ background: 'linear-gradient(135deg, #FA243C, #FB5C74)' }}
          >
            <PlayCircle className="h-4 w-4" /> Apple Music
          </a>
        </div>
        <p className="mt-3 text-[11px] text-white/40">
          Each track row below has its own ▶ for inline play (where a YouTube
          ID is mapped) and a ↗ for a one-click YouTube search.
        </p>
      </div>

      {/* Per-track players */}
      <div className="space-y-6">
        {data.groups.map((g) => (
          <div key={g.name}>
            <GroupHeader accent={game.accent}>{g.name}</GroupHeader>
            <div className="space-y-1.5">
              {g.tracks.map((t, i) => (
                <TrackPlayer
                  key={`${g.name}-${i}`}
                  track={t}
                  gameTitle={data.searchTitle ?? game.title}
                  accent={game.accent}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
