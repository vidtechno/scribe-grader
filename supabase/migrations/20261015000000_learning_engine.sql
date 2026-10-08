-- Scorify Learning Engine: spaced repetition for vocabulary and grammar, a mistake notebook, and a dynamic number of
-- new words per lesson. The lesson content is untouched; this decides what comes back, when and how often.
--
-- exposure = the learner met the item (read, heard, saw it in a sentence).
-- mastery  = the learner recalled it correctly (boxes 0-6, each box a longer wait before the next review).
-- Nothing here decays: XP, boxes and counters stay however long the learner is away.

-- ============================================================
-- 1. Tables
-- ============================================================
create table if not exists public.learning_word_mastery (
  user_id uuid not null references auth.users(id) on delete cascade,
  word text not null check (char_length(word) between 1 and 60),
  en text not null check (char_length(en) between 1 and 60),
  uz text not null default '' check (char_length(uz) <= 120),
  ex text check (ex is null or char_length(ex) <= 200),
  ex_uz text check (ex_uz is null or char_length(ex_uz) <= 200),
  lesson_id text,
  -- false = only seen (exposure), true = the learner was introduced to it as a new word
  introduced boolean not null default false,
  exposures int not null default 0,
  attempts int not null default 0,
  correct int not null default 0,
  lapses int not null default 0,
  streak smallint not null default 0,
  box smallint not null default 0 check (box between 0 and 6),
  due_at timestamptz not null default now(),
  first_seen_at timestamptz not null default now(),
  last_seen_at timestamptz not null default now(),
  last_practiced_at timestamptz,
  last_result text,
  updated_at timestamptz not null default now(),
  primary key (user_id, word)
);
create index if not exists learning_word_mastery_due_idx on public.learning_word_mastery (user_id, due_at);

create table if not exists public.learning_grammar_mastery (
  user_id uuid not null references auth.users(id) on delete cascade,
  topic text not null check (topic ~ '^u[0-9]{1,2}-l[0-9]{1,2}$'),
  title text not null default '' check (char_length(title) <= 120),
  exposures int not null default 0,
  attempts int not null default 0,
  correct int not null default 0,
  lapses int not null default 0,
  box smallint not null default 0 check (box between 0 and 6),
  due_at timestamptz not null default now(),
  last_practiced_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, topic)
);
create index if not exists learning_grammar_mastery_due_idx on public.learning_grammar_mastery (user_id, due_at);

create table if not exists public.learning_mistakes (
  user_id uuid not null references auth.users(id) on delete cascade,
  ex_key text not null check (char_length(ex_key) between 3 and 60),
  lesson_id text not null check (lesson_id ~ '^u[0-9]{1,2}-l[0-9]{1,2}$'),
  -- the exercise itself, so it can come back without loading the lesson
  payload jsonb not null,
  wrong_count int not null default 1,
  right_streak smallint not null default 0,
  last_wrong_at timestamptz not null default now(),
  due_at timestamptz not null default now(),
  resolved_at timestamptz,
  updated_at timestamptz not null default now(),
  primary key (user_id, ex_key)
);
create index if not exists learning_mistakes_open_idx on public.learning_mistakes (user_id, due_at) where resolved_at is null;

do $$
declare t text;
begin
  foreach t in array array['learning_word_mastery', 'learning_grammar_mastery', 'learning_mistakes'] loop
    execute format('alter table public.%I enable row level security', t);
    if not exists(select 1 from pg_policies where schemaname = 'public' and tablename = t and policyname = 'Own rows') then
      execute format('create policy "Own rows" on public.%I for select to authenticated using (user_id = auth.uid())', t);
    end if;
    execute format('revoke all on public.%I from anon, authenticated', t);
    execute format('grant select on public.%I to authenticated', t);
    execute format('grant all on public.%I to service_role', t);
  end loop;
end $$;

