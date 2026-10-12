-- A lesson now finishes at 50% first-try accuracy over its practice and quick check (mastery is tested after the topic),
-- instead of 70% on a long end-of-lesson quiz. Stars: 3 at 90%, 2 at 75%, 1 at 50%. XP rules are unchanged.
-- The function body is patched in place so any later edits to the rest of it are kept.
do $$
declare d text; patched text;
begin
  d := pg_get_functiondef('public.learning_complete_lesson(text,integer,integer,integer,text,text)'::regprocedure);
  patched := replace(d, 'passed := pct >= 70;', 'passed := pct >= 50;');
  patched := replace(patched, 'when pct >= 90 then 3 when pct >= 80 then 2 when pct >= 70 then 1 else 0', 'when pct >= 90 then 3 when pct >= 75 then 2 when pct >= 50 then 1 else 0');
  if patched = d then raise notice 'learning_complete_lesson already patched'; return; end if;
  execute patched;
end $$;
