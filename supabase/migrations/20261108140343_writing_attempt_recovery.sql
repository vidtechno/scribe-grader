-- Local preparation only. No backfill: existing essays/results are untouched.
-- Text and the grading reservation are only mutated through checked transactions.
create table public.writing_attempts (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  mock_id uuid references public.mock_tests(id) on delete cascade,
  task_type text not null check (task_type in ('Task 1', 'Task 2')),
  topic text not null check (length(topic) between 1 and 500),
  essay_text text not null check (length(essay_text) between 1 and 20000),
  started_at timestamptz,
  deadline_at timestamptz,
  revision integer not null default 1,
  state text not null default 'draft' check (state in ('draft','grading','completed','finished','review_required')),
  claim_token uuid,
  quota jsonb,
  result jsonb,
  updated_at timestamptz not null default now(),
  unique (mock_id, task_type)
);
alter table public.writing_attempts enable row level security;
revoke all on public.writing_attempts from public, anon, authenticated;
grant select on public.writing_attempts to authenticated;
grant all on public.writing_attempts to service_role;
create policy "Read own Writing recovery" on public.writing_attempts for select to authenticated
  using ((select auth.uid()) = user_id);
create index writing_attempts_user_updated on public.writing_attempts (user_id, updated_at desc);

-- Deliberate per-account API: definer is needed because the client cannot write
-- reservation/result columns. Every path validates auth.uid(), ownership and state.
create function public.save_writing_attempt(
  _id uuid, _mock_id uuid, _task text, _topic text, _text text,
  _started_at timestamptz, _deadline_at timestamptz,
  _expected_revision integer, _finish_mock boolean default false
) returns jsonb language plpgsql security definer set search_path = '' as $$
declare
  u uuid := auth.uid(); a public.writing_attempts%rowtype;
  e public.essays%rowtype; m public.mock_tests%rowtype;
  started timestamptz; deadline timestamptz; words integer; next_step text;
