-- Growth features: referral program, learning goals and the blog.

-- ============================================================
-- Learning goals
-- ============================================================
create table if not exists public.user_goals (
  user_id uuid primary key references auth.users(id) on delete cascade,
  target_band numeric(2,1) not null default 7.0 check (target_band between 4 and 9),
  weekly_essays int not null default 3 check (weekly_essays between 0 and 21),
  weekly_speaking int not null default 2 check (weekly_speaking between 0 and 21),
  exam_date date,
  updated_at timestamptz not null default now()
);
alter table public.user_goals enable row level security;
drop policy if exists user_goals_own on public.user_goals;
create policy user_goals_own on public.user_goals for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ============================================================
-- Referral program
-- ============================================================
create table if not exists public.referral_codes (
  user_id uuid primary key references auth.users(id) on delete cascade,
  code text not null unique,
  created_at timestamptz not null default now()
);

create table if not exists public.referral_cycles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  started_at timestamptz not null default now(),
  ended_at timestamptz,
  go_claimed_at timestamptz,
  plus_granted_at timestamptz,
  reward_expires_at timestamptz
);
create unique index if not exists referral_cycles_one_active on public.referral_cycles(user_id) where ended_at is null;

create table if not exists public.referrals (
  id uuid primary key default gen_random_uuid(),
  referrer_id uuid not null references auth.users(id) on delete cascade,
  referred_id uuid not null unique references auth.users(id) on delete cascade,
  cycle_id uuid not null references public.referral_cycles(id) on delete cascade,
  counted boolean not null,
  created_at timestamptz not null default now()
);
create index if not exists referrals_referrer_idx on public.referrals(referrer_id, created_at desc);

alter table public.referral_codes enable row level security;
alter table public.referral_cycles enable row level security;
alter table public.referrals enable row level security;
drop policy if exists referral_codes_own on public.referral_codes;
create policy referral_codes_own on public.referral_codes for select to authenticated using (user_id = auth.uid());
drop policy if exists referral_cycles_own on public.referral_cycles;
create policy referral_cycles_own on public.referral_cycles for select to authenticated using (user_id = auth.uid());
drop policy if exists referrals_own on public.referrals;
create policy referrals_own on public.referrals for select to authenticated using (referrer_id = auth.uid());

create or replace function public.internal_referral_code(_user uuid)
returns text language plpgsql security definer set search_path=public as $$
declare c text; chars text:='ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; i int;
begin
  select code into c from public.referral_codes where user_id=_user;
  if c is not null then return c; end if;
  loop
    c:=''; for i in 1..8 loop c:=c||substr(chars,1+floor(random()*length(chars))::int,1); end loop;
    begin
      insert into public.referral_codes(user_id,code) values(_user,c);
      return c;
    exception when unique_violation then
      select code into c from public.referral_codes where user_id=_user;
      if c is not null then return c; end if;
    end;
  end loop;
end; $$;

-- Returns the user's active counting window. A window ends when the plan granted by
-- referrals expires, after which the user starts again from zero.
create or replace function public.internal_active_cycle(_user uuid)
returns uuid language plpgsql security definer set search_path=public as $$
declare cid uuid;
begin
  update public.referral_cycles set ended_at=now()
    where user_id=_user and ended_at is null and reward_expires_at is not null and reward_expires_at<now();
  select id into cid from public.referral_cycles where user_id=_user and ended_at is null;
  if cid is null then
    insert into public.referral_cycles(user_id) values(_user) returning id into cid;
  end if;
  return cid;
end; $$;

