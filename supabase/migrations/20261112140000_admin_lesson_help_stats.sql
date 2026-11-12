-- Admin statistics of the in-lesson AI tutor, from the AI usage log (feature = 'lesson_help') and the daily counters.
-- Days are Tashkent days, like the rest of the learning statistics.
create or replace function public.admin_lesson_help_stats()
returns jsonb language plpgsql stable security definer set search_path = public as $fn$
declare today date := public.learning_today(); result jsonb;
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'Only admins'; end if;
  with e as (
    select user_id, (created_at at time zone 'Asia/Tashkent')::date d, input_tokens i, output_tokens o, cost_usd c, metadata->>'lesson' lesson
    from public.ai_usage_events
    where feature = 'lesson_help' and created_at > now() - interval '32 days'
  ),
  agg as (
    select p.name,
           count(distinct e.user_id) users, count(e.user_id) questions,
           coalesce(sum(e.i), 0) input_tokens, coalesce(sum(e.o), 0) output_tokens, coalesce(sum(e.c), 0) cost_usd
    from (values ('today', today, today), ('yesterday', today - 1, today - 1), ('d7', today - 6, today), ('d30', today - 29, today)) as p(name, a, b)
    left join e on e.d between p.a and p.b
    group by p.name
  )
  select jsonb_build_object(
    'periods', (select jsonb_object_agg(name, jsonb_build_object('users', users, 'questions', questions, 'input_tokens', input_tokens,
                'output_tokens', output_tokens, 'tokens', input_tokens + output_tokens, 'cost_usd', round(cost_usd::numeric, 4))) from agg),
    'daily', coalesce((select jsonb_agg(jsonb_build_object('day', g.d, 'users', coalesce(x.users, 0), 'questions', coalesce(x.questions, 0), 'tokens', coalesce(x.tokens, 0)) order by g.d)
                       from generate_series(today - 13, today, interval '1 day') as g(d)
                       left join (select d, count(distinct user_id) users, count(*) questions, sum(i + o) tokens from e group by d) x on x.d = g.d::date), '[]'::jsonb),
    'top_lessons', coalesce((select jsonb_agg(t) from (select lesson, count(*) questions, count(distinct user_id) users from e
                              where d > today - 30 and lesson is not null group by lesson order by count(*) desc limit 8) t), '[]'::jsonb),
    'limits_today', jsonb_build_object(
      'lesson_limit_users', (select count(distinct user_id) from public.lesson_help_usage where day = today and used >= 3),
      'day_limit_users', (select count(*) from (select user_id from public.lesson_help_usage where day = today group by user_id having sum(used) >= 15) s))
  ) into result;
  return result;
end; $fn$;
revoke all on function public.admin_lesson_help_stats() from public, anon;
grant execute on function public.admin_lesson_help_stats() to authenticated;
