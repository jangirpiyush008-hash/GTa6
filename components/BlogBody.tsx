import Link from 'next/link';
import type { BlogBlock } from '@/lib/blog';
import { ExternalLink } from 'lucide-react';

/**
 * Renders a paragraph string with inline-link syntax: [label](href).
 * - `/foo` and `#foo` → next/link (internal)
 * - everything else → <a target="_blank" rel="noopener noreferrer nofollow">
 */
function renderInline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [, label, href] = m;
    const internal = href.startsWith('/') || href.startsWith('#');
    if (internal) {
      out.push(
        <Link
          key={`k${key++}`}
          href={href}
          className="text-neon-cyan underline decoration-neon-cyan/40 hover:decoration-neon-cyan"
        >
          {label}
        </Link>,
      );
    } else {
      out.push(
        <a
          key={`k${key++}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="text-neon-pink underline decoration-neon-pink/40 hover:decoration-neon-pink"
        >
          {label}
        </a>,
      );
    }
    last = re.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function BlogBody({ body }: { body: BlogBlock[] }) {
  return (
    <div className="prose-invert space-y-6">
      {body.map((block, i) => {
        if ('h' in block) {
          return (
            <h2
              key={i}
              className="display text-2xl sm:text-3xl text-white mt-10 pt-2 border-t border-white/10"
            >
              {block.h}
            </h2>
          );
        }
        if ('p' in block) {
          return (
            <p key={i} className="text-white/80 leading-relaxed text-base sm:text-lg">
              {renderInline(block.p)}
            </p>
          );
        }
        if ('list' in block) {
          return (
            <ul key={i} className="space-y-2">
              {block.list.map((item, j) => (
                <li
                  key={j}
                  className="flex gap-3 text-white/80 leading-relaxed text-base"
                >
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neon-pink shrink-0" />
                  <span>{renderInline(item)}</span>
                </li>
              ))}
            </ul>
          );
        }
        if ('quote' in block) {
          return (
            <blockquote
              key={i}
              className="relative pl-6 py-2 my-8 border-l-4 border-neon-pink/70 bg-white/[0.02] rounded-r-lg"
            >
              <p className="text-xl sm:text-2xl text-white italic leading-snug">
                “{block.quote}”
              </p>
              {block.by && (
                <footer className="mt-3 text-sm text-white/55">
                  — {block.by}
                </footer>
              )}
            </blockquote>
          );
        }
        if ('link' in block) {
          return (
            <a
              key={i}
              href={block.link.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="block glass glass-cyan rounded-xl p-5 hover:glass-pink transition group"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-neon-cyan">
                {block.link.source}
              </div>
              <div className="mt-1 flex items-center gap-2 text-white group-hover:text-neon-pink transition">
                <span className="font-medium">{block.link.label}</span>
                <ExternalLink className="h-4 w-4" />
              </div>
            </a>
          );
        }
        return null;
      })}
    </div>
  );
}
