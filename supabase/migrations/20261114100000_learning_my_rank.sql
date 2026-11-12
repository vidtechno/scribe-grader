-- The caller's own weekly rank, with the same ranking rules and visibility as learning_leaderboard
-- (global scope, XP > 0, leaderboard_visible). Used by the "+N XP" toast.
create or replace function public.learning_my_rank()
returns jsonb
language plpgsql
stable
security definer
set search_path = public
as $$
declare
  uid uuid := auth.uid();
  wk date := date_trunc('week', public.learning_today()::timestamp)::date;
  my_week int; my_rank int; my_xp int; my_all_rank int; total int; leader int;
  next_xp int; next_user uuid; visible boolean;
begin
  if uid is null then raise exception 'not_authenticated'; end if;

  select coalesce(sum(a.xp), 0)::int into my_week
    from public.learning_daily_activity a where a.user_id = uid and a.day >= wk;
  visible := public.social_setting(uid, 'leaderboard_visible');

  with w as (
    select lp.user_id,
      coalesce((select sum(a.xp) from public.learning_daily_activity a where a.user_id = lp.user_id and a.day >= wk), 0)::int as xp
    from public.learning_profiles lp
    where public.social_setting(lp.user_id, 'leaderboard_visible')
  ), r as (select * from w where xp > 0)
  select (select count(*) from r), coalesce((select max(xp) from r), 0),
         case when visible and my_week > 0 then (select count(*) from r where xp > my_week) + 1 end,
         (select r2.xp from r r2 where visible and my_week > 0 and r2.xp > my_week
            order by r2.xp, public.social_display_name(r2.user_id) limit 1),
         (select r2.user_id from r r2 where visible and my_week > 0 and r2.xp > my_week
            order by r2.xp, public.social_display_name(r2.user_id) limit 1)
    into total, leader, my_rank, next_xp, next_user;

  select lp.xp into my_xp from public.learning_profiles lp where lp.user_id = uid;
  if visible and coalesce(my_xp, 0) > 0 then
    select count(*)::int + 1 into my_all_rank from public.learning_profiles lp
      where lp.xp > my_xp and public.social_setting(lp.user_id, 'leaderboard_visible');
  end if;

  return jsonb_build_object(
    'week_xp', my_week,
    'rank', my_rank,
    'total', total,
    'xp_to_next', case when my_rank is null or my_rank = 1 or next_xp is null then null else next_xp - my_week + 1 end,
    'next_name', case when my_rank is null or my_rank = 1 or next_user is null then null else public.social_display_name(next_user) end,
    'leader_xp', leader,
    'all_time_rank', my_all_rank,
    'visible', visible);
end; $$;

revoke all on function public.learning_my_rank() from public, anon;
grant execute on function public.learning_my_rank() to authenticated;
