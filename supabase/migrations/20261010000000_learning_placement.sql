-- Elementary (A1) is entered through a placement test: 20 Beginner questions, 70% to pass, 2 attempts.
-- Pass = the learner starts at Elementary; two failures (or skipping) = the learner starts at Beginner.

alter table public.learning_profiles
  add column if not exists target_level text,
  add column if not exists placement_status text not null default 'none',
  add column if not exists placement_attempts int not null default 0,
  add column if not exists placement_best int;

do $$
begin
  if not exists (select 1 from pg_constraint where conname = 'learning_profiles_placement_status_check') then
    alter table public.learning_profiles add constraint learning_profiles_placement_status_check
      check (placement_status in ('none','pending','passed','failed','skipped'));
  end if;
  if not exists (select 1 from pg_constraint where conname = 'learning_profiles_target_level_check') then
    alter table public.learning_profiles add constraint learning_profiles_target_level_check
      check (target_level is null or target_level in ('a1'));
  end if;
end $$;

-- Starting at Beginner is immediate. Choosing Elementary creates a Beginner profile with a pending placement test:
-- the level only becomes Elementary through learning_submit_placement.
create or replace function public.learning_start(_level text default 'beginner')
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if _level not in ('beginner','a1') then raise exception 'level_not_available'; end if;
  if _level = 'beginner' then
    insert into public.learning_profiles(user_id, level) values (uid, 'beginner') on conflict (user_id) do nothing;
  else
    insert into public.learning_profiles(user_id, level, target_level, placement_status)
    values (uid, 'beginner', 'a1', 'pending')
    on conflict (user_id) do update set target_level = 'a1', placement_status = 'pending', updated_at = now()
      where learning_profiles.level = 'beginner'
        and learning_profiles.placement_status in ('none','skipped')
        and learning_profiles.placement_attempts < 2;
  end if;
  return public.learning_access_for(uid);
end; $$;

create or replace function public.learning_submit_placement(
  _score int, _total int, _next_id text default null, _next_title text default null)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); p public.learning_profiles%rowtype; passed boolean; tries int; gain int := 0; new_status text;
begin
  perform public.learning_require_access(uid);
  if _total <> 20 or _score < 0 or _score > _total then raise exception 'invalid_score'; end if;
  select * into p from public.learning_profiles where user_id = uid for update;
  if p.placement_status <> 'pending' then raise exception 'placement_not_pending'; end if;
  passed := _score * 100 >= _total * 70;
  tries := p.placement_attempts + 1;
  if passed then
    gain := 30;
    new_status := 'passed';
    update public.learning_profiles set
      level = coalesce(p.target_level, 'a1'), target_level = null, placement_status = 'passed', placement_attempts = tries,
      placement_best = greatest(coalesce(p.placement_best, 0), _score),
      next_lesson_id = left(_next_id, 20), next_lesson_title = left(_next_title, 120),
      xp = xp + gain, updated_at = now()
    where user_id = uid;
    perform public.learning_add_activity(uid, gain, 0, 0, _score, _total);
  else
    new_status := case when tries >= 2 then 'failed' else 'pending' end;
    update public.learning_profiles set
      placement_status = new_status, placement_attempts = tries,
      placement_best = greatest(coalesce(p.placement_best, 0), _score),
      target_level = case when tries >= 2 then null else p.target_level end,
      updated_at = now()
    where user_id = uid;
  end if;
  return jsonb_build_object('passed', passed, 'status', new_status, 'attempts_left', greatest(0, 2 - tries), 'xp', gain);
end; $$;

-- "Start from Beginner" instead of taking the placement test.
create or replace function public.learning_skip_placement()
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  update public.learning_profiles set placement_status = 'skipped', target_level = null, updated_at = now()
  where user_id = uid and placement_status = 'pending';
  return public.learning_access_for(uid);
end; $$;

-- The bot card knows when a placement test is waiting.
create or replace function public.telegram_learning_summary(_user uuid)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare p public.learning_profiles%rowtype;
begin
  select * into p from public.learning_profiles where user_id=_user;
  if not found then return jsonb_build_object('started', false, 'access', public.learning_access_for(_user)); end if;
  return jsonb_build_object(
    'started', true,
    'level', p.level,
    'placement_status', p.placement_status,
    'access', public.learning_access_for(_user),
    'xp', p.xp,
    'streak', public.learning_streak(_user),
    'lessons_done', (select count(*) from public.learning_lesson_progress where user_id=_user and completed_at is not null),
    'tests_passed', (select count(*) from public.learning_unit_tests where user_id=_user and passed_at is not null),
    'today_done', exists(select 1 from public.learning_daily_activity where user_id=_user and day=public.learning_today() and xp>0),
    'next_lesson_title', p.next_lesson_title
  );
end; $$;

revoke all on function public.telegram_learning_summary(uuid) from public, anon, authenticated;
grant execute on function public.telegram_learning_summary(uuid) to service_role;
do $$
declare f text;
begin
  foreach f in array array['public.learning_start(text)', 'public.learning_submit_placement(int,int,text,text)', 'public.learning_skip_placement()'] loop
    execute format('revoke all on function %s from public, anon', f);
    execute format('grant execute on function %s to authenticated, service_role', f);
  end loop;
end $$;
