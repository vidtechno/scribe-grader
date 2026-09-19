import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const sql = readFileSync(
  join(process.cwd(), 'supabase/migrations/20260919130000_unified_go_plus_subscriptions.sql'),
  'utf8',
) + readFileSync(join(process.cwd(), 'supabase/migrations/20260919010000_teacher_mode.sql'), 'utf8');

describe('unified subscription database migration', () => {
  it('installs only Free, Go and Plus as active plan identifiers', () => {
    expect(sql).toContain("not in ('free','go','plus')");
    expect(sql).toContain("('go','Scorify Go'");
    expect(sql).toContain("('plus','Scorify Plus'");
  });

  it('keeps personal and Teacher usage in separate counters', () => {
    expect(sql).toContain('teacher_writing_used integer not null default 0');
    expect(sql).toContain('teacher_writing_used=teacher_writing_used+1');
    expect(sql).toContain('teacher_grammar_used=teacher_grammar_used+1');
    expect(sql).not.toContain('set writing_used=writing_used+1 where user_id=t.teacher_id');
  });

  it('charges successful Teacher attempts idempotently', () => {
    expect(sql).toContain("if a.submitted_at is not null then return coalesce(a.result,'{}'::jsonb)");
    expect(sql).toContain("if a.grade_status='graded' then return true");
    expect(sql).toContain("unique references public.teacher_attempts(id)");
  });

  it('preserves usage on a mid-period Go/Plus switch and resets on renewal', () => {
    expect(sql).toContain('preserve_usage:=');
    expect(sql).toContain("old.plan_type<>_plan_slug and old.expires_at>now()");
    expect(sql).toContain("public.admin_set_subscription(_user_id,s.plan_type,now(),now()+make_interval(days=>_days))");
  });
});
