-- Remove Teacher Mode completely. Scorify focuses on personal IELTS Writing and Speaking.
-- Subscription functions are redefined first so nothing depends on teacher objects when they are dropped.

create or replace function public.enforce_subscription_expiry(_user_id uuid)
returns void language plpgsql security definer set search_path=public as $$
declare f record;
begin
  select * into f from public.subscription_plans where slug='free';
  update public.subscription_history set ended_at=now()
    where user_id=_user_id and ended_at is null and expires_at is not null and expires_at<now();
  update public.subscriptions set plan_type='free',plan_name='Free',
    writing_limit=f.writing_limit,writing_used=0,speaking_limit=f.speaking_limit,speaking_used=0,
    mock_test_limit=f.mock_test_limit,mock_test_used=0,expires_at=null,started_at=now(),is_active=true
  where user_id=_user_id and plan_type<>'free' and expires_at is not null and expires_at<now();
end; $$;

create or replace function public.admin_set_subscription(
  _user_id uuid,_plan_slug text,_starts_at timestamptz default null,_expires_at timestamptz default null)
returns jsonb language plpgsql security definer set search_path=public as $$
declare p record; old public.subscriptions%rowtype; s_start timestamptz; s_end timestamptz;
  preserve_usage boolean:=false;
begin
  if not public.has_role(auth.uid(),'admin'::app_role) then raise exception 'Only admins can change subscriptions'; end if;
  if _plan_slug not in ('free','go','plus') then raise exception 'Unsupported plan: %',_plan_slug; end if;
  select * into p from public.subscription_plans where slug=_plan_slug and is_active=true;
  if not found then raise exception 'Plan not found: %',_plan_slug; end if;
  select * into old from public.subscriptions where user_id=_user_id for update;
  preserve_usage:=old.plan_type in ('go','plus') and _plan_slug in ('go','plus')
    and old.plan_type<>_plan_slug and old.expires_at>now();
  s_start:=case when preserve_usage then old.started_at else coalesce(_starts_at,now()) end;
  s_end:=case when _plan_slug='free' then null when preserve_usage then old.expires_at
    else coalesce(_expires_at,s_start+interval '30 days') end;
  update public.subscription_history set ended_at=now() where user_id=_user_id and ended_at is null;
  insert into public.subscriptions(user_id,plan_type,plan_name,writing_limit,writing_used,speaking_limit,speaking_used,
    mock_test_limit,mock_test_used,credits_limit,credits_used,started_at,expires_at,is_active)
  values(_user_id,p.slug,p.name,p.writing_limit,case when preserve_usage then old.writing_used else 0 end,
    p.speaking_limit,case when preserve_usage then old.speaking_used else 0 end,
    p.mock_test_limit,case when preserve_usage then old.mock_test_used else 0 end,
    0,0,s_start,s_end,true)
  on conflict(user_id) do update set plan_type=excluded.plan_type,plan_name=excluded.plan_name,
    writing_limit=excluded.writing_limit,writing_used=excluded.writing_used,
    speaking_limit=excluded.speaking_limit,speaking_used=excluded.speaking_used,
    mock_test_limit=excluded.mock_test_limit,mock_test_used=excluded.mock_test_used,
    started_at=excluded.started_at,expires_at=excluded.expires_at,is_active=true;
  insert into public.subscription_history(user_id,plan_type,plan_name,price_uzs,writing_limit,speaking_limit,mock_test_limit,started_at,expires_at)
  values(_user_id,p.slug,p.name,p.price_uzs,p.writing_limit,p.speaking_limit,p.mock_test_limit,s_start,s_end);
  return jsonb_build_object('plan',p.slug,'started_at',s_start,'expires_at',s_end,'usage_preserved',preserve_usage);
end; $$;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path=public as $$
declare f record;
begin
  select * into f from public.subscription_plans where slug='free';
  insert into public.profiles(user_id,email,full_name,credits,public_id)
    values(new.id,new.email,new.raw_user_meta_data->>'full_name',0,public.generate_public_id());
  insert into public.user_roles(user_id,role) values(new.id,'user');
  insert into public.subscriptions(user_id,plan_type,plan_name,writing_limit,writing_used,speaking_limit,speaking_used,
    mock_test_limit,mock_test_used,credits_limit,credits_used)
  values(new.id,'free','Free',f.writing_limit,0,f.speaking_limit,0,f.mock_test_limit,0,0,0);
  insert into public.subscription_history(user_id,plan_type,plan_name,price_uzs,writing_limit,speaking_limit,mock_test_limit,started_at)
    values(new.id,'free','Free','0',f.writing_limit,f.speaking_limit,f.mock_test_limit,now());
  return new;
end; $$;

create or replace function public.expire_subscriptions()
returns integer language plpgsql security definer set search_path=public as $$
declare affected integer; f record;
begin
  select * into f from public.subscription_plans where slug='free';
  update public.subscription_history set ended_at=now() where ended_at is null and expires_at is not null and expires_at<now();
  with updated as (update public.subscriptions set plan_type='free',plan_name='Free',writing_limit=f.writing_limit,writing_used=0,
    speaking_limit=f.speaking_limit,speaking_used=0,mock_test_limit=f.mock_test_limit,mock_test_used=0,
    expires_at=null,started_at=now(),is_active=true
    where plan_type<>'free' and expires_at is not null and expires_at<now() returning user_id)
  select count(*)::int into affected from updated; return affected;
end; $$;

-- Plan copy: personal Writing and Speaking only.
update public.subscription_plans set
  description='Create an account and try AI-graded IELTS Writing and Speaking.',
  features='["1 Writing evaluation","1 Speaking evaluation","Result history"]'::jsonb
where slug='free';
update public.subscription_plans set
  description='For learners getting started with IELTS Writing and Speaking.',
  features='["20 Writing evaluations","15 Speaking evaluations","3 Full Mock Tests","Daily Grammar practice","AI Mentor","Progress and history"]'::jsonb
where slug='go';
update public.subscription_plans set
  description='For intensive IELTS Writing and Speaking preparation.',
  features='["50 Writing evaluations","40 Speaking evaluations","8 Full Mock Tests","Daily Grammar practice","AI Mentor","Progress and history"]'::jsonb
where slug='plus';

-- Drop Teacher Mode functions, tables and columns.
drop function if exists public.teacher_delete_test(uuid,uuid);
drop function if exists public.teacher_finish_grading(uuid,jsonb);
drop function if exists public.teacher_claim_grading(uuid);
drop function if exists public.teacher_submit_writing(uuid,uuid,text);
drop function if exists public.teacher_submit_grammar(uuid,uuid,jsonb);
drop function if exists public.teacher_save_attempt(uuid,uuid,jsonb,text);
drop function if exists public.teacher_start_attempt(uuid,uuid);
drop function if exists public.teacher_claim_ai(uuid,text);
drop function if exists public.admin_assign_teacher_plan(uuid,uuid,text);

drop table if exists public.teacher_class_analyses cascade;
drop table if exists public.teacher_usage_events cascade;
drop table if exists public.teacher_attempts cascade;
drop table if exists public.teacher_ai_calls cascade;
drop table if exists public.teacher_tests cascade;
drop table if exists public.teacher_periods cascade;
drop function if exists public.teacher_test_guard();

alter table public.subscriptions
  drop column if exists teacher_grammar_limit,
  drop column if exists teacher_grammar_used,
  drop column if exists teacher_writing_limit,
  drop column if exists teacher_writing_used;
alter table public.subscription_plans
  drop column if exists teacher_grammar_limit,
  drop column if exists teacher_writing_limit,
  drop column if exists teacher_tests_unlimited;