begin
  if u is null then raise insufficient_privilege; end if;
  if _id is null or _task is null or _task not in ('Task 1','Task 2') or
    _text is null or length(btrim(_text)) = 0 or length(_text) > 20000 or
    _topic is null or length(btrim(_topic)) = 0 or length(_topic) > 500 or
    _expected_revision is null or _expected_revision < 0 then raise exception 'Invalid Writing draft'; end if;
  -- Serialize first inserts as well as subsequent saves from multiple tabs/devices.
  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(
    coalesce(_mock_id::text || _task, _id::text), 0));
  select * into a from public.writing_attempts where id = _id for update;
  if found then
    if a.user_id <> u or a.mock_id is distinct from _mock_id or a.task_type <> _task then raise insufficient_privilege; end if;
    if a.revision <> _expected_revision then
      -- A lost acknowledgement may be retried, without making another version.
      if a.essay_text = _text and a.topic = _topic and (not _finish_mock or a.state = 'finished') then
        return jsonb_build_object('attempt', to_jsonb(a));
      end if;
      return jsonb_build_object('conflict', true, 'attempt', to_jsonb(a));
    end if;
    if a.state <> 'draft' then
      if a.essay_text = _text and a.topic = _topic then return jsonb_build_object('attempt', to_jsonb(a)); end if;
      raise exception 'Writing attempt is locked';
    end if;
  elsif _expected_revision <> 0 then
    raise exception 'Writing draft no longer exists';
  end if;
  if _mock_id is not null then
    select * into m from public.mock_tests where id = _mock_id and user_id = u for update;
    if not found or m.status <> 'in_progress' then raise insufficient_privilege; end if;
    if m.current_step <> (case when _task = 'Task 1' then 'task1' else 'task2' end) then
      raise exception 'Mock Writing step already changed';
    end if;
    if exists (select 1 from public.writing_attempts where mock_id = _mock_id and task_type = _task and id <> _id) then
      select * into a from public.writing_attempts where mock_id = _mock_id and task_type = _task;
      return jsonb_build_object('conflict', true, 'attempt', to_jsonb(a));
    end if;
  else
    select * into e from public.essays where id = _id for update;
    if found and (e.user_id <> u or e.status not in ('draft','failed')) then raise insufficient_privilege; end if;
    if _finish_mock then raise exception 'Not a mock attempt'; end if;
  end if;
  words := cardinality(regexp_split_to_array(btrim(_text), E'\\s+'));
  if _finish_mock and words < 20 then raise exception 'At least 20 words required'; end if;
  -- Once saved, the timer can only stay unchanged, never restart on refresh.
  started := coalesce(a.started_at, least(_started_at, now()));
  deadline := coalesce(a.deadline_at, least(_deadline_at,
    started + case when _task = 'Task 1' then interval '20 minutes' else interval '40 minutes' end));
  insert into public.writing_attempts(id,user_id,mock_id,task_type,topic,essay_text,started_at,deadline_at)
    values (_id,u,_mock_id,_task,_topic,_text,started,deadline)
    on conflict (id) do update set topic=excluded.topic, essay_text=excluded.essay_text,
      started_at=excluded.started_at, deadline_at=excluded.deadline_at,
      revision=public.writing_attempts.revision+1, updated_at=now()
    returning * into a;
  perform set_config('scorify.writing_rpc', '1', true);
  if _mock_id is null then
    insert into public.essays(id,user_id,task_type,topic,essay_text,word_count,status)
      values (_id,u,_task,_topic,_text,words,'draft')
      on conflict (id) do update set topic=excluded.topic, essay_text=excluded.essay_text,
        word_count=excluded.word_count, status='draft', error_message=null;
  else
    next_step := case when _task = 'Task 1' then 'task2' else 'speaking_p1' end;
    update public.mock_tests set
      task1_essay=case when _task='Task 1' then _text else task1_essay end,
      task2_essay=case when _task='Task 2' then _text else task2_essay end,
      task1_word_count=case when _task='Task 1' then words else task1_word_count end,
      task2_word_count=case when _task='Task 2' then words else task2_word_count end,
      current_step=case when _finish_mock then next_step else current_step end
      where id=_mock_id and user_id=u;
    if _finish_mock then
      update public.writing_attempts set state='finished' where id=_id returning * into a;
    end if;
  end if;
  return jsonb_build_object('attempt', to_jsonb(a));
end; $$;
revoke all on function public.save_writing_attempt(uuid,uuid,text,text,text,timestamptz,timestamptz,integer,boolean) from public,anon,authenticated;
grant execute on function public.save_writing_attempt(uuid,uuid,text,text,text,timestamptz,timestamptz,integer,boolean) to authenticated;

create function public.discard_writing_attempt(_id uuid) returns void
language plpgsql security definer set search_path = '' as $$
declare a public.writing_attempts%rowtype;
begin
  if auth.uid() is null then raise insufficient_privilege; end if;
  perform pg_catalog.pg_advisory_xact_lock(pg_catalog.hashtextextended(_id::text, 0));
  select * into a from public.writing_attempts where id=_id for update;
  if found then
    if a.user_id <> auth.uid() or a.state <> 'draft' or a.mock_id is not null then raise insufficient_privilege; end if;
    perform set_config('scorify.writing_rpc', '1', true);
    delete from public.essays where id=_id and user_id=auth.uid() and status in ('draft','failed');
    delete from public.writing_attempts where id=_id;
  else
    delete from public.essays where id=_id and user_id=auth.uid() and status='draft';
  end if;
end; $$;
revoke all on function public.discard_writing_attempt(uuid) from public,anon,authenticated;
grant execute on function public.discard_writing_attempt(uuid) to authenticated;

