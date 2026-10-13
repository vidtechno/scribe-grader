-- Security and load hardening. Every statement keeps the behaviour of the app; it only closes doors and trims work.

-- 1) Functions that must not be called straight from the API.
--    admin_assign_plan only wraps admin_set_subscription (which checks the admin role); nothing in the app calls it.
revoke execute on function public.admin_assign_plan(uuid, text) from public, anon, authenticated;
--    Trigger functions run as the table owner's trigger; no API caller needs EXECUTE.
revoke execute on function public.ref_on_lesson_done() from public, anon, authenticated;
revoke execute on function public.ref_on_paid_plan() from public, anon, authenticated;

-- 2) Fixed search_path for the four functions the linter flagged.
alter function public.blog_touch_updated_at() set search_path = public;
alter function public.learning_box_interval(int) set search_path = public;
alter function public.ref_reward_amount() set search_path = public;
alter function public.ref_min_withdraw() set search_path = public;

-- 3) Row-level-security policies evaluate auth.uid() once per query instead of once per row.
--    Only policies that use the bare call are rewritten; the rule itself does not change.
do $$
declare p record; q text; w text; stmt text;
begin
  for p in
    select schemaname, tablename, policyname, qual, with_check from pg_policies
    where schemaname = 'public'
      and (coalesce(qual, '') ~ 'auth\.uid\(\)' or coalesce(with_check, '') ~ 'auth\.uid\(\)')
      and coalesce(qual, '') !~* 'select auth\.uid' and coalesce(with_check, '') !~* 'select auth\.uid'
  loop
    q := case when p.qual is null then null else regexp_replace(p.qual, 'auth\.uid\(\)', '(select auth.uid())', 'g') end;
    w := case when p.with_check is null then null else regexp_replace(p.with_check, 'auth\.uid\(\)', '(select auth.uid())', 'g') end;
    stmt := format('alter policy %I on %I.%I', p.policyname, p.schemaname, p.tablename)
      || coalesce(' using (' || q || ')', '') || coalesce(' with check (' || w || ')', '');
    execute stmt;
  end loop;
end $$;

-- 4) Indexes for foreign keys that had none.
create index if not exists ai_usage_events_user_id_idx on public.ai_usage_events (user_id);
create index if not exists essay_comments_user_id_idx on public.essay_comments (user_id);
create index if not exists essays_user_id_idx on public.essays (user_id);
create index if not exists learning_content_reports_user_id_idx on public.learning_content_reports (user_id);
create index if not exists mentor_messages_chat_id_idx on public.mentor_messages (chat_id);
create index if not exists referrals_cycle_id_idx on public.referrals (cycle_id);
create index if not exists telegram_auth_requests_user_id_idx on public.telegram_auth_requests (user_id);
