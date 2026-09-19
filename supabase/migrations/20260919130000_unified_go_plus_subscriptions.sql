-- Unify Student and Teacher entitlements into Free / Scorify Go / Scorify Plus.
-- Historical subscription and teacher period rows are preserved.

alter table public.subscription_plans
  add column if not exists teacher_grammar_limit integer not null default 0,
  add column if not exists teacher_writing_limit integer not null default 0,
  add column if not exists teacher_tests_unlimited boolean not null default false;

alter table public.subscriptions
  add column if not exists teacher_grammar_limit integer not null default 0,
  add column if not exists teacher_grammar_used integer not null default 0,
  add column if not exists teacher_writing_limit integer not null default 0,
  add column if not exists teacher_writing_used integer not null default 0;

-- Remove the legacy free/pro check before transforming active rows. A strict
-- free/go/plus constraint is restored after every row has been normalized.
alter table public.subscriptions drop constraint if exists subscriptions_plan_type_check;

update public.subscription_plans set is_active=false where coalesce(slug,'') not in ('free','go','plus');

update public.subscription_plans set
  name='Free', price=0, price_uzs='0', period='30 days', description='Create an account and join teacher-invited assessments.',
  writing_limit=1, speaking_limit=1, mock_test_limit=0, mentor_limit=0,
  teacher_grammar_limit=0, teacher_writing_limit=0, teacher_tests_unlimited=false,
  credits_limit=0, credit_amount=0, badge=null, sort_order=0, is_active=true,
  features='["1 Writing evaluation","1 Speaking evaluation","Teacher invite participation","Result history"]'::jsonb
where slug='free';

insert into public.subscription_plans
  (slug,name,price,price_uzs,period,description,writing_limit,speaking_limit,mock_test_limit,mentor_limit,
   teacher_grammar_limit,teacher_writing_limit,teacher_tests_unlimited,credits_limit,credit_amount,badge,sort_order,is_active,features)
values
  ('go','Scorify Go',4,'49 000','30 days','For learners and teachers getting started.',20,15,3,10,500,30,true,0,0,null,1,true,
   '["Student and Teacher Mode","20 Writing evaluations","15 Speaking evaluations","3 Full Mock Tests","Daily Grammar practice","AI Mentor","Progress and history","Unlimited Teacher tests","500 Teacher Grammar submissions","30 Teacher Writing evaluations","Invite links and result analytics"]'::jsonb),
  ('plus','Scorify Plus',8,'99 000','30 days','For intensive learners and active teachers.',50,40,8,10,2000,150,true,0,0,'Recommended',2,true,
   '["Student and Teacher Mode","50 Writing evaluations","40 Speaking evaluations","8 Full Mock Tests","Daily Grammar practice","AI Mentor","Progress and history","Unlimited Teacher tests","2,000 Teacher Grammar submissions","150 Teacher Writing evaluations","Invite links and result analytics"]'::jsonb)
on conflict (slug) do update set
  name=excluded.name,price=excluded.price,price_uzs=excluded.price_uzs,period=excluded.period,
  description=excluded.description,writing_limit=excluded.writing_limit,speaking_limit=excluded.speaking_limit,
  mock_test_limit=excluded.mock_test_limit,mentor_limit=excluded.mentor_limit,
  teacher_grammar_limit=excluded.teacher_grammar_limit,teacher_writing_limit=excluded.teacher_writing_limit,
  teacher_tests_unlimited=excluded.teacher_tests_unlimited,credits_limit=0,credit_amount=0,
  badge=excluded.badge,sort_order=excluded.sort_order,is_active=true,features=excluded.features;

-- Active legacy Student subscriptions keep their usage and become Go. Active
-- legacy Teacher Pro access maps to Plus; Teacher access maps to Go. If both
-- existed, the higher entitlement wins and the furthest expiry is preserved.
alter table public.teacher_periods drop constraint if exists teacher_periods_plan_check;
alter table public.teacher_periods add constraint teacher_periods_plan_check
  check (plan in ('teacher','teacher_pro','go','plus'));

with active_teacher as (
  select distinct on (teacher_id) teacher_id,plan,starts_at,ends_at,grammar_used,writing_used
  from public.teacher_periods where starts_at<=now() and ends_at>now()
  order by teacher_id,starts_at desc
)
update public.subscriptions s set
  plan_type=case when t.plan='teacher_pro' then 'plus' else 'go' end,
  plan_name=case when t.plan='teacher_pro' then 'Scorify Plus' else 'Scorify Go' end,
  writing_limit=case when t.plan='teacher_pro' then 50 else 20 end,
  speaking_limit=case when t.plan='teacher_pro' then 40 else 15 end,
  mock_test_limit=case when t.plan='teacher_pro' then 8 else 3 end,
  teacher_grammar_limit=case when t.plan='teacher_pro' then 2000 else 500 end,
  teacher_writing_limit=case when t.plan='teacher_pro' then 150 else 30 end,
  teacher_grammar_used=t.grammar_used,teacher_writing_used=t.writing_used,
  started_at=least(s.started_at,t.starts_at),expires_at=greatest(coalesce(s.expires_at,t.ends_at),t.ends_at),is_active=true
