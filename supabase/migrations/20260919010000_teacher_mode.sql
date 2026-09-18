-- Teacher entitlements are independent of the existing student subscription.
create table public.teacher_periods (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references auth.users(id) on delete cascade,
  plan text not null check (plan in ('teacher','teacher_pro')),
  starts_at timestamptz not null default now(),
  ends_at timestamptz not null,
  grammar_used integer not null default 0 check (grammar_used >= 0),
  writing_used integer not null default 0 check (writing_used >= 0),
  created_at timestamptz not null default now(),
  check (ends_at > starts_at)
);
create index teacher_periods_active_idx on public.teacher_periods(teacher_id, ends_at desc);

create table public.teacher_tests (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references auth.users(id) on delete cascade,
  type text not null check (type in ('grammar','writing_task_1','writing_task_2')),
  title text not null check (char_length(title) between 3 and 160),
  description text not null default '',
  prompt text not null default '',
  questions jsonb not null default '[]'::jsonb,
  settings jsonb not null default '{}'::jsonb,
  published_at timestamptz,
  invite_code text unique,
  first_started_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index teacher_tests_owner_idx on public.teacher_tests(teacher_id, created_at desc);
create index teacher_tests_invite_idx on public.teacher_tests(invite_code) where invite_code is not null;

create or replace function public.teacher_test_guard() returns trigger language plpgsql set search_path=public as $$
begin
  if old.first_started_at is not null and
    (new.type is distinct from old.type or new.questions is distinct from old.questions or new.prompt is distinct from old.prompt) then
    raise exception 'test_content_locked';
  end if;
  if old.first_started_at is not null and
    (new.settings - 'deadline' - 'resultVisibility' - 'answerVisibility') is distinct from
    (old.settings - 'deadline' - 'resultVisibility' - 'answerVisibility') then
    raise exception 'test_settings_locked';
  end if;
  if old.published_at is not null and new.published_at is null then raise exception 'cannot_unpublish'; end if;
  new.updated_at:=now();
  return new;
end; $$;
create trigger teacher_test_guard before update on public.teacher_tests
for each row execute function public.teacher_test_guard();

create table public.teacher_attempts (
  id uuid primary key default gen_random_uuid(),
  test_id uuid not null references public.teacher_tests(id) on delete cascade,
  student_id uuid not null references auth.users(id) on delete cascade,
  attempt_number integer not null check (attempt_number > 0),
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  question_order jsonb not null default '[]'::jsonb,
  option_order jsonb not null default '[]'::jsonb,
  answers jsonb not null default '{}'::jsonb,
  essay text not null default '',
  grade_status text not null default 'none' check (grade_status in ('none','pending','grading','graded','failed')),
  grading_started_at timestamptz,
  result jsonb,
  score numeric(5,2),
  updated_at timestamptz not null default now(),
  unique(test_id, student_id, attempt_number)
);
create index teacher_attempts_student_idx on public.teacher_attempts(student_id, started_at desc);
create index teacher_attempts_test_idx on public.teacher_attempts(test_id, submitted_at desc);

create table public.teacher_usage_events (
  id uuid primary key default gen_random_uuid(),
  period_id uuid not null references public.teacher_periods(id) on delete restrict,
  attempt_id uuid not null unique references public.teacher_attempts(id) on delete restrict,
  kind text not null check (kind in ('grammar','writing')),
  created_at timestamptz not null default now()
);
create index teacher_usage_period_idx on public.teacher_usage_events(period_id, created_at desc);

create table public.teacher_ai_calls (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  kind text not null check (kind in ('generate','grade','analysis')),
  created_at timestamptz not null default now()
);
create index teacher_ai_calls_window_idx on public.teacher_ai_calls(user_id,kind,created_at desc);
alter table public.teacher_ai_calls enable row level security;
revoke all on public.teacher_ai_calls from anon,authenticated;
grant all on public.teacher_ai_calls to service_role;

create or replace function public.teacher_claim_ai(p_user uuid,p_kind text)
returns boolean language plpgsql security definer set search_path=public as $$
declare n int; ceiling int;
begin
  if p_kind not in ('generate','grade','analysis') then return false; end if;
  ceiling:=case p_kind when 'generate' then 20 when 'grade' then 40 else 5 end;
  perform pg_advisory_xact_lock(hashtextextended(p_user::text || ':' || p_kind,0));
  select count(*) into n from public.teacher_ai_calls where user_id=p_user and kind=p_kind and created_at>now()-interval '1 hour';
  if n>=ceiling then return false; end if;
  insert into public.teacher_ai_calls(user_id,kind) values(p_user,p_kind);
  return true;
end; $$;
revoke all on function public.teacher_claim_ai(uuid,text) from public,anon,authenticated;
grant execute on function public.teacher_claim_ai(uuid,text) to service_role;

create table public.teacher_class_analyses (
  test_id uuid primary key references public.teacher_tests(id) on delete cascade,
  analysis jsonb not null,
  source_count integer not null,
  generated_at timestamptz not null default now()
);

alter table public.teacher_periods enable row level security;
alter table public.teacher_tests enable row level security;
alter table public.teacher_attempts enable row level security;
alter table public.teacher_usage_events enable row level security;
alter table public.teacher_class_analyses enable row level security;

-- All mutations and filtered reads use the JWT-checked Edge Function. No client
-- table grants: this avoids exposing answer keys through a broad SELECT policy.
revoke all on public.teacher_periods, public.teacher_tests, public.teacher_attempts,
  public.teacher_usage_events, public.teacher_class_analyses from anon, authenticated;
grant all on public.teacher_periods, public.teacher_tests, public.teacher_attempts,
  public.teacher_usage_events, public.teacher_class_analyses to service_role;
grant select on public.teacher_periods, public.teacher_tests, public.teacher_attempts,
  public.teacher_usage_events, public.teacher_class_analyses to authenticated;
create policy teacher_period_owner on public.teacher_periods for select to authenticated
  using (teacher_id=auth.uid());
create policy teacher_test_owner on public.teacher_tests for select to authenticated
  using (teacher_id=auth.uid());
create policy teacher_attempt_teacher on public.teacher_attempts for select to authenticated
  using (exists(select 1 from public.teacher_tests t where t.id=test_id and t.teacher_id=auth.uid()));
create policy teacher_usage_owner on public.teacher_usage_events for select to authenticated
  using (exists(select 1 from public.teacher_periods p where p.id=period_id and p.teacher_id=auth.uid()));
create policy teacher_analysis_owner on public.teacher_class_analyses for select to authenticated
  using (exists(select 1 from public.teacher_tests t where t.id=test_id and t.teacher_id=auth.uid()));

create or replace function public.teacher_start_attempt(p_test uuid, p_student uuid)
returns uuid language plpgsql security definer set search_path = public as $$
declare t public.teacher_tests%rowtype; a public.teacher_attempts%rowtype;
  n integer; max_attempts integer; q jsonb; qo jsonb; oo jsonb;
begin
  select * into t from public.teacher_tests where id = p_test for update;
  if not found or t.published_at is null then raise exception 'test_unavailable'; end if;
  if (t.settings->>'startsAt') is not null and now() < (t.settings->>'startsAt')::timestamptz then raise exception 'test_not_started'; end if;
  if (t.settings->>'deadline') is not null and now() > (t.settings->>'deadline')::timestamptz and coalesce(t.settings->>'late','block') = 'block' then raise exception 'deadline_passed'; end if;
  if not exists(select 1 from public.teacher_periods where teacher_id=t.teacher_id and starts_at<=now() and ends_at>now()) then raise exception 'teacher_subscription_expired'; end if;
  select * into a from public.teacher_attempts where test_id=p_test and student_id=p_student and submitted_at is null order by started_at desc limit 1;
  if found then
    if coalesce(t.settings->>'resume','allow') = 'block' then raise exception 'resume_blocked'; end if;
    if now() >= a.started_at + make_interval(mins => coalesce((t.settings->>'timeLimit')::integer,30)) then raise exception 'time_expired'; end if;
    return a.id;
  end if;
  select count(*) into n from public.teacher_attempts where test_id=p_test and student_id=p_student;
  max_attempts := coalesce((t.settings->>'attempts')::integer,1);
  if max_attempts > 0 and n >= max_attempts then raise exception 'attempt_limit'; end if;
  if t.type='grammar' then
    if jsonb_array_length(t.questions)=0 then raise exception 'empty_test'; end if;
    select jsonb_agg(i order by case when t.settings->>'questionOrder'='random' then random() else i end)
      into qo from generate_series(0,jsonb_array_length(t.questions)-1) i;
    select jsonb_agg(x order by i) into oo from (
      select i, (select jsonb_agg(j order by case when t.settings->>'optionOrder'='random' then random() else j end)
        from generate_series(0,3) j) x
      from generate_series(0,jsonb_array_length(t.questions)-1) i
    ) s;
  else qo := '[]'::jsonb; oo := '[]'::jsonb; end if;
  insert into public.teacher_attempts(test_id,student_id,attempt_number,question_order,option_order)
  values(p_test,p_student,n+1,qo,oo) returning id into a.id;
  update public.teacher_tests set first_started_at=coalesce(first_started_at,now()) where id=p_test;
  return a.id;
end; $$;

create or replace function public.teacher_save_attempt(p_attempt uuid,p_student uuid,p_answers jsonb,p_essay text)
returns void language plpgsql security definer set search_path=public as $$
declare a public.teacher_attempts%rowtype; t public.teacher_tests%rowtype;
begin
  select * into a from public.teacher_attempts where id=p_attempt and student_id=p_student for update;
  if not found or a.submitted_at is not null then raise exception 'attempt_unavailable'; end if;
  select * into t from public.teacher_tests where id=a.test_id;
  if now() >= a.started_at + make_interval(mins => coalesce((t.settings->>'timeLimit')::integer,30)) then raise exception 'time_expired'; end if;
  if t.type='grammar' then
    if jsonb_typeof(p_answers) <> 'object' or octet_length(p_answers::text)>15000 then raise exception 'invalid_answers'; end if;
    update public.teacher_attempts set answers=p_answers,updated_at=now() where id=p_attempt;
  else
    if char_length(p_essay)>20000 then raise exception 'essay_too_long'; end if;
    update public.teacher_attempts set essay=p_essay,updated_at=now() where id=p_attempt;
  end if;
end; $$;

create or replace function public.teacher_submit_grammar(p_attempt uuid,p_student uuid,p_answers jsonb)
returns jsonb language plpgsql security definer set search_path=public as $$
declare a public.teacher_attempts%rowtype; t public.teacher_tests%rowtype;
  p public.teacher_periods%rowtype; total int; correct int:=0; k text; v jsonb; idx int; answer int; result jsonb;
begin
  select * into a from public.teacher_attempts where id=p_attempt and student_id=p_student for update;
  if not found then raise exception 'attempt_unavailable'; end if;
  if a.submitted_at is not null then return coalesce(a.result,'{}'::jsonb); end if;
  select * into t from public.teacher_tests where id=a.test_id;
  if t.type<>'grammar' then raise exception 'wrong_test_type'; end if;
  if now() >= a.started_at + make_interval(mins=>coalesce((t.settings->>'timeLimit')::integer,30)) then p_answers:=a.answers; end if;
  if jsonb_typeof(p_answers)<>'object' or octet_length(p_answers::text)>15000 then raise exception 'invalid_answers'; end if;
  select * into p from public.teacher_periods where teacher_id=t.teacher_id and starts_at<=now() and ends_at>now() order by starts_at desc limit 1 for update;
  if not found then raise exception 'teacher_subscription_expired'; end if;
  if p.grammar_used >= (case when p.plan='teacher_pro' then 3500 else 750 end) then raise exception 'grammar_quota_exhausted'; end if;
  total := jsonb_array_length(t.questions);
  if now() < a.started_at + make_interval(mins=>coalesce((t.settings->>'timeLimit')::integer,30)) and
     (select count(*) from jsonb_object_keys(p_answers))<>total then raise exception 'answer_every_question'; end if;
  for k,v in select * from jsonb_each(p_answers) loop
    if k !~ '^[0-9]{1,4}$' then raise exception 'invalid_answers'; end if;
    idx:=k::integer; if idx>=total or jsonb_typeof(v)<>'number' then raise exception 'invalid_answers'; end if;
    answer:=v::text::integer; if answer<0 or answer>3 then raise exception 'invalid_answers'; end if;
    if answer=(t.questions->idx->>'correct')::integer then correct:=correct+1; end if;
  end loop;
  result:=jsonb_build_object('correct',correct,'total',total,'percentage',round(100.0*correct/total,1),
    'passed',case when t.settings->>'passScore' is null then null else 100.0*correct/total >= (t.settings->>'passScore')::numeric end);
  update public.teacher_attempts set answers=p_answers,result=result,score=(result->>'percentage')::numeric,submitted_at=now(),updated_at=now() where id=p_attempt;
  insert into public.teacher_usage_events(period_id,attempt_id,kind) values(p.id,p_attempt,'grammar');
  update public.teacher_periods set grammar_used=grammar_used+1 where id=p.id;
  return result;
end; $$;

-- Reserve no quota at essay submission. A single grading worker claims the row;
-- a stale worker may be retried, and the finalizer is idempotent.
create or replace function public.teacher_submit_writing(p_attempt uuid,p_student uuid,p_essay text)
returns void language plpgsql security definer set search_path=public as $$
declare a public.teacher_attempts%rowtype; t public.teacher_tests%rowtype;
begin
  select * into a from public.teacher_attempts where id=p_attempt and student_id=p_student for update;
  if not found then raise exception 'attempt_unavailable'; end if;
  if a.submitted_at is not null then return; end if;
  select * into t from public.teacher_tests where id=a.test_id;
  if now() >= a.started_at + make_interval(mins=>coalesce((t.settings->>'timeLimit')::integer,40)) then p_essay:=a.essay; end if;
  if t.type='grammar' or char_length(trim(p_essay))<50 or char_length(p_essay)>20000 then raise exception 'invalid_essay'; end if;
  if not exists(select 1 from public.teacher_periods where teacher_id=t.teacher_id and starts_at<=now() and ends_at>now()) then raise exception 'teacher_subscription_expired'; end if;
  update public.teacher_attempts set essay=p_essay,submitted_at=now(),grade_status='pending',updated_at=now() where id=p_attempt;
end; $$;

create or replace function public.teacher_claim_grading(p_attempt uuid)
returns boolean language plpgsql security definer set search_path=public as $$
declare a public.teacher_attempts%rowtype;
begin
  select * into a from public.teacher_attempts where id=p_attempt for update;
  if not found or a.submitted_at is null or a.grade_status='graded' then return false; end if;
  if a.grade_status='grading' and a.grading_started_at>now()-interval '2 minutes' then return false; end if;
  update public.teacher_attempts set grade_status='grading',grading_started_at=now() where id=p_attempt;
  return true;
end; $$;

create or replace function public.teacher_finish_grading(p_attempt uuid,p_grade jsonb)
returns boolean language plpgsql security definer set search_path=public as $$
declare a public.teacher_attempts%rowtype; t public.teacher_tests%rowtype; p public.teacher_periods%rowtype;
begin
  select * into a from public.teacher_attempts where id=p_attempt for update;
  if not found then raise exception 'attempt_unavailable'; end if;
  if a.grade_status='graded' then return true; end if;
  if a.grade_status<>'grading' or p_grade->>'overallBand' is null then raise exception 'grading_unavailable'; end if;
  select * into t from public.teacher_tests where id=a.test_id;
  select * into p from public.teacher_periods where teacher_id=t.teacher_id and starts_at<=now() and ends_at>now() order by starts_at desc limit 1 for update;
  if not found then raise exception 'teacher_subscription_expired'; end if;
  if p.writing_used >= (case when p.plan='teacher_pro' then 250 else 50 end) then raise exception 'writing_quota_exhausted'; end if;
  update public.teacher_attempts set grade_status='graded',result=p_grade,score=(p_grade->>'overallBand')::numeric,updated_at=now() where id=p_attempt;
  insert into public.teacher_usage_events(period_id,attempt_id,kind) values(p.id,p_attempt,'writing') on conflict (attempt_id) do nothing;
  update public.teacher_periods set writing_used=writing_used+1 where id=p.id;
  return true;
end; $$;

revoke all on function public.teacher_start_attempt(uuid,uuid),public.teacher_save_attempt(uuid,uuid,jsonb,text),
  public.teacher_submit_grammar(uuid,uuid,jsonb),public.teacher_submit_writing(uuid,uuid,text),
  public.teacher_claim_grading(uuid),public.teacher_finish_grading(uuid,jsonb) from public,anon,authenticated;
grant execute on function public.teacher_start_attempt(uuid,uuid),public.teacher_save_attempt(uuid,uuid,jsonb,text),
  public.teacher_submit_grammar(uuid,uuid,jsonb),public.teacher_submit_writing(uuid,uuid,text),
  public.teacher_claim_grading(uuid),public.teacher_finish_grading(uuid,jsonb) to service_role;

-- Assignment is deliberately admin-only and does not touch student plans.
create or replace function public.admin_assign_teacher_plan(p_admin uuid,p_teacher uuid,p_plan text)
returns void language plpgsql security definer set search_path=public as $$
begin
  if not public.has_role(p_admin,'admin'::public.app_role) then raise exception 'forbidden'; end if;
  if p_plan not in ('teacher','teacher_pro') then raise exception 'invalid_plan'; end if;
  if not exists(select 1 from auth.users where id=p_teacher) then raise exception 'user_not_found'; end if;
  update public.teacher_periods set ends_at=now() where teacher_id=p_teacher and starts_at<=now() and ends_at>now();
  insert into public.teacher_periods(teacher_id,plan,starts_at,ends_at)
    values(p_teacher,p_plan,now(),now()+interval '30 days');
end; $$;
revoke all on function public.admin_assign_teacher_plan(uuid,uuid,text) from public,anon,authenticated;
grant execute on function public.admin_assign_teacher_plan(uuid,uuid,text) to service_role;
