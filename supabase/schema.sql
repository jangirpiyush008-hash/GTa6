-- GTAVI.GUIDE — Supabase schema (initial)
-- Applied to project: nbqlhcbfllwdehlbyevu (Gta6)
-- Pattern: anon role can INSERT but never SELECT — emails collected from
--          the public site can't be read back through the publishable key.
--          Admins read via the Supabase dashboard using the service role.
--
-- To re-apply manually:
--   psql "<your connection string>" -f supabase/schema.sql
-- Or copy-paste into Dashboard → SQL Editor → Run.

-- ────────────────────────────────────────────────────────
-- 1. Newsletter signups
-- ────────────────────────────────────────────────────────
create table if not exists public.newsletter_signups (
  id          bigint generated always as identity primary key,
  email       text not null,
  source      text default 'home',
  user_agent  text,
  referer     text,
  created_at  timestamptz not null default now(),
  constraint newsletter_signups_email_lower_uq unique (email)
);

create index if not exists newsletter_signups_created_at_idx
  on public.newsletter_signups (created_at desc);

alter table public.newsletter_signups enable row level security;

drop policy if exists "anon can insert newsletter" on public.newsletter_signups;
create policy "anon can insert newsletter"
  on public.newsletter_signups
  for insert
  to anon
  with check (
    email is not null
    and length(email) between 5 and 254
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  );

-- ────────────────────────────────────────────────────────
-- 2. Per-game interest captures
--    e.g. "notify me when GTA VI launches"
-- ────────────────────────────────────────────────────────
create table if not exists public.game_interests (
  id          bigint generated always as identity primary key,
  email       text not null,
  game_slug   text not null,
  created_at  timestamptz not null default now(),
  constraint game_interests_email_slug_uq unique (email, game_slug)
);

create index if not exists game_interests_slug_idx
  on public.game_interests (game_slug);

alter table public.game_interests enable row level security;

drop policy if exists "anon can insert game interest" on public.game_interests;
create policy "anon can insert game interest"
  on public.game_interests
  for insert
  to anon
  with check (
    email is not null
    and length(email) between 5 and 254
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    and game_slug is not null
    and length(game_slug) between 1 and 64
  );

-- ────────────────────────────────────────────────────────
-- 3. Contact messages
-- ────────────────────────────────────────────────────────
create table if not exists public.contact_messages (
  id          bigint generated always as identity primary key,
  name        text,
  email       text not null,
  message     text not null,
  created_at  timestamptz not null default now()
);

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

alter table public.contact_messages enable row level security;

drop policy if exists "anon can insert contact" on public.contact_messages;
create policy "anon can insert contact"
  on public.contact_messages
  for insert
  to anon
  with check (
    email is not null
    and length(email) between 5 and 254
    and email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    and message is not null
    and length(message) between 1 and 4000
  );
