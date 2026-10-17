# Two devices per account

- Each sign-in is a Supabase auth session. The website registers it with `device_register(device_id, name)`; `device_id` is a random id kept in the browser (localStorage), so signing in again on the same device replaces its older session.
- At most `device_max()` (2) devices are `active`. A third one is `pending`: the app shows `DeviceLimit` (list of the two active devices with "Chiqarish"). `device_revoke(session_id)` deletes that auth session (the other device is signed out at its next check, every 2 minutes or on focus) and lets the pending device in.
- Backstop: `device_sessions_sweep()` (pg_cron, every 5 minutes) deletes pending sessions older than 15 minutes and, after `device_policy.enforce_after`, sessions that never registered.
- The profile page has a "Faol qurilmalar" card with the same list.
- Limit of the approach: API calls made with a pending device's token (not through the website) work until the sweep removes the session (up to ~20 minutes); the access token of a removed device stays valid until it expires (up to 1 hour) but the website signs out within ~2 minutes.
- Turn the limit off: make `device_max()` return a large number.
