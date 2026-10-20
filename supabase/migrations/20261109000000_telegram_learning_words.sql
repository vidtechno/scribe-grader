-- Words for the study reminders: the learner's own words that need practice today (due first, shakiest first).
-- Called only by the bot with the service role; ordinary users cannot execute it.
create or replace function public.telegram_learning_words(_user uuid, _limit integer default 3)
returns jsonb
language sql
stable
security definer
set search_path = public
as $fn$
  select coalesce(jsonb_agg(jsonb_build_object('en', w.en, 'uz', w.uz, 'ex', w.ex) order by w.rn), '[]'::jsonb)
  from (
    select m.en, m.uz, m.ex, row_number() over (
      order by (m.due_at <= now()) desc, m.box asc, m.due_at asc
    ) as rn
    from public.learning_word_mastery m
    where m.user_id = _user and m.introduced and char_length(m.en) between 1 and 60 and char_length(m.uz) > 0
    order by (m.due_at <= now()) desc, m.box asc, m.due_at asc
    limit greatest(1, least(coalesce(_limit, 3), 5))
  ) w;
$fn$;

revoke all on function public.telegram_learning_words(uuid, integer) from public, anon, authenticated;
grant execute on function public.telegram_learning_words(uuid, integer) to service_role;
