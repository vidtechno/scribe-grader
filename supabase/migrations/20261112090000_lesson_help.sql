-- In-lesson AI help ("Tushunmadim?"): at most 3 questions per lesson and 15 in total per day (Tashkent day).
-- Counted on the server, in one atomic step, before the model is called.
create table if not exists public.lesson_help_usage (
  user_id uuid not null references auth.users(id) on delete cascade,
  day date not null,
  lesson_id text not null,
  used integer not null default 0 check (used >= 0),
  primary key (user_id, day, lesson_id)
);
alter table public.lesson_help_usage enable row level security; -- no policies: only the service role reads or writes
revoke all on public.lesson_help_usage from anon, authenticated;

-- Admin switch (separate from the old IELTS essay mentor, `ai_chat_enabled`).
insert into public.app_settings (key, value) values ('ai_lesson_help_enabled', 'true') on conflict (key) do nothing;

create or replace function public.lesson_help_state(_user uuid, _lesson text)
returns jsonb language plpgsql stable security definer set search_path = public as $fn$
declare today date := public.learning_today(); l_used int; d_used int;
begin
  select coalesce(used, 0) into l_used from public.lesson_help_usage where user_id = _user and day = today and lesson_id = _lesson;
  select coalesce(sum(used), 0) into d_used from public.lesson_help_usage where user_id = _user and day = today;
  return jsonb_build_object('lesson_left', greatest(3 - coalesce(l_used, 0), 0), 'day_left', greatest(15 - d_used, 0));
end; $fn$;

create or replace function public.consume_lesson_help(_user uuid, _lesson text)
returns jsonb language plpgsql security definer set search_path = public as $fn$
declare today date := public.learning_today(); l_used int; d_used int;
begin
  if not coalesce((public.learning_access_for(_user)->>'allowed')::boolean, false) then
    return jsonb_build_object('allowed', false, 'reason', 'no_access', 'lesson_left', 0, 'day_left', 0);
  end if;
  perform pg_advisory_xact_lock(hashtextextended(_user::text || today::text, 0));
  select coalesce(used, 0) into l_used from public.lesson_help_usage where user_id = _user and day = today and lesson_id = _lesson;
  select coalesce(sum(used), 0) into d_used from public.lesson_help_usage where user_id = _user and day = today;
  l_used := coalesce(l_used, 0);
  if l_used >= 3 then
    return jsonb_build_object('allowed', false, 'reason', 'lesson_limit', 'lesson_left', 0, 'day_left', greatest(15 - d_used, 0));
  end if;
  if d_used >= 15 then
    return jsonb_build_object('allowed', false, 'reason', 'day_limit', 'lesson_left', greatest(3 - l_used, 0), 'day_left', 0);
  end if;
  insert into public.lesson_help_usage (user_id, day, lesson_id, used) values (_user, today, _lesson, 1)
    on conflict (user_id, day, lesson_id) do update set used = public.lesson_help_usage.used + 1;
  return jsonb_build_object('allowed', true, 'lesson_left', 3 - (l_used + 1), 'day_left', 15 - (d_used + 1));
end; $fn$;

-- Gives the question back when the model call failed.
create or replace function public.refund_lesson_help(_user uuid, _lesson text)
returns void language sql security definer set search_path = public as $fn$
  update public.lesson_help_usage set used = greatest(used - 1, 0)
  where user_id = _user and day = public.learning_today() and lesson_id = _lesson;
$fn$;

revoke all on function public.lesson_help_state(uuid, text), public.consume_lesson_help(uuid, text), public.refund_lesson_help(uuid, text) from public, anon, authenticated;
grant execute on function public.lesson_help_state(uuid, text), public.consume_lesson_help(uuid, text), public.refund_lesson_help(uuid, text) to service_role;