-- ============================================================
-- 2. Scheduling
-- ============================================================
-- Wait before the next review for each box: 0 = back in the next session, then 1, 2, 4, 8, 16, 32 days.
create or replace function public.learning_box_interval(_box int)
returns interval language sql immutable as $$
  select case greatest(0, least(coalesce(_box, 0), 6))
    when 0 then interval '30 minutes' when 1 then interval '1 day' when 2 then interval '2 days' when 3 then interval '4 days'
    when 4 then interval '8 days' when 5 then interval '16 days' else interval '32 days' end
$$;

-- How many words of a lesson are taught as new: 6 by default, 7-8 for learners who are doing well and have little to
-- review, 5-4 for learners who struggle or have a lot waiting for review.
create or replace function public.learning_new_word_target(_user uuid)
returns int language plpgsql stable security definer set search_path=public as $$
declare ok_n numeric; all_n numeric; acc numeric; due_n int; n int := 6;
begin
  select coalesce(sum(a.correct), 0), coalesce(sum(a.answered), 0) into ok_n, all_n
  from public.learning_daily_activity a where a.user_id = _user and a.day >= public.learning_today() - 6;
  select count(*) into due_n from public.learning_word_mastery m where m.user_id = _user and m.introduced and m.due_at <= now();
  if all_n >= 10 then
    acc := ok_n / all_n;
    if acc >= 0.9 and due_n <= 6 then n := 7; end if;
    if acc >= 0.95 and due_n <= 3 then n := 8; end if;
    if acc < 0.75 then n := 5; end if;
    if acc < 0.6 then n := 4; end if;
  end if;
  if due_n > 12 then n := least(n, 5); end if;
  if due_n > 20 then n := 4; end if;
  return n;
end; $$;