from active_teacher t where s.user_id=t.teacher_id;

update public.subscriptions s set
  plan_type='go',plan_name='Scorify Go',writing_limit=20,speaking_limit=15,mock_test_limit=3,
  teacher_grammar_limit=500,teacher_writing_limit=30
where s.plan_type not in ('free','go','plus');

update public.subscriptions s set
  plan_name=p.name,writing_limit=p.writing_limit,speaking_limit=p.speaking_limit,mock_test_limit=p.mock_test_limit,
  teacher_grammar_limit=p.teacher_grammar_limit,teacher_writing_limit=p.teacher_writing_limit
from public.subscription_plans p where p.slug=s.plan_type;

update public.subscription_history h set ended_at=now()
where h.ended_at is null and exists(
  select 1 from public.subscriptions s where s.user_id=h.user_id and s.plan_type in ('go','plus')
);
insert into public.subscription_history(user_id,plan_type,plan_name,price_uzs,writing_limit,speaking_limit,mock_test_limit,started_at,expires_at)
select s.user_id,s.plan_type,s.plan_name,p.price_uzs,s.writing_limit,s.speaking_limit,s.mock_test_limit,s.started_at,s.expires_at
from public.subscriptions s join public.subscription_plans p on p.slug=s.plan_type
where s.plan_type in ('go','plus') and not exists(
  select 1 from public.subscription_history h where h.user_id=s.user_id and h.ended_at is null and h.plan_type=s.plan_type
);

alter table public.subscriptions drop constraint if exists subscriptions_plan_type_check;
alter table public.subscriptions add constraint subscriptions_plan_type_check
  check (plan_type in ('free','go','plus'));

update public.teacher_periods set plan=case when plan='teacher_pro' then 'plus' when plan='teacher' then 'go' else plan end
where plan in ('teacher','teacher_pro');

insert into public.teacher_periods(teacher_id,plan,starts_at,ends_at,grammar_used,writing_used)
select s.user_id,s.plan_type,s.started_at,s.expires_at,s.teacher_grammar_used,s.teacher_writing_used
from public.subscriptions s
where s.plan_type in ('go','plus') and s.expires_at>now()
and not exists(select 1 from public.teacher_periods p where p.teacher_id=s.user_id and p.starts_at<=now() and p.ends_at>now());

create or replace function public.enforce_subscription_expiry(_user_id uuid)
returns void language plpgsql security definer set search_path=public as $$
declare f record;
begin
  select * into f from public.subscription_plans where slug='free';
  update public.subscription_history set ended_at=now()
    where user_id=_user_id and ended_at is null and expires_at is not null and expires_at<now();
  update public.teacher_periods set ends_at=now()
    where teacher_id=_user_id and starts_at<=now() and ends_at>now()
      and exists(select 1 from public.subscriptions s where s.user_id=_user_id and s.expires_at<now());
  update public.subscriptions set plan_type='free',plan_name='Free',
    writing_limit=f.writing_limit,writing_used=0,speaking_limit=f.speaking_limit,speaking_used=0,
    mock_test_limit=f.mock_test_limit,mock_test_used=0,teacher_grammar_limit=0,teacher_grammar_used=0,
    teacher_writing_limit=0,teacher_writing_used=0,expires_at=null,started_at=now(),is_active=true
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
  if not preserve_usage then
    update public.teacher_periods set ends_at=now() where teacher_id=_user_id and starts_at<=now() and ends_at>now();
  end if;
  insert into public.subscriptions(user_id,plan_type,plan_name,writing_limit,writing_used,speaking_limit,speaking_used,
    mock_test_limit,mock_test_used,teacher_grammar_limit,teacher_grammar_used,teacher_writing_limit,teacher_writing_used,
    credits_limit,credits_used,started_at,expires_at,is_active)
  values(_user_id,p.slug,p.name,p.writing_limit,case when preserve_usage then old.writing_used else 0 end,
    p.speaking_limit,case when preserve_usage then old.speaking_used else 0 end,
    p.mock_test_limit,case when preserve_usage then old.mock_test_used else 0 end,
    p.teacher_grammar_limit,case when preserve_usage then old.teacher_grammar_used else 0 end,
    p.teacher_writing_limit,case when preserve_usage then old.teacher_writing_used else 0 end,
    0,0,s_start,s_end,true)
  on conflict(user_id) do update set plan_type=excluded.plan_type,plan_name=excluded.plan_name,
    writing_limit=excluded.writing_limit,writing_used=excluded.writing_used,
    speaking_limit=excluded.speaking_limit,speaking_used=excluded.speaking_used,
    mock_test_limit=excluded.mock_test_limit,mock_test_used=excluded.mock_test_used,
    teacher_grammar_limit=excluded.teacher_grammar_limit,teacher_grammar_used=excluded.teacher_grammar_used,
    teacher_writing_limit=excluded.teacher_writing_limit,teacher_writing_used=excluded.teacher_writing_used,
    started_at=excluded.started_at,expires_at=excluded.expires_at,is_active=true;
  if _plan_slug in ('go','plus') and not preserve_usage then
    insert into public.teacher_periods(teacher_id,plan,starts_at,ends_at) values(_user_id,_plan_slug,s_start,s_end);
  elsif preserve_usage then
    update public.teacher_periods set plan=_plan_slug,ends_at=s_end
      where teacher_id=_user_id and starts_at<=now() and ends_at>now();
  end if;
  insert into public.subscription_history(user_id,plan_type,plan_name,price_uzs,writing_limit,speaking_limit,mock_test_limit,started_at,expires_at)
  values(_user_id,p.slug,p.name,p.price_uzs,p.writing_limit,p.speaking_limit,p.mock_test_limit,s_start,s_end);
  return jsonb_build_object('plan',p.slug,'started_at',s_start,'expires_at',s_end,'usage_preserved',preserve_usage);
