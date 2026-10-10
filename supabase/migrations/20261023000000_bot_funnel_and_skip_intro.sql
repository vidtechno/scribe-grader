-- 1) Bot admin statistics: who joined, who started learning, who studied today.
-- 2) "Not started yet" broadcast audience (at most one such message per person per week).
-- 3) Skipping the first four Beginner lessons.

create or replace function public.telegram_admin_funnel()
returns jsonb language plpgsql volatile security definer set search_path=public as $$
declare
  today date := public.learning_today();
  day_start timestamptz := today::timestamp at time zone 'Asia/Tashkent';
begin
  return (
    with bot as (
      select t.telegram_id, t.user_id, t.created_at, t.is_blocked,
        exists(select 1 from public.learning_profiles lp where lp.user_id = t.user_id) as started
      from public.telegram_accounts t
    ), studied as (
      select b.telegram_id,
        exists(select 1 from public.learning_daily_activity a where a.user_id = b.user_id and a.day = today and a.xp > 0) as xp_today,
        (exists(select 1 from public.learning_lesson_progress p where p.user_id = b.user_id and p.attempts > 0 and p.completed_at >= day_start)
         or exists(select 1 from public.learning_drill_progress d where d.user_id = b.user_id and d.completed_at >= day_start)) as finished_today
      from bot b where b.user_id is not null
    )
    select jsonb_build_object(
      'total', (select count(*) from bot),
      'today', (select count(*) from bot where (created_at at time zone 'Asia/Tashkent')::date = today),
      'd7', (select count(*) from bot where created_at >= now() - interval '7 days'),
      'd30', (select count(*) from bot where created_at >= now() - interval '30 days'),
      'blocked', (select count(*) from bot where is_blocked),
      'linked', (select count(*) from bot where user_id is not null),
      'started', (select count(*) from bot where started),
      'not_started', (select count(*) from bot where not started),
      'xp_today', (select count(*) from studied where xp_today),
      'finished_today', (select count(*) from studied where finished_today)
    )
  );
end; $$;
revoke all on function public.telegram_admin_funnel() from public, anon, authenticated;
grant execute on function public.telegram_admin_funnel() to service_role;

alter table public.telegram_broadcasts drop constraint if exists telegram_broadcasts_audience_check;
alter table public.telegram_broadcasts add constraint telegram_broadcasts_audience_check
  check (audience in ('all','linked','unlinked','free','paid','notstarted'));

create or replace function public.telegram_audience_count(_audience text)
returns int language sql stable security definer set search_path=public as $$
  select count(*)::int from public.telegram_accounts t
  left join public.subscriptions s on s.user_id=t.user_id
  where not t.is_blocked and not t.is_banned and t.notify_news
    and case _audience
      when 'all' then true
      when 'linked' then t.user_id is not null
      when 'unlinked' then t.user_id is null
      when 'free' then t.user_id is not null and coalesce(s.plan_type,'free')='free'
      when 'paid' then t.user_id is not null and s.plan_type in ('go','plus') and coalesce(s.expires_at,'infinity'::timestamptz)>now()
      when 'notstarted' then (t.user_id is null or not exists(select 1 from public.learning_profiles lp where lp.user_id = t.user_id))
        and not exists(select 1 from public.telegram_outbox o join public.telegram_broadcasts b on b.id = o.broadcast_id
                       where o.telegram_id = t.telegram_id and b.audience = 'notstarted' and o.created_at > now() - interval '7 days')
      else false end;
$$;

create or replace function public.telegram_enqueue_broadcast(_id uuid)
returns int language plpgsql security definer set search_path=public as $$
declare b public.telegram_broadcasts%rowtype; n int;
begin
  select * into b from public.telegram_broadcasts where id=_id for update;
  if not found or b.status<>'queued' or b.total>0 then return 0; end if;
  insert into public.telegram_outbox(telegram_id,user_id,kind,payload,broadcast_id)
  select t.telegram_id,t.user_id,'broadcast',jsonb_build_object('kind',b.kind,'audience',b.audience)||b.payload,b.id
  from public.telegram_accounts t
  left join public.subscriptions s on s.user_id=t.user_id
  where not t.is_blocked and not t.is_banned and t.notify_news
    and case b.audience
      when 'all' then true
      when 'linked' then t.user_id is not null
      when 'unlinked' then t.user_id is null
      when 'free' then t.user_id is not null and coalesce(s.plan_type,'free')='free'
      when 'paid' then t.user_id is not null and s.plan_type in ('go','plus') and coalesce(s.expires_at,'infinity'::timestamptz)>now()
      when 'notstarted' then (t.user_id is null or not exists(select 1 from public.learning_profiles lp where lp.user_id = t.user_id))
        and not exists(select 1 from public.telegram_outbox o join public.telegram_broadcasts ob on ob.id = o.broadcast_id
                       where o.telegram_id = t.telegram_id and ob.audience = 'notstarted' and ob.id <> b.id and o.created_at > now() - interval '7 days')
      else false end;
  get diagnostics n = row_count;
  update public.telegram_broadcasts set total=n, status=case when n=0 then 'done' else 'queued' end,
    finished_at=case when n=0 then now() else null end where id=_id;
  return n;
end; $$;

-- Skipping the first four Beginner lessons (alphabet, sounds, greetings…): they count as done so the path continues,
-- but no XP is given and they are not counted as studied (attempts stay 0).
create or replace function public.learning_skip_intro()
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); n int;
begin
  perform public.learning_require_access(uid);
  insert into public.learning_lesson_progress(user_id, lesson_id, best_score, total, stars, attempts, completed_at, updated_at)
  select uid, l, 0, 0, 0, 0, now(), now() from unnest(array['u1-l1','u1-l2','u1-l3','u1-l4']) as l
  on conflict (user_id, lesson_id) do update set completed_at = coalesce(public.learning_lesson_progress.completed_at, excluded.completed_at), updated_at = now();
  get diagnostics n = row_count;
  return jsonb_build_object('skipped', n);
end; $$;
revoke all on function public.learning_skip_intro() from public, anon;
grant execute on function public.learning_skip_intro() to authenticated, service_role;
