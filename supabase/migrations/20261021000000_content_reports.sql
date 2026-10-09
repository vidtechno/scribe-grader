-- "Xato topdim": learners report a mistake in a lesson or exercise; admins see and close the reports.
create table if not exists public.learning_content_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  lesson_id text,
  page text,
  exercise jsonb,
  note text,
  status text not null default 'open' check (status in ('open', 'fixed', 'dismissed')),
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);
alter table public.learning_content_reports enable row level security;
create index if not exists learning_content_reports_status_idx on public.learning_content_reports (status, created_at desc);

create or replace function public.learning_report_content(_page text, _exercise jsonb, _note text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare uid uuid := auth.uid(); lesson text;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if (select count(*) from public.learning_content_reports where user_id = uid and created_at > now() - interval '1 day') >= 20 then
    raise exception 'too_many_reports';
  end if;
  lesson := substring(coalesce(_page, '') from 'lesson/(u[0-9]{1,2}-l[0-9]{1,2})');
  insert into public.learning_content_reports(user_id, lesson_id, page, exercise, note)
  values (uid, lesson, left(_page, 200), case when length(_exercise::text) <= 4000 then _exercise end, nullif(left(trim(coalesce(_note, '')), 500), ''));
  return jsonb_build_object('ok', true);
end; $$;

create or replace function public.admin_content_reports(_status text default 'open')
returns jsonb language plpgsql security definer set search_path=public as $$
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'admin_only'; end if;
  return jsonb_build_object(
    'open', (select count(*) from public.learning_content_reports where status = 'open'),
    'rows', coalesce((select jsonb_agg(r order by r.created_at desc) from (
      select c.id, c.lesson_id, c.page, c.exercise, c.note, c.status, c.created_at,
             (select email from auth.users u where u.id = c.user_id) as email
        from public.learning_content_reports c
       where _status = 'all' or c.status = _status
       order by c.created_at desc limit 100) r), '[]'::jsonb));
end; $$;

create or replace function public.admin_content_report_resolve(_id uuid, _status text)
returns void language plpgsql security definer set search_path=public as $$
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'admin_only'; end if;
  if _status not in ('open', 'fixed', 'dismissed') then raise exception 'invalid_status'; end if;
  update public.learning_content_reports set status = _status, resolved_at = case when _status = 'open' then null else now() end where id = _id;
end; $$;

do $$ declare f text; begin
  foreach f in array array[
    'public.learning_report_content(text,jsonb,text)', 'public.admin_content_reports(text)', 'public.admin_content_report_resolve(uuid,text)'
  ] loop
    execute format('revoke all on function %s from public, anon', f);
    execute format('grant execute on function %s to authenticated, service_role', f);
  end loop;
end $$;