-- Grants Go/Plus for a number of days without any admin check (internal use only).
create or replace function public.internal_grant_plan(_user uuid,_plan text,_days int)
returns timestamptz language plpgsql security definer set search_path=public as $$
declare p record; cur public.subscriptions%rowtype; active boolean; s_end timestamptz;
begin
  if _plan not in ('go','plus') then raise exception 'Unsupported plan'; end if;
  select * into p from public.subscription_plans where slug=_plan and is_active=true;
  if not found then raise exception 'Plan not found'; end if;
  select * into cur from public.subscriptions where user_id=_user for update;
  active := found and cur.plan_type in ('go','plus') and cur.expires_at is not null and cur.expires_at>now();
  if active and (cur.plan_type=_plan or cur.plan_type='plus') then
    s_end := cur.expires_at + make_interval(days=>_days);
    update public.subscriptions set expires_at=s_end where user_id=_user;
    update public.subscription_history set expires_at=s_end where user_id=_user and ended_at is null;
    return s_end;
  end if;
  s_end := now() + make_interval(days=>_days);
  update public.subscription_history set ended_at=now() where user_id=_user and ended_at is null;
  insert into public.subscriptions(user_id,plan_type,plan_name,writing_limit,writing_used,speaking_limit,speaking_used,
    mock_test_limit,mock_test_used,credits_limit,credits_used,started_at,expires_at,is_active)
  values(_user,p.slug,p.name,p.writing_limit,0,p.speaking_limit,0,p.mock_test_limit,0,0,0,now(),s_end,true)
  on conflict(user_id) do update set plan_type=excluded.plan_type,plan_name=excluded.plan_name,
    writing_limit=excluded.writing_limit,writing_used=0,speaking_limit=excluded.speaking_limit,speaking_used=0,
    mock_test_limit=excluded.mock_test_limit,mock_test_used=0,started_at=excluded.started_at,
    expires_at=excluded.expires_at,is_active=true;
  insert into public.subscription_history(user_id,plan_type,plan_name,price_uzs,writing_limit,speaking_limit,mock_test_limit,started_at,expires_at)
  values(_user,p.slug,p.name,'0',p.writing_limit,p.speaking_limit,p.mock_test_limit,now(),s_end);
  return s_end;
end; $$;

-- Called by a new user right after Google sign-in when they arrived through a referral link.
create or replace function public.claim_referral(_code text)
returns jsonb language plpgsql security definer set search_path=public,auth as $$
declare me uuid:=auth.uid(); ref uuid; created timestamptz; cid uuid; n int; is_counted boolean; c public.referral_cycles%rowtype; exp timestamptz;
begin
  if me is null then return jsonb_build_object('ok',false,'reason','not_signed_in'); end if;
  select user_id into ref from public.referral_codes where code=upper(trim(_code));
  if ref is null then return jsonb_build_object('ok',false,'reason','invalid_code'); end if;
  if ref=me then return jsonb_build_object('ok',false,'reason','self'); end if;
  select created_at into created from auth.users where id=me;
  if created is null or created < now()-interval '24 hours' then return jsonb_build_object('ok',false,'reason','not_new'); end if;
  if exists(select 1 from public.referrals where referred_id=me) then return jsonb_build_object('ok',false,'reason','already_claimed'); end if;

  cid := public.internal_active_cycle(ref);
  select count(*) into n from public.referrals where cycle_id=cid and counted;
  is_counted := n < 20;
  insert into public.referrals(referrer_id,referred_id,cycle_id,counted) values(ref,me,cid,is_counted);

  if is_counted and n+1 >= 20 then
    select * into c from public.referral_cycles where id=cid for update;
    if c.plus_granted_at is null then
      exp := public.internal_grant_plan(ref,'plus',30);
      update public.referral_cycles set plus_granted_at=now(), reward_expires_at=exp where id=cid;
    end if;
  end if;
  return jsonb_build_object('ok',true,'counted',is_counted);
end; $$;

-- Manual activation of the 10-friends reward (1 month of Scorify Go).
create or replace function public.claim_referral_reward()
returns jsonb language plpgsql security definer set search_path=public as $$
declare me uuid:=auth.uid(); cid uuid; n int; c public.referral_cycles%rowtype; exp timestamptz;
begin
  if me is null then raise exception 'Not signed in'; end if;
  cid := public.internal_active_cycle(me);
  select * into c from public.referral_cycles where id=cid for update;
  select count(*) into n from public.referrals where cycle_id=cid and counted;
  if n < 10 then raise exception 'Invite 10 friends first'; end if;
  if c.go_claimed_at is not null or c.plus_granted_at is not null then raise exception 'Reward already activated for this period'; end if;
  exp := public.internal_grant_plan(me,'go',30);
  update public.referral_cycles set go_claimed_at=now(), reward_expires_at=exp where id=cid;
  return jsonb_build_object('plan','go','expires_at',exp);