-- Atomic reservation + existing plan quota; retries never reserve twice.
create function public.claim_writing_grade(_id uuid, _user_id uuid, _token uuid)
returns jsonb language plpgsql security definer set search_path = '' as $$
declare a public.writing_attempts%rowtype; q jsonb; words integer;
begin
  select * into a from public.writing_attempts where id=_id and user_id=_user_id and mock_id is null for update;
  if not found then return jsonb_build_object('state','missing'); end if;
  if a.state <> 'draft' then return jsonb_build_object('state',a.state,'result',a.result); end if;
  words := cardinality(regexp_split_to_array(btrim(a.essay_text), E'\\s+'));
  if words < (case when a.task_type='Task 1' then 150 else 250 end) then
    return jsonb_build_object('state','too_short');
  end if;
  q := public.consume_quota(_user_id,'writing');
  if not (q->>'allowed')::boolean then return jsonb_build_object('state','quota','quota',q); end if;
  update public.writing_attempts set state='grading',claim_token=_token,quota=q,updated_at=now() where id=_id;
  update public.essays set status='processing',error_message=null where id=_id and user_id=_user_id;
  return jsonb_build_object('state','claimed','attempt',to_jsonb(a),'quota',q);
end; $$;
revoke all on function public.claim_writing_grade(uuid,uuid,uuid) from public,anon,authenticated;
grant execute on function public.claim_writing_grade(uuid,uuid,uuid) to service_role;

create function public.finish_writing_grade(_id uuid,_user_id uuid,_token uuid,_result jsonb,_failure text default null)
returns void language plpgsql security definer set search_path = '' as $$
declare a public.writing_attempts%rowtype;
begin
  select * into a from public.writing_attempts where id=_id and user_id=_user_id for update;
  if not found then raise insufficient_privilege; end if;
  if a.state='draft' and a.claim_token is null and _failure='rejected' then return; end if;
  if a.claim_token is distinct from _token then raise insufficient_privilege; end if;
  if a.state='completed' then return; end if;
  if a.state <> 'grading' then return; end if;
  if _result is not null then
    update public.essays set status='completed',score=(_result->>'overallBand')::numeric,
      feedback=_result,error_message=null where id=_id and user_id=_user_id;
    update public.writing_attempts set state='completed',result=_result,updated_at=now() where id=_id;
  elsif _failure = 'rejected' then
    -- Only a definitive provider rejection, before any completion, is retryable.
    perform public.refund_quota(_user_id,'writing');
    update public.writing_attempts set state='draft',claim_token=null,quota=null,updated_at=now() where id=_id;
    update public.essays set status='failed',error_message='Provider rejected request; retry available' where id=_id and user_id=_user_id;
  else
    -- Timeout/crash/invalid paid response is ambiguous. Do not call AI or charge again.
    update public.writing_attempts set state='review_required',updated_at=now() where id=_id;
    update public.essays set status='failed',error_message='Grading requires support review; text preserved' where id=_id and user_id=_user_id;
  end if;
end; $$;
revoke all on function public.finish_writing_grade(uuid,uuid,uuid,jsonb,text) from public,anon,authenticated;
grant execute on function public.finish_writing_grade(uuid,uuid,uuid,jsonb,text) to service_role;

-- Prevent older browser builds from changing a reserved new-style essay directly.
-- This is scoped to new attempts, with no changes to historical essays/results.
create function public.guard_writing_attempt_essay() returns trigger
language plpgsql security definer set search_path = '' as $$
begin
  if coalesce(auth.jwt()->>'role','') <> 'service_role'
    and coalesce(current_setting('scorify.writing_rpc',true),'') <> '1'
    and exists(select 1 from public.writing_attempts where id=old.id) then
    raise insufficient_privilege using message='Use the Writing save API';
  end if;
  return case when tg_op='DELETE' then old else new end;
end; $$;
revoke all on function public.guard_writing_attempt_essay() from public,anon,authenticated;
create trigger guard_writing_attempt_essay before update or delete on public.essays
  for each row execute function public.guard_writing_attempt_essay();
