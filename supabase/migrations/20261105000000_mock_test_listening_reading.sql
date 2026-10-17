-- Full mock tests now start with IELTS Listening and Reading (scored in the browser, like the practice tests), then Writing and Speaking.
-- The IELTS plan allows 6 mock tests a month (was 3).
alter table public.mock_tests
  add column if not exists listening_test_id text,
  add column if not exists listening_correct int,
  add column if not exists listening_total int,
  add column if not exists listening_band numeric(2,1),
  add column if not exists listening_by_kind jsonb,
  add column if not exists reading_test_id text,
  add column if not exists reading_correct int,
  add column if not exists reading_total int,
  add column if not exists reading_band numeric(2,1),
  add column if not exists reading_by_kind jsonb;

-- Saves one finished section into the signed-in user's in-progress mock test and moves to the next step.
create or replace function public.mock_save_section(_mock uuid, _skill text, _test_id text, _correct int, _total int, _band numeric, _by_kind jsonb default '{}'::jsonb)
returns text language plpgsql security definer set search_path = public as $$
declare uid uuid := auth.uid(); mt public.mock_tests%rowtype;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  if _skill not in ('listening', 'reading') or _total < 1 or _total > 40 or _correct < 0 or _correct > _total or _band < 0 or _band > 9 then raise exception 'bad_input'; end if;
  select * into mt from public.mock_tests where id = _mock and user_id = uid and status = 'in_progress' for update;
  if not found then raise exception 'mock_not_found'; end if;
  if mt.current_step <> _skill then raise exception 'wrong_step'; end if;
  if _skill = 'listening' then
    if mt.listening_test_id is distinct from _test_id then raise exception 'wrong_test'; end if;
    update public.mock_tests set listening_correct = _correct, listening_total = _total, listening_band = _band, listening_by_kind = coalesce(_by_kind, '{}'::jsonb), current_step = 'reading' where id = _mock;
    return 'reading';
  end if;
  if mt.reading_test_id is distinct from _test_id then raise exception 'wrong_test'; end if;
  update public.mock_tests set reading_correct = _correct, reading_total = _total, reading_band = _band, reading_by_kind = coalesce(_by_kind, '{}'::jsonb), current_step = 'task1' where id = _mock;
  return 'task1';
end; $$;
revoke all on function public.mock_save_section(uuid, text, text, int, int, numeric, jsonb) from public, anon;
grant execute on function public.mock_save_section(uuid, text, text, int, int, numeric, jsonb) to authenticated;

update public.subscription_plans set mock_test_limit = 6 where slug = 'plus';
update public.subscriptions set mock_test_limit = 6 where plan_type = 'plus' and mock_test_limit = 3;