end; $$;

create or replace function public.my_referral()
returns jsonb language plpgsql security definer set search_path=public as $$
declare me uuid:=auth.uid(); code text; cid uuid; c public.referral_cycles%rowtype; n int; total int; history jsonb; cycles jsonb;
begin
  if me is null then raise exception 'Not signed in'; end if;
  code := public.internal_referral_code(me);
  cid := public.internal_active_cycle(me);
  select * into c from public.referral_cycles where id=cid;
  select count(*) into n from public.referrals where cycle_id=cid and counted;
  select count(*) into total from public.referrals where referrer_id=me;
  select coalesce(jsonb_agg(x order by x.created_at desc),'[]'::jsonb) into history from (
    select r.created_at, r.counted, r.cycle_id=cid as current_cycle,
      coalesce(nullif(split_part(coalesce(p.full_name,''),' ',1),'') || case when position(' ' in coalesce(p.full_name,''))>0
        then ' ' || upper(left(split_part(p.full_name,' ',2),1)) || '.' else '' end,
        left(split_part(coalesce(p.email,'user'),'@',1),2) || '***') as name
    from public.referrals r left join public.profiles p on p.user_id=r.referred_id
    where r.referrer_id=me order by r.created_at desc limit 200) x;
  select coalesce(jsonb_agg(y order by y.started_at desc),'[]'::jsonb) into cycles from (
    select cy.started_at, cy.ended_at, cy.go_claimed_at, cy.plus_granted_at, cy.reward_expires_at,
      (select count(*) from public.referrals r where r.cycle_id=cy.id and r.counted) as counted
    from public.referral_cycles cy where cy.user_id=me and cy.id<>cid order by cy.started_at desc limit 24) y;
  return jsonb_build_object(
    'code',code,'counted',n,'total_invited',total,
    'cycle_started_at',c.started_at,'go_claimed_at',c.go_claimed_at,'plus_granted_at',c.plus_granted_at,
    'reward_expires_at',c.reward_expires_at,
    'can_claim_go', (n>=10 and c.go_claimed_at is null and c.plus_granted_at is null),
    'history',history,'past_cycles',cycles);
end; $$;

revoke all on function public.internal_referral_code(uuid) from public,anon,authenticated;
revoke all on function public.internal_active_cycle(uuid) from public,anon,authenticated;
revoke all on function public.internal_grant_plan(uuid,text,int) from public,anon,authenticated;
revoke all on function public.claim_referral(text) from public,anon;
revoke all on function public.claim_referral_reward() from public,anon;
revoke all on function public.my_referral() from public,anon;
grant execute on function public.claim_referral(text) to authenticated;
grant execute on function public.claim_referral_reward() to authenticated;
grant execute on function public.my_referral() to authenticated;

-- ============================================================
-- Blog
-- ============================================================
create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  lang text not null default 'en' check (lang in ('en','uz')),
  title text not null,
  excerpt text,
  content_html text not null default '',
  cover_image_url text,
  cover_alt text,
  tags text[] not null default '{}',
  seo_title text,
  seo_description text,
  alt_slug text,
  status text not null default 'draft' check (status in ('draft','published')),
  published_at timestamptz,
  author_name text not null default 'Scorify Team',
  reading_minutes int,
  created_by uuid default auth.uid(),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists blog_posts_published_idx on public.blog_posts(status, published_at desc);

create or replace function public.blog_touch_updated_at() returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  if new.status='published' and new.published_at is null then new.published_at := now(); end if;
  return new;
end; $$;
drop trigger if exists blog_posts_touch on public.blog_posts;
create trigger blog_posts_touch before insert or update on public.blog_posts for each row execute function public.blog_touch_updated_at();

alter table public.blog_posts enable row level security;
drop policy if exists blog_posts_public_read on public.blog_posts;
create policy blog_posts_public_read on public.blog_posts for select to anon, authenticated
  using (status='published' and published_at <= now());
