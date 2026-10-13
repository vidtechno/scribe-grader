-- A first-time learner takes a short level test and starts at the level it finds; a learner who started too low can
-- move up with a short test. Both are recorded on the learning profile; nothing else changes.

create or replace function public.learning_start_placed(_level text, _score int, _total int)
returns jsonb language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); lv public.learning_levels%rowtype; first_level text;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if _total < 6 or _total > 20 or _score < 0 or _score > _total then raise exception 'invalid_score'; end if;
  select * into lv from public.learning_levels where id = _level and is_open;
  if not found then raise exception 'level_not_available'; end if;
  select id into first_level from public.learning_levels order by position limit 1;
  insert into public.learning_profiles(user_id, level, placement_status, placement_best)
  values (uid, lv.id, case when lv.id = first_level then 'none' else 'passed' end, case when lv.id = first_level then null else _score end)
  on conflict (user_id) do nothing;
  return public.learning_access_for(uid);
end; $$;

create or replace function public.learning_upgrade_level(_level text, _score int, _total int, _next_id text default null, _next_title text default null)
returns jsonb language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); p public.learning_profiles%rowtype; target_pos int; cur_pos int; passed boolean; act jsonb := '{}'::jsonb;
begin
  perform public.learning_require_access(uid);
  if _total < 10 or _total > 20 or _score < 0 or _score > _total then raise exception 'invalid_score'; end if;
  select * into p from public.learning_profiles where user_id = uid for update;
  if not found then raise exception 'learning_not_started'; end if;
  select position into target_pos from public.learning_levels where id = _level and is_open;
  if target_pos is null then raise exception 'level_not_available'; end if;
  select position into cur_pos from public.learning_levels where id = p.level;
  if target_pos <= cur_pos then return jsonb_build_object('passed', true, 'advanced', false, 'xp', 0); end if;
  passed := _score * 100 >= _total * 75;
  if passed then
    update public.learning_profiles set level = _level, placement_status = 'passed', placement_target = null,
      placement_best = greatest(coalesce(p.placement_best, 0), _score),
      next_lesson_id = left(_next_id, 20), next_lesson_title = left(_next_title, 120), updated_at = now()
    where user_id = uid;
    act := public.learning_record_activity(uid, 20, 0, 0, _score, _total);
  end if;
  return jsonb_build_object('passed', passed, 'advanced', passed, 'xp', coalesce((act->>'xp')::int, 0)) || (act - 'xp');
end; $$;

revoke all on function public.learning_start_placed(text,int,int) from public, anon;
grant execute on function public.learning_start_placed(text,int,int) to authenticated, service_role;
revoke all on function public.learning_upgrade_level(text,int,int,text,text) from public, anon;
grant execute on function public.learning_upgrade_level(text,int,int,text,text) to authenticated, service_role;