end; $$;

create or replace function public.admin_extend_subscription(_user_id uuid,_days int default 30)
returns jsonb language plpgsql security definer set search_path=public as $$
declare s public.subscriptions%rowtype;
begin
  if not public.has_role(auth.uid(),'admin'::app_role) then raise exception 'Only admins can change subscriptions'; end if;
  select * into s from public.subscriptions where user_id=_user_id;
  if s.plan_type not in ('go','plus') or s.expires_at is null or s.expires_at<now() then
    return public.admin_set_subscription(_user_id,'go',now(),now()+make_interval(days=>_days));
  end if;
  -- A renewal starts a fresh billing period and fresh personal/Teacher usage.
  return public.admin_set_subscription(_user_id,s.plan_type,now(),now()+make_interval(days=>_days));
end; $$;

create or replace function public.admin_assign_plan(_user_id uuid,_plan_slug text)
returns void language plpgsql security definer set search_path=public as $$
begin perform public.admin_set_subscription(_user_id,_plan_slug,null,null); end; $$;

create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path=public as $$
declare f record;
begin
  select * into f from public.subscription_plans where slug='free';
  insert into public.profiles(user_id,email,full_name,credits,public_id)
    values(new.id,new.email,new.raw_user_meta_data->>'full_name',0,public.generate_public_id());
  insert into public.user_roles(user_id,role) values(new.id,'user');
  insert into public.subscriptions(user_id,plan_type,plan_name,writing_limit,writing_used,speaking_limit,speaking_used,
    mock_test_limit,mock_test_used,teacher_grammar_limit,teacher_grammar_used,teacher_writing_limit,teacher_writing_used,credits_limit,credits_used)
  values(new.id,'free','Free',f.writing_limit,0,f.speaking_limit,0,f.mock_test_limit,0,0,0,0,0,0,0);
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
  update public.teacher_periods p set ends_at=now() from public.subscriptions s
    where p.teacher_id=s.user_id and p.starts_at<=now() and p.ends_at>now() and s.expires_at<now();
  with updated as (update public.subscriptions set plan_type='free',plan_name='Free',writing_limit=f.writing_limit,writing_used=0,
    speaking_limit=f.speaking_limit,speaking_used=0,mock_test_limit=f.mock_test_limit,mock_test_used=0,
    teacher_grammar_limit=0,teacher_grammar_used=0,teacher_writing_limit=0,teacher_writing_used=0,
    expires_at=null,started_at=now(),is_active=true
    where plan_type<>'free' and expires_at is not null and expires_at<now() returning user_id)
  select count(*)::int into affected from updated; return affected;
end; $$;

-- Teacher quota finalizers remain atomic and idempotent, but limits now come
-- from the unified plan catalogue and the unified subscription counters mirror
-- the period ledger for dashboard visibility.
create or replace function public.teacher_submit_grammar(p_attempt uuid,p_student uuid,p_answers jsonb)
returns jsonb language plpgsql security definer set search_path=public as $$
declare a public.teacher_attempts%rowtype;t public.teacher_tests%rowtype;p public.teacher_periods%rowtype;
  lim int;total int;correct int:=0;k text;v jsonb;idx int;answer int;v_result jsonb;
