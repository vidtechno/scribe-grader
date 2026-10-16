-- Log ingestion on the Free plan is limited to 1 GB a month. Every cron run writes two log lines, and the Telegram retry job ran
-- every minute (about 2 900 lines a day). Instant Telegram delivery does not depend on it (pg_net kicks the bot when a message is queued);
-- the job only retries failures and delivers messages scheduled for later, so every 5 minutes is plenty.
do $$
declare r record;
begin
  if exists (select 1 from pg_extension where extname = 'pg_cron') then
    for r in select jobid, jobname from cron.job where jobname in ('telegram-outbox-retry', 'telegram-blog-posts') loop
      perform cron.alter_job(r.jobid, schedule := case r.jobname when 'telegram-outbox-retry' then '*/5 * * * *' else '*/30 * * * *' end);
    end loop;
  end if;
exception when others then
  raise warning 'cron schedule change skipped: %', sqlerrm;
end $$;