drop policy if exists blog_posts_admin_all on public.blog_posts;
create policy blog_posts_admin_all on public.blog_posts for all to authenticated
  using (public.has_role(auth.uid(),'admin'::app_role)) with check (public.has_role(auth.uid(),'admin'::app_role));

create table if not exists public.blog_views (
  post_id uuid not null references public.blog_posts(id) on delete cascade,
  day date not null default current_date,
  visitor text not null,
  hits int not null default 1,
  primary key (post_id, day, visitor)
);
alter table public.blog_views enable row level security;

create or replace function public.track_blog_view(_slug text,_visitor text)
returns void language plpgsql security definer set search_path=public as $$
declare pid uuid;
begin
  if _visitor is null or length(_visitor) not between 8 and 64 then return; end if;
  select id into pid from public.blog_posts where slug=_slug and status='published' and published_at<=now();
  if pid is null then return; end if;
  insert into public.blog_views(post_id,day,visitor) values(pid,current_date,_visitor)
  on conflict (post_id,day,visitor) do update set hits=public.blog_views.hits+1;
end; $$;
revoke all on function public.track_blog_view(text,text) from public;
grant execute on function public.track_blog_view(text,text) to anon, authenticated;

create or replace function public.admin_blog_stats()
returns table(post_id uuid, views bigint, unique_visitors bigint, views_7d bigint, views_30d bigint)
language plpgsql security definer set search_path=public as $$
begin
  if not public.has_role(auth.uid(),'admin'::app_role) then raise exception 'Admins only'; end if;
  return query
  select v.post_id, sum(v.hits)::bigint, count(distinct v.visitor)::bigint,
    coalesce(sum(v.hits) filter (where v.day >= current_date-6),0)::bigint,
    coalesce(sum(v.hits) filter (where v.day >= current_date-29),0)::bigint
  from public.blog_views v group by v.post_id;
end; $$;
revoke all on function public.admin_blog_stats() from public, anon;
grant execute on function public.admin_blog_stats() to authenticated;

create or replace function public.admin_blog_daily(_post uuid default null,_days int default 30)
returns table(day date, views bigint, visitors bigint)
language plpgsql security definer set search_path=public as $$
begin
  if not public.has_role(auth.uid(),'admin'::app_role) then raise exception 'Admins only'; end if;
  return query
  select g.d::date, coalesce(sum(v.hits),0)::bigint, count(distinct v.visitor)::bigint
  from generate_series(current_date-(greatest(_days,1)-1), current_date, interval '1 day') g(d)
  left join public.blog_views v on v.day=g.d::date and (_post is null or v.post_id=_post)
  group by g.d order by g.d;
end; $$;
revoke all on function public.admin_blog_daily(uuid,int) from public, anon;
grant execute on function public.admin_blog_daily(uuid,int) to authenticated;

-- Public image bucket; only admins may upload or change files.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('blog-images','blog-images',true,5242880,array['image/jpeg','image/png','image/webp','image/gif','image/avif'])
on conflict (id) do update set public=true, file_size_limit=5242880,
  allowed_mime_types=array['image/jpeg','image/png','image/webp','image/gif','image/avif'];

drop policy if exists blog_images_admin_insert on storage.objects;
create policy blog_images_admin_insert on storage.objects for insert to authenticated
  with check (bucket_id='blog-images' and public.has_role(auth.uid(),'admin'::app_role));
drop policy if exists blog_images_admin_update on storage.objects;
create policy blog_images_admin_update on storage.objects for update to authenticated
  using (bucket_id='blog-images' and public.has_role(auth.uid(),'admin'::app_role));
drop policy if exists blog_images_admin_delete on storage.objects;
create policy blog_images_admin_delete on storage.objects for delete to authenticated
  using (bucket_id='blog-images' and public.has_role(auth.uid(),'admin'::app_role));
drop policy if exists blog_images_public_read on storage.objects;
create policy blog_images_public_read on storage.objects for select to anon, authenticated
  using (bucket_id='blog-images');
