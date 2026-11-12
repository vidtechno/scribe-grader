-- Public certificate check: anyone with a certificate number can see that it is real and what it says
-- (the same details the printed certificate shows). Used by scorify.uz/certificate/<number>.
create or replace function public.certificate_verify(_number text)
returns jsonb language plpgsql stable security definer set search_path = public as $fn$
declare c public.learning_certificates%rowtype; n text := upper(trim(coalesce(_number, '')));
begin
  if n !~ '^SC-[A-Z0-9]{2,3}-[A-HJ-NP-Z2-9]{8}$' then return jsonb_build_object('valid', false); end if;
  select * into c from public.learning_certificates where number = n;
  if not found then return jsonb_build_object('valid', false); end if;
  return jsonb_build_object('valid', true, 'number', c.number, 'level_id', c.level_id, 'full_name', c.full_name, 'percent', c.percent,
    'passed_at', c.passed_at, 'issued_at', c.issued_at);
end; $fn$;
revoke all on function public.certificate_verify(text) from public;
grant execute on function public.certificate_verify(text) to anon, authenticated;
