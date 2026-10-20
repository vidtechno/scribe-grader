-- Pin the search_path of the device limit helper (Supabase linter 0011). It is a constant, so behaviour does not change.
create or replace function public.device_max()
returns integer
language sql
immutable
set search_path = ''
as $fn$ select 2 $fn$;
