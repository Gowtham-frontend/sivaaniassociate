-- Run once in the Supabase SQL editor. Uses the PUBLIC anon key from the browser, insert-only.
create table if not exists public.enquiries (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  full_name text not null check (char_length(full_name) between 2 and 80),
  mobile text not null check (mobile ~ '^[6-9][0-9]{9}$'),
  email text not null check (char_length(email) <= 100),
  city text not null check (char_length(city) <= 60),
  category text not null,
  product text not null,
  message text check (char_length(message) <= 500)
);
alter table public.enquiries enable row level security;
create policy "anon can insert enquiries" on public.enquiries for insert to anon with check (true);
-- no select/update/delete policy for anon: customers' data stays private. Read it in the Supabase dashboard.
