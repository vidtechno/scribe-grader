-- Elementary (A1) opens: learners can start the course at Beginner or Elementary.
create or replace function public.learning_start(_level text default 'beginner')
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if _level not in ('beginner','a1') then raise exception 'level_not_available'; end if;
  insert into public.learning_profiles(user_id, level) values (uid, _level)
  on conflict (user_id) do update set level=excluded.level, updated_at=now();
  return public.learning_access_for(uid);
end; $$;

-- The bot card shows the level the learner started at.
create or replace function public.telegram_learning_summary(_user uuid)
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare p public.learning_profiles%rowtype;
begin
  select * into p from public.learning_profiles where user_id=_user;
  if not found then return jsonb_build_object('started', false, 'access', public.learning_access_for(_user)); end if;
  return jsonb_build_object(
    'started', true,
    'level', p.level,
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
revoke all on function public.learning_start(text) from public, anon;
grant execute on function public.learning_start(text) to authenticated, service_role;
