-- Level completion certificates. The number is issued by the server (random, unique, never reused) only to learners who
-- passed that level's final test, so a number printed on an image can be looked up and checked in the admin panel.
create table if not exists public.learning_certificates (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  level_id text not null,
  number text not null unique,
  full_name text not null,
  percent int,
  passed_at timestamptz,
  issued_at timestamptz not null default now(),
  renamed_at timestamptz,
  unique (user_id, level_id)
);
alter table public.learning_certificates enable row level security;  -- no policies: read and written through the functions below

create or replace function public.learning_issue_certificate(_level text, _name text)
returns jsonb language plpgsql security definer set search_path=public as $$
declare
  uid uuid := auth.uid(); t public.learning_level_tests%rowtype; c public.learning_certificates%rowtype;
  clean text := regexp_replace(trim(coalesce(_name, '')), '\s+', ' ', 'g');
  alphabet constant text := 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; num text; tries int := 0;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if _level !~ '^[a-z0-9]{2,12}$' then raise exception 'invalid_level'; end if;
  if length(clean) < 5 or length(clean) > 48 or clean !~ '\S+\s+\S+' then raise exception 'invalid_name'; end if;
  select * into t from public.learning_level_tests where user_id = uid and level_id = _level;
  if not found or t.passed_at is null then raise exception 'level_not_passed'; end if;
  select * into c from public.learning_certificates where user_id = uid and level_id = _level for update;
  if found then
    if c.full_name <> clean then
      update public.learning_certificates set full_name = clean, renamed_at = now() where id = c.id returning * into c;
    end if;
  else
    loop
      num := 'SC-' || upper(left(_level, 3)) || '-' || (select string_agg(substr(alphabet, 1 + floor(random() * length(alphabet))::int, 1), '') from generate_series(1, 8));
      begin
        insert into public.learning_certificates(user_id, level_id, number, full_name, percent, passed_at)
        values (uid, _level, num, clean, round(t.best_score * 100.0 / greatest(t.best_total, 1))::int, t.passed_at) returning * into c;
        exit;
      exception when unique_violation then
        tries := tries + 1;
        if tries > 8 then raise; end if;
        select * into c from public.learning_certificates where user_id = uid and level_id = _level;
        if found then exit; end if;
      end;
    end loop;
  end if;
  return jsonb_build_object('number', c.number, 'full_name', c.full_name, 'percent', c.percent, 'passed_at', c.passed_at, 'issued_at', c.issued_at);
end; $$;
revoke all on function public.learning_issue_certificate(text, text) from public, anon;
grant execute on function public.learning_issue_certificate(text, text) to authenticated, service_role;

-- Admin: find a certificate by (part of) its number, with the account and all certificates of that account.
create or replace function public.admin_certificate_lookup(_q text)
returns jsonb language plpgsql stable security definer set search_path=public,auth as $$
declare q text := upper(regexp_replace(coalesce(_q, ''), '[^A-Za-z0-9-]', '', 'g'));
begin
  if not public.has_role(auth.uid(), 'admin'::app_role) then raise exception 'admin_only'; end if;
  if length(q) < 3 then return '[]'::jsonb; end if;
  return coalesce((
    select jsonb_agg(r order by r.issued_at desc) from (
      select c.number, c.level_id, c.full_name, c.percent, c.passed_at, c.issued_at, c.renamed_at,
        u.id as user_id, u.email, p.full_name as profile_name, p.public_id,
        (select coalesce(jsonb_agg(jsonb_build_object('number', o.number, 'level_id', o.level_id, 'full_name', o.full_name,
           'percent', o.percent, 'passed_at', o.passed_at) order by o.passed_at), '[]'::jsonb)
         from public.learning_certificates o where o.user_id = c.user_id) as all_certificates
      from public.learning_certificates c
      join auth.users u on u.id = c.user_id
      left join public.profiles p on p.user_id = c.user_id
      where c.number like '%' || q || '%'
      order by c.issued_at desc limit 10
    ) r), '[]'::jsonb);
end; $$;
revoke all on function public.admin_certificate_lookup(text) from public, anon;
grant execute on function public.admin_certificate_lookup(text) to authenticated, service_role;
