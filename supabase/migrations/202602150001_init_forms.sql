-- Forms backend bootstrap for a new Supabase project
-- Creates tables used by:
-- - src/pages/ReservationForm.tsx
-- - src/components/NewsletterSignup.tsx

create extension if not exists "pgcrypto";

create table if not exists public.reservation_requests (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  phone text not null,
  email text not null,
  dog_type text not null,
  message text,
  status text not null default 'pending',
  created_at timestamptz not null default now()
);

create table if not exists public.newsletter_subscriptions (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  active boolean not null default true,
  subscribed_at timestamptz not null default now()
);

alter table public.reservation_requests enable row level security;
alter table public.newsletter_subscriptions enable row level security;

-- Public website can insert form data; reads/updates remain blocked to anon users.
drop policy if exists "anon can insert reservation requests" on public.reservation_requests;
create policy "anon can insert reservation requests"
  on public.reservation_requests
  for insert
  to anon
  with check (true);

drop policy if exists "anon can insert newsletter subscriptions" on public.newsletter_subscriptions;
create policy "anon can insert newsletter subscriptions"
  on public.newsletter_subscriptions
  for insert
  to anon
  with check (true);
