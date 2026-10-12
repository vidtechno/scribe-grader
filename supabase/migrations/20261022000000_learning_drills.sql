-- Practice games after hard lessons ("drills"): required before the next lesson. Progress per drill, 70% to pass.
create table if not exists public.learning_drill_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  drill_id text not null,
  best_score int not null default 0,
  total int not null default 0,
  stars smallint not null default 0,
  attempts int not null default 0,
  completed_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, drill_id)
);
alter table public.learning_drill_progress enable row level security;
drop policy if exists "own drill progress" on public.learning_drill_progress;
create policy "own drill progress" on public.learning_drill_progress for select to authenticated using (user_id = auth.uid());

create or replace function public.learning_complete_drill(_drill text, _score int, _total int, _seconds int default 0)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); pct numeric; passed boolean; stars smallint; first boolean; gain int;
  cur public.learning_drill_progress%rowtype; act jsonb;
begin
  perform public.learning_require_access(uid);
  if _drill !~ '^u[0-9]{1,2}-l[0-9]{1,2}-d[1-3]$' then raise exception 'invalid_drill'; end if;
  if _total < 5 or _total > 20 or _score < 0 or _score > _total then raise exception 'invalid_score'; end if;
  pct := _score * 100.0 / _total;
  passed := pct >= 70;
  stars := case when pct >= 90 then 3 when pct >= 80 then 2 when pct >= 70 then 1 else 0 end;
  select * into cur from public.learning_drill_progress where user_id = uid and drill_id = _drill for update;
  first := passed and (cur.completed_at is null);
  -- the first pass pays 15 XP, repeats a couple, so a drill cannot be farmed
  gain := case when first then 15 else least(_score / 4, 3) end;
  insert into public.learning_drill_progress(user_id, drill_id, best_score, total, stars, attempts, completed_at, updated_at)
  values (uid, _drill, _score, _total, stars, 1, case when passed then now() end, now())
  on conflict (user_id, drill_id) do update set
    best_score = greatest(learning_drill_progress.best_score, excluded.best_score),
    total = excluded.total,
    stars = greatest(learning_drill_progress.stars, excluded.stars),
    attempts = learning_drill_progress.attempts + 1,
    completed_at = coalesce(learning_drill_progress.completed_at, excluded.completed_at),
    updated_at = now();
  act := public.learning_record_activity(uid, gain, 0, greatest(0, least(coalesce(_seconds, 0), 1800)), _score, _total);
  return jsonb_build_object('passed', passed, 'stars', stars, 'first', first, 'xp', (act->>'xp')::int, 'streak', (act->>'streak')::int)
    || (act - 'xp' - 'streak');
end; $$;

revoke all on function public.learning_complete_drill(text,int,int,int) from public, anon;
grant execute on function public.learning_complete_drill(text,int,int,int) to authenticated, service_role;

-- learning_state also returns the drill progress.
create or replace function public.learning_state()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  return jsonb_build_object(
    'profile', (select to_jsonb(p) - 'user_id' from public.learning_profiles p where p.user_id = uid),
    'access', public.learning_access_for(uid),
    'streak', public.learning_streak(uid),
    'streak_info', public.learning_streak_info(uid),
    'goal', jsonb_build_object(
      'daily_goal_xp', coalesce((select daily_goal_xp from public.learning_profiles where user_id = uid), 30),
      'today_xp', coalesce((select xp from public.learning_daily_activity where user_id = uid and day = public.learning_today()), 0)),
    'today', public.learning_today(),
    'progress', coalesce((select jsonb_agg(to_jsonb(x) - 'user_id') from public.learning_lesson_progress x where x.user_id = uid), '[]'::jsonb),
    'drills', coalesce((select jsonb_agg(to_jsonb(x) - 'user_id') from public.learning_drill_progress x where x.user_id = uid), '[]'::jsonb),
    'tests', coalesce((select jsonb_agg(to_jsonb(x) - 'user_id') from public.learning_unit_tests x where x.user_id = uid), '[]'::jsonb),
    'activity', coalesce((select jsonb_agg(to_jsonb(x) - 'user_id' order by x.day) from public.learning_daily_activity x
                          where x.user_id = uid and x.day > public.learning_today() - 60), '[]'::jsonb),
    'achievements', coalesce((select jsonb_agg(jsonb_build_object('key', key, 'unlocked_at', unlocked_at) order by unlocked_at)
                              from public.learning_achievements where user_id = uid), '[]'::jsonb),
    'levels', coalesce((select jsonb_agg(to_jsonb(l) order by l.position) from public.learning_levels l), '[]'::jsonb));
end; $$;
