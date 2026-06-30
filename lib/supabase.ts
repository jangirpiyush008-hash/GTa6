/**
 * Browser Supabase client — uses the publishable (anon) key, so this is safe
 * to import from both server and client components.
 *
 * The schema (see supabase/schema.sql) only permits INSERT for `anon`, so the
 * publishable key cannot read other users' emails — only post new ones.
 */

import { createClient, type SupabaseClient } from '@supabase/supabase-js';

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!url || !anonKey) {
  // Don't crash at import time on the server — many pages don't need Supabase.
  // The thrown error only fires when something actually tries to use the client.
  console.warn('[supabase] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY missing');
}

let _client: SupabaseClient | null = null;

export function supabase(): SupabaseClient {
  if (_client) return _client;
  _client = createClient(url ?? '', anonKey ?? '', {
    auth: { persistSession: false }, // no user auth flow — anonymous inserts only
  });
  return _client;
}
