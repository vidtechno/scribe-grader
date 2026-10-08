-- The bot no longer sends the "daily grammar test" reminder. Study reminders (learn_reminder) are the only practice nudge.
do $$ begin
  if exists(select 1 from pg_extension where extname = 'pg_cron') then
    begin perform cron.unschedule('telegram-daily-test'); exception when others then null; end;
  end if;
end $$;

-- Anything still waiting in the queue is dropped (kept as skipped, not deleted).
update public.telegram_outbox set status = 'skipped', last_error = 'daily test reminder removed'
where kind = 'daily_test_reminder' and status in ('pending', 'sending');

-- The function stays callable (the admin button and old crons) but queues nothing.
create or replace function public.telegram_enqueue_daily_test_reminders(_window_minutes int default 120)
returns int language sql security definer set search_path=public as $$ select 0 $$;
