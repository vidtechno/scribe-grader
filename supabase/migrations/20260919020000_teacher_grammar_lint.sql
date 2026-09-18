-- Correct PL/pgSQL variable/column ambiguity detected by supabase db lint.
create or replace function public.teacher_submit_grammar(p_attempt uuid,p_student uuid,p_answers jsonb)
returns jsonb language plpgsql security definer set search_path=public as $$
declare a public.teacher_attempts%rowtype; t public.teacher_tests%rowtype;
  p public.teacher_periods%rowtype; total int; correct int:=0; k text; v jsonb; idx int; answer int; v_result jsonb;
begin
  select * into a from public.teacher_attempts where id=p_attempt and student_id=p_student for update;
  if not found then raise exception 'attempt_unavailable'; end if;
  if a.submitted_at is not null then return coalesce(a.result,'{}'::jsonb); end if;
  select * into t from public.teacher_tests where id=a.test_id;
  if t.type<>'grammar' then raise exception 'wrong_test_type'; end if;
  if t.settings->>'deadline' is not null and coalesce(t.settings->>'late','block')='block'
     and now()>(t.settings->>'deadline')::timestamptz then raise exception 'deadline_passed'; end if;
  if now()>=a.started_at+make_interval(mins=>coalesce((t.settings->>'timeLimit')::integer,30)) then p_answers:=a.answers; end if;
  if jsonb_typeof(p_answers)<>'object' or octet_length(p_answers::text)>15000 then raise exception 'invalid_answers'; end if;
  select * into p from public.teacher_periods where teacher_id=t.teacher_id and starts_at<=now() and ends_at>now() order by starts_at desc limit 1 for update;
  if not found then raise exception 'teacher_subscription_expired'; end if;
  if p.grammar_used >= (case when p.plan='teacher_pro' then 3500 else 750 end) then raise exception 'grammar_quota_exhausted'; end if;
  total:=jsonb_array_length(t.questions);
  if total=0 then raise exception 'empty_test'; end if;
  if now()<a.started_at+make_interval(mins=>coalesce((t.settings->>'timeLimit')::integer,30)) and
     (select count(*) from jsonb_object_keys(p_answers))<>total then raise exception 'answer_every_question'; end if;
  for k,v in select * from jsonb_each(p_answers) loop
    if k !~ '^[0-9]{1,4}$' then raise exception 'invalid_answers'; end if;
    idx:=k::integer;
    if idx>=total or jsonb_typeof(v)<>'number' then raise exception 'invalid_answers'; end if;
    answer:=v::text::integer;
    if answer<0 or answer>3 then raise exception 'invalid_answers'; end if;
    if answer=(t.questions->idx->>'correct')::integer then correct:=correct+1; end if;
  end loop;
  v_result:=jsonb_build_object('correct',correct,'total',total,'percentage',round(100.0*correct/total,1),
    'passed',case when t.settings->>'passScore' is null then null else 100.0*correct/total >= (t.settings->>'passScore')::numeric end);
  update public.teacher_attempts set answers=p_answers,result=v_result,score=(v_result->>'percentage')::numeric,submitted_at=now(),updated_at=now() where id=p_attempt;
  insert into public.teacher_usage_events(period_id,attempt_id,kind) values(p.id,p_attempt,'grammar');
  update public.teacher_periods set grammar_used=grammar_used+1 where id=p.id;
  return v_result;
end; $$;

create or replace function public.teacher_submit_writing(p_attempt uuid,p_student uuid,p_essay text)
returns void language plpgsql security definer set search_path=public as $$
declare a public.teacher_attempts%rowtype; t public.teacher_tests%rowtype;
begin
  select * into a from public.teacher_attempts where id=p_attempt and student_id=p_student for update;
  if not found then raise exception 'attempt_unavailable'; end if;
  if a.submitted_at is not null then return; end if;
  select * into t from public.teacher_tests where id=a.test_id;
  if t.settings->>'deadline' is not null and coalesce(t.settings->>'late','block')='block'
     and now()>(t.settings->>'deadline')::timestamptz then raise exception 'deadline_passed'; end if;
  if now()>=a.started_at+make_interval(mins=>coalesce((t.settings->>'timeLimit')::integer,40)) then p_essay:=a.essay; end if;
  if t.type='grammar' or char_length(trim(p_essay))<50 or char_length(p_essay)>20000 then raise exception 'invalid_essay'; end if;
  if not exists(select 1 from public.teacher_periods where teacher_id=t.teacher_id and starts_at<=now() and ends_at>now()) then raise exception 'teacher_subscription_expired'; end if;
  update public.teacher_attempts set essay=p_essay,submitted_at=now(),grade_status='pending',updated_at=now() where id=p_attempt;
end; $$;
