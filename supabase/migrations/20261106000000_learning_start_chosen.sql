-- A new learner picks a level on the course page and starts right there, without a placement test.
-- (The 15-question level check stays available as an option: learning_start_placed.)
create or replace function public.learning_start_chosen(_level text)
returns jsonb language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); lv public.learning_levels%rowtype; first_level text;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  select * into lv from public.learning_levels where id = _level and is_open;
  if not found then raise exception 'level_not_available'; end if;
  select id into first_level from public.learning_levels order by position limit 1;
  insert into public.learning_profiles(user_id, level, placement_status)
  values (uid, lv.id, case when lv.id = first_level then 'none' else 'skipped' end)
  on conflict (user_id) do nothing;
  return public.learning_access_for(uid);
end; $$;
revoke all on function public.learning_start_chosen(text) from public, anon;
grant execute on function public.learning_start_chosen(text) to authenticated, service_role;
