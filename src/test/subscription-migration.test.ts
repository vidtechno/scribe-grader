import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';

const read = (f: string) => readFileSync(join(process.cwd(), 'supabase/migrations', f), 'utf8');
const unified = read('20260919130000_unified_go_plus_subscriptions.sql');
const removal = read('20261002000000_remove_teacher_mode.sql');

describe('subscription database migrations', () => {
  it('installs only Free, Go and Plus as active plan identifiers', () => {
    expect(unified).toContain("not in ('free','go','plus')");
    expect(unified).toContain("('go','Scorify Go'");
    expect(unified).toContain("('plus','Scorify Plus'");
  });

  it('preserves usage on a mid-period Go/Plus switch and resets on renewal', () => {
    expect(removal).toContain('preserve_usage:=');
    expect(removal).toContain("old.plan_type<>_plan_slug and old.expires_at>now()");
  });

  it('removes Teacher Mode objects and no longer references them in subscription functions', () => {
    expect(removal).toContain('drop table if exists public.teacher_tests');
    const functions = removal.slice(0, removal.indexOf('-- Drop Teacher Mode'));
    expect(functions.replace(/^--.*$/gm, '').toLowerCase()).not.toContain('teacher');
  });
});
