'use client';

import { useState } from 'react';
import { Music, Play, ExternalLink, ChevronDown } from 'lucide-react';
import type { Track } from '@/lib/games-content/types';

/**
 * Per-track row with:
 *   - inline YouTube iframe when `youtubeId` is present (click play → expands)
 *   - external YouTube search link as fallback (always available)
 *
 * Track titles + artist names are factual metadata. The iframe loads
 * YouTube's official embedded player — no audio is hosted on this site.
 */
export default function TrackPlayer({
  track,
  gameTitle,
  accent,
}: {
  track: Track;
  gameTitle: string;
  accent: string;
}) {
  const [open, setOpen] = useState(false);
  const query = [track.title, track.artist, gameTitle, 'soundtrack']
    .filter(Boolean)
    .join(' ');
  const searchHref = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  const hasEmbed = !!track.youtubeId;

  const togglePlay = () => {
    if (!hasEmbed) {
      window.open(searchHref, '_blank', 'noopener,noreferrer');
      return;
    }
    setOpen(!open);
  };

  return (
    <div
      className="glass rounded-md border overflow-hidden"
      style={{ borderColor: `${accent}1f` }}
    >
      <div className="flex items-center gap-3 px-3 py-2">
        <button
          onClick={togglePlay}
          className="shrink-0 h-8 w-8 rounded-full flex items-center justify-center transition hover:scale-110"
          style={{
            background: hasEmbed ? accent : 'rgba(255,255,255,0.07)',
            color: hasEmbed ? '#0a0a0a' : '#ffffffaa',
            boxShadow: hasEmbed ? `0 0 14px ${accent}88` : undefined,
          }}
          aria-label={hasEmbed ? `Play ${track.title}` : `Search YouTube for ${track.title}`}
          title={hasEmbed ? 'Play inline' : 'Search YouTube'}
        >
          {hasEmbed ? (
            open ? <ChevronDown className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5 fill-current" />
          ) : (
            <ExternalLink className="h-3.5 w-3.5" />
          )}
        </button>

        <Music className="h-3.5 w-3.5 shrink-0" style={{ color: accent }} />

        <span className="text-sm text-white truncate min-w-0">{track.title}</span>

        {track.artist && (
          <span className="ml-auto text-xs text-white/55 truncate">
            {track.artist}
          </span>
        )}

        <a
          href={searchHref}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-white/35 hover:text-white transition shrink-0"
          title="Search YouTube"
        >
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      {hasEmbed && open && (
        <div className="border-t" style={{ borderColor: `${accent}26` }}>
          <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${track.youtubeId}?autoplay=1&modestbranding=1`}
              title={`${track.title} — ${track.artist ?? ''}`}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
