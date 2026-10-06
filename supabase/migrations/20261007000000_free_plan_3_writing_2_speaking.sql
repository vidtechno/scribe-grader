-- Free plan: 3 Writing evaluations and 2 Speaking evaluations (was 1 + 1).
-- New accounts, downgrades after a paid plan expires and admin changes all copy their limits from
-- subscription_plans, so updating the catalogue row is enough for them.
update public.subscription_plans set
  writing_limit=3, speaking_limit=2,
  description='Create an account and try AI-graded IELTS Writing and Speaking with full feedback.',
  features='["3 Writing evaluations with full feedback","2 Speaking evaluations","Daily Grammar test","Result history"]'::jsonb
where slug='free';

-- People who are already on Free get the new allowance too; what they have used so far is kept.
update public.subscriptions set writing_limit=3, speaking_limit=2
where plan_type='free' and (writing_limit<3 or speaking_limit<2);
