-- Telegram bot: daily grammar test reminders (spread over 18:00–20:00 Tashkent) and new blog post
-- announcements. The practice reminder in telegram_daily_jobs is replaced by the daily test reminder.

-- ============================================================
-- Daily grammar test reminder
-- ============================================================
-- Queues one reminder per bot user who has not finished today's grammar test. Messages are spread
-- evenly across the next two hours so they arrive one by one, not all at once.
create or replace function public.telegram_enqueue_daily_test_reminders(_window_minutes int default 120)
returns int language plpgsql security definer set search_path=public as $$
declare today date := (now() at time zone 'Asia/Tashkent')::date; n int;
begin
  with eligible as (
    select t.telegram_id, t.user_id
    from public.telegram_accounts t
    where not t.is_blocked and not t.is_banned and t.notify_reminders
      and (t.user_id is null or not exists(
        select 1 from public.grammar_tests g
        where g.user_id=t.user_id and g.test_date=today and g.completed_at is not null))
      and not exists(
        select 1 from public.telegram_outbox o
        where o.telegram_id=t.telegram_id and o.kind='daily_test_reminder'
          and o.created_at >= (today::timestamp at time zone 'Asia/Tashkent'))
  ), ordered as (
    select e.*, row_number() over (order by random()) as rn, count(*) over () as total from eligible e
  )
  insert into public.telegram_outbox(telegram_id,user_id,kind,payload,send_after)
  select o.telegram_id, o.user_id, 'daily_test_reminder', jsonb_build_object('date',today),
    now() + make_interval(secs => ((o.rn-1) * _window_minutes * 60.0 / greatest(o.total,1))::double precision)
  from ordered o;
  get diagnostics n = row_count;
  if n > 0 then perform public.telegram_kick(); end if;
  return n;
end; $$;

-- Plan expiry and the Sunday weekly report stay here; practice reminders moved to the daily test reminder.
create or replace function public.telegram_daily_jobs()
returns jsonb language plpgsql security definer set search_path=public as $$
declare n_exp int:=0; n_week int:=0; r record;
begin
  for r in
    select s.user_id, case when s.expires_at < now()+interval '1 day' then 1 else 3 end as days, s.plan_type, s.expires_at
    from public.subscriptions s
    where s.plan_type<>'free' and s.expires_at is not null
      and ((s.expires_at >= now()+interval '2 days' and s.expires_at < now()+interval '3 days')
        or (s.expires_at >= now() and s.expires_at < now()+interval '1 day'))
  loop
    if public.telegram_enqueue_for_user(r.user_id,'plan_expiring',
         jsonb_build_object('days',r.days,'plan',r.plan_type,'expires_at',r.expires_at),'reminders') then
      n_exp := n_exp+1;
    end if;
  end loop;

  if extract(isodow from (now() at time zone 'Asia/Tashkent')) = 7 then
    for r in
      select t.user_id from public.telegram_accounts t
      where t.user_id is not null and t.notify_reminders and not t.is_blocked and not t.is_banned
        and (exists(select 1 from public.essays where user_id=t.user_id and status='completed' and created_at>now()-interval '7 days')
          or exists(select 1 from public.speaking_attempts where user_id=t.user_id and status='completed' and created_at>now()-interval '7 days'))
    loop
      if public.telegram_enqueue_for_user(r.user_id,'weekly_report','{}'::jsonb,'reminders') then n_week := n_week+1; end if;
    end loop;
  end if;

  if n_exp+n_week > 0 then perform public.telegram_kick(); end if;
  return jsonb_build_object('plan_expiring',n_exp,'weekly_report',n_week);
end; $$;

-- ============================================================
-- New blog posts
-- ============================================================
create table if not exists public.telegram_blog_announcements (
  post_id uuid primary key references public.blog_posts(id) on delete cascade,
  recipients int not null default 0,
  announced_at timestamptz not null default now()
);
alter table public.telegram_blog_announcements enable row level security;
revoke all on public.telegram_blog_announcements from anon, authenticated;
grant all on public.telegram_blog_announcements to service_role;

-- Posts that were already published before the bot existed are not announced.
insert into public.telegram_blog_announcements(post_id, recipients)
select id, 0 from public.blog_posts where status='published'
on conflict (post_id) do nothing;

-- Sends a published post to every bot user who keeps news notifications on (once per post).
create or replace function public.telegram_announce_blog_post(_post uuid)
returns int language plpgsql security definer set search_path=public as $$
declare p public.blog_posts%rowtype; n int;
begin
  select * into p from public.blog_posts where id=_post;
  if not found or p.status<>'published' or p.published_at is null or p.published_at > now()
     or p.published_at < now()-interval '3 days' then return 0; end if;
  insert into public.telegram_blog_announcements(post_id) values(_post) on conflict (post_id) do nothing;
  if not found then return 0; end if;
  insert into public.telegram_outbox(telegram_id,user_id,kind,payload)
  select t.telegram_id, t.user_id, 'blog_post', jsonb_build_object('post_id',_post)
  from public.telegram_accounts t
  where not t.is_blocked and not t.is_banned and t.notify_news;
  get diagnostics n = row_count;
  update public.telegram_blog_announcements set recipients=n where post_id=_post;
  if n > 0 then perform public.telegram_kick(); end if;
  return n;
end; $$;

-- Scheduled posts become visible later, so a cron job announces them once they are due.
create or replace function public.telegram_announce_due_blog_posts()
returns int language plpgsql security definer set search_path=public as $$
declare r record; total int := 0;
begin
  for r in
    select b.id from public.blog_posts b
    where b.status='published' and b.published_at <= now() and b.published_at > now()-interval '3 days'
      and not exists(select 1 from public.telegram_blog_announcements a where a.post_id=b.id)
    order by b.published_at
  loop
    total := total + public.telegram_announce_blog_post(r.id);
  end loop;
  return total;
end; $$;

create or replace function public.telegram_on_blog_publish()
returns trigger language plpgsql security definer set search_path=public as $$
begin
  if new.status='published' and new.published_at is not null and new.published_at <= now() then
    perform public.telegram_announce_blog_post(new.id);
  end if;
  return new;
exception when others then
  -- Publishing a post must never fail because of the bot.
  raise warning 'telegram_on_blog_publish: %', sqlerrm;
  return new;
end; $$;
create or replace trigger telegram_blog_publish after insert or update of status, published_at on public.blog_posts
  for each row execute function public.telegram_on_blog_publish();

do $$
declare f text;
begin
  foreach f in array array[
    'public.telegram_enqueue_daily_test_reminders(int)',
    'public.telegram_daily_jobs()',
    'public.telegram_announce_blog_post(uuid)',
    'public.telegram_announce_due_blog_posts()',
    'public.telegram_on_blog_publish()'
  ] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    if f not like '%telegram_on_%' then execute format('grant execute on function %s to service_role', f); end if;
  end loop;
end $$;

do $$ begin
  if exists(select 1 from pg_extension where extname='pg_cron') then
    -- 13:00 UTC = 18:00 in Tashkent; reminders are spread until 20:00.
    perform cron.schedule('telegram-daily-test', '0 13 * * *', 'select public.telegram_enqueue_daily_test_reminders(120)');
    perform cron.schedule('telegram-blog-posts', '*/10 * * * *', 'select public.telegram_announce_due_blog_posts()');
  end if;
exception when others then raise notice 'cron scheduling skipped: %', sqlerrm; end $$;