-- ============================================================
-- 3. Recording what happened
-- ============================================================
-- Events (at most 150 per call):
--   {t:'w', word, en, uz, ex, ex_uz, lesson, r:'seen'|'intro'|'right'|'wrong'}
--   {t:'g', topic, title, right, wrong}
--   {t:'m', key, lesson, payload, r:'right'|'wrong'}
create or replace function public.learning_record_review(_events jsonb, _award boolean default false)
returns jsonb language plpgsql security definer set search_path=public as $$
declare
  uid uuid := auth.uid(); e jsonb; kind text; res text; w text; n int := 0; rights int := 0; answered int := 0;
  rt int; wr int; b int; xp int := 0; act jsonb := '{}'::jsonb; cur record;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  perform public.learning_require_access(uid);
  if jsonb_typeof(_events) <> 'array' or jsonb_array_length(_events) > 150 then raise exception 'invalid_events'; end if;

  for e in select * from jsonb_array_elements(_events) loop
    kind := e->>'t'; res := e->>'r';
    if kind = 'w' then
      w := lower(btrim(coalesce(e->>'word', e->>'en', '')));
      if char_length(w) not between 1 and 60 or char_length(coalesce(e->>'en', w)) > 60 then continue; end if;
      if res not in ('seen', 'intro', 'right', 'wrong') then continue; end if;
      insert into public.learning_word_mastery(user_id, word, en, uz, ex, ex_uz, lesson_id, due_at)
      values (uid, w, left(coalesce(e->>'en', w), 60), left(coalesce(e->>'uz', ''), 120), left(e->>'ex', 200), left(e->>'ex_uz', 200),
              case when (e->>'lesson') ~ '^u[0-9]{1,2}-l[0-9]{1,2}$' then e->>'lesson' end,
              now() + interval '1 day')
      on conflict (user_id, word) do nothing;
      select * into cur from public.learning_word_mastery where user_id = uid and word = w for update;
      -- fill in the text of rows that were created without it
      update public.learning_word_mastery set
        uz = case when uz = '' then left(coalesce(e->>'uz', ''), 120) else uz end,
        ex = coalesce(ex, left(e->>'ex', 200)), ex_uz = coalesce(ex_uz, left(e->>'ex_uz', 200)),
        lesson_id = coalesce(lesson_id, case when (e->>'lesson') ~ '^u[0-9]{1,2}-l[0-9]{1,2}$' then e->>'lesson' end)
      where user_id = uid and word = w;
      if res = 'seen' then
        update public.learning_word_mastery set exposures = exposures + 1, last_seen_at = now(), updated_at = now()
        where user_id = uid and word = w;
      elsif res = 'intro' then
        update public.learning_word_mastery set introduced = true, exposures = exposures + 1, last_seen_at = now(), updated_at = now(),
          due_at = case when attempts = 0 then now() + interval '1 day' else due_at end
        where user_id = uid and word = w;
      elsif res = 'right' then
        b := least(6, cur.box + 1);
        update public.learning_word_mastery set introduced = true, attempts = attempts + 1, correct = correct + 1, streak = least(streak + 1, 100),
          box = b, due_at = now() + public.learning_box_interval(b), last_practiced_at = now(), last_seen_at = now(),
          exposures = exposures + 1, last_result = 'right', updated_at = now()
        where user_id = uid and word = w;
        rights := rights + 1; answered := answered + 1;
      else
        b := case when cur.box >= 3 then cur.box - 2 else 0 end;
        update public.learning_word_mastery set introduced = true, attempts = attempts + 1, lapses = lapses + 1, streak = 0,
          box = b, due_at = now() + public.learning_box_interval(0), last_practiced_at = now(), last_seen_at = now(),
          exposures = exposures + 1, last_result = 'wrong', updated_at = now()
        where user_id = uid and word = w;
        answered := answered + 1;
      end if;
      n := n + 1;

    elsif kind = 'g' then
      if (e->>'topic') !~ '^u[0-9]{1,2}-l[0-9]{1,2}$' then continue; end if;
      rt := least(greatest(coalesce((e->>'right')::int, 0), 0), 40); wr := least(greatest(coalesce((e->>'wrong')::int, 0), 0), 40);
      insert into public.learning_grammar_mastery(user_id, topic, title) values (uid, e->>'topic', left(coalesce(e->>'title', ''), 120))
      on conflict (user_id, topic) do nothing;
      select * into cur from public.learning_grammar_mastery where user_id = uid and topic = e->>'topic' for update;
      if rt + wr = 0 then
        update public.learning_grammar_mastery set exposures = exposures + 1, updated_at = now() where user_id = uid and topic = e->>'topic';
      else
        -- a clean run moves the topic up a box; many mistakes move it down
        b := case when wr = 0 then least(6, cur.box + 1)
                  when wr::numeric / (rt + wr) > 0.34 then greatest(0, cur.box - 1) else cur.box end;
        update public.learning_grammar_mastery set exposures = exposures + 1, attempts = attempts + rt + wr, correct = correct + rt,
          lapses = lapses + case when wr::numeric / (rt + wr) > 0.34 then 1 else 0 end, box = b,
          due_at = now() + public.learning_box_interval(case when wr > 0 then 1 else b end),
          last_practiced_at = now(), title = case when title = '' then left(coalesce(e->>'title', ''), 120) else title end, updated_at = now()
        where user_id = uid and topic = e->>'topic';
        rights := rights + rt; answered := answered + rt + wr;
      end if;
      n := n + 1;

    elsif kind = 'm' then
      if (e->>'lesson') !~ '^u[0-9]{1,2}-l[0-9]{1,2}$' or char_length(coalesce(e->>'key', '')) not between 3 and 60 then continue; end if;
      if res not in ('right', 'wrong') then continue; end if;
      if res = 'wrong' then
        if length((e->'payload')::text) > 4000 then continue; end if;
        insert into public.learning_mistakes(user_id, ex_key, lesson_id, payload, due_at)
        values (uid, e->>'key', e->>'lesson', e->'payload', now() + interval '1 day')
        on conflict (user_id, ex_key) do update set wrong_count = learning_mistakes.wrong_count + 1, right_streak = 0,
          resolved_at = null, last_wrong_at = now(), due_at = now() + interval '1 day', updated_at = now();
        answered := answered + 1;
      else
        -- two correct answers in a row close a mistake; a correct answer to something never missed is ignored
        update public.learning_mistakes set right_streak = right_streak + 1,
          resolved_at = case when right_streak + 1 >= 2 then now() end,
          due_at = now() + make_interval(days => 2 * (right_streak + 1)), updated_at = now()
        where user_id = uid and ex_key = e->>'key' and resolved_at is null;
        rights := rights + 1; answered := answered + 1;
      end if;
      n := n + 1;
    end if;
  end loop;

  if _award and answered > 0 then
    xp := least(rights, 10);
    act := public.learning_record_activity(uid, xp, 0, 0, rights, answered);
  end if;
  return jsonb_build_object('recorded', n, 'xp', coalesce((act->>'xp')::int, 0)) || (act - 'xp');
