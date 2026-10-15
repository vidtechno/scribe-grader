-- IELTS Reading and Listening practice results (the tests are scored in the browser; this keeps history and progress).
create table if not exists public.ielts_practice_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  skill text not null check (skill in ('reading', 'listening')),
  test_id text not null check (test_id ~ '^[rl]\d{1,3}$'),
  mode text not null default 'full' check (mode in ('full', 'part')),
  part int check (part between 0 and 3),
  correct int not null check (correct between 0 and 40),
  total int not null check (total between 1 and 40),
  band numeric(2,1) not null check (band between 0 and 9),
  by_kind jsonb not null default '{}'::jsonb,
  seconds int check (seconds between 0 and 20000),
  created_at timestamptz not null default now(),
  check (correct <= total)
);
create index if not exists ielts_practice_user_idx on public.ielts_practice_attempts (user_id, created_at desc);
alter table public.ielts_practice_attempts enable row level security;
create policy "own attempts read" on public.ielts_practice_attempts for select to authenticated using (user_id = auth.uid());

-- Only this function writes (so a client cannot insert rows for other users or out-of-range values).
create or replace function public.ielts_save_attempt(_skill text, _test_id text, _mode text, _part int, _correct int, _total int, _band numeric, _by_kind jsonb, _seconds int)
returns uuid language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); rid uuid;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if _skill not in ('reading', 'listening') or _test_id !~ '^[rl]\d{1,3}$' or _mode not in ('full', 'part') then raise exception 'bad_input'; end if;
  if (_skill = 'reading') <> (left(_test_id, 1) = 'r') then raise exception 'bad_input'; end if;
  if _correct < 0 or _total < 1 or _total > 40 or _correct > _total or _band < 0 or _band > 9 then raise exception 'bad_input'; end if;
  -- no more than 60 saved attempts a day per user
  if (select count(*) from public.ielts_practice_attempts where user_id = uid and created_at > now() - interval '1 day') >= 60 then raise exception 'too_many'; end if;
  insert into public.ielts_practice_attempts (user_id, skill, test_id, mode, part, correct, total, band, by_kind, seconds)
  values (uid, _skill, _test_id, _mode, _part, _correct, _total, _band, coalesce(_by_kind, '{}'::jsonb), _seconds)
  returning id into rid;
  return rid;
end; $$;
revoke all on function public.ielts_save_attempt(text, text, text, int, int, int, numeric, jsonb, int) from public, anon;
grant execute on function public.ielts_save_attempt(text, text, text, int, int, int, numeric, jsonb, int) to authenticated;
