-- Least privilege for the API roles (RLS does not cover these privileges).
-- Profiles are created by the signup trigger and edited through column-limited UPDATE grants, so clients never need INSERT
-- (it would let someone with no profile row pick their own credits / is_premium values).
revoke insert on public.profiles from authenticated, anon;
-- TRUNCATE, TRIGGER and REFERENCES are never needed through the REST API.
revoke truncate, trigger, references on all tables in schema public from anon, authenticated;
alter default privileges in schema public revoke truncate, trigger, references on tables from anon, authenticated;
