-- Admin web-panel broadcasts: three new Telegram audiences (trial ending, inactive 3+ days, paid ending)
-- plus admin-only RPCs to count, send and review broadcasts.

alter table public.telegram_broadcasts drop constraint if exists telegram_broadcasts_audience_check;
alter table public.telegram_broadcasts add constraint telegram_broadcasts_audience_check
  check (audience = any (array['all','linked','unlinked','free','paid','notstarted','trial_ending','inactive_3d','paid_ending']));

-- One place that defines the three segments, shared by the count and the enqueue functions.
create or replace function public.telegram_segment_match(_audience text, _user_id uuid)
returns boolean language sql stable security definer set search_path to 'public' as $$
  select _user_id is not null and case _audience
    -- free trial still running and ending within 2 days (no active paid plan)
    when 'trial_ending' then exists(
      select 1 from public.subscriptions s where s.user_id=_user_id
        and not (s.plan_type in ('go','plus') and coalesce(s.expires_at,'infinity'::timestamptz)>now())
        and s.learn_trial_ends_at > now() and s.learn_trial_ends_at <= now()+interval '2 days')
    -- latest activity (site heartbeat or sign-in) older than 3 days
    when 'inactive_3d' then coalesce(greatest(
        (select p.last_seen_at from public.user_presence p where p.user_id=_user_id),
        (select u.last_sign_in_at from auth.users u where u.id=_user_id)), '-infinity'::timestamptz) < now()-interval '3 days'
    -- paid plan expiring within 3 days
    when 'paid_ending' then exists(
      select 1 from public.subscriptions s where s.user_id=_user_id
        and s.plan_type in ('go','plus') and s.expires_at > now() and s.expires_at <= now()+interval '3 days')
    else false end;
$$;
revoke all on function public.telegram_segment_match(text, uuid) from public, anon, authenticated;

create or replace function public.telegram_enqueue_broadcast(_id uuid)
 returns integer language plpgsql security definer set search_path to 'public' as $function$
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
      when 'trial_ending' then public.telegram_segment_match('trial_ending', t.user_id)
      when 'inactive_3d' then public.telegram_segment_match('inactive_3d', t.user_id)
      when 'paid_ending' then public.telegram_segment_match('paid_ending', t.user_id)
      else false end;
  get diagnostics n = row_count;
  update public.telegram_broadcasts set total=n, status=case when n=0 then 'done' else 'queued' end,
    finished_at=case when n=0 then now() else null end where id=_id;
  return n;
end; $function$;

create or replace function public.telegram_audience_count(_audience text)
 returns integer language sql stable security definer set search_path to 'public' as $function$
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
      when 'trial_ending' then public.telegram_segment_match('trial_ending', t.user_id)
      when 'inactive_3d' then public.telegram_segment_match('inactive_3d', t.user_id)
      when 'paid_ending' then public.telegram_segment_match('paid_ending', t.user_id)
      else false end;
$function$;

-- Reachable Telegram recipients per segment (same filters as the enqueue).
create or replace function public.admin_broadcast_counts()
returns jsonb language plpgsql stable security definer set search_path to 'public' as $$
begin
  if not public.has_role(auth.uid(),'admin'::app_role) then raise exception 'Only admins'; end if;
  return jsonb_build_object(
    'trial_ending', public.telegram_audience_count('trial_ending'),
    'inactive_3d',  public.telegram_audience_count('inactive_3d'),
    'paid_ending',  public.telegram_audience_count('paid_ending'),
    'all_linked',   public.telegram_audience_count('linked'));
end; $$;

-- Queue a text broadcast. The bot sends text as HTML, so user text is escaped here.
create or replace function public.admin_broadcast_send(_audience text, _text text)
returns jsonb language plpgsql security definer set search_path to 'public' as $$
declare v_id uuid; v_total int; v_text text := btrim(coalesce(_text,''));
begin
  if not public.has_role(auth.uid(),'admin'::app_role) then raise exception 'Only admins'; end if;
  if _audience is null or _audience not in ('trial_ending','inactive_3d','paid_ending','all') then raise exception 'Invalid audience'; end if;
  if char_length(v_text) < 1 or char_length(v_text) > 1500 then raise exception 'Text must be 1..1500 characters'; end if;
  if exists(select 1 from public.telegram_broadcasts where audience=_audience and created_by=0 and created_at > now()-interval '10 minutes') then
    raise exception 'Bu auditoriyaga yaqinda yuborilgan. 10 daqiqadan keyin urinib ko''ring';
  end if;
  v_text := replace(replace(replace(v_text,'&','&amp;'),'<','&lt;'),'>','&gt;');
  insert into public.telegram_broadcasts(created_by,audience,kind,payload)
  values (0,_audience,'text',jsonb_build_object('text',v_text)) returning id into v_id;
  v_total := public.telegram_enqueue_broadcast(v_id);
  perform public.telegram_kick();
  return jsonb_build_object('id',v_id,'total',v_total);
end; $$;

create or replace function public.admin_broadcast_history()
returns table(id uuid, audience text, created_at timestamptz, total int, sent int, failed int, pending int)
language plpgsql stable security definer set search_path to 'public' as $$
begin
  if not public.has_role(auth.uid(),'admin'::app_role) then raise exception 'Only admins'; end if;
  return query
    select b.id, b.audience, b.created_at, b.total,
      (select count(*)::int from public.telegram_outbox o where o.broadcast_id=b.id and o.status='sent'),
      (select count(*)::int from public.telegram_outbox o where o.broadcast_id=b.id and o.status='failed'),
      (select count(*)::int from public.telegram_outbox o where o.broadcast_id=b.id and o.status in ('pending','sending'))
    from public.telegram_broadcasts b order by b.created_at desc limit 30;
end; $$;

revoke all on function public.admin_broadcast_counts() from public, anon;
revoke all on function public.admin_broadcast_send(text, text) from public, anon;
revoke all on function public.admin_broadcast_history() from public, anon;
grant execute on function public.admin_broadcast_counts() to authenticated;
grant execute on function public.admin_broadcast_send(text, text) to authenticated;
grant execute on function public.admin_broadcast_history() to authenticated;