begin
  select * into a from public.teacher_attempts where id=p_attempt and student_id=p_student for update;
  if not found then raise exception 'attempt_unavailable'; end if;
  if a.submitted_at is not null then return coalesce(a.result,'{}'::jsonb); end if;
  select * into t from public.teacher_tests where id=a.test_id;
  if t.type<>'grammar' then raise exception 'wrong_test_type'; end if;
  if t.settings->>'deadline' is not null and coalesce(t.settings->>'late','block')='block' and now()>(t.settings->>'deadline')::timestamptz then raise exception 'deadline_passed'; end if;
  if now()>=a.started_at+make_interval(mins=>coalesce((t.settings->>'timeLimit')::integer,30)) then p_answers:=a.answers; end if;
  if jsonb_typeof(p_answers)<>'object' or octet_length(p_answers::text)>15000 then raise exception 'invalid_answers'; end if;
  select * into p from public.teacher_periods where teacher_id=t.teacher_id and starts_at<=now() and ends_at>now() order by starts_at desc limit 1 for update;
  if not found then raise exception 'teacher_subscription_expired'; end if;
  select teacher_grammar_limit into lim from public.subscription_plans where slug=p.plan and is_active=true;
  if coalesce(lim,0)<=0 or p.grammar_used>=lim then raise exception 'grammar_quota_exhausted'; end if;
  total:=jsonb_array_length(t.questions);if total=0 then raise exception 'empty_test';end if;
  if now()<a.started_at+make_interval(mins=>coalesce((t.settings->>'timeLimit')::integer,30)) and (select count(*) from jsonb_object_keys(p_answers))<>total then raise exception 'answer_every_question';end if;
  for k,v in select * from jsonb_each(p_answers) loop
    if k !~ '^[0-9]{1,4}$' then raise exception 'invalid_answers';end if;
    idx:=k::integer;if idx>=total or jsonb_typeof(v)<>'number' then raise exception 'invalid_answers';end if;
    answer:=v::text::integer;if answer<0 or answer>3 then raise exception 'invalid_answers';end if;
    if answer=(t.questions->idx->>'correct')::integer then correct:=correct+1;end if;
  end loop;
  v_result:=jsonb_build_object('correct',correct,'total',total,'percentage',round(100.0*correct/total,1),'passed',case when t.settings->>'passScore' is null then null else 100.0*correct/total >= (t.settings->>'passScore')::numeric end);
  update public.teacher_attempts set answers=p_answers,result=v_result,score=(v_result->>'percentage')::numeric,submitted_at=now(),updated_at=now() where id=p_attempt;
  insert into public.teacher_usage_events(period_id,attempt_id,kind) values(p.id,p_attempt,'grammar');
  update public.teacher_periods set grammar_used=grammar_used+1 where id=p.id;
  update public.subscriptions set teacher_grammar_used=teacher_grammar_used+1 where user_id=t.teacher_id and plan_type=p.plan;
  return v_result;
end; $$;

create or replace function public.teacher_finish_grading(p_attempt uuid,p_grade jsonb)
returns boolean language plpgsql security definer set search_path=public as $$
declare a public.teacher_attempts%rowtype;t public.teacher_tests%rowtype;p public.teacher_periods%rowtype;lim int;
begin
  select * into a from public.teacher_attempts where id=p_attempt for update;
  if not found then raise exception 'attempt_unavailable';end if;
  if a.grade_status='graded' then return true;end if;
  if a.grade_status<>'grading' or p_grade->>'overallBand' is null then raise exception 'grading_unavailable';end if;
  select * into t from public.teacher_tests where id=a.test_id;
  select * into p from public.teacher_periods where teacher_id=t.teacher_id and starts_at<=now() and ends_at>now() order by starts_at desc limit 1 for update;
  if not found then raise exception 'teacher_subscription_expired';end if;
  select teacher_writing_limit into lim from public.subscription_plans where slug=p.plan and is_active=true;
  if coalesce(lim,0)<=0 or p.writing_used>=lim then raise exception 'writing_quota_exhausted';end if;
  update public.teacher_attempts set grade_status='graded',result=p_grade,score=(p_grade->>'overallBand')::numeric,updated_at=now() where id=p_attempt;
  insert into public.teacher_usage_events(period_id,attempt_id,kind) values(p.id,p_attempt,'writing');
  update public.teacher_periods set writing_used=writing_used+1 where id=p.id;
  update public.subscriptions set teacher_writing_used=teacher_writing_used+1 where user_id=t.teacher_id and plan_type=p.plan;
  return true;
end; $$;

drop function if exists public.admin_assign_teacher_plan(uuid,uuid,text);
