'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Mail, Check, AlertCircle, Loader2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'ok' | 'duplicate' | 'error';

/**
 * Lead-capture form that writes to public.newsletter_signups via the
 * anon (publishable) key. RLS only allows inserts, so emails are safe.
 *
 *   <NewsletterSignup source="footer" />
 */
export default function NewsletterSignup({
  source = 'footer',
  className = '',
}: {
  source?: string;
  className?: string;
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setStatus('error');
      setMessage('That email doesn\'t look right.');
      return;
    }
    setStatus('loading');
    setMessage(null);
    const { error } = await supabase()
      .from('newsletter_signups')
      .insert({ email: trimmed, source });

    if (!error) {
      setStatus('ok');
      setMessage('You\'re in. Watch for launch-day reminders + cheat drops.');
      setEmail('');
      return;
    }
    // Postgres "duplicate key" code = 23505
    if ((error as { code?: string }).code === '23505') {
      setStatus('duplicate');
      setMessage('You\'re already on the list — no need to subscribe twice.');
      return;
    }
    setStatus('error');
    setMessage('Something went wrong on our side. Try again in a minute.');
  }

  const done = status === 'ok' || status === 'duplicate';

  return (
    <form onSubmit={submit} className={className}>
      <div className="flex items-center gap-2">
        <div className="relative flex-1 min-w-0">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 pointer-events-none" />
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus('idle'); setMessage(null); }}
            disabled={status === 'loading' || done}
            required
            className="w-full bg-white/[0.04] border border-white/15 rounded-md pl-9 pr-3 py-2.5 text-sm text-white placeholder-white/35 focus:outline-none focus:border-neon-pink/60 focus:ring-2 focus:ring-neon-pink/20 disabled:opacity-50"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'loading' || done}
          className="btn btn-pink text-sm py-2.5 px-4 shrink-0"
        >
          {status === 'loading' ? <Loader2 className="h-4 w-4 animate-spin" /> :
           done ? <Check className="h-4 w-4" /> :
           'Notify Me'}
        </button>
      </div>

      {message && (
        <div
          className={`mt-2 text-xs flex items-start gap-1.5 ${
            done ? 'text-emerald-300' : 'text-neon-pink'
          }`}
        >
          {done ? <Check className="h-3 w-3 mt-0.5 shrink-0" /> : <AlertCircle className="h-3 w-3 mt-0.5 shrink-0" />}
          <span>{message}</span>
        </div>
      )}
    </form>
  );
}
