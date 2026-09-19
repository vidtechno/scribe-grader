create table if not exists public.ai_usage_events (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete set null,
  feature text not null check (feature in ('writing','speaking','transcription','mock_writing','mock_speaking','mock_transcription','teacher_generation','teacher_grading','daily_grammar','ai_mentor')),
  model text not null,
  input_tokens bigint not null default 0 check (input_tokens >= 0),
  output_tokens bigint not null default 0 check (output_tokens >= 0),
  audio_seconds numeric(12,3) not null default 0 check (audio_seconds >= 0),
  cost_usd numeric(14,8) not null default 0 check (cost_usd >= 0),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists ai_usage_events_created_idx on public.ai_usage_events(created_at desc);
create index if not exists ai_usage_events_feature_idx on public.ai_usage_events(feature, created_at desc);
alter table public.ai_usage_events enable row level security;
revoke all on public.ai_usage_events from anon, authenticated;
grant all on public.ai_usage_events to service_role;
grant select on public.ai_usage_events to authenticated;
drop policy if exists ai_usage_admin_read on public.ai_usage_events;
create policy ai_usage_admin_read on public.ai_usage_events for select to authenticated
  using (public.has_role(auth.uid(), 'admin'::app_role));

create or replace function public.admin_ai_usage_summary()
returns jsonb language plpgsql security definer set search_path=public as $$
declare result jsonb;
begin
  if not public.has_role(auth.uid(),'admin'::app_role) then raise exception 'Only admins can view AI usage'; end if;
  select jsonb_agg(row_to_json(x) order by x.sort_order) into result from (
    select p.label,p.sort_order,
      coalesce(sum(e.input_tokens),0)::bigint as input_tokens,
      coalesce(sum(e.output_tokens),0)::bigint as output_tokens,
      round(coalesce(sum(e.audio_seconds),0)::numeric,1) as audio_seconds,
      round(coalesce(sum(e.cost_usd),0)::numeric,6) as cost_usd,
      count(e.id)::bigint as requests
    from (values ('Today',1,now()-interval '1 day'),('7 days',2,now()-interval '7 days'),
      ('30 days',3,now()-interval '30 days'),('All time',4,null::timestamptz)) p(label,sort_order,since)
    left join public.ai_usage_events e on p.since is null or e.created_at>=p.since
    group by p.label,p.sort_order
  ) x;
  return coalesce(result,'[]'::jsonb);
end; $$;
revoke all on function public.admin_ai_usage_summary() from public,anon;
grant execute on function public.admin_ai_usage_summary() to authenticated;

create or replace function public.teacher_delete_test(p_test uuid, p_teacher uuid)
returns boolean language plpgsql security definer set search_path=public as $$
begin
  if not exists(select 1 from public.teacher_tests where id=p_test and teacher_id=p_teacher) then return false; end if;
  delete from public.teacher_usage_events u using public.teacher_attempts a
    where u.attempt_id=a.id and a.test_id=p_test;
  delete from public.teacher_tests where id=p_test and teacher_id=p_teacher;
  return found;
end; $$;
revoke all on function public.teacher_delete_test(uuid,uuid) from public,anon,authenticated;
grant execute on function public.teacher_delete_test(uuid,uuid) to service_role;
