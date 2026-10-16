-- Free plan: 1 Writing and 1 Speaking evaluation (Reading and Listening tests 1-3 are open in the app).
update public.subscription_plans set writing_limit = 1, speaking_limit = 1 where slug = 'free';
update public.subscriptions set writing_limit = 1, speaking_limit = 1
where plan_type = 'free' and (writing_limit <> 1 or speaking_limit <> 1);
