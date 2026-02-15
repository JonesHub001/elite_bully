-- Dashboard approval support

alter table public.newsletter_subscriptions
  add column if not exists approval_status text not null default 'pending';

-- Keep existing records meaningful
update public.newsletter_subscriptions
set approval_status = case
  when active = true then 'approved'
  else 'pending'
end
where approval_status is null or approval_status = '';

-- Reservation approvals from dashboard
drop policy if exists "anon can view reservation requests" on public.reservation_requests;
create policy "anon can view reservation requests"
  on public.reservation_requests
  for select
  to anon
  using (true);

drop policy if exists "anon can update reservation requests" on public.reservation_requests;
create policy "anon can update reservation requests"
  on public.reservation_requests
  for update
  to anon
  using (true)
  with check (status in ('pending', 'approved', 'rejected'));

-- Newsletter approvals from dashboard
drop policy if exists "anon can view newsletter subscriptions" on public.newsletter_subscriptions;
create policy "anon can view newsletter subscriptions"
  on public.newsletter_subscriptions
  for select
  to anon
  using (true);

drop policy if exists "anon can update newsletter subscriptions" on public.newsletter_subscriptions;
create policy "anon can update newsletter subscriptions"
  on public.newsletter_subscriptions
  for update
  to anon
  using (true)
  with check (approval_status in ('pending', 'approved', 'rejected'));
