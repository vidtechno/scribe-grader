-- Level certificates on the profile: shown to other people with the same visibility as progress (the owner always sees theirs).
-- The printed full name is never exposed here. Also adds the owner's own list (with the name) for re-opening a certificate.
create or replace function public.social_public_profile(_public_id text)
returns jsonb
language plpgsql stable security definer set search_path to 'public'
as $function$
declare
  uid uuid := auth.uid(); target uuid; me boolean; lp public.learning_profiles%rowtype;
  show_prog boolean; show_ielts boolean; out jsonb; lessons int; tests int; has_lp boolean;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  target := public.social_user_by_public_id(_public_id);
  if target is null then raise exception 'not_found'; end if;
  me := target = uid;
  if not me and not public.social_setting(target, 'discoverable') then raise exception 'not_found'; end if;
  show_prog := me or public.social_setting(target, 'show_progress');
  show_ielts := me or public.social_setting(target, 'show_ielts');
  select * into lp from public.learning_profiles where user_id = target;
  has_lp := found;
  out := jsonb_build_object(
    'public_id', (select public_id from public.profiles where user_id = target), 'username', (select username from public.profiles where user_id = target), 'avatar', (select avatar_key from public.profiles where user_id = target), 'name', public.social_display_name(target), 'is_me', me,
    'member_since', (select created_at from public.profiles where user_id = target),
    'level', lp.level,
    'followers', (select count(*) from public.user_follows where followee_id = target and ended_at is null),
    'following', (select count(*) from public.user_follows where follower_id = target and ended_at is null),
    'is_following', exists(select 1 from public.user_follows where follower_id = uid and followee_id = target and ended_at is null),
    'follows_me', exists(select 1 from public.user_follows where follower_id = target and followee_id = uid and ended_at is null),
    'progress_visible', show_prog, 'ielts_visible', show_ielts);
  if show_prog and has_lp then
    select count(*) into lessons from public.learning_lesson_progress where user_id = target and completed_at is not null;
    select count(*) into tests from public.learning_unit_tests where user_id = target and passed_at is not null;
    out := out || jsonb_build_object(
      'xp', lp.xp, 'streak', public.learning_streak(target), 'streak_best', greatest(lp.streak_best, public.learning_streak(target)),
      'lessons_done', lessons, 'words', lessons * 10, 'tests_passed', tests,
      'week_xp', (select coalesce(sum(xp), 0) from public.learning_daily_activity where user_id = target and day >= date_trunc('week', public.learning_today()::timestamp)::date),
      'next_lesson_title', lp.next_lesson_title,
      'activity', (select coalesce(jsonb_agg(jsonb_build_object('day', d.day, 'xp', coalesce(a.xp, 0)) order by d.day), '[]'::jsonb)
                   from generate_series(public.learning_today() - 13, public.learning_today(), interval '1 day') as d(day)
                   left join public.learning_daily_activity a on a.user_id = target and a.day = d.day::date),
      'achievements', (select coalesce(jsonb_agg(jsonb_build_object('key', key, 'unlocked_at', unlocked_at) order by unlocked_at), '[]'::jsonb)
                       from public.learning_achievements where user_id = target));
  end if;
  if show_prog then
    out := out || jsonb_build_object('certificates', (
      select coalesce(jsonb_agg(jsonb_build_object('level_id', c.level_id, 'percent', c.percent, 'issued_at', c.issued_at, 'number', c.number) order by c.issued_at), '[]'::jsonb)
      from public.learning_certificates c where c.user_id = target));
  end if;
  if show_ielts then
    out := out || jsonb_build_object('ielts', jsonb_build_object(
      'writing_count', (select count(*) from public.essays where user_id = target and status = 'completed'),
      'writing_best', (select max(score) from public.essays where user_id = target and status = 'completed'),
      'speaking_count', (select count(*) from public.speaking_attempts where user_id = target and status = 'completed'),
      'speaking_best', (select max(score) from public.speaking_attempts where user_id = target and status = 'completed')));
  end if;
  return out;
end; $function$;

create or replace function public.learning_my_certificates()
returns jsonb language plpgsql stable security definer set search_path = public as $$
declare uid uuid := auth.uid();
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  return coalesce((select jsonb_agg(jsonb_build_object('level_id', c.level_id, 'full_name', c.full_name, 'percent', c.percent,
    'passed_at', c.passed_at, 'issued_at', c.issued_at, 'number', c.number) order by c.issued_at)
    from public.learning_certificates c where c.user_id = uid), '[]'::jsonb);
end; $$;
revoke all on function public.learning_my_certificates() from public, anon;
grant execute on function public.learning_my_certificates() to authenticated, service_role;