end; $$;

-- ============================================================
-- 4. What is waiting for the learner
-- ============================================================
create or replace function public.learning_review_queue()
returns jsonb language plpgsql stable security definer set search_path=public as $$
declare uid uuid := auth.uid(); result jsonb;
begin
  if uid is null then raise exception 'not_authenticated'; end if;
  select jsonb_build_object(
    'new_target', public.learning_new_word_target(uid),
    -- introduced words first (the most overdue and the shakiest), then words that were only seen
    'words', coalesce((select jsonb_agg(to_jsonb(x) order by x.ord) from (
        select m.word, m.en, m.uz, m.ex, m.ex_uz, m.lesson_id, m.box, m.lapses, m.introduced,
               row_number() over (order by m.introduced desc, m.due_at asc, m.lapses desc) as ord
        from public.learning_word_mastery m where m.user_id = uid and m.due_at <= now()
        order by m.introduced desc, m.due_at asc, m.lapses desc limit 16) x), '[]'::jsonb),
    'grammar', coalesce((select jsonb_agg(to_jsonb(g)) from (
        select topic, title, box from public.learning_grammar_mastery
        where user_id = uid and due_at <= now() and (attempts = 0 or correct::numeric / attempts < 0.9)
        order by due_at asc limit 3) g), '[]'::jsonb),
    'mistakes', coalesce((select jsonb_agg(to_jsonb(k)) from (
        select ex_key as key, lesson_id as lesson, payload, wrong_count from public.learning_mistakes
        where user_id = uid and resolved_at is null and due_at <= now() order by due_at asc limit 6) k), '[]'::jsonb),
    -- every word the learner has met, with its box: lets the lesson page tell new words from known ones
    'known', coalesce((select jsonb_agg(jsonb_build_array(word, box, introduced)) from (
        select word, box, introduced from public.learning_word_mastery where user_id = uid order by last_seen_at desc limit 1500) kw), '[]'::jsonb),
    'stats', jsonb_build_object(
      'mastered', (select count(*) from public.learning_word_mastery where user_id = uid and introduced and box >= 5),
      'learning', (select count(*) from public.learning_word_mastery where user_id = uid and introduced and box between 1 and 4),
      'new', (select count(*) from public.learning_word_mastery where user_id = uid and introduced and box = 0),
      'seen', (select count(*) from public.learning_word_mastery where user_id = uid and not introduced),
      'due', (select count(*) from public.learning_word_mastery where user_id = uid and due_at <= now()),
      'mistakes', (select count(*) from public.learning_mistakes where user_id = uid and resolved_at is null),
      'grammar_weak', (select count(*) from public.learning_grammar_mastery where user_id = uid and attempts > 0 and correct::numeric / attempts < 0.8)))
  into result;
  return result;
end; $$;

do $$
declare f text;
begin
  foreach f in array array['public.learning_record_review(jsonb,boolean)', 'public.learning_review_queue()'] loop
    execute format('revoke all on function %s from public, anon', f);
    execute format('grant execute on function %s to authenticated, service_role', f);
  end loop;
  foreach f in array array['public.learning_new_word_target(uuid)', 'public.learning_box_interval(int)'] loop
    execute format('revoke all on function %s from public, anon, authenticated', f);
    execute format('grant execute on function %s to service_role', f);
  end loop;
end $$;
